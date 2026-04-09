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
      "name": "Do you serve Beavercreek and the Wright-Patterson area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Beavercreek and the communities surrounding Wright-Patterson AFB are 30-40 minutes from our Waynesville base via US-35. Same-day service is regularly available throughout the Beavercreek and Fairborn areas."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize military documents for families at Wright-Patterson AFB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Deployment Powers of Attorney, VA benefit applications, and military family documents are among our most requested services in Greene County. We offer flexible scheduling to accommodate deployment timelines and military schedules."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Yellow Springs and rural Greene County areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we serve all of Greene County including Yellow Springs, Jamestown, Cedarville, Spring Valley and the rural communities throughout the county. We specifically make a point of serving smaller communities that other notaries do not reach."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you reach Xenia or Fairborn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xenia and Fairborn are approximately 30-40 minutes from Waynesville via US-35. Same-day appointments are standard for most Greene County locations."
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
    { "@type": "ListItem", "position": 3, "name": "Greene County Guide", "item": "https://www.signedontime.com/blog/notary-guide-greene-county-ohio" }
  ]
};

const NotaryGuideGreeneCounty = () => {
  return (
    <>
      <Seo
        title="Mobile Notary Greene County Ohio | Signed On Time"
        description="Mobile notary services throughout Greene County Ohio. Serving Beavercreek, Xenia, Fairborn and Yellow Springs. 30-40 minutes from Waynesville via US-35. Call (513) 226-9052."
        canonical="https://www.signedontime.com/blog/notary-guide-greene-county-ohio"
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
                <li className="text-foreground font-medium">Greene County Guide</li>
              </ol>
            </nav>

            <Badge variant="secondary" className="mb-4">County Guide</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Mobile Notary Services in Greene County, Ohio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
              Serving Beavercreek, Xenia, Fairborn, Yellow Springs, and all Greene County communities — including military families at Wright-Patterson AFB.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><time dateTime="2026-04-08">April 8, 2026</time></div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>7 min read</span></div>
              <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>Terry May</span></div>
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /><span>Greene County, Ohio</span></div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-center sm:text-left text-muted-foreground">
                <strong className="text-foreground">Need a notary in Greene County?</strong> 30-40 minutes from Waynesville via US-35.
              </p>
              <StandardCTAButtons />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">

              <p>Signed On Time is centrally located in Waynesville, Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. This means faster response times across all six counties than any notary based in either city alone. Greene County communities along US-35 and I-675 are some of our most accessible service areas — Beavercreek and Xenia are typically 30-40 minutes from our Waynesville base along a route we travel regularly. We serve Beavercreek, Xenia, Fairborn, Yellow Springs, Bellbrook, Jamestown, Cedarville, Spring Valley, and the rural communities throughout the county that other notaries based in Dayton or Cincinnati rarely reach.</p>

              <h2>Loan Signing Services in Greene County</h2>
              <p>Beavercreek's residential growth has made it one of the most active real estate markets in the greater Dayton area, with steady demand for purchase closings, refinances, and home equity lines of credit. We provide certified loan signing agent services throughout Greene County — from new subdivisions in Beavercreek to established neighborhoods in Xenia and Bellbrook. The proximity of Wright-Patterson AFB drives a unique cycle of military family relocations that keeps loan signing demand consistent throughout the year rather than following typical seasonal patterns. <Link to="/loan-signings">Learn more about our loan signing services →</Link></p>

              <h2>Estate Planning Notarization in Greene County</h2>
              <p>Greene County Probate Court in Xenia serves a population that includes both long-established farming families and newer suburban residents in the Beavercreek corridor. We notarize wills, trusts, powers of attorney, and advance directives at your home or your attorney's office. Military families near Wright-Patterson often need estate documents updated before deployments — we understand the urgency and offer flexible scheduling to ensure documents are completed before service members depart. <Link to="/estate-plans">Learn more about estate planning notarization →</Link></p>

              <h2>Military and Veterans Notary Services in Greene County</h2>
              <p>Wright-Patterson Air Force Base is the largest single-site employer in Ohio, and the military community that surrounds it in Beavercreek, Fairborn, and Huber Heights generates significant demand for specialized notary services. Deployment Powers of Attorney — covering financial, legal, and healthcare decisions — are among our most frequently notarized documents in Greene County. We also assist veterans with VA benefit applications, disability claim documentation, and healthcare directive updates. Our flexible evening and weekend scheduling accommodates the unpredictable timelines that come with military service. <Link to="/general-notary">Learn more about general notary services →</Link></p>

              <h2>Healthcare Document Notarization in Greene County</h2>
              <p>Greene Memorial Hospital in Xenia and the healthcare facilities throughout the Beavercreek-Fairborn corridor serve a community that includes both aging residents and active-duty military families. We provide bedside notarization for healthcare powers of attorney, living wills, and HIPAA authorization forms. Cedarville University and Antioch College in Yellow Springs also generate healthcare document requests from students and faculty who need notarized medical authorizations. <Link to="/healthcare-notary">Learn more about healthcare document notarization →</Link></p>

              <h2>Vehicle Title Notarization in Greene County</h2>
              <p>Private vehicle transactions in Beavercreek, Xenia, and Fairborn require notarized title transfers under Ohio law. Military families at Wright-Patterson frequently buy and sell vehicles during PCS moves — we make the title transfer process simple by coming to your location with everything needed for a complete notarization. <Link to="/vehicles-dmv">Learn more about vehicle title notarization →</Link></p>

              <h2>Apostille Services in Greene County</h2>
              <p>Greene County's international community — bolstered by Wright-Patterson's global mission and Cedarville University's international student body — creates demand for apostille document preparation. We help residents prepare documents for Ohio Secretary of State authentication, whether for overseas military assignments, international adoptions, or foreign business transactions. <Link to="/apostille">Learn more about apostille services →</Link></p>

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
              <Link to="/blog/notary-guide-warren-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Warren County</Link>
              <Link to="/blog/notary-guide-montgomery-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Montgomery County</Link>
              <Link to="/blog/notary-guide-butler-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Butler County</Link>
              <Link to="/blog/notary-guide-clinton-county-ohio" className="p-3 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground text-center">Clinton County</Link>
            </div>
            <p className="mt-4 text-muted-foreground">Looking for guides and checklists? Visit our <Link to="/resources" className="text-primary font-semibold hover:underline">Free Notary Guides & Resources</Link> page.</p>
          </div>
        </section>

        <BookingCTASection countyName="Greene County" />

        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Serving Greene County From Beavercreek to Yellow Springs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you need a deployment POA at Wright-Patterson, a closing in Beavercreek, or a bedside notarization in Xenia — we are 30-40 minutes away via US-35. Call <a href="tel:5132269052" className="text-primary font-semibold">(513) 226-9052</a>.
            </p>
            <StandardCTAButtons />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotaryGuideGreeneCounty;
