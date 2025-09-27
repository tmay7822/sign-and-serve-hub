import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import trustDeliveryLogo from '@/assets/trust-delivery-logo.png';
import lssLogo from '@/assets/lss-logo.png';
import nnaLogo from '@/assets/nna-logo.png';
import nnaCertifiedLogo from '@/assets/nna-certified-logo.png';

const Footer = () => {
  const serviceLinks = [
    { name: 'General Notary', href: '/general-notary' },
    { name: 'Loan Signings', href: '/loan-signings' },
    { name: 'Estate Plans', href: '/estate-plans' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Healthcare Notary', href: '/healthcare-notary' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Business Services', href: '/business-services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Mobile notary services across {BUSINESS_CONFIG.serviceArea.primary}. 
              Certified, insured, and background-checked for your peace of mind.
            </p>
            <SocialMediaLinks className="justify-start" iconSize={18} variant="footer" />
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
          <div className="text-center mb-6">
            <p className="text-white/80 text-sm leading-relaxed">
              <strong className="text-white">Pricing Disclaimer:</strong> Pricing is subject to State law and will be determined before services rendered and will be based on number of notarizations, travel, type of services, and emergency services.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">
              © 2024 {BUSINESS_CONFIG.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-brand-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-brand-gold text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;