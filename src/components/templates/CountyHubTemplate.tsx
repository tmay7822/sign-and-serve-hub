import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import BookingCTASection from '@/components/BookingCTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, MapPin, ArrowRight, Timer, Map, CalendarDays, Award, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NeedBasedNavigation from '@/components/NeedBasedNavigation';

interface ServiceSection {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
}

interface CountyHubTemplateProps {
  county: string;
  title: string;
  subtitle: string;
  introText: string;
  publishDate: string;
  lastUpdated?: string;
  readTime: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  services: ServiceSection[];
  faqs: Array<{ question: string; answer: string }>;
  otherCounties: Array<{ name: string; href: string }>;
  cityLinks?: Array<{ name: string; href: string }>;
  bottomHeading: string;
  bottomText: string;
  breadcrumbSchema: object;
}

const trustStats = [
  { icon: Timer, text: '30-45 Min Response' },
  { icon: Map, text: '6 Counties Served' },
  { icon: CalendarDays, text: '7 Days a Week' },
  { icon: Award, text: '25+ Years Experience' },
];

const CountyHubTemplate = ({
  county,
  title,
  subtitle,
  introText,
  publishDate,
  readTime,
  canonicalUrl,
  metaTitle,
  metaDescription,
  services,
  faqs,
  otherCounties,
  cityLinks,
  bottomHeading,
  bottomText,
  breadcrumbSchema,
}: CountyHubTemplateProps) => {
  return (
    <>
      <Seo title={metaTitle} description={metaDescription} canonical={canonicalUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "author": {
          "@type": "Person",
          "name": "Terry May",
          "@id": "https://www.wikidata.org/wiki/Q139255055",
          "sameAs": "https://www.wikidata.org/wiki/Q139255055",
          "jobTitle": "Certified Notary Public and Loan Signing Agent",
          "worksFor": {
            "@type": "LocalBusiness",
            "name": "Signed On Time",
            "url": "https://www.signedontime.com",
            "@id": "https://www.wikidata.org/wiki/Q139254455"
          }
        }
      }) }} />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/50">/</li>
                <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/50">/</li>
                <li className="text-white font-medium">{county} Guide</li>
              </ol>
            </nav>

            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">County Guide</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-8">
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><time dateTime={publishDate}>{new Date(publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time></div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>{readTime}</span></div>
              <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>Terry May</span></div>
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /><span>{county}, Ohio</span></div>
            </div>

            <StandardCTAButtons />
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-5 bg-muted/50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {trustStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{stat.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {introText}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Need-Based Navigation */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <NeedBasedNavigation
              heading={`What do you need notarized in ${county}?`}
              variant="services"
            />
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => {
          const Icon = service.icon;
          const isAlt = index % 2 === 1;
          return (
            <div key={index}>
              <section className={`py-12 ${isAlt ? 'bg-muted/30' : 'bg-background'}`}>
                <div className="container mx-auto px-4 max-w-4xl">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground pt-2">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 pl-0 md:pl-16">
                        {service.description}
                      </p>
                      <div className="pl-0 md:pl-16">
                        <Button variant="outline" asChild className="group border-primary/30 hover:bg-primary/5">
                          <Link to={service.linkTo}>
                            {service.linkText}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Mid-page CTA after 3rd service */}
              {index === 2 && (
                <section className="py-8 bg-primary/5 border-y border-primary/10">
                  <div className="container mx-auto px-4 max-w-3xl text-center">
                    <p className="text-lg font-semibold text-foreground mb-4">
                      Ready to schedule your {county} notary appointment?
                    </p>
                    <StandardCTAButtons />
                  </div>
                </section>
              )}
            </div>
          );
        })}

        {/* FAQ Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <FAQAccordion
              faqs={faqs}
              title={`${county} Notary — Frequently Asked Questions`}
              serviceName={`Mobile Notary ${county} Ohio`}
            />
          </div>
        </section>

        {/* City Links */}
        {cityLinks && cityLinks.length > 0 && (
          <section className="py-10 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cities We Serve in {county}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cityLinks.map((city, i) => (
                  <Link
                    key={i}
                    to={city.href}
                    className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* County Cross-Links */}
        <section className={`py-10 ${cityLinks && cityLinks.length > 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Other Counties We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {otherCounties.map((c, i) => (
                <Link
                  key={i}
                  to={c.href}
                  className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              Looking for guides and checklists? Visit our{' '}
              <Link to="/resources" className="text-primary font-semibold hover:underline">
                Free Notary Guides & Resources
              </Link>{' '}
              page.
            </p>
          </div>
        </section>

        <BookingCTASection countyName={county} />

        {/* Bottom CTA */}
        <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {bottomHeading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {bottomText} Call{' '}
              <a href="tel:5132269052" className="text-primary font-semibold">(513) 226-9052</a>.
            </p>
            <StandardCTAButtons />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CountyHubTemplate;
