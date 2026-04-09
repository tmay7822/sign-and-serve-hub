import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { DocumentSearch } from '@/components/DocumentSearch';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you travel to me?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area." } },
    { "@type": "Question", "name": "What IDs do I need?", "acceptedAnswer": { "@type": "Answer", "text": "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature." } },
    { "@type": "Question", "name": "Do you offer after-hours service?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer evening and weekend appointments to accommodate your schedule. Emergency and rush services are available for urgent document needs." } },
    { "@type": "Question", "name": "What are your fees?", "acceptedAnswer": { "@type": "Answer", "text": "Our fees include travel within our service area plus per-signature notarization. We provide instant quotes over the phone or through our contact form. No hidden fees, transparent pricing." } },
    { "@type": "Question", "name": "Which loan packages do you handle?", "acceptedAnswer": { "@type": "Answer", "text": "We handle all types: buyer packages, seller packages, refinances, HELOCs, reverse mortgages, and investor/commercial loan documents. Fully trained in all major loan document types." } },
    { "@type": "Question", "name": "How far in advance should I schedule?", "acceptedAnswer": { "@type": "Answer", "text": "We often accommodate same-day requests, but we recommend scheduling 24-48 hours in advance for best availability, especially for loan signings and complex document packages." } },
    { "@type": "Question", "name": "Are you insured and bonded?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we carry comprehensive Errors & Omissions insurance and are fully bonded. We're also NNA (National Notary Association) certified and background-checked for your peace of mind." } },
    { "@type": "Question", "name": "Can you notarize documents in languages other than English?", "acceptedAnswer": { "@type": "Answer", "text": "We can notarize documents in any language, but the signer must be able to communicate directly with the notary in English, or a qualified translator must be present during the signing." } }
  ]
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Frequently Asked Questions | Mobile Notary Services | Signed On Time"
        description="Common questions about mobile notary services in Cincinnati-Dayton area. Same-day service, pricing, and service area information."
        canonical="https://www.signedontime.com/faq"
        jsonLd={faqSchema}
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-4 opacity-90">
              Everything you need to know about our mobile notary and loan signing services.
            </p>
            <p className="text-base opacity-80">
              Can't find your answer? Call or text{' '}
              <a href="tel:5132269052" className="underline font-semibold">(513) 226-9052</a> — Terry answers personally 7 days a week.
            </p>
            <div className="mt-6">
              <StandardCTAButtons variant="top" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Document Search */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <DocumentSearch />
          </div>
        </div>
      </section>

      {/* Ready to Schedule */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Schedule?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most questions are answered faster with a quick call. Terry is available 7 days a week to answer questions and schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg px-8" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-bold text-lg px-8 border-2" asChild>
                <a href="tel:5132269052">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (513) 226-9052
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
