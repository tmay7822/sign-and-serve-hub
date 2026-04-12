// ARTICLE SCHEMA COMPONENT
// Generates Schema.org/Article structured data for blog posts

import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { isBrowser, getHref } from '@/utils/ssg';

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  description?: string;
  url?: string;
  wordCount?: number;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  datePublished,
  dateModified,
  author = BUSINESS_CONFIG.name,
  image,
  description,
  url,
  wordCount
}) => {
  useEffect(() => {
    // Only run in browser
    if (!isBrowser) return;

    // Remove any existing article schema
    const existingSchema = document.querySelector('script[data-type="article-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const baseUrl = getHref(url);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Person",
        "name": "Terry May",
        "sameAs": "https://www.wikidata.org/wiki/Q139255055",
        "jobTitle": "Certified Notary Public and Loan Signing Agent",
        "worksFor": {
          "@type": "LocalBusiness",
          "name": "Signed On Time Mobile Notary Services",
          "url": "https://www.signedontime.com",
          "@id": "https://www.wikidata.org/wiki/Q139254455"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": BUSINESS_CONFIG.name,
        "logo": {
          "@type": "ImageObject",
          "url": BUSINESS_CONFIG.logo.url
        },
        "url": BUSINESS_CONFIG.website
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": baseUrl
      },
      "url": baseUrl,
      ...(image && { 
        "image": {
          "@type": "ImageObject",
          "url": image
        }
      }),
      ...(description && { "description": description }),
      ...(wordCount && { "wordCount": wordCount }),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "about": {
        "@type": "Thing",
        "name": "Notary Services"
      },
      "mentions": [
        {
          "@type": "Organization",
          "name": BUSINESS_CONFIG.name,
          "sameAs": [
            BUSINESS_CONFIG.website,
            ...(BUSINESS_CONFIG.socialMedia.facebook ? [BUSINESS_CONFIG.socialMedia.facebook] : []),
            ...(BUSINESS_CONFIG.socialMedia.linkedin ? [BUSINESS_CONFIG.socialMedia.linkedin] : []),
            ...(BUSINESS_CONFIG.socialMedia.google ? [BUSINESS_CONFIG.socialMedia.google] : [])
          ]
        }
      ]
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'article-schema');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [headline, datePublished, dateModified, author, image, description, url, wordCount]);

  return null; // This component only adds schema, no visual output
};

export default ArticleSchema;