import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const MobileVsShippingStore = () => {
  useEffect(() => {
    document.title = `Mobile Notary vs Shipping Store | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare mobile notary vs shipping store. Cost, convenience, privacy, witnesses, and turnaround explained.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Notary vs. Shipping Store—Which Is Better?
            </h1>
            <p className="text-xl mb-8">
              Both options work. The right choice depends on your document and your schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Mobile notary (we come to you)</h2>
              <p><strong>Best for:</strong> multiple signers, time-sensitive docs, privacy, hospitals, seniors, childcare needs.</p>
              <p><strong>Pros:</strong> on-site service, flexible hours, privacy, help with witnesses.</p>
              <p><strong>Consider:</strong> a mobile travel fee and scheduling a time.</p>

              <h2>Shipping store counters</h2>
              <p><strong>Best for:</strong> simple one-page forms, walk-in convenience.</p>
              <p><strong>Pros:</strong> low cost for a quick stamp, extended retail hours.</p>
              <p><strong>Consider:</strong> limited privacy, no document guidance, witnesses not always available.</p>

              <h2>What people choose</h2>
              <p>If your document is important, long, or sensitive (estate plans, deeds, POA), a <strong>mobile notary</strong> reduces errors and saves repeat trips. For a single quick signature, a counter can work.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Want it handled at your location?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. {BUSINESS_CONFIG.name} serves {BUSINESS_CONFIG.serviceArea.primary}.
                </p>
                <Button size="lg" className="mr-4" asChild>
                  <Link to="/contact">Get a Free Quote</Link>
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

export default MobileVsShippingStore;