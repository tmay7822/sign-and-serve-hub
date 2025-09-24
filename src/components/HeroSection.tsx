import { Button } from '@/components/ui/button';
import { Phone, FileCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';
import { BookingWidget } from '@/components/BookingWidget';

const HeroSection = () => {
  return (
    <section className="bg-background py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            Signed Right.<br />
            <span className="text-primary">Signed On Time.</span>
          </h1>
          
          <div className="bg-card rounded-lg p-4 lg:p-6 shadow-lg mb-4">
            <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
              Professional Mobile Notary & Loan Signing Services
            </h2>
            
            <p className="text-xl lg:text-2xl font-bold text-primary mb-4">
              Terry May with Signed On Time
            </p>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Serving {BUSINESS_CONFIG.serviceArea.primary}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">
                We provide certified, insured, and background-checked mobile notary services 
                across the following counties:
              </p>
              <p className="text-base font-bold text-foreground">
                {Array.isArray(BUSINESS_CONFIG.serviceArea.counties) 
                  ? BUSINESS_CONFIG.serviceArea.counties.join(', ')
                  : BUSINESS_CONFIG.serviceArea.counties}
              </p>
            </div>
            
            <p className="text-base font-medium text-foreground mb-4">
              See below for all of our services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <BookingWidget
                size="lg"
                className="text-base lg:text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <FileCheck className="mr-2 h-5 w-5" />
                Book Now
              </BookingWidget>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base lg:text-lg px-8 py-4 w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;