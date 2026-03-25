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
import { Home, FileText, Clock, CheckCircle2, TrendingUp, ArrowRight, Key, Building2 } from 'lucide-react';

const HomeBuyingSeasonNotary = () => {
  const realEstateDocs = TRENDING_DOCUMENTS.filter(d => d.trend === "Home Buying Season");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Buying Season Notary Services",
    "description": "Certified loan signing agent for spring home buying season. Mortgage closings, deed transfers, and real estate documents.",
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
        title="Home Buying Season Notary Services | Real Estate Closings | Ohio"
        description="Spring home buying season notary services for deeds, mortgages, and closing documents. Certified loan signing agent serving Cincinnati-Dayton."
        keywords="home buying notary, real estate closing notary, spring home sale notarization, mortgage notary ohio, loan signing agent"
        canonical="https://www.signedontime.com/home-buying-season-notary"
        jsonLd={jsonLd}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-brand-gold text-brand-navy">Spring Home Buying Season</Badge>
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Home className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Home Buying Season Notary
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Spring is peak real estate season. As a certified loan signing agent, we handle mortgage closings, 
                deed transfers, and all real estate documents. March through June appointments available.
              </p>
              <StandardCTAButtons variant="top" className="justify-center" />
            </div>
          </div>
        </section>

        {/* Trending Documents */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Peak Season Real Estate Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These documents see the highest demand during spring home buying season (March-June).
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {realEstateDocs.map((doc) => (
                <Card key={doc.document} className="hover:shadow-md transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">{doc.trend}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{doc.document}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.reason}</p>
                    <BookingWidget defaultService="loan-signings" size="sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Book Now
                      </span>
                    </BookingWidget>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Real Estate Documents */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  All Real Estate Documents We Handle
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Warranty Deed",
                    "Quitclaim Deed",
                    "Deed of Trust",
                    "Settlement Statement (HUD-1)",
                    "Mortgage Agreement",
                    "Loan Modification Agreement",
                    "Title Transfer",
                    "Release of Lien",
                    "Escrow Agreement",
                    "HOA Agreement",
                    "Lease Agreement",
                    "For Sale by Owner Agreement"
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

        {/* Loan Signing Agent Benefits */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="mb-4">Certified Professional</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Choose a Certified Loan Signing Agent?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trained in Loan Documents</h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized training in mortgage and refinance document packages. We know exactly where signatures go.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Evening and weekend appointments to accommodate busy buyers and sellers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mobile Service</h3>
                      <p className="text-sm text-muted-foreground">
                        We come to your home, the title company, or any convenient location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Closing on a Home?
                  </h3>
                  <p className="mb-6 opacity-90">
                    We work with title companies, lenders, and attorneys to ensure smooth closings. 
                    Same-day service available.
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
              <Link to="/loan-signings" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Loan Signing Services
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete loan signing agent services for all closings.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/real-estate" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Real Estate Services
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Deeds, contracts, and property documents.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/real-estate-guides" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Real Estate Guides
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tips and guides for real estate closings.
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

export default HomeBuyingSeasonNotary;
