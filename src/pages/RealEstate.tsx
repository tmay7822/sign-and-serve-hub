import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { Building, Clock, Shield, MapPin, FileText, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Estate Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 text-brand-navy">
              Professional notarization for deeds, closings, investor documents, and property transfers across Ohio.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Real Estate Documents:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Warranty & Quitclaim Deeds</li>
                  <li>• Purchase & Sale Agreements</li>
                  <li>• Assignment Contracts</li>
                  <li>• Lease Agreements</li>
                  <li>• Property Disclosure Forms</li>
                  <li>• Title Transfer Documents</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Our Service:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Same-day and emergency service</li>
                  <li>• Meet at properties or offices</li>
                  <li>• Investor-friendly scheduling</li>
                  <li>• Experienced with all documents</li>
                  <li>• Competitive bulk signing rates</li>
                  <li>• Weekend closing support</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
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
              Complete Real Estate Document Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Property Transfers</h3>
                    <p className="text-muted-foreground">Deeds, quitclaim deeds, warranty deeds, and property transfer documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Investor Documents</h3>
                    <p className="text-muted-foreground">Purchase agreements, assignment contracts, and investor closing documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Closing Support</h3>
                    <p className="text-muted-foreground">Last-minute document signings to keep your closing on schedule.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Emergency Service</h3>
                    <p className="text-muted-foreground">Same-day and after-hours availability for urgent real estate needs.</p>
                  </div>
                </div>
                
                <div className="bg-brand-light/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-3">Real Estate Documents:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Warranty & Quitclaim Deeds</li>
                    <li>• Purchase & Sale Agreements</li>
                    <li>• Assignment Contracts</li>
                    <li>• Lease Agreements</li>
                    <li>• Property Disclosure Forms</li>
                    <li>• Title Transfer Documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Focus */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Specialized Service for Real Estate Investors
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  We understand the fast-paced world of real estate investing. Our mobile service 
                  ensures your deals close on time, wherever you are.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Experienced with investor documents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Flexible scheduling around your deals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Meet at properties, coffee shops, or offices</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h4 className="font-semibold text-brand-navy mb-4 text-xl">Why Investors Choose Us</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Quick turnaround times</li>
                  <li>• Familiar with assignment contracts</li>
                  <li>• Available for weekend closings</li>
                  <li>• Competitive rates for bulk signings</li>
                  <li>• Knowledge of Ohio real estate law</li>
                  <li>• Professional, discreet service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Streamlined Real Estate Process
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-lg mb-2">Document Review</h4>
                <p className="text-muted-foreground">We review your real estate documents to ensure proper notarization requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-lg mb-2">Flexible Meeting</h4>
                <p className="text-muted-foreground">We meet you at the property, title office, or any convenient location.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-lg mb-2">Secure Completion</h4>
                <p className="text-muted-foreground">Professional notarization and prompt delivery to keep your transaction moving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Serving Southwest Ohio Real Estate Market
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by realtors, investors, and title companies throughout the Cincinnati-Dayton corridor.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Hamilton County</h4>
                <p className="text-sm text-muted-foreground">Cincinnati metro including all ZIP codes from 45202 to 45246</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Warren & Butler</h4>
                <p className="text-sm text-muted-foreground">Mason, Lebanon, West Chester, Hamilton, and surrounding communities</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Montgomery County</h4>
                <p className="text-sm text-muted-foreground">Greater Dayton including Kettering, Centerville, and Vandalia areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Close Your Real Estate Deal?</h3>
          <p className="text-xl mb-8 opacity-90">Get professional notary service that keeps your transaction on track.</p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default RealEstate;