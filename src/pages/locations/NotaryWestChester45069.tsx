import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Home } from 'lucide-react';

const NotaryWestChester45069 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Notary Services in West Chester, OH 45069
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional mobile notary serving West Chester Township, Butler County with premium residential and business services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">West Chester Services:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Luxury home loan signings</li>
                  <li>• Corporate headquarters services</li>
                  <li>• Estate planning documents</li>
                  <li>• Executive employment contracts</li>
                  <li>• Private school enrollment forms</li>
                  <li>• Investment property documents</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">45069 Coverage:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Liberty Township</li>
                  <li>• West Chester business parks</li>
                  <li>• Luxury residential communities</li>
                  <li>• Corporate office complexes</li>
                  <li>• Retail & shopping districts</li>
                  <li>• Medical & professional offices</li>
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
              Premium Mobile Notary in West Chester Township
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Luxury Home Services</h3>
                    <p className="text-muted-foreground">Specialized service for West Chester's upscale residential communities and luxury home transactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Corporate Services</h3>
                    <p className="text-muted-foreground">Professional document services for West Chester's major corporate headquarters and business parks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Executive Scheduling</h3>
                    <p className="text-muted-foreground">Flexible appointments including evenings and weekends for busy executives and professionals.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-foreground mb-3">West Chester 45069 Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Union Centre Boulevard corridor</li>
                    <li>• Liberty Township</li>
                    <li>• Lakota school district areas</li>
                    <li>• West Chester business parks</li>
                    <li>• Premium residential subdivisions</li>
                    <li>• Shopping & retail districts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Trusted by West Chester's Business Leaders
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  West Chester's executives and business leaders choose our premium mobile notary service for its reliability, professionalism, and attention to detail.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Executive-level service standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Priority scheduling available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Discreet, professional service</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h4 className="font-semibold text-foreground mb-4 text-xl">Popular West Chester Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Executive employment agreements</li>
                  <li>• High-value real estate transactions</li>
                  <li>• Corporate merger documents</li>
                  <li>• Estate planning for affluent families</li>
                  <li>• Investment property purchases</li>
                  <li>• Private school enrollment documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Premium Mobile Notary in West Chester?</h3>
          <p className="text-xl mb-8 opacity-90">Trusted by West Chester's business and community leaders.</p>
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

export default NotaryWestChester45069;