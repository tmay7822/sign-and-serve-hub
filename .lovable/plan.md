

## Consolidate Thin Location Blog Pages into County Hub Redirects

### Approach

Instead of adding ~200 individual `<Navigate>` route entries (which would make routes.tsx unmanageable), create a redirect map file and generate route objects programmatically. This is cleaner and easier to maintain.

### West Chester Resolution

The user's redirect list places West Chester city pages under the **Warren County hub**. However, the user also noted West Chester Township is in Butler County and said "if uncertain redirect to Butler County hub." Since the user explicitly listed West Chester under Warren County in their redirect mapping, I will follow that mapping exactly.

**Correction**: Re-reading the user's list, West Chester city pages appear under the **Warren County** section. I will follow the user's explicit mapping.

### Pages to KEEP live (not redirect)

- `/blog/loan-signing-guides-mason-ohio` — keep as `LocationBlogPost`
- `/blog/healthcare-guides-cincinnati-ohio` — keep as `LocationBlogPost`
- All 6 county hub pages (already protected by explicit routes)

### Files

| File | Change |
|------|--------|
| `src/data/blogRedirects.ts` | **Create** — redirect map: old slug → county hub URL |
| `src/routes.tsx` | **Modify** — replace ~100 thin location blog route entries with redirect-generating loop; keep 2 city pages live; update undefined redirects to point to `/` |
| `src/config/prerenderRoutes.ts` | **Modify** — remove all thin county/city blog URLs (lines 115-355), keep only the 6 hub URLs + 2 kept city pages |

### `src/data/blogRedirects.ts` structure

```ts
export const BLOG_REDIRECTS: Record<string, string> = {
  // Hamilton County hub
  'general-notary-guides-hamilton-county-ohio': '/blog/notary-guide-hamilton-county-ohio',
  'loan-signing-guides-hamilton-county-ohio': '/blog/notary-guide-hamilton-county-ohio',
  // ... all Hamilton city slugs
  // Warren County hub
  'general-notary-guides-warren-county-ohio': '/blog/notary-guide-warren-county-ohio',
  // ... etc for all 6 counties + all cities
  // Undefined → homepage
  'loan-signing-guides-undefined-ohio': '/',
  'real-estate-guides-undefined-ohio': '/',
  'general-notary-guides-undefined-ohio': '/',
  'estate-planning-guides-undefined-ohio': '/',
};
```

Excludes `loan-signing-guides-mason-ohio` and `healthcare-guides-cincinnati-ohio` (kept live).

### `src/routes.tsx` changes

1. Import `BLOG_REDIRECTS` from the new file
2. Remove all existing thin location blog route entries (lines 259-325 county routes, lines 327-331 undefined redirects, lines 333-343 city routes except the 2 kept)
3. Keep the 2 live city page routes:
   - `blog/loan-signing-guides-mason-ohio` → `LocationBlogPost`
   - `blog/healthcare-guides-cincinnati-ohio` → `LocationBlogPost`
4. Add redirect routes generated from the map:
   ```ts
   ...Object.entries(BLOG_REDIRECTS).map(([slug, target]) => ({
     path: `blog/${slug}`,
     element: <Navigate to={target} replace />,
   })),
   ```
5. All redirects placed BEFORE the `blog/:slug` catch-all and BEFORE the county hub routes

### `src/config/prerenderRoutes.ts` changes

Remove all thin location blog URLs (lines 115-355: county guides, city guides, immigration/military/education by county and city). Keep only:
- 6 county hub URLs (`/blog/notary-guide-*-county-ohio`)
- 2 kept city pages (`/blog/loan-signing-guides-mason-ohio`, `/blog/healthcare-guides-cincinnati-ohio`)

### Redirect count

| County | County-level | City-level | Total |
|--------|-------------|------------|-------|
| Hamilton | ~11 | ~28 (4 cities × 7 cats) minus healthcare-guides-cincinnati kept | ~38 |
| Warren | ~11 | ~28 (4 cities × 7 cats) minus loan-signing-mason kept | ~38 |
| Montgomery | ~11 | ~28 (4 cities × 7 cats) | ~39 |
| Butler | ~11 | ~28 (4 cities × 7 cats) | ~39 |
| Greene | ~9 | ~28 (4 cities × 7 cats) | ~37 |
| Clinton | ~11 | ~28 (4 cities × 7 cats) | ~39 |
| Undefined | 4 | 0 | 4 |
| **Total** | | | **~234** |

### Verification checks

After execution, confirm:
- `/blog/healthcare-guides-hamilton-county-ohio` → redirects to Hamilton hub
- `/blog/loan-signing-guides-mason-ohio` → stays live (no redirect)
- `/blog/general-notary-guides-dayton-ohio` → redirects to Montgomery hub
- `/blog/immigration-guides-clinton-county-ohio` → redirects to Clinton hub
- `/blog/loan-signing-guides-undefined-ohio` → redirects to homepage
- No redirect chains (all destinations are real pages)

