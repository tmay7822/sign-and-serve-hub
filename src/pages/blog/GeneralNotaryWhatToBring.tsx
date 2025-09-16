import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const GeneralNotaryWhatToBring = () => {
  useEffect(() => {
    document.title = `What to Bring to a Notarization | ${BUSINESS_CONFIG.name}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A quick checklist for a smooth notarization—IDs, witnesses, signatures, and common mistakes to avoid. Call ' + BUSINESS_CONFIG.phone + '.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What to Bring to a Notarization
            </h1>
            <p className="text-xl mb-8">
              Getting a document notarized is simple when you know what to bring. Use this short checklist to save time and avoid re-signs.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Your quick checklist</h2>
              <ul>
                <li><strong>Valid photo ID:</strong> driver's license, passport, or state ID. Must be current and legible.</li>
                <li><strong>Completed—but unsigned—document:</strong> never sign before you meet the notary.</li>
                <li><strong>Names must match:</strong> the name on the ID should match the name on the document.</li>
                <li><strong>All signers present:</strong> every signer must appear in person.</li>
                <li><strong>Witnesses (if required):</strong> some forms need 1–2 disinterested witnesses. Ask us if you need help coordinating.</li>
              </ul>

              <h2>Common documents we notarize in {BUSINESS_CONFIG.serviceArea}</h2>
              <ul>
                <li>Affidavits and sworn statements</li>
                <li>Power of Attorney (POA)</li>
                <li>Deeds and real estate forms</li>
                <li>School and medical releases</li>
                <li>Consent to travel letters</li>
              </ul>

              <h2>Tips from {BUSINESS_CONFIG.name}</h2>
              <ul>
                <li>Bring a <strong>backup ID</strong> if your primary is worn or recently renewed.</li>
                <li>If you're unsure about witnesses, <strong>ask before the appointment</strong>.</li>
                <li>Have a simple plan for where we'll meet: home, office, hospital, or a public location.</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need help now?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea}—same-day and after-hours when available.
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

export default GeneralNotaryWhatToBring;