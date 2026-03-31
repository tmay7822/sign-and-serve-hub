
Goal: make the homepage hero review badge use live review data instead of hardcoded text.

What I found
- `src/components/HeroSection.tsx` is still hardcoded:
  - rating: `5.0`
  - count: `• 35 Reviews`
- Your realtime-enabled hook already exists in `src/hooks/useGoogleReviews.ts`, so the hero just needs to consume it.

Implementation plan
1. Update HeroSection to use live review stats
- In `src/components/HeroSection.tsx`:
  - import `useGoogleReviews`
  - read `averageRating` and `totalReviews` from the hook
  - replace hardcoded `5.0` and `• 35 Reviews` with dynamic values:
    - rating: `averageRating.toFixed(1)`
    - count: `• {totalReviews} Review(s)` (pluralize correctly)

2. Keep visual design unchanged
- Preserve the existing Google-style pill, stars, spacing, and typography.
- Only swap the two text values to dynamic data so the section looks identical but updates automatically.

3. Add safe display behavior
- Keep fallback-friendly rendering (no blank values while data loads).
- If needed, use the same formatting pattern used in `GoogleReviewsBadge`/`TestimonialsSection` for consistency.

4. Verify end-to-end behavior
- Add a test review in `/admin` Review Manager.
- Confirm hero count changes automatically on `/` without manual edits.
- Confirm no console errors and no layout regressions at desktop/mobile widths.

Files to change
- `src/components/HeroSection.tsx` (only)

Expected result
- Hero section review badge always reflects the current database-backed review count/rating, just like other sections already using `useGoogleReviews`.
