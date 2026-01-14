import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { isBrowser } from '@/utils/ssg';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  serviceName?: string;
  className?: string;
  showIcon?: boolean;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  serviceName,
  className = "",
  showIcon = true
}) => {
  // Inject FAQ Schema for SEO rich snippets
  useEffect(() => {
    if (!isBrowser || faqs.length === 0) return;

    const existingSchema = document.querySelector('script[data-type="faq-schema"]');
    if (existingSchema) existingSchema.remove();

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
      ...(serviceName && {
        "about": {
          "@type": "Service",
          "name": serviceName
        }
      })
    };

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
  }, [faqs, serviceName]);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`py-16 ${className}`} id="faq">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            {showIcon && <HelpCircle className="h-6 w-6 text-primary" />}
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-lg shadow-sm border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
