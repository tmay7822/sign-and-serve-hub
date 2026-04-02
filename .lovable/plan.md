

## Fix Contact Page Blank Space

### Root Cause
The hero section uses `bg-gradient-primary` as a CSS class, but the actual utility class defined in `index.css` is `.gradient-primary` (no `bg-` prefix). This means the gradient background never applies — the hero renders with a white/transparent background, making all the white text invisible. That's the "blank space" you see.

### Fix
In `src/pages/Contact.tsx` line 12, change:
```
bg-gradient-primary
```
to:
```
gradient-primary
```

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Contact.tsx` | Fix class name from `bg-gradient-primary` to `gradient-primary` on the hero section |

### Result
The hero section will show the dark gradient background, making the heading, subtitle, quote card, review badge, and CTA buttons all visible — eliminating the blank space appearance.

