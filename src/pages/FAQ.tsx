import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import FAQSection from '@/components/FAQSection';
import { DocumentSearch } from '@/components/DocumentSearch';
import { BUSINESS_CONFIG } from '@/config/business';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';

const FAQ = () => {
  useEffect(() => {
    const title = "Frequently Asked Questions | Mobile Notary Services | Signed On Time";
    const metaDescription = "Common questions about mobile notary services in Cincinnati-Dayton area. Same-day service, pricing, and service area information.";
    
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }

  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you travel to me?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area." } },
      { "@type": "Question", "name": "What IDs do I need?", "acceptedAnswer": { "@type": "Answer", "text": "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature." } },
      { "@type": "Question", "name": "Do you offer after-hours service?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer evening and weekend appointments to accommodate your schedule. Emergency and rush services are available for urgent document needs." } },
      { "@type": "Question", "name": "What are your fees?", "acceptedAnswer": { "@type": "Answer", "text": "Our fees include travel within our service area plus per-signature notarization. We provide instant quotes over the phone or through our contact form. No hidden fees, transparent pricing." } },
      { "@type": "Question", "name": "Which loan packages do you handle?", "acceptedAnswer": { "@type": "Answer", "text": "We handle all types: buyer packages, seller packages, refinances, HELOCs, reverse mortgages, and investor/commercial loan documents. Fully trained in all major loan document types." } },
      { "@type": "Question", "name": "How far in advance should I schedule?", "acceptedAnswer": { "@type": "Answer", "text": "We often accommodate same-day requests, but we recommend scheduling 24-48 hours in advance for best availability, especially for loan signings and complex document packages." } },
      { "@type": "Question", "name": "Are you insured and bonded?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we carry comprehensive Errors & Omissions insurance and are fully bonded. We're also NNA (National Notary Association) certified and background-checked for your peace of mind." } },
      { "@type": "Question", "name": "Can you notarize documents in languages other than English?", "acceptedAnswer": { "@type": "Answer", "text": "We can notarize documents in any language, but the signer must be able to communicate directly with the notary in English, or a qualified translator must be present during the signing." } }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Everything you need to know about our mobile notary and loan signing services.
            </p>
            <StandardCTAButtons variant="top" />
          </div>
        </div>
      </section>

      <FAQSection />
      
      {/* Document Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <DocumentSearch />
          </div>
        </div>
      </section>

      {/* Additional FAQ Section */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Still Have Questions?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <strong>Phone:</strong> <a href="tel:(513) 226-9052" className="text-brand-blue hover:underline">(513) 226-9052</a>
                  </div>
                  <div>
                    <strong>Email:</strong> <a href="mailto:Terry@SignedOnTime.com" className="text-brand-blue hover:underline">Terry@SignedOnTime.com</a>
                  </div>
                  <div>
                    <strong>Service Area:</strong> Cincinnati-Dayton, OH
                  </div>
                  <div>
                    <strong>Hours:</strong> Monday-Sunday, 7 AM - 10 PM
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to quote requests within 30 minutes during business hours. 
                  For urgent same-day appointments, please call directly.
                </p>
                <StandardCTAButtons showCalculator={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default FAQ;