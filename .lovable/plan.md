

## Fix Google Search Console Indexing Errors + Build Errors

Analysis of the 5 uploaded Google Search Console reports reveals multiple interconnected issues. There are also 24 build errors from a previous incomplete edit.

---

### Issue 1: Build Errors — 24 blog files have `useEffect` without import (CRITICAL)

The previous SEO edit added the `Seo` component but left behind the old `useEffect` blocks without importing `useEffect` from React.

**Fix**: Remove the entire `useEffect(() => { document.title = ...; }, [])` block from all 24 files. The `Seo` component already handles title and meta description.

**Files**: All 24 files listed in the build errors (AffidavitJuratAcknowledgment.tsx through WhatHappensLoanSigning.tsx)

---

### Issue 2: Location Blog Posts All Redirect to /blog (CRITICAL — affects ~200 pages)

**Root cause**: `LocationBlogPost.tsx` uses `useParams()` to get `slug`, but the hardcoded routes (lines 248-313 of routes.tsx) like `blog/general-notary-guides-hamilton-county-ohio` don't have a `:slug` param — they're literal paths. So `slug` is always `undefined`, and the component redirects to `/blog`.

Only the catch-all `blog/:slug` at line 328 works correctly, but it only catches routes not already matched by hardcoded ones.

This explains:
- **"Page with redirect"** — Google sees these pages redirecting to `/blog`
- **"Discovered - currently not indexed"** — Google found them but they redirect
- **"Soft 404"** — thin/empty content from redirects

**Fix**: Change `LocationBlogPost.tsx` to extract the slug from `useLocation().pathname` instead of `useParams()`:
```tsx
const location = useLocation();
const slug = location.pathname.replace('/blog/', '');
```

---

### Issue 3: "Excluded by noindex" — County Service URLs Hit NotFound (6 pages)

URLs like `/loan-signings/montgomery` and `/estate-plans/butler` don't match any 2-segment route. They fall through to the `*` catch-all, rendering the `NotFound` page (which has `noindex`).

**Fix**: Add dynamic 2-segment routes for service/county combos:
```
{ path: ':serviceSlug/:county', element: <LocalService /> }
```
Place this before the existing `:serviceSlug/:county/:city` route. The `LocalService` component already handles county-level pages.

---

### Issue 4: "undefined-ohio" URLs in Redirects

Google found URLs like `/blog/general-notary-guides-undefined-ohio` and `/blog/estate-planning-guides-undefined-ohio`. Some internal link generation code is producing `undefined` when a city/county name is missing.

**Fix**: Add a guard in the location blog post slug generation in `src/data/locationBlogPosts.ts` to skip entries where city or county is undefined/falsy.

---

### Summary of Changes

| File | Change |
|------|--------|
| 24 blog files in `src/pages/blog/` | Remove orphaned `useEffect` blocks (build fix) |
| `src/pages/LocationBlogPost.tsx` | Use `useLocation()` pathname instead of `useParams()` |
| `src/routes.tsx` | Add `:serviceSlug/:county` route for 2-segment service URLs |
| `src/data/locationBlogPosts.ts` | Guard against undefined city/county in slug generation |

This fixes the build, unblocks ~200 location blog pages from indexing, resolves the 6 noindex county pages, and eliminates undefined-ohio URLs.

