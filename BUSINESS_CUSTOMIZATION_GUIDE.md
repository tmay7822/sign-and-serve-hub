# Business Customization Guide

This guide will help you customize the notary website for your specific business needs.

## Quick Start (5 Minutes)

### 1. Update Business Information

Edit `src/config/business.ts` with your business details:

```typescript
export const BUSINESS_CONFIG = {
  // Basic Info - REQUIRED
  businessName: "Your Business Name",
  ownerName: "Your Full Name", 
  phone: "(555) 123-4567",
  email: "your@email.com",
  
  // Service Area - REQUIRED
  serviceArea: {
    primary: "Your Metro Area", 
    counties: "County1, County2, County3", 
    radius: "25 miles", 
  },
  
  // Update all other fields as needed...
}
```

### 2. Update Location Data

Edit `src/data/locations.ts` to match your service area:

```typescript
export const LOCATIONS_CITY: LocationCity[] = [
  {
    county: "Your County",
    city: "Your City", 
    type: "city",
    primaryZip: "12345",
    state: "YS"
  },
  // Add all cities you serve...
];
```

### 3. Replace Logo and Images

- Replace `src/assets/signed-on-time-logo.jpg` with your logo
- Replace `src/assets/hero-notary.jpg` with your hero image
- Update favicon.ico in the public folder

## Detailed Customization

### Theme and Colors

Update `src/index.css` for brand colors:

```css
:root {
  /* Primary brand color */
  --primary: 210 100% 45%; /* Your brand blue/primary color */
  
  /* Secondary colors */
  --secondary: 45 100% 55%; /* Your accent color */
  
  /* Update gradients */
  --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
}
```

### Service Offerings

Edit `src/data/services.ts` to enable/disable services:

```typescript
{
  id: "loan-signings",
  serviceName: "Loan Signings",
  enabled: true, // Set to false to hide this service
  // ... other fields
}
```

### Content Customization

Edit `src/data/serviceContent.ts` to customize service page content:

```typescript
"loan-signings": {
  heroTitle: "Your Custom Title",
  heroDescription: "Your custom description...",
  // ... customize all content
}
```

## SEO Optimization

### Meta Tags and Titles

The system automatically generates SEO-optimized:
- Page titles with your business name and keywords
- Meta descriptions with local targeting
- Schema markup for local business
- Canonical URLs

### Local Pages

The system generates local landing pages for each city/county combination. These are automatically created from your location data and don't need manual setup.

### Sitemap

The sitemap is automatically generated at `/sitemap.xml` and includes all your local pages.

## Form Integration Options

### Option 1: Netlify Forms (Recommended)
- No setup required if hosting on Netlify
- Forms automatically work out of the box

### Option 2: Formspree Integration
1. Sign up at formspree.io
2. Get your form endpoint
3. Update `src/components/PopupForm.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

### Option 3: Email Fallback
The form includes automatic email fallback - no setup needed.

## Google My Business Integration

### Schema Markup
The site includes rich schema markup for:
- Local Business
- Professional Service  
- Breadcrumb navigation
- Articles/Blog posts

### Local SEO Features
- City/county specific pages
- Location-based meta descriptions
- Local business structured data
- Service area markup

## Advanced Customization

### Adding New Services

1. Add to `src/data/services.ts`:
```typescript
{
  id: "new-service",
  serviceName: "New Service Name",
  slug: "new-service",
  enabled: true,
  category: "primary", // or "specialized"
  // ... other required fields
}
```

2. Add content in `src/data/serviceContent.ts`
3. Create page component in `src/pages/`
4. Add route in `src/App.tsx`

### Custom Blog Posts

Add blog posts in `src/data/blog.ts`:

```typescript
{
  id: "new-post",
  title: "Your Blog Post Title",
  slug: "your-blog-post-title",
  excerpt: "Brief description...",
  content: "Full content...",
  // ... other fields
}
```

## Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables: None required for basic setup

### Custom Domain Setup
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

## Testing Checklist

Before going live, test:

- [ ] All contact forms submit correctly
- [ ] Phone numbers are clickable and dial correctly
- [ ] All service pages load and display your content
- [ ] Local location pages are generated
- [ ] Mobile responsiveness on all devices
- [ ] Page load speeds are acceptable
- [ ] Schema markup validates (use Google's Rich Results Test)

## Support

For technical support:
- Check the WHITELABEL_SETUP_GUIDE.md for common issues
- Use browser developer tools to debug form submission issues
- Test on multiple devices and browsers

## Performance Optimization

The site is pre-optimized for:
- ✅ Core Web Vitals compliance
- ✅ Mobile-first design
- ✅ Fast loading times
- ✅ SEO best practices
- ✅ Schema markup
- ✅ Sitemap generation

No additional optimization needed for most use cases.
