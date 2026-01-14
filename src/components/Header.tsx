import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';
import { QuoteButton } from '@/components/QuoteButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

import logoImage from '@/assets/signed-on-time-logo-transparent.png';

// Service categories for mega menu
const serviceCategories = [
  {
    title: "Core Services",
    items: [
      { name: 'General Notary', href: '/general-notary', description: 'Acknowledgments, jurats, oaths' },
      { name: 'Loan Signings', href: '/loan-signings', description: 'Mortgage closings, refinances' },
      { name: 'Estate Plans', href: '/estate-plans', description: 'Wills, trusts, POA' },
    ]
  },
  {
    title: "Real Estate",
    items: [
      { name: 'Real Estate', href: '/real-estate', description: 'Deeds, property transfers' },
      { name: 'Real Estate Notary', href: '/real-estate-notary', description: 'Closing support' },
    ]
  },
  {
    title: "Specialized",
    items: [
      { name: 'Apostille', href: '/apostille', description: 'International authentication' },
      { name: 'Healthcare Notary', href: '/healthcare-notary', description: 'Hospital & care facilities' },
      { name: 'Business Services', href: '/business-services', description: 'Corporate documents' },
    ]
  }
];

// Mobile nav items (flat list)
const mobileNavItems = [
  { name: 'General Notary', href: '/general-notary' },
  { name: 'Loan Signings', href: '/loan-signings' },
  { name: 'Estate Plans', href: '/estate-plans' },
  { name: 'Real Estate', href: '/real-estate' },
  { name: 'Apostille', href: '/apostille' },
  { name: 'Healthcare Notary', href: '/healthcare-notary' },
  { name: 'Business Services', href: '/business-services' },
  { name: 'Documents', href: '/documents' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

// Regular nav items for desktop (non-mega-menu)
const regularNavItems = [
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with phone number - professional gradient */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy to-brand-blue/90 text-white py-2.5 px-4">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="hidden md:block text-sm text-white/90 font-medium tracking-wide">
            Professional Mobile Notary Services • Available Today
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4" />
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="hover:text-white/80 transition-colors"
            >
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header - refined styling */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - larger and more prominent */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-14 lg:h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation with Mega Menu */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-6">
              <NavigationMenu>
                <NavigationMenuList className="gap-0">
                  {/* Services Mega Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-brand-blue bg-transparent hover:bg-blue-50 data-[state=open]:bg-blue-50 h-auto"
                      aria-label="Services menu"
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[550px] p-5 bg-white" role="menu" aria-label="Service categories">
                        <div className="grid grid-cols-3 gap-4">
                          {serviceCategories.map((category) => (
                            <div key={category.title} role="group" aria-labelledby={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}>
                              <h4 
                                id={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
                                className="text-xs font-bold text-brand-navy mb-2 pb-1 border-b border-gray-200 uppercase tracking-wide"
                              >
                                {category.title}
                              </h4>
                              <ul className="space-y-1" role="menu">
                                {category.items.map((item) => (
                                  <li key={item.href} role="none">
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        role="menuitem"
                                        className="block p-2 rounded-md hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset transition-colors group"
                                      >
                                        <div className="text-sm font-medium text-gray-800 group-hover:text-brand-blue">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-tight">
                                          {item.description}
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                          <Link 
                            to="/documents" 
                            className="text-xs font-medium text-brand-blue hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded px-1"
                          >
                            View All Documents →
                          </Link>
                          <Link 
                            to="/pricing" 
                            className="text-xs font-medium text-brand-blue hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded px-1"
                          >
                            See Pricing →
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Regular nav items with underline animation */}
                  {regularNavItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link 
                        to={item.href}
                        className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-navy rounded-lg transition-all duration-200 whitespace-nowrap inline-flex items-center focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
                          after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-3/4"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* CTA Section - refined with glow effect */}
            <div className="flex items-center gap-4">
              <QuoteButton 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex bg-brand-navy text-white hover:bg-brand-blue border-brand-navy font-semibold px-5 py-2 shadow-md hover:shadow-[0_4px_20px_rgba(26,54,93,0.35)] transition-all duration-300"
                useCalculator={true}
              >
                Get Quote
              </QuoteButton>

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
              <nav className="py-4 space-y-1 max-h-[70vh] overflow-y-auto" role="navigation" aria-label="Mobile navigation">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:text-brand-blue hover:bg-blue-50 transition-colors mx-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 pb-2 border-t border-gray-100 mt-4">
                  <QuoteButton 
                    variant="cta" 
                    className="w-full font-semibold py-3 shadow-md"
                    useCalculator={true}
                    onAfterAction={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </QuoteButton>
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