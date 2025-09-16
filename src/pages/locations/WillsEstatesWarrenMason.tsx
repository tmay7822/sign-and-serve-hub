import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Heart } from 'lucide-react';

const WillsEstatesWarrenMason = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Location Specific */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wills & Estate Notary in Mason, Warren County OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional estate planning document notarization serving Mason 45040 and all of Warren County. Sensitive, compassionate service.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Estate Documents We Handle:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Last Will & Testament</li>
                  <li>• Living Will & Healthcare Directives</li>
                  <li>• Power of Attorney (Financial & Medical)</li>
                  <li>• Trust documents & certifications</li>
                  <li>• Estate affidavits & executor oaths</li>
                  <li>• Beneficiary designations</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Mason Area Specialties:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Mobile to homes in Mason</li>
                  <li>• Senior living community visits</li>
                  <li>• Attorney office coordination</li>
                  <li>• Witness coordination available</li>
                  <li>• Compassionate, respectful service</li>
                  <li>• Flexible scheduling for families</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Mason Estate Quote
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
              Serving Mason & Warren County Families
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide compassionate estate planning notarization throughout Mason and Warren County.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Heart className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Mason Community</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Residential neighborhoods</li>
                  <li>• Senior living communities</li>
                  <li>• Mason business district</li>
                  <li>• Healthcare facilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Users className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Warren County Wide</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lebanon, Springboro</li>
                  <li>• Franklin, South Lebanon</li>
                  <li>• Waynesville, Morrow</li>
                  <li>• All Warren County locations</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <MapPin className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Flexible Service</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Home visits in Mason</li>
                  <li>• Attorney office appointments</li>
                  <li>• Hospital & care facilities</li>
                  <li>• Comfortable, private settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Wills & Estates Specific Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Ohio Estate Planning Document Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ohio Estate Laws</h3>
                    <p className="text-muted-foreground">Estate planning documents must comply with Ohio Revised Code requirements for proper execution and validity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Witness Requirements</h3>
                    <p className="text-muted-foreground">Many estate documents require witnesses. We coordinate witnesses for Mason appointments when needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Capacity Verification</h3>
                    <p className="text-muted-foreground">We ensure signers understand the documents and are signing voluntarily without coercion.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-light/30 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-navy mb-4">What to Expect at Your Mason Appointment:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid government-issued photo ID</li>
                  <li>• Completed but unsigned documents</li>
                  <li>• Any required witnesses (we can provide)</li>
                  <li>• Comfortable, private setting</li>
                  <li>• Patient, respectful service</li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-brand-blue">
                  <p className="text-sm text-brand-navy font-medium">
                    <strong>Mason Family Service:</strong> We understand estate planning is personal. We provide compassionate, professional service throughout Warren County.
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
          <h3 className="text-3xl font-bold mb-6">Ready to Notarize Your Estate Documents in Mason?</h3>
          <p className="text-xl mb-8 opacity-90">Schedule your compassionate Warren County estate planning appointment today.</p>
          <Button size="lg" variant="secondary">
            Schedule Mason Estate Appointment
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default WillsEstatesWarrenMason;