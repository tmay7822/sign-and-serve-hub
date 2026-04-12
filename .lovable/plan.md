

## Client-Focused Language and Credential Placement Updates

### PART 1 — Trust Bar Badges

**File: `src/components/landing/QuickTrustBadges.tsx`**

| Current | New |
|---------|-----|
| "Background Checked" | "Background Checked" (no change) |
| "NNA Certified" | "Documents Done Right" |
| "Fully Insured" | "Fully Insured and Verified" |
| "Same Day Availability" | "Same Day Availability" (no change) |

Lines 6-7 updated. No other hero content touched.

---

### PART 2 — Healthcare Page Opener

**File: `src/pages/HealthcareNotary.tsx`**

Current summary block text: "We can be there today. Call or text (513) 226-9052 and we will come to your hospital, nursing home, or care facility anywhere in Southwest Ohio."

Updated to add the urgency line: "We can be there today. Call or text (513) 226-9052 and we will come to your hospital, nursing home, or care facility anywhere in Southwest Ohio. No appointment needed for urgent situations."

Buttons remain `[{ type: 'call' }]` which renders "Call (513) 226-9052".

**Current content order after H1** (confirmed from ServiceHubEnhanced lines 108-120):
1. H1: service name
2. Summary paragraph (service.summary)
3. `summaryBlock` (the ServiceSummaryBlock with call button)
4. StandardCTAButtons

The summary block IS the first prominent callout after H1. No credential language appears above it. The `service.summary` is a brief descriptive line from the service data — not credentials.

---

### PART 3 — Verify Service Page Order

All 5 pages use `ServiceHubEnhanced` which renders in this order: H1 → service.summary → summaryBlock → CTA buttons. No credential language above the summary block on any page. **No changes needed** — just confirming the order is correct.

---

### PART 4 — About Page Credential Explanations

**File: `src/pages/AboutUs.tsx`** (lines 336-347)

Convert the simple string list into objects with credential name + plain-language explanation:

1. "NNA Certified Notary Public" → "Trained and tested to the highest national standard for notary practice"
2. "NNA Certified Loan Signing Agent" → "Specialized training for mortgage closings — your loan documents handled correctly every time"
3. "Background Screened and Verified" → "Cleared through national background screening — you know exactly who is coming to your home"
4. "Errors and Omissions Insurance" → "Fully insured against errors — your documents and transaction are protected"
5. "25+ Years Commercial and Residential Lending Experience" → "Two and a half decades in commercial and residential lending means we have seen every situation and know how to handle it"

Each item renders the credential name in bold with the explanation as smaller muted text below.

---

### Confirmations

1. Trust bar badges: "NNA Certified" → "Documents Done Right", "Fully Insured" → "Fully Insured and Verified"
2. Healthcare page: summary block is first visible callout after H1, Call Now button immediately after, no credentials above
3. **No schema markup modified** — zero changes to HomepageSchema, LocalBusinessSchema, BreadcrumbSchema, CountyHubTemplate, or FAQ page schema

### Files Modified
- `src/components/landing/QuickTrustBadges.tsx`
- `src/pages/HealthcareNotary.tsx`
- `src/pages/AboutUs.tsx`

