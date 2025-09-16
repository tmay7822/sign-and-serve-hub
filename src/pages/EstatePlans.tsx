import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileSignature, Clock, Shield, MapPin, Heart, Users } from 'lucide-react';

const EstatePlans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Estate Planning Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional notarization for wills, trusts, power of attorney, and healthcare directives across Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                Call (513) 226-9052
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Service Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Comprehensive Estate Planning Support
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileSignature className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wills & Trusts</h3>
                    <p className="text-muted-foreground">Professional witness and notarization services for all estate planning documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Healthcare Directives</h3>
                    <p className="text-muted-foreground">Living wills, DNR forms, and medical power of attorney documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Power of Attorney</h3>
                    <p className="text-muted-foreground">Financial and general power of attorney documents with proper execution.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Evening and weekend appointments available for your convenience.</p>
                  </div>
                </div>
                
                <div className="bg-brand-light/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-3">Estate Documents We Handle:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Last Will & Testament</li>
                    <li>• Revocable Living Trusts</li>
                    <li>• Durable Power of Attorney</li>
                    <li>• Healthcare Power of Attorney</li>
                    <li>• Living Will / Advance Directive</li>
                    <li>• HIPAA Authorization Forms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Sensitivity Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Sensitive, Professional Service
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Estate planning is deeply personal. We understand the importance of these decisions 
                  and provide compassionate, professional service during significant moments in your life.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Complete confidentiality and privacy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Home, hospital, or office visits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Compassionate, understanding approach</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h4 className="font-semibold text-brand-navy mb-4 text-xl">Why Choose Mobile Service?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Comfort of your own home</li>
                  <li>• Accommodates mobility limitations</li>
                  <li>• Private, confidential environment</li>
                  <li>• Reduces stress during difficult times</li>
                  <li>• Convenient for elderly clients</li>
                  <li>• Family can be present if desired</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Serving Clients Throughout Southwest Ohio
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by families, attorneys, and healthcare facilities across the greater Cincinnati-Dayton region.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Cincinnati Area</h4>
                <p className="text-sm text-muted-foreground">Hamilton County including Cincinnati, Blue Ash, Springdale, Forest Park</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Northern Suburbs</h4>
                <p className="text-sm text-muted-foreground">Warren County: Mason, Lebanon, Springboro, Franklin, West Chester</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Dayton Region</h4>
                <p className="text-sm text-muted-foreground">Montgomery & Greene Counties: Dayton, Kettering, Centerville, Beavercreek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Complete Your Estate Planning?</h3>
          <p className="text-xl mb-8 opacity-90">Schedule a convenient appointment at your location.</p>
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

export default EstatePlans;