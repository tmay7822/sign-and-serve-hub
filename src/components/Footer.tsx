import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';

const Footer = () => {
  const serviceLinks = [
    { name: 'General Notary', href: '/general-notary' },
    { name: 'Loan Signings', href: '/loan-signings' },
    { name: 'Estate Plans', href: '/estate-plans' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Business Services', href: '/business-services' }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-white/80 mb-6 leading-relaxed">
              {BUSINESS_CONFIG.name} provides mobile notary and loan signing services across {BUSINESS_CONFIG.serviceArea.primary}. 
              Background-checked, insured, and certified, we deliver accurate documents on your schedule with 
              professional excellence and five-star service.
            </p>
            <SocialMediaLinks className="justify-start" iconSize={20} variant="footer" />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-gold" />
                <a 
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="text-white/80 hover:text-brand-gold transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-gold" />
                <a 
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="text-white/80 hover:text-brand-gold transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-gold" />
                <span className="text-white/80">{BUSINESS_CONFIG.serviceArea.primary} Area</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-gold mt-0.5" />
                <div>
                  <div>Monday - Friday: {BUSINESS_CONFIG.hours.weekdays}</div>
                  <div>Saturday - Sunday: {BUSINESS_CONFIG.hours.weekends}</div>
                  <div className="mt-2 text-brand-gold font-medium">
                    Emergency services available {BUSINESS_CONFIG.hours.emergency}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  );
};

export default Footer;