

## Canonical URL Errors — Root Cause Analysis and Fix

### The Problems

There are **three distinct issues** causing duplicate or incorrect canonical tags across the site:

---

### Problem 1: Duplicate canonical tag on EVERY page

**`index.html`** (line 15) has a hardcoded canonical:
```html
<link rel="canonical" href="https://www.signedontime.com/" />
```

The **`<Seo />` component** also injects a canonical via react-helmet on every page (line 52):
```html
<link rel="canonical" href="https://www.signedontime.com/loan-signings" />
```

**Result**: Every page in the site renders TWO `<link rel="canonical">` tags — the hardcoded homepage one from index.html, plus the correct one from the Seo component. React-helmet tries to manage the one it owns, but the hardcoded one in index.html persists. Google sees conflicting canonicals and flags errors.

**Fix**: Remove the hardcoded `<link rel="canonical">` from `index.html` (line 15). The Seo component already handles this correctly for every page including the homepage.

---

### Problem 2: LocalServiceTemplate uses `window.location.origin` instead of `BUSINESS_CONFIG.website`

**`src/components/templates/LocalServiceTemplate.tsx`** (line 55) builds the canonical from:
```ts
const currentUrl = `${window.location.origin}${route.path}`;
```

On preview/staging environments, this produces canonicals like:
```
https://id-preview--f665b454-76af-4bc7-8068-b320dee2518e.lovable.app/service/warren-county/...
```

Instead of the correct:
```
https://www.signedontime.com/service/warren-county/...
```

This affects **all ~1,400 dynamic city/service pages**.

**Fix**: Replace `window.location.origin` with `BUSINESS_CONFIG.website` in LocalServiceTemplate.tsx, and ideally migrate it to use the `<Seo />` component instead of manual DOM manipulation.

---

### Problem 3: DynamicCityPage and DynamicCountyPage set no canonical at all

**`src/pages/DynamicCityPage.tsx`** and **`src/pages/DynamicCountyPage.tsx`** use `useEffect` to set `document.title` and meta description manually, but never set a canonical URL. This means these pages inherit only the hardcoded homepage canonical from index.html — pointing every city and county page's canonical to `/`.

**Fix**: Add proper canonical tags to both pages, either via the `<Seo />` component or by adding canonical DOM manipulation alongside the existing title/description logic.

---

### Problem 4 (minor): DynamicLocationPage has a third canonical source

**`src/pages/DynamicLocationPage.tsx`** (line 91) adds its own canonical via a separate `<Helmet>` block, which works but creates a pattern inconsistency.

---

### Summary of fixes

| File | Issue | Fix |
|------|-------|-----|
| `index.html` | Hardcoded canonical conflicts with Seo component on all pages | Remove `<link rel="canonical">` line |
| `src/components/templates/LocalServiceTemplate.tsx` | Uses `window.location.origin` for canonical (wrong on staging) | Use `BUSINESS_CONFIG.website` |
| `src/pages/DynamicCityPage.tsx` | No canonical set — defaults to homepage | Add canonical via Seo component or DOM |
| `src/pages/DynamicCountyPage.tsx` | No canonical set — defaults to homepage | Add canonical via Seo component or DOM |
| `src/pages/locations/NotaryCincinnati45202.tsx` | Uses `document.title` manually, no canonical | Add canonical via Seo component |

### Files modified: 5
### Files NOT touched: Homepage (Index.tsx), Footer, any blog posts

