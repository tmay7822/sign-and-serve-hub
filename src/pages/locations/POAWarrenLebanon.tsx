import Header from '@/components/Header';
import Footer from '@/components/Footer';

import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Car } from 'lucide-react';

const POAWarrenLebanon = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Location Specific */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power of Attorney Notary in Lebanon, Warren County OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional Power of Attorney notarization serving Lebanon 45036 and all of Warren County. Same-day mobile service available.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">POA Types We Notarize:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• General Power of Attorney</li>
                  <li>• Durable Power of Attorney</li>
                  <li>• Limited Power of Attorney</li>
                  <li>• Medical Power of Attorney</li>
                  <li>• Financial Power of Attorney</li>
                  <li>• Springing Power of Attorney</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Lebanon Area Service:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Mobile to homes & offices in Lebanon</li>
                  <li>• Warren County senior communities</li>
                  <li>• Law offices and medical facilities</li>
                  <li>• Same-day and emergency service</li>
                  <li>• Proper witness coordination</li>
                  <li>• ID verification & capacity confirmation</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get a Free Quote for Lebanon
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
              Serving Lebanon 45036 & Warren County
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide Power of Attorney notarization throughout Lebanon and the greater Warren County area.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <MapPin className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Lebanon Locations</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Downtown Lebanon</li>
                  <li>• Lebanon residential areas</li>
                  <li>• Senior living communities</li>
                  <li>• Medical facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Users className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Warren County Wide</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mason, Springboro</li>
                  <li>• Franklin, South Lebanon</li>
                  <li>• Waynesville, Morrow</li>
                  <li>• All Warren County cities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Car className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Mobile Service</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Home visits in Lebanon</li>
                  <li>• Office appointments</li>
                  <li>• Hospital & care facilities</li>
                  <li>• Emergency after-hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* POA Specific Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Power of Attorney Requirements in Ohio
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ohio POA Laws</h3>
                    <p className="text-muted-foreground">Power of Attorney documents must be notarized under Ohio Revised Code to be legally valid and enforceable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Identity Verification</h3>
                    <p className="text-muted-foreground">We verify the identity of all parties and ensure they understand the document's implications.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Witness Requirements</h3>
                    <p className="text-muted-foreground">Some POA documents require witnesses. We coordinate witnesses when needed for Lebanon appointments.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-light/30 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-navy mb-4">What to Bring to Your Lebanon Appointment:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid government-issued photo ID</li>
                  <li>• Completed but unsigned POA document</li>
                  <li>• Any required witnesses (we can often provide)</li>
                  <li>• Contact info for attorney if applicable</li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-brand-blue">
                  <p className="text-sm text-brand-navy font-medium">
                    <strong>Lebanon Special:</strong> We offer same-day service throughout Lebanon 45036 and can often accommodate emergency POA signings for Warren County residents.
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
          <h3 className="text-3xl font-bold mb-6">Ready to Notarize Your Power of Attorney in Lebanon?</h3>
          <p className="text-xl mb-8 opacity-90">Get your free quote and schedule your Warren County appointment today.</p>
          <Button size="lg" variant="secondary">
            Get Your Lebanon POA Quote
          </Button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default POAWarrenLebanon;