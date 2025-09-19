import { Button } from '@/components/ui/button';
import { Phone, FileCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            Signed Right.<br />
            <span className="text-primary">Signed On Time.</span>
          </h1>
          
          <div className="bg-card rounded-lg p-8 lg:p-12 shadow-lg mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Professional Mobile Notary & Loan Signing Services
            </h2>
            
            <p className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              by Terry May with Signed On Time
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Serving Cincinnati to Dayton Metro Area
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We provide certified, insured, and background-checked mobile notary services 
                across the following counties: <span className="font-semibold text-foreground">Hamilton, Warren, Montgomery, Butler, Clinton, & Greene</span>.
              </p>
              <p className="text-base text-muted-foreground">
                Same-day availability with error-free document processing. We come to you!
              </p>
            </div>
            
            <p className="text-lg font-medium text-foreground mb-6">
              See below for all of our services
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-base lg:text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Get a Free Quote
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base lg:text-lg px-8 py-4 w-full sm:w-auto"
                asChild
              >
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-sm lg:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Same-day service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Mobile to you</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>5-star rated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;