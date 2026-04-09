import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import BookingCTASection from '@/components/BookingCTASection';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you serve all of Dayton and the surrounding Montgomery County area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — from downtown Dayton to Kettering, Centerville, Vandalia and the rural communities throughout Montgomery County. The US-35 corridor from Waynesville to Dayton is one of our most frequently traveled routes."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize VA documents at the Dayton VA Medical Center?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide mobile notary services at the Dayton VA Medical Center and other VA facilities in the area. We understand the specific documentation needs of veterans and military families."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle deployment POA for military families near Wright-Patterson AFB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Deployment Powers of Attorney are one of our most requested services for military families in the Greene and Montgomery County area. We offer flexible scheduling including evenings and weekends to accommodate deployment timelines."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you reach Kettering or Centerville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kettering and Centerville are approximately 35-40 minutes from our Waynesville base via US-35. Same-day appointments are regularly available throughout southern Montgomery County."
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
    { "@type": "ListItem", "position": 3, "name": "Montgomery County Guide", "item": "https://www.signedontime.com/blog/notary-guide-montgomery-county-ohio" }
  ]
};

const NotaryGuideMontgomeryCounty = () => {
  return (
    <>
      <Seo
        title="Mobile Notary Montgomery County Ohio | Signed On Time"
        description="Mobile notary services throughout Montgomery County Ohio. Serving Dayton, Kettering, Centerville and surrounding areas. 30-40 minutes from Waynesville. Same-day appointments. Call (513) 226-9052."
        canonical="https://www.signedontime.com/blog/notary-guide-montgomery-county-ohio"
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
                <li className="text-foreground font-medium">Montgomery County Guide</li>
              </ol>
            </nav>

            <Badge variant="secondary" className="mb-4">County Guide</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Mobile Notary Services in Montgomery County, Ohio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
              Serving Dayton, Kettering, Centerville, and all Montgomery County communities along the US-35 corridor from Waynesville.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><time dateTime="2026-04-08">April 8, 2026</time></div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>7 min read</span></div>
              <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>Terry May</span></div>
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /><span>Montgomery County, Ohio</span></div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-center sm:text-left text-muted-foreground">
                <strong className="text-foreground">Need a notary in Montgomery County?</strong> 30-40 minutes from Waynesville via US-35.
              </p>
              <StandardCTAButtons />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">

              <p>Signed On Time is centrally located in Waynesville, Ohio — positioned between Cincinnati and Dayton along the US-35 and I-71 corridors. This means faster response times across all six counties than any notary based in either city alone. The communities along US-35 between Waynesville and Dayton are some of our most frequently served areas — same-day appointments throughout Montgomery County are standard. We serve Dayton, Kettering, Centerville, Miamisburg, Huber Heights, Vandalia, Oakwood, Trotwood, West Carrollton, and the rural communities beyond the city limits that other notaries rarely reach.</p>

              <h2>Loan Signing Services in Montgomery County</h2>
              <p>The Dayton metropolitan real estate market generates consistent loan signing volume across Montgomery County. From first-time homebuyers in Huber Heights and Trotwood to refinances in Kettering and Oakwood, we provide certified loan signing agent services for purchase closings, refinances, reverse mortgages, and HELOCs. The US-35 corridor makes Montgomery County one of our most efficient service areas — we regularly complete multiple closings in the Dayton area on the same day. <Link to="/loan-signings">Learn more about our loan signing services →</Link></p>

              <h2>Estate Planning Notarization in Montgomery County</h2>
              <p>Montgomery County Probate Court in downtown Dayton handles one of the highest volumes of estate filings in the region. We notarize wills, irrevocable and revocable trusts, durable powers of attorney, and healthcare directives at homes and attorney offices throughout the county. Many Centerville and Oakwood families work with Dayton-area estate attorneys — we coordinate directly with legal teams to ensure documents are properly witnessed and notarized before filing. <Link to="/estate-plans">Learn more about estate planning notarization →</Link></p>

              <h2>Healthcare Document Notarization in Montgomery County</h2>
              <p>Montgomery County is home to Miami Valley Hospital, the Kettering Health Network facilities, and the Dayton VA Medical Center — all of which generate urgent healthcare notarization requests. We provide bedside notarization for living wills, healthcare powers of attorney, and HIPAA authorization forms at hospitals and rehabilitation facilities across the county. When a patient is admitted unexpectedly at Miami Valley or Kettering Medical Center, families need a notary who can arrive quickly — the US-35 route from Waynesville puts us there in 30-40 minutes. <Link to="/healthcare-notary">Learn more about healthcare document notarization →</Link></p>

              <h2>Military and Veterans Notary Services in Montgomery County</h2>
              <p>Wright-Patterson Air Force Base sits adjacent to Montgomery County's eastern border, and thousands of military families live in Huber Heights, Vandalia, and the surrounding communities. Deployment Powers of Attorney are among our most frequently requested documents — service members preparing for deployment need financial, legal, and healthcare POA documents notarized on tight timelines. We also assist veterans at the Dayton VA Medical Center with benefit applications and healthcare directives, offering flexible evening and weekend scheduling to accommodate military operations tempos. <Link to="/general-notary">Learn more about general notary services →</Link></p>

              <h2>Vehicle Title Notarization in Montgomery County</h2>
              <p>Whether you are buying a vehicle from a private seller in Dayton or completing a title transfer in Miamisburg, Ohio law requires notarized signatures on vehicle title documents. We handle title transfers, bills of sale, and lien releases at your location throughout Montgomery County — eliminating the need to visit a BMV branch and wait in line. <Link to="/vehicles-dmv">Learn more about vehicle title notarization →</Link></p>

              <h2>Business Notary Services in Montgomery County</h2>
              <p>Dayton's manufacturing heritage and growing defense contractor community generate steady demand for business notarizations. From contract execution at downtown offices to vendor compliance affidavits at industrial facilities in West Carrollton and Trotwood, we bring mobile notary service to your workplace. The defense and aerospace companies near Wright-Patterson frequently require notarized documents for government contracts and security clearance paperwork. <Link to="/general-notary">Learn more about general notary services →</Link></p>

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

        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Professional Notary Services Along the US-35 Corridor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              From downtown Dayton to Kettering, Centerville, Vandalia, and the rural communities throughout Montgomery County — same-day mobile notary service is standard. Call <a href="tel:5132269052" className="text-primary font-semibold">(513) 226-9052</a>.
            </p>
            <StandardCTAButtons />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotaryGuideMontgomeryCounty;
