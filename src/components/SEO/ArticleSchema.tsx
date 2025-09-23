// ARTICLE SCHEMA COMPONENT
// Generates Schema.org/Article structured data for blog posts

import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';

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
    // Remove any existing article schema
    const existingSchema = document.querySelector('script[data-type="article-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Organization",
        "name": author,
        "url": BUSINESS_CONFIG.website
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
        "@id": url || window.location.href
      },
      "url": url || window.location.href,
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
            ...(BUSINESS_CONFIG.social.facebook ? [BUSINESS_CONFIG.social.facebook] : []),
            ...(BUSINESS_CONFIG.social.linkedin ? [BUSINESS_CONFIG.social.linkedin] : []),
            ...(BUSINESS_CONFIG.social.google ? [BUSINESS_CONFIG.social.google] : [])
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