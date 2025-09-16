import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const WhatHappensLoanSigning = () => {
  useEffect(() => {
    document.title = `What Happens at a Loan Signing | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Buyer, seller, refi, or HELOC—what to expect at your loan signing. IDs, signatures, scanbacks, and timing.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Happens at a Loan Signing?
            </h1>
            <p className="text-xl mb-8">
              Whether you're buying, selling, or refinancing, here's the basic flow:
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>The flow</h2>
              <ol>
                <li>Verify IDs and print names match</li>
                <li>Walk through the package (no legal advice)</li>
                <li>Sign, date, and initial as required</li>
                <li>Quality check and finalize the notarial certificates</li>
                <li>Scanbacks or drop, as instructed by title/lender</li>
              </ol>

              <h2>Tips for a smooth closing</h2>
              <ul>
                <li>Use your <strong>legal signature</strong> consistently</li>
                <li>Have <strong>funds</strong> and <strong>IDs</strong> ready</li>
                <li>Allow quiet time and avoid distractions</li>
              </ul>

              <p>We coordinate with title, lenders, and agents to hit funding timelines.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need a flexible appointment?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong>. We cover {BUSINESS_CONFIG.serviceArea.primary}—nights and weekends when available.
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

export default WhatHappensLoanSigning;