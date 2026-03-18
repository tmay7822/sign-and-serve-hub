

## Simplify UX for Elderly/Non-Technical Users

Implementing the approved plan: intent-based homepage, simplified navigation, and streamlined mobile CTA bar. All 500+ SEO pages remain intact.

### Changes

**1. `src/components/HeroSection.tsx`** — Replace the keyword-heavy content card with 4 large intent-based buttons using plain language:
- "I Need a Document Notarized" → `/general-notary`
- "I'm Buying or Selling a Car" → `/vehicles-dmv`
- "I Have a Real Estate Closing" → `/loan-signings`
- "I Need Hospital or Bedside Notary" → `/healthcare-notary`

Each button: large icon, large text (18px+), 60px+ height for easy tapping. Keep the H1/H2/H3 SEO headings, trust badges, Google reviews badge, and StandardCTAButtons above the intent buttons. Remove the value proposition checkmarks to reduce visual noise.

**2. `src/components/ServicesSection.tsx`** — Wrap the full 8-service grid in a collapsible section. Default state: collapsed. Toggle button reads "View All Services". The grid renders in DOM for SEO crawlers but is visually hidden until expanded.

**3. `src/components/Header.tsx`** — Simplify desktop nav from 5 mega-menu dropdowns to 3 items:
- **Services** — simple dropdown listing top 5 services (no mega-menu grid)
- **About & Reviews** — single link to `/about`
- **Contact** — single link to `/contact`

Move Blog, FAQ, Service Areas, Documents to footer only. Simplify mobile nav: show 4 intent options at top, then "More" section with remaining links.

**4. `src/components/SmartMobileCtaBar.tsx`** — Reduce to 2 large buttons only:
- **Call Now** (green, `tel:` link)
- **Book Online** (blue, opens BookingWidget)

Remove the contextual primary action, quote calculator, and chat button. Larger touch targets (min 56px height).

**5. `src/pages/Index.tsx`** — Reorder sections:
1. Header
2. HeroSection (with intent buttons)
3. TrustSignals
4. TestimonialsSection
5. ServicesSection (collapsible)
6. FAQSection
7. Footer

