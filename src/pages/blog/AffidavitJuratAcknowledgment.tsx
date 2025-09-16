import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const AffidavitJuratAcknowledgment = () => {
  useEffect(() => {
    document.title = `Affidavit vs Jurat vs Acknowledgment | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'What\'s the difference between an affidavit, jurat, and acknowledgment—and which one you need.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Affidavit, Jurat, or Acknowledgment? Plain-English Guide
            </h1>
            <p className="text-xl mb-8">
              Courts and agencies ask for specific notarial acts. Here's the simple breakdown.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Affidavit</h2>
              <p>A written, sworn statement. Usually notarized with a <strong>jurat</strong>.</p>

              <h2>Jurat</h2>
              <p>You <strong>swear/affirm</strong> the statement is true and sign in front of the notary. The notary administers an oath.</p>

              <h2>Acknowledgment</h2>
              <p>You acknowledge you signed the document <strong>voluntarily</strong>. No oath; identity and willingness are confirmed.</p>

              <h2>Which do you need?</h2>
              <p>Your document or agency instructions should specify. If not, ask the requesting party or your attorney.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to sign?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea.primary}—mobile and after-hours.
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

export default AffidavitJuratAcknowledgment;