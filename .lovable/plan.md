

## Remove Brown County Pages + Add Redirects

### Current State
- Brown County has **no routes in `routes.tsx`**, `prerenderRoutes.ts`, `sitemap.xml`, or the CSV file
- The `/service/brown-county` path only works via the **dynamic catch-all** route `service/:county` → `DynamicCountyPage`
- `/service/clermont-county/mt-orab-45154` does not exist anywhere — no redirect needed
- Brown County is referenced in 2 data files: `gmbServiceAreas.ts` (county entry) and `gmbBlogPosts.ts` (one linked page reference)
- Miami County pages are completely separate and will not be touched

### Changes

#### 1. Add redirects in `src/routes.tsx`
Add 3 static redirect routes **before** the dynamic `service/:county` catch-all:

```tsx
{ path: 'service/brown-county', element: <Navigate to="/service" replace /> },
{ path: 'service/brown-county/georgetown-45121', element: <Navigate to="/service" replace /> },
{ path: 'service/brown-county/mt-orab-45154', element: <Navigate to="/service" replace /> },
```

These are single-hop redirects directly to `/service`. The `replace` prop ensures browser history is clean.

#### 2. Update `src/data/gmbServiceAreas.ts`
Remove or comment out the entire Brown County object from the counties array so it no longer generates links in the Service Areas page or GMB exports.

#### 3. Update `src/data/gmbBlogPosts.ts`
Change the `linkedPage` for the Brown County GMB post from `/service/brown-county` to `/service` so it doesn't link to a redirected page.

#### 4. Update `src/pages/admin/SiteMapViewer.tsx`
Remove the "Brown County Cities" filter line from the admin sitemap viewer categories.

#### 5. No sitemap/prerenderRoutes changes needed
Brown County URLs are already absent from both `prerenderRoutes.ts` and `public/sitemap.xml`. No cleanup required there.

### Confirmations
1. All Brown County redirects are single hop → `/service`
2. No redirect chains created
3. Miami County pages completely untouched
4. Sitemap already clean — no Brown County URLs present
5. Sitemap URL count unchanged (currently 1,514)

### Files Modified

| File | Action |
|------|--------|
| `src/routes.tsx` | Add 3 redirect routes for Brown County |
| `src/data/gmbServiceAreas.ts` | Remove Brown County entry |
| `src/data/gmbBlogPosts.ts` | Update linkedPage reference |
| `src/pages/admin/SiteMapViewer.tsx` | Remove Brown County filter |

**Total: 4 files modified**

