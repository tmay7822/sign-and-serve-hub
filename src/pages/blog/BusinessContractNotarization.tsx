import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const BusinessContractNotarization = () => {
  useEffect(() => {
    document.title = `Business Contract Notarization | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'When do business contracts need notarization? Vendor agreements, NDAs, employment docs explained.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Contract Notarizations—When and Why
            </h1>
            <p className="text-xl mb-8">
              Not all contracts need notarization, but some do. Here's when it's required or beneficial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Often required</h2>
              <ul>
                <li>Real estate contracts and deeds</li>
                <li>Powers of attorney</li>
                <li>Some loan documents</li>
                <li>Certain vendor/supplier agreements</li>
                <li>International contracts</li>
              </ul>

              <h2>Often beneficial (but not required)</h2>
              <ul>
                <li>High-value service agreements</li>
                <li>Employment contracts with confidentiality clauses</li>
                <li>Partnership agreements</li>
                <li>Non-disclosure agreements (NDAs)</li>
              </ul>

              <h2>Why businesses choose notarization</h2>
              <ul>
                <li><strong>Legal protection:</strong> Harder to claim forgery</li>
                <li><strong>Enforceability:</strong> Some courts prefer notarized signatures</li>
                <li><strong>International use:</strong> Many foreign entities expect notarization</li>
                <li><strong>Corporate policy:</strong> Internal requirements for high-value deals</li>
              </ul>

              <p>We handle corporate signings at offices throughout {BUSINESS_CONFIG.serviceArea.primary}.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Book corporate notary service</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Flexible scheduling for businesses.
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

export default BusinessContractNotarization;