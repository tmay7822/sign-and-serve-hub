import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Calendar, FileText, Home, Shield, Car, Mail, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuickTrustBadges } from "@/components/landing/QuickTrustBadges";

const quickLinks = [
  { label: "Book an Appointment", href: "/book-now", icon: Calendar },
  { label: "Loan Signings", href: "/loan-signings", icon: FileText },
  { label: "Estate Planning", href: "/estate-plans", icon: Home },
  { label: "General Notary", href: "/general-notary", icon: Shield },
  { label: "Apostille Services", href: "/apostille", icon: FileText },
  { label: "Vehicle Title Notary", href: "/vehicles-dmv", icon: Car },
  { label: "Contact Us", href: "/contact", icon: Mail },
  { label: "View All Services", href: "/service", icon: LayoutGrid },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Signed On Time Mobile Notary</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>

      <Header />

      <main className="bg-background min-h-[60vh]">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-muted/60 to-background py-16 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The page you're looking for may have moved or no longer exists.
              We can still help you get your documents notarized today.
            </p>
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <a href="tel:5132269052">
                <Phone className="h-5 w-5 mr-2" />
                Call (513) 226-9052
              </a>
            </Button>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-12">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">
              What are you looking for?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Card key={link.href} className="hover:shadow-md transition-shadow">
                    <Link
                      to={link.href}
                      className="flex flex-col items-center gap-3 p-6 text-center group"
                    >
                      <Icon className="h-7 w-7 text-primary group-hover:text-primary/80 transition-colors" />
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-10">
          <div className="container mx-auto max-w-4xl px-4">
            <QuickTrustBadges />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
