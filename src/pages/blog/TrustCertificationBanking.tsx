import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const TrustCertificationBanking = () => {
  useEffect(() => {
    document.title = `Trust Certification for Banks | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'What banks look for in a trust certification and how to notarize it properly.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trust Certification for Banks—Checklist
            </h1>
            <p className="text-xl mb-8">
              A <strong>trust certification</strong> summarizes key facts without exposing the full trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What banks often check</h2>
              <ul>
                <li>Trustee names and powers</li>
                <li>Trust date and amendments</li>
                <li>Notarized certification (if required)</li>
              </ul>

              <h2>Bring</h2>
              <ul>
                <li>Valid IDs for trustees</li>
                <li>Completed (unsigned) certification</li>
                <li>Any bank instructions</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to notarize?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote.
                </p>
                <Button size="lg" className="mr-4">
                  Get a Free Quote
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${BUSINESS_CONFIG.phone}`}>Call Now</a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default TrustCertificationBanking;