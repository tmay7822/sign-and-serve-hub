import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const WitnessRequirements = () => {
  useEffect(() => {
    document.title = `Document Witness Requirements | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'When witnesses are required, who can qualify, and how we help arrange them.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Do You Need Witnesses? Notary Guide
            </h1>
            <p className="text-xl mb-8">
              Some forms need one or two <strong>disinterested witnesses</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Common docs needing witnesses</h2>
              <ul>
                <li>Wills and living wills</li>
                <li>POA/HCPOA (varies by form)</li>
                <li>Real estate deeds (sometimes)</li>
                <li>Retirement/beneficiary forms (sometimes)</li>
              </ul>

              <h2>Who can be a witness?</h2>
              <ul>
                <li>Not a party to the document or beneficiary</li>
                <li>Over 18 and competent</li>
                <li>Able to present valid ID (if requested)</li>
              </ul>

              <p>We can often <strong>help arrange witnesses</strong> with notice.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Not sure if you need witnesses?</h3>
                <p className="mb-4">
                  Send the form instructions or ask the requester. Then call <strong>{BUSINESS_CONFIG.phone}</strong>.
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

export default WitnessRequirements;