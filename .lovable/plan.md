

## Fix SEO Meta Issues Across Site

### Issue 1: AboutUs page SEO (src/pages/AboutUs.tsx)

Line 79-82 uses `<Helmet>` with title `"About {BUSINESS_CONFIG.name} - Professional Mobile Notary Services"` and a generic description.

**Fix**: Replace the Helmet block with the requested title and description.

### Issue 2: Broken `${BUSINESS_CONFIG.name}` in blog descriptions

4 blog files have `description="... ${BUSINESS_CONFIG.name} ..."` — a regular string, not a template literal, so the variable renders as the literal text `${BUSINESS_CONFIG.name}`.

| File | Current broken description |
|------|--------------------------|
| `AfterHoursEmergencyNotary.tsx` | `"After-Hours Emergency Notary \| ${BUSINESS_CONFIG.name} - Professional mobile notary services"` |
| `College18PlusStarterPack.tsx` | `"FERPA, HIPAA & POA for College Students \| ${BUSINESS_CONFIG.name} - Professional mobile notary services"` |
| `AffidavitJuratAcknowledgment.tsx` | `"Affidavit vs Jurat vs Acknowledgment \| ${BUSINESS_CONFIG.name} - Professional mobile notary services"` |
| `DeedsExplained.tsx` | `"Deed Notarization Guide \| ${BUSINESS_CONFIG.name} - Professional mobile notary services"` |

**Fix**: Change each `description="..."` to `` description={`...${BUSINESS_CONFIG.name}...`} `` so the variable resolves.

### Issue 3: WhiteLabelPricing page (src/pages/WhiteLabelPricing.tsx)

No `<Seo>` component exists on this page at all — no meta title or description is set.

**Fix**: Import `Seo` and add it with:
- Title: `"White Label Notary Websites | Signed On Time"`
- Description: `"Professional white-label notary website solution for mobile notaries. Launch your SEO-optimized notary website in 48 hours with local pages for every service area."`

### Files changed (6 total)

| File | Change |
|------|--------|
| `src/pages/AboutUs.tsx` | Update title and meta description in Helmet |
| `src/pages/blog/AfterHoursEmergencyNotary.tsx` | Fix description from string to template literal |
| `src/pages/blog/College18PlusStarterPack.tsx` | Fix description from string to template literal |
| `src/pages/blog/AffidavitJuratAcknowledgment.tsx` | Fix description from string to template literal |
| `src/pages/blog/DeedsExplained.tsx` | Fix description from string to template literal |
| `src/pages/WhiteLabelPricing.tsx` | Add Seo component with proper title and description |

