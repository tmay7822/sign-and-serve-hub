

## Regenerate Content Audit with All ~500+ Pages

### The gap

The previous audit exported only the 117 static `.tsx` files. The site actually has:

| Page type | Count | Source |
|-----------|-------|--------|
| Static pages (`.tsx` files) | 117 | `src/pages/` |
| Dynamic city/service pages | ~1,404 | CSV (`routes_city_corrected.csv`) → rendered by `LocalService.tsx` |
| Dynamic county pages | ~9 | CSV → rendered by `DynamicCountyPage.tsx` |
| Dynamic city landing pages | ~80+ | CSV → rendered by `DynamicCityPage.tsx` |
| Location blog posts | ~200 | Generated in `locationBlogPosts.ts` |
| **Total** | **~500+** unique URLs |

### Plan

**1. Export all content into a single PDF + Markdown file**

A Python script will:

- **Static pages (117)**: Extract content from `.tsx` files as before
- **CSV-driven service pages (1,404)**: Parse the CSV to extract each route's title, meta description, city, county, ZIP, and service name — then document the template content they share (from `LocalServiceTemplate.tsx` and `ServiceLocationTemplate.tsx`)
- **County pages (9)**: List each county with its cities, pulled from `parseRoutesCsv.ts` fallback data + CSV
- **City landing pages**: Extract from CSV grouped by county
- **Location blog posts (~200)**: Parse `locationBlogPosts.ts` to extract generated titles, FAQs, and content templates

For the template-driven pages, instead of repeating identical template copy 1,404 times, the audit will:
- Show the **template content once** (headings, body copy, CTAs, FAQs structure)
- Then list **every route** with its unique data (city, county, ZIP, title, meta description)

**2. Output files**
- `/mnt/documents/full-site-content-audit.pdf` — formatted PDF
- `/mnt/documents/full-site-content-audit.md` — markdown for pasting into Claude

**3. Content included per page**
- URL path
- SEO title and meta description
- Page type and template used
- City, county, ZIP (for location pages)
- Service name
- Unique content (if any beyond template)

### Files changed
None — output only to `/mnt/documents/`

