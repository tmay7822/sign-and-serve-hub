

## Create Content Audit PDF (Not Code)

Generate a PDF that extracts and presents all user-facing content from every page in a readable, structured format — suitable for reviewing copy, messaging consistency, and CTA placement in Claude.

### What the PDF will contain

For each page/component, organized by section:

- **Page name and URL path**
- **SEO**: Title tag, meta description, keywords
- **Hero section**: Headline (H1), subheadline, CTA text
- **Body content**: All headings (H2, H3), paragraph text, bullet points
- **FAQs**: Question/answer pairs
- **CTAs**: What buttons/actions appear and where
- **Internal links**: Where the page links to

### Document structure

1. **Table of Contents** — all pages grouped by type
2. **Main Pages** (Homepage, About, Contact, FAQ, Pricing, Reviews, Service Areas, Book Now)
3. **Service Hub Pages** (General Notary, Loan Signings, Real Estate, Estate Plans, Apostille, Business Services, Healthcare, Vehicles/DMV)
4. **Blog Posts** (~60+ posts — title, meta description, tags, FAQs, key content)
5. **Location Pages** (~15 pages — city, services listed, areas served, FAQs)
6. **Seasonal/Landing Pages** (Tax Season, Back to School, Year End, etc.)
7. **Content Summary** — review count, FAQ count, service count, CTA audit

### Implementation

- Python script using `reportlab` to generate the PDF
- Parse each `.tsx` file to extract string literals (headings, paragraphs, FAQ arrays, meta descriptions)
- Present content in clean, readable paragraphs — not code
- Output to `/mnt/documents/site-content-audit.pdf`

### Files

No project files changed. Output: `/mnt/documents/site-content-audit.pdf`

