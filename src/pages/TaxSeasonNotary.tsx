import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import TrustSignals from '@/components/TrustSignals';
import { BookingWidget } from '@/components/BookingWidget';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_CONFIG } from '@/config/business';
import { TRENDING_DOCUMENTS } from '@/data/documents';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Clock, CheckCircle2, TrendingUp, ArrowRight, DollarSign, Building2 } from 'lucide-react';

const TaxSeasonNotary = () => {
  const taxSeasonDocs = TRENDING_DOCUMENTS.filter(d => d.trend === "Tax Season");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tax Season Notary Services",
    "description": "Professional notary for tax season documents including trust certifications, beneficiary changes, and financial statements.",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.name,
      "telephone": BUSINESS_CONFIG.phone
    },
    "areaServed": BUSINESS_CONFIG.serviceArea.primary
  };

  return (
    <>
      <Seo
        title="Tax Season Notary Services | Financial Documents | Ohio"
        description="Professional notary for tax season documents: trust certifications, IRA beneficiary changes, financial statements. Mobile service in Cincinnati-Dayton."
        keywords="tax season notary, financial document notarization, trust certification, IRA notary ohio, beneficiary change notary"
        canonical="https://www.signedontime.com/tax-season-notary"
        jsonLd={jsonLd}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-brand-gold text-brand-navy">Tax Season Special</Badge>
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Tax Season Notary Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Get your financial documents notarized fast. Trust certifications, beneficiary changes, 
                and financial statements during busy tax season. January through April appointments available.
              </p>
              <StandardCTAButtons variant="top" className="justify-center" />
            </div>
          </div>
        </section>

        {/* Trending Tax Season Documents */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Popular Tax Season Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These documents see increased demand during tax preparation season (January-April).
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {taxSeasonDocs.map((doc) => (
                <Card key={doc.document} className="hover:shadow-md transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">{doc.trend}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{doc.document}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.reason}</p>
                    <BookingWidget defaultService="general-notary" size="sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Book Now
                      </span>
                    </BookingWidget>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Tax Season Documents */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  More Tax Season Documents We Notarize
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Financial Statement",
                    "Promissory Note",
                    "Investment Authorization Form",
                    "Tax Form (W-9, W-2, etc.)",
                    "Pension Benefits Form",
                    "Annuity Application",
                    "Retirement Benefits Form",
                    "Stock Transfer Agreement",
                    "Personal Guarantee"
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Season Tips */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Tax Season Notarization Tips
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Update Beneficiaries</h3>
                      <p className="text-sm text-muted-foreground">
                        Tax season is the perfect time to review and update IRA, 401k, and insurance beneficiaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trust Certifications for Banks</h3>
                      <p className="text-sm text-muted-foreground">
                        Banks often require fresh trust certifications when opening new accounts or making changes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Book Early</h3>
                      <p className="text-sm text-muted-foreground">
                        Tax season is our busiest time. Book appointments early to ensure availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Tax Documents Notarized?
                  </h3>
                  <p className="mb-6 opacity-90">
                    We offer same-day appointments throughout tax season. 
                    Mobile service to your home or office.
                  </p>
                  <StandardCTAButtons variant="bottom" className="justify-center" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Related Services & Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/insurance-retirement" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Insurance & Retirement
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Beneficiary changes, retirement forms, and insurance documents.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/estate-plans" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Estate Planning
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Trusts, wills, and POAs for complete estate organization.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/trust-certification-for-banks" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Trust Certification Guide
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about trust certifications for banking purposes.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <TrustSignals />
      </main>
      
      <Footer />
    </>
  );
};

export default TaxSeasonNotary;
