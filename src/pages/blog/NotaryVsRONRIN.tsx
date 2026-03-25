import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const NotaryVsRONRIN = () => {
  useEffect(() => {
    document.title = `Mobile Notary vs RON vs RIN | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare in-person, RON, and RIN notarization options. Which is right for your documents?');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Mobile Notary vs RON vs RIN | ${BUSINESS_CONFIG.name}`}
        description="Compare in-person, RON, and RIN notarization options. Which is right for your documents?"
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              In-Person vs. RON vs. RIN—Which Option Is Right for You?
            </h1>
            <p className="text-xl mb-8">
              Multiple notarization options exist. Here's when to use each.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Traditional in-person (mobile)</h2>
              <p><strong>Best for:</strong> Most documents, complex signings, multiple parties, sensitive forms</p>
              <p><strong>Pros:</strong> Personal service, document guidance, witness coordination</p>
              <p><strong>Requirements:</strong> All parties meet the notary</p>

              <h2>Remote Online Notarization (RON)</h2>
              <p><strong>Best for:</strong> Simple documents, distant signers, tech-comfortable clients</p>
              <p><strong>Pros:</strong> No travel, available across state lines (where legal)</p>
              <p><strong>Requirements:</strong> Reliable internet, webcam, digital documents</p>

              <h2>Remote Ink Notarization (RIN)</h2>
              <p><strong>Best for:</strong> Paper documents with distant signers</p>
              <p><strong>Pros:</strong> Combines remote convenience with wet signatures</p>
              <p><strong>Requirements:</strong> Video call plus mailed/courier documents</p>

              <h2>What works best?</h2>
              <p>Most complex documents (loans, estate plans, healthcare directives) work best with traditional mobile service for accuracy and personal guidance.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need mobile notary service?</h3>
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
      
    </div>
  );
};

export default NotaryVsRONRIN;