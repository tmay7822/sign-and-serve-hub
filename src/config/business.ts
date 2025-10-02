// WHITELABEL BUSINESS CONFIGURATION
// Update this file with your business information

export const BUSINESS_CONFIG = {
  // Basic Business Information
  name: "Signed On Time", 
  tagline: "We Come To You Anytime and Anywhere",
  
  // Contact Information
  phone: "(513) 226-9052", 
  email: "Terry@SignedOnTime.com", 
  website: "https://www.SignedOnTime.com", 
  
  // Location & Service Area
  address: {
    street: "Mobile Service", 
    city: "Cincinnati", 
    state: "OH", 
    zip: "45202", 
  },
  
  // Service Area
  serviceArea: {
    primary: "Cincinnati-Dayton Metro", 
    counties: "Hamilton, Warren, Montgomery, Butler, Greene, Clinton", 
    radius: "50 miles", 
  },
  
  // Business Hours
  hours: {
    weekdays: "8:00 AM - 8:00 PM", 
    weekends: "9:00 AM - 6:00 PM", 
    emergency: "24/7 by appointment", 
  },
  
  // Social Media
  socialMedia: {
    facebook: "https://facebook.com/signedontime", 
    twitter: "", 
    instagram: "", 
    linkedin: "https://linkedin.com/company/signedontime", 
    youtube: "", 
    whatsapp: "", 
    google: "https://g.page/signedontime", 
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
    url: "/src/assets/signed-on-time-logo.jpg", 
    alt: "Signed On Time Mobile Notary Services", 
  },

  // Color Theme Options for Whitelabel
  theme: {
    selected: "signed-red-black", // Options: professional-blue, elegant-black-red, warm-gold, fresh-green, modern-purple, signed-red-black
    options: {
      "professional-blue": {
        name: "Professional Blue",
        primary: "213 94% 28%",      // Navy blue
        primaryForeground: "0 0% 100%",
        accent: "213 85% 45%",       // Lighter blue
        accentForeground: "0 0% 100%",
        brandNavy: "213 94% 28%",
        brandBlue: "213 85% 45%",
        brandLight: "213 45% 92%",
        brandGold: "43 96% 56%"
      },
      "elegant-black-red": {
        name: "Elegant Black & Red",
        primary: "0 0% 9%",          // Deep black
        primaryForeground: "0 0% 100%",
        accent: "0 84% 50%",         // Bold red
        accentForeground: "0 0% 100%",
        brandNavy: "0 0% 9%",
        brandBlue: "0 84% 50%",
        brandLight: "0 0% 96%",
        brandGold: "43 96% 56%"
      },
      "warm-gold": {
        name: "Warm Gold & Brown",
        primary: "30 25% 20%",       // Rich brown
        primaryForeground: "0 0% 100%",
        accent: "43 96% 56%",        // Gold
        accentForeground: "30 25% 20%",
        brandNavy: "30 25% 20%",
        brandBlue: "43 96% 56%",
        brandLight: "43 50% 95%",
        brandGold: "43 96% 56%"
      },
      "fresh-green": {
        name: "Fresh Green & Teal",
        primary: "158 64% 24%",      // Forest green
        primaryForeground: "0 0% 100%",
        accent: "171 84% 35%",       // Teal
        accentForeground: "0 0% 100%",
        brandNavy: "158 64% 24%",
        brandBlue: "171 84% 35%",
        brandLight: "158 40% 96%",
        brandGold: "43 96% 56%"
      },
      "modern-purple": {
        name: "Modern Purple & Blue",
        primary: "260 60% 30%",      // Deep purple
        primaryForeground: "0 0% 100%",
        accent: "230 80% 55%",       // Blue purple
        accentForeground: "0 0% 100%",
        brandNavy: "260 60% 30%",
        brandBlue: "230 80% 55%",
        brandLight: "260 40% 96%",
        brandGold: "43 96% 56%"
      },
      "signed-red-black": {
        name: "Signed On Time Red & Black",
        primary: "0 0% 15%",         // Deep black
        primaryForeground: "0 0% 100%",
        accent: "0 84% 60%",         // Bright red
        accentForeground: "0 0% 100%",
        brandNavy: "0 0% 15%",
        brandBlue: "0 84% 60%",
        brandLight: "0 0% 97%",
        brandGold: "43 96% 56%"
      }
    }
  },
  
  // SEO Information
  seo: {
    metaTitle: "Mobile Notary Services | Cincinnati-Dayton | Signed On Time", 
    metaDescription: "Professional mobile notary and loan signing services throughout Cincinnati, Dayton, and surrounding counties. Same-day service available. Call (513) 226-9052.", 
    keywords: "mobile notary, loan signing, Cincinnati, Dayton, Hamilton County, Warren County, Montgomery County, Butler County, notary public, power of attorney", 
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