import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import BlogMeta from '@/components/blog/BlogMeta';

const TitleTransferChecklist = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Title Transfer Checklist | ${BUSINESS_CONFIG.name}`}
        description="Avoid DMV rejections. Use this title transfer checklist: IDs, liens, odometer, signatures, and notarization."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Title Transfer Checklist—Avoid These 7 Mistakes
            </h1>
            <p className="text-xl mb-8">
              Get the title done right the first time. Here's what causes most rejections.
            </p>
            <BlogMeta publishDate="2025-11-05" lastUpdated="2026-03-06" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Don't miss these</h2>
              <ol>
                <li><strong>Wrong buyer/seller names</strong> or mismatched IDs</li>
                <li><strong>Odometer</strong> section incomplete or crossed out</li>
                <li><strong>Lienholder</strong> not properly released</li>
                <li><strong>Missing signatures</strong> in the right boxes</li>
                <li><strong>White-out</strong> or heavy corrections</li>
                <li><strong>Out-of-state rules</strong> not followed</li>
                <li>No <strong>notarization</strong> where required</li>
              </ol>

              <h2>Bring to your appointment</h2>
              <ul>
                <li>Title, bill of sale (if required), lien release</li>
                <li>Valid photo IDs</li>
                <li>Any DMV forms for Ohio</li>
              </ul>

              <p>We can meet at homes, dealerships, or workplaces.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need a mobile notary?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote for service across {BUSINESS_CONFIG.serviceArea.primary}.
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

export default TitleTransferChecklist;