import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, stripe-signature",
};

// Stripe event types we handle
type StripeEventType =
  | "customer.subscription.created"
  | "customer.subscription.updated"
  | "customer.subscription.deleted"
  | "invoice.payment_succeeded"
  | "invoice.payment_failed"
  | "checkout.session.completed";

interface StripeEvent {
  id: string;
  type: StripeEventType;
  data: {
    object: Record<string, unknown>;
  };
}

// Verify Stripe webhook signature
async function verifyStripeSignature(
  payload: string,
  signature: string,
  webhookSecret: string
): Promise<boolean> {
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(webhookSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const parts = signature.split(",");
    const timestampPart = parts.find((p) => p.startsWith("t="));
    const signaturePart = parts.find((p) => p.startsWith("v1="));

    if (!timestampPart || !signaturePart) return false;

    const timestamp = timestampPart.substring(2);
    const expectedSignature = signaturePart.substring(3);

    const signedPayload = `${timestamp}.${payload}`;
    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(signedPayload)
    );

    const computedSignature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return computedSignature === expectedSignature;
  } catch (error) {
    console.error("Signature verification error:", error);
    return false;
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    const stripeSignature = req.headers.get("stripe-signature");
    const payload = await req.text();

    // Verify signature if webhook secret is configured
    if (webhookSecret && stripeSignature) {
      const isValid = await verifyStripeSignature(payload, stripeSignature, webhookSecret);
      if (!isValid) {
        console.error("Invalid Stripe signature");
        return new Response(
          JSON.stringify({ error: "Invalid signature" }),
          { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else if (!webhookSecret) {
      console.warn("STRIPE_WEBHOOK_SECRET not configured - skipping signature verification");
    }

    const event: StripeEvent = JSON.parse(payload);
    console.log("Received Stripe event:", event.type, event.id);

    // Initialize Supabase admin client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const eventObject = event.data.object;

    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscriptionId = eventObject.id as string;
        const customerId = eventObject.customer as string;
        const status = eventObject.status as string;
        const currentPeriodStart = new Date((eventObject.current_period_start as number) * 1000).toISOString();
        const currentPeriodEnd = new Date((eventObject.current_period_end as number) * 1000).toISOString();
        const cancelAtPeriodEnd = eventObject.cancel_at_period_end as boolean;

        // Get plan from subscription items
        const items = eventObject.items as { data: Array<{ price: { id: string; product: string } }> };
        const planId = items?.data?.[0]?.price?.id || "unknown";

        console.log(`Subscription ${event.type}:`, { subscriptionId, customerId, status });

        // Update subscription in database
        const { error: updateError } = await supabaseAdmin
          .from("subscriptions")
          .update({
            stripe_subscription_id: subscriptionId,
            status: status,
            plan_id: planId,
            current_period_start: currentPeriodStart,
            current_period_end: currentPeriodEnd,
            cancel_at_period_end: cancelAtPeriodEnd,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId);

        if (updateError) {
          console.error("Error updating subscription:", updateError);
        }

        // Update tenant status based on subscription status
        const { data: subscription } = await supabaseAdmin
          .from("subscriptions")
          .select("tenant_id")
          .eq("stripe_customer_id", customerId)
          .single();

        if (subscription?.tenant_id) {
          let tenantStatus = "active";
          if (status === "past_due") tenantStatus = "suspended";
          else if (status === "canceled" || status === "unpaid") tenantStatus = "inactive";
          else if (status === "trialing") tenantStatus = "trial";

          await supabaseAdmin
            .from("tenants")
            .update({ status: tenantStatus })
            .eq("id", subscription.tenant_id);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscriptionId = eventObject.id as string;
        const customerId = eventObject.customer as string;

        console.log("Subscription deleted:", { subscriptionId, customerId });

        // Update subscription status
        await supabaseAdmin
          .from("subscriptions")
          .update({
            status: "canceled",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_subscription_id", subscriptionId);

        // Suspend tenant
        const { data: subscription } = await supabaseAdmin
          .from("subscriptions")
          .select("tenant_id")
          .eq("stripe_subscription_id", subscriptionId)
          .single();

        if (subscription?.tenant_id) {
          await supabaseAdmin
            .from("tenants")
            .update({ status: "suspended" })
            .eq("id", subscription.tenant_id);
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const customerId = eventObject.customer as string;
        const subscriptionId = eventObject.subscription as string;
        const amountPaid = eventObject.amount_paid as number;

        console.log("Payment succeeded:", { customerId, subscriptionId, amountPaid });

        // Update subscription status to active
        if (subscriptionId) {
          await supabaseAdmin
            .from("subscriptions")
            .update({
              status: "active",
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_subscription_id", subscriptionId);

          // Ensure tenant is active
          const { data: subscription } = await supabaseAdmin
            .from("subscriptions")
            .select("tenant_id")
            .eq("stripe_subscription_id", subscriptionId)
            .single();

          if (subscription?.tenant_id) {
            await supabaseAdmin
              .from("tenants")
              .update({ status: "active" })
              .eq("id", subscription.tenant_id);
          }
        }
        break;
      }

      case "invoice.payment_failed": {
        const customerId = eventObject.customer as string;
        const subscriptionId = eventObject.subscription as string;
        const attemptCount = eventObject.attempt_count as number;

        console.log("Payment failed:", { customerId, subscriptionId, attemptCount });

        // Update subscription status to past_due
        if (subscriptionId) {
          await supabaseAdmin
            .from("subscriptions")
            .update({
              status: "past_due",
              updated_at: new Date().toISOString(),
            })
            .eq("stripe_subscription_id", subscriptionId);

          // Suspend tenant after multiple failures
          if (attemptCount >= 3) {
            const { data: subscription } = await supabaseAdmin
              .from("subscriptions")
              .select("tenant_id")
              .eq("stripe_subscription_id", subscriptionId)
              .single();

            if (subscription?.tenant_id) {
              await supabaseAdmin
                .from("tenants")
                .update({ status: "suspended" })
                .eq("id", subscription.tenant_id);
            }
          }
        }
        break;
      }

      case "checkout.session.completed": {
        const customerId = eventObject.customer as string;
        const subscriptionId = eventObject.subscription as string;
        const clientReferenceId = eventObject.client_reference_id as string;

        console.log("Checkout completed:", { customerId, subscriptionId, clientReferenceId });

        // If we have a client reference ID (tenant_id), link the subscription
        if (clientReferenceId && customerId) {
          await supabaseAdmin
            .from("subscriptions")
            .upsert({
              tenant_id: clientReferenceId,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              status: "active",
              current_period_start: new Date().toISOString(),
              current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            }, {
              onConflict: "tenant_id",
            });
        }
        break;
      }

      default:
        console.log("Unhandled event type:", event.type);
    }

    return new Response(
      JSON.stringify({ received: true, event_id: event.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: "Webhook processing failed", details: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
