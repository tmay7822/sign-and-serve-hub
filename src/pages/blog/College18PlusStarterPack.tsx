import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const College18PlusStarterPack = () => {
  useEffect(() => {
    document.title = `FERPA, HIPAA & POA for College Students | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Turned 18 or heading to college? What parents can and can\'t access—FERPA, HIPAA, and POA explained in plain English.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The 18+ Starter Pack: FERPA, HIPAA & POA
            </h1>
            <p className="text-xl mb-8">
              When a student turns 18, parents lose automatic access to records. Here's what restores it—fast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>What each form does</h2>
              <ul>
                <li><strong>FERPA Release:</strong> Lets schools share education records and speak with parents.</li>
                <li><strong>HIPAA Authorization:</strong> Allows doctors to share medical info with named people.</li>
                <li><strong>Medical POA:</strong> Names someone to make health decisions if the student can't.</li>
                <li><strong>Financial/Durable POA:</strong> Lets a trusted person handle banking and admin tasks.</li>
              </ul>

              <h2>How notarization helps</h2>
              <ul>
                <li>Confirms identity and willingness.</li>
                <li>Prevents delays when a school or hospital requires notarized signatures.</li>
              </ul>

              <h2>Quick checklist</h2>
              <ul>
                <li>Valid photo ID</li>
                <li>Completed (but <strong>unsigned</strong>) forms</li>
                <li>Student present to sign</li>
                <li>Witnesses if the form requires it</li>
              </ul>

              <blockquote>
                <p>We don't give legal advice. Ask your school or attorney which forms you need.</p>
              </blockquote>

              <div className="bg-brand-light p-6 rounded-lg mt-8">
                <h3 className="text-brand-navy font-bold mb-4">Need this handled now?</h3>
                <p className="mb-4">
                  Call <strong>{BUSINESS_CONFIG.phone}</strong> or get a free quote. {BUSINESS_CONFIG.name} serves {BUSINESS_CONFIG.serviceArea.primary}.
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

export default College18PlusStarterPack;