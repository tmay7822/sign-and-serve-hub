// LOCAL BUSINESS SCHEMA COMPONENT
// Generates Schema.org/LocalBusiness structured data

import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';

interface LocalBusinessSchemaProps {
  serviceName?: string;
  serviceDescription?: string;
  url?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ 
  serviceName, 
  serviceDescription, 
  url 
}) => {
  useEffect(() => {
    // Remove any existing business schema
    const existingSchema = document.querySelector('script[data-type="business-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    let schema;

    if (serviceName) {
      // Service-specific schema
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": BUSINESS_CONFIG.name,
          "image": BUSINESS_CONFIG.logo.url,
          "telephone": BUSINESS_CONFIG.phone,
          "email": BUSINESS_CONFIG.email,
          "url": BUSINESS_CONFIG.website,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_CONFIG.address.street,
            "addressLocality": BUSINESS_CONFIG.address.city,
            "addressRegion": BUSINESS_CONFIG.address.state,
            "postalCode": BUSINESS_CONFIG.address.zip,
            "addressCountry": "US"
          },
          "areaServed": BUSINESS_CONFIG.serviceArea.counties.split(', ').map(county => ({
            "@type": "AdministrativeArea",
            "name": `${county.trim()} County, OH`
          })),
          "openingHours": [
            "Mo-Fr 08:00-20:00",
            "Sa-Su 09:00-18:00"
          ],
          "priceRange": "$$"
        },
        "areaServed": BUSINESS_CONFIG.serviceArea.counties.split(', ').map(county => ({
          "@type": "AdministrativeArea",
          "name": `${county.trim()} County, OH`
        })),
        "url": url || window.location.href
      };
    } else {
      // Main LocalBusiness schema for homepage
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_CONFIG.name,
        "image": BUSINESS_CONFIG.logo.url,
        "telephone": BUSINESS_CONFIG.phone,
        "email": BUSINESS_CONFIG.email,
        "url": BUSINESS_CONFIG.website,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_CONFIG.address.street,
          "addressLocality": BUSINESS_CONFIG.address.city,
          "addressRegion": BUSINESS_CONFIG.address.state,
          "postalCode": BUSINESS_CONFIG.address.zip,
          "addressCountry": "US"
        },
        "description": BUSINESS_CONFIG.seo.metaDescription,
        "priceRange": "$$",
        "openingHours": [
          "Mo-Fr 08:00-20:00",
          "Sa-Su 09:00-18:00"
        ],
        "areaServed": BUSINESS_CONFIG.serviceArea.counties.split(', ').map(county => ({
          "@type": "AdministrativeArea",
          "name": `${county.trim()} County, OH`
        })),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Notary Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile Notary Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Loan Signing Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Estate Planning Document Notarization"
              }
            }
          ]
        }
      };
    }

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'business-schema');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [serviceName, serviceDescription, url]);

  return null; // This component only adds schema, no visual output
};

export default LocalBusinessSchema;