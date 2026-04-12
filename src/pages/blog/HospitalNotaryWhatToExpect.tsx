import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const HospitalNotaryWhatToExpect = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Hospital & Care Facility Notary | ${BUSINESS_CONFIG.name}`}
        description="On-site notarizations in hospitals, rehab, and nursing homes. What to expect, IDs, witnesses, and scheduling."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hospital, Rehab, and Nursing Home Notarizations—What to Expect
            </h1>
            <p className="text-xl mb-8">
              We routinely meet patients and families on-site. Here's how to keep it smooth:
            </p>
            <BlogMeta publishDate="2025-10-08" lastUpdated="2026-02-10" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Before we arrive</h2>
              <ul>
                <li>Confirm the signer is <strong>alert, aware, and willing</strong>.</li>
                <li>Have a <strong>valid photo ID</strong> ready.</li>
                <li>Check if your form needs <strong>witnesses</strong> (we can help arrange with notice).</li>
              </ul>

              <h2>During the visit</h2>
              <p>We verify identity, ensure willingness, and complete the certificate. We do not give medical or legal advice.</p>

              <h2>Common documents</h2>
              <p>HCPOA, Living Will, HIPAA release, POA, affidavits.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need a same-day visit?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong>. We cover {BUSINESS_CONFIG.serviceArea.primary} and facilities throughout the region.
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

export default HospitalNotaryWhatToExpect;