import { useMemo } from 'react';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';

interface FAQ {
  question: string;
  answer: string;
}

export const useHomepageSchema = (faqs: FAQ[]) => {
  const { reviews, averageRating, totalReviews } = useGoogleReviews();

  return useMemo(() => {
    const individualReviews = reviews.slice(0, 5).map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.reviewerName
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }));

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService", "LegalService"],
          "@id": "https://www.wikidata.org/wiki/Q139254455",
          "name": "Signed On Time",
          "alternateName": "Signed On Time Mobile Notary Services",
          "description": "Certified mobile notary service based in Waynesville Ohio serving Warren, Greene, Clinton, Butler, Hamilton and Montgomery counties in Southwest Ohio. Specializing in general notary work, loan signings, estate planning, and healthcare document notarization. Same-day appointments available 7 days a week — we come to you.",
          "url": "https://www.signedontime.com",
          "telephone": "+15132269052",
          "email": "Terry@SignedOnTime.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.signedontime.com/favicon.png",
            "width": 512,
            "height": 512
          },
          "image": "https://www.signedontime.com/favicon.png",
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
            "Su 07:00-22:00"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.5318,
              "longitude": -84.0955
            },
            "geoRadius": "80467"
          },
          "areaServed": [
            { "@type": "County", "name": "Warren County", "containedIn": "Ohio" },
            { "@type": "County", "name": "Greene County", "containedIn": "Ohio" },
            { "@type": "County", "name": "Clinton County", "containedIn": "Ohio" },
            { "@type": "County", "name": "Butler County", "containedIn": "Ohio" },
            { "@type": "County", "name": "Hamilton County", "containedIn": "Ohio" },
            { "@type": "County", "name": "Montgomery County", "containedIn": "Ohio" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mobile Notary Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loan Signing Services" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Planning Notarization" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Document Notarization" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Title Notarization" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apostille Services" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Notary Services" } }
            ]
          },
          "founder": {
            "@type": "Person",
            "name": "Terry May",
            "@id": "https://www.wikidata.org/wiki/Q139255055",
            "sameAs": "https://www.wikidata.org/wiki/Q139255055"
          },
          "sameAs": [
            "https://www.wikidata.org/wiki/Q139254455",
            "https://www.google.com/maps/place/Signed+On+Time/@39.4723167,-84.5279299,10z/data=!3m1!4b1!4m6!3m5!1s0x898eda0c8281792b:0x6ceef3ddd2cd891d!8m2!3d39.472252!4d-84.1982955!16s%2Fg%2F11y5pbg0pl?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toString(),
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": totalReviews.toString(),
            "ratingCount": totalReviews.toString()
          },
          ...(individualReviews.length > 0 && { "review": individualReviews })
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.signedontime.com/#faq",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        },
        {
          "@type": "Person",
          "@id": "https://www.wikidata.org/wiki/Q139255055",
          "name": "Terry May",
          "jobTitle": "Certified Notary Public and Loan Signing Agent",
          "description": "25+ years of experience in commercial and residential lending. NNA certified, background screened, and fully insured mobile notary serving Southwest Ohio.",
          "worksFor": {
            "@id": "https://www.wikidata.org/wiki/Q139254455"
          },
          "sameAs": "https://www.wikidata.org/wiki/Q139255055",
          "url": "https://www.signedontime.com/about"
        },
        {
          "@type": "WebSite",
          "@id": "https://www.signedontime.com/#website",
          "url": "https://www.signedontime.com",
          "name": "Signed On Time",
          "description": "Mobile notary services throughout Southwest Ohio",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.signedontime.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.signedontime.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.signedontime.com"
            }
          ]
        }
      ]
    };
  }, [faqs, reviews, averageRating, totalReviews]);
};
