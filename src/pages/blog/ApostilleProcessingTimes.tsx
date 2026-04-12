import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { QuoteButton } from '@/components/QuoteButton';
import { BookingWidget } from '@/components/BookingWidget';
import BlogMeta from '@/components/blog/BlogMeta';

const ApostilleProcessingTimes = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`Apostille Processing Times | ${BUSINESS_CONFIG.name}`}
        description="How long do apostilles take? Regular vs. rush processing times and what affects the timeline."
      />
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apostille Processing Times & Rush Options
            </h1>
            <p className="text-xl mb-8">
              Planning ahead saves stress. Here's what to expect for timing.
            </p>
            <BlogMeta publishDate="2025-12-09" lastUpdated="2026-03-29" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Regular processing</h2>
              <ul>
                <li><strong>State documents:</strong> 2-4 weeks</li>
                <li><strong>Federal documents:</strong> 3-6 weeks</li>
                <li><strong>County documents:</strong> 1-3 weeks (varies)</li>
              </ul>

              <h2>Rush/expedited options</h2>
              <p>Many authorities offer expedited service for additional fees:</p>
              <ul>
                <li><strong>State rush:</strong> 3-5 business days</li>
                <li><strong>Federal rush:</strong> 5-8 business days</li>
                <li><strong>Third-party services:</strong> Often available for faster turnaround</li>
              </ul>

              <h2>What affects timing</h2>
              <ul>
                <li>Document type and issuing authority</li>
                <li>Completeness of notarization</li>
                <li>Peak seasons (summer, school years)</li>
                <li>Holiday schedules</li>
              </ul>

              <p>We complete the notarization so your documents are ready for apostille processing.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Start your apostille process</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Serving {BUSINESS_CONFIG.serviceArea.primary}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <BookingWidget size="lg" defaultService="apostille">
                    Book Appointment
                  </BookingWidget>
                  <QuoteButton size="lg" variant="outline" useCalculator={true}>
                    Get Free Quote
                  </QuoteButton>
                  <Button variant="secondary" size="lg" asChild>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`}>Call Now</a>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default ApostilleProcessingTimes;