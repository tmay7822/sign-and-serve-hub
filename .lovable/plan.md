

## Update index.html Meta Tags and Add Image to HomepageSchema

### Changes

**1. `index.html`**

- **Line 8**: Title → `"Mobile Notary Southwest Ohio | Signed On Time"`
- **Line 9**: Meta description → `"Certified mobile notary based in Waynesville — serving Warren, Greene, Clinton, Butler and surrounding Southwest Ohio counties. Same day appointments 7 days a week. We come to you."`
- **Line 10**: Keywords → `"mobile notary Southwest Ohio, mobile notary Waynesville Ohio, notary Warren County Ohio, notary Greene County Ohio, notary Clinton County Ohio, notary Butler County Ohio, loan signing agent Cincinnati Dayton, mobile notary same day Ohio"`
- **Line 20**: OG title → `"Mobile Notary Southwest Ohio | Signed On Time"`
- **Line 21**: OG description → `"Certified mobile notary based in Waynesville — serving Warren, Greene, Clinton, Butler and surrounding Southwest Ohio counties. We come to you."`
- **Line 29**: Twitter title → `"Mobile Notary Southwest Ohio | Signed On Time"`
- **Line 30**: Twitter description → `"Certified mobile notary based in Waynesville — serving Warren, Greene, Clinton, Butler and surrounding Southwest Ohio counties. We come to you."`
- **Line 57**: geo.placename → `"Waynesville"` (align with new positioning)

**2. `src/components/SEO/HomepageSchema.tsx`**

Add `logo` and `image` fields to the LocalBusiness node (after line 42, before `priceRange`):

```json
"logo": {
  "@type": "ImageObject",
  "url": "https://www.signedontime.com/favicon.png",
  "width": 512,
  "height": 512
},
"image": "https://www.signedontime.com/favicon.png"
```

### Confirmations
1. Meta description: 156 characters ✅
2. OG title matches: "Mobile Notary Southwest Ohio | Signed On Time" ✅
3. Twitter tags match OG tags ✅
4. Image/logo fields added to LocalBusiness schema ✅

### Files Modified
- `index.html`
- `src/components/SEO/HomepageSchema.tsx`

