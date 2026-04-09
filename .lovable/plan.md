

## Update Structured Data for Service Area Business

### Problem

The current `LocalBusinessSchema.tsx` includes a physical `address` (Waynesville, OH 45068) and `geo` coordinates as if clients visit a storefront. This is incorrect — Signed On Time is a Service Area Business (SAB) that travels to clients. Google may penalize or misrepresent SABs that expose a physical address in schema.

Additionally, `ReviewSchema.tsx` on the homepage also outputs a `LocalBusiness` schema with a physical address (Cincinnati, OH 45202), creating the same SAB conflict.

### Changes — 2 files

**1. `src/components/SEO/LocalBusinessSchema.tsx`**

Update the homepage (no `serviceName`) branch:

- Change `@type` from `"LocalBusiness"` to `["LocalBusiness", "ProfessionalService", "LegalService"]`
- Remove `address` object (lines 67-73) — SABs should not expose a street address
- Remove `geo` object (lines 74-78) — replaced by serviceArea
- Remove `foundingDate` (line 54)
- Add `serviceArea` with GeoCircle (midpoint 39.5318, -84.0955, radius 80467 meters = ~50 miles)
- Keep existing `areaServed` array (6 counties)
- Update offer descriptions to include geographic context (e.g. "throughout Southwest Ohio", "at your home or care facility")
- Keep `aggregateRating`, `founder`, `sameAs`, `hasOfferCatalog`, `openingHours` unchanged

**2. `src/components/SEO/ReviewSchema.tsx`**

- Remove `address` object (lines 38-44) — same SAB reason; this schema should not contradict the main LocalBusiness schema
- This is a secondary LocalBusiness node for reviews; removing the address keeps it consistent

### No other files change

`Index.tsx`, `BreadcrumbSchema.tsx`, and service pages are unaffected — they already render these components correctly.

### Final homepage LocalBusiness schema output

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "LegalService"],
  "name": "Signed On Time Mobile Notary Services",
  "alternateName": "Signed On Time",
  "description": "Certified mobile notary serving Southwest Ohio...",
  "url": "https://www.signedontime.com",
  "telephone": "+15132269052",
  "email": "Terry@SignedOnTime.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Venmo, Zelle",
  "openingHours": ["Mo 07:00-22:00", ...],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 39.5318, "longitude": -84.0955 },
    "geoRadius": "80467"
  },
  "areaServed": [ ... 6 counties ... ],
  "hasOfferCatalog": { ... 6 services with updated descriptions ... },
  "sameAs": [ ... 3 URLs with TODO comments ... ],
  "founder": { ... Terry May ... },
  "aggregateRating": { ... dynamic from useGoogleReviews ... }
}
```

No physical address. No geo coordinates as a pin. The `serviceArea` GeoCircle tells Google this is a mobile service covering a 50-mile radius.

