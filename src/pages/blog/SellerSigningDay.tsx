import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const SellerSigningDay = () => {
  useEffect(() => {
    document.title = `Home Seller Closing Checklist | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Seller signing checklist—what to bring, expect, and sign on closing day. Mobile notary available.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seller Signing Day—What to Expect & Bring
            </h1>
            <p className="text-xl mb-8">
              Congratulations on your sale! Here's how to close smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What sellers sign</h2>
              <ul>
                <li>Deed transferring ownership</li>
                <li>Settlement statement (HUD-1/CD)</li>
                <li>Affidavits (occupancy, liens, repairs)</li>
                <li>Tax and utility prorations</li>
                <li>Commission agreements</li>
              </ul>

              <h2>Bring these items</h2>
              <ul>
                <li>Valid photo IDs for all sellers on title</li>
                <li>House keys, garage remotes, manuals</li>
                <li>Receipts for final repairs (if applicable)</li>
                <li>Checkbook for any final adjustments</li>
              </ul>

              <h2>The flow</h2>
              <p>We verify IDs, walk through documents, complete signatures, and coordinate with title for funding.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to close?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Mobile closings available across {BUSINESS_CONFIG.serviceArea.primary}.
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

export default SellerSigningDay;