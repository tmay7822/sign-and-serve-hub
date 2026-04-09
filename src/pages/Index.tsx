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
import { BookOpen, ArrowRight } from 'lucide-react';

import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import ReviewSchema from '@/components/SEO/ReviewSchema';
import EnhancedFAQSchema from '@/components/SEO/EnhancedFAQSchema';

import { BUSINESS_CONFIG } from '@/config/business';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={BUSINESS_CONFIG.seo.metaTitle}
        description={BUSINESS_CONFIG.seo.metaDescription}
        keywords={BUSINESS_CONFIG.seo.keywords}
      />
      <LocalBusinessSchema />
      <ReviewSchema />
      <EnhancedFAQSchema 
        faqs={aeoQuestions} 
        mainEntity={{ 
          name: "Signed On Time Mobile Notary", 
          description: "Mobile notary public and loan signing agent serving Cincinnati, Dayton, and surrounding Ohio counties." 
        }} 
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

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;