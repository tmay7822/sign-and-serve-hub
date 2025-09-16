import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const ApostilleProcessingTimes = () => {
  useEffect(() => {
    document.title = `Apostille Processing Times | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'How long do apostilles take? Regular vs. rush processing times and what affects the timeline.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
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

              <p>We ensure your notarization meets requirements so there are no delays or rejections.</p>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Start your apostille process</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. Serving {BUSINESS_CONFIG.serviceArea}.
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

export default ApostilleProcessingTimes;