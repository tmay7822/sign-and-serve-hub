

## Create 6 County Hub Pages with Unique Local Content

### Overview

Create 6 standalone page components with hand-crafted, county-specific content (600-800 words each). Each page has unique H1, meta tags, FAQ schema + BreadcrumbList schema via `dangerouslySetInnerHTML`, CTAs, and internal links. Every paragraph is unique per county — no shared content across pages.

### Files Created (6)

| File | URL |
|------|-----|
| `src/pages/blog/NotaryGuideHamiltonCounty.tsx` | `/blog/notary-guide-hamilton-county-ohio` |
| `src/pages/blog/NotaryGuideWarrenCounty.tsx` | `/blog/notary-guide-warren-county-ohio` |
| `src/pages/blog/NotaryGuideMontgomeryCounty.tsx` | `/blog/notary-guide-montgomery-county-ohio` |
| `src/pages/blog/NotaryGuideButlerCounty.tsx` | `/blog/notary-guide-butler-county-ohio` |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | `/blog/notary-guide-greene-county-ohio` |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | `/blog/notary-guide-clinton-county-ohio` |

### Files Modified (3)

| File | Change |
|------|--------|
| `src/routes.tsx` | Add 6 lazy imports + 6 routes BEFORE `blog/:slug` catch-all (before line 340) |
| `src/config/prerenderRoutes.ts` | Add 6 URLs for sitemap inclusion |
| `src/data/blog.ts` | Add 6 entries to `BLOG_POSTS` array so they appear on `/blog` index |

### Page Structure (every page)

1. `<Seo />` — unique meta title, description, canonical (`https://www.signedontime.com/blog/notary-guide-{county}-county-ohio`), OG tags
2. Inline BreadcrumbList JSON-LD: Home → Blog → [County] County Guide
3. Inline FAQPage JSON-LD with 4 county-specific Q&As (exact text from user spec)
4. `<Header />` + hero section with breadcrumb nav, H1, author "Terry May", date "April 8, 2026", reading time badge
5. Positioning statement in intro (shared concept but woven into unique county-specific paragraphs)
6. Prose article with 6 H2 service sections, county-specific content, internal `<Link>` to service pages
7. FAQ accordion section with `<Card>` components
8. Top + bottom CTA sections using `<StandardCTAButtons />` plus inline call link `tel:5132269052`
9. `<Footer />`

### Blog Index Entries

Each page gets a `BlogPost` entry in `blog.ts` with `categorySlug: 'general-notary-guides'`, `serviceSlug: 'general-notary'`, correct slug, title, excerpt, and `featured: false`. This makes them appear on `/blog`.

---

### Content Outline — Hamilton County (~700 words)

**H1:** Mobile Notary Services in Hamilton County, Ohio

**Intro (~130 words):** Signed On Time is centrally located in Waynesville Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. This means faster response times across all six counties than any notary based in either city alone. Hamilton County is the most densely populated county in Southwest Ohio, anchored by Cincinnati and extending through Blue Ash, Norwood, Springdale, Montgomery, Madeira, Indian Hill, Cleves, and Harrison. From our Waynesville base we reach most Hamilton County locations within 35-40 minutes, bringing professional mobile notary services to your home, office, hospital room, or care facility. We specifically serve smaller Hamilton County communities that Cincinnati-based notaries overlook — not just downtown, but every neighborhood and suburb across the county.

**H2: Loan Signing Services in Hamilton County (~80 words):** Cincinnati metro active real estate market context. I-71 and I-275 corporate corridor. Purchase closings, refinances, HELOCs. Title company offices, law firms, kitchen tables. Certified loan signing agent. → Link to /loan-signings

**H2: Estate Planning Notarization in Hamilton County (~80 words):** Hamilton County Probate Court processes thousands of estate filings. Wills, trusts, POA, healthcare directives. Indian Hill, Madeira, Montgomery family coordination with attorneys. → Link to /estate-plans

**H2: Healthcare Document Notarization in Hamilton County (~80 words):** UC Health, Christ Hospital, TriHealth Good Samaritan, rehab/senior care. Highest concentration of healthcare notarization needs. Bedside notarization same-day. Living wills, healthcare POA, HIPAA. → Link to /healthcare-notary

**H2: Vehicle Title Notarization in Hamilton County (~60 words):** Ohio car title transfers, bills of sale, lien releases. No BMV lines. → Link to /vehicles-dmv

**H2: Apostille Services in Hamilton County (~60 words):** International business community, immigrant population. Ohio Secretary of State authentication, Hague Convention countries. → Link to /apostille

**H2: Business Notary Services in Hamilton County (~60 words):** Corporate corridor I-71 downtown through Blue Ash and Springdale. Contract notarization, corporate resolutions, vendor affidavits. → Link to /general-notary

**FAQ (4 items):** Exact Q&A text from user spec (travel time 35-40 min, all communities including Cleves/Harrison/Indian Hill/Madeira, hospital bedside at UC/Christ/TriHealth, service fee with call CTA).

---

### Content Outline — Warren County (~700 words)

**H1:** Mobile Notary Services in Warren County, Ohio

**Intro (~140 words):** Signed On Time is centrally located in Waynesville Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. Warren County sits at the heart of our service area — the rural and suburban communities between Waynesville and Mason represent the geographic center of Southwest Ohio notary demand. Having served Warren County for nearly 30 years Terry brings genuine local knowledge to every appointment — knowing not just the roads but the communities, the growth patterns, and the families who have called this area home for generations. We serve Mason, Lebanon, Springboro, Waynesville, Morrow, Maineville, Franklin, Corwin, Harveysburg, and every rural community in between — including areas that larger notary services based in Cincinnati or Dayton do not reach.

**H2: Loan Signing Services in Warren County (~80 words):** Mason and Springboro fastest-growing in Ohio. Deerfield Township, Kings Mills new construction. Purchase closings, refinances, HELOCs. → Link to /loan-signings

**H2: Estate Planning Notarization in Warren County (~80 words):** Warren County Probate Court in Lebanon. Growing population aging, evening/weekend scheduling. Wills, trusts, POA, advance directives. → Link to /estate-plans

**H2: Healthcare Document Notarization in Warren County (~80 words):** Atrium Medical Center, urgent care, senior living along Mason-Lebanon corridor. Bedside notarization, healthcare POA, living wills, HIPAA. → Link to /healthcare-notary

**H2: Vehicle Title Notarization in Warren County (~60 words):** Private car sales Mason/Lebanon, title transfers, bills of sale. No BMV lines. → Link to /vehicles-dmv

**H2: Apostille Services in Warren County (~60 words):** Local preparation saves trip to Columbus or Cincinnati. → Link to /apostille

**H2: Business Notary Services in Warren County (~60 words):** Mason business corridor, Lebanon commercial district. Contract notarization, corporate documents, vendor packets. → Link to /general-notary

**FAQ (4 items):** Exact Q&A text from user spec (Mason/Lebanon 20-30 min, all communities including Morrow/Maineville/Harveysburg/Corwin, Terry lives in Waynesville 30 years, senior communities for POA/healthcare).

---

### Remaining 4 Counties (unique content angles)

- **Montgomery (~700 words):** US-35 corridor as frequently traveled route, Dayton primary, Kettering/Centerville/Miamisburg/Huber Heights/Vandalia/Oakwood/Trotwood/West Carrollton. Miami Valley Hospital, Kettering Health, Dayton VA Medical Center. Wright-Patterson AFB military POA. Manufacturing/defense community. Rural communities beyond Dayton. H2 includes "Military and Veterans Notary Services" instead of "Apostille."
- **Butler (~700 words):** I-75 corridor 35-45 min from Waynesville. Hamilton/Fairfield primary, West Chester/Oxford/Middletown/Monroe/Trenton/Millville. Fort Hamilton Hospital, UC Health West Chester. Miami University college-18-plus docs (FERPA/HIPAA). West Chester growth corridor. Rural Butler County. H2 includes "College Student Documents" instead of "Apostille." Links include /college-18-plus.
- **Greene (~700 words):** US-35 and I-675 corridor 30-40 min. Beavercreek/Xenia primary, Fairborn/Yellow Springs/Bellbrook/Jamestown/Cedarville/Spring Valley. Greene Memorial Hospital. Wright-Patterson AFB largest employer — military families, deployment POA. Cedarville University, Antioch College. Rural Greene County. H2 includes "Military and Veterans Notary Services."
- **Clinton (~700 words):** US-68 direct route 25-30 min — one of closer county seats. Wilmington primary, Blanchester/Sabina/New Vienna/Clarksville/Lynchburg/Midland/Port William. Clinton Memorial Hospital. Rural/agricultural — land transfers, farm estate planning. Wilmington College. Underserved by larger services. H2 includes "Rural Property and Farm Documents." Same-day service standard, no advance booking emphasis.

Each county uses completely unique prose — no paragraph repeated across any two pages.

### Summary

| County | Est. Words | FAQ Items | Unique H2s |
|--------|-----------|-----------|------------|
| Hamilton | ~700 | 4 | 6 |
| Warren | ~700 | 4 | 6 |
| Montgomery | ~700 | 4 | 6 |
| Butler | ~700 | 4 | 6 |
| Greene | ~700 | 4 | 6 |
| Clinton | ~700 | 4 | 6 |

**Total: 9 files (6 created, 3 modified), ~4,200 words of unique content, 24 FAQ items, 36 H2 sections**

