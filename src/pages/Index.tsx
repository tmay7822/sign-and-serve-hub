import Header from '@/components/Header';
import HeroSection, { aeoQuestions } from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

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
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;