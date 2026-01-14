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
import { CalendarCheck, FileText, Clock, CheckCircle2, TrendingUp, ArrowRight, Heart, Users } from 'lucide-react';

const YearEndPlanningNotary = () => {
  const yearEndDocs = TRENDING_DOCUMENTS.filter(d => d.trend === "Year-End Planning");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Year-End Estate Planning Notary Services",
    "description": "Year-end notary services for wills, powers of attorney, and healthcare directives. Perfect for holiday family planning.",
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
        title="Year-End Estate Planning Notary | Wills & POA | Ohio"
        description="Year-end estate planning notary services for wills, powers of attorney, and healthcare directives. Mobile service for family discussions."
        keywords="year end estate planning, holiday POA notary, will notarization december, estate planning notary ohio"
        canonical="https://sign-and-serve-hub.lovable.app/year-end-planning-notary"
        jsonLd={jsonLd}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-brand-gold text-brand-navy">Year-End Planning Season</Badge>
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <CalendarCheck className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Year-End Estate Planning Notary
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                The holidays bring families together—a perfect time to discuss and finalize estate plans. 
                Wills, POAs, and healthcare directives. October through December appointments available.
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
                Popular Year-End Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These estate planning documents see increased demand during the holiday season (October-December).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {yearEndDocs.map((doc) => (
                <Card key={doc.document} className="hover:shadow-md transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">{doc.trend}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{doc.document}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.reason}</p>
                    <BookingWidget defaultService="estate-plans" size="sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Book Now
                      </span>
                    </BookingWidget>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Estate Planning Documents */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Complete Estate Planning Documents
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Will Codicil",
                    "Living Trust",
                    "Trust Amendment",
                    "Trust Certification",
                    "Durable Power of Attorney",
                    "HIPAA Authorization",
                    "Advance Healthcare Directive",
                    "Transfer on Death Deed",
                    "Temporary Guardianship Agreement"
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

        {/* Why Year-End */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="mb-4">Holiday Planning</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Year-End is Perfect for Estate Planning
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Family Together</h3>
                      <p className="text-sm text-muted-foreground">
                        Holiday gatherings bring family members together to discuss important decisions and sign documents.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Healthcare Conversations</h3>
                      <p className="text-sm text-muted-foreground">
                        The holidays naturally prompt discussions about healthcare wishes and end-of-life planning.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <CalendarCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">New Year Resolution</h3>
                      <p className="text-sm text-muted-foreground">
                        Start the new year with peace of mind knowing your affairs are in order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Family Document Day
                  </h3>
                  <p className="mb-6 opacity-90">
                    We can meet with your whole family at once to notarize multiple people's documents. 
                    Perfect for holiday gatherings.
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
              <Link to="/estate-plans" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Estate Planning Services
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete estate planning notarization services.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/wills-trusts-estates" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Wills, Trusts & Estates
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed info on wills, trusts, and estate documents.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/estate-planning-guides" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Estate Planning Guides
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tips and guides for estate planning documents.
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

export default YearEndPlanningNotary;
