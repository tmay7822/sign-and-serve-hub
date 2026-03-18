import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import ReviewSchema from '@/components/SEO/ReviewSchema';

import { BUSINESS_CONFIG } from '@/config/business';

const Index = () => {
  useEffect(() => {
    document.title = BUSINESS_CONFIG.seo.metaTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', BUSINESS_CONFIG.seo.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = BUSINESS_CONFIG.seo.metaDescription;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', BUSINESS_CONFIG.seo.keywords);
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = BUSINESS_CONFIG.seo.keywords;
      document.head.appendChild(keywordsMeta);
    }

    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewportMeta);
    }

    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.name,
      "image": BUSINESS_CONFIG.logo.url,
      "telephone": BUSINESS_CONFIG.phone,
      "email": BUSINESS_CONFIG.email,
      "url": BUSINESS_CONFIG.website,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_CONFIG.address.street,
        "addressLocality": BUSINESS_CONFIG.address.city,
        "addressRegion": BUSINESS_CONFIG.address.state,
        "postalCode": BUSINESS_CONFIG.address.zip,
        "addressCountry": "US"
      },
      "description": BUSINESS_CONFIG.seo.metaDescription,
      "priceRange": "$$",
      "openingHours": ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
      "areaServed": BUSINESS_CONFIG.serviceArea.counties.split(', ').map(county => ({
        "@type": "AdministrativeArea",
        "name": county.trim() + " County, OH"
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema />
      <ReviewSchema />
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
