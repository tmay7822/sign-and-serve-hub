import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const NameMismatchAffidavit = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Name Mismatch Solutions | ${BUSINESS_CONFIG.name}`}
        description="AKA/Formerly Known As, hyphens, and spelling—clean up name mismatches before you sign."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Name Mismatch? How to Avoid Re-Signs
            </h1>
            <p className="text-xl mb-8">
              Name differences cause delays.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Check these first</h2>
              <ul>
                <li>Spelling and middle initials</li>
                <li>Hyphenated or maiden names</li>
                <li>IDs vs document names</li>
              </ul>

              <h2>Fix paths</h2>
              <ul>
                <li>Ask the requester if an <strong>AKA affidavit</strong> is acceptable</li>
                <li>Update docs before your appointment when possible</li>
              </ul>

              <p>We verify identity and willingness; we cannot change your forms.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need a quick review?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong>. We serve {BUSINESS_CONFIG.serviceArea.primary}.
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

export default NameMismatchAffidavit;