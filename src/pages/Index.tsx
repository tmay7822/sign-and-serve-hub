import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection, { aeoQuestions } from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ArrowRight, MapPin } from 'lucide-react';

import { useHomepageSchema } from '@/components/SEO/HomepageSchema';

import { BUSINESS_CONFIG } from '@/config/business';

const allHomepageFaqs = [
  ...aeoQuestions,
  {
    question: "Do you travel to me?",
    answer: "Yes, we come to you anywhere in our 6-county Cincinnati–Dayton service area. That includes your home, office, hospital, or any location that works for you."
  },
  {
    question: "What IDs do I need?",
    answer: "Bring one current, unexpired government-issued photo ID. A driver's license, state ID, passport, or military ID all work — it must clearly show your photo and signature."
  },
  {
    question: "Do you offer after-hours service?",
    answer: "Yes, we offer evening, weekend, and holiday appointments. Emergency and rush services are also available for urgent document needs."
  },
  {
    question: "What are your fees?",
    answer: "A travel fee applies based on distance, plus Ohio's per-signature notarization fee. Call or use our contact form for an exact quote — no hidden fees, no surprises."
  },
  {
    question: "Which loan packages do you handle?",
    answer: "We handle all loan package types — buyer, seller, refinance, HELOC, reverse mortgage, and investor/commercial closings. Every signing is handled by a trained loan signing agent."
  },
  {
    question: "How far in advance should I schedule?",
    answer: "Same-day appointments are often available. For best availability — especially loan signings and large document packages — schedule 24–48 hours in advance."
  },
  {
    question: "Are you insured and bonded?",
    answer: "Yes, we carry Errors & Omissions insurance and are fully bonded. We are also background-checked and professionally certified for your peace of mind."
  },
  {
    question: "Can you notarize documents in languages other than English?",
    answer: "Yes, we can notarize documents written in any language. The signer must communicate with the notary in English, or bring a qualified translator to the appointment."
  }
];

const Index = () => {
  const homepageJsonLd = useHomepageSchema(allHomepageFaqs);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={BUSINESS_CONFIG.seo.metaTitle}
        description={BUSINESS_CONFIG.seo.metaDescription}
        keywords={BUSINESS_CONFIG.seo.keywords}
        jsonLd={homepageJsonLd}
      />
      <Header />
      <HeroSection />
      <TrustSignals />
      <TestimonialsSection />
      <ServicesSection />

      {/* Resources Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Free Guides & Resources</h2>
            <p className="text-muted-foreground text-lg">Know what to expect before your appointment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'What to Bring to Your Appointment', href: '/blog/general-notary-what-to-bring', desc: 'Complete checklist so your notarization goes smoothly the first time.' },
              { title: 'What Happens at a Loan Signing', href: '/blog/what-happens-loan-signing', desc: 'Everything you need to know before your mortgage closing.' },
              { title: 'Ohio Car Title Transfer Guide', href: '/blog/ohio-car-title-transfer-requirements', desc: 'Step-by-step requirements for notarizing vehicle title transfers.' },
            ].map((guide) => (
              <Link key={guide.href} to={guide.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* County Hubs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Serving 6 Southwest Ohio Counties</h2>
            <p className="text-muted-foreground text-lg">Same-day mobile notary service from our central Waynesville location</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Hamilton County', cities: 'Cincinnati, Blue Ash, Indian Hill', href: '/blog/notary-guide-hamilton-county-ohio' },
              { name: 'Warren County', cities: 'Mason, Lebanon, Springboro', href: '/blog/notary-guide-warren-county-ohio' },
              { name: 'Montgomery County', cities: 'Dayton, Kettering, Centerville', href: '/blog/notary-guide-montgomery-county-ohio' },
              { name: 'Butler County', cities: 'West Chester, Fairfield, Oxford', href: '/blog/notary-guide-butler-county-ohio' },
              { name: 'Greene County', cities: 'Beavercreek, Xenia, Fairborn', href: '/blog/notary-guide-greene-county-ohio' },
              { name: 'Clinton County', cities: 'Wilmington, Blanchester, Sabina', href: '/blog/notary-guide-clinton-county-ohio' },
            ].map((county) => (
              <Link key={county.href} to={county.href} className="group">
                <Card className="h-full text-center transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-4">
                    <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{county.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{county.cities}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Notary Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Seasonal Notary Services</h2>
            <p className="text-muted-foreground text-lg">Time-sensitive documents that need a notary — we have you covered year-round</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tax Season Documents', season: 'Jan – Apr', href: '/tax-season-notary', desc: 'Affidavits, POA for tax filing, and IRS document notarization.' },
              { title: 'Home Buying Season', season: 'Mar – Jun', href: '/home-buying-season-notary', desc: 'Loan closings, title transfers, and real estate documents.' },
              { title: 'Back to School Documents', season: 'Jul – Sep', href: '/back-to-school-documents', desc: 'Guardianship forms, travel consent, and college documents.' },
              { title: 'Year-End Estate Planning', season: 'Oct – Dec', href: '/year-end-planning-notary', desc: 'Wills, trusts, POA updates before the new year.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-3">{item.season}</span>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;