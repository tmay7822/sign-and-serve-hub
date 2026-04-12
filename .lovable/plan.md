

## Add Wikidata Entity Links to Schema and llms.txt

### Changes

**1. `src/components/SEO/LocalBusinessSchema.tsx`**
- Add `"@id": "https://www.wikidata.org/wiki/Q139254455"` to the LocalBusiness schema object (near line 44)
- Add Wikidata URL to the `sameAs` array (line 92-98): `"https://www.wikidata.org/wiki/Q139254455"`
- Update the `founder` object (line 100-105) to include full author schema with `sameAs` and `worksFor`

**2. `public/llms.txt`**
- Add two lines after line 16 (Experience) in the Business Information section:
  ```
  - Wikidata (Business): https://www.wikidata.org/wiki/Q139254455
  - Wikidata (Owner): https://www.wikidata.org/wiki/Q139255055
  ```

**3. `src/components/SEO/ArticleSchema.tsx`**
- Change author from `@type: "Organization"` to `@type: "Person"` with name "Terry May", `sameAs`, `jobTitle`, and `worksFor` referencing the business Wikidata `@id` (lines 47-51)

**4. `src/components/templates/BlogPostTemplate.tsx`**
- Update the article schema author block (lines 64-67) from Organization to the full Terry May Person schema with Wikidata links

**5. `src/components/templates/DynamicBlogPostTemplate.tsx`**
- Update the article schema author block (line 47) from Organization to the full Terry May Person schema with Wikidata links

### Author Schema (used in files 3-5)
```json
{
  "@type": "Person",
  "name": "Terry May",
  "sameAs": "https://www.wikidata.org/wiki/Q139255055",
  "jobTitle": "Certified Notary Public and Loan Signing Agent",
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Signed On Time Mobile Notary Services",
    "url": "https://www.signedontime.com",
    "@id": "https://www.wikidata.org/wiki/Q139254455"
  }
}
```

### Files Modified
- `src/components/SEO/LocalBusinessSchema.tsx`
- `src/components/SEO/ArticleSchema.tsx`
- `src/components/templates/BlogPostTemplate.tsx`
- `src/components/templates/DynamicBlogPostTemplate.tsx`
- `public/llms.txt`

