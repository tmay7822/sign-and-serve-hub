import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const RemoteHireI9Steps = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Remote Hire I-9 Authorized Representative | ${BUSINESS_CONFIG.name}`}
        description="Remote hire I-9 support. What employers and employees need, IDs, and quick appointments."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Remote Hire I-9—Simple Steps for Employers & Employees
            </h1>
            <p className="text-xl mb-8">
              When teams work hybrid or fully remote, you can appoint an <strong>authorized representative</strong> to complete Section 2 of the Employment Eligibility Verification (I-9).
            </p>
            <BlogMeta publishDate="2025-10-25" lastUpdated="2026-02-24" />
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

export default RemoteHireI9Steps;