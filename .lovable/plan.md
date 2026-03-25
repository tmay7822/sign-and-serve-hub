

## Fix Sitemap Accessibility + URL Consistency

**Problem**: Two issues preventing Google Search Console from fetching the sitemap:

1. **`public/sitemap.xml`** contains URLs without `www` (e.g., `https://signedontime.com/general-notary`) but the canonical domain is `https://www.signedontime.com`. Google Search Console will flag these as mismatched.

2. **`public/_redirects`** is missing the SPA catch-all fallback rule. Without `/* /index.html 200`, the deployed site can't serve client-side routes properly — and Google gets 404s on most pages.

### Changes

**1. `public/_redirects`** — Add the SPA fallback rule at the end (after existing 301 redirects). Static files like `sitemap.xml` and `robots.txt` are automatically served by Netlify before redirect rules apply, so they remain accessible.

```
/* /index.html 200
```

**2. `public/sitemap.xml`** — Regenerate with `www` prefix on all 669 lines. Replace every `https://signedontime.com` with `https://www.signedontime.com`.

**3. `public/robots.txt`** — Verify the sitemap URL uses `www`. Update if needed.

### Result
- Google Search Console can fetch `https://www.signedontime.com/sitemap.xml`
- All sitemap URLs match the canonical `www` domain
- SPA routing works on the deployed site
- All 500+ pages remain indexed

