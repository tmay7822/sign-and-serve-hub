import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const DeedsExplained = () => {
  useEffect(() => {
    document.title = `Deed Notarization Guide | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understand deed types and what a notary does (and doesn\'t do) for warranty, quitclaim, and TOD deeds.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Warranty, Quitclaim, and TOD Deeds—Notary's Role
            </h1>
            <p className="text-xl mb-8">
              Deeds transfer interests in property. Your notary's job is focused and neutral.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Common deed types</h2>
              <ul>
                <li><strong>Warranty:</strong> Seller guarantees clear title.</li>
                <li><strong>Quitclaim:</strong> Transfers whatever interest the grantor has—no warranties.</li>
                <li><strong>Transfer on Death (TOD):</strong> Names beneficiary at death.</li>
              </ul>

              <h2>Our role</h2>
              <ul>
                <li>Verify identity, willingness, and awareness</li>
                <li>Ensure proper signing of the notarial certificate</li>
                <li>We <strong>do not</strong> give legal advice or draft deeds</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to sign?</h3>
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

export default DeedsExplained;