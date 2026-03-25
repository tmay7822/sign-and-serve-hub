import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const HowApostilleWorks = () => {
  useEffect(() => {
    document.title = `How the Apostille Process Works | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'From notarization to state authentication—see the simple apostille path for Ohio residents.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`How the Apostille Process Works | ${BUSINESS_CONFIG.name}`}
        description="From notarization to state authentication—see the simple apostille path for Ohio residents."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How the Apostille Process Works in Ohio (Plain English)
            </h1>
            <p className="text-xl mb-8">
              If your document will be used overseas in a Hague-member country, you may need an <strong>apostille</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>The basic path</h2>
              <ol>
                <li><strong>Notarize</strong> the document correctly</li>
                <li>Send to the <strong>proper authority</strong> (varies by document and state)</li>
                <li>Receive the <strong>apostille</strong> and ship it to your destination</li>
              </ol>

              <h2>Common apostille documents</h2>
              <p>Birth and marriage certificates, school transcripts/diplomas, POA, corporate documents.</p>

              <h2>Timing & tips</h2>
              <p>Processing time varies. Rush options may exist. We help ensure the notarization meets state requirements so your apostille isn't rejected.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Start your apostille today</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote for guidance in {BUSINESS_CONFIG.serviceArea.primary}.
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

export default HowApostilleWorks;