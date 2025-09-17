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
      <div className="bg-brand-navy text-white py-3 px-4 border-b border-brand-navy/20">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="hover:text-white/80 transition-colors"
            >
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
          <div className="hidden md:block text-sm text-white/90 font-medium">
            Professional Mobile Notary Services • Available Today
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-20 lg:h-24 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-all duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <Button 
                variant="cta" 
                size="sm" 
                className="hidden sm:flex font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all" 
                asChild
              >
                <Link to="/contact">Get Quote</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
              <nav className="py-4 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors mx-2 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 pb-2 border-t border-gray-100 mt-4">
                  <Button variant="cta" className="w-full font-semibold py-3 shadow-md" asChild>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
                <div className="px-4 pb-4">
                  <Button 
                    variant="outline" 
                    className="w-full font-semibold py-3 border-2" 
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