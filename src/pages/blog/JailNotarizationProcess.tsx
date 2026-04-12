import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const JailNotarizationProcess = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Jail Notary Services | ${BUSINESS_CONFIG.name}`}
        description="Step-by-step jail and detention notarizations—ID, scheduling, and facility rules."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jail & Detention Notarizations—How It Works
            </h1>
            <p className="text-xl mb-8">
              We routinely perform notarizations at jails, detention centers, and prisons.
            </p>
            <BlogMeta publishDate="2026-01-10" lastUpdated="2026-02-09" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Before we schedule</h2>
              <ul>
                <li><strong>Facility approval:</strong> We confirm visitor rules and hours.</li>
                <li><strong>Document readiness:</strong> Bring forms <strong>complete but unsigned</strong>.</li>
                <li><strong>Valid ID:</strong> Facility ID process varies; inmate ID/wristband usually required.</li>
                <li><strong>Witnesses:</strong> If your form needs them, ask us about options.</li>
              </ul>

              <h2>Common documents</h2>
              <p>Powers of Attorney, affidavits, parental consent, property/vehicle forms.</p>

              <h2>Day of the visit</h2>
              <p>Allow extra time for screening. We verify identity and willingness, then notarize. We do <strong>not</strong> give legal advice.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need a facility visit?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Service across {BUSINESS_CONFIG.serviceArea.primary}.
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

export default JailNotarizationProcess;