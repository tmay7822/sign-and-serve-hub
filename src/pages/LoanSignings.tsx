import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { Home, Clock, Shield, MapPin, DollarSign, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';

const LoanSignings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Loan Signing Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 text-brand-navy">
              Professional loan document signings for buyers, sellers, refinances, HELOCs, and investor transactions across Ohio.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Loan Package Types:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Purchase (Buyer & Seller)</li>
                  <li>• Refinance (Rate & Term, Cash-Out)</li>
                  <li>• HELOC & Home Equity Loans</li>
                  <li>• Investor & Commercial Loans</li>
                  <li>• Reverse Mortgages</li>
                  <li>• Loan Modifications</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">What We Provide:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Same-day and emergency service</li>
                  <li>• Error-free document execution</li>
                  <li>• Triple-checked processing</li>
                  <li>• Professional signing guidance</li>
                  <li>• Mobile service to your location</li>
                  <li>• Timely document return</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline">
                Call {BUSINESS_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Comprehensive Loan Signing Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Purchase Transactions</h3>
                    <p className="text-muted-foreground">Buyer and seller loan document signings with error-free execution and timely delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Refinance & HELOC</h3>
                    <p className="text-muted-foreground">Streamlined refinancing and home equity line of credit document processing.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileCheck className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Error-Free Processing</h3>
                    <p className="text-muted-foreground">Triple-checked documents to prevent delays and ensure smooth closings.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Same-Day Service</h3>
                    <p className="text-muted-foreground">Emergency signings available to meet critical closing deadlines.</p>
                  </div>
                </div>
                
                <div className="bg-brand-light/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-brand-navy mb-3">Loan Package Types:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Purchase (Buyer & Seller)</li>
                    <li>• Refinance (Rate & Term, Cash-Out)</li>
                    <li>• HELOC & Home Equity Loans</li>
                    <li>• Investor & Commercial Loans</li>
                    <li>• Reverse Mortgages</li>
                    <li>• Loan Modifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              How Our Loan Signing Process Works
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-lg mb-2">Document Review</h4>
                <p className="text-muted-foreground">We receive and review your loan package from the lender or title company.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-lg mb-2">Appointment Scheduling</h4>
                <p className="text-muted-foreground">We coordinate with you to schedule a convenient time and location for signing.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-lg mb-2">Professional Signing</h4>
                <p className="text-muted-foreground">We guide you through the documents and ensure everything is signed correctly.</p>
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
              Serving All Major Lenders & Title Companies
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by mortgage professionals throughout Hamilton, Warren, Montgomery, Butler, Greene, and Clinton Counties.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Cincinnati Metro</h4>
                <p className="text-sm text-muted-foreground">45202, 45208, 45246, 45240, 45242 and all surrounding ZIP codes</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Dayton Metro</h4>
                <p className="text-sm text-muted-foreground">45402, 45414, 45429, 45459, 45377 and greater Dayton area</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Suburbs & Counties</h4>
                <p className="text-sm text-muted-foreground">Mason, Lebanon, West Chester, Kettering, Beavercreek, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need a Loan Signing Today?</h3>
          <p className="text-xl mb-8 text-brand-navy">Contact us for same-day availability and professional service.</p>
          <Button size="lg" variant="default">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default LoanSignings;