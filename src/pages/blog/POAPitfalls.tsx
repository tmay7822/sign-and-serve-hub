import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const POAPitfalls = () => {
  useEffect(() => {
    document.title = `Power of Attorney Pitfalls | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Avoid POA rejections: capacity, ID, witnesses, and signatures for better acceptance.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              POA Pitfalls—Capacity, Witnesses, and Acceptance
            </h1>
            <p className="text-xl mb-8">
              To be accepted, a POA must be executed correctly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Key checks</h2>
              <ul>
                <li><strong>Capacity:</strong> Signer is alert, aware, and willing.</li>
                <li><strong>ID:</strong> Government photo ID matches the name on the document.</li>
                <li><strong>Witnesses:</strong> Some POA forms require them.</li>
              </ul>

              <h2>Pro tip</h2>
              <p>Ask the receiving bank, hospital, or title company if they have <strong>preferred forms</strong>.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Book a mobile notary</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong>. We cover {BUSINESS_CONFIG.serviceArea.primary}.
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

export default POAPitfalls;