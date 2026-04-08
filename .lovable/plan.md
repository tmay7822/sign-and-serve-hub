

## Redirect Chain Audit and Cleanup

### All Currently Configured Redirects

**Source 1: `public/_redirects` (NOT processed by Lovable hosting)**

This file has no effect on Lovable hosting. It is dead configuration. However, it duplicates redirects that also exist in `routes.tsx`, which means Google may have indexed the `_redirects` patterns from a previous hosting provider or they are simply ignored.

| From | To | Status |
|------|----|--------|
| `https://signedontime.com/*` | `https://www.signedontime.com/:splat` | 301 |
| `/*/` (trailing slash) | `/:splat` | 301 |
| `/blog/general-notary` | `/blog/general-notary-guides` | 301 |
| `/blog/loan-signing` | `/blog/loan-signing-guides` | 301 |
| `/blog/real-estate` | `/blog/real-estate-guides` | 301 |
| `/blog/estate-planning` | `/blog/estate-planning-guides` | 301 |
| `/blog/apostille` | `/blog/apostille-guides` | 301 |
| `/blog/business` | `/blog/business-guides` | 301 |
| `/blog/healthcare` | `/blog/healthcare-guides` | 301 |

**Source 2: `src/routes.tsx` — React Router `<Navigate>` (11 total)**

| From | To | Type |
|------|----|------|
| `/blog/general-notary` | `/blog/general-notary-guides` | client-side redirect |
| `/blog/loan-signing` | `/blog/loan-signing-guides` | client-side redirect |
| `/blog/real-estate` | `/blog/real-estate-guides` | client-side redirect |
| `/blog/estate-planning` | `/blog/estate-planning-guides` | client-side redirect |
| `/blog/apostille` | `/blog/apostille-guides` | client-side redirect |
| `/blog/business` | `/blog/business-guides` | client-side redirect |
| `/blog/healthcare` | `/blog/healthcare-guides` | client-side redirect |
| `/blog/general-notary-guides-undefined-ohio` | `/blog/general-notary-guides` | client-side redirect |
| `/blog/loan-signing-guides-undefined-ohio` | `/blog/loan-signing-guides` | client-side redirect |
| `/blog/real-estate-guides-undefined-ohio` | `/blog/real-estate-guides` | client-side redirect |
| `/blog/estate-planning-guides-undefined-ohio` | `/blog/estate-planning-guides` | client-side redirect |

**Source 3: `src/pages/Blog.tsx` — dead file, not imported anywhere**

Contains both `window.location.replace('/blog')` AND `<Navigate to="/blog">`. This file is orphaned — not referenced in routes. No chain risk, but should be deleted.

**Source 4: Fallback redirects in page components (not SEO redirects)**

These are error guards that redirect to `/` or `/blog` when data is missing (e.g., invalid slug). These are correct behavior and not causing GSC issues.

### Redirect Chains Found

**No actual chains exist.** Every redirect goes directly from A → B with no intermediate hop. The 40 "Page with redirect" entries in GSC are likely caused by:

1. **Duplicate redirect definitions** — the 7 blog category redirects exist in BOTH `_redirects` and `routes.tsx`. If Lovable ever processed `_redirects` (or if the site was previously on Netlify), Google may have seen a double-redirect signal.
2. **The `_redirects` file itself** — Google may be detecting the file and interpreting it as redirect instructions even though Lovable doesn't process it, OR these are cached from a previous deployment platform.
3. **Trailing slash redirects** — the `_redirects` rule `/*/ → /:splat` could cause Google to flag every page visited with a trailing slash as a redirect.

### Fix Plan

**1. Delete `public/_redirects`**
Lovable hosting does not process this file. It serves no purpose and may confuse GSC if it was previously deployed on Netlify. The www-redirect and trailing-slash handling must be done at DNS/CDN level (Cloudflare, custom domain settings), not via this file.

**2. Delete `src/pages/Blog.tsx`**
Orphaned file — not imported in routes or anywhere. Contains a self-referential redirect (`/blog` → `/blog`) which is a potential loop if ever re-imported.

**3. Keep all 11 `<Navigate>` redirects in `routes.tsx`**
These are clean single-hop redirects. React Router's `<Navigate replace>` performs a client-side redirect with no chain. Google sees these as soft 301s when rendering the page.

### Complete Redirect Map After Cleanup

```text
ACTIVE REDIRECTS (all single-hop, via routes.tsx):

/blog/general-notary                        → /blog/general-notary-guides
/blog/loan-signing                          → /blog/loan-signing-guides
/blog/real-estate                           → /blog/real-estate-guides
/blog/estate-planning                       → /blog/estate-planning-guides
/blog/apostille                             → /blog/apostille-guides
/blog/business                              → /blog/business-guides
/blog/healthcare                            → /blog/healthcare-guides
/blog/general-notary-guides-undefined-ohio  → /blog/general-notary-guides
/blog/loan-signing-guides-undefined-ohio    → /blog/loan-signing-guides
/blog/real-estate-guides-undefined-ohio     → /blog/real-estate-guides
/blog/estate-planning-guides-undefined-ohio → /blog/estate-planning-guides

DELETED (no longer active):
- public/_redirects (entire file removed)
- src/pages/Blog.tsx (orphaned redirect file removed)
```

### Files changed

| File | Change |
|------|--------|
| `public/_redirects` | Delete entirely |
| `src/pages/Blog.tsx` | Delete entirely |

### Note on the 40 GSC "Page with redirect" entries

After this cleanup, the duplicate redirect source is eliminated. The remaining 11 client-side redirects are intentional and correct. Google should stop flagging duplicates within 1-2 crawl cycles after redeployment. If specific URLs persist in GSC as redirect issues, they can be individually inspected — but no chains exist in the current codebase.

