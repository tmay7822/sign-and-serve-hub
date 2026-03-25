import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const InternationalTravelConsent = () => {
  useEffect(() => {
    document.title = `Travel Consent Letters | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'What to include in a minor or student travel consent letter—and when to notarize for international travel.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Travel Consent Letters | ${BUSINESS_CONFIG.name}`}
        description="What to include in a minor or student travel consent letter—and when to notarize for international travel."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Minor & Student Travel Consent—What Airlines Check
            </h1>
            <p className="text-xl mb-8">
              Border agents and airlines may ask for a notarized consent letter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Include in the letter</h2>
              <ul>
                <li>Child's full name, DOB, passport info</li>
                <li>Travel dates, flights, destinations</li>
                <li>Names/contacts for accompanying adult</li>
                <li>Contact info for non-traveling parent(s)</li>
              </ul>

              <h2>When to notarize</h2>
              <ul>
                <li>International trips</li>
                <li>Child traveling with one parent, relatives, or school groups</li>
              </ul>

              <p>We provide mobile notarization at your home, school, or the airport area (where allowed).</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need it fast?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Service across {BUSINESS_CONFIG.serviceArea.primary}.
                </p>
                <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-4" asChild>
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

export default InternationalTravelConsent;