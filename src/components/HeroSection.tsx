import { Button } from '@/components/ui/button';
import { Phone, FileCheck } from 'lucide-react';
import heroImage from '@/assets/hero-notary-appointment.jpg';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional mobile notary service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Signed Right.<br />
            <span className="text-white drop-shadow-lg">Signed On Time.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 lg:mb-8 leading-relaxed max-w-3xl">
            Mobile Notary & Loan Signing across {BUSINESS_CONFIG.serviceArea.primary}. 
            Same-day availability, error-free docs, five-star service.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md sm:max-w-none">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">
                <FileCheck className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                Get a Free Quote
              </Link>
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg" 
              className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                <Phone className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
              <span>Same-day service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
              <span>Mobile to you</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
              <span>5-star rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;