import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import { getHref } from '@/utils/ssg';

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
  const { averageRating, totalReviews } = useGoogleReviews();

  let schema: Record<string, unknown>;

  if (serviceName) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Signed On Time Mobile Notary Services",
        "telephone": "+15132269052",
        "url": "https://www.signedontime.com",
      },
      "areaServed": [
        { "@type": "County", "name": "Hamilton County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Warren County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Butler County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Montgomery County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Greene County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Clinton County", "containedIn": "Ohio" },
      ],
      "url": getHref(url),
    };
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "LegalService"],
      "@id": "https://www.wikidata.org/wiki/Q139254455",
      "name": "Signed On Time Mobile Notary Services",
      "alternateName": "Signed On Time",
      "description": "Certified mobile notary serving Southwest Ohio including Hamilton, Warren, Butler, Montgomery, Greene and Clinton counties. Loan signings, estate planning, apostille, healthcare directives, vehicle titles and general notary services. Same-day appointments available 7 days a week.",
      "url": "https://www.signedontime.com",
      "telephone": "+15132269052",
      "email": "Terry@SignedOnTime.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check, Venmo, Zelle",
      "openingHours": [
        "Mo 07:00-22:00",
        "Tu 07:00-22:00",
        "We 07:00-22:00",
        "Th 07:00-22:00",
        "Fr 07:00-22:00",
        "Sa 07:00-22:00",
        "Su 07:00-22:00",
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.5318,
          "longitude": -84.0955,
        },
        "geoRadius": "80467",
      },
      "areaServed": [
        { "@type": "County", "name": "Hamilton County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Warren County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Butler County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Montgomery County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Greene County", "containedIn": "Ohio" },
        { "@type": "County", "name": "Clinton County", "containedIn": "Ohio" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Notary Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loan Signing Services", "description": "Certified loan signing agent for mortgage closings, refinances, HELOCs and purchase transactions throughout Southwest Ohio" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Planning Notarization", "description": "Mobile notary for wills, trusts, powers of attorney and healthcare directives at your home or care facility" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apostille Services", "description": "Document authentication and apostille preparation for international use from Ohio" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Document Notarization", "description": "Bedside notarization at hospitals, rehab facilities and senior communities throughout Southwest Ohio" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Title Notarization", "description": "Ohio car title transfer notarization and bill of sale notary services at your location" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Notary Services", "description": "Acknowledgments, jurats, oaths and affirmations for all document types — we come to you" } },
        ],
      },
      "sameAs": [
        "https://www.wikidata.org/wiki/Q139254455",
        "https://www.google.com/maps?cid=YOUR_GMB_CID",
        "https://www.facebook.com/signedontime",
        "https://www.linkedin.com/company/signedontime",
      ],
      "founder": {
        "@type": "Person",
        "name": "Terry May",
        "sameAs": "https://www.wikidata.org/wiki/Q139255055",
        "jobTitle": "Certified Notary Public and Loan Signing Agent",
        "description": "25+ years experience in commercial and residential lending. NNA certified, background screened and fully insured.",
        "worksFor": {
          "@type": "LocalBusiness",
          "name": "Signed On Time Mobile Notary Services",
          "url": "https://www.signedontime.com",
          "@id": "https://www.wikidata.org/wiki/Q139254455"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(averageRating.toFixed(1)),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": String(totalReviews),
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
