

## Rewrite All Homepage FAQ Answers to BLUF Format

### Scope
3 files contain FAQ answers rendered on the homepage. All answers get rewritten; no questions or headings change.

### Files changed
1. `src/components/HeroSection.tsx` (lines 6-19) — 3 AEO answers
2. `src/components/FAQSection.tsx` (lines 9-41) — 8 FAQ answers
3. `src/pages/Index.tsx` (lines 17-51) — same 8 FAQ answers duplicated for schema

### Before → After (all 11 unique answers)

---

**"What does a mobile notary do?"**
- Before: "A mobile notary travels to your location — home, office, hospital, or anywhere — to notarize documents in person. This saves you time and is especially helpful for people who can't easily travel to a notary office."
- After: "A mobile notary comes to you — home, office, hospital, or anywhere — to notarize your documents in person. This is especially helpful when you can't get to a notary office on your own schedule."

**"How much does a mobile notary cost in Ohio?"**
- Before: "Ohio notary fees start at $5 per notarization by law, plus a travel fee that typically ranges from $25–$75 depending on distance. Loan signing appointments may cost $100–$200 depending on the package size."
- After: "A travel fee applies based on distance, plus Ohio's per-notarization fee. Loan signing appointments vary by package size. Call for an exact quote — no hidden fees."

**"Do you offer same-day notary service?"**
- Before: "Yes, Signed On Time offers same-day and emergency mobile notary service across the Cincinnati and Dayton metro areas. Call or book online and we can often be there within 1–2 hours."
- After: "Yes, we offer same-day and emergency service across the Cincinnati and Dayton metro areas. Call or book online and we can often be there within 1–2 hours."

**"Do you travel to me?"**
- Before: "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area."
- After: "Yes, we come to you anywhere in our 6-county Cincinnati–Dayton service area. That includes your home, office, hospital, or any location that works for you."

**"What IDs do I need?"**
- Before: "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature."
- After: "Bring one current, unexpired government-issued photo ID. A driver's license, state ID, passport, or military ID all work — it must clearly show your photo and signature."

**"Do you offer after-hours service?"**
- Before: "Absolutely! We offer evening and weekend appointments to accommodate your schedule. Emergency and rush services are available for urgent document needs."
- After: "Yes, we offer evening, weekend, and holiday appointments. Emergency and rush services are also available for urgent document needs."

**"What are your fees?"**
- Before: "Our fees include travel within our service area plus per-signature notarization. We provide instant quotes over the phone or through our contact form. No hidden fees, transparent pricing."
- After: "A travel fee applies based on distance, plus Ohio's per-signature notarization fee. Call or use our contact form for an exact quote — no hidden fees, no surprises."

**"Which loan packages do you handle?"**
- Before: "We handle all types: buyer packages, seller packages, refinances, HELOCs, reverse mortgages, and investor/commercial loan documents. Fully trained in all major loan document types."
- After: "We handle all loan package types — buyer, seller, refinance, HELOC, reverse mortgage, and investor/commercial closings. Every signing is handled by a trained loan signing agent."

**"How far in advance should I schedule?"**
- Before: "We often accommodate same-day requests, but we recommend scheduling 24-48 hours in advance for best availability, especially for loan signings and complex document packages."
- After: "Same-day appointments are often available. For best availability — especially loan signings and large document packages — schedule 24–48 hours in advance."

**"Are you insured and bonded?"**
- Before: "Yes, we carry comprehensive Errors & Omissions insurance and are fully bonded. We're also NNA (National Notary Association) certified and background-checked for your peace of mind."
- After: "Yes, we carry Errors & Omissions insurance and are fully bonded. We are also background-checked and professionally certified for your peace of mind."

**"Can you notarize documents in languages other than English?"**
- Before: "We can notarize documents in any language, but the signer must be able to communicate directly with the notary in English, or a qualified translator must be present during the signing."
- After: "Yes, we can notarize documents written in any language. The signer must communicate with the notary in English, or bring a qualified translator to the appointment."

---

### H2/H3 question-headings check
The homepage H2s ("Frequently Asked Questions", "Free Guides & Resources", "Serving 6 Southwest Ohio Counties", "Seasonal Notary Services") and H3s ("What Do You Need Notarized?") are not phrased as questions requiring BLUF answers, except "What Do You Need Notarized?" which is a navigation heading — no paragraph follows it. No additional changes needed.

### Not touched
- No questions changed
- No headings changed
- No page structure changed
- No other pages affected

