import { BUSINESS_CONFIG } from '@/config/business';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';

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
            
            <div className="mt-3 flex flex-col items-center gap-1">
              <a 
                href="#reviews" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm hover:underline cursor-pointer transition-colors"
              >
                <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">5.0</span>
                <span className="text-muted-foreground">• See reviews below</span>
              </a>
              <span className="text-xs text-muted-foreground">35 verified reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;