import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import BookingCTASection from '@/components/BookingCTASection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer same-day notary service in Mason and Lebanon Ohio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — being based in Waynesville we can typically reach Mason or Lebanon within 20-30 minutes. Same-day service is almost always available in Warren County."
      }
    },
    {
      "@type": "Question",
      "name": "How far in Warren County do you travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all of Warren County including Morrow, Maineville, Waynesville, Franklin, Harveysburg, Corwin, Kings Mills and every community in between — including rural areas other notaries do not serve."
      }
    },
    {
      "@type": "Question",
      "name": "Are you familiar with the Waynesville and Morrow areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — Terry May has lived in Waynesville for nearly 30 years. This is home territory with the fastest response times in our entire service area."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize estate documents at Warren County senior communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we regularly visit senior living facilities and assisted living communities throughout Warren County for POA, healthcare directives, and estate documents."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.signedontime.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.signedontime.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Warren County Guide", "item": "https://www.signedontime.com/blog/notary-guide-warren-county-ohio" }
  ]
};

const NotaryGuideWarrenCounty = () => {
  return (
    <>
      <Seo
        title="Mobile Notary Warren County Ohio | Signed On Time"
        description="Mobile notary services throughout Warren County Ohio. Serving Mason, Lebanon, Springboro and surrounding communities. Based in Waynesville — fastest response times in Warren County. Call (513) 226-9052."
        canonical="https://www.signedontime.com/blog/notary-guide-warren-county-ohio"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li className="text-muted-foreground">/</li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li className="text-muted-foreground">/</li>
                <li className="text-foreground font-medium">Warren County Guide</li>
              </ol>
            </nav>

            <Badge variant="secondary" className="mb-4">County Guide</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Mobile Notary Services in Warren County, Ohio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
              Based in Waynesville with nearly 30 years of local knowledge — the fastest and most reliable mobile notary service in Warren County.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><time dateTime="2026-04-08">April 8, 2026</time></div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>7 min read</span></div>
              <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>Terry May</span></div>
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /><span>Warren County, Ohio</span></div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-center sm:text-left text-muted-foreground">
                <strong className="text-foreground">Need a notary in Warren County?</strong> Based right here in Waynesville — 20-30 minutes to Mason or Lebanon.
              </p>
              <StandardCTAButtons />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">

              <p>Signed On Time is centrally located in Waynesville, Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. This means faster response times across all six counties than any notary based in either city alone. Warren County sits at the heart of our service area — the rural and suburban communities between Waynesville and Mason represent the geographic center of Southwest Ohio notary demand. Having served Warren County for nearly 30 years Terry brings genuine local knowledge to every appointment — knowing not just the roads but the communities, the growth patterns, and the families who have called this area home for generations. We serve Mason, Lebanon, Springboro, Waynesville, Morrow, Maineville, Franklin, Corwin, Harveysburg, and every rural community in between — including areas that larger notary services based in Cincinnati or Dayton do not reach.</p>

              <h2>Loan Signing Services in Warren County</h2>
              <p>Mason and Springboro rank among the fastest-growing residential communities in all of Ohio, and that growth translates directly into real estate transaction volume. From new construction closings in Deerfield Township and Kings Mills to refinances in established Lebanon neighborhoods, we handle purchase closings, refinances, and HELOCs at homes, title offices, and attorney offices across Warren County. The combination of corporate relocations and new family formation in the Mason corridor keeps our loan signing calendar active year-round. <Link to="/loan-signings">Learn more about our loan signing services →</Link></p>

              <h2>Estate Planning Notarization in Warren County</h2>
              <p>Warren County Probate Court in Lebanon handles estate filings for a rapidly growing population, and many of those filings require notarized documents. We notarize wills, revocable trusts, powers of attorney, and advance directives at your home or your attorney's office anywhere in the county. As Warren County's population continues to age alongside its growth, more families are entering the estate planning phase — we work evenings and weekends to accommodate family schedules when everyone needs to be present for signing. <Link to="/estate-plans">Learn more about estate planning notarization →</Link></p>

              <h2>Healthcare Document Notarization in Warren County</h2>
              <p>Atrium Medical Center in Middletown serves northern Warren County, while numerous urgent care clinics and senior living communities line the Mason-Lebanon corridor. We provide bedside notarization for healthcare powers of attorney, living wills, and HIPAA authorization forms throughout the county. Senior communities in Mason, Lebanon, and Springboro frequently request our services for residents who need to update healthcare directives — and being based in Waynesville means we can respond faster than any competing service. <Link to="/healthcare-notary">Learn more about healthcare document notarization →</Link></p>

              <h2>Vehicle Title Notarization in Warren County</h2>
              <p>Private vehicle sales between individuals in Mason, Lebanon, and the surrounding communities all require notarized title transfers under Ohio law. We bring mobile notary service to your location for title transfers, bills of sale, and lien releases — saving you a trip to the BMV and the wait that comes with it. <Link to="/vehicles-dmv">Learn more about vehicle title notarization →</Link></p>

              <h2>Apostille Services in Warren County</h2>
              <p>Warren County residents who need documents authenticated for international use no longer need to make the trip to Columbus or Cincinnati. We prepare and notarize apostille paperwork locally, handling the document preparation at your location so you can focus on the international matter at hand rather than logistics. <Link to="/apostille">Learn more about apostille services →</Link></p>

              <h2>Business Notary Services in Warren County</h2>
              <p>The Mason business corridor and Lebanon's expanding commercial district generate steady demand for contract notarization, corporate resolutions, and vendor compliance packets. Whether you operate out of a Mason office park or a home office in Morrow, we come to your location on your schedule — no need to leave the workday to find a notary. <Link to="/general-notary">Learn more about general notary services →</Link></p>

              <h2>Frequently Asked Questions</h2>
            </article>

            <div className="max-w-4xl mx-auto mt-4 space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.name}</h3>
                    <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Links */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Other Counties We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/blog/notary-guide-hamilton-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Hamilton County</Link>
              <Link to="/blog/notary-guide-montgomery-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Montgomery County</Link>
              <Link to="/blog/notary-guide-butler-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Butler County</Link>
              <Link to="/blog/notary-guide-greene-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Greene County</Link>
              <Link to="/blog/notary-guide-clinton-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Clinton County</Link>
            </div>
            <p className="mt-4 text-muted-foreground">Looking for guides and checklists? Visit our <Link to="/resources" className="text-primary font-semibold hover:underline">Free Notary Guides & Resources</Link> page.</p>
          </div>
        </section>

        <BookingCTASection countyName="Warren County" />

        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your Waynesville-Based Notary for All of Warren County
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              From Mason and Springboro to Morrow, Harveysburg, and every rural road in between — Terry May brings nearly 30 years of Warren County knowledge to your door. Call <a href="tel:5132269052" className="text-primary font-semibold">(513) 226-9052</a>.
            </p>
            <StandardCTAButtons />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotaryGuideWarrenCounty;
