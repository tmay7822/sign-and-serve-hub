import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

import logoImage from '@/assets/signed-on-time-logo-transparent.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
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
      <div className="bg-brand-navy text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-medium">{BUSINESS_CONFIG.phone}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-professional sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-32 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-brand-blue transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="cta" size="sm" className="ml-4" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brand-navy" />
              ) : (
                <Menu className="h-6 w-6 text-brand-navy" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-foreground hover:text-brand-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
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