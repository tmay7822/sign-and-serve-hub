# 🔖 Whitelabel Placeholder Reference Guide

## All Placeholders Used in the System

### Business Configuration (src/config/business.ts)
Replace these placeholders with actual business information:

```
[BUSINESS_NAME] → Your business name
[PHONE_NUMBER] → Your phone number (format: (555) 123-4567)
[EMAIL_ADDRESS] → Your email address  
[WEBSITE_URL] → Your website URL
[STREET_ADDRESS] → Your street address
[CITY] → Your city
[STATE] → Your state (2-letter code)
[ZIP_CODE] → Your ZIP code
[PRIMARY_AREA] → Your primary service area (e.g., "Miami-Dade")
[COUNTIES_SERVED] → Counties you serve (comma-separated)
[SERVICE_RADIUS] → Your service radius (e.g., "30 miles")
[WEEKDAY_HOURS] → Your weekday hours (e.g., "8:00 AM - 8:00 PM")
[WEEKEND_HOURS] → Your weekend hours (e.g., "9:00 AM - 6:00 PM")
[EMERGENCY_HOURS] → Emergency availability (e.g., "24/7 by appointment")
[FACEBOOK_URL] → Your Facebook page URL
[LINKEDIN_URL] → Your LinkedIn page URL  
[GOOGLE_BUSINESS_URL] → Your Google Business Profile URL
[LOGO_URL] → URL or path to your logo file
[LOGO_ALT_TEXT] → Alt text for your logo
[META_TITLE] → SEO meta title for your site
[META_DESCRIPTION] → SEO meta description for your site
[SEO_KEYWORDS] → SEO keywords (comma-separated)
```

### Service Page Variables (Auto-generated)
These are automatically populated from your LOCATIONS data:

```
{{serviceName}} → Name of the service (set per page)
{{city}} → City name from LOCATIONS array
{{county}} → County name from LOCATIONS array
{{zip}} → ZIP code from LOCATIONS array
{{state}} → State from LOCATIONS array
```

### HTML Meta Tags (index.html)
Update these in the HTML head section:

```html
<title>[BUSINESS_NAME] | Mobile Notary Services | [PRIMARY_AREA]</title>
<meta name="description" content="[CUSTOM_DESCRIPTION]" />
<meta property="og:title" content="[BUSINESS_NAME] | Mobile Notary Services" />
<meta property="og:description" content="[CUSTOM_DESCRIPTION]" />
```

## Quick Search & Replace Guide

### Global Text Replacements
Use your code editor's "Find & Replace" across all files:

1. `SignRight Mobile Notary` → `[Your Business Name]`
2. `Cincinnati–Dayton` → `[Your Service Area]`
3. `(513) 555-SIGN` → `[Your Phone Number]`
4. `Hamilton, Warren, Montgomery` → `[Your Counties]`

### Image Replacements
Replace these files with your own:
- `src/assets/hero-notary.jpg` → Your hero image
- Add your logo to `src/assets/` directory

### Color Customization (src/index.css)
```css
:root {
  --brand-navy: [YOUR_PRIMARY_HSL]; 
  --brand-blue: [YOUR_SECONDARY_HSL];
  --brand-light: [YOUR_LIGHT_HSL];
  --brand-gold: [YOUR_ACCENT_HSL];
}
```

## File-by-File Placeholder Locations

### /index.html
- Line 6: Page title
- Line 7: Meta description  
- Lines 10-11: OpenGraph tags

### /src/config/business.ts
- ALL placeholder values in BUSINESS_CONFIG object
- LOCATIONS array (replace with your service area)

### /src/components/Header.tsx
- Now uses BUSINESS_CONFIG automatically ✅

### /src/components/HeroSection.tsx  
- Now uses BUSINESS_CONFIG automatically ✅

### /src/components/Footer.tsx
- Now uses BUSINESS_CONFIG automatically ✅

### Service Pages (/src/pages/*.tsx)
- Each page sets `serviceName` variable
- Location variables auto-populate from LOCATIONS array

### /src/components/PopupForm.tsx
- Form submission endpoint (if using external service)
- Success message customization

## Validation Checklist

After replacing placeholders, verify:

- [ ] No brackets `[` `]` remain in any files
- [ ] All phone numbers have consistent format
- [ ] All URLs are valid (start with http:// or https://)
- [ ] Email addresses are valid
- [ ] Service area matches your actual coverage
- [ ] Hours are in consistent format
- [ ] Colors are in HSL format only
- [ ] Logo displays properly
- [ ] All forms submit successfully

## Testing Your Replacements

1. **Search for remaining placeholders:**
   ```bash
   grep -r "\[.*\]" src/
   ```

2. **Test contact links:**
   - Click phone numbers on mobile
   - Click email addresses  
   - Verify social media links work

3. **Check service area pages:**
   - Navigate to each service page
   - Verify city/county names display correctly
   - Check that ZIP codes match your area

4. **Validate forms:**
   - Test popup form submission
   - Verify contact form works
   - Check success messages display

Remember: The whitelabel system is designed to be easily customizable. Most changes happen in the `business.ts` config file, with automatic propagation throughout the site!