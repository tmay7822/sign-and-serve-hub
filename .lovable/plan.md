

## Update Meta Tags, Hero Text, and Service Descriptions

### Problem
- Homepage meta title is 79 chars (limit: 60), meta description is 325 chars (limit: 160)
- Hero text references "Cincinnati & Dayton" as primary — should lead with Southwest Ohio and four core counties
- Several service page meta descriptions need updating
- ServiceHubEnhanced template is missing the `<Seo>` component entirely, so meta descriptions from `services.ts` aren't being rendered for most service pages

### Changes

**1. `src/config/business.ts`** (lines 136-138)
- Update `metaTitle` to: `"Mobile Notary Southwest Ohio | Signed On Time"` (47 chars)
- Update `metaDescription` to: `"Certified mobile notary based in Waynesville — serving Warren, Greene, Clinton, Butler and surrounding Southwest Ohio counties. Same day appointments 7 days a week. We come to you."` (156 chars)
- Update `keywords` to lead with Southwest Ohio counties

**2. `src/components/HeroSection.tsx`** (lines 30-55)
- Change H1 line 2 from `"in Cincinnati & Dayton, Ohio"` to `"in Southwest Ohio"`
- Change H3 from `"Serving Hamilton, Butler, Warren, Montgomery & 5 More Ohio Counties"` to `"Based in Waynesville — Serving Warren, Greene, Clinton, Butler & All Surrounding Counties"`
- Update supporting text to: `"Southwest Ohio's local mobile notary — we come to your home, office, hospital, or anywhere you need us."`
- Keep tagline `"Signed On Time — We Come To You Anytime And Anywhere"` exactly as is

**3. `src/components/templates/ServiceHubEnhanced.tsx`**
- Add `import Seo from '@/components/Seo'` and `import { BUSINESS_CONFIG } from '@/config/business'`
- Add `<Seo>` component with `service.metaTitle` / `service.metaDescription` (same pattern as ServiceHubTemplate lines 49-57)

**4. `src/data/services.ts`** — Update 6 service `metaDescription` values:

| Service | New Meta Description | Chars |
|---------|---------------------|-------|
| general-notary | "Professional mobile notary services throughout Southwest Ohio. Acknowledgments, jurats, oaths and affidavits. NNA certified, insured. Same-day available — we come to you." | 149 |
| loan-signings | "Certified loan signing agent serving Southwest Ohio. Mortgage closings, refinances and HELOCs. 25+ years lending experience. Same-day closings available throughout Warren, Butler and Hamilton counties." | 178 → trim to: "Certified loan signing agent serving Southwest Ohio. Mortgage closings, refinances and HELOCs. 25+ years lending experience. Same-day closings available." | 152 |
| estate-plans | "Mobile notary for wills, trusts, powers of attorney and healthcare directives throughout Southwest Ohio. Witness coordination included. Evening and weekend appointments available." | 157 |
| healthcare-notary | "Bedside notarization at hospitals, nursing homes and care facilities throughout Southwest Ohio. Same-day urgent visits available. Compassionate service for patients and families." | 155 |
| vehicles-dmv | "Ohio car title transfer notarization at your location throughout Southwest Ohio. No BMV lines, no waiting. Bills of sale, lien releases. Same-day service available." | 142 |
| apostille | "Ohio apostille services for international document authentication. Birth certificates, diplomas, business documents. Ohio Secretary of State submission preparation. Call for a free consultation." | 170 → trim to: "Ohio apostille services for international document authentication. Birth certificates, diplomas, business documents. Secretary of State submission preparation." | 139 |

Note: The user's provided Loan Signings description (178 chars) and Apostille description (170 chars) exceed 160. I will trim them to fit.

### Files Modified
- `src/config/business.ts`
- `src/components/HeroSection.tsx`
- `src/components/templates/ServiceHubEnhanced.tsx`
- `src/data/services.ts`

