

## Featured Snippet, Voice Search, and Client-First Content Updates

### Overview
Add speakable schema for voice search, reformat FAQ answers for featured snippets, add situation-based summary blocks to 6 service pages, add author schema with Wikidata to 6 county hub pages, and add a credentials section to the About page.

---

### PART 1 — Speakable Schema

**5 answers receiving `speakable-answer` class** (all are already direct, client-friendly answers -- no changes to text):

1. **"What does a mobile notary do?"** → "A mobile notary travels to your location — home, office, hospital, or anywhere — to notarize documents in person..." (HeroSection AEO block)
2. **"Do you travel to me?"** → "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location..." (FAQSection accordion + FAQ page)
3. **"Do you offer same-day notary service?"** → "Yes, Signed On Time offers same-day and emergency mobile notary service..." (HeroSection AEO block)
4. **"What IDs do I need?"** → "You'll need a current, government-issued photo ID..." (FAQSection accordion + FAQ page)
5. **"Do you offer after-hours service?"** → "Absolutely! We offer evening and weekend appointments..." (FAQSection accordion + FAQ page)

**Files:**
- `src/components/HeroSection.tsx` — Add `speakable-answer` class to answer `<p>` tags for items #1 and #3
- `src/components/FAQSection.tsx` — Add `speakable-answer` class to `AccordionContent` for items #2, #4, #5
- `src/components/SEO/HomepageSchema.tsx` — Add WebPage node with SpeakableSpecification to `@graph` array
- `src/pages/FAQ.tsx` — Add separate JSON-LD block for FAQ page speakable schema via `dangerouslySetInnerHTML`; also add `speakable-answer` class to matching FAQ accordion items in `FAQSection` (items #2, #4, #5 are shared)

The FAQ page reuses `FAQSection` component, so the CSS classes added there apply to both homepage and FAQ page automatically.

---

### PART 2 — FAQ Answer Reformatting

Reviewing all FAQ answers across the specified pages for preamble issues:

**`src/pages/FAQ.tsx` / `src/components/FAQSection.tsx`** — All 8 answers already start with direct responses ("Yes!", "You'll need...", "Absolutely!", etc.). **No changes needed.**

**`src/pages/GeneralNotary.tsx`** — Uses `ServiceHubEnhanced` with quickAnswer: "A mobile notary comes to your location to witness signatures..." — already direct. **No change.**

**`src/pages/LoanSignings.tsx`** — quickAnswer: "A certified loan signing agent guides you through signing mortgage documents..." — already direct. **No change.**

**`src/pages/VehiclesDMV.tsx`** — quickAnswer: "Yes, Ohio requires the seller's signature on the vehicle title to be notarized." — already direct. **No change.**

**`src/pages/HealthcareNotary.tsx`** — Uses `ServiceHubTemplate` (no quickAnswer prop). No FAQ answers to reformat in the page file itself. **No change.**

**Before/after: No reformatting needed** — all existing answers already lead with direct responses. No credential language present.

---

### PART 3 — Situation-Based Summary Blocks on Service Pages

Create a reusable `ServiceSummaryBlock` component for the callout box styling (brand color left border, slightly larger text, prominent CTA button). Then add it to 6 service pages immediately after the H1 in the `ServiceHubEnhanced` hero section.

Since these pages all use `ServiceHubEnhanced`, the cleanest approach is to add an optional `summaryBlock` prop to `ServiceHubEnhanced` that renders between the H1 and the CTA buttons.

**New component: `src/components/ServiceSummaryBlock.tsx`**
- Props: `text: string`, `buttons: Array<{type: 'call' | 'book', label?: string}>`
- Styled as: `border-l-4 border-primary bg-primary/5 rounded-r-lg p-6`, text at `text-lg`, buttons inline

**Summary blocks (all lead with client situation, confirmed no credentials):**

| Page | Summary Text | Buttons |
|------|-------------|---------|
| HealthcareNotary | "We can be there today. Call or text (513) 226-9052 and we will come to your hospital, nursing home, or care facility anywhere in Southwest Ohio." | Call (513) 226-9052 |
| LoanSignings | "Buying a home or refinancing? We come to you — same-day closings available throughout Southwest Ohio. Call or book online." | Book Now, Call Now |
| EstatePlans | "Need a will, trust, or power of attorney notarized? We come to your home, attorney's office, or care facility. Same-day and evening appointments available." | Book Now, Call Now |
| GeneralNotary | "Need something notarized today? We come to you — home, office, hospital, or anywhere that works. Same-day appointments available 7 days a week." | Book Now, Call Now |
| VehiclesDMV | "Selling a car in Ohio? The title needs to be notarized. We come to your location — no BMV lines, no waiting. Same-day available." | Book Now, Call Now |
| Apostille | "Need a document authenticated for use in another country? We prepare and notarize Ohio apostille documents. Call for a free consultation." | Call (513) 226-9052 |

**Files modified:**
- `src/components/ServiceSummaryBlock.tsx` (new)
- `src/components/templates/ServiceHubEnhanced.tsx` — Add optional `summaryBlock` prop, render after H1/summary, before CTA buttons
- `src/pages/HealthcareNotary.tsx` — Pass summaryBlock prop (requires switching to ServiceHubEnhanced since it currently uses ServiceHubTemplate)
- `src/pages/LoanSignings.tsx` — Pass summaryBlock prop
- `src/pages/EstatePlans.tsx` — Pass summaryBlock prop
- `src/pages/GeneralNotary.tsx` — Pass summaryBlock prop
- `src/pages/VehiclesDMV.tsx` — Pass summaryBlock prop
- `src/pages/Apostille.tsx` — Pass summaryBlock prop

---

### PART 4 — Author Schema with Wikidata on County Hub Pages

Add author JSON-LD block to `CountyHubTemplate` so all 6 county pages get it automatically. The template already renders a `<script>` tag for `breadcrumbSchema` via `dangerouslySetInnerHTML`. Add a second `<script>` tag for the author/article schema.

**File: `src/components/templates/CountyHubTemplate.tsx`**
- Add a `<script type="application/ld+json">` block with the author Person schema using Wikidata IDs, rendered via `dangerouslySetInnerHTML`

Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Terry May",
    "@id": "https://www.wikidata.org/wiki/Q139255055",
    "sameAs": "https://www.wikidata.org/wiki/Q139255055",
    "jobTitle": "Certified Notary Public and Loan Signing Agent",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Signed On Time",
      "url": "https://www.signedontime.com",
      "@id": "https://www.wikidata.org/wiki/Q139254455"
    }
  }
}
```

No visible changes. No individual county page files need modification -- the template handles it.

---

### PART 5 — About Page Credentials Section

**File: `src/pages/AboutUs.tsx`**
- Add a "Credentials and Certifications" section **before** the "Our Values" section (so it's not the first thing clients see)
- Clean list with checkmark icons
- Items: NNA Certified Notary Public, NNA Certified Loan Signing Agent, Background Screened and Verified, Errors and Omissions Insurance, 25+ Years Commercial and Residential Lending Experience, placeholder for additional
- Additive only -- no existing content removed or replaced

---

### Confirmations
1. All 5 speakable answers are direct, client-friendly -- confirmed above
2. No FAQ answers need reformatting -- all already start with direct responses
3. All 6 summary blocks lead with client situation, not credentials -- confirmed above
4. About page credentials section is additive, placed before Values section

### Files Created
- `src/components/ServiceSummaryBlock.tsx`

### Files Modified
- `src/components/HeroSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/SEO/HomepageSchema.tsx`
- `src/pages/FAQ.tsx`
- `src/components/templates/ServiceHubEnhanced.tsx`
- `src/components/templates/CountyHubTemplate.tsx`
- `src/pages/HealthcareNotary.tsx`
- `src/pages/LoanSignings.tsx`
- `src/pages/EstatePlans.tsx`
- `src/pages/GeneralNotary.tsx`
- `src/pages/VehiclesDMV.tsx`
- `src/pages/Apostille.tsx`
- `src/pages/AboutUs.tsx`

