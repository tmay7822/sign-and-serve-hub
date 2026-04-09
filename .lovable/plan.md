

## Improve Lead Capture Across Site

### Part 1 — Contact Page Rewrite

**File: `src/pages/Contact.tsx`** — Full rewrite

Replace current layout with:
- `<Seo />` with new title/description
- BreadcrumbList schema (Home → Contact) via `dangerouslySetInnerHTML`
- `<Header />` + `<Footer />` (stop using `BasePageTemplate` — use standalone layout for full control)
- Two-column desktop / single-column mobile layout:
  - **Left column**: Contact info cards (Phone, Email, Service Area, Hours) + "Response Promise" box
  - **Right column**: Contact form with controlled state, validation, service dropdown, GHL webhook placeholder
- SMS "Prefer to Text?" card below the form
- Form submission: attempt `fetch()` to `VITE_GHL_CONTACT_WEBHOOK` env var; if empty string, skip fetch, log console warning, show success message anyway
- Success message: personalized with name, 30-minute promise, call CTA
- Error message: fallback to call CTA

Form fields (controlled via `useState`):
- Full Name (required)
- Phone Number (required) + helper text
- Email (optional)
- Service Needed (select dropdown, required) — 8 options
- City or ZIP Code (required)
- Preferred Date and Time (text input)
- Message (textarea, optional)

Submit button: red, full-width mobile, loading state via `isSubmitting` state.

### Part 2 — Scroll-Triggered Lead Capture

**File: `src/components/ScrollLeadCapture.tsx`** — Create new

- Small floating card (320px desktop, full-width mobile)
- Bottom-right on desktop, bottom slide-up on mobile
- Triggers at 65% scroll depth
- `sessionStorage` key `sot-lead-capture-shown` — show once per session
- X close button with `aria-label="Close"`
- Hidden on `/book-now`, `/contact`, and non-hub blog posts
- Content: "Need a Notary Today?" headline, subtext, phone button, book button
- z-index below SmartMobileCtaBar (z-40 vs z-50) to avoid overlap
- Bottom offset on mobile to clear the floating CTA bar (bottom-24)

**File: `src/App.tsx`** — Add `<ScrollLeadCapture />` to Layout, positioned after `<SmartMobileCtaBar />`

### Part 3 — Availability Indicator

**File: `src/components/AvailabilityIndicator.tsx`** — Create new

- Uses `new Date()` to check hour (7-22 = open)
- Green dot + "We're available now — typical response within 30 minutes" during hours
- Gray dot + "We're currently closed but check back at 7AM..." outside hours
- Small inline component, no API calls

**Place on:**
- `src/pages/Contact.tsx` — below H1
- `src/pages/BookNow.tsx` — in trust bar area

### Part 4 — SMS Option on Contact Page

Included in the Contact.tsx rewrite (Part 1). A card with `sms:5132269052` link below the form section.

### Part 5 — FAQ Page Conversion

**File: `src/pages/FAQ.tsx`** — Modify

- Add note below H1: "Can't find your answer? Call or text (513) 226-9052..."
- Replace "Still Have Questions?" section with "Ready to Schedule?" section containing two CTA buttons (Book Appointment + Call)
- Replace `useEffect` meta tags with `<Seo />` component

### Files Summary

| File | Action |
|------|--------|
| `src/pages/Contact.tsx` | Rewrite — new form, two-column layout, GHL placeholder, SMS card |
| `src/components/ScrollLeadCapture.tsx` | Create — scroll-triggered floating CTA |
| `src/components/AvailabilityIndicator.tsx` | Create — business hours indicator |
| `src/pages/FAQ.tsx` | Modify — add conversion CTAs, replace useEffect with Seo |
| `src/pages/BookNow.tsx` | Modify — add AvailabilityIndicator |
| `src/App.tsx` | Modify — add ScrollLeadCapture to Layout |

**Total: 6 files (2 created, 4 modified)**

