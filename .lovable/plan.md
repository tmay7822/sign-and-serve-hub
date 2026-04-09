

## Add Resources Navigation, Hub Page, and Related Guides

### Discovery: Missing Route Bug

`/blog/ohio-car-title-transfer-requirements` — the component exists (`src/pages/blog/OhioCarTitleTransferRequirements.tsx`) and is linked from 4 location pages, but was never added to `routes.tsx` or `prerenderRoutes.ts`. This will be fixed as part of this work.

### URL Verification

All requested URLs verified against `routes.tsx`:

| URL | Status |
|-----|--------|
| `/blog/what-happens-loan-signing` | Exists (line 199) |
| `/blog/estate-planning-guides` | Exists (line 176/226) |
| `/blog/ohio-car-title-transfer-requirements` | **Missing — will add** |
| `/blog/hcpoa-living-will-guide` | Exists (line 196) |
| `/blog/how-apostille-works` | Exists (line 200) |
| `/blog/general-notary-what-to-bring` | Exists (line 194) |
| `/blog/hospital-notary-what-to-expect` | Exists (line 197) |
| `/blog/after-hours-emergency-notary` | Exists (line 215) |
| `/faq` | Exists (line 155) |
| `/blog/ohio-buyer-seller-loan-signing-checklist` | Exists (line 227) |
| `/blog/refi-heloc-notary-errors-to-avoid-ohio` | Exists (line 228) |
| `/blog/wills-trusts-poa-checklist` | Exists (line 198) |
| `/blog/poa-pitfalls-and-readiness` | Exists (line 220) |
| `/blog/title-transfer-checklist` | Exists (line 203) |
| `/blog/apostille-processing-times` | Exists (line 209) |
| `/blog/apostille-school-docs` | Exists (line 221) |

### Changes

**1. Fix missing route — `routes.tsx`**
- Add lazy import for `OhioCarTitleTransferRequirements`
- Add route: `blog/ohio-car-title-transfer-requirements`

**2. Fix missing prerender — `prerenderRoutes.ts`**
- Add `/blog/ohio-car-title-transfer-requirements`
- Add `/resources`

**3. Add Resources dropdown to Header — `src/components/Header.tsx`**
- Add "Resources" as a `NavigationMenuItem` with `NavigationMenuTrigger` + `NavigationMenuContent` between Services and About & Reviews
- Two sections in dropdown: "Guides by Service" (5 links) and "Helpful Guides" (4 links)
- Bottom link: "View All Resources →" pointing to `/resources`
- Add equivalent section in mobile nav (between intent items and More section)

**4. Create Resources Hub page — `src/pages/Resources.tsx`**
- SEO: title "Free Notary Guides & Resources | Signed On Time Mobile Notary Ohio", meta description as specified
- H1 + subtitle
- Section 1: "Most Popular" — 6 guide cards in responsive grid linking to existing blog posts
- Section 2: "Browse by Service Type" — 6 category cards linking to blog category pages
- Section 3: "Browse by County" — 6 county cards linking to `/service-areas` (placeholder until county hubs exist)
- Section 4: CTA block with Book Now button and Call button
- Uses Header, Footer, Seo components

**5. Add route for Resources — `routes.tsx`**
- Add lazy import and route for `/resources`

**6. Add Resources section to Homepage — `src/pages/Index.tsx`**
- New `ResourcesPreview` component between `ServicesSection` and `FAQSection`
- Shows heading, subtitle, 3 featured guide cards, "View All Guides →" link
- Cards for: What to Bring, What Happens at a Loan Signing, Ohio Car Title Transfer Guide

**7. Add Resources column to Footer — `src/components/Footer.tsx`**
- Add new column "Resources" with 7 links matching the requested list
- Adjust grid from `lg:grid-cols-4` to `lg:grid-cols-5` to accommodate

**8. Add Related Guides sections to service pages**

Each service page uses `ServiceHubEnhanced` or `ServiceHubTemplate`. Rather than modifying the template (which would affect all service pages), add a `relatedGuides` prop to `ServiceHubEnhanced` and render a "Related Guides" section when provided.

- **`ServiceHubEnhanced.tsx`**: Add optional `relatedGuides` prop (array of `{title, href}`), render as a card grid section before the footer
- **`LoanSignings.tsx`**: Pass 3 related guides (What Happens at a Loan Signing, Buyer/Seller Checklist, Refinance and HELOC Guide)
- **`EstatePlans.tsx`**: Pass 3 related guides (Wills Trusts POA Checklist, HCPOA and Living Will Guide, POA Pitfalls Guide)
- **`VehiclesDMV.tsx`**: Pass 2 related guides (Ohio Car Title Transfer Guide, Title Transfer Checklist)
- **`Apostille.tsx`**: Needs to switch from `ServiceHubTemplate` to `ServiceHubEnhanced` to support `relatedGuides`, then pass 3 guides (How Apostille Works, Apostille Processing Times, Apostille for School Documents)

### Files changed (10 total)

| File | Change |
|------|--------|
| `src/routes.tsx` | Add OhioCarTitleTransferRequirements import + route, add Resources import + route |
| `src/config/prerenderRoutes.ts` | Add `/blog/ohio-car-title-transfer-requirements` and `/resources` |
| `src/components/Header.tsx` | Add Resources dropdown (desktop + mobile) |
| `src/pages/Resources.tsx` | **New file** — Resources hub page |
| `src/pages/Index.tsx` | Add ResourcesPreview section |
| `src/components/Footer.tsx` | Add Resources column |
| `src/components/templates/ServiceHubEnhanced.tsx` | Add `relatedGuides` prop + rendering |
| `src/pages/LoanSignings.tsx` | Pass relatedGuides prop |
| `src/pages/EstatePlans.tsx` | Pass relatedGuides prop |
| `src/pages/VehiclesDMV.tsx` | Pass relatedGuides prop |
| `src/pages/Apostille.tsx` | Switch to ServiceHubEnhanced, pass relatedGuides prop |

### Sitemap

`/resources` will be automatically included in sitemap.xml via the prerenderRoutes addition. The Vite build plugin reads `prerenderRoutes.ts` and generates the sitemap entry with appropriate priority.

