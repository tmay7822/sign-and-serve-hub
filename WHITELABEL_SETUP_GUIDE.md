# 🏷️ Whitelabel Mobile Notary Website Setup Guide

## Quick Start Checklist
- [ ] Update business configuration file
- [ ] Replace logo and images  
- [ ] Update colors and branding
- [ ] Configure service areas
- [ ] Set up contact forms
- [ ] Update SEO settings
- [ ] Test all functionality

---

## 📋 Step-by-Step Customization

### STEP 1: Business Information Setup
**File:** `src/config/business.ts`

Replace ALL placeholder values with your business information:

```typescript
export const BUSINESS_CONFIG = {
  name: "Your Business Name", // Replace [BUSINESS_NAME]
  phone: "(555) 123-4567", // Replace [PHONE_NUMBER]
  email: "info@yourbusiness.com", // Replace [EMAIL_ADDRESS]
  // ... continue for all fields
};
```

**Required Updates:**
- `[BUSINESS_NAME]` → Your business name
- `[PHONE_NUMBER]` → Your phone number (format: (555) 123-4567)
- `[EMAIL_ADDRESS]` → Your email address
- `[WEBSITE_URL]` → Your website URL
- `[STREET_ADDRESS]` → Your street address
- `[CITY]` → Your city
- `[STATE]` → Your state (2-letter code)
- `[ZIP_CODE]` → Your ZIP code
- `[PRIMARY_AREA]` → Your primary service area (e.g., "Miami-Dade")
- `[COUNTIES_SERVED]` → Counties you serve (comma-separated)
- `[SERVICE_RADIUS]` → Your service radius (e.g., "30 miles")

### STEP 2: Service Area Configuration
**File:** `src/config/business.ts`

Update the `LOCATIONS` array with your actual service area:

```typescript
export const LOCATIONS = [
  { county: "YourCounty", city: "YourCity", zip: "12345", state: "FL" },
  // Add all cities/counties you serve
];
```

**How to customize:**
1. Delete existing Ohio locations
2. Add your counties, cities, and ZIP codes
3. Each entry creates a geo-targeted page for SEO

### STEP 3: Logo and Images
**Replace these files:**
- `src/assets/hero-notary.jpg` → Your hero image
- Add your logo file to `src/assets/`

**Update logo reference:**
In `src/config/business.ts`:
```typescript
logo: {
  url: "/src/assets/your-logo.png", // Your logo path
  alt: "Your Business Name Logo", // Your logo alt text
}
```

### STEP 4: Colors and Branding
**File:** `src/index.css`

Customize your brand colors (keep HSL format):
```css
:root {
  /* Update these brand colors */
  --brand-navy: 213 94% 28%; /* Your primary color */
  --brand-blue: 213 85% 45%; /* Your secondary color */
  --brand-light: 213 45% 92%; /* Your light color */
  --brand-gold: 43 96% 56%; /* Your accent color */
}
```

**Color Selection Tips:**
- Use HSL values only (required for dark mode)
- Primary color should be professional (navy, dark blue, etc.)
- Accent color for call-to-action buttons
- Light color for backgrounds

### STEP 5: Website Content Updates

**Update header phone number:**
`src/components/Header.tsx` - Line 25:
```typescript
<span className="font-medium">[PHONE_NUMBER]</span>
```

**Update hero section:**
`src/components/HeroSection.tsx` - Lines 21-28:
- Update headline if desired
- Update service area description
- Update call-to-action text

**Update footer:**
`src/components/Footer.tsx`:
- Business hours
- Address
- About section description

### STEP 6: Contact Form Setup
**File:** `src/components/PopupForm.tsx`

Update form action and recipient:
```typescript
// Line 15 - Update form submission endpoint
<form onSubmit={handleSubmit}>
```

**Integration options:**
- Netlify Forms (add `netlify` attribute)
- Formspree (update action URL)
- Custom backend endpoint

### STEP 7: SEO Configuration

**Update HTML meta tags:**
`index.html` - Lines 6-17:
```html
<title>Your Business Name | Mobile Notary Services | Your Area</title>
<meta name="description" content="Your custom description..." />
```

**Service page SEO:**
Each service page has placeholders like `{{city}}`, `{{county}}`, `{{zip}}` that auto-populate based on your LOCATIONS data.

### STEP 8: Social Media Links
**File:** `src/components/Footer.tsx`

Update social media URLs (around line 85):
```typescript
// Update these URLs
<a href="https://facebook.com/yourbusiness">Facebook</a>
<a href="https://linkedin.com/company/yourbusiness">LinkedIn</a>
```

---

## 🎯 Service Area Strategy

### Local SEO Pages
The system auto-generates pages for each location in your `LOCATIONS` array:
- `/general-notary` → Creates pages for each city/county
- `/loan-signings` → Creates pages for each city/county
- etc.

### Adding New Service Areas
1. Add entries to `LOCATIONS` array in `src/config/business.ts`
2. Each entry creates SEO-optimized pages
3. Format: `{ county: "CountyName", city: "CityName", zip: "12345", state: "ST" }`

---

## 🔧 Advanced Customization

### Adding New Services
1. Create new page file in `src/pages/`
2. Add route to `src/App.tsx`
3. Add navigation item to `src/components/Header.tsx`
4. Follow existing service page template

### Custom Styling
- Primary styles: `src/index.css`
- Component styles: Use Tailwind classes with design tokens
- Never use hardcoded colors - always use CSS variables

### Form Integration
**Netlify Forms:**
```html
<form netlify name="contact">
```

**Formspree:**
```html
<form action="https://formspree.io/f/yourform">
```

**Custom Backend:**
Update form action URL in PopupForm component

---

## ✅ Pre-Launch Checklist

### Content Review
- [ ] All `[PLACEHOLDER]` values replaced
- [ ] Business name appears correctly everywhere
- [ ] Phone number formatted consistently
- [ ] Service area matches your actual coverage
- [ ] Hours and contact info accurate

### Visual Review
- [ ] Logo displays properly
- [ ] Colors match your brand
- [ ] Hero image is professional and relevant
- [ ] All pages load without errors
- [ ] Mobile responsive design works

### Functionality Test
- [ ] Contact forms submit successfully
- [ ] Phone links work on mobile
- [ ] Email links open correctly
- [ ] Navigation works on all pages
- [ ] Popup form opens/closes properly

### SEO Check
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions under 160 characters
- [ ] All images have alt text
- [ ] Service area pages generate correctly

---

## 🚀 Deployment

### Quick Deploy (Lovable)
1. Click "Publish" in Lovable editor
2. Your site gets a `yoursite.lovable.app` URL
3. Connect custom domain in Project Settings

### Custom Domain Setup
1. Go to Project → Settings → Domains
2. Add your domain (requires paid plan)
3. Update DNS records as instructed
4. SSL automatically configured

---

## 💡 Marketing Tips

### Local SEO Optimization
- Claim Google My Business listing
- Get listed in local directories
- Encourage customer reviews
- Use location keywords in content

### Content Strategy
- Blog about notary topics
- Create FAQ content
- Share customer success stories
- Seasonal content (tax season, real estate trends)

### Lead Generation
- Optimize popup form timing
- A/B test call-to-action buttons  
- Track form completions
- Follow up quickly on leads

---

## 🆘 Support

### Common Issues
**Logo not displaying:** Check file path in business.ts config
**Colors not updating:** Ensure HSL format in index.css
**Forms not submitting:** Verify action URL and method
**Pages not loading:** Check routes in App.tsx

### Resources
- [Lovable Documentation](https://docs.lovable.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)

---

**🎉 Congratulations! Your whitelabel notary website is ready to launch!**