

## Add Statistics & Outbound Authority Links to Service Pages and Blog Posts

Homepage is NOT touched.

### Changes by file

---

**1. `src/pages/LoanSignings.tsx`** — Loan signing service page
- In the `quickAnswer.answer` (line 20), append the loan signing statistic naturally:
  - Add: *"Loan signings typically require 100–150 pages of documents and take 30–45 minutes to complete with an experienced signing agent."*
- Add `Consumer Financial Protection Bureau` link reference in the summary block text (line 29), changing to: *"...same-day closings available throughout Southwest Ohio. For more on the closing process, the <a>Consumer Financial Protection Bureau</a> offers helpful guides."*

**2. `src/pages/blog/WhatHappensLoanSigning.tsx`** — Blog post about loan signings
- After the intro paragraph (line 27), insert the statistic: *"Loan signings typically require 100–150 pages of documents and take 30–45 minutes to complete with an experienced signing agent."*
- After the final paragraph (line 53), add a sentence with the `Consumer Financial Protection Bureau` link: *"The <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener">Consumer Financial Protection Bureau</a> provides additional resources on the mortgage closing process."*

**3. `src/pages/blog/OhioBuyerSellerLoanSigningChecklist.tsx`** — Buyer/seller checklist blog
- In the opening paragraph (line 32), append: *"Loan signings typically require 100–150 pages of documents and take 30–45 minutes to complete with an experienced signing agent."*

**4. `src/pages/blog/NotaryFeesExplained.tsx`** — Notary fees blog post
- After the ordered list item about per-signature fees (line 33), add a paragraph: *"Ohio notaries may charge up to $5 per notarized signature under <a href="https://codes.ohio.gov/ohio-revised-code/section-147.08" target="_blank" rel="noopener">Ohio Revised Code Section 147.08</a>."*

**5. `src/pages/blog/WhatNotariesCannotDo.tsx`** — Blog post about notary boundaries
- After the "We can" list (line 46), add: *"According to the <a href="https://www.ohiosos.gov/notary/" target="_blank" rel="noopener">Ohio Secretary of State</a>, notary commissions in Ohio are valid for 5-year terms."*

**6. `src/pages/AboutUs.tsx`** — About page credentials section
- Line 340: Update "Errors and Omissions Insurance" description to include the link: *"Fully insured with <a href="https://www.nationalnotary.org/knowledge-center/about-notaries/notary-basics/e-o-insurance" target="_blank" rel="noopener">Errors and Omissions insurance</a> — your documents and transaction are protected"*
- Line 337: Update "NNA Certified Notary Public" description to include the link: *"Trained and tested to the highest standard by the <a href="https://www.signingagent.com/profile/160496873" target="_blank" rel="noopener">National Notary Association</a>"*

**7. `src/pages/TermsOfService.tsx`** — Terms of Service, Governing Law section
- Line 196-197: Add links to existing text: *"...in accordance with the <a href="https://codes.ohio.gov/ohio-revised-code/section-147.08" target="_blank" rel="noopener">Ohio Revised Code</a> and regulations of the <a href="https://www.ohiosos.gov/notary/" target="_blank" rel="noopener">Ohio Secretary of State</a>."*

**8. `src/pages/blog/RefiHelocNotaryErrorsToAvoidOhio.tsx`** — Refi/HELOC blog
- After the process paragraph (line 44), add: *"The <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener">Consumer Financial Protection Bureau</a> has additional guidance on refinance and HELOC rights."*

---

### Summary of placements

| Statistic / Link | Pages |
|---|---|
| Loan signing 100-150 pages stat | LoanSignings, WhatHappensLoanSigning, OhioBuyerSellerLoanSigningChecklist |
| Ohio $5 fee + ORC 147.08 link | NotaryFeesExplained, TermsOfService |
| Ohio SOS 5-year commission + link | WhatNotariesCannotDo, TermsOfService |
| National Notary Association link | AboutUs (credentials) |
| Errors and Omissions insurance link | AboutUs (credentials) |
| Consumer Financial Protection Bureau link | LoanSignings, WhatHappensLoanSigning, RefiHelocNotaryErrorsToAvoidOhio |

### Not touched
- Homepage (Index.tsx, HeroSection, FAQSection, Footer) — unchanged
- No new sections created — all additions inline within existing content
- No price ranges added beyond what already exists

