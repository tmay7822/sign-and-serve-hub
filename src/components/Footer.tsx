import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';
import trustDeliveryLogo from '@/assets/trust-delivery-logo.png';
import lssLogo from '@/assets/lss-logo.png';
import nnaLogo from '@/assets/nna-logo.png';
import nnaCertifiedLogo from '@/assets/nna-certified-logo.png';

const Footer = () => {
  // Services ordered by priority: DMV, Healthcare, POA, Loan, Real Estate at top; Apostille at bottom
  const serviceLinks = [
    { name: 'Car Title & Bill of Sale', href: '/vehicles-dmv' },
    { name: 'Healthcare Notary', href: '/healthcare-notary' },
    { name: 'Estate Plans & POA', href: '/estate-plans' },
    { name: 'Loan Signings', href: '/loan-signings' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'General Notary', href: '/general-notary' },
    { name: 'Business Services', href: '/business-services' },
    { name: 'Apostille', href: '/apostille' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' }
  ];

  const resourceLinks = [
    { name: 'Loan Signing Guide', href: '/blog/what-happens-loan-signing' },
    { name: 'Estate Planning Guide', href: '/blog/estate-planning-guides' },
    { name: 'Vehicle Title Guide', href: '/blog/ohio-car-title-transfer-requirements' },
    { name: 'Healthcare Guide', href: '/blog/hcpoa-living-will-guide' },
    { name: 'Apostille Guide', href: '/blog/how-apostille-works' },
    { name: 'What to Bring', href: '/blog/general-notary-what-to-bring' },
    { name: 'View All Resources →', href: '/resources' },
  ];

  const seasonalLinks = [
    { name: 'Tax Season Documents', href: '/tax-season-notary' },
    { name: 'Back to School', href: '/back-to-school-documents' },
    { name: 'Home Buying Season', href: '/home-buying-season-notary' },
    { name: 'Year-End Planning', href: '/year-end-planning-notary' }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-brand-gold font-semibold text-sm mb-2">
              We Come To You Anytime And Anywhere.
            </p>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Mobile notary services across {BUSINESS_CONFIG.serviceArea.primary}. 
              Certified, insured, and background-checked for your peace of mind.
            </p>
            <SocialMediaLinks className="justify-start" iconSize={18} variant="footer" />
            <div className="mt-3">
              <GoogleReviewsBadge variant="compact" className="text-white/80 hover:text-brand-gold [&_svg_path]:fill-current" />
            </div>
          </div>

          {/* Combined Links */}
          <div>
            <h3 className="font-semibold mb-3">Services & Info</h3>
            <div className="space-y-1.5 text-sm">
              {serviceLinks.slice(0, 4).map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              {quickLinks.slice(0, 3).map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <div className="space-y-1.5 text-sm">
              {resourceLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Links */}
          <div>
            <h3 className="font-semibold mb-3">Seasonal Services</h3>
            <div className="space-y-1.5 text-sm">
              {seasonalLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <a 
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="text-white/80 hover:text-brand-gold transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a 
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-white/80 hover:text-brand-gold transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span className="text-white/80">{BUSINESS_CONFIG.serviceArea.primary}</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Clock className="h-4 w-4 text-brand-gold" />
                <div className="text-white/80">
                  <div>{BUSINESS_CONFIG.hours.weekdays}</div>
                  <div className="text-brand-gold text-xs">Emergency 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold mb-3">Certified & Insured</h3>
            <div className="flex flex-wrap gap-2">
              <img 
                src={trustDeliveryLogo} 
                alt="Trust Delivery" 
                className="h-6 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src={lssLogo} 
                alt="LSS Certified" 
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src={nnaLogo} 
                alt="NNA Member" 
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src={nnaCertifiedLogo} 
                alt="Background Screened" 
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="text-sm text-white/80 mb-6 max-w-6xl mx-auto space-y-3">
            <p>
              <strong className="text-white">Pricing Disclaimer:</strong> All pricing is subject to confirmation based on service requirements, travel distance, and time. 
              Notary fees are regulated by Ohio state law. Mobile service fees vary by location and urgency. 
              Travel fees determined by service zone (see pricing page). Emergency/after-hours services subject to additional fees. 
              All pricing quoted before service confirmation.
            </p>
            
            <p>
              <strong className="text-white">Professional Credentials:</strong> {BUSINESS_CONFIG.name} is a commissioned Ohio notary public with professional liability insurance (E&O), 
              background screening verification, and National Notary Association (NNA) membership. All notarial acts performed in accordance with Ohio Revised Code 
              and Secretary of State regulations. Notary records maintained for minimum 5 years as required by law.
            </p>
            
            <p>
              <strong className="text-white">Service Areas:</strong> Proudly serving Cincinnati, Dayton, and surrounding communities throughout Southwest Ohio. 
              Mobile notary services available throughout Hamilton, Warren, Butler, Montgomery, Greene, and Clark counties.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">
              © 2024 {BUSINESS_CONFIG.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-white/80 hover:text-brand-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/80 hover:text-brand-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;