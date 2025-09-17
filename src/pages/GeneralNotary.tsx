import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import TrustSignals from '@/components/TrustSignals';
import { Button } from '@/components/ui/button';
import { FileText, Clock, Shield, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const GeneralNotary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Service Details Above Fold */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Notary Services in Cincinnati-Dayton, OH
            </h1>
            <p className="text-xl mb-8 text-brand-navy">
              Mobile, on-time, and error-free general notary services across Hamilton, Warren, Montgomery, and Butler Counties.
            </p>
            
            {/* Service Details Above Fold */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">Common Services Include:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Affidavits and sworn statements</li>
                  <li>• Power of attorney documents</li>
                  <li>• Consent forms and permissions</li>
                  <li>• Employment and background forms</li>
                  <li>• Immigration and travel documents</li>
                  <li>• Vehicle title transfers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-brand-blue">What We Provide:</h3>
                <ul className="space-y-2 text-brand-navy">
                  <li>• Same-day and after-hours service</li>
                  <li>• Mobile service to your location</li>
                  <li>• Professional document verification</li>
                  <li>• Government ID verification</li>
                  <li>• Proper witness coordination</li>
                  <li>• Error-free execution</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Call {BUSINESS_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-brand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Serving Greater Cincinnati-Dayton Area
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We routinely serve clients throughout Hamilton, Warren, Montgomery, Butler, Greene, and Clinton Counties.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Hamilton County</h4>
                <p className="text-sm text-muted-foreground">Cincinnati, Springdale, Forest Park, Blue Ash, and surrounding areas</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Warren County</h4>
                <p className="text-sm text-muted-foreground">Mason, Lebanon, Springboro, Franklin, South Lebanon</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Montgomery County</h4>
                <p className="text-sm text-muted-foreground">Dayton, Kettering, Centerville, Vandalia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Moved Below */}
      <TrustSignals />

      {/* Additional Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Professional & Reliable Service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Acknowledgments & Jurats</h3>
                    <p className="text-muted-foreground">Professional document verification and oath administration for legal compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Same-Day Availability</h3>
                    <p className="text-muted-foreground">Emergency and after-hours appointments available across all service areas.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Mobile Service</h3>
                    <p className="text-muted-foreground">We come to homes, offices, hospitals, senior centers, and anywhere you need us.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified & Insured</h3>
                    <p className="text-muted-foreground">Background checked, E&O insured, and NNA certified for your protection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Document List */}
      <section className="py-16 bg-brand-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
              Documents We Notarize
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              From simple affidavits to complex legal documents, we provide professional notarization services for all your document needs.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Personal & Family Documents */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Personal & Family</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Adoption Papers</li>
                  <li>• Authorization for Minor to Travel</li>
                  <li>• Child Custody Agreement</li>
                  <li>• Child Support Agreement</li>
                  <li>• International Travel Consent</li>
                  <li>• Marriage License Application</li>
                  <li>• Name Change Application</li>
                  <li>• Parental Consent for Travel</li>
                  <li>• Parental Permission for Field Trip</li>
                  <li>• Paternity Affidavit</li>
                  <li>• Prenuptial Agreement</li>
                  <li>• Postnuptial Agreement</li>
                  <li>• Separation Agreement</li>
                  <li>• Spousal Consent Form</li>
                </ul>
              </div>

              {/* Real Estate Documents */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Real Estate</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Agreement of Sale</li>
                  <li>• Assignment of Lease</li>
                  <li>• Deed of Trust</li>
                  <li>• Grant Deed</li>
                  <li>• Homeowner Association (HOA) Agreement</li>
                  <li>• Land Contract</li>
                  <li>• Lease Agreement</li>
                  <li>• Mechanic's Lien</li>
                  <li>• Mortgage Agreement</li>
                  <li>• Notice of Default</li>
                  <li>• Notice to Quit</li>
                  <li>• Partition Deed</li>
                  <li>• Property Deed</li>
                  <li>• Quitclaim Deed</li>
                  <li>• Real Estate Contract</li>
                  <li>• Real Estate Option Agreement</li>
                  <li>• Release of Lien</li>
                  <li>• Rental Agreement</li>
                  <li>• Rental Application</li>
                  <li>• Settlement Statement (HUD-1)</li>
                  <li>• Title Transfer</li>
                  <li>• Warranty Deed</li>
                </ul>
              </div>

              {/* Business & Legal Documents */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Business & Legal</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Affidavit</li>
                  <li>• Certificate of Incorporation</li>
                  <li>• Contract</li>
                  <li>• Corporate Resolution</li>
                  <li>• Employee Non-Compete Agreement</li>
                  <li>• Exclusive License Agreement</li>
                  <li>• Hold Harmless Agreement</li>
                  <li>• Incorporation Documents</li>
                  <li>• Jurat</li>
                  <li>• Letter of Consent</li>
                  <li>• Mutual Non-Disclosure Agreement (NDA)</li>
                  <li>• Mutual Release Agreement</li>
                  <li>• Operating Agreement</li>
                  <li>• Settlement Agreement</li>
                  <li>• Signature Affidavit</li>
                  <li>• Stock Transfer Agreement</li>
                  <li>• Subordination Agreement</li>
                  <li>• Temporary Restraining Order (TRO)</li>
                  <li>• Uniform Commercial Code (UCC) Financing Statement</li>
                  <li>• Vendor Agreement</li>
                  <li>• Work for Hire Agreement</li>
                  <li>• Zoning Compliance Certificate</li>
                </ul>
              </div>

              {/* Healthcare & Medical Documents */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Healthcare & Medical</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Health Care Proxy</li>
                  <li>• Health Insurance Claim Form</li>
                  <li>• HIPAA Authorization</li>
                  <li>• Living Will</li>
                  <li>• Medical Directive</li>
                  <li>• Medical Records Release Authorization</li>
                </ul>
              </div>

              {/* Financial Documents */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Financial</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Bill of Sale</li>
                  <li>• Escrow Agreement</li>
                  <li>• Financial Statement</li>
                  <li>• Installment Payment Agreement</li>
                  <li>• Insurance Assignment Form</li>
                  <li>• Investment Authorization Form</li>
                  <li>• Loan Agreement</li>
                  <li>• Loan Modification Agreement</li>
                  <li>• Personal Guarantee</li>
                  <li>• Promissory Note</li>
                  <li>• Retirement Benefits Form</li>
                  <li>• Tax Form (W-9, W-2, etc.)</li>
                </ul>
              </div>

              {/* Estate Planning & Power of Attorney */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Estate Planning</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Affidavit of Domicile</li>
                  <li>• Durable Power of Attorney</li>
                  <li>• Estate Plan</li>
                  <li>• Final Release of Waiver</li>
                  <li>• Living Trust</li>
                  <li>• Petition for Guardianship</li>
                  <li>• Power of Attorney (POA)</li>
                  <li>• Proof of Identity Affidavit</li>
                  <li>• Proof of Life Certificate</li>
                  <li>• Revocation of Power of Attorney</li>
                  <li>• Revocation of Trust</li>
                  <li>• Simple Will</li>
                  <li>• Temporary Guardianship Agreement</li>
                  <li>• Trust Amendment</li>
                  <li>• Trust Certification</li>
                  <li>• Trustee Appointment</li>
                  <li>• Waiver of Right to Claim Against Estate</li>
                  <li>• Will Codicil</li>
                </ul>
              </div>

              {/* Vehicle & Transportation */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Vehicle & Transportation</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Vehicle Bill of Sale</li>
                  <li>• Vehicle Title Application</li>
                </ul>
              </div>

              {/* Miscellaneous */}
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-brand-blue">Other Documents</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Environmental Impact Statement</li>
                  <li>• Lien Waiver</li>
                  <li>• Preliminary Notice</li>
                  <li>• Resignation Letter</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your document listed? We notarize most types of documents. Contact us for assistance.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Get your free quote and schedule your appointment today.</p>
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

export default GeneralNotary;