import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import ReviewSchema from '@/components/SEO/ReviewSchema';

import { BUSINESS_CONFIG } from '@/config/business';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
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

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', BUSINESS_CONFIG.seo.keywords);
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = BUSINESS_CONFIG.seo.keywords;
      document.head.appendChild(keywordsMeta);
    }

    // Add viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewportMeta);
    }

    // Add robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    // Add structured data for local business
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
      "openingHours": [
        "Mo-Fr 08:00-20:00",
        "Sa-Su 09:00-18:00"
      ],
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
      <ServicesSection />
      <TestimonialsSection />
      
      {/* Related Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-lg text-muted-foreground mb-12">
              From simple notarizations to complex loan signings, we handle all your document needs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/loan-signings" className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-left group-hover:text-primary transition-colors">
                      Loan Signings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-left">
                      Professional mortgage and refinance document signing services at your location
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/estate-plans" className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-left group-hover:text-primary transition-colors">
                      Estate Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-left">
                      Wills, trusts, and power of attorney documents notarized with care and precision
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/healthcare-notary" className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-left group-hover:text-primary transition-colors">
                      Healthcare Notary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-left">
                      Hospital and healthcare facility notarizations for medical documents
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <FAQSection />
      <TrustSignals />
      <Footer />
    </div>
  );
};

export default Index;
