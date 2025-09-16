import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { Briefcase, Clock, Shield, MapPin, Users, FileCheck } from 'lucide-react';

const BusinessServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional I-9 verification, vendor agreements, and corporate document notarization across Ohio.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Business Documents:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• I-9 Employment Verification</li>
                  <li>• Corporate Bylaws & Resolutions</li>
                  <li>• Vendor & Supplier Agreements</li>
                  <li>• Non-Disclosure Agreements</li>
                  <li>• Operating Agreements (LLC)</li>
                  <li>• Employment Contracts</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Our Service:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Same-day I-9 appointments</li>
                  <li>• USCIS-compliant verification</li>
                  <li>• Mobile to your office location</li>
                  <li>• Professional document handling</li>
                  <li>• Flexible business hours</li>
                  <li>• Bulk signing discounts</li>
                </ul>
              </div>
            </div>
            
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

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Service Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Comprehensive Business Document Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">I-9 Employment Verification</h3>
                    <p className="text-muted-foreground">Professional I-9 form completion and document verification for remote employees.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Corporate Documents</h3>
                    <p className="text-muted-foreground">Articles of incorporation, bylaws, operating agreements, and board resolutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileCheck className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vendor Agreements</h3>
                    <p className="text-muted-foreground">Contract signings, vendor agreements, and business partnership documents.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flexible Business Hours</h3>
                    <p className="text-muted-foreground">Available during and after business hours to accommodate your schedule.</p>
                  </div>
                </div>
                
                <div className="bg-brand-light/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-3">Business Documents We Handle:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• I-9 Employment Verification</li>
                    <li>• Corporate Bylaws & Resolutions</li>
                    <li>• Vendor & Supplier Agreements</li>
                    <li>• Non-Disclosure Agreements</li>
                    <li>• Operating Agreements (LLC)</li>
                    <li>• Employment Contracts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I-9 Focus */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              I-9 Employment Verification Services
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Federal law requires employers to verify the identity and work authorization of all employees. 
                  Our I-9 verification service ensures compliance while supporting your remote workforce.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">USCIS-compliant verification process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Meet employees at any location</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h4 className="font-semibold text-brand-navy mb-4 text-xl">I-9 Process Benefits</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Reduce HR administrative burden</li>
                  <li>• Ensure federal compliance</li>
                  <li>• Support remote employee onboarding</li>
                  <li>• Professional, reliable service</li>
                  <li>• Secure document handling</li>
                  <li>• Detailed completion certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Corporate Document Solutions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-lg mb-2">Document Review</h4>
                <p className="text-muted-foreground">We review your business documents to ensure proper notarization requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-lg mb-2">Convenient Meeting</h4>
                <p className="text-muted-foreground">We come to your office, business location, or any convenient meeting place.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-lg mb-2">Professional Execution</h4>
                <p className="text-muted-foreground">Proper notarization and secure handling of your sensitive business documents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Industries We Serve
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-brand-navy mb-2">Technology</h4>
                <p className="text-sm text-muted-foreground">Software companies, IT services, remote workforce verification</p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-brand-navy mb-2">Healthcare</h4>
                <p className="text-sm text-muted-foreground">Medical practices, healthcare systems, compliance documentation</p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-brand-navy mb-2">Manufacturing</h4>
                <p className="text-sm text-muted-foreground">Industrial companies, supplier agreements, safety certifications</p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-brand-navy mb-2">Professional Services</h4>
                <p className="text-sm text-muted-foreground">Law firms, accounting, consulting, business partnerships</p>
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
              Serving Business Communities Throughout Southwest Ohio
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by companies, HR departments, and business professionals across the Cincinnati-Dayton corridor.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Downtown Business Districts</h4>
                <p className="text-sm text-muted-foreground">Cincinnati CBD, Dayton business district, and major corporate centers</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Suburban Office Parks</h4>
                <p className="text-sm text-muted-foreground">Blue Ash, Mason, Kettering, Centerville, and West Chester business areas</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Industrial Areas</h4>
                <p className="text-sm text-muted-foreground">Manufacturing districts throughout Hamilton, Warren, and Montgomery Counties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Streamline Your Business Documents?</h3>
          <p className="text-xl mb-8 opacity-90">Get professional notary service that supports your business operations.</p>
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

export default BusinessServices;