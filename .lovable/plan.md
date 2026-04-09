

## Redesign NotFound.tsx — Helpful 404 Page

### Overview
Replace the minimal 404 page with a fully branded, helpful page that guides lost visitors to key services, includes a click-to-call CTA, trust signals, and proper SEO tags. Uses existing components (Header, Footer, Button, Card, QuickTrustBadges) for consistency.

### Design

```text
┌─────────────────────────────────┐
│           Header                │
├─────────────────────────────────┤
│  H1: Page Not Found            │
│  Friendly message paragraph     │
│  [Call (513) 226-9052] red btn  │
├─────────────────────────────────┤
│  "What are you looking for?"    │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│  │Book│ │Loan│ │Est│ │Gen│      │
│  └───┘ └───┘ └───┘ └───┘      │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│  │Apo│ │Veh│ │Con│ │All│       │
│  └───┘ └───┘ └───┘ └───┘      │
├─────────────────────────────────┤
│  Trust bar (NNA | BG | Ins | 7d)│
├─────────────────────────────────┤
│           Footer                │
└─────────────────────────────────┘
```

### Changes — 1 file

**`src/pages/NotFound.tsx`** — Full rewrite:

- Wrap in `Header` + `Footer` for site consistency
- `Helmet` with:
  - `<title>Page Not Found | Signed On Time Mobile Notary</title>`
  - `<meta name="robots" content="noindex, follow" />`
  - `<meta name="prerender-status-code" content="404" />` (keep existing)
- H1: "Page Not Found"
- Paragraph with friendly message
- Large red call button using `Button` variant `"cta"` linking to `tel:5132269052`
- "What are you looking for?" section with 8 link cards in a responsive grid (2 cols mobile, 4 cols desktop), each using `Card` + `Link` from react-router
- `QuickTrustBadges` component below the links (already exists, shows NNA/BG/Insured/Same Day)
- Keep the existing `console.error` log for 404 tracking

