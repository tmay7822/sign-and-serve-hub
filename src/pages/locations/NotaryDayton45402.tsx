import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Building } from 'lucide-react';

const NotaryDayton45402 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Notary Services in Dayton, OH 45402
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving downtown Dayton, Montgomery County with comprehensive business and residential services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Dayton Area Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Business document notarization</li>
                  <li>• Healthcare facility signings</li>
                  <li>• Real estate transactions</li>
                  <li>• Government contract signings</li>
                  <li>• University document services</li>
                  <li>• Manufacturing I-9 verification</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45402 Coverage Areas:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Downtown Dayton CBD</li>
                  <li>• University of Dayton area</li>
                  <li>• Oregon District</li>
                  <li>• Wright-Patterson AFB vicinity</li>
                  <li>• Dayton hospitals & medical</li>
                  <li>• Government & court buildings</li>
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
              Trusted Mobile Notary in Dayton, Montgomery County
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Business District</h3>
                    <p className="text-muted-foreground">Serving downtown Dayton businesses, government offices, and corporate headquarters.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Healthcare Services</h3>
                    <p className="text-muted-foreground">Hospital and medical facility document signings throughout the Dayton medical corridor.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Government Contracting</h3>
                    <p className="text-muted-foreground">Specialized service for Wright-Patterson AFB contractors and government vendors.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Dayton 45402 Districts:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Downtown business district</li>
                    <li>• Oregon Historic District</li>
                    <li>• University of Dayton campus</li>
                    <li>• Dayton Art Institute area</li>
                    <li>• RiverScape corridor</li>
                    <li>• Government & courthouse area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Serving Dayton's Key Industries
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Aerospace & Defense</h4>
                <p className="text-muted-foreground">Specialized notary services for Wright-Patterson AFB contractors and defense industry.</p>
              </div>
              
              <div className="text-center">
                <Building className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Healthcare Systems</h4>
                <p className="text-muted-foreground">Document services for Dayton hospitals, medical practices, and healthcare workers.</p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">Higher Education</h4>
                <p className="text-muted-foreground">University of Dayton, Wright State, and Sinclair Community College services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Dayton?</h3>
          <p className="text-xl mb-8 opacity-90">Professional service for Dayton's business and healthcare communities.</p>
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

export default NotaryDayton45402;