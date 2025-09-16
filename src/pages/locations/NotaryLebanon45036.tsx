import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Car } from 'lucide-react';

const NotaryLebanon45036 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Notary Services in Lebanon, OH 45036
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving Lebanon, Warren County with comprehensive family and business services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Lebanon Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Family document notarization</li>
                  <li>• Power of attorney services</li>
                  <li>• Vehicle title transfers</li>
                  <li>• Small business documents</li>
                  <li>• Real estate transactions</li>
                  <li>• Estate planning support</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45036 Coverage:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Historic downtown Lebanon</li>
                  <li>• Residential neighborhoods</li>
                  <li>• Warren County business district</li>
                  <li>• Rural and suburban areas</li>
                  <li>• Government offices vicinity</li>
                  <li>• Shopping and retail areas</li>
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
              Community-Centered Mobile Notary in Lebanon
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Car className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Vehicle Services</h3>
                    <p className="text-muted-foreground">Title transfers, bill of sale documents, and DMV-related notarizations for Lebanon residents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Family Services</h3>
                    <p className="text-muted-foreground">Power of attorney, guardianship documents, and family estate planning for Lebanon families.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Rural Service</h3>
                    <p className="text-muted-foreground">Mobile service throughout Lebanon and surrounding Warren County rural areas.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Lebanon 45036 Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Historic downtown Lebanon</li>
                    <li>• Countryside neighborhoods</li>
                    <li>• Warren County government area</li>
                    <li>• Lebanon business district</li>
                    <li>• Rural residential areas</li>
                    <li>• Shopping centers vicinity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* County Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Warren County's Trusted Mobile Notary
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Lebanon residents choose our mobile notary service for its reliability, personal attention, and understanding of Warren County's unique community needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Warren County courthouse familiarity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Same-day service available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Rural and suburban coverage</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h4 className="font-semibold text-foreground mb-4 text-xl">Popular Lebanon Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Power of attorney for elderly parents</li>
                  <li>• Vehicle title and registration docs</li>
                  <li>• Small business contracts</li>
                  <li>• Real estate purchase agreements</li>
                  <li>• School enrollment affidavits</li>
                  <li>• Family guardianship documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Lebanon?</h3>
          <p className="text-xl mb-8 opacity-90">Serving Lebanon and Warren County with pride since 2020.</p>
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

export default NotaryLebanon45036;