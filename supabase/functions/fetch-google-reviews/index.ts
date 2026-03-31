import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GOOGLE_PLACES_API_KEY not configured" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Google Places API (New) - get place details with reviews
    // Place ID for Signed On Time (you may need to update this)
    const placeId = Deno.env.get("GOOGLE_PLACE_ID") || "ChIJExample"; // Will be set by user

    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`;
    const placesRes = await fetch(url, {
      headers: { "X-Goog-FieldMask": "reviews" },
    });

    if (!placesRes.ok) {
      const errText = await placesRes.text();
      console.error("Google API error:", errText);
      return new Response(
        JSON.stringify({ error: "Google API request failed", details: errText }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const placesData = await placesRes.json();
    const googleReviews = placesData.reviews || [];

    if (googleReviews.length === 0) {
      return new Response(
        JSON.stringify({ message: "No reviews returned from Google", newReviews: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch existing reviews to deduplicate
    const { data: existing } = await supabase
      .from("testimonials")
      .select("reviewer_name, review_date")
      .eq("source", "google");

    const existingSet = new Set(
      (existing || []).map((r: { reviewer_name: string; review_date: string | null }) =>
        `${r.reviewer_name}|${r.review_date}`
      )
    );

    const newReviews = [];
    for (const review of googleReviews) {
      const name = review.authorAttribution?.displayName || "Anonymous";
      const date = review.publishTime
        ? review.publishTime.split("T")[0]
        : new Date().toISOString().split("T")[0];
      const key = `${name}|${date}`;

      if (!existingSet.has(key)) {
        newReviews.push({
          reviewer_name: name,
          rating: review.rating || 5,
          review_text: review.text?.text || review.originalText?.text || "",
          review_date: date,
          service_type: "general",
          location: null,
          source: "google",
          verified: true,
        });
      }
    }

    if (newReviews.length > 0) {
      const { error } = await supabase.from("testimonials").insert(newReviews);
      if (error) {
        console.error("Insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to insert reviews", details: error.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(
      JSON.stringify({
        message: `Sync complete`,
        newReviews: newReviews.length,
        totalFromGoogle: googleReviews.length,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
