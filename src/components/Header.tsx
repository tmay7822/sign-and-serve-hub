import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

import logoImage from '@/assets/signed-on-time-logo-transparent.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'General Notary', href: '/general-notary' },
    { name: 'Loan Signings', href: '/loan-signings' },
    { name: 'Estate Plans', href: '/estate-plans' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Apostille', href: '/apostille' },
    { name: 'Business Services', href: '/business-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      {/* Top bar with phone number */}
      <div className="bg-brand-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-3 w-3" />
            <span className="font-medium">{BUSINESS_CONFIG.phone}</span>
          </div>
          <div className="hidden sm:block text-xs text-white/80">
            Mobile Notary Services Available Today
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-professional sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-24 lg:h-32 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Balanced Layout */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-foreground hover:text-brand-blue hover:bg-brand-light/20 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button - Always Visible */}
            <div className="flex items-center gap-3">
              <Button 
                variant="cta" 
                size="sm" 
                className="hidden sm:flex text-xs lg:text-sm px-4 lg:px-6" 
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-brand-light/20 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-brand-navy" />
                ) : (
                  <Menu className="h-5 w-5 text-brand-navy" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Improved */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white">
              <nav className="py-3 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-brand-blue hover:bg-brand-light/20 transition-colors rounded-md mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-2 pt-3 pb-2">
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
                <div className="px-2 pb-2">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    asChild
                  >
                    <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                      Call {BUSINESS_CONFIG.phone}
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;