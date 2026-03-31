

## Fix Contact Page: Add CTA and Remove Blank Space

### Problem
The Contact page has a tiny hero section that's mostly invisible (the gradient hero with "Calculate Your Quote" is barely showing), leaving a large blank gap before the contact cards. It also lacks the standard CTA buttons (Book Now, Get Quote, Call Now) that every other page uses.

### Plan

**Update `src/pages/Contact.tsx`:**

1. **Wrap in `BasePageTemplate`** — Replace the manual Header/Footer with `BasePageTemplate` to get the standard bottom CTA automatically (matching all other pages).

2. **Expand the hero section** — Move it into `BasePageTemplate`'s `heroSection` prop so it renders properly. Add `StandardCTAButtons` below the Google Reviews badge in the hero, giving users immediate action options.

3. **Remove redundant spacing** — The `mb-16` on the contact cards grid creates excessive whitespace. Reduce to `mb-8`.

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Contact.tsx` | Switch to `BasePageTemplate`, add `StandardCTAButtons` in hero, tighten spacing |

