import { Button } from '@/components/ui/button';
import { Phone, FileCheck } from 'lucide-react';
import heroImage from '@/assets/hero-notary-appointment.jpg';
import { BUSINESS_CONFIG } from '@/config/business';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Signed Right.{' '}
            <span className="text-brand-gold">Signed On Time.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Mobile Notary & Loan Signing across {BUSINESS_CONFIG.serviceArea.primary}. 
            Same-day availability, error-free docs, five-star service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>Same-day service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>Mobile to you</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>5-star rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;