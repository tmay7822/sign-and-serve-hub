// ENHANCED FAQ SCHEMA COMPONENT
// Generates comprehensive FAQ structured data for blog posts

import { useEffect } from 'react';
import { isBrowser } from '@/utils/ssg';

interface FAQ {
  question: string;
  answer: string;
}

interface EnhancedFAQSchemaProps {
  faqs: FAQ[];
  mainEntity?: {
    name: string;
    description: string;
    url?: string;
  };
}

const EnhancedFAQSchema: React.FC<EnhancedFAQSchemaProps> = ({ 
  faqs, 
  mainEntity 
}) => {
  useEffect(() => {
    // Only run in browser
    if (!isBrowser || faqs.length === 0) return;

    // Remove any existing FAQ schema
    const existingSchema = document.querySelector('script[data-type="faq-schema"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",  
          "text": faq.answer
        }
      })),
      ...(mainEntity && {
        "about": {
          "@type": "Thing",
          "name": mainEntity.name,
          "description": mainEntity.description,
          ...(mainEntity.url && { "url": mainEntity.url })
        }
      }),
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString()
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'faq-schema');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [faqs, mainEntity]);

  return null;
};

export default EnhancedFAQSchema;