

## Automate Google Reviews: Full Setup

Everything below is handled by me. You only need to do **one thing** at the end: paste a Google API key (I'll give you exact steps when we get there).

---

### What Gets Built

1. **Seed your 35 existing reviews into the database** — bulk insert into the `testimonials` table that already exists
2. **New `useGoogleReviews` hook** — replaces hardcoded data with live database queries; keeps hardcoded reviews as instant fallback while loading
3. **Update 10 components** to use the new hook instead of hardcoded imports
4. **Admin Review Manager** — new page in your admin dashboard to add/edit/delete reviews and trigger a Google sync
5. **Edge function `fetch-google-reviews`** — calls Google Places API, inserts new reviews, skips duplicates
6. **Daily auto-fetch** — scheduled via `pg_cron` so new reviews appear on your site within 24 hours

---

### Step 1: Seed existing reviews into Supabase

Insert all 35 reviews from `googleReviews.ts` into the `testimonials` table with `source = 'google'`. Update aggregate to show 42 (you'll add the 7 new ones via the admin UI).

**Tool**: Supabase insert tool (bulk INSERT)

### Step 2: Create `useGoogleReviews` hook

**File**: `src/hooks/useGoogleReviews.ts`

- Fetches from `testimonials` where `source = 'google'`
- Computes `averageRating` and `totalReviews` dynamically
- Exports same helper functions: `getFeaturedReviews`, `getReviewsByService`, `getReviewsByLocation`
- Falls back to hardcoded data while loading (no blank screens)

### Step 3: Update 10 components to use the hook

| Component | Current Import |
|-----------|---------------|
| `TestimonialsSection.tsx` | `GOOGLE_REVIEWS`, `getFeaturedReviews`, `GOOGLE_REVIEWS_AGGREGATE` |
| `GoogleReviewsSection.tsx` | Same |
| `GoogleReviewsBadge.tsx` | `GOOGLE_REVIEWS_AGGREGATE` |
| `MiniTestimonials.tsx` | `getFeaturedReviews`, `GOOGLE_REVIEWS_AGGREGATE` |
| `LocationReviewsSection.tsx` | Uses passed props (no change needed) |
| `ReviewSchema.tsx` | `GOOGLE_REVIEWS`, `GOOGLE_REVIEWS_AGGREGATE` |
| `Reviews.tsx` | All helpers |
| `AboutUs.tsx` | `getFeaturedReviews`, `GOOGLE_REVIEWS_AGGREGATE` |
| `ServiceHubEnhanced.tsx` | `getReviewsByServiceTypes` |
| `ServiceHubTemplate.tsx` | `getReviewsByServiceTypes` |

Each file: replace static import with `useGoogleReviews()` hook call.

### Step 4: Admin Review Manager

**File**: `src/components/admin/ReviewManager.tsx`

- Table showing all reviews (name, rating, date, service, location)
- "Add Review" form — paste in reviewer name, rating, text, service type, location
- Edit/delete buttons per row
- "Sync from Google" button (calls the edge function)
- Total count + average rating badge at top

**File**: `src/components/admin/AdminDashboard.tsx` — add Review Manager to the menu

### Step 5: Google Places API Edge Function

**File**: `supabase/functions/fetch-google-reviews/index.ts`

- Reads `GOOGLE_PLACES_API_KEY` from secrets
- Calls Google Places API (New) to fetch reviews
- Deduplicates by reviewer name + date
- Inserts new reviews into `testimonials`
- Returns count of new reviews added

**Secret needed**: `GOOGLE_PLACES_API_KEY` (I'll walk you through getting this)

### Step 6: Schedule daily auto-fetch

Use `pg_cron` + `pg_net` to call the edge function once per day at 6 AM. New reviews appear on your site automatically.

---

### Files Summary

| File | Action |
|------|--------|
| `src/hooks/useGoogleReviews.ts` | Create — new hook |
| `src/components/admin/ReviewManager.tsx` | Create — admin UI |
| `src/components/admin/AdminDashboard.tsx` | Edit — add menu item |
| `supabase/functions/fetch-google-reviews/index.ts` | Create — edge function |
| `src/data/googleReviews.ts` | Edit — update aggregate to 42, keep as fallback |
| 9 components (listed above) | Edit — switch to hook |

