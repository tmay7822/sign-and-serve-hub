// WHITELABEL BUSINESS CONFIGURATION
// Update this file with your business information

export const BUSINESS_CONFIG = {
  // Basic Business Information
  name: "[BUSINESS_NAME]", // e.g., "SignRight Mobile Notary"
  tagline: "Signed Right. Signed On Time.", // Your main headline
  
  // Contact Information
  phone: "[PHONE_NUMBER]", // e.g., "(513) 555-SIGN"
  email: "[EMAIL_ADDRESS]", // e.g., "info@signright.com"
  website: "[WEBSITE_URL]", // e.g., "https://signright.com"
  
  // Location & Service Area
  address: {
    street: "[STREET_ADDRESS]", // e.g., "123 Main Street"
    city: "[CITY]", // e.g., "Cincinnati"
    state: "[STATE]", // e.g., "OH"
    zip: "[ZIP_CODE]", // e.g., "45202"
  },
  
  // Service Area
  serviceArea: {
    primary: "[PRIMARY_AREA]", // e.g., "Cincinnati-Dayton"
    counties: "[COUNTIES_SERVED]", // e.g., "Hamilton, Warren, Montgomery, Butler, Greene, Clinton"
    radius: "[SERVICE_RADIUS]", // e.g., "50 miles"
  },
  
  // Business Hours
  hours: {
    weekdays: "[WEEKDAY_HOURS]", // e.g., "8:00 AM - 8:00 PM"
    weekends: "[WEEKEND_HOURS]", // e.g., "9:00 AM - 6:00 PM"
    emergency: "[EMERGENCY_HOURS]", // e.g., "24/7 by appointment"
  },
  
  // Social Media
  social: {
    facebook: "[FACEBOOK_URL]", // e.g., "https://facebook.com/signright"
    linkedin: "[LINKEDIN_URL]", // e.g., "https://linkedin.com/company/signright"
    google: "[GOOGLE_BUSINESS_URL]", // e.g., "https://g.page/signright"
  },
  
  // Business Credentials
  credentials: {
    nna: true, // NNA Certified
    backgroundCheck: true, // Background Checked
    insured: true, // E&O Insured
    bonded: true, // Bonded
  },
  
  // Logo & Branding
  logo: {
    url: "[LOGO_URL]", // URL or path to logo
    alt: "[LOGO_ALT_TEXT]", // Alt text for logo
  },
  
  // SEO Information
  seo: {
    metaTitle: "[META_TITLE]", // e.g., "Mobile Notary Services | Cincinnati-Dayton"
    metaDescription: "[META_DESCRIPTION]", // e.g., "Professional mobile notary and loan signing services..."
    keywords: "[SEO_KEYWORDS]", // e.g., "mobile notary, loan signing, Cincinnati, Dayton"
  }
};

// Service Area ZIP Codes - Update with your actual service area
export const SERVICE_ZIPS = [
  // Hamilton County
  "45202", "45208", "45246", "45240", "45242",
  // Warren County
  "45040", "45036", "45066", "45005", "45065",
  // Montgomery County
  "45402", "45414", "45429", "45459", "45377",
  // Butler County
  "45011", "45069", "45056", "45014", "45050",
  // Greene County
  "45430", "45324", "45385", "45305", "45387",
  // Clinton County
  "45177", "45107", "45169", "45113", "45148",
];

// Counties and Cities - Update with your service area
export const LOCATIONS = [
  { county: "Hamilton", city: "Cincinnati", zip: "45202", state: "OH" },
  { county: "Hamilton", city: "Cincinnati", zip: "45208", state: "OH" },
  { county: "Hamilton", city: "Springdale", zip: "45246", state: "OH" },
  { county: "Hamilton", city: "Forest Park", zip: "45240", state: "OH" },
  { county: "Hamilton", city: "Blue Ash", zip: "45242", state: "OH" },
  { county: "Warren", city: "Mason", zip: "45040", state: "OH" },
  { county: "Warren", city: "Lebanon", zip: "45036", state: "OH" },
  { county: "Warren", city: "Springboro", zip: "45066", state: "OH" },
  { county: "Warren", city: "Franklin", zip: "45005", state: "OH" },
  { county: "Warren", city: "South Lebanon", zip: "45065", state: "OH" },
  { county: "Montgomery", city: "Dayton", zip: "45402", state: "OH" },
  { county: "Montgomery", city: "Dayton", zip: "45414", state: "OH" },
  { county: "Montgomery", city: "Kettering", zip: "45429", state: "OH" },
  { county: "Montgomery", city: "Centerville", zip: "45459", state: "OH" },
  { county: "Montgomery", city: "Vandalia", zip: "45377", state: "OH" },
  { county: "Butler", city: "Hamilton", zip: "45011", state: "OH" },
  { county: "Butler", city: "West Chester", zip: "45069", state: "OH" },
  { county: "Butler", city: "Oxford", zip: "45056", state: "OH" },
  { county: "Butler", city: "Fairfield", zip: "45014", state: "OH" },
  { county: "Butler", city: "Monroe", zip: "45050", state: "OH" },
  { county: "Greene", city: "Beavercreek", zip: "45430", state: "OH" },
  { county: "Greene", city: "Fairborn", zip: "45324", state: "OH" },
  { county: "Greene", city: "Xenia", zip: "45385", state: "OH" },
  { county: "Greene", city: "Bellbrook", zip: "45305", state: "OH" },
  { county: "Greene", city: "Yellow Springs", zip: "45387", state: "OH" },
  { county: "Clinton", city: "Wilmington", zip: "45177", state: "OH" },
  { county: "Clinton", city: "Blanchester", zip: "45107", state: "OH" },
  { county: "Clinton", city: "Sabina", zip: "45169", state: "OH" },
  { county: "Clinton", city: "Clarksville", zip: "45113", state: "OH" },
  { county: "Clinton", city: "Midland", zip: "45148", state: "OH" },
];