

## Consolidate Homepage @graph with Two Corrections

### Only file changed: `src/components/SEO/HomepageSchema.tsx`

### Changes

**1. Keep `LegalService`** — already present on line 33. No change needed.

**2. Update coordinates** — lines 63-65: `39.5318, -84.0955` → `39.5296, -84.0846`

**3. Update LocalBusiness `sameAs`** — lines 95-98: replace with the 3 exact URLs provided (GMB, Facebook, Wikidata)

**4. Add Organization node** — insert new entity into the `@graph` array with name, url, logo, contactPoint, and matching `sameAs` array

### Final `sameAs` on LocalBusiness (lines 95-98):
```json
"sameAs": [
  "https://www.google.com/maps/place/Signed+On+Time/@39.4723167,-84.5279299,10z/data=!3m1!4b1!4m6!3m5!1s0x898eda0c8281792b:0x6ceef3ddd2cd891d!8m2!3d39.472252!4d-84.1982955!16s%2Fg%2F11y5pbg0pl?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D",
  "https://www.facebook.com/profile.php?id=61581017254420",
  "https://www.wikidata.org/wiki/Q139254455"
]
```

### New Organization node (added to @graph):
```json
{
  "@type": "Organization",
  "@id": "https://www.signedontime.com/#organization",
  "name": "Signed On Time",
  "url": "https://www.signedontime.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.signedontime.com/favicon.png",
    "width": 512,
    "height": 512
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15132269052",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.google.com/maps/place/Signed+On+Time/@39.4723167,-84.5279299,10z/data=!3m1!4b1!4m6!3m5!1s0x898eda0c8281792b:0x6ceef3ddd2cd891d!8m2!3d39.472252!4d-84.1982955!16s%2Fg%2F11y5pbg0pl?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D",
    "https://www.facebook.com/profile.php?id=61581017254420",
    "https://www.wikidata.org/wiki/Q139254455"
  ]
}
```

### What stays the same
- `@type` array keeps `LegalService` ✅
- All existing entities (FAQPage, Person, WebSite, WebPage, BreadcrumbList) unchanged
- No other files touched

### Files modified
- `src/components/SEO/HomepageSchema.tsx`

