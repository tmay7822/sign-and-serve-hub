import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const AfterHoursEmergencyNotary = () => {
  useEffect(() => {
    document.title = `After-Hours Emergency Notary | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nights, weekends, and urgent notarizations—what\'s possible and how to book fast.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              After-Hours & Emergency Notary Service
            </h1>
            <p className="text-xl mb-8">
              Documents don't keep office hours. We offer flexible, after-hours appointments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>When it helps</h2>
              <ul>
                <li>Hospital/rehab signings</li>
                <li>Time-sensitive real estate or travel</li>
                <li>Last-minute POA or consent forms</li>
              </ul>

              <h2>What to expect</h2>
              <ul>
                <li>Transparent <strong>travel + after-hours fee</strong></li>
                <li>Clear scheduling windows</li>
                <li>Mobile service to your location</li>
              </ul>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need it tonight or this weekend?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. We serve {BUSINESS_CONFIG.serviceArea.primary}.
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

export default AfterHoursEmergencyNotary;