import { BUSINESS_CONFIG } from '@/config/business';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { QuickTrustBadges } from '@/components/landing/QuickTrustBadges';
import { FileText, Car, Home, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const intentOptions = [
  {
    icon: FileText,
    label: "I Need a Document Notarized",
    description: "Affidavits, acknowledgments, oaths & more",
    link: "/general-notary",
  },
  {
    icon: Car,
    label: "I'm Buying or Selling a Car",
    description: "Title transfers, bills of sale & DMV docs",
    link: "/vehicles-dmv",
  },
  {
    icon: Home,
    label: "I Have a Real Estate Closing",
    description: "Loan signings, deeds & property transfers",
    link: "/loan-signings",
  },
  {
    icon: Heart,
    label: "I Need Hospital or Bedside Notary",
    description: "Healthcare directives, POA & medical docs",
    link: "/healthcare-notary",
  },
];

export const aeoQuestions = [
  {
    question: "What does a mobile notary do?",
    answer: "A mobile notary travels to your location — home, office, hospital, or anywhere — to notarize documents in person. This saves you time and is especially helpful for people who can't easily travel to a notary office."
  },
  {
    question: "How much does a mobile notary cost in Ohio?",
    answer: "Ohio notary fees start at $5 per notarization by law, plus a travel fee that typically ranges from $25–$75 depending on distance. Loan signing appointments may cost $100–$200 depending on the package size."
  },
  {
    question: "Do you offer same-day notary service?",
    answer: "Yes, Signed On Time offers same-day and emergency mobile notary service across the Cincinnati and Dayton metro areas. Call or book online and we can often be there within 1–2 hours."
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          {/* GMB-Aligned H1 */}
          <h1 className="font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              Notary Public & Mobile Notary Service
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-1">
              in Cincinnati & Dayton, Ohio
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl text-primary mt-3 font-semibold">
              Signed On Time — We Come To You Anytime And Anywhere
            </span>
          </h1>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg border border-slate-200/50 mb-6">
            {/* GMB-Aligned H2 */}
            <h2 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
              Loan Signing Agent | Notary Public | Mobile Notary Near You
            </h2>
            
            <p className="text-xl lg:text-2xl font-bold text-primary mb-3">
              Terry May with Signed On Time
            </p>
            
            <h3 className="text-base font-semibold text-foreground mb-2">
              Serving Hamilton, Butler, Warren, Montgomery & 5 More Ohio Counties
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Fast, professional mobile notary service — we come to your home, office, hospital, or anywhere you need us.
            </p>

            <div className="mb-4">
              <QuickTrustBadges />
            </div>

            <StandardCTAButtons className="max-w-2xl mx-auto" />
            
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

          {/* Intent-Based Routing Buttons */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              What Do You Need Notarized?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {intentOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Link
                    key={option.link}
                    to={option.link}
                    className="flex items-center gap-4 p-5 lg:p-6 bg-white rounded-xl border-2 border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group text-left min-h-[72px]"
                  >
                    <div className="flex-shrink-0 w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {option.label}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-1">
                        {option.description}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* AEO Q&A Block — visible to AI extractors */}
          <div className="max-w-3xl mx-auto mt-10 text-left space-y-6">
            {aeoQuestions.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 lg:p-5">
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;