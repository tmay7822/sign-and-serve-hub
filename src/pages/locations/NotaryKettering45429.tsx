import Header from '@/components/Header';
import Footer from '@/components/Footer';

import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Heart } from 'lucide-react';

const NotaryKettering45429 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Notary Services in Kettering, OH 45429
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving Kettering, Montgomery County with specialized healthcare and senior services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Kettering Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Healthcare document notarization</li>
                  <li>• Senior living facility services</li>
                  <li>• Hospital bedside signings</li>
                  <li>• Estate planning documents</li>
                  <li>• Medical power of attorney</li>
                  <li>• Healthcare directives</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45429 Coverage:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Downtown Kettering</li>
                  <li>• Kettering Medical Center area</li>
                  <li>• Senior living communities</li>
                  <li>• Residential neighborhoods</li>
                  <li>• Medical office complexes</li>
                  <li>• Assisted living facilities</li>
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
              Healthcare-Focused Mobile Notary in Kettering
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Healthcare Services</h3>
                    <p className="text-muted-foreground">Specialized notary services for Kettering Medical Center and healthcare facilities throughout the area.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Senior Community</h3>
                    <p className="text-muted-foreground">Compassionate service for Kettering's senior residents and assisted living communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Emergency Availability</h3>
                    <p className="text-muted-foreground">Same-day and emergency appointments for urgent healthcare document needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Kettering 45429 Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Downtown Kettering</li>
                    <li>• Kettering Medical Center vicinity</li>
                    <li>• Rosewood area</li>
                    <li>• Shroyer Park neighborhood</li>
                    <li>• Senior living facilities</li>
                    <li>• Medical office buildings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Trusted by Kettering's Healthcare Community
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Kettering's healthcare professionals and patients rely on our mobile notary service for critical medical documents, estate planning, and healthcare directives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">HIPAA-compliant service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Hospital and bedside visits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">All Kettering medical facilities</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h4 className="font-semibold text-foreground mb-4 text-xl">Healthcare Document Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Healthcare power of attorney</li>
                  <li>• Living wills and advance directives</li>
                  <li>• HIPAA authorization forms</li>
                  <li>• Medical consent documents</li>
                  <li>• Long-term care agreements</li>
                  <li>• DNR and medical directives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Kettering?</h3>
          <p className="text-xl mb-8 opacity-90">Trusted by Kettering's healthcare community and families.</p>
          <Button size="lg" variant="secondary">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default NotaryKettering45429;