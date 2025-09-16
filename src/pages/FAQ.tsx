import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Everything you need to know about our mobile notary and loan signing services.
            </p>
            <Button size="lg" variant="secondary">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Additional FAQ Section */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Still Have Questions?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <strong>Phone:</strong> (513) 226-9052
                  </div>
                  <div>
                    <strong>Email:</strong> Terry@SignedOnTime.com
                  </div>
                  <div>
                    <strong>Service Area:</strong> Cincinnati-Dayton, OH
                  </div>
                  <div>
                    <strong>Hours:</strong> Monday-Sunday, 7 AM - 10 PM
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-brand-navy mb-4">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to quote requests within 30 minutes during business hours. 
                  For urgent same-day appointments, please call directly.
                </p>
                <Button variant="cta" className="w-full">
                  Get Immediate Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default FAQ;