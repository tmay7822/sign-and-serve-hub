import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GHLWebhookPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  businessName: string;
  pricingTier: "starter" | "professional" | "enterprise";
  customData?: Record<string, unknown>;
}

// Generate a subdomain from business name
function generateSubdomain(businessName: string): string {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 30);
}

// Generate a temporary password
function generateTempPassword(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Map pricing tier to Stripe price IDs (placeholder - update with real IDs)
const STRIPE_PRICE_MAP: Record<string, string> = {
  starter: 'price_starter_monthly',
  professional: 'price_professional_monthly',
  enterprise: 'price_enterprise_monthly',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: GHLWebhookPayload = await req.json();
    console.log("Received GHL webhook payload:", JSON.stringify(payload, null, 2));

    // Validate required fields
    if (!payload.email || !payload.businessName || !payload.firstName || !payload.lastName) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: email, businessName, firstName, lastName" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase admin client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    // Generate unique subdomain
    const baseSubdomain = generateSubdomain(payload.businessName);
    let subdomain = baseSubdomain;
    let suffix = 1;

    // Check for subdomain conflicts
    while (true) {
      const { data: existing } = await supabaseAdmin
        .from("tenants")
        .select("id")
        .eq("subdomain", subdomain)
        .single();
      
      if (!existing) break;
      subdomain = `${baseSubdomain}-${suffix}`;
      suffix++;
    }

    // Generate temporary password
    const tempPassword = generateTempPassword();

    // Step 1: Create tenant record
    const { data: tenant, error: tenantError } = await supabaseAdmin
      .from("tenants")
      .insert({
        name: payload.businessName,
        subdomain: subdomain,
        status: "pending",
        settings: {
          pricing_tier: payload.pricingTier || "starter",
          contact_email: payload.email,
          contact_phone: payload.phone || null,
          onboarding_completed: false,
        },
      })
      .select()
      .single();

    if (tenantError) {
      console.error("Error creating tenant:", tenantError);
      return new Response(
        JSON.stringify({ error: "Failed to create tenant", details: tenantError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Created tenant:", tenant.id);

    // Step 2: Create auth user
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: payload.email,
      password: tempPassword,
      email_confirm: true,
      user_metadata: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        tenant_id: tenant.id,
      },
    });

    if (authError) {
      console.error("Error creating auth user:", authError);
      // Rollback tenant creation
      await supabaseAdmin.from("tenants").delete().eq("id", tenant.id);
      return new Response(
        JSON.stringify({ error: "Failed to create user", details: authError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Created auth user:", authUser.user.id);

    // Step 3: Assign admin role
    const { error: roleError } = await supabaseAdmin.from("user_roles").insert({
      user_id: authUser.user.id,
      role: "admin",
    });

    if (roleError) {
      console.error("Error assigning role:", roleError);
      // Non-fatal, continue
    }

    // Step 4: Link user to tenant
    const { error: tenantUserError } = await supabaseAdmin.from("tenant_users").insert({
      tenant_id: tenant.id,
      user_id: authUser.user.id,
      role: "owner",
    });

    if (tenantUserError) {
      console.error("Error linking user to tenant:", tenantUserError);
      // Non-fatal, continue
    }

    // Step 5: Create Stripe customer and subscription (if key available)
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    let stripeCustomerId: string | null = null;
    let stripeSubscriptionId: string | null = null;

    if (stripeSecretKey) {
      try {
        // Create Stripe customer
        const customerResponse = await fetch("https://api.stripe.com/v1/customers", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${stripeSecretKey}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: payload.email,
            name: `${payload.firstName} ${payload.lastName}`,
            "metadata[tenant_id]": tenant.id,
            "metadata[business_name]": payload.businessName,
          }),
        });

        const customer = await customerResponse.json();
        if (customer.id) {
          stripeCustomerId = customer.id;
          console.log("Created Stripe customer:", stripeCustomerId);

          // Create subscription
          const priceId = STRIPE_PRICE_MAP[payload.pricingTier || "starter"];
          const subscriptionResponse = await fetch("https://api.stripe.com/v1/subscriptions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              customer: stripeCustomerId,
              "items[0][price]": priceId,
              payment_behavior: "default_incomplete",
              "payment_settings[save_default_payment_method]": "on_subscription",
              "expand[0]": "latest_invoice.payment_intent",
              "metadata[tenant_id]": tenant.id,
            }),
          });

          const subscription = await subscriptionResponse.json();
          if (subscription.id) {
            stripeSubscriptionId = subscription.id;
            console.log("Created Stripe subscription:", stripeSubscriptionId);
          }
        }
      } catch (stripeError) {
        console.error("Stripe error (non-fatal):", stripeError);
        // Continue without Stripe - tenant can set up billing later
      }
    } else {
      console.warn("STRIPE_SECRET_KEY not configured - skipping Stripe integration");
    }

    // Step 6: Create subscription record in database
    if (stripeCustomerId) {
      await supabaseAdmin.from("subscriptions").insert({
        tenant_id: tenant.id,
        stripe_customer_id: stripeCustomerId,
        stripe_subscription_id: stripeSubscriptionId,
        status: stripeSubscriptionId ? "incomplete" : "pending",
        plan_id: payload.pricingTier || "starter",
        current_period_start: new Date().toISOString(),
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      });
    }

    // Step 7: Send welcome email (if Resend key available)
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const loginUrl = `https://${subdomain}.signedontime.com/auth`;
        
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Notary in a Box <onboarding@signedontime.com>",
            to: [payload.email],
            subject: "Welcome to Notary in a Box - Your Account is Ready!",
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #1e3a5f, #2c5282); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                  .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
                  .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d69e2e; }
                  .button { display: inline-block; background: #d69e2e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
                  .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Welcome to Notary in a Box!</h1>
                    <p>Your mobile notary website is ready</p>
                  </div>
                  <div class="content">
                    <p>Hi ${payload.firstName},</p>
                    <p>Great news! Your Notary in a Box account has been created successfully. You now have a fully-featured mobile notary website ready to grow your business.</p>
                    
                    <div class="credentials">
                      <h3>🔐 Your Login Credentials</h3>
                      <p><strong>Email:</strong> ${payload.email}</p>
                      <p><strong>Temporary Password:</strong> ${tempPassword}</p>
                      <p><strong>Your Site:</strong> <a href="${loginUrl}">${subdomain}.signedontime.com</a></p>
                    </div>
                    
                    <p><strong>⚠️ Important:</strong> Please change your password after your first login.</p>
                    
                    <p style="text-align: center; margin: 30px 0;">
                      <a href="${loginUrl}" class="button">Login to Your Dashboard</a>
                    </p>
                    
                    <h3>🚀 Getting Started</h3>
                    <ol>
                      <li>Log in to your admin dashboard</li>
                      <li>Complete the onboarding wizard to customize your site</li>
                      <li>Add your business info, logo, and service areas</li>
                      <li>Set up your booking calendar</li>
                      <li>Launch and start accepting clients!</li>
                    </ol>
                    
                    <p>Need help? Reply to this email or check out our documentation.</p>
                    
                    <p>Best regards,<br>The Notary in a Box Team</p>
                  </div>
                  <div class="footer">
                    <p>© ${new Date().getFullYear()} Signed On Time. All rights reserved.</p>
                  </div>
                </div>
              </body>
              </html>
            `,
          }),
        });
        console.log("Welcome email sent to:", payload.email);
      } catch (emailError) {
        console.error("Email error (non-fatal):", emailError);
        // Continue without email - can resend later
      }
    } else {
      console.warn("RESEND_API_KEY not configured - skipping welcome email");
    }

    // Update tenant status to active
    await supabaseAdmin
      .from("tenants")
      .update({ status: "active" })
      .eq("id", tenant.id);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        tenant_id: tenant.id,
        subdomain: subdomain,
        user_id: authUser.user.id,
        stripe_customer_id: stripeCustomerId,
        message: "Client provisioned successfully",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
