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
    question: "Do you offer mobile car title notary in West Chester?",
    answer: "Yes! We provide mobile notary services throughout West Chester, Liberty Township, and all of Butler County. We come to your home, office, or any convenient meeting place for vehicle title transfers."
  },
  {
    question: "Is there a travel fee for Butler County notarizations?",
    answer: "For most Butler County locations including West Chester, Fairfield, and Hamilton, there is no travel fee. We offer competitive pricing for vehicle notarizations. Call for a complete quote."
  },
  {
    question: "What types of vehicles can you notarize titles for?",
    answer: "We notarize titles for all types of vehicles including cars, trucks, SUVs, motorcycles, trailers, RVs, boats, and ATVs. The notarization process is the same for all vehicle types."
  },
  {
    question: "Can you help if I've already signed the title?",
    answer: "Unfortunately, if you've already signed the title before the notary witnessed it, we cannot notarize that signature. You'll need to apply for a duplicate title from the BMV. We can notarize the new title once you receive it."
  }
];

const services = [
  "Vehicle Title Transfer Notarization",
  "Bill of Sale Notarization",
  "Lien Release Documentation",
  "Boat & RV Title Transfers",
  "Motorcycle Title Notarization",
  "Gift Affidavit for Vehicles",
  "Power of Attorney for Vehicle Sales",
  "Odometer Disclosure Statements"
];

const areas = [
  "West Chester", "Liberty Township", "Fairfield", "Hamilton",
  "Middletown", "Oxford", "Trenton", "Monroe",
  "Beckett Ridge", "Butler County Business Parks"
];

const VehicleNotaryWestChesterButler = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_CONFIG.name} - Vehicle Notary West Chester & Butler County`,
    "description": "Mobile vehicle notary serving West Chester, Fairfield, Hamilton, and Butler County Ohio. Car title transfers, bills of sale, and DMV documents.",
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "url": `${BUSINESS_CONFIG.website}/vehicle-notary-west-chester-butler`,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Butler County, Ohio"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.3320,
      "longitude": -84.4003
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West Chester",
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
        title="Vehicle Notary in West Chester & Butler County, OH | Car Title Transfers"
        description="Mobile vehicle notary for Butler County including West Chester, Fairfield, and Hamilton. Car title transfers, bills of sale, same-day service. Call (513) 226-9052."
        canonical={`${BUSINESS_CONFIG.website}/vehicle-notary-west-chester-butler`}
        jsonLd={businessSchema}
      />
      <LocalBusinessSchema 
        serviceName="Vehicle Notary West Chester & Butler County"
        serviceDescription="Mobile vehicle notary serving West Chester, Fairfield, Hamilton, and Butler County Ohio. Car title transfers, bills of sale, and DMV documents."
        url="/vehicle-notary-west-chester-butler"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              West Chester & Butler County
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Vehicle Notary in West Chester & Butler County
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional mobile notary for all vehicle documents. Car titles, bills of sale, 
              lien releases — we come to your Butler County location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Vehicle Notary
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
              <span className="text-sm font-medium">No Travel Fee*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Notary Services in Butler County</h2>
            
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
                    <h3 className="text-xl font-bold mb-2">Ohio Title Transfer Made Easy</h3>
                    <p className="text-muted-foreground mb-4">
                      Our complete guide walks you through the entire Ohio car title transfer process, 
                      including what to bring and mistakes to avoid at the BMV.
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

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us for Vehicle Notarization?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Evenings and weekends available. We work around your schedule, not the other way around.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Car className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">We Come to You</h3>
                  <p className="text-sm text-muted-foreground">
                    No need to leave work or home. We meet you at your location throughout Butler County.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Done Right</h3>
                  <p className="text-sm text-muted-foreground">
                    We verify all documents are completed correctly so you don't face BMV rejections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Areas We Serve in Butler County</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Plus all other Butler County communities. We also serve nearby areas in 
              Hamilton, Warren, and Preble counties.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              *No travel fee for most Butler County locations. Call for details.
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
            <h2 className="text-3xl font-bold mb-4">Need a Vehicle Notary in Butler County?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your mobile notarization today. We serve West Chester, Fairfield, Hamilton, 
              and all Butler County communities.
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
              <Link to="/service/butler-county" className="text-primary hover:underline">Butler County Services</Link>
              <Link to="/general-notary" className="text-primary hover:underline">General Notary</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleNotaryWestChesterButler;
