

## Fix Contact Page: Replace "SignRight" and Add SEO Metadata

### Instances of "SignRight" found

| File | Line | Text |
|------|------|------|
| `src/pages/Contact.tsx` | 16 | `Contact SignRight Mobile Notary` |
| `PLACEHOLDER_REFERENCE.md` | 59 | `SignRight Mobile Notary` (in a setup instruction — this is a template guide, not user-facing; will update for consistency) |

**Total: 2 files, 2 instances**

### Changes

**`src/pages/Contact.tsx`**
1. Add `import Seo from '@/components/Seo'` at top
2. Line 16: Change H1 from `Contact SignRight Mobile Notary` → `Contact Signed On Time Mobile Notary Services`
3. Inside the `Contact` component (before `BasePageTemplate`), add `<Seo>` with:
   - title: `Contact Us | Signed On Time Mobile Notary`
   - description: `Contact Signed On Time Mobile Notary Services. Same-day appointments available across Southwest Ohio. Call (513) 226-9052 or book online.`

**`PLACEHOLDER_REFERENCE.md`**
4. Line 59: Change `SignRight Mobile Notary` → `Signed On Time Mobile Notary` (keeps the guide consistent)

### Result
- 2 files changed
- All "SignRight" references eliminated from the codebase
- Contact page gets proper SEO title and meta description

