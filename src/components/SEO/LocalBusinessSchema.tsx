import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { isBrowser, getHref } from '@/utils/ssg';

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
    if (!isBrowser) return;

    const existingSchema = document.querySelector('script[data-type="business-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const pageUrl = getHref(url);

    let schema;

    if (serviceName) {
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": ["LocalBusiness", "Notary"],
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
          "geo": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.1031,
              "longitude": -84.5120
            },
            "geoRadius": "50000"
          },
          "openingHours": [
            "Mo-Fr 08:00-20:00",
            "Sa-Su 09:00-18:00"
          ],
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Check", "Credit Card", "Venmo", "Zelle"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "areaServed": BUSINESS_CONFIG.serviceArea.counties.split(', ').map(county => ({
          "@type": "AdministrativeArea",
          "name": `${county.trim()} County, OH`
        })),
        "url": pageUrl
      };
    } else {
      schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Notary"],
        "additionalType": [
          "https://schema.org/LegalService",
          "https://schema.org/ProfessionalService"
        ],
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
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 39.1031,
            "longitude": -84.5120
          },
          "geoRadius": "50000"
        },
        "paymentAccepted": ["Cash", "Check", "Credit Card", "Venmo", "Zelle"],
        "knowsAbout": [
          "Notary Public Services",
          "Mobile Notary",
          "Loan Signing Agent",
          "Legal Document Notarization",
          "Apostille Services",
          "Real Estate Closings",
          "Estate Planning Documents",
          "Healthcare Directives",
          "Vehicle Title Transfers",
          "Same-Day Notary Service"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "47",
          "bestRating": "5",
          "worstRating": "1"
        },
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

  return null;
};

export default LocalBusinessSchema;