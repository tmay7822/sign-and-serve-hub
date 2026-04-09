

## Reusable Need-Based Navigation Component

### Summary
Create a `NeedBasedNavigation` component with 10 intent-based buttons and deploy it across 10 pages: Homepage, BookNow, FAQ, 404, Resources, and 6 county hub pages.

### Component Design

**File**: `src/components/NeedBasedNavigation.tsx`

**Props**:
- `heading: string`
- `subtext?: string`
- `variant: 'full' | 'services' | 'guides' | 'compact'`
- `county?: string` (for county hub headings)
- `onButtonClick?: (serviceId: string) => void` (for BookNow scroll behavior)

**Button data** — 10 buttons total, stored as arrays inside the component:

| # | Headline | Icon | Service Link | Guide Link | Urgent? |
|---|----------|------|-------------|------------|---------|
| 1 | I Need a Document Notarized | FileText | /general-notary | /blog/general-notary-what-to-bring | No |
| 2 | I'm Buying or Selling a Car | Car | /vehicles-dmv | /blog/ohio-car-title-transfer-requirements | No |
| 3 | I Have a Real Estate Closing | Home | /loan-signings | /blog/what-happens-loan-signing | No |
| 4 | I Need Hospital or Bedside Notary | Heart | /healthcare-notary | /blog/hospital-notary-what-to-expect | No |
| 5 | I Need a Will or Trust Notarized | ScrollText | /estate-plans | /blog/wills-trusts-poa-checklist | No |
| 6 | I Need Power of Attorney | Shield | /estate-plans | /blog/poa-pitfalls | No |
| 7 | I Need Documents for International Use | Globe | /apostille | — | No |
| 8 | My Student is Turning 18 | GraduationCap | /college-18-plus | — | No |
| 9 | I Need a Notary Today | Clock | /book-now | — | YES (red) |
| 10 | I Need a Notary After Hours | Moon | /book-now | — | YES (red) |

**Variant logic**:
- `full` = all 10 buttons (Homepage, BookNow)
- `services` = buttons 1-8, no urgent buttons (County hubs)
- `guides` = buttons 1-6 with guide links instead of service links (Resources)
- `compact` = buttons 1-6 only (FAQ, 404)

**Styling**: Identical to existing homepage cards — white bg, rounded-xl, border-2, gradient icon box, bold headline, subtitle, ArrowRight. Urgent buttons get `bg-destructive text-white` with white icon box.

**Grid**: `grid-cols-1 sm:grid-cols-2 gap-4` (2-col on tablet/desktop per requirement).

### Page Integration

| File | Change |
|------|--------|
| `src/components/NeedBasedNavigation.tsx` | **CREATE** — reusable component |
| `src/components/HeroSection.tsx` | Replace inline `intentOptions` grid with `<NeedBasedNavigation variant="full" heading="What Do You Need Notarized?" />` |
| `src/pages/BookNow.tsx` | Add component above BookingWidget section with `onButtonClick` that scrolls to booking widget and pre-selects service via query param or ref |
| `src/pages/FAQ.tsx` | Add component above `<FAQSection />` with heading "Find your answer faster", variant `compact` |
| `src/pages/NotFound.tsx` | Replace `quickLinks` grid with component, heading "What were you looking for?", variant `compact` |
| `src/pages/Resources.tsx` | Add component above "Most Popular" section with heading "Find the right guide for your situation", variant `guides` |
| `src/components/templates/CountyHubTemplate.tsx` | Add optional `county` prop rendering, insert component after intro card and before service sections, variant `services` |
| `src/pages/blog/NotaryGuideWarrenCounty.tsx` | No change needed — template handles it |
| `src/pages/blog/NotaryGuideHamiltonCounty.tsx` | No change needed |
| `src/pages/blog/NotaryGuideMontgomeryCounty.tsx` | No change needed |
| `src/pages/blog/NotaryGuideButlerCounty.tsx` | No change needed |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | No change needed |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | No change needed |

### BookNow Scroll Behavior
When a button is clicked on the BookNow page, the `onButtonClick` callback will:
1. Scroll smoothly to the booking widget section (via `id="booking-widget"`)
2. The service name mapping will be passed to enable future pre-selection

### Files Created/Modified
- **1 file created**: `NeedBasedNavigation.tsx`
- **6 files modified**: `HeroSection.tsx`, `BookNow.tsx`, `FAQ.tsx`, `NotFound.tsx`, `Resources.tsx`, `CountyHubTemplate.tsx`
- **Total: 7 files**

