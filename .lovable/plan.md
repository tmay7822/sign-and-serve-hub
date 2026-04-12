

## Update Header Tagline Bar

### Changes

**File: `src/components/Header.tsx`**

1. **Update top bar text** (line ~79): Replace `"Signed On Time — We Come To You Anytime And Anywhere"` with `"We Come To You Anytime And Anywhere"` followed by a pipe separator and a clickable phone link `tel:5132269052` displaying `"Call or Text (513) 226-9052"`.

2. **Keep existing styling** — same `bg-gradient-to-r from-brand-navy via-brand-navy to-brand-blue/90` background, same layout.

The tagline bar is already rendered at the very top of the `Header` component which is present on every page — no structural changes needed. The phone number on the right side of the bar already exists and will remain.

### Files Modified
- `src/components/Header.tsx` (1 line change)

