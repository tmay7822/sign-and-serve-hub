import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const BeneficiaryChangeForms = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Beneficiary Changes | ${BUSINESS_CONFIG.name}`}
        description="Avoid insurer rejections. Names, IDs, witnesses, and notarization tips for beneficiary change forms."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Beneficiary Changes—How to Get Forms Accepted
            </h1>
            <p className="text-xl mb-8">
              Carriers reject forms for small errors. Fix them before you sign.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Common rejection reasons</h2>
              <ul>
                <li>Names don't match legal ID or policy</li>
                <li>Missing initials on beneficiary pages</li>
                <li>No witness where required</li>
                <li>Notary block left blank or incorrect</li>
              </ul>

              <h2>Quick checklist</h2>
              <ul>
                <li>Use legal names and verify spellings</li>
                <li>Bring valid photo ID</li>
                <li>Have all signers present</li>
                <li>Confirm if witnesses are needed</li>
              </ul>

              <p>We notarize on-site at homes, offices, or care facilities.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Book a visit</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote for mobile notarization across {BUSINESS_CONFIG.serviceArea.primary}.
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

export default BeneficiaryChangeForms;