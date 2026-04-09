import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BUSINESS_CONFIG } from '@/config/business';
import { BookOpen, FileText, MapPin, ArrowRight, Phone } from 'lucide-react';
import QuickTrustBadges from '@/components/landing/QuickTrustBadges';

const popularGuides = [
  { title: 'Ohio Car Title Transfer Guide', href: '/blog/ohio-car-title-transfer-requirements', description: 'Step-by-step requirements for notarizing vehicle title transfers in Ohio.' },
  { title: 'What Happens at a Loan Signing', href: '/blog/what-happens-loan-signing', description: 'Everything you need to know before your mortgage closing appointment.' },
  { title: 'HCPOA & Living Will Guide', href: '/blog/hcpoa-living-will-guide', description: 'How to get healthcare directives and living wills notarized in Ohio.' },
  { title: 'What to Bring to Your Appointment', href: '/blog/general-notary-what-to-bring', description: 'Complete checklist so your notarization goes smoothly the first time.' },
  { title: 'How the Apostille Process Works', href: '/blog/how-apostille-works', description: 'Guide to apostille authentication for international document use.' },
  { title: 'Hospital & Bedside Notarizations', href: '/blog/hospital-notary-what-to-expect', description: 'What to expect when you need a notary at a hospital or care facility.' },
];

const serviceCategories = [
  { title: 'Loan Signings', href: '/blog/loan-signing-guides', description: 'Mortgage closings, refinances & HELOCs' },
  { title: 'Estate Planning', href: '/blog/estate-planning-guides', description: 'Wills, trusts & power of attorney' },
  { title: 'Healthcare', href: '/blog/healthcare-guides', description: 'HCPOA, living wills & bedside notary' },
  { title: 'Vehicles & DMV', href: '/vehicles-dmv', description: 'Title transfers & bills of sale' },
  { title: 'Apostille', href: '/blog/apostille-guides', description: 'International document authentication' },
  { title: 'Business', href: '/blog/business-guides', description: 'Contracts, affidavits & corporate docs' },
];

const counties = [
  { name: 'Hamilton County', href: '/service/hamilton-county' },
  { name: 'Warren County', href: '/service/warren-county' },
  { name: 'Montgomery County', href: '/service/montgomery-county' },
  { name: 'Butler County', href: '/service/butler-county' },
  { name: 'Greene County', href: '/service/greene-county' },
  { name: 'Clinton County', href: '/service/clinton-county' },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Free Notary Guides & Resources | Signed On Time Mobile Notary Ohio"
        description="Expert mobile notary guides for Southwest Ohio. Learn about loan signings, estate planning, apostille, vehicle titles and more from certified notary Terry May."
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Free Notary Guides & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides from Southwest Ohio's trusted mobile notary service
          </p>
        </div>
      </section>

      {/* Most Popular */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Most Popular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGuides.map((guide) => (
              <Link key={guide.href} to={guide.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Service Type */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Browse by Service Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <Link key={cat.href} to={cat.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <FileText className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by County */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Browse by County</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {counties.map((county) => (
              <Link key={county.name} to={county.href} className="group">
                <Card className="text-center transition-all duration-200 hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-5">
                    <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {county.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <QuickTrustBadges />

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Schedule?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Same-day appointments available 7 days a week across Southwest Ohio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/book-now">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {BUSINESS_CONFIG.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
