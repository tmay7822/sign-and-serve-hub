import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

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

    // Add FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you come to me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We're a mobile service covering Cincinnati-Dayton metro area including Hamilton, Warren, Montgomery, and Butler Counties—homes, offices, hospitals, senior communities, and more."
          }
        },
        {
          "@type": "Question",
          "name": "What IDs are accepted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Current government photo ID (driver's license, passport, state ID). If yours is expired, call us to discuss options allowed by state rules."
          }
        },
        {
          "@type": "Question", 
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two parts: per-signature notarization (regulated by state) + mobile travel (time/distance). We quote upfront with transparent pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can you do evenings or weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. After-hours appointments are available throughout our service area. Travel and after-hours fees apply."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
            <Button size="lg" variant="cta" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

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
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">Get Immediate Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default FAQ;