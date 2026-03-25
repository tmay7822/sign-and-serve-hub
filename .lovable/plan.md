

## Remaining SEO Issues & Fixes

Based on the SiteGuru report and codebase analysis, here is what still needs correction:

---

### Already Fixed (no action needed)
- www vs non-www redirect — done in `_redirects`
- Trailing slash redirect — done in `_redirects`
- Canonical URL logic in `Seo.tsx` — fixed to use `BUSINESS_CONFIG.website` + pathname
- NotFound page noindex — done
- Broken Mt. Healthy / Mt. Orab URLs — fixed
- Legacy `sign-and-serve-hub.lovable.app` references — all removed

---

### Still Broken: 36 pages use `document.title` instead of the `Seo` component

**Problem**: ~36 pages (most blog posts, `ServiceLocationTemplate`, `ServiceHubTemplate`, `BlogCategoryTemplate`, `DynamicBlogPostTemplate`, `Pricing`, `BlogHome`, `Index`) set SEO meta via `document.title = ...` and manual DOM manipulation in `useEffect` instead of using the `Seo` component. This means:
- No canonical URL on those pages (424-page issue)
- No structured data / JSON-LD (422-page issue)  
- No OG/Twitter tags for social sharing
- Duplicate/conflicting meta tags when both `Seo` and `document.title` are used

**Fix**: Add the `Seo` component to the major templates and pages that lack it. This covers the bulk of the 422+ affected pages because most are rendered through shared templates.

**Files to modify (8 templates/pages covering 400+ routes):**

| File | Routes Covered | Change |
|------|---------------|--------|
| `src/components/ServiceLocationTemplate.tsx` | ~200 location pages | Add `Seo` import + component; remove `useEffect` DOM manipulation |
| `src/components/templates/ServiceHubTemplate.tsx` | ~17 service hubs | Add `Seo` component; remove `document.title` useEffect |
| `src/components/templates/DynamicBlogPostTemplate.tsx` | ~50 dynamic blog posts | Add `Seo` component; remove `document.title` useEffect |
| `src/components/templates/BlogCategoryTemplate.tsx` | ~10 blog categories | Add `Seo` component; remove `document.title` useEffect |
| `src/pages/BlogHome.tsx` | 1 page | Add `Seo` component |
| `src/pages/Pricing.tsx` | 1 page | Add `Seo` component |
| `src/pages/Index.tsx` | Homepage | Add `Seo` component (already has schema, but no canonical) |
| `src/pages/DynamicLocationPage.tsx` | ~100 dynamic location pages | Add `Seo` component |

**Also fix 20+ individual blog pages** that use `useEffect` for meta (e.g., `SellerSigningDay.tsx`, `InternationalTravelConsent.tsx`, etc.) — migrate each to the `BlogPostTemplate` wrapper or add `Seo` directly.

---

### Still Broken: Internal linking (ALL pages, MEDIUM)

**Problem**: SiteGuru says pages lack internal links. The `InternalLinkingHub` component exists but is not used on most pages.

**Fix**: Add a "Related Services & Guides" section to `ServiceLocationTemplate` and `ServiceHubTemplate` using the existing `InternalLinkingHub` component. This automatically cross-links blog posts, location pages, and service hubs based on the service slug.

**Files to modify:**
| File | Change |
|------|--------|
| `src/components/ServiceLocationTemplate.tsx` | Add `InternalLinkingHub` before Footer |
| `src/components/templates/ServiceHubTemplate.tsx` | Add `InternalLinkingHub` before Footer |

---

### Still Broken: Heading structure (422 pages, MEDIUM)

**Problem**: Many pages have improper heading hierarchy (skipping H2, multiple H1s, or missing H1).

**Fix**: Audit and fix heading hierarchy in the 3 main templates:
- `ServiceLocationTemplate` — ensure single H1, sequential H2/H3
- `ServiceHubTemplate` — ensure single H1, sequential H2/H3
- `DynamicBlogPostTemplate` — ensure single H1

Since most of the 422 pages render through these templates, fixing the templates fixes the majority.

---

### Summary: Priority Order

1. **Add `Seo` component to 8 templates/pages** — fixes canonical URLs (424 pages), structured data (422 pages), and indexation (421 pages) in one pass
2. **Add `InternalLinkingHub` to 2 templates** — fixes internal linking for ~300 pages
3. **Fix heading hierarchy in 3 templates** — fixes heading issues for ~400 pages

Total files to edit: ~13 files, covering 500+ pages.

