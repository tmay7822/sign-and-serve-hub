import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Home } from 'lucide-react';

const NotaryMason45040 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary in Mason, OH 45040
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving Mason, Warren County with same-day appointments and evening availability.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Mason Area Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Loan signing services</li>
                  <li>• Estate planning documents</li>
                  <li>• Real estate transactions</li>
                  <li>• Power of attorney notarization</li>
                  <li>• I-9 employment verification</li>
                  <li>• General notary services</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45040 Coverage Areas:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Historic downtown Mason</li>
                  <li>• Mason residential neighborhoods</li>
                  <li>• Kings Island area</li>
                  <li>• Business parks & offices</li>
                  <li>• Senior living communities</li>
                  <li>• New home developments</li>
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
              Professional Mobile Notary in Mason, Warren County
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Residential Services</h3>
                    <p className="text-muted-foreground">Home visits throughout Mason for estate planning, loan signings, and family document notarization.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Senior Communities</h3>
                    <p className="text-muted-foreground">Specialized service for senior living facilities and elderly residents in Mason area.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Evening Appointments</h3>
                    <p className="text-muted-foreground">Flexible scheduling including evenings and weekends for working families.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">Mason 45040 Neighborhoods:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Historic Mason downtown</li>
                    <li>• Landen area</li>
                    <li>• Deerfield Township</li>
                    <li>• Kings Island vicinity</li>
                    <li>• Mason business district</li>
                    <li>• Residential subdivisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Mason Residents Choose Our Service
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Mason families trust us for important document signings because we understand the community's needs and provide reliable, professional service at your convenience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Background checked and insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Mobile to your Mason location</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h4 className="font-semibold text-foreground mb-4 text-xl">Popular Services in Mason</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Home loan refinancing signings</li>
                  <li>• Estate planning documents</li>
                  <li>• Real estate purchase agreements</li>
                  <li>• Power of attorney for elderly parents</li>
                  <li>• I-9 for remote employees</li>
                  <li>• School enrollment affidavits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Mobile Notary Service in Mason?</h3>
          <p className="text-xl mb-8 opacity-90">Trusted by Mason families and businesses since 2020.</p>
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

export default NotaryMason45040;