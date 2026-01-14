// BREADCRUMB SCHEMA COMPONENT
// Generates Schema.org/BreadcrumbList structured data for enhanced Google search appearance
// Supports auto-generation from URL path or manual breadcrumb items

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { isBrowser, getOrigin } from '@/utils/ssg';

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
  autoGenerate?: boolean;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items, autoGenerate = true }) => {
  const location = useLocation();

  useEffect(() => {
    // Only run in browser
    if (!isBrowser) return;

    let breadcrumbItems: BreadcrumbItem[] = [];

    if (items) {
      breadcrumbItems = items;
    } else if (autoGenerate) {
      breadcrumbItems = generateBreadcrumbsFromPath(location.pathname);
    }

    if (breadcrumbItems.length > 0) {
      const origin = getOrigin();

      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map(item => ({
          "@type": "ListItem",
          "position": item.position,
          "name": item.name,
          "item": `${origin}${item.url}`
        }))
      };

      // Remove any existing breadcrumb schema
      const existingSchema = document.querySelector('script[data-type="breadcrumb-schema"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Add new schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'breadcrumb-schema');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [location.pathname, items, autoGenerate]);

  return null; // This component only adds schema, no visual output
};

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: "Home", url: "/", position: 1 }
  ];

  if (pathname === '/') return items;

  const pathParts = pathname.split('/').filter(Boolean);
  
  // Handle blog paths
  if (pathParts[0] === 'blog') {
    items.push({ name: "Blog", url: "/blog", position: 2 });
    
    if (pathParts.length > 1) {
      const secondPart = pathParts[1];
      
      // Check for location-specific blog posts (county or city level)
      // Pattern: {category}-guides-{location}-county-ohio or {category}-guides-{city}-ohio
      const countyMatch = secondPart.match(/^([a-z-]+)-guides-([a-z-]+)-county-ohio$/);
      const cityMatch = secondPart.match(/^([a-z-]+)-guides-([a-z-]+)-ohio$/);
      
      if (countyMatch) {
        // County-level blog post: /blog/immigration-guides-hamilton-county-ohio
        const categorySlug = `${countyMatch[1]}-guides`;
        const countyName = formatLocationName(countyMatch[2]);
        const categoryName = formatCategoryName(categorySlug);
        
        items.push({ 
          name: `${categoryName} Guides`, 
          url: `/blog/${categorySlug}`, 
          position: 3 
        });
        items.push({ 
          name: `${countyName} County`, 
          url: pathname, 
          position: 4 
        });
      } else if (cityMatch && !secondPart.includes('-county-')) {
        // City-level blog post: /blog/immigration-guides-cincinnati-ohio
        const categorySlug = `${cityMatch[1]}-guides`;
        const cityName = formatLocationName(cityMatch[2]);
        const categoryName = formatCategoryName(categorySlug);
        
        items.push({ 
          name: `${categoryName} Guides`, 
          url: `/blog/${categorySlug}`, 
          position: 3 
        });
        items.push({ 
          name: cityName, 
          url: pathname, 
          position: 4 
        });
      } else if (secondPart.endsWith('-guides')) {
        // Category page: /blog/immigration-guides
        const categoryName = formatCategoryName(secondPart);
        items.push({ 
          name: `${categoryName} Guides`, 
          url: `/blog/${secondPart}`, 
          position: 3 
        });
      } else {
        // Regular blog post
        const postTitle = formatPostTitle(secondPart);
        items.push({ 
          name: postTitle, 
          url: pathname, 
          position: 3 
        });
      }
    }
    return items;
  }

  // Handle service paths: /service/hamilton-county or /service/hamilton-county/cincinnati-45202
  if (pathParts[0] === 'service') {
    items.push({ name: "Service Areas", url: "/service-areas", position: 2 });
    
    if (pathParts.length >= 2) {
      const countySlug = pathParts[1];
      const countyName = formatLocationName(countySlug.replace('-county', ''));
      items.push({ 
        name: `${countyName} County`, 
        url: `/service/${countySlug}`, 
        position: 3 
      });
      
      if (pathParts.length >= 3) {
        const cityZip = pathParts[2];
        const cityName = formatLocationName(cityZip.replace(/-\d{5}$/, ''));
        items.push({ 
          name: cityName, 
          url: pathname, 
          position: 4 
        });
      }
    }
    return items;
  }

  // Handle other paths (service hubs, static pages)
  if (pathParts.length >= 1) {
    const serviceName = formatServiceName(pathParts[0]);
    items.push({ 
      name: serviceName, 
      url: `/${pathParts[0]}`, 
      position: 2 
    });

    // Handle location-specific service pages (legacy format)
    if (pathParts.length >= 3) {
      const county = formatLocationName(pathParts[1]);
      const city = formatLocationName(pathParts[2]);
      items.push({ 
        name: `${city}, ${county} County`, 
        url: pathname, 
        position: 3 
      });
    }
  }

  return items;
}

function formatServiceName(slug: string): string {
  const serviceNames: { [key: string]: string } = {
    'general-notary': 'General Notary',
    'loan-signings': 'Loan Signings',
    'estate-plans': 'Estate Planning',
    'real-estate': 'Real Estate',
    'apostille': 'Apostille Services',
    'business-services': 'Business Services',
    'healthcare-notary': 'Healthcare Notary',
    'college-18-plus': 'College & 18+ Services',
    'personal-family': 'Personal & Family',
    'vehicles-dmv': 'Vehicle & DMV'
  };
  return serviceNames[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatCategoryName(slug: string): string {
  return slug.replace('-guides', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatPostTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatLocationName(name: string): string {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default BreadcrumbSchema;