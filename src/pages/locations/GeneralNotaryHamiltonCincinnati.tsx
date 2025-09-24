import Header from '@/components/Header';
import Footer from '@/components/Footer';

import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Building } from 'lucide-react';

const GeneralNotaryHamiltonCincinnati = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Location Specific */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary Services in Cincinnati, Hamilton County OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary services serving Cincinnati 45202, 45208 and all of Hamilton County. Same-day service available.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Cincinnati Specialties:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Affidavits and sworn statements</li>
                  <li>• Power of attorney documents</li>
                  <li>• Employment and I-9 forms</li>
                  <li>• Immigration documents</li>
                  <li>• Vehicle title transfers</li>
                  <li>• Consent and permission forms</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Hamilton County Service:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Mobile to homes & offices in Cincinnati</li>
                  <li>• Downtown Cincinnati businesses</li>
                  <li>• Hospitals and senior communities</li>
                  <li>• Universities and schools</li>
                  <li>• Evening and weekend service</li>
                  <li>• Professional ID verification</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Cincinnati Quote
              </Button>
              <Button size="lg" variant="outline-white">
                Call (513) 226-9052
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Focus */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">
              Serving Cincinnati & Hamilton County
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide mobile notary services throughout Cincinnati and all Hamilton County communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Building className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Downtown Cincinnati</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CBD and business district</li>
                  <li>• Law offices and corporations</li>
                  <li>• Banks and financial institutions</li>
                  <li>• Government offices</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Users className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Hamilton County Areas</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Springdale, Forest Park</li>
                  <li>• Blue Ash, Sharonville</li>
                  <li>• Norwood, Deer Park</li>
                  <li>• All Hamilton County cities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <MapPin className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Mobile Service</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Home visits in Cincinnati</li>
                  <li>• Office and workplace visits</li>
                  <li>• Hospital and care facilities</li>
                  <li>• University campuses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* General Notary Specific Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Cincinnati Area Notary Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Document Types</h3>
                    <p className="text-muted-foreground">We notarize acknowledgments, jurats, affidavits, and various legal documents required in Hamilton County.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Identity Verification</h3>
                    <p className="text-muted-foreground">Thorough ID verification process using government-issued photo identification as required by Ohio law.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Turnaround</h3>
                    <p className="text-muted-foreground">Same-day service available throughout Cincinnati and Hamilton County for urgent document needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-light/30 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-navy mb-4">What to Bring to Your Cincinnati Appointment:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid government-issued photo ID</li>
                  <li>• Unsigned documents requiring notarization</li>
                  <li>• Any supporting documentation</li>
                  <li>• Payment (cash, check, or card accepted)</li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-brand-blue">
                  <p className="text-sm text-brand-navy font-medium">
                    <strong>Cincinnati Special:</strong> We offer expedited same-day service throughout the greater Cincinnati area and can accommodate emergency requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for Cincinnati Mobile Notary Service?</h3>
          <p className="text-xl mb-8 opacity-90">Get your free quote and schedule your Hamilton County appointment today.</p>
          <Button size="lg" variant="secondary">
            Get Your Cincinnati Quote
          </Button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default GeneralNotaryHamiltonCincinnati;