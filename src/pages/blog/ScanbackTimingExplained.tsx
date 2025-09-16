import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const ScanbackTimingExplained = () => {
  useEffect(() => {
    document.title = `Loan Signing Scanback Timing | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'When do scanbacks happen after loan signings? Timeline from signing to funding explained.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scanback Timing Explained for Borrowers
            </h1>
            <p className="text-xl mb-8">
              After you sign, documents move quickly through the funding pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Typical timeline</h2>
              <ul>
                <li><strong>Immediately:</strong> Quality check and initial scan</li>
                <li><strong>Within 2-4 hours:</strong> Full scanback to lender/title</li>
                <li><strong>Same or next day:</strong> Lender review and funding approval</li>
                <li><strong>1-3 days:</strong> Recording and final funding</li>
              </ul>

              <h2>Factors that affect timing</h2>
              <ul>
                <li>Loan type and lender requirements</li>
                <li>Recording office schedules</li>
                <li>Holiday or weekend closings</li>
                <li>Any document corrections needed</li>
              </ul>

              <p>We coordinate with title and lenders to meet funding deadlines.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Questions about your signing?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea}.
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

export default ScanbackTimingExplained;