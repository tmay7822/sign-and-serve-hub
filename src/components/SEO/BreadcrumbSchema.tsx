// BREADCRUMB SCHEMA COMPONENT
// Generates Schema.org/BreadcrumbList structured data

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';

interface BreadcrumbItem {
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
    let breadcrumbItems: BreadcrumbItem[] = [];

    if (items) {
      breadcrumbItems = items;
    } else if (autoGenerate) {
      breadcrumbItems = generateBreadcrumbsFromPath(location.pathname);
    }

    if (breadcrumbItems.length > 0) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map(item => ({
          "@type": "ListItem",
          "position": item.position,
          "name": item.name,
          "item": `${window.location.origin}${item.url}`
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
      // Check if it's a category or post
      const secondPart = pathParts[1];
      if (secondPart.endsWith('-guides')) {
        // It's a category
        const categoryName = formatCategoryName(secondPart);
        items.push({ 
          name: `${categoryName} Guides`, 
          url: `/blog/${secondPart}`, 
          position: 3 
        });
      } else {
        // It's a post - we'd need to look up the actual title
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

  // Handle service paths
  if (pathParts.length >= 1) {
    const serviceName = formatServiceName(pathParts[0]);
    items.push({ 
      name: serviceName, 
      url: `/${pathParts[0]}`, 
      position: 2 
    });

    // Handle location-specific service pages
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