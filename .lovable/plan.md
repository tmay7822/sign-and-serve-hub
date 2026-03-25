

## Fix 3 Broken Sitemap Pages (Mt. Healthy / Mt. Orab)

**Problem**: URLs containing periods (`mt.-healthy`, `mt.-orab`) return 404 because the period breaks route matching. Google Search Console flagged these 3 pages.

**Solution**: Replace the period in the slug with nothing — `mt-healthy` and `mt-orab` — in both the route definitions and the city data.

### Changes

**1. `src/config/prerenderRoutes.ts`** — Fix 3 routes:
- `/service/hamilton-county/mt.-healthy-45231` → `/service/hamilton-county/mt-healthy-45231`
- `/service/clermont-county/mt.-orab-45154` → `/service/clermont-county/mt-orab-45154`
- `/service/brown-county/mt.-orab-45154` → `/service/brown-county/mt-orab-45154`

**2. `src/utils/parseRoutesCsv.ts`** — Update the fallback city names used for URL generation:
- `Mt. Healthy` → slug generates as `mt-healthy` (display name stays "Mt. Healthy")
- `Mt. Orab` → slug generates as `mt-orab` (display name stays "Mt. Orab")

This requires updating the `getCityServiceUrl` function or the slug generation logic to strip periods before slugifying.

**3. `public/sitemap.xml`** — Will be regenerated with corrected URLs on next build. If a static copy exists, update the 3 URLs directly.

| File | Change |
|------|--------|
| `src/config/prerenderRoutes.ts` | Fix 3 route paths (remove period from `mt.`) |
| `src/utils/parseRoutesCsv.ts` | Ensure slug generation strips periods from city names |
| `public/sitemap.xml` | Update 3 URLs to match corrected routes |

