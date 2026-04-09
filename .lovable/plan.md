
## Internal Link Audit and Orphan Page Fixes

### Audit Results

| Page | Inbound Links | Status |
|------|--------------|--------|
| `/tax-season-notary` | Footer (defined but **NOT rendered**) | ORPHANED |
| `/home-buying-season-notary` | Footer (defined but **NOT rendered**) | ORPHANED |
| `/back-to-school-documents` | Footer (defined but **NOT rendered**) | ORPHANED |
| `/year-end-planning-notary` | Footer (defined but **NOT rendered**) | ORPHANED |
| `/college-18-plus` | BackToSchoolDocuments, NotaryGuideButlerCounty | 2 links — weak |
| `/personal-family` | Header mobile "More" menu | 1 link only |
| `/real-estate-notary` | None found in navigation or content | ORPHANED |
| `/wills-trusts-estates` | WhatToDoNext blog component, YearEndPlanningNotary | 2 links — weak |
| `/insurance-retirement` | TaxSeasonNotary only | 1 link only |
| `/other-notary` | No inbound links found | ORPHANED |
| `/legal-court` | No inbound links found | ORPHANED |
| `/white-label-pricing` | No route in routes.tsx, no links | ORPHANED + UNROUTED |
| `/service/brown-county` | Only in gmbServiceAreas data | NOT in core 6 counties |
| `/service/miami-county/*` | Only in prerenderRoutes.ts | NOT in core 6 counties |
| `/notary-yellow-springs-45387` | Not in routes.tsx | DOES NOT EXIST as route |
| `/notary-fairborn-45324` | Not in routes.tsx | DOES NOT EXIST as route |
| `/notary-sabina-45169` | Not in routes.tsx | DOES NOT EXIST as route |

**Key finding**: The footer defines `seasonalLinks` array but never renders it. This is why all 4 seasonal pages are orphaned.

### Changes

#### 1. Homepage — Add Seasonal Services Section (`src/pages/Index.tsx`)

Insert a new section between County Hubs and FAQ:
- H2: "Seasonal Notary Services"
- 4 cards in a responsive grid, each with season label, title, and link
- Tax Season (Jan-Apr), Home Buying (Mar-Jun), Back to School (Jul-Sep), Year-End Planning (Oct-Dec)

#### 2. Footer — Render Seasonal Links + Add "For Notaries" (`src/components/Footer.tsx`)

- The `seasonalLinks` array already exists but is never rendered. Add it to the Resources column or as a sub-section.
- Add a "For Notaries" section with a link to `/white-label-pricing`.
- Expand grid from 5 to 6 columns (or merge seasonal into existing column).

#### 3. Routes — Add WhiteLabelPricing Route (`src/routes.tsx`)

- Import and add route: `{ path: 'white-label-pricing', element: <WhiteLabelPricing /> }`
- The page file exists but has no route entry.

#### 4. Header — Add Missing Service Hubs to Desktop Dropdown (`src/components/Header.tsx`)

Add these orphaned service hubs to the desktop Services dropdown or a "More Services" sub-section:
- Real Estate Notary (`/real-estate-notary`)
- Legal & Court (`/legal-court`)
- Insurance & Retirement (`/insurance-retirement`)
- Wills, Trusts & Estates (`/wills-trusts-estates`)
- Other Notary (`/other-notary`)
- College & 18+ (`/college-18-plus`)

Also add to the mobile "More" items list (some are already there, add missing ones).

#### 5. Greene County Hub — Add City Links (`src/pages/blog/NotaryGuideGreeneCounty.tsx`)

The user asked to link `/notary-yellow-springs-45387` and `/notary-fairborn-45324` from Greene County hub. However, these specific routes don't exist in routes.tsx. The dynamic routes that DO exist are `/service/greene-county/yellow-springs-45387` and `/service/greene-county/fairborn-45324`. Add links to the correct dynamic city service pages.

#### 6. Clinton County Hub — Add Sabina Link (`src/pages/blog/NotaryGuideClintonCounty.tsx`)

Same pattern: link to `/service/clinton-county/sabina-45169`.

#### 7. Brown County + Miami County — Flag for Review

- **Brown County**: Dynamic route `/service/brown-county` is handled by the catch-all `service/:county` route. It is NOT in the core 6 counties. Not in prerenderRoutes except via CSV.
- **Miami County**: Has 5 cities explicitly in prerenderRoutes (Troy, Piqua, Tipp City, Covington, West Milton). These were intentionally added.

**Recommendation**: Keep Miami County pages (they were explicitly added to prerenderRoutes). Flag Brown County for the user's decision — it has no dedicated content and only exists as a CSV-generated route.

#### 8. Sitemap Cross-Check (`src/config/prerenderRoutes.ts`)

Add `/white-label-pricing` to prerenderRoutes so it appears in the sitemap.

### Files Summary

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add Seasonal Services section |
| `src/components/Footer.tsx` | Render seasonalLinks, add "For Notaries" with white-label link |
| `src/routes.tsx` | Add WhiteLabelPricing route |
| `src/components/Header.tsx` | Add missing service hubs to navigation dropdown |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | Add Yellow Springs + Fairborn city service links |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | Add Sabina city service link |
| `src/config/prerenderRoutes.ts` | Add `/white-label-pricing` |
| `public/sitemap.xml` | Regenerate with new route |

**Total: 8 files modified, ~25 new internal links added**

### Orphan Resolution Summary

| Page | Fix |
|------|-----|
| 4 seasonal pages | Homepage section + footer rendering |
| `/college-18-plus` | Header nav addition (already linked from 2 pages) |
| `/real-estate-notary` | Header nav addition |
| `/legal-court` | Header nav addition |
| `/other-notary` | Header nav addition |
| `/insurance-retirement` | Header nav addition |
| `/wills-trusts-estates` | Header nav addition |
| `/white-label-pricing` | Route + footer "For Notaries" link |
| `/personal-family` | Already in mobile nav, add to desktop dropdown |
| Brown County | Flag for user review — outside core 6 |
| Miami County | Keep — explicitly added to prerenderRoutes |
