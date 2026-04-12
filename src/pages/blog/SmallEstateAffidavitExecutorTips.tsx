import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const SmallEstateAffidavitExecutorTips = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Small Estate Affidavits | ${BUSINESS_CONFIG.name}`}
        description="Executor tips for small estate affidavits—eligibility, common errors, and notarization requirements."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Small Estate Affidavits—Executor Tips to Avoid Delays
            </h1>
            <p className="text-xl mb-8">
              A small estate affidavit can be faster than probate—but details matter.
            </p>
            <BlogMeta publishDate="2026-01-04" lastUpdated="2026-04-09" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Common errors</h2>
              <ul>
                <li>Wrong affidavit form for Ohio</li>
                <li>Missing death certificate or proof of relationship</li>
                <li>Bank-specific requirements ignored</li>
                <li>No notarization where required</li>
              </ul>

              <h2>Be ready</h2>
              <ul>
                <li>Confirm the asset threshold for Ohio</li>
                <li>Have IDs and supporting docs</li>
                <li>Complete forms but do not sign before the notary</li>
              </ul>

              <blockquote>
                <p><em>Not legal advice. Ask a probate attorney for eligibility questions.</em></p>
              </blockquote>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Book a mobile notary</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We cover {BUSINESS_CONFIG.serviceArea.primary}.
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

export default SmallEstateAffidavitExecutorTips;