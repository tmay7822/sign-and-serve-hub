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
    question: "Is a bill of sale required for a car sale in Ohio?",
    answer: "While Ohio doesn't legally require a bill of sale, it's strongly recommended. A bill of sale documents the purchase price (important for tax purposes), protects both buyer and seller, and provides proof of the transaction. We can notarize your bill of sale along with the title transfer."
  },
  {
    question: "How much does bill of sale notarization cost in Dayton?",
    answer: "Ohio notary fees are $5 per notarial act as set by state law. Our mobile service includes a travel fee for the convenience of coming to your Dayton location. Contact us for a complete quote."
  },
  {
    question: "Do you offer same-day bill of sale notarization in Dayton?",
    answer: "Yes! We offer same-day mobile notary services throughout Dayton and Montgomery County. Call us at (513) 226-9052 to schedule an immediate appointment."
  },
  {
    question: "What should be included in a vehicle bill of sale?",
    answer: "A proper bill of sale should include: vehicle description (year, make, model, VIN), purchase price, date of sale, buyer and seller names and addresses, odometer reading, and signatures of both parties. We can provide a bill of sale template if needed."
  }
];

const services = [
  "Bill of Sale Notarization",
  "Vehicle Title Transfer Notarization",
  "Lien Release Documentation",
  "Odometer Disclosure Statements",
  "Gift Affidavit for Vehicles",
  "Power of Attorney for Vehicle Sales",
  "DMV Document Notarization",
  "Affidavit of Heirship for Vehicles"
];

const areas = [
  "Downtown Dayton", "Kettering", "Centerville", "Beavercreek",
  "Fairborn", "Huber Heights", "Miamisburg", "Springboro",
  "Oakwood", "Vandalia", "Trotwood", "West Carrollton"
];

const BillOfSaleNotaryDayton = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_CONFIG.name} - Bill of Sale Notary Dayton`,
    "description": "Mobile bill of sale notary serving Dayton and Montgomery County. Vehicle title transfers, lien releases, and DMV document notarization.",
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "url": `${BUSINESS_CONFIG.website}/bill-of-sale-notary-dayton`,
    "areaServed": {
      "@type": "City",
      "name": "Dayton",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Montgomery County, Ohio"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7589,
      "longitude": -84.1916
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dayton",
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
        title="Bill of Sale Notary in Dayton, OH | Car Title Transfers Montgomery County"
        description="Mobile bill of sale notary serving Dayton and Montgomery County. Vehicle title transfers, lien releases, and same-day DMV document notarization. Call (513) 226-9052."
        canonical={`${BUSINESS_CONFIG.website}/bill-of-sale-notary-dayton`}
        jsonLd={businessSchema}
      />
      <LocalBusinessSchema 
        serviceName="Bill of Sale Notary Dayton"
        serviceDescription="Mobile bill of sale notary serving Dayton and Montgomery County. Vehicle title transfers, lien releases, and DMV document notarization."
        url="/bill-of-sale-notary-dayton"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Dayton & Montgomery County
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Bill of Sale Notary in Dayton, OH
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional mobile notary for vehicle bills of sale, title transfers, and DMV documents. 
              We come to your Dayton location — same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Bill of Sale Notary
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

      {/* Why Bill of Sale Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Get a Bill of Sale Notarized?</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              While Ohio doesn't require a bill of sale, having one notarized protects both buyer and seller 
              and provides important documentation for the BMV.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Tax Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Documents the purchase price for accurate sales tax calculation at the BMV.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Legal Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Protects both parties by documenting the transaction date and vehicle condition.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Proof of Sale</h3>
                  <p className="text-sm text-muted-foreground">
                    Provides proof that the sale occurred, which can be important for insurance and liability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Notary Services in Dayton</h2>
            
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
                    <h3 className="text-xl font-bold mb-2">Complete Title Transfer Guide</h3>
                    <p className="text-muted-foreground mb-4">
                      Learn everything you need to know about Ohio car title transfers, including what documents 
                      you need and common mistakes to avoid.
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Areas We Serve in Dayton & Montgomery County</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Plus all other Dayton neighborhoods and Montgomery County communities. 
              We also serve nearby areas in Greene, Miami, and Clark counties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
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
            <h2 className="text-3xl font-bold mb-4">Ready to Notarize Your Bill of Sale?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your mobile notary appointment today. We come to your Dayton location 
              at a time that works for you.
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
              <Link to="/service/montgomery-county" className="text-primary hover:underline">Montgomery County Services</Link>
              <Link to="/general-notary" className="text-primary hover:underline">General Notary</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BillOfSaleNotaryDayton;
