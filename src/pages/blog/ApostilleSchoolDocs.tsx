import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const ApostilleSchoolDocs = () => {
  useEffect(() => {
    document.title = `Apostille for Diplomas & Transcripts | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How to notarize and apostille school records for use overseas—simple steps and tips.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apostille for Diplomas & Transcripts—Guide
            </h1>
            <p className="text-xl mb-8">
              Using school documents overseas? You may need an apostille.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Steps</h2>
              <ol>
                <li>Confirm what the destination country requires</li>
                <li>Obtain notarized copies or registrar certification (as directed)</li>
                <li>Submit to the correct authority for apostille</li>
              </ol>

              <h2>Tips</h2>
              <ul>
                <li>Ask the recipient if they accept <strong>notarized copies</strong> or need originals/registrar seals.</li>
                <li>Processing times vary; rush may be available.</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Start your apostille</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote.
                </p>
                <Button size="lg" className="mr-4">
                  Get a Free Quote
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

export default ApostilleSchoolDocs;