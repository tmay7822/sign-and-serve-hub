import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Building } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

const NotaryCincinnati45202 = () => {
  useEffect(() => {
    const title = "General Notary in Cincinnati, OH 45202 | Signed On Time";
    const metaDescription = "Mobile General Notary in Cincinnati (45202), Hamilton County, OH. Same-day, certified & insured. Call (513) 226-9052.";
    
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

    // Add local business schema
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
        "addressLocality": "Cincinnati",
        "addressRegion": "OH",
        "postalCode": "45202",
        "addressCountry": "US"
      },
      "description": metaDescription,
      "areaServed": {
        "@type": "City",
        "name": "Cincinnati",
        "containedInPlace": {
          "@type": "State",
          "name": "Ohio"
        }
      }
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
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary in Cincinnati, OH 45202
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving downtown Cincinnati, CBD, and surrounding 45202 ZIP code area with same-day service.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Downtown Cincinnati Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• General notary acknowledgments</li>
                  <li>• Real estate document signings</li>
                  <li>• Corporate document notarization</li>
                  <li>• Power of attorney documents</li>
                  <li>• I-9 employment verification</li>
                  <li>• Loan signing services</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45202 Area Coverage:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Downtown Cincinnati CBD</li>
                  <li>• Over-the-Rhine district</li>
                  <li>• Government Square area</li>
                  <li>• Banks & law firms</li>
                  <li>• Residential high-rises</li>
                  <li>• Business offices & hotels</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline-white">
                Call (513) 226-9052
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
              Trusted Mobile Notary in Downtown Cincinnati 45202
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Downtown Business District</h3>
                    <p className="text-muted-foreground">Serving law firms, banks, corporate offices, and government buildings in Cincinnati's central business district.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Residential Services</h3>
                    <p className="text-muted-foreground">Mobile notary for downtown residents, condos, and apartments throughout the 45202 area.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Same-Day Service</h3>
                    <p className="text-muted-foreground">Emergency and after-hours appointments available throughout downtown Cincinnati.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Areas We Serve in 45202:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Government Square</li>
                    <li>• Fountain Square District</li>
                    <li>• Over-the-Rhine</li>
                    <li>• Central Business District</li>
                    <li>• The Banks riverfront</li>
                    <li>• Downtown residential towers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Businesses */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Serving Cincinnati's Business Community
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Law Firms</h4>
                <p className="text-muted-foreground">Professional notary services for downtown Cincinnati legal practices and court filings.</p>
              </div>
              
              <div className="text-center">
                <Building className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Corporate Offices</h4>
                <p className="text-muted-foreground">I-9 verification and corporate document notarization for businesses in the CBD.</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Real Estate</h4>
                <p className="text-muted-foreground">Closing support and document signing for downtown Cincinnati property transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Downtown Cincinnati?</h3>
          <p className="text-xl mb-8 opacity-90">Professional, reliable service throughout the 45202 area.</p>
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

export default NotaryCincinnati45202;