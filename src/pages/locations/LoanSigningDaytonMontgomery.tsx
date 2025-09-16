import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin, Users, Home } from 'lucide-react';

const LoanSigningDaytonMontgomery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Location Specific */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Loan Signing Services in Dayton, Montgomery County OH
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Certified loan signing agent serving Dayton 45402, 45414 and all of Montgomery County. Same-day closings available.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Loan Types We Handle:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Purchase loans & refinancing</li>
                  <li>• HELOC & home equity loans</li>
                  <li>• FHA, VA, conventional loans</li>
                  <li>• Commercial real estate loans</li>
                  <li>• Reverse mortgages</li>
                  <li>• Investment property loans</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">Dayton Area Specialties:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Mobile closings in Dayton metro</li>
                  <li>• Evening & weekend appointments</li>
                  <li>• Same-day document return</li>
                  <li>• Experienced with local lenders</li>
                  <li>• Bilingual services available</li>
                  <li>• Senior-friendly service</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Dayton Loan Quote
              </Button>
              <Button size="lg" variant="outline-white">
                Call (513) 555-SIGN
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
              Serving Dayton & Montgomery County Real Estate
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Professional loan signing services throughout Dayton and Montgomery County communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Home className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Greater Dayton</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Downtown Dayton (45402)</li>
                  <li>• East Dayton (45414)</li>
                  <li>• Oakwood, Centerville</li>
                  <li>• Kettering, Beavercreek</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <MapPin className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Montgomery County</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vandalia, Trotwood</li>
                  <li>• Miamisburg, West Carrollton</li>
                  <li>• Huber Heights, Riverside</li>
                  <li>• All Montgomery County cities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-card">
                <Clock className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-brand-navy mb-2">Flexible Scheduling</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Same-day signings available</li>
                  <li>• Evening & weekend hours</li>
                  <li>• Emergency closings</li>
                  <li>• Title company coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Loan Signing Specific Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Dayton Loan Signing Process
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Document Review</h3>
                    <p className="text-muted-foreground">We walk through each document in your Dayton loan package, ensuring accuracy and completeness.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Identity Verification</h3>
                    <p className="text-muted-foreground">Thorough ID verification process required by Montgomery County lenders and title companies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Turnaround</h3>
                    <p className="text-muted-foreground">Documents scanned and returned to lenders within hours of your Dayton signing appointment.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-light/30 p-6 rounded-lg">
                <h4 className="font-semibold text-brand-navy mb-4">What to Expect at Your Dayton Signing:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Review of all loan documents</li>
                  <li>• Explanation of key terms (no legal advice)</li>
                  <li>• Proper notarization of required documents</li>
                  <li>• Collection of certified funds if needed</li>
                  <li>• Coordination with your Dayton title company</li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded border-l-4 border-brand-blue">
                  <p className="text-sm text-brand-navy font-medium">
                    <strong>Dayton Area Expertise:</strong> We work regularly with Montgomery County title companies, lenders, and real estate professionals for seamless closings.
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
          <h3 className="text-3xl font-bold mb-6">Ready to Close Your Dayton Area Loan?</h3>
          <p className="text-xl mb-8 opacity-90">Schedule your certified loan signing appointment in Montgomery County today.</p>
          <Button size="lg" variant="secondary">
            Schedule Dayton Loan Signing
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default LoanSigningDaytonMontgomery;