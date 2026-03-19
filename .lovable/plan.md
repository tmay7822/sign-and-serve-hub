

## Align H1/H2 with GMB Categories + Add AEO Structured Content

**Problem**: The current H1 says "Mobile Notary Services" and the H2 is a pipe-separated keyword string. These don't match GMB profile categories (which Google uses for AI Overview and local pack answers). The headings also lack the question-answer format that AI engines extract for AEO (Answer Engine Optimization).

**GMB Primary Category**: "Notary Public"
**GMB Additional Categories** (typical for this business): "Mobile Notary", "Loan Signing Agent", "Legal Document Assistant"

---

### Changes

**1. `src/components/HeroSection.tsx` — Align H1/H2 with GMB categories + add AEO content**

Update headings to match GMB category language exactly:

- **H1**: "Notary Public & Mobile Notary Service in Cincinnati & Dayton, Ohio" — matches GMB primary + secondary categories and the top search queries
- **H2** (inside the card): "Loan Signing Agent | Notary Public | Mobile Notary Near You" — mirrors GMB additional categories instead of generic service keywords
- **H3** (keep): Service area line stays for geo-relevance

Add an AEO-optimized Q&A block below the intent buttons — a visually subtle `<section>` with 3 short question-answer pairs using proper `<h3>` headings that AI engines can extract:
- "What does a mobile notary do?" → 2-sentence answer
- "How much does a mobile notary cost in Ohio?" → 2-sentence answer with price range
- "Do you offer same-day notary service?" → 2-sentence answer

These render as small, clean text blocks (not an accordion) so they're visible to crawlers and AI extractors while not overwhelming users.

**2. `src/components/SEO/LocalBusinessSchema.tsx` — Add GMB-aligned `additionalType` fields**

Add to the LocalBusiness schema:
- `"additionalType"` array with GMB category URLs
- `"knowsAbout"` array listing service specialties
- Ensure `"@type"` uses `["LocalBusiness", "NotaryPublic"]` (Schema.org subtype, not standard but used by some engines)

**3. `src/pages/Index.tsx` — Add homepage FAQ schema for AEO**

Add an `EnhancedFAQSchema` component to the homepage that injects `FAQPage` structured data for the 3 Q&A pairs from the hero section. This is what Google and AI engines use for featured snippets and AI Overviews.

---

### Files to Modify

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Rewrite H1/H2 to match GMB categories; add 3 AEO Q&A blocks below intent buttons |
| `src/components/SEO/LocalBusinessSchema.tsx` | Add `additionalType`, `knowsAbout` to schema |
| `src/pages/Index.tsx` | Add `EnhancedFAQSchema` with homepage Q&A structured data |

