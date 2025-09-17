import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Building } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

interface ServiceLocationTemplateProps {
  serviceName: string;
  county: string;
  city: string;
  primaryZip: string;
  state: string;
  title: string;
  metaDescription: string;
  serviceDetails?: {
    serviceList: string[];
    coverageAreas: string[];
    localFocus: string;
    industrySpecific?: string[];
  };
}

const ServiceLocationTemplate = ({
  serviceName,
  county,
  city,
  primaryZip,
  state,
  title,
  metaDescription,
  serviceDetails
}: ServiceLocationTemplateProps) => {
  useEffect(() => {
    // Update page title and meta description
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }

    // Add structured data for Local Business
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
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": primaryZip,
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "addressLocality": city,
          "addressRegion": state
        }
      },
      "openingHours": [
        "Mo-Fr 08:00-20:00",
        "Sa-Su 09:00-18:00"
      ]
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceName} in ${city}, ${state}`,
      "description": metaDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": BUSINESS_CONFIG.name,
        "telephone": BUSINESS_CONFIG.phone
      },
      "areaServed": {
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": state
        }
      }
    };

    // Add schema scripts
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [title, metaDescription, serviceName, city, state, primaryZip]);

  return (
    <div className="min-h-screen bg-background">

      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {serviceName} in {city}, {state} {primaryZip}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile {serviceName.toLowerCase()} serving {city}, {county} County with same-day service and certified notarization.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">{city} Area Services:</h3>
                <ul className="space-y-2 text-white/90">
                  {serviceDetails?.serviceList?.map((service, index) => (
                    <li key={index}>• {service}</li>
                  )) || [
                    '• General notary acknowledgments',
                    '• Document verification services',
                    '• Power of attorney notarization',
                    '• Real estate document signings',
                    '• I-9 employment verification',
                    '• Mobile service to your location'
                  ].map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">{primaryZip} Coverage Areas:</h3>
                <ul className="space-y-2 text-white/90">
                  {serviceDetails?.coverageAreas?.map((area, index) => (
                    <li key={index}>• {area}</li>
                  )) || [
                    `• ${city} residential areas`,
                    `• ${city} business district`,
                    '• Local shopping centers',
                    '• Senior living communities',
                    '• Healthcare facilities',
                    '• Government offices'
                  ].map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline-white">
                Call {BUSINESS_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Local Service Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Professional Mobile Notary in {city}, {county} County
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Local Business Services</h3>
                    <p className="text-muted-foreground">Serving {city} businesses, offices, and professional facilities with reliable notarization services.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Residential Services</h3>
                    <p className="text-muted-foreground">Mobile notary for {city} residents, homes, and family document needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Same-Day Service</h3>
                    <p className="text-muted-foreground">Emergency and after-hours appointments available throughout {city} and {county} County.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Areas We Serve in {primaryZip}:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {serviceDetails?.coverageAreas?.map((area, index) => (
                      <li key={index}>• {area}</li>
                    )) || [
                      `• ${city} downtown`,
                      `• ${city} residential neighborhoods`,
                      '• Business parks & offices',
                      '• Shopping centers',
                      '• Healthcare facilities',
                      '• Community centers'
                    ].map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry/Local Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Serving {city}'s Community Needs
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Certified & Insured</h4>
                <p className="text-muted-foreground">Professional notary services with full E&O insurance and background verification.</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Mobile Service</h4>
                <p className="text-muted-foreground">We come to your {city} location for convenient, professional document services.</p>
              </div>
              
              <div className="text-center">
                <FileText className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">All Document Types</h4>
                <p className="text-muted-foreground">From real estate to estate planning, we handle all notarization needs in {city}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need {serviceName} Service in {city}?</h3>
          <p className="text-xl mb-8 opacity-90">Professional, reliable service throughout the {primaryZip} area.</p>
          <Button size="lg" variant="secondary">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default ServiceLocationTemplate;