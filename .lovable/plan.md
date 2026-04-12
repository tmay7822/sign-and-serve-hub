

## Add NNA Profile Link to Homepage Footer

### Location found
`src/components/Footer.tsx`, line 235 — the legal disclaimer paragraph contains:

> "...background screening verification, and National Notary Association (NNA) membership. All notarial acts..."

### Change
Wrap "National Notary Association" in that sentence with an anchor tag:

**Before:**
```
...and National Notary Association (NNA) membership.
```

**After:**
```
...and <a href="https://www.signingagent.com/profile/160496873" target="_blank" rel="noopener" className="underline hover:text-white">National Notary Association</a> (NNA) membership.
```

### Not touched
- TrustSignals "NNA Certified" badge title/description — unchanged
- No other text, headings, or page structure modified
- Only one link added, on the exact "National Notary Association" text in the footer disclaimer

### File modified
- `src/components/Footer.tsx` (line 235 only)

