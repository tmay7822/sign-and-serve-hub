import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const College18Plus = () => {
  const serviceName = "College & 18+ Notarizations";
  
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
              <Button variant="cta" size="lg">Get a Free Quote</Button>
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
            <h2 className="text-3xl font-bold mb-6">Heading Off to College? Turned 18? Start Here.</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Protect access and peace of mind when your student becomes an adult. We notarize key forms in Cincinnati, Dayton, and surrounding areas so you can speak with schools, doctors, and banks when it matters.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Common Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    FERPA Release (education records)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    HIPAA Authorization (medical info)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Medical Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Financial/Durable Power of Attorney
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    General Consent/Release Forms
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">What to Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Valid government photo ID
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Completed—but <em>unsigned</em>—forms
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Signers and required witnesses (if applicable)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-medium cursor-pointer">Do you come to campus or dorms?</summary>
                  <p className="mt-2 text-muted-foreground">Yes, we meet at dorms, libraries, cafés, or off-campus housing throughout Cincinnati and Dayton areas.</p>
                </details>
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-medium cursor-pointer">Can parents sign POA for an 18-year-old?</summary>
                  <p className="mt-2 text-muted-foreground">No. The adult student must sign; we verify identity and willingness.</p>
                </details>
                <details className="border border-border rounded-lg p-4">
                  <summary className="font-medium cursor-pointer">How fast can we schedule?</summary>
                  <p className="mt-2 text-muted-foreground">Same-day and after-hours are available across Hamilton, Montgomery, Warren, and Butler Counties.</p>
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

export default College18Plus;