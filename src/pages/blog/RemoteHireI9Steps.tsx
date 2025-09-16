import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const RemoteHireI9Steps = () => {
  useEffect(() => {
    document.title = `Remote Hire I-9 Authorized Representative | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Remote hire I-9 support. What employers and employees need, IDs, and quick appointments.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Remote Hire I-9—Simple Steps for Employers & Employees
            </h1>
            <p className="text-xl mb-8">
              When teams work hybrid or fully remote, you can appoint an <strong>authorized representative</strong> to complete Section 2 of the I-9.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>For employers</h2>
              <ul>
                <li>Send clear written authorization and instructions</li>
                <li>Provide the correct I-9 version and due date</li>
                <li>Confirm which IDs the employee will present</li>
              </ul>

              <h2>For employees</h2>
              <ul>
                <li>Bring original, unexpired IDs from the I-9 lists</li>
                <li>Ensure names match your HR records</li>
                <li>Schedule a quick appointment</li>
              </ul>

              <p>We act as the authorized representative, check documents, and complete the employer's instructions.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Ready to schedule?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. {BUSINESS_CONFIG.name} serves {BUSINESS_CONFIG.serviceArea}.
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

export default RemoteHireI9Steps;