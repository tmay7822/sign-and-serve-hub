import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const WillsTrustsPOAChecklist = () => {
  useEffect(() => {
    document.title = `Estate Plan Notary Checklist | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A practical checklist for notarizing estate documents—IDs, witnesses, readiness, and signing tips.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wills, Trusts & POA—Notary Checklist
            </h1>
            <p className="text-xl mb-8">
              Estate documents need clean execution. Use this quick checklist:
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Bring</h2>
              <ul>
                <li>Current photo IDs for all signers</li>
                <li>Documents <strong>complete but unsigned</strong></li>
                <li>Any required <strong>witnesses</strong> (we can help with notice)</li>
              </ul>

              <h2>Prepare</h2>
              <ul>
                <li>Confirm spellings, dates, and roles (trustee, agent, executor)</li>
                <li>Choose a quiet space with a flat surface</li>
                <li>Allow enough time—rushing causes errors</li>
              </ul>

              <h2>Common estate documents we handle</h2>
              <ul>
                <li>Last Will & Testament and Codicils</li>
                <li>Revocable/Irrevocable Trusts and Certifications</li>
                <li>Financial and Medical POA</li>
                <li>Small Estate Affidavits and Executor Oaths</li>
              </ul>

              <p><em>Tip:</em> Ask your attorney to review content before we arrive. We handle the notarization precisely and promptly.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Book your signing</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote for mobile service in {BUSINESS_CONFIG.serviceArea.primary}.
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

export default WillsTrustsPOAChecklist;