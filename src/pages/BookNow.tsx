import Seo from '@/components/Seo';
import { BookingWidget } from '@/components/BookingWidget';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';
import { CompactServicesGrid } from '@/components/landing/CompactServicesGrid';
import { QuickTrustBadges } from '@/components/landing/QuickTrustBadges';
import { MiniTestimonials } from '@/components/landing/MiniTestimonials';
import { QuoteCalculatorModal } from '@/components/QuoteCalculatorModal';
import { Phone, ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import logoImage from '@/assets/signed-on-time-logo.jpg';

const BookNow = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string>("");
  const bookingWidgetRef = useRef<HTMLDivElement>(null);

  const handleServiceSelect = (serviceName: string) => {
    setPreSelectedService(serviceName);
    // Scroll to booking widget
    bookingWidgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <Seo
        title="Book Mobile Notary - Instant Quote & Scheduling | Signed On Time"
        description="Get your quote and book online in 60 seconds. Professional mobile notary service across Cincinnati-Dayton metro. Same-day appointments available."
        keywords="book notary, instant quote, mobile notary Cincinnati, schedule notary online, same day notary"
        canonical="https://www.signedontime.com/book-now"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Minimal Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt={BUSINESS_CONFIG.logo.alt}
                className="h-12 md:h-14 w-auto object-contain"
              />
              <div className="hidden md:block">
                <div className="text-xl font-bold text-primary">{BUSINESS_CONFIG.name}</div>
                <div className="text-xs text-muted-foreground">{BUSINESS_CONFIG.tagline}</div>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
              >
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="hidden sm:inline">Call Now</span>
                  <span className="sm:hidden">{BUSINESS_CONFIG.phone}</span>
                </a>
              </Button>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:inline">
                Explore All Services →
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section with Booking Widget */}
        <section className="py-4 md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Headline */}
              <div className="text-center mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  Get Your Quote & Book Online
                  <span className="block text-accent mt-2">in 60 Seconds</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-accent mb-1">
                  {BUSINESS_CONFIG.tagline}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mb-3">
                  Professional mobile notary service across {BUSINESS_CONFIG.serviceArea.primary}
                </p>
                <QuickTrustBadges />
              </div>

              {/* Main Booking Widget */}
              <div ref={bookingWidgetRef} className="bg-card border-2 border-accent/20 rounded-xl shadow-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                  Select Your Service & Get Instant Pricing
                </h2>
                <BookingWidget 
                  defaultService={preSelectedService}
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  Book Now
                </BookingWidget>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">
                Our Notary Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From loan signings to estate planning, we handle all your notarization needs
              </p>
            </div>
            <CompactServicesGrid onServiceSelect={handleServiceSelect} />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Why Choose {BUSINESS_CONFIG.name}?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl mb-3">🚗</div>
                  <h3 className="font-bold text-lg mb-2">Mobile Service</h3>
                  <p className="text-sm text-muted-foreground">
                    We come to you - home, office, hospital, or anywhere convenient
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Same Day Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Urgent needs? We offer same-day and after-hours appointments
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl mb-3">✓</div>
                  <h3 className="font-bold text-lg mb-2">NNA Certified</h3>
                  <p className="text-sm text-muted-foreground">
                    Background checked, insured, and professionally certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Serving {BUSINESS_CONFIG.serviceArea.primary}
              </h2>
              <p className="text-muted-foreground">
                <strong>Counties:</strong> {BUSINESS_CONFIG.serviceArea.counties}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Service area extends {BUSINESS_CONFIG.serviceArea.radius} from Cincinnati
              </p>
            </div>
          </div>
        </section>

        {/* Mini Testimonials */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <MiniTestimonials />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your appointment now or call us for immediate assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
              <BookingWidget 
                variant="secondary"
                size="lg"
                className="text-lg min-w-[200px]"
              >
                Book Now
              </BookingWidget>
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => setShowQuoteModal(true)}
                className="text-lg min-w-[200px]"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Quick Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open(`tel:${BUSINESS_CONFIG.phone}`)}
                className="text-lg min-w-[200px] bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </section>

        {/* Quote Calculator Modal */}
        <QuoteCalculatorModal 
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
        />

        {/* Minimal Footer */}
        <footer className="py-6 border-t bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/about-us" className="hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BookNow;
