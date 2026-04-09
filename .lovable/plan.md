

## Protect Admin Pages from Public Access and Search Indexing

### Current State

| Check | Status |
|-------|--------|
| Route protection (`ProtectedAdminRoute`) | Already applied to all 4 admin routes |
| `robots.txt` disallows `/admin/` | Already present (line 6) |
| Admin pages in `sitemap.xml` | Not present — already excluded |
| `noindex` meta tag | Only `GMBExport.tsx` has it; `ContentMap.tsx` and `SiteMapViewer.tsx` are missing it |

### Changes needed

**1. Add `noindex` meta tag to `ContentMap.tsx`**
Import `Helmet` and add `<Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>` at the top of the component return.

**2. Add `noindex` meta tag to `SiteMapViewer.tsx`**
Same — import `Helmet` and add the noindex tag.

**3. Update `robots.txt`**
Add explicit disallow rules for the specific admin sub-paths (belt-and-suspenders alongside the existing `/admin/` rule):

```
User-agent: *
Allow: /

Disallow: /*?*
Disallow: /admin/
Disallow: /admin/content-map
Disallow: /admin/gmb-export
Disallow: /admin/sitemap
Disallow: /api/

Sitemap: https://www.signedontime.com/sitemap.xml

Crawl-delay: 1
```

### No changes needed for

- **Route protection** — all 3 pages already wrapped in `ProtectedAdminRoute` which redirects unauthenticated users to `/auth`
- **Sitemap exclusion** — no admin URLs exist in `sitemap.xml`
- **GMBExport noindex** — already has the tag

### Files changed (3 total)

| File | Change |
|------|--------|
| `src/pages/admin/ContentMap.tsx` | Add Helmet with noindex meta tag |
| `src/pages/admin/SiteMapViewer.tsx` | Add Helmet with noindex meta tag |
| `public/robots.txt` | Add explicit disallow for admin sub-paths |

