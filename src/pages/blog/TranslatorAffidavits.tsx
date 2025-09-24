import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';  
import { QuoteButton } from '@/components/QuoteButton';

const TranslatorAffidavits = () => {
  useEffect(() => {
    document.title = `Translator Affidavit Notarization | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'When translations need an affidavit and notarization—process and requirements.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Notarizing Translator Affidavits
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Some agencies require a translator's signed <strong>certificate of accuracy</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What we notarize</h2>
              <ul>
                <li>Translator's signature on the affidavit</li>
                <li>Identity and willingness verification</li>
              </ul>

              <h2>Best practice</h2>
              <p>Use a qualified translator, include language pair, and attach the translation pages as referenced.</p>

              <div className="bg-card p-6 rounded-lg mt-8">
                <h3 className="text-foreground font-bold mb-4">Need this notarized?</h3>
                <p className="mb-4 text-muted-foreground">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Serving {BUSINESS_CONFIG.serviceArea.primary}.
                </p>
            <div className="flex gap-2">
              <QuoteButton size="lg" scrollToPricing={true}>
                Get a Free Quote
              </QuoteButton>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>Call Now</a>
              </Button>
            </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default TranslatorAffidavits;