

## Fix "undefined" County Bug on Location Blog Pages

### Root Cause

In `LocationBlogTemplate.tsx` line 27, county is extracted from the post slug:

```text
Slug: general-notary-guides-hamilton-county-ohio
After replace: hamilton-county  →  matches LOCATION_COUNTIES ✓

Slug: general-notary-guides-cincinnati-ohio  (city-level post)
After replace: cincinnati  →  NO match in LOCATION_COUNTIES ✗ → county = undefined
```

City-level posts use city slugs (e.g., `cincinnati`, `blue-ash`), not county slugs (e.g., `hamilton-county`). The template only looks up `LOCATION_COUNTIES` and never checks `LOCATION_CITIES`, so county resolves to `undefined` for all city posts.

This causes:
- **Broken sidebar links** (line 302): `/blog/${cat.slug}-${county?.slug}-ohio` → renders `undefined` as a literal string in the URL
- **"Serving undefined County"** in CTA sections
- **4 broken URLs indexed by Google** from users/crawlers clicking those sidebar links

### Fix — 4 changes across 2 files

**1. `src/components/templates/LocationBlogTemplate.tsx`**

- After the county slug lookup fails, fall back to checking `LOCATION_CITIES` — look up the remaining slug as a city slug, then use the city's `county` field to find the county object
- Import `LOCATION_CITIES` from `locationBlogPosts.ts`
- Add a city variable for city-level posts (to show city name in breadcrumbs instead of just county)
- Guard: if county is STILL undefined after both lookups, return `<Navigate to="/blog" replace />` (404 fallback)
- Wrap the "Related County Guides" sidebar card in `{county && (...)}` so it never renders links with undefined

**2. `src/pages/LocationBlogPost.tsx`**

- After fetching the post, add a secondary check: if the post renders but county would be undefined, redirect to `/blog` — this is the last safety net

**3. Redirect the 4 broken Google URLs**

Since Lovable hosting doesn't process `_redirects`, the fix is to add 4 explicit routes in `routes.tsx` that redirect to the correct category pages:

```
/blog/loan-signing-guides-undefined-ohio → redirect to /blog/loan-signing-guides
/blog/real-estate-guides-undefined-ohio → redirect to /blog/real-estate-guides
/blog/general-notary-guides-undefined-ohio → redirect to /blog/general-notary-guides
/blog/estate-planning-guides-undefined-ohio → redirect to /blog/estate-planning-guides
```

These will be small redirect components in `routes.tsx` using `<Navigate to="..." replace />`.

### County resolution logic (after fix)

```text
1. Extract slug remainder: post.slug minus categorySlug minus "-ohio"
2. Try LOCATION_COUNTIES.find(c => c.slug === remainder)     → county post
3. If not found, try LOCATION_CITIES.find(c => c.slug === remainder)
   → use city.county to find county in LOCATION_COUNTIES     → city post  
4. If still not found → Navigate to /blog (404 safety)
```

### Verification

For Blue Ash (`general-notary-guides-blue-ash-ohio`):
- Slug remainder after strip: `blue-ash`
- `LOCATION_CITIES` match: `{ name: 'Blue Ash', slug: 'blue-ash', county: 'Hamilton' }`
- County lookup: `LOCATION_COUNTIES.find(c => c.name === 'Hamilton')` → `{ name: 'Hamilton', slug: 'hamilton-county', ... }`
- Breadcrumb shows: Home / Blog / General Notary / **Hamilton County**
- Service line shows: "Serving Hamilton County, Ohio"

### Files changed

| File | Change |
|------|--------|
| `src/components/templates/LocationBlogTemplate.tsx` | Add city fallback for county resolution, add undefined guard, wrap sidebar links |
| `src/pages/LocationBlogPost.tsx` | Add safety redirect if county would be undefined |
| `src/routes.tsx` | Add 4 redirect routes for broken Google URLs |

