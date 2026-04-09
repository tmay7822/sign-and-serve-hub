import Seo from '@/components/Seo';
import { BookingWidget } from '@/components/BookingWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BUSINESS_CONFIG } from '@/config/business';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock, Calendar, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';
import { Link } from 'react-router-dom';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.signedontime.com/" },
    { "@type": "ListItem", "position": 2, "name": "Book Now", "item": "https://www.signedontime.com/book-now" }
  ]
};

const BookNow = () => {
  return (
    <>
      <Seo
        title="Book Your Mobile Notary Appointment | Signed On Time"
        description="Book your mobile notary appointment online. Same-day service available 7 days a week across Southwest Ohio. Instant confirmation. Call (513) 226-9052."
        canonical="https://www.signedontime.com/book-now"
        jsonLd={breadcrumbSchema}
      />

      <Header />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-10 md:py-14 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Mobile Notary Appointment
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Same-day appointments available 7 days a week across Southwest Ohio. Select your service and preferred time below.
            </p>

            {/* Availability */}
            <div className="flex justify-center mb-4">
              <AvailabilityIndicator />
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground">
              {['NNA Certified', 'Background Checked', 'Fully Insured', '25+ Years Experience', 'Same-Day Available'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Widget */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-card border-2 border-primary/20 rounded-xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Select Your Service & Book
              </h2>
              <BookingWidget
                variant="default"
                size="lg"
                className="w-full"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </BookingWidget>
            </div>
          </div>
        </section>

        {/* Prefer to Call or Text? */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Prefer to Call or Text?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg"><Phone className="h-6 w-6 text-primary" /></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call or Text</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fastest response for same-day appointments</p>
                  <Button className="w-full" asChild>
                    <a href="tel:5132269052">Call (513) 226-9052</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg"><MapPin className="h-6 w-6 text-primary" /></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Our Service Area</h3>
                  <p className="text-sm text-muted-foreground mb-4">Serving Hamilton, Warren, Butler, Montgomery, Greene and Clinton counties. Most locations reached within 30-45 minutes from Waynesville.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/service-areas">View Service Areas</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg"><Clock className="h-6 w-6 text-primary" /></div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Need It Today?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Call now for immediate scheduling. We answer 7 days a week 7AM to 10PM.</p>
                  <Button className="w-full" asChild>
                    <a href="tel:5132269052">Call Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Book Online or Call', desc: 'Select your service and preferred time above or call (513) 226-9052' },
                { step: '2', title: 'Confirmation', desc: 'Receive immediate confirmation with appointment details and what to bring' },
                { step: '3', title: 'We Come To You', desc: 'Terry arrives at your location on time with all necessary notary supplies' },
                { step: '4', title: 'Done', desc: 'Documents notarized correctly the first time with same-day delivery options available' },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pricing */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Service Pricing
            </h2>
            <p className="text-muted-foreground mb-6">
              Ohio notary fees are regulated by state law. Our pricing includes the notarial act fee plus a transparent mobile travel fee based on your location.
            </p>
            <Link to="/pricing" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
              View Complete Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BookNow;
