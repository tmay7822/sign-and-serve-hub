

## Add Consistent CTA to Reviews Page

You already have a `StandardCTAButtons` component used across the site (blog pages, service hubs, bottom of `BasePageTemplate`). The reviews page is missing a top CTA.

### Plan

**1. Add a top CTA bar inside the Reviews hero section**

In `src/pages/Reviews.tsx`, add a `StandardCTAButtons` block right after the hero subtitle text (line ~127), inside the hero section. This mirrors the `TopMiniCTA` pattern used on blog posts — a subtle card with the tagline "Need a mobile notary in Southwest Ohio? We come to you." followed by the three standard buttons (Book Now, Get Quote, Call Now).

**2. No new components needed**

The `StandardCTAButtons` component already renders the correct three buttons with consistent styling. The `BasePageTemplate` already renders a bottom CTA section. So the reviews page will have CTA at the top (in the hero) and bottom (from the template) — matching the pattern on other pages.

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Reviews.tsx` | Add `StandardCTAButtons` inside the hero section after the subtitle |

### Result

- Top of reviews page shows Book Now / Get Quote / Call Now buttons
- Bottom CTA from `BasePageTemplate` remains
- Same button component used everywhere — any future style change applies globally

