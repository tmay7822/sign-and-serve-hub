import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const WhatNotariesCannotDo = () => {
  useEffect(() => {
    document.title = `What Notaries Cannot Do | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Notaries can\'t give legal advice or draft docs. Learn the boundaries and how we help.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What a Notary Cannot Do (and Why It Matters)
            </h1>
            <p className="text-xl mb-8">
              We protect signers and documents by staying neutral.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>We cannot</h2>
              <ul>
                <li>Give legal or tax advice</li>
                <li>Choose the notarial act for you</li>
                <li>Draft or alter your documents</li>
                <li>Notarize if you're unwilling or not present</li>
              </ul>

              <h2>We can</h2>
              <ul>
                <li>Verify identity and willingness</li>
                <li>Explain notarial certificates (in general terms)</li>
                <li>Coordinate witnesses</li>
                <li>Travel to your location</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Questions?</h3>
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
      <PopupForm />
    </div>
  );
};

export default WhatNotariesCannotDo;