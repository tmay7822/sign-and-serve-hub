import { BUSINESS_CONFIG } from '@/config/business';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';

const HeroSection = () => {
  return (
    <section className="bg-background py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">Signed On Time.</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl text-primary mt-2">
              We Come To You Anytime And Anywhere.
            </span>
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

            <StandardCTAButtons 
              className="max-w-2xl mx-auto"
            />
            
            <div className="mt-4 flex justify-center">
              <GoogleReviewsBadge variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;