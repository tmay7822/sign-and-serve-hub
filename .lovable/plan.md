

## Fix Critical SEO Issues Found by SiteGuru

SiteGuru flagged several sitewide and per-page issues. Here is a prioritized plan addressing the high and medium impact items that can be fixed in code.

---

### Issue 1: www vs non-www duplicate content (HIGH)

**Problem**: Site is accessible on both `signedontime.com` and `www.signedontime.com`. Search engines treat these as two separate sites.

**Fix**: Add a redirect rule in `public/_redirects` to force all non-www traffic to www.

```
https://signedontime.com/* https://www.signedontime.com/:splat 301!
```

---

### Issue 2: Canonical URL issues (424 pages, MEDIUM)

**Problem**: Most pages either have no canonical URL or use the wrong domain. Several pages still reference `sign-and-serve-hub.lovable.app` instead of `www.signedontime.com`. The `Seo.tsx` component falls back to `window.location.href` which returns whatever domain the user is on — not the canonical www domain.

**Fix in `src/components/Seo.tsx`**: Always build the canonical URL from `BUSINESS_CONFIG.website` + the current pathname, never from `window.location.href`. This fixes all 400+ pages that use the `Seo` component.

**Fix hardcoded URLs**: Update the ~5 pages that hardcode `sign-and-serve-hub.lovable.app` in their canonical prop to use `BUSINESS_CONFIG.website`.

Files affected:
- `src/components/Seo.tsx` — Fix canonical URL logic
- `src/pages/HomeBuyingSeasonNotary.tsx`
- `src/pages/BackToSchoolDocuments.tsx`
- `src/pages/Documents.tsx`
- `src/pages/YearEndPlanningNotary.tsx`
- `src/pages/TaxSeasonNotary.tsx`

---

### Issue 3: Trailing slash duplicate content (SITEWIDE, MEDIUM)

**Problem**: `/general-notary` and `/general-notary/` both serve the same content.

**Fix**: Add a trailing-slash-to-no-slash redirect in `public/_redirects`:

```
/*/  /:splat  301!
```

And ensure `Seo.tsx` strips trailing slashes from canonical URLs.

---

### Issue 4: Structured data missing on 422 pages (MEDIUM)

**Problem**: Only the homepage and a few blog posts have JSON-LD structured data. Service hub pages, location pages, and most blog posts lack it.

**Fix**: Add a `WebPage` JSON-LD schema automatically inside the `Seo` component for every page. This provides baseline structured data (name, description, url) to all 500+ pages without touching each file individually.

---

### Issue 5: Error page status code (HIGH)

**Problem**: The SPA always returns HTTP 200, even for the NotFound page. Google indexes these as real pages.

**Reality**: This is an inherent limitation of client-side SPAs hosted on static CDNs. There is no server to return a 404 header. However, we can mitigate it by:
- Adding `<meta name="robots" content="noindex">` to the NotFound page so Google drops it from the index
- Adding `<meta name="prerender-status-code" content="404">` for prerender services

---

### Summary of File Changes

| File | Change |
|------|--------|
| `public/_redirects` | Add www redirect + trailing slash redirect |
| `src/components/Seo.tsx` | Fix canonical to always use `BUSINESS_CONFIG.website` + pathname; add baseline `WebPage` JSON-LD |
| `src/pages/NotFound.tsx` | Add `noindex` meta tag and prerender 404 status hint |
| `src/pages/HomeBuyingSeasonNotary.tsx` | Fix hardcoded canonical URL |
| `src/pages/BackToSchoolDocuments.tsx` | Fix hardcoded canonical URL |
| `src/pages/Documents.tsx` | Fix hardcoded canonical URL |
| `src/pages/YearEndPlanningNotary.tsx` | Fix hardcoded canonical URL |
| `src/pages/TaxSeasonNotary.tsx` | Fix hardcoded canonical URL |

This addresses 5 of the 6 high/medium issues in a single pass. The remaining issues (internal linking, headings, page speed) require page-by-page content work and can be tackled separately.

