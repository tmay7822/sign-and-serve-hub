

## Fix: Reviews Not Updating on Homepage

### Root Cause (two issues)

1. **Reviews may not be saving** — The `testimonials` table requires admin authentication (RLS policy). If you weren't logged in as admin when adding reviews, the inserts failed silently. The toast may have shown success but Supabase rejected the write. Currently there are **40 reviews** in the database, not 42.

2. **Homepage doesn't refresh automatically** — The `useGoogleReviews` hook only fetches once when the page loads. After adding reviews in the admin panel, navigating back to the homepage reuses cached data. A hard refresh (Ctrl+R) would show updated reviews, but we should make this seamless.

### Fix Plan

**Step 1: Add Supabase Realtime subscription to the hook**

Update `src/hooks/useGoogleReviews.ts` to subscribe to realtime changes on the `testimonials` table. When a review is inserted, updated, or deleted, the hook automatically re-fetches. This means the homepage (and all other pages using the hook) update within seconds of adding a review in the admin panel.

Also create a migration to enable realtime on the `testimonials` table:
```sql
ALTER PUBLICATION supabase_realtime ADD TABLE testimonials;
```

**Step 2: Improve error handling in ReviewManager**

Update `src/components/admin/ReviewManager.tsx` to better surface RLS/auth errors when saving reviews. Currently if the insert fails due to permissions, the user may not get clear feedback.

### Files Changed

| File | Change |
|------|--------|
| `src/hooks/useGoogleReviews.ts` | Add Supabase realtime subscription to auto-refresh on changes |
| `src/components/admin/ReviewManager.tsx` | Improve error messages for failed saves |
| Migration SQL | Enable realtime on `testimonials` table |

### Result

After this fix:
- Add a review in the admin panel → homepage updates automatically (no refresh needed)
- Review count updates across all pages in real time
- Clear error messages if a save fails due to permissions

