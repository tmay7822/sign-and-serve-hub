

## Add LocalBusiness, AggregateRating, and Breadcrumb Schema

### Part 1 — LocalBusiness Schema on Homepage

**`src/components/SEO/LocalBusinessSchema.tsx`** — Full rewrite from `useEffect` DOM injection to inline `dangerouslySetInnerHTML`. When rendered without `serviceName` prop (homepage case), output the exact user-specified LocalBusiness JSON-LD with:
- `@type: "LocalBusiness"`, name, alternateName, full description
- address: Waynesville, OH 45068
- geo: 39.5318, -84.0955
- openingHours: 7 days, 07:00-22:00
- 6 areaServed County entries
- hasOfferCatalog with 6 services (Loan Signing, Estate Planning, Apostille, Healthcare, Vehicle Title, General Notary) — each with descriptions
- founder: Terry May with credentials
- sameAs array with TODO comments for GMB, Facebook, LinkedIn URLs
- Dynamic `aggregateRating` pulled from `useGoogleReviews` hook

When rendered with `serviceName` prop (service pages), keep existing Service schema but also switch to inline rendering.

**`src/pages/Index.tsx`** — No changes needed; already renders `<LocalBusinessSchema />`.

### Part 2 — AggregateRating on Reviews Page

**`src/pages/Reviews.tsx`** — Already renders `<ReviewSchema />` which already uses inline `dangerouslySetInnerHTML` and pulls dynamic `averageRating`/`totalReviews` from `useGoogleReviews`, including the first 5 individual reviews. This already satisfies the requirement. No changes needed.

### Part 3 — Breadcrumb Schema on Service Pages

**`src/components/SEO/BreadcrumbSchema.tsx`** — Rewrite from `useEffect` DOM injection to inline `dangerouslySetInnerHTML`. Keep the same `generateBreadcrumbsFromPath` logic but render the schema inline. This fixes all 6 service pages at once since `ServiceHubEnhanced` already renders `<BreadcrumbSchema />`.

The breadcrumb output for e.g. `/loan-signings` will be:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.signedontime.com/" },
    { "@type": "ListItem", "position": 2, "name": "Loan Signings", "item": "https://www.signedontime.com/loan-signings" }
  ]
}
```

### Complete JSON-LD for Part 1 (Homepage LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Signed On Time Mobile Notary Services",
  "alternateName": "Signed On Time",
  "description": "Certified mobile notary serving Southwest Ohio including Hamilton, Warren, Butler, Montgomery, Greene and Clinton counties. Loan signings, estate planning, apostille, healthcare directives, vehicle titles and general notary services. Same-day appointments available 7 days a week.",
  "url": "https://www.signedontime.com",
  "telephone": "+15132269052",
  "email": "Terry@SignedOnTime.com",
  "foundingDate": "1999",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check, Venmo, Zelle",
  "openingHours": ["Mo 07:00-22:00","Tu 07:00-22:00","We 07:00-22:00","Th 07:00-22:00","Fr 07:00-22:00","Sa 07:00-22:00","Su 07:00-22:00"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Waynesville",
    "addressRegion": "OH",
    "postalCode": "45068",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.5318,
    "longitude": -84.0955
  },
  "areaServed": [
    {"@type": "County", "name": "Hamilton County", "containedIn": "Ohio"},
    {"@type": "County", "name": "Warren County", "containedIn": "Ohio"},
    {"@type": "County", "name": "Butler County", "containedIn": "Ohio"},
    {"@type": "County", "name": "Montgomery County", "containedIn": "Ohio"},
    {"@type": "County", "name": "Greene County", "containedIn": "Ohio"},
    {"@type": "County", "name": "Clinton County", "containedIn": "Ohio"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Notary Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Loan Signing Services", "description": "Certified loan signing agent for mortgage closings, refinances, HELOCs and purchase transactions"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Estate Planning Notarization", "description": "Mobile notary for wills, trusts, powers of attorney and healthcare directives"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Apostille Services", "description": "Document authentication and apostille preparation for international use"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Healthcare Document Notarization", "description": "Bedside notarization at hospitals, rehab facilities and senior communities"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vehicle Title Notarization", "description": "Ohio car title transfer notarization and bill of sale notary services"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "General Notary Services", "description": "Acknowledgments, jurats, oaths and affirmations for all document types"}}
    ]
  },
  "sameAs": [
    "https://www.google.com/maps?cid=YOUR_GMB_CID",
    "https://www.facebook.com/signedontime",
    "https://www.linkedin.com/company/signedontime"
  ],
  "founder": {
    "@type": "Person",
    "name": "Terry May",
    "jobTitle": "Certified Notary Public and Loan Signing Agent",
    "description": "25+ years experience in commercial and residential lending. NNA certified, background screened and fully insured."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "[dynamic from useGoogleReviews]"
  }
}
```

### Files changed (2 total)

| File | Change |
|------|--------|
| `src/components/SEO/LocalBusinessSchema.tsx` | Rewrite to inline dangerouslySetInnerHTML with full user-specified schema |
| `src/components/SEO/BreadcrumbSchema.tsx` | Rewrite from useEffect to inline dangerouslySetInnerHTML |

`src/pages/Reviews.tsx` — no changes needed (ReviewSchema already inline with dynamic data).
`src/pages/Index.tsx` — no changes needed (already renders LocalBusinessSchema).
Service pages — no changes needed (already render BreadcrumbSchema via ServiceHubEnhanced).

