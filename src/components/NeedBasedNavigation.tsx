import { Link } from 'react-router-dom';
import {
  FileText, Car, Home, Heart, ScrollText, Shield,
  Globe, GraduationCap, Clock, Moon, ArrowRight,
  type LucideIcon,
} from 'lucide-react';

interface NavButton {
  id: string;
  icon: LucideIcon;
  headline: string;
  subtext: string;
  serviceLink: string;
  guideLink?: string;
  urgent?: boolean;
}

const ALL_BUTTONS: NavButton[] = [
  { id: 'general', icon: FileText, headline: 'I Need a Document Notarized', subtext: 'Affidavits, acknowledgments, oaths & more', serviceLink: '/general-notary', guideLink: '/blog/general-notary-what-to-bring' },
  { id: 'car', icon: Car, headline: "I'm Buying or Selling a Car", subtext: 'Title transfers, bills of sale & DMV docs', serviceLink: '/vehicles-dmv', guideLink: '/blog/ohio-car-title-transfer-requirements' },
  { id: 'realestate', icon: Home, headline: 'I Have a Real Estate Closing', subtext: 'Loan signings, deeds & property transfers', serviceLink: '/loan-signings', guideLink: '/blog/what-happens-loan-signing' },
  { id: 'hospital', icon: Heart, headline: 'I Need Hospital or Bedside Notary', subtext: 'Healthcare directives, POA & medical docs', serviceLink: '/healthcare-notary', guideLink: '/blog/hospital-notary-what-to-expect' },
  { id: 'wills', icon: ScrollText, headline: 'I Need a Will or Trust Notarized', subtext: 'Wills, trusts & estate planning', serviceLink: '/estate-plans', guideLink: '/blog/wills-trusts-poa-checklist' },
  { id: 'poa', icon: Shield, headline: 'I Need Power of Attorney', subtext: 'Durable, healthcare & financial POA', serviceLink: '/estate-plans', guideLink: '/blog/poa-pitfalls' },
  { id: 'international', icon: Globe, headline: 'I Need Documents for International Use', subtext: 'Apostille authentication & certification', serviceLink: '/apostille' },
  { id: 'student', icon: GraduationCap, headline: 'My Student is Turning 18', subtext: 'FERPA, HIPAA & healthcare POA', serviceLink: '/college-18-plus' },
  { id: 'today', icon: Clock, headline: 'I Need a Notary Today', subtext: 'Same-day appointments available now', serviceLink: '/book-now', urgent: true },
  { id: 'afterhours', icon: Moon, headline: 'I Need a Notary After Hours', subtext: 'Evenings, weekends & urgent situations', serviceLink: '/book-now', urgent: true },
];

type Variant = 'full' | 'services' | 'guides' | 'compact';

interface NeedBasedNavigationProps {
  heading: string;
  subtext?: string;
  variant: Variant;
  county?: string;
  onButtonClick?: (serviceId: string) => void;
}

function getButtons(variant: Variant): NavButton[] {
  switch (variant) {
    case 'full':
      return ALL_BUTTONS;
    case 'services':
      return ALL_BUTTONS.filter((b) => !b.urgent);
    case 'guides':
      return ALL_BUTTONS.slice(0, 6);
    case 'compact':
      return ALL_BUTTONS.slice(0, 6);
  }
}

const NeedBasedNavigation = ({ heading, subtext, variant, onButtonClick }: NeedBasedNavigationProps) => {
  const buttons = getButtons(variant);
  const useGuideLinks = variant === 'guides';

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 text-center">
        {heading}
      </h2>
      {subtext && (
        <p className="text-muted-foreground text-center mb-6">{subtext}</p>
      )}
      {!subtext && <div className="mb-6" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.map((btn) => {
          const IconComponent = btn.icon;
          const href = useGuideLinks && btn.guideLink ? btn.guideLink : btn.serviceLink;

          if (onButtonClick && !btn.urgent) {
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => onButtonClick(btn.id)}
                className="flex items-center gap-4 p-5 lg:p-6 bg-card rounded-xl border-2 border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group text-left min-h-[72px]"
              >
                <div className="flex-shrink-0 w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {btn.headline}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    {btn.subtext}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </button>
            );
          }

          return (
            <Link
              key={btn.id}
              to={href}
              className={`flex items-center gap-4 p-5 lg:p-6 rounded-xl border-2 transition-all duration-300 group text-left min-h-[72px] ${
                btn.urgent
                  ? 'bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90 hover:shadow-lg'
                  : 'bg-card border-border hover:border-primary/40 hover:shadow-lg'
              }`}
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md ${
                btn.urgent ? 'bg-white/20' : 'gradient-primary'
              }`}>
                <IconComponent className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`block text-lg lg:text-xl font-semibold leading-tight transition-colors ${
                  btn.urgent ? 'text-white' : 'text-foreground group-hover:text-primary'
                }`}>
                  {btn.headline}
                </span>
                <span className={`block text-sm mt-1 ${
                  btn.urgent ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  {btn.subtext}
                </span>
              </div>
              <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-all flex-shrink-0 ${
                btn.urgent ? 'text-white/70' : 'text-muted-foreground group-hover:text-primary'
              }`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NeedBasedNavigation;
