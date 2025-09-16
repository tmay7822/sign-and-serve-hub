import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const InvestorNotarizations = () => {
  useEffect(() => {
    document.title = `Real Estate Investor Notary | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast, accurate notarizations for investors—deeds, assignments, private lender docs, and more.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investor-Friendly Notarizations—Private Lenders, Assignments & More
            </h1>
            <p className="text-xl mb-8">
              Deals move quickly. We keep signatures moving with clean, compliant notarizations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Common investor documents</h2>
              <ul>
                <li>Deeds (Warranty/Quitclaim/TOD)</li>
                <li>Assignments & Substitutions</li>
                <li>Lien releases & satisfactions</li>
                <li>Private money lender documents</li>
                <li>Entity resolutions & certificates</li>
              </ul>

              <h2>Speed without errors</h2>
              <ul>
                <li>Identity verification and willingness</li>
                <li>Clear signature guidance (no legal advice)</li>
                <li>Scanbacks or drop-off per instructions</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need flexible scheduling?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea.primary}—evenings and weekends available.
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

export default InvestorNotarizations;