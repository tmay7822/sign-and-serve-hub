

## Complete Sitemap Rebuild — From 111 to ~1,700+ URLs

### Current State

| Source | URL Count | In Sitemap? |
|--------|-----------|-------------|
| `prerenderRoutes.ts` | 510 | Partially (only 111 made it) |
| CSV (`routes_city_corrected.csv`) | 1,404 | No — completely missing |
| **Total live pages** | **~1,730** | **Only 111 indexed** |

The Vite plugin regex `match(/['"`]\/[^'"`]*['"`]/g)` works but only produces 111 URLs in the current `sitemap.xml` — this is because the sitemap was generated on a stale build date (2025-12-02) and hasn't been regenerated since routes were expanded. More critically, the 1,404 CSV-driven dynamic routes (`/general-notary/hamilton/blue-ash`, etc.) are not in `prerenderRoutes.ts` at all and have never been in the sitemap.

### What changes

**1. New build-time sitemap generator script (`scripts/generate-sitemap.ts`)**

Rewrite to pull from TWO sources:
- Parse `prerenderRoutes.ts` (510 static/blog/location routes)
- Parse `routes_city_corrected.csv` (1,404 service×city routes)
- Deduplicate and merge into one list
- Exclude: `/admin/*`, any route containing `undefined`, `/auth`
- Generate `sitemap.xml` with proper `lastmod` (today's date), `changefreq`, and `priority`
- Generate `robots.txt`

**2. Update `prerenderRoutes.ts`** — no changes needed here; the CSV routes are intentionally separate (dynamic routes). The sitemap script will read both sources.

**3. Update the Vite plugin (`vite.config.ts`)**

Update `sitemapGeneratorPlugin` to also parse the CSV file during build, so production builds always produce a complete sitemap. Same logic as the standalone script.

**4. Regenerate `public/sitemap.xml`**

Run the script to produce the new sitemap with all ~1,730 URLs. Priority tiers:
- `1.0` — Homepage
- `0.9` — Service hub pages (17)
- `0.8` — Blog home, categories, Contact, Book Now
- `0.7` — County service pages, location pages, pricing
- `0.6` — Blog posts, city service pages, city blog posts
- `0.5` — Static pages (FAQ, About, etc.)
- `0.3` — Privacy, Terms

**5. Verify `public/robots.txt`**

Confirm it contains:
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*?*
Sitemap: https://www.signedontime.com/sitemap.xml
Crawl-delay: 1
```

### Exclusions from sitemap

- `/admin/*` routes
- `/auth`
- Any URL containing `undefined`
- The 4 redirect-only `/blog/*-undefined-ohio` routes

### Files changed

| File | Change |
|------|--------|
| `scripts/generate-sitemap.ts` | Rewrite to merge prerenderRoutes + CSV, exclude admin/undefined |
| `vite.config.ts` | Update sitemapGeneratorPlugin to also read CSV |
| `public/sitemap.xml` | Regenerated with ~1,730 URLs |
| `public/robots.txt` | Verified/refreshed |

### Expected result

Google Search Console will see ~1,730 URLs in the sitemap instead of 111. After resubmission, crawl coverage should increase from 38 pages to the full site within 1-2 crawl cycles.

