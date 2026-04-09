

## Fix Unauthorized Practice of Law Language

### Problem
Multiple pages contain language implying the notary validates documents, ensures legal compliance, or guarantees documents meet legal standards. This could be interpreted as unauthorized practice of law. The correct framing is: **we witness signatures, verify identity, and ensure documents are filled out — we do not validate, recommend, or ensure legal compliance.**

### Instances Found (24 changes across 12 files)

#### High Priority — Client-Facing Service Pages

| File | Current Language | Replacement |
|------|-----------------|-------------|
| `src/pages/EstatePlans.tsx` (line 19) | "ensure documents meet legal standards" | "ensure documents are properly filled out and signatures are witnessed according to Ohio notary procedures" |
| `src/pages/AboutUs.tsx` (line 366-367) | "We ensure every document is properly executed according to Ohio notary law and your specific requirements" | "We witness every signature and verify identity according to Ohio notary procedures" |
| `src/pages/locations/WillsEstatesWarrenMason.tsx` (line 126) | "must comply with Ohio Revised Code requirements for proper execution and validity" | "have specific signing and witness requirements under Ohio law — consult your attorney for preparation" |
| `src/pages/locations/POAWarrenLebanon.tsx` (line 134) | "ensure they understand the document's implications" | "confirm they are signing willingly" |
| `src/pages/locations/WillsEstatesWarrenMason.tsx` (line 142) | "We ensure signers understand the documents" | "We confirm signers are aware and willing" |

#### Blog Posts

| File | Line | Change |
|------|------|--------|
| `src/pages/blog/ApostilleProcessingTimes.tsx` (line 61) | "We ensure your notarization meets requirements" | "We complete the notarization so your documents are ready for apostille processing" |
| `src/pages/blog/HowApostilleWorks.tsx` (line 47) | "We help ensure the notarization meets state requirements" | "We complete the notarization correctly so your apostille isn't rejected" |

#### Data Files

| File | Lines | Change Summary |
|------|-------|---------------|
| `src/data/serviceContent.ts` | 228 | "Ensure all estate planning documents are properly prepared" → "Confirm all documents are complete and ready for signing" |
| `src/data/serviceContent.ts` | 1131 | "We research requirements to ensure proper notarization" → "We handle many types of documents and complete the notarization professionally" |
| `src/data/serviceContent.ts` | 1139 | "We research unfamiliar documents to ensure we provide the correct notarial service" → "We handle unfamiliar documents and determine the correct notarial act needed" |
| `src/data/serviceContent.ts` | 1225 | "we ensure documents meet family court standards" → "we complete notarizations for family court documents" |
| `src/data/serviceContent.ts` | 1375 | "Ensure proper execution for legal validity" → "Complete notarization with proper signatures and witnessing" |
| `src/data/locationBlogPosts.ts` | 173 | "understand Ohio's legal requirements" → "understand Ohio's witness and signing requirements" |
| `src/data/locationBlogPosts.ts` | 436 | "require careful attention to Ohio's legal requirements" → "require proper signing procedures and witnesses" |
| `src/data/locationBlogPosts.ts` | 451 | "We ensure proper execution for all" → "We witness signatures and coordinate witnesses for all" |
| `src/data/locationBlogPosts.ts` | 511 | "maintaining proper legal standards" → "following proper notary procedures" |
| `src/data/gmbBlogPosts.ts` | 678 | "ensures proper execution" → "witnesses signatures and coordinates witnesses when needed" |

#### Admin Templates (affects future generated content)

| File | Lines | Change Summary |
|------|-------|---------------|
| `src/components/admin/BlogManager.tsx` | 74, 88, 93-94, 134 | Remove "legally binding", "ensure everything is prepared correctly", replace with witness/signing language |
| `src/components/admin/BulkContentGenerator.tsx` | 60, 95, 181 | Remove "legally binding", "ensure compliance with local regulations", replace with neutral language |

### What Will NOT Change
- Disclaimers that say "we do NOT give legal advice" — these are correct and protective
- References to "legal requirements" in informational context (e.g., "Ohio law requires two witnesses for wills") — these are factual education, not claims of validation
- `TermsOfService.tsx` disclaimer language — already correctly scoped

### Files Modified
**12 files total**: `EstatePlans.tsx`, `AboutUs.tsx`, `WillsEstatesWarrenMason.tsx`, `POAWarrenLebanon.tsx`, `ApostilleProcessingTimes.tsx`, `HowApostilleWorks.tsx`, `serviceContent.ts`, `locationBlogPosts.ts`, `gmbBlogPosts.ts`, `BlogManager.tsx`, `BulkContentGenerator.tsx`

