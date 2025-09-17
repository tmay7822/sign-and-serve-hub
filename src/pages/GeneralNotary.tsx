import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const GeneralNotary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 text-brand-navy">
              Mobile, on-time, and error-free general notary services across Hamilton, Warren, Montgomery, and Butler Counties.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Common Services Include:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Affidavits and sworn statements</li>
                  <li>• Power of attorney documents</li>
                  <li>• Consent forms and permissions</li>
                  <li>• Employment and background forms</li>
                  <li>• Immigration and travel documents</li>
                  <li>• Vehicle title transfers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">What We Provide:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Same-day and after-hours service</li>
                  <li>• Mobile service to your location</li>
                  <li>• Professional document verification</li>
                  <li>• Government ID verification</li>
                  <li>• Proper witness coordination</li>
                  <li>• Error-free execution</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline">
                Call {BUSINESS_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Serving Greater Cincinnati-Dayton Area
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We routinely serve clients throughout Hamilton, Warren, Montgomery, Butler, Greene, and Clinton Counties.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Hamilton County</h4>
                <p className="text-sm text-muted-foreground">Cincinnati, Springdale, Forest Park, Blue Ash, and surrounding areas</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Warren County</h4>
                <p className="text-sm text-muted-foreground">Mason, Lebanon, Springboro, Franklin, South Lebanon</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Montgomery County</h4>
                <p className="text-sm text-muted-foreground">Dayton, Kettering, Centerville, Vandalia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Additional Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Professional & Reliable Service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Acknowledgments & Jurats</h3>
                    <p className="text-muted-foreground">Professional document verification and oath administration for legal compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Same-Day Availability</h3>
                    <p className="text-muted-foreground">Emergency and after-hours appointments available across all service areas.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mobile Service</h3>
                    <p className="text-muted-foreground">We come to homes, offices, hospitals, senior centers, and anywhere you need us.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified & Insured</h3>
                    <p className="text-muted-foreground">Background checked, E&O insured, and NNA certified for your protection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Get your free quote and schedule your appointment today.</p>
          <Button variant="cta" size="lg" className="text-xl px-10 py-8 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default GeneralNotary;