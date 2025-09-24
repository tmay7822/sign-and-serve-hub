import Header from '@/components/Header';
import Footer from '@/components/Footer';

import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Home } from 'lucide-react';

const NotarySpringdale45246 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary in Springdale, OH 45246
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving Springdale, Hamilton County with reliable community-focused services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Springdale Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Residential loan signings</li>
                  <li>• Family document notarization</li>
                  <li>• Small business services</li>
                  <li>• Senior community services</li>
                  <li>• School enrollment documents</li>
                  <li>• Healthcare directives</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45246 Area Coverage:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Historic Springdale downtown</li>
                  <li>• Residential neighborhoods</li>
                  <li>• Tri-County Mall area</li>
                  <li>• Local business district</li>
                  <li>• Senior living facilities</li>
                  <li>• Community centers</li>
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
              Community-Focused Mobile Notary in Springdale
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Family Services</h3>
                    <p className="text-muted-foreground">Home visits for Springdale families needing document notarization and estate planning services.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Senior Services</h3>
                    <p className="text-muted-foreground">Compassionate service for Springdale's senior community and assisted living facilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Flexible Hours</h3>
                    <p className="text-muted-foreground">Evening and weekend appointments to accommodate working families and busy schedules.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Springdale 45246 Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Downtown Springdale</li>
                    <li>• Springdale residential areas</li>
                    <li>• Tri-County Shopping area</li>
                    <li>• Local business corridor</li>
                    <li>• Community parks vicinity</li>
                    <li>• Senior housing complexes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Serving Springdale's Community Needs
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Springdale residents appreciate our personal approach to mobile notary services. We take time to understand each family's unique needs and provide caring, professional service.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Trusted by local families</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Same-day service available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Mobile throughout Springdale</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h4 className="font-semibold text-foreground mb-4 text-xl">Common Springdale Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Home refinancing documents</li>
                  <li>• Power of attorney for aging parents</li>
                  <li>• School enrollment affidavits</li>
                  <li>• Healthcare proxy documents</li>
                  <li>• Small business contracts</li>
                  <li>• Family estate planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Springdale?</h3>
          <p className="text-xl mb-8 opacity-90">Your trusted neighbor for professional notary services.</p>
          <Button size="lg" variant="secondary">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default NotarySpringdale45246;