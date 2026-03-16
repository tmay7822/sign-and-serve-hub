

## Problem: Hydration Errors from SSG Setup

Your site is failing to load due to **React hydration errors** (#418 and #423). These occur because `vite-react-ssg` pre-renders HTML at build time, but when React tries to "hydrate" (attach to) that HTML in the browser, the content doesn't match — causing the entire page to fail.

**Root cause**: Lovable deploys as a standard **Single Page Application (SPA)**, not a static site generator. The `vite-react-ssg` library expects a different build pipeline that Lovable doesn't support. The SSG-rendered HTML and client-side React are out of sync, breaking the page.

### Fix: Switch to Standard SPA Rendering

Replace the SSG setup with standard React client-side rendering, which is what Lovable's deployment supports.

**Files to modify:**

1. **`src/main.tsx`** — Replace `ViteReactSSG` with standard `createRoot` from `react-dom/client`, wrapped in `BrowserRouter` with the route configuration rendered via `useRoutes`.

2. **`src/routes.tsx`** — Change the `RouteRecord` type from `vite-react-ssg` to standard `RouteObject` from `react-router-dom`. Remove the `getStaticPaths` export since SSG is no longer used.

3. **`src/App.tsx`** — No changes needed (already uses `<Outlet />`).

### What stays the same

- All your routes, lazy loading, and page components remain untouched
- The `prerenderRoutes.ts` file stays for sitemap generation (used by the Vite plugin)
- SEO meta tags, structured data, and all page content are preserved
- The sitemap generator plugin in `vite.config.ts` continues to work

### Technical details

```text
Before (broken):
  main.tsx → ViteReactSSG({ routes }) → SSG hydration → MISMATCH → crash

After (fix):
  main.tsx → createRoot(#root) → BrowserRouter + useRoutes → normal SPA rendering
```

The `vite-react-ssg` dependency can optionally be removed from `package.json` afterward, but it won't cause issues if left in.

