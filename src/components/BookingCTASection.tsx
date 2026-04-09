import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

interface BookingCTASectionProps {
  serviceName?: string;
  countyName?: string;
}

const BookingCTASection = ({ serviceName, countyName }: BookingCTASectionProps) => {
  const heading = countyName
    ? `Ready to Schedule Your ${countyName} Notary Appointment?`
    : `Ready to Schedule Your ${serviceName} Appointment?`;

  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Same-day mobile notary service available throughout Southwest Ohio. Terry comes to your location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg px-8" asChild>
            <Link to="/book-now">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="font-bold text-lg px-8 border-2" asChild>
            <a href="tel:5132269052">
              <Phone className="mr-2 h-5 w-5" />
              Call (513) 226-9052
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Available Monday–Sunday 7AM–10PM</p>
      </div>
    </section>
  );
};

export default BookingCTASection;
