import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const VehiclesDMV = () => {
  const serviceName = "Vehicles & DMV Notarizations";
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-brand-light text-brand-navy py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {serviceName} in Cincinnati, OH & Dayton Areas
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Mobile, on-time, and error-free notarizations serving Cincinnati, Dayton and all of Hamilton, Montgomery, Warren, and Butler Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">NNA Certified</Badge>
              <Badge variant="secondary">Background Checked</Badge>
              <Badge variant="secondary">E&O Insured</Badge>
              <Badge variant="secondary">5-Star Rated</Badge>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Title & Transfer Forms—Without the Lines</h2>
            
            <div className="mb-8">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Title Transfers & Duplicate Titles
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lien Releases & Affidavits
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bill of Sale (if notarization required)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Odometer & VIN Affidavits
                </li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-muted rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Bring These</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proper ID and completed (unsigned) forms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Vehicle info: VIN, mileage, lienholder (if any)
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-medium cursor-pointer">Do you meet at dealerships?</summary>
                  <p className="mt-2 text-muted-foreground">Yes—plus homes, workplaces, or public locations throughout Cincinnati and Dayton areas.</p>
                </details>
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-medium cursor-pointer">Can you advise on titling?</summary>
                  <p className="mt-2 text-muted-foreground">We cannot give legal advice; check DMV rules for Ohio.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-semibold mb-4">Where We Work in Greater Cincinnati-Dayton</h3>
            <p className="text-lg text-muted-foreground mb-8">
              We routinely serve Cincinnati, Dayton, and surrounding areas across Hamilton, Montgomery, Warren, and Butler Counties—homes, offices, hospitals, senior communities, campuses, and more.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Related Services Near You</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" asChild>
                  <a href="/general-notary">General Notary</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/loan-signings">Loan Signings</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/estate-plans">Estate Plans</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/apostille">Apostille</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/business-services">Business Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VehiclesDMV;