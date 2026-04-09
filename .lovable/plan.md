

## Redesign County Hub Pages + Address Security Findings

### Problem
All 6 county hub pages render as walls of unstyled prose text. Service sections have no visual separation, FAQs render as static cards instead of interactive accordions, and there is no trust bar between the hero and content.

### Approach
Create a shared `CountyHubTemplate` component that all 6 pages use, eliminating duplicated layout code. This template will match the visual quality of the service hub pages.

### Part 1 — Create CountyHubTemplate Component

**New file: `src/components/templates/CountyHubTemplate.tsx`**

A reusable template accepting structured data props:

```typescript
interface CountyHubTemplateProps {
  county: string;
  title: string;
  subtitle: string;
  introText: string;
  publishDate: string;
  readTime: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  services: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    linkTo: string;
    linkText: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  otherCounties: Array<{ name: string; href: string }>;
  cityLinks?: Array<{ name: string; href: string }>;
  bottomHeading: string;
  bottomText: string;
}
```

**Template layout:**

1. **Hero section** — Dark gradient background (`bg-gradient-to-br from-primary via-primary/90 to-primary/80`), white text, breadcrumbs, Badge, H1, subtitle, author/date/read-time badges, StandardCTAButtons inline
2. **Trust bar** — Four icon+text badges in a horizontal strip: "30-45 Min Response", "6 Counties Served", "7 Days a Week", "25+ Years Experience" — matching the TrustSignals component style
3. **Intro paragraph** — Styled card with subtle border, proper typography
4. **Service sections** — Each service rendered as a Card with:
   - Lucide icon in a colored circle
   - H2 heading
   - Body text with proper `leading-relaxed`
   - Styled arrow-link button to service page
   - Alternating `bg-background` and `bg-muted/30` backgrounds per section
5. **Mid-page CTA** — StandardCTAButtons after 3rd service card
6. **FAQ section** — Use existing `FAQAccordion` component (interactive expand/collapse, includes its own schema)
7. **City links** (optional) — Grid of styled pill buttons
8. **County cross-links** — Row of county pill buttons matching current styling
9. **BookingCTASection** — Existing component
10. **Bottom CTA** — Final branded section with StandardCTAButtons

### Part 2 — Convert All 6 County Pages

Each page becomes a thin data file that imports `CountyHubTemplate` and passes its specific content as props. The FAQ schema `dangerouslySetInnerHTML` scripts are removed since `FAQAccordion` handles its own schema injection. The breadcrumb schema stays via `dangerouslySetInnerHTML` (proven stable on these pages).

Files modified:
- `src/pages/blog/NotaryGuideWarrenCounty.tsx`
- `src/pages/blog/NotaryGuideHamiltonCounty.tsx`
- `src/pages/blog/NotaryGuideMontgomeryCounty.tsx`
- `src/pages/blog/NotaryGuideButlerCounty.tsx`
- `src/pages/blog/NotaryGuideGreeneCounty.tsx`
- `src/pages/blog/NotaryGuideClintonCounty.tsx`

Each page will define its data (services array, FAQs, county-specific text) and render `<CountyHubTemplate {...data} />`.

### Part 3 — Service Icons Mapping

Each service section gets an appropriate Lucide icon:
- Loan Signings → `Home`
- Estate Planning → `FileText`
- Healthcare → `Heart`
- Vehicle Title → `Car`
- Apostille → `Globe`
- Business → `Briefcase`
- Military → `Shield`
- College → `GraduationCap`
- Rural/Farm → `Trees`

### Part 4 — Security Findings

The scan shows 5 findings. Most are pre-existing and outside the scope of this visual redesign. Here is the triage:

| Finding | Level | Action |
|---------|-------|--------|
| Admin dashboard no auth | error | Pre-existing. User stated they will add auth later. Note for future. |
| Blog HTML injection (dangerouslySetInnerHTML) | warn | Pre-existing. Requires DOMPurify. Can address separately. |
| Edge function service role bypass | warn | Intentional design for anonymous chat. Already documented. |
| AI leads missing admin access | warn/error | Pre-existing RLS gap. Requires migration + admin auth. |
| Hardcoded anon key | info | Code quality issue. Can fix by importing from supabase client. |

**Quick fix in this pass**: Fix the hardcoded anon key in `AIChatWidget.tsx` by importing from the Supabase client module instead. This resolves the `info`-level finding with minimal risk.

The `error`-level findings (admin auth, leads table) require Supabase migrations and authentication implementation — these should be a separate dedicated task.

### Files Summary

| File | Action |
|------|--------|
| `src/components/templates/CountyHubTemplate.tsx` | Create — shared template |
| `src/pages/blog/NotaryGuideWarrenCounty.tsx` | Rewrite — use template |
| `src/pages/blog/NotaryGuideHamiltonCounty.tsx` | Rewrite — use template |
| `src/pages/blog/NotaryGuideMontgomeryCounty.tsx` | Rewrite — use template |
| `src/pages/blog/NotaryGuideButlerCounty.tsx` | Rewrite — use template |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | Rewrite — use template |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | Rewrite — use template |
| `src/components/AIChatWidget.tsx` | Modify — import anon key from supabase client |

**Total: 8 files (1 created, 7 modified)**

