

## Improve Booking Experience Across Site

### Overview

Redesign the BookNow page, replace the existing mobile CTA bar with a simpler floating "Book Appointment" link button, add a "Book Now" button to the header, create a reusable booking CTA section component, and add it to 7 service pages + 6 county hub pages.

### Part 1 — BookNow Page Redesign

**File: `src/pages/BookNow.tsx`** — Full rewrite

New structure (top to bottom):
1. `<Seo />` with updated title/description/canonical
2. `<Header />` (use site-wide header instead of custom minimal header)
3. BreadcrumbList schema (Home → Book Now) via `dangerouslySetInnerHTML`
4. Hero: H1 "Book Your Mobile Notary Appointment", subtitle, trust bar (5 items as inline badges)
5. BookingWidget placed prominently as first interactive element, full-width on mobile
6. "Prefer to Call or Text?" section — 3 cards (Call/Text, Service Area, Same Day)
7. "How It Works" — 4 steps in a grid
8. "Service Pricing" — brief note + link to /pricing
9. `<Footer />`

Removes: CompactServicesGrid, MiniTestimonials, QuickTrustBadges imports, QuoteCalculatorModal, custom minimal header/footer

### Part 2 — Floating Mobile Booking Button

**File: `src/components/SmartMobileCtaBar.tsx`** — Rewrite

Replace the current 2-button bar (Call + Book Online dialog) with a simpler approach:
- Keep "Call Now" green button
- Change "Book Online" from `BookingWidget` dialog trigger to a simple `<Link to="/book-now">` styled button
- Hide on `/book-now` page using `useLocation().pathname`
- Keep existing animation, z-index, and spacer behavior

This avoids adding a new component — just modifies the existing one to link to `/book-now` instead of opening the booking dialog inline.

### Part 3 — Header Book Now Button

**File: `src/components/Header.tsx`**

The header currently has a "Get Quote" button. Add a "Book Now" button next to it:
- Desktop: Add `<Link to="/book-now">` styled as red CTA button (`bg-red-600 text-white`) before the "Get Quote" button
- Mobile: Add "Book Now" link button in the mobile CTA section at bottom of mobile menu

### Part 4 — Reusable Booking CTA Section

**File: `src/components/BookingCTASection.tsx`** — Create new

A reusable component accepting `serviceName: string` and optional `countyName: string`:
- Light gray background, generous padding, centered text
- Heading: "Ready to Schedule Your {serviceName} Appointment?" (or county variant)
- Subtext about same-day mobile service
- Two buttons: "Book Online" → `/book-now`, "Call (513) 226-9052" → `tel:5132269052`
- Small text: "Available Monday-Sunday 7AM-10PM"

### Part 5 — Add BookingCTASection to Service Pages

**7 files modified** — add `<BookingCTASection>` import and render it between content and FAQ:

| File | serviceName |
|------|------------|
| `src/pages/LoanSignings.tsx` | "Loan Signing" |
| `src/pages/EstatePlans.tsx` | "Estate Planning" |
| `src/pages/GeneralNotary.tsx` | "General Notary" |
| `src/pages/Apostille.tsx` | "Apostille" |
| `src/pages/HealthcareNotary.tsx` | "Healthcare Document" |
| `src/pages/VehiclesDMV.tsx` | "Vehicle Title" |
| `src/pages/BusinessServices.tsx` | "Business Document" |

These pages use `ServiceHubEnhanced` or `ServiceHubTemplate`. The booking CTA will be added as a prop or by modifying the template to accept and render a `bookingCTAName` prop, which is cleaner than editing each page individually.

**Approach**: Add `bookingServiceName?: string` prop to `ServiceHubEnhanced` and `ServiceHubTemplate`. When provided, render `<BookingCTASection>` before the FAQ section. Then pass the prop from each page component.

### Part 6 — Add BookingCTASection to County Hub Pages

**6 files modified** — add `<BookingCTASection>` with county-specific heading before the bottom CTA section:

| File | countyName |
|------|-----------|
| `NotaryGuideHamiltonCounty.tsx` | "Hamilton County" |
| `NotaryGuideWarrenCounty.tsx` | "Warren County" |
| `NotaryGuideMontgomeryCounty.tsx` | "Montgomery County" |
| `NotaryGuideButlerCounty.tsx` | "Butler County" |
| `NotaryGuideGreeneCounty.tsx` | "Greene County" |
| `NotaryGuideClintonCounty.tsx` | "Clinton County" |

### Files Summary

| File | Action |
|------|--------|
| `src/pages/BookNow.tsx` | Rewrite |
| `src/components/SmartMobileCtaBar.tsx` | Modify — link to /book-now, hide on /book-now |
| `src/components/Header.tsx` | Modify — add Book Now button |
| `src/components/BookingCTASection.tsx` | Create — reusable booking CTA |
| `src/components/templates/ServiceHubEnhanced.tsx` | Modify — add bookingServiceName prop |
| `src/components/templates/ServiceHubTemplate.tsx` | Modify — add bookingServiceName prop |
| `src/pages/LoanSignings.tsx` | Modify — pass bookingServiceName |
| `src/pages/EstatePlans.tsx` | Modify — pass bookingServiceName |
| `src/pages/GeneralNotary.tsx` | Modify — pass bookingServiceName |
| `src/pages/Apostille.tsx` | Modify — pass bookingServiceName |
| `src/pages/HealthcareNotary.tsx` | Modify — pass bookingServiceName |
| `src/pages/VehiclesDMV.tsx` | Modify — pass bookingServiceName |
| `src/pages/BusinessServices.tsx` | Modify — pass bookingServiceName |
| `src/pages/blog/NotaryGuideHamiltonCounty.tsx` | Modify — add BookingCTASection |
| `src/pages/blog/NotaryGuideWarrenCounty.tsx` | Modify — add BookingCTASection |
| `src/pages/blog/NotaryGuideMontgomeryCounty.tsx` | Modify — add BookingCTASection |
| `src/pages/blog/NotaryGuideButlerCounty.tsx` | Modify — add BookingCTASection |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | Modify — add BookingCTASection |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | Modify — add BookingCTASection |

**Total: 19 files (1 created, 18 modified)**

