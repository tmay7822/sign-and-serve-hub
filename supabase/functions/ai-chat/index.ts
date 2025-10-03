import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionId } = await req.json();

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // System prompt with business knowledge
    const systemPrompt = `You are a helpful AI assistant for Signed On Time Mobile Notary Services in Southwest Ohio.

BUSINESS INFORMATION:
- Owner: Terry
- Phone: (513) 226-9052
- Email: Terry@SignedOnTime.com
- Hours: Monday-Sunday, 7 AM - 10 PM
- Service Areas: Hamilton County (Cincinnati, Blue Ash, Springdale, Forest Park), Warren County (Mason, Lebanon, Springboro, Franklin), Montgomery County (Dayton, Kettering, Centerville, Vandalia), Butler County (Hamilton, West Chester, Oxford, Fairfield), Greene County (Beavercreek, Fairborn, Xenia), Clinton County (Wilmington, Blanchester, Sabina)

KEY SERVICES & PRICING:
- General Notary: $75 base (15-30 min)
- Loan Signings: $100 base (60-90 min) - Refinances, purchases, HELOCs, reverse mortgages
- Real Estate Documents: $100 base (30-45 min) - Deeds, transfers, investor docs
- Estate Plans (Wills/Trusts/POA): $125 base (45-60 min)
- Apostille Services: $225 base (30-45 min)
- Business Documents: $85 base (20-40 min) - I-9, corporate docs
- Healthcare Documents: $110 base (30-60 min) - Healthcare POA, living wills, HIPAA

TRAVEL FEES:
- Primary Zone (Hamilton, Butler, Warren): No travel fee
- Secondary Zone (Montgomery, Greene, Clinton): $25 travel fee
- Outside zones: $50 travel fee

EMERGENCY FEES:
- Same-day: +$25
- After-hours (after 6 PM or weekends): +$50
- Holidays: +$75

CREDENTIALS:
- NNA (National Notary Association) certified
- Background checked
- E&O Insured
- Bonded

COMMON QUESTIONS:
1. Mobile Service: Yes, we travel to homes, offices, hospitals, nursing homes
2. ID Required: Current government-issued photo ID (driver's license, state ID, passport, military ID)
3. After-Hours: Yes, evening and weekend appointments available
4. Same-Day: Often available, call for availability
5. Languages: Documents in any language OK, but signer must communicate in English or have translator present
6. Payment: Cash, check, Venmo, Zelle accepted

YOUR ROLE:
1. Answer questions about services, pricing, areas, credentials
2. Provide pricing estimates when asked (service base rate + travel fee + emergency fees if applicable)
3. Validate ZIP codes against service area
4. When visitor shows high interest (asks about booking, pricing, specific times), suggest they call (513) 226-9052 or offer to capture their contact info for callback
5. Be friendly, professional, and helpful
6. If you don't know something specific, offer to have Terry call them back

LEAD CAPTURE TRIGGERS:
- Visitor asks about specific appointment times
- Visitor mentions "quote" or "how much exactly"
- Visitor has complex questions requiring detailed consultation
- After 3+ engaged messages showing clear intent

When capturing leads, ask for:
1. Name
2. Phone number
3. What service they need
4. Their ZIP code (if not already provided)

Keep responses conversational, concise, and helpful. Focus on getting them to book or speak with Terry.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI service temporarily unavailable.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'AI service error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Update session message count
    if (sessionId) {
      await supabase
        .from('ai_chat_sessions')
        .update({ 
          message_count: messages.length,
        })
        .eq('id', sessionId);
    }

    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});