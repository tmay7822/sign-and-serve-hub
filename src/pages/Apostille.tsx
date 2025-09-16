import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { Globe, Clock, Shield, MapPin, FileCheck, Plane } from 'lucide-react';

const Apostille = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apostille Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 text-brand-navy">
              Document authentication for international use and recognition across Ohio and beyond.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Common Apostille Documents:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Birth & Death Certificates</li>
                  <li>• Marriage & Divorce Certificates</li>
                  <li>• Educational Diplomas & Transcripts</li>
                  <li>• Corporate Documents</li>
                  <li>• Power of Attorney</li>
                  <li>• FBI Background Checks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Our Process:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Document eligibility verification</li>
                  <li>• Professional notarization</li>
                  <li>• Ohio Secretary of State submission</li>
                  <li>• Expedited processing available</li>
                  <li>• 100+ Hague Convention countries</li>
                  <li>• Complete international compliance</li>
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
              International Document Authentication
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hague Convention Countries</h3>
                    <p className="text-muted-foreground">Apostille authentication for documents used in over 100+ member countries.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileCheck className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Document Preparation</h3>
                    <p className="text-muted-foreground">Proper notarization and certification before Ohio Secretary of State submission.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Plane className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Travel & Immigration</h3>
                    <p className="text-muted-foreground">Essential for visa applications, work permits, and international relocations.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expedited Processing</h3>
                    <p className="text-muted-foreground">Rush service available for urgent travel and business needs.</p>
                  </div>
                </div>
                
                <div className="bg-brand-light/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-3">Common Apostille Documents:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Birth & Death Certificates</li>
                    <li>• Marriage & Divorce Certificates</li>
                    <li>• Educational Diplomas & Transcripts</li>
                    <li>• Corporate Documents</li>
                    <li>• Power of Attorney</li>
                    <li>• FBI Background Checks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              The Apostille Process Explained
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-lg mb-2">Document Review</h4>
                <p className="text-muted-foreground">We verify your document is eligible for apostille and properly prepared.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-lg mb-2">Notarization</h4>
                <p className="text-muted-foreground">Professional notarization meeting Ohio Secretary of State requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-lg mb-2">State Certification</h4>
                <p className="text-muted-foreground">Submission to Ohio Secretary of State for official apostille attachment.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-elegant">
              <h4 className="font-semibold text-brand-navy mb-4 text-xl">What is an Apostille?</h4>
              <p className="text-muted-foreground mb-4">
                An apostille is an official certificate that authenticates the origin of a public document. 
                It's recognized by all countries that are members of the Hague Apostille Convention, 
                eliminating the need for embassy legalization.
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> Not all documents are eligible for apostille. We'll help determine 
                if your document qualifies and guide you through the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Supporting International Needs
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're studying abroad, conducting international business, or relocating, 
                  we ensure your documents meet foreign country requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Familiar with international standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Rush processing for urgent needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium">Mobile service throughout Ohio</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-elegant">
                <h4 className="font-semibold text-brand-navy mb-4 text-xl">Popular Destination Countries</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div>• United Kingdom</div>
                  <div>• Canada</div>
                  <div>• Australia</div>
                  <div>• Germany</div>
                  <div>• France</div>
                  <div>• Spain</div>
                  <div>• Italy</div>
                  <div>• Netherlands</div>
                  <div>• Japan</div>
                  <div>• South Korea</div>
                  <div>• Mexico</div>
                  <div>• And 100+ more</div>
                </div>
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
              Serving International Clients Throughout Ohio
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by international students, businesses, and families across the Cincinnati-Dayton region.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">University Areas</h4>
                <p className="text-sm text-muted-foreground">UC, Xavier, Miami University, and Wright State communities</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Business Districts</h4>
                <p className="text-sm text-muted-foreground">Downtown Cincinnati, Dayton, and corporate office locations</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Residential Areas</h4>
                <p className="text-sm text-muted-foreground">All ZIP codes across Hamilton, Warren, Montgomery, and Butler Counties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Documents Authenticated for International Use?</h3>
          <p className="text-xl mb-8 opacity-90">Get expert apostille service that meets global standards.</p>
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

export default Apostille;