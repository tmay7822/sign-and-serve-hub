import { BUSINESS_CONFIG } from '@/config/business';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { QuickTrustBadges } from '@/components/landing/QuickTrustBadges';
import { CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          {/* SEO-Optimized H1 with Brand Tagline */}
          <h1 className="font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              Mobile Notary Services in Cincinnati & Dayton, Ohio
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl text-primary mt-3 font-semibold">
              Signed On Time — We Come To You Anytime And Anywhere
            </span>
          </h1>
          
          <div className="bg-card rounded-xl p-4 lg:p-6 shadow-card mb-4">
            {/* SEO-Enhanced H2 with Service Keywords */}
            <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
              Certified Loan Signing Agent | Car Title Notary | Estate Planning & Healthcare Documents
            </h2>
            
            <p className="text-xl lg:text-2xl font-bold text-primary mb-4">
              Terry May with Signed On Time
            </p>
            
            <div className="mb-4">
              {/* SEO-Enhanced H3 with County Keywords */}
              <h3 className="text-base font-semibold text-foreground mb-2">
                Serving Hamilton, Butler, Warren, Montgomery & 5 More Ohio Counties
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fast, professional mobile notary service — we come to your home, office, hospital, or anywhere you need us.
              </p>
            </div>

            {/* Value Propositions with Keywords */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-4">
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                Same-Day Notary Service
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                NNA Certified & Background Checked
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                Evenings & Weekends Available
              </span>
            </div>

            {/* Trust Badges */}
            <div className="mb-4">
              <QuickTrustBadges />
            </div>

            <StandardCTAButtons 
              className="max-w-2xl mx-auto"
            />
            
            {/* Enhanced Google Reviews Badge */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <a 
                href="#reviews" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 bg-white/80 dark:bg-white/10 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-lg text-foreground">5.0</span>
                <span className="text-muted-foreground">• 35 Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;