

## Consolidate Homepage JSON-LD into Single @graph Block

### Problem
Four separate JSON-LD blocks on the homepage (WebPage, LocalBusiness, ReviewSchema LocalBusiness, EnhancedFAQSchema FAQPage) are hurting structured data scores. Need to consolidate into a single `@graph` structure linked to Wikidata entities.

### Current Schema Sources on Homepage
1. **Seo component** (Helmet) → WebPage JSON-LD
2. **LocalBusinessSchema** → full LocalBusiness with aggregateRating
3. **ReviewSchema** → duplicate LocalBusiness with aggregateRating + individual reviews
4. **EnhancedFAQSchema** → FAQPage with 3 AEO questions (injected via useEffect)
5. **FAQSection** → 8 FAQ items rendered as UI accordion only (no schema)

### Complete FAQ List for Combined mainEntity Array (11 items, no duplicates)

From AEO questions (HeroSection):
1. "What does a mobile notary do?" → "A mobile notary travels to your location — home, office, hospital, or anywhere — to notarize documents in person..."
2. "How much does a mobile notary cost in Ohio?" → "Ohio notary fees start at $5 per notarization by law, plus a travel fee..."
3. "Do you offer same-day notary service?" → "Yes, Signed On Time offers same-day and emergency mobile notary service..."

From FAQSection:
4. "Do you travel to me?" → "Yes! We provide mobile notary services across Cincinnati–Dayton area..."
5. "What IDs do I need?" → "You'll need a current, government-issued photo ID..."
6. "Do you offer after-hours service?" → "Absolutely! We offer evening and weekend appointments..."
7. "What are your fees?" → "Our fees include travel within our service area plus per-signature notarization..."
8. "Which loan packages do you handle?" → "We handle all types: buyer packages, seller packages, refinances..."
9. "How far in advance should I schedule?" → "We often accommodate same-day requests, but we recommend scheduling 24-48 hours..."
10. "Are you insured and bonded?" → "Yes, we carry comprehensive Errors & Omissions insurance..."
11. "Can you notarize documents in languages other than English?" → "We can notarize documents in any language, but the signer must be able to communicate..."

### Confirmations
- **@id fields**: Business = `https://www.wikidata.org/wiki/Q139254455`, Terry May = `https://www.wikidata.org/wiki/Q139255055` ✅
- **No physical address** anywhere in schema ✅
- **aggregateRating** pulls dynamically from `useGoogleReviews` hook ✅
- **dangerouslySetInnerHTML** for all schema rendering ✅
- **No useEffect** DOM injection ✅
- **@type array** remains `["LocalBusiness", "ProfessionalService", "LegalService"]` ✅
- **name/alternateName** swapped per user request ✅

### Changes

**1. Create `src/components/SEO/HomepageSchema.tsx`** — New component that consolidates everything into a single `@graph` block:
- Uses `useGoogleReviews` for dynamic aggregateRating and individual reviews
- Accepts `faqs` prop (combined list of all 11 FAQ items)
- Renders single `<script type="application/ld+json">` via `dangerouslySetInnerHTML`
- Contains: LocalBusiness, FAQPage, Person (Terry May), WebSite, BreadcrumbList nodes — all using exact structure from user's specification
- `sameAs` array uses Wikidata URL + the full Google Maps URL provided by user (replacing `YOUR_GMB_CID` placeholder)

**2. Modify `src/pages/Index.tsx`**:
- Remove imports: `LocalBusinessSchema`, `ReviewSchema`, `EnhancedFAQSchema`
- Remove those 3 components from JSX
- Import new `HomepageSchema` component
- Pass `jsonLd` prop to `Seo` component as `null`/remove the default WebPage schema for homepage (or pass a flag to suppress it)
- Combine `aeoQuestions` + FAQSection questions into single array, pass to `HomepageSchema`

**3. Modify `src/components/Seo.tsx`**:
- Accept optional `jsonLd={null}` to suppress the default WebPage JSON-LD block (since it's now in the @graph). When `jsonLd` is explicitly `null`, skip rendering the `<script>` tag.

**4. `public/llms.txt`** — Wikidata lines already present (lines 17-18). No changes needed.

### Files Modified
- **Created**: `src/components/SEO/HomepageSchema.tsx`
- **Modified**: `src/pages/Index.tsx`
- **Modified**: `src/components/Seo.tsx`

Note: `LocalBusinessSchema.tsx`, `ReviewSchema.tsx`, and `EnhancedFAQSchema.tsx` are kept intact since they may be used on other pages. They are only removed from the homepage.

