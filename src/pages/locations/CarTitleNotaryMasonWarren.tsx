import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQAccordion from '@/components/FAQAccordion';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import { Link } from 'react-router-dom';
import { Car, FileText, CheckCircle, Clock, MapPin, Phone, Calendar, Shield, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

const faqs = [
  {
    question: "Do you provide car title notary services in Mason and Lebanon?",
    answer: "Yes! We provide mobile car title notary services throughout Mason, Lebanon, and all of Warren County. We come to your home, workplace, or any convenient location for vehicle title transfers and bills of sale."
  },
  {
    question: "How quickly can you come to Mason for a title notarization?",
    answer: "We often have same-day availability for Mason and Warren County. Call us at (513) 226-9052 to check our current availability and schedule an appointment that works for you."
  },
  {
    question: "What do I need for a car title transfer in Warren County?",
    answer: "You'll need the original vehicle title (unsigned), valid government-issued photo ID, current odometer reading, and if applicable, a lien release. The seller must sign the title in front of the notary."
  },
  {
    question: "Can you notarize a title for a motorcycle or trailer?",
    answer: "Yes, we notarize titles for all types of vehicles including cars, trucks, motorcycles, trailers, boats, and recreational vehicles. The process is the same as for a standard vehicle title transfer."
  }
];

const services = [
  "Vehicle Title Transfer Notarization",
  "Bill of Sale Notarization",
  "Motorcycle Title Transfers",
  "Trailer & RV Title Notarization",
  "Lien Release Documentation",
  "Gift Affidavit for Vehicles",
  "Power of Attorney for Vehicle Sales",
  "DMV Document Notarization"
];

const areas = [
  "Mason", "Lebanon", "Morrow", "South Lebanon",
  "Waynesville", "Springboro", "Franklin", "Maineville",
  "Loveland", "Kings Mills", "Deerfield Township", "Turtlecreek Township"
];

const CarTitleNotaryMasonWarren = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_CONFIG.name} - Car Title Notary Mason & Warren County`,
    "description": "Mobile car title notary serving Mason, Lebanon, and Warren County Ohio. Vehicle title transfers, bills of sale, and DMV document notarization.",
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "url": `${BUSINESS_CONFIG.website}/car-title-notary-mason-warren`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Warren County, Ohio"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.3601,
      "longitude": -84.3099
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mason",
      "addressRegion": "OH",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "21:00"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Car Title Notary in Mason & Warren County, OH | Vehicle Bill of Sale"
        description="Professional mobile car title notary serving Mason, Lebanon, and Warren County. Vehicle title transfers, bills of sale, and same-day service. Call (513) 226-9052."
        canonical={`${BUSINESS_CONFIG.website}/car-title-notary-mason-warren`}
        jsonLd={businessSchema}
      />
      <LocalBusinessSchema 
        serviceName="Car Title Notary Mason & Warren County"
        serviceDescription="Mobile car title notary serving Mason, Lebanon, and Warren County Ohio. Vehicle title transfers, bills of sale, and DMV document notarization."
        url="/car-title-notary-mason-warren"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Mason, Lebanon & Warren County
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Car Title Notary in Mason & Warren County
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional mobile notary for vehicle title transfers and bills of sale throughout Warren County. 
              We come to you — no travel fee for most locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Car Title Notary
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Ohio Certified Notary</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">NNA Member</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Mobile Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Notary Services in Warren County</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">First Time Transferring a Title?</h3>
                    <p className="text-muted-foreground mb-4">
                      Our complete guide covers everything you need to know about Ohio car title transfers, 
                      from what documents to bring to common mistakes to avoid.
                    </p>
                    <Link to="/blog/ohio-car-title-transfer-requirements" className="text-primary hover:underline font-medium">
                      → Read: Ohio Car Title Transfer Requirements Guide
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Areas We Serve in Warren County</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Plus all other Warren County communities. We also serve nearby areas in 
              Hamilton, Butler, and Clermont counties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transfer Your Vehicle Title?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your mobile car title notarization today. We serve all of Warren County 
              including Mason, Lebanon, and surrounding communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Related Services & Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/vehicles-dmv" className="text-primary hover:underline">All Vehicle Notary Services</Link>
              <Link to="/blog/ohio-car-title-transfer-requirements" className="text-primary hover:underline">Title Transfer Guide</Link>
              <Link to="/service/warren-county" className="text-primary hover:underline">Warren County Services</Link>
              <Link to="/general-notary" className="text-primary hover:underline">General Notary</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarTitleNotaryMasonWarren;
