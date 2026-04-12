import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const HCPOALivingWillGuide = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`HCPOA & Living Will Guide | ${BUSINESS_CONFIG.name}`}
        description="Understand Healthcare Power of Attorney and Living Will, who signs, witnesses, and how a mobile notary helps."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple Guide to HCPOA and Living Will
            </h1>
            <p className="text-xl mb-8">
              Healthcare decisions matter. Two documents help your family act with clarity:
            </p>
            <BlogMeta publishDate="2025-10-03" lastUpdated="2026-02-06" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Healthcare Power of Attorney (HCPOA)</h2>
              <p>Names a trusted person to make medical decisions if you cannot.</p>
              <p><strong>Key points:</strong> signer must have capacity; bring valid ID; witnesses may be required.</p>

              <h2>Living Will</h2>
              <p>States your preferences for end-of-life care.</p>
              <p><strong>Key points:</strong> some forms require specific witness rules; we'll help you follow them.</p>

              <h2>Where we meet</h2>
              <p>Homes, hospitals, rehab centers, senior communities, or any convenient location. We verify identity and willingness, then complete the notarization.</p>

              <blockquote>
                <p><strong>Note:</strong> We do not provide legal advice. Ask your clinician or attorney about which forms you need.</p>
              </blockquote>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to sign?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea.primary} with compassionate, on-time service.
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
      
    </div>
  );
};

export default HCPOALivingWillGuide;