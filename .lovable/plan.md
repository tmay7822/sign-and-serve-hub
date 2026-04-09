

## Improve Internal Linking Across Site

### Audit Results

| Check | Status | Detail |
|-------|--------|--------|
| County hubs cross-link each other | MISSING | None of the 6 pages link to any other county hub |
| Service pages → county hubs | MISSING | No service hub template links to county hub pages |
| Homepage → county hubs | MISSING | No county section on homepage |
| County hubs → /resources | MISSING | No link to /resources on any county page |
| Resources → county hubs | WRONG TARGET | Links to `/service/hamilton-county` instead of `/blog/notary-guide-hamilton-county-ohio` |
| Footer → county hubs | MISSING | Footer mentions counties in text only, no links |

### Changes

#### 1. Homepage — Add County Hubs Section (`src/pages/Index.tsx`)

Add a new section between the Resources Preview and FAQ sections. Six county cards in a responsive grid, each linking to its hub page. Heading: "Serving 6 Southwest Ohio Counties". Each card shows county name and key cities.

#### 2. County Hub Pages — Add Cross-Links + Resources Link (6 files)

At the bottom of each county hub page's article content (before the FAQ H2), add:
- **"Other Counties We Serve"** — 5 links to the other county hub pages
- **"Free Notary Guides"** — link to `/resources`

This adds ~10 internal links per county page. Applied to all 6 files:
- `NotaryGuideHamiltonCounty.tsx`
- `NotaryGuideWarrenCounty.tsx`
- `NotaryGuideMontgomeryCounty.tsx`
- `NotaryGuideButlerCounty.tsx`
- `NotaryGuideGreeneCounty.tsx`
- `NotaryGuideClintonCounty.tsx`

#### 3. Resources Page — Fix County Links (`src/pages/Resources.tsx`)

Change the `counties` array hrefs from `/service/hamilton-county` to `/blog/notary-guide-hamilton-county-ohio` (and same for all 6). This links the Resources page to the content-rich county hubs instead of the thin service area pages.

#### 4. Footer — Add County Hub Links (`src/components/Footer.tsx`)

Add a "County Guides" column (or append to existing columns) with 6 links to the county hub pages. This gives every page on the site a link to the county hubs.

#### 5. Service Hub Templates — Add County Links

**File: `src/components/templates/ServiceHubEnhanced.tsx`**

Add a small "Available Across Southwest Ohio" section before the BookingCTASection showing 6 county hub links. This appears on all 7 service pages automatically.

### Files Summary

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add county hubs section |
| `src/pages/Resources.tsx` | Fix county hrefs to hub pages |
| `src/components/Footer.tsx` | Add county guide links |
| `src/components/templates/ServiceHubEnhanced.tsx` | Add county links section |
| `src/pages/blog/NotaryGuideHamiltonCounty.tsx` | Add cross-links + resources link |
| `src/pages/blog/NotaryGuideWarrenCounty.tsx` | Add cross-links + resources link |
| `src/pages/blog/NotaryGuideMontgomeryCounty.tsx` | Add cross-links + resources link |
| `src/pages/blog/NotaryGuideButlerCounty.tsx` | Add cross-links + resources link |
| `src/pages/blog/NotaryGuideGreeneCounty.tsx` | Add cross-links + resources link |
| `src/pages/blog/NotaryGuideClintonCounty.tsx` | Add cross-links + resources link |

**Total: 10 files modified**

