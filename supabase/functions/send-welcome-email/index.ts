import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  firstName: string;
  lastName?: string;
  subdomain: string;
  tempPassword?: string;
  businessName?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify JWT authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - missing auth token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: authError } = await supabase.auth.getClaims(token);

    if (authError || !claims?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: WelcomeEmailRequest = await req.json();
    console.log("Sending welcome email to:", payload.email);

    // Validate required fields
    if (!payload.email || !payload.firstName || !payload.subdomain) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: email, firstName, subdomain" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const loginUrl = `https://${payload.subdomain}.signedontime.com/auth`;
    const fullName = payload.lastName 
      ? `${payload.firstName} ${payload.lastName}` 
      : payload.firstName;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a5f, #2c5282); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0 0 10px; font-size: 28px; }
          .header p { margin: 0; opacity: 0.9; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
          .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d69e2e; }
          .credentials h3 { margin-top: 0; color: #1e3a5f; }
          .button { display: inline-block; background: #d69e2e; color: white !important; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 0; }
          .button:hover { background: #b7891e; }
          .steps { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .steps h3 { margin-top: 0; color: #1e3a5f; }
          .steps ol { padding-left: 20px; margin: 0; }
          .steps li { margin: 10px 0; }
          .warning { background: #fef3cd; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #ffc107; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; background: #f9fafb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Welcome to Notary in a Box!</h1>
            <p>Your mobile notary website is ready to launch</p>
          </div>
          <div class="content">
            <p>Hi ${payload.firstName},</p>
            <p>Congratulations! Your ${payload.businessName ? `<strong>${payload.businessName}</strong>` : ''} notary website has been successfully created and is ready for you to customize.</p>
            
            <div class="credentials">
              <h3>🔐 Your Login Details</h3>
              <p><strong>Email:</strong> ${payload.email}</p>
              ${payload.tempPassword ? `<p><strong>Temporary Password:</strong> ${payload.tempPassword}</p>` : ''}
              <p><strong>Your Dashboard:</strong> <a href="${loginUrl}">${payload.subdomain}.signedontime.com</a></p>
            </div>
            
            ${payload.tempPassword ? `
            <div class="warning">
              <strong>⚠️ Security Notice:</strong> Please change your password immediately after your first login to keep your account secure.
            </div>
            ` : ''}
            
            <p style="text-align: center; margin: 25px 0;">
              <a href="${loginUrl}" class="button">Access Your Dashboard →</a>
            </p>
            
            <div class="steps">
              <h3>🚀 Quick Start Guide</h3>
              <ol>
                <li><strong>Log in</strong> to your admin dashboard using the credentials above</li>
                <li><strong>Complete the setup wizard</strong> to add your business details</li>
                <li><strong>Upload your logo</strong> and customize your branding</li>
                <li><strong>Add your service areas</strong> (cities, counties, zip codes)</li>
                <li><strong>Connect your calendar</strong> for online booking</li>
                <li><strong>Go live!</strong> Share your site and start getting clients</li>
              </ol>
            </div>
            
            <p>Your site comes pre-loaded with:</p>
            <ul>
              <li>✅ SEO-optimized service pages</li>
              <li>✅ Mobile-responsive design</li>
              <li>✅ Online booking integration</li>
              <li>✅ Quote calculator</li>
              <li>✅ Blog & content management</li>
              <li>✅ Google review integration</li>
            </ul>
            
            <p>Need help getting started? Reply to this email and our team will assist you.</p>
            
            <p>Welcome aboard! 🎉</p>
            <p><strong>The Notary in a Box Team</strong></p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Signed On Time Mobile Notary Services</p>
            <p style="font-size: 12px; color: #9ca3af;">
              You're receiving this because you signed up for Notary in a Box.<br>
              <a href="mailto:support@signedontime.com">Contact Support</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Notary in a Box <onboarding@signedontime.com>",
        to: [payload.email],
        subject: `Welcome to Notary in a Box, ${payload.firstName}! 🎉`,
        html: emailHtml,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", result);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: result }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully:", result.id);

    return new Response(
      JSON.stringify({ success: true, email_id: result.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
