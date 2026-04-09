

## Add Reliable JSON-LD FAQ Schema to 7 Pages

### Current State

All 7 pages already have FAQ content and schema injection — but via `useEffect` DOM manipulation in `FAQAccordion` (6 service pages) and directly in `FAQ.tsx`. This approach is fragile for prerendering and may not be picked up by Google's crawler reliably.

**Existing FAQ counts from `serviceContent.ts`:**

| Page | Service ID | Existing FAQs |
|------|-----------|---------------|
| GeneralNotary | `general-notary` | 8 |
| LoanSignings | `loan-signings` | 8 |
| EstatePlans | `estate-plans` | 8 |
| VehiclesDMV | `vehicles-dmv` | 8 |
| Apostille | `apostille` | 8 |
| HealthcareNotary | `healthcare-notary` | 8 |
| FAQ | (hardcoded) | 8 |

All pages already exceed the 3-item minimum. No additional FAQ content is needed.

### Problem

`FAQAccordion` injects schema via `useEffect` + `document.createElement('script')`. This:
1. Only runs client-side after hydration
2. May be missed by prerender crawlers
3. Gets removed on unmount, creating race conditions with crawl timing

### Solution

Replace the `useEffect` DOM injection in `FAQAccordion` with inline `<script>` rendering via `dangerouslySetInnerHTML` in the component's JSX return. This ensures the schema is present in the initial HTML render and picked up by all crawlers.

For `FAQ.tsx`, replace its `useEffect` schema injection with the same inline approach.

### Changes — 2 files

**1. `src/components/FAQAccordion.tsx`**
- Remove the `useEffect` that creates/injects the schema script tag
- Remove `isBrowser` import (no longer needed)
- Add inline `<script type="application/ld+json" dangerouslySetInnerHTML={...} />` at the top of the component's return JSX, rendering the same FAQPage schema
- This single change fixes all 6 service pages at once (GeneralNotary, LoanSignings, EstatePlans, VehiclesDMV, Apostille, HealthcareNotary)

**2. `src/pages/FAQ.tsx`**
- Remove the `useEffect` block that creates/injects the FAQ schema script tag
- Add inline `<script type="application/ld+json" dangerouslySetInnerHTML={...} />` in the component return with the same 8 FAQ items
- Keep the rest of the page unchanged

### What this achieves
- FAQ schema is in the DOM on first render, not deferred to useEffect
- Google's crawler and prerender service will reliably see the structured data
- All 7 pages get proper FAQPage schema with their real FAQ content (8 items each, 56 total)
- No visible UI changes — only the schema delivery mechanism changes

### JSON-LD example output (GeneralNotary page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What ID do I need for notarization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need a current, government-issued photo ID such as a driver's license, passport, or state ID card. The ID must not be expired and must clearly show your photo and signature."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize documents in languages other than English?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as long as the notarial certificate is in English and you can communicate with the notary in English to confirm your identity and willingness to sign."
      }
    }
    // ... 6 more items
  ]
}
```

### JSON-LD example output (FAQ page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you travel to me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area."
      }
    },
    {
      "@type": "Question",
      "name": "What IDs do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature."
      }
    }
    // ... 6 more items
  ]
}
```

### Files changed (2 total)

| File | Change | FAQ items |
|------|--------|-----------|
| `src/components/FAQAccordion.tsx` | Replace useEffect schema with inline dangerouslySetInnerHTML | Affects 6 pages (8 items each) |
| `src/pages/FAQ.tsx` | Replace useEffect schema with inline dangerouslySetInnerHTML | 8 items |

