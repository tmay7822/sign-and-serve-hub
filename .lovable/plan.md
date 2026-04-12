

## Add Dates, Author, Acronym Expansion, and Summary Table to All Blog Posts

This is a large update touching 53+ blog post files, the BlogPostTemplate, and the Resources page. The approach centralizes as much as possible in the shared template to minimize per-file changes.

---

### 1. BLOGPOSTTEMPLATE UPDATE (`src/components/templates/BlogPostTemplate.tsx`)

Add two new props: `lastUpdated?: string` and remove hardcoded author — add visible author line.

**In the hero section (after the publish date line ~109-116), add:**
- "Published: [date] | Last Updated: [date]" display
- "Author: [Terry May — Mobile Notary & Loan Signing Agent, Waynesville OH](/about)" as an internal Link

**Update the Article schema** to include `dateModified`.

This one template change covers all 29 BlogPostTemplate-based posts automatically (they already pass `publishDate`). Each file just needs a `lastUpdated` prop added.

---

### 2. RAW HEADER/FOOTER BLOG POSTS — Convert or add metadata block

The 24 posts using raw Header/Footer layout (NameMismatchAffidavit, HospitalNotaryWhatToExpect, HowApostilleWorks, InvestorNotarizations, etc.) need a visible date + author block added manually below each `<h1>`. A shared helper component `BlogMeta` will be created to keep it DRY.

**New component: `src/components/blog/BlogMeta.tsx`**
- Props: `publishDate`, `lastUpdated`, `readTime?`
- Renders: "Published: [date] | Last Updated: [date]" + author line with link to /about
- Used by both BlogPostTemplate and raw-layout posts

---

### 3. DATE ASSIGNMENTS

53 blog posts total. Dates spread Oct 2025–Mar 2026 (publish) and Feb–Apr 2026 (last updated). Posts that already have a `publishDate` keep it; only `lastUpdated` is added.

**Posts using BlogPostTemplate (29 posts) — existing publishDate preserved, lastUpdated added:**

| # | File | Existing publishDate | lastUpdated |
|---|------|---------------------|-------------|
| 1 | GeneralNotaryWhatToBring | 2024-01-08 | 2026-02-05 |
| 2 | MobileVsShippingStore | 2024-01-15 | 2026-02-12 |
| 3 | WillsTrustsPOAChecklist | 2024-01-20 | 2026-02-18 |
| 4 | WhatNotariesCannotDo | 2024-01-25 | 2026-02-22 |
| 5 | NotaryFeesExplained | 2024-02-01 | 2026-02-27 |
| 6 | WitnessRequirements | 2024-02-05 | 2026-03-03 |
| 7 | EstatePlanningGuides | 2024-02-10 | 2026-03-07 |
| 8 | OhioBuyerSellerLoanSigningChecklist | 2024-02-15 | 2026-03-11 |
| 9 | RefiHelocNotaryErrorsToAvoidOhio | 2024-02-20 | 2026-03-14 |
| 10 | ScanbacksPrintingMobileLoanClosingsOhio | 2024-02-25 | 2026-03-18 |
| 11 | HospitalRehabLoanSigningsOhio | 2025-09-25 | 2026-03-21 |
| 12 | OhioWillsPOAWhatNotariesCanAndCantDo | 2025-09-25 | 2026-02-08 |
| 13 | HealthcareDirectivesNotaryOhioBedside | 2025-09-25 | 2026-02-15 |
| 14 | CertificationOfTrustNotaryOhio | 2025-09-25 | 2026-02-20 |
| 15 | WitnessesForWillsPOAOhioLocalNorms | 2025-09-25 | 2026-03-01 |
| 16 | VendorPacketsAffidavitsNotaryOhio | 2025-09-25 | 2026-03-05 |
| 17 | ContractsTitleAuthorityNotaryOhio | 2025-09-25 | 2026-03-09 |
| 18 | PermitsLicensingNotarySameDayOhio | 2025-09-25 | 2026-03-13 |
| 19 | HRI9VsNotaryOhio | 2025-09-25 | 2026-03-16 |
| 20 | HospitalNotaryChecklistOhio | 2025-09-25 | 2026-03-20 |
| 21 | SeniorCommunitiesNotaryPOAHealthcareOhio | 2025-09-25 | 2026-03-24 |
| 22 | UrgentNotarySameDayOhioHospitals | 2025-09-25 | 2026-03-27 |
| 23 | HospitalNotaryIDProblemsOhio | 2025-09-25 | 2026-03-30 |
| 24 | OhioCarTitleTransferRequirements | 2025-09-25 | 2026-04-02 |
| 25 | ImmigrationDocumentsNotaryGuide | 2025-09-25 | 2026-04-05 |
| 26 | MilitaryVeteransNotaryGuide | 2025-09-25 | 2026-04-08 |
| 27 | HealthcareDocumentsNotaryGuide | 2025-09-25 | 2026-04-10 |
| 28 | TrustCertificationBanking | (check) | 2026-03-25 |
| 29 | POAPitfalls | (check) | 2026-02-25 |

**Posts using raw layout (24 posts) — new publishDate assigned + lastUpdated:**

| # | File | publishDate | lastUpdated |
|---|------|-------------|-------------|
| 30 | HCPOALivingWillGuide | 2025-10-03 | 2026-02-06 |
| 31 | HospitalNotaryWhatToExpect | 2025-10-08 | 2026-02-10 |
| 32 | WhatHappensLoanSigning | 2025-10-14 | 2026-02-14 |
| 33 | HowApostilleWorks | 2025-10-20 | 2026-02-19 |
| 34 | RemoteHireI9Steps | 2025-10-25 | 2026-02-24 |
| 35 | College18PlusStarterPack | 2025-10-30 | 2026-03-02 |
| 36 | TitleTransferChecklist | 2025-11-05 | 2026-03-06 |
| 37 | AffidavitJuratAcknowledgment | 2025-11-10 | 2026-03-10 |
| 38 | BeneficiaryChangeForms | 2025-11-16 | 2026-03-15 |
| 39 | InvestorNotarizations | 2025-11-21 | 2026-03-19 |
| 40 | SellerSigningDay | 2025-11-27 | 2026-03-22 |
| 41 | ScanbackTimingExplained | 2025-12-03 | 2026-03-26 |
| 42 | ApostilleProcessingTimes | 2025-12-09 | 2026-03-29 |
| 43 | NotaryVsRONRIN | 2025-12-15 | 2026-04-01 |
| 44 | BusinessContractNotarization | 2025-12-20 | 2026-04-04 |
| 45 | InternationalTravelConsent | 2025-12-27 | 2026-04-07 |
| 46 | SmallEstateAffidavitExecutorTips | 2026-01-04 | 2026-04-09 |
| 47 | JailNotarizationProcess | 2026-01-10 | 2026-02-09 |
| 48 | AfterHoursEmergencyNotary | 2026-01-16 | 2026-02-16 |
| 49 | ExpiredIDOptions | 2026-01-22 | 2026-02-23 |
| 50 | NameMismatchAffidavit | 2026-01-28 | 2026-03-04 |
| 51 | DeedsExplained | 2026-02-03 | 2026-03-12 |
| 52 | ApostilleSchoolDocs | 2026-02-10 | 2026-03-17 |
| 53 | TranslatorAffidavits | 2026-02-17 | 2026-03-23 |

**County guide posts (6 posts):**

| # | File | publishDate | lastUpdated |
|---|------|-------------|-------------|
| 54 | NotaryGuideHamiltonCounty | 2025-11-02 | 2026-02-11 |
| 55 | NotaryGuideWarrenCounty | 2025-11-13 | 2026-02-21 |
| 56 | NotaryGuideMontgomeryCounty | 2025-12-01 | 2026-03-08 |
| 57 | NotaryGuideButlerCounty | 2025-12-12 | 2026-03-28 |
| 58 | NotaryGuideGreeneCounty | 2026-01-07 | 2026-04-03 |
| 59 | NotaryGuideClintonCounty | 2026-01-19 | 2026-04-06 |

---

### 4. AUTHOR ATTRIBUTION

Handled centrally in the new `BlogMeta` component:

```text
Author: Terry May — Mobile Notary & Loan Signing Agent, Waynesville OH
```

"Terry May" links to `/about` (internal Link). Displayed below dates on every blog post.

---

### 5. ACRONYM EXPANSION

Scan all 59 blog files for first occurrences of these acronyms and expand on first use only:

- **HIPAA** → Health Insurance Portability and Accountability Act (HIPAA)
- **HELOC** → Home Equity Line of Credit (HELOC)
- **POA** → Power of Attorney (POA)
- **DMV** → Department of Motor Vehicles (DMV)
- **FERPA** → Family Educational Rights and Privacy Act (FERPA)
- **I-9** → Employment Eligibility Verification (I-9)

Key files affected:
- POA: HCPOALivingWillGuide, WillsTrustsPOAChecklist, POAPitfalls, OhioWillsPOAWhatNotariesCanAndCantDo, SeniorCommunitiesNotaryPOAHealthcareOhio, MilitaryVeteransNotaryGuide, others
- HELOC: RefiHelocNotaryErrorsToAvoidOhio
- HIPAA: HealthcareDocumentsNotaryGuide, HealthcareDirectivesNotaryOhioBedside
- DMV: OhioCarTitleTransferRequirements, VehiclesDMV references
- I-9: RemoteHireI9Steps, HRI9VsNotaryOhio
- FERPA: College18PlusStarterPack (if used)

---

### 6. SUMMARY TABLE

Add a "What to Bring" checklist table to `src/pages/blog/GeneralNotaryWhatToBring.tsx` (the most-visited/linked blog post per the Resources page):

| Item | Details |
|------|---------|
| Valid Photo ID | Current driver's license, passport, or state ID |
| Your Document | Completed but NOT signed |
| Additional Signers | All must appear in person with their own ID |
| Witnesses | 1–2 disinterested witnesses if required by your form |
| Payment | Fee varies by document type and travel |

Uses shadcn `Table` components already in the project.

---

### Files modified

- **New**: `src/components/blog/BlogMeta.tsx`
- **Template**: `src/components/templates/BlogPostTemplate.tsx`
- **59 blog post files** in `src/pages/blog/` (add lastUpdated prop or BlogMeta + dates)
- **6 county guide files** in `src/pages/blog/`
- **0 homepage files** — untouched

