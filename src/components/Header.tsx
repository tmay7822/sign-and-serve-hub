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

import logoImage from '@/assets/signed-on-time-logo-transparent.png';

// Simple services list for dropdown
const topServices = [
  { name: 'General Notary', href: '/general-notary', description: 'Affidavits, oaths & acknowledgments' },
  { name: 'Car Title & DMV', href: '/vehicles-dmv', description: 'Title transfers & bills of sale' },
  { name: 'Loan Signings', href: '/loan-signings', description: 'Mortgage closings & refinances' },
  { name: 'Estate Plans & POA', href: '/estate-plans', description: 'Wills, trusts & power of attorney' },
  { name: 'Healthcare Notary', href: '/healthcare-notary', description: 'Hospital & bedside notarization' },
];

const moreServices = [
  { name: 'Real Estate Notary', href: '/real-estate-notary', description: 'Deeds, closings & title work' },
  { name: 'Wills, Trusts & Estates', href: '/wills-trusts-estates', description: 'Probate & estate documents' },
  { name: 'Legal & Court', href: '/legal-court', description: 'Court filings & legal documents' },
  { name: 'Insurance & Retirement', href: '/insurance-retirement', description: 'Beneficiary & policy forms' },
  { name: 'College & 18+', href: '/college-18-plus', description: 'Young adult starter documents' },
  { name: 'Personal & Family', href: '/personal-family', description: 'Travel consent & family docs' },
  { name: 'Other Notary', href: '/other-notary', description: 'Specialty & unique documents' },
];

// Mobile nav: intent options first, then "More"
const mobileIntentItems = [
  { name: 'I Need a Document Notarized', href: '/general-notary' },
  { name: "I'm Buying or Selling a Car", href: '/vehicles-dmv' },
  { name: 'I Have a Real Estate Closing', href: '/loan-signings' },
  { name: 'I Need Hospital or Bedside Notary', href: '/healthcare-notary' },
];

const mobileMoreItems = [
  { name: 'Real Estate', href: '/real-estate' },
  { name: 'Real Estate Notary', href: '/real-estate-notary' },
  { name: 'Business Services', href: '/business-services' },
  { name: 'Apostille', href: '/apostille' },
  { name: 'Personal & Family', href: '/personal-family' },
  { name: 'Wills, Trusts & Estates', href: '/wills-trusts-estates' },
  { name: 'Legal & Court', href: '/legal-court' },
  { name: 'Insurance & Retirement', href: '/insurance-retirement' },
  { name: 'College & 18+', href: '/college-18-plus' },
  { name: 'Other Notary', href: '/other-notary' },
  { name: 'About Us', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Top bar with phone number */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-navy to-brand-blue/90 text-white py-2.5 px-4">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="hidden md:block text-xs text-white/80 font-medium tracking-wide">
            Signed On Time — We Come To You Anytime And Anywhere
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

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-24 lg:h-32">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 -my-4 lg:-my-8">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-28 lg:h-44 w-auto max-h-none"
                />
              </Link>
            </div>

            {/* Desktop Navigation — simplified to 3 items */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center bg-gray-50/60 rounded-full px-2 py-1.5 border border-gray-100">
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">
                    {/* Services — simple dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                        aria-label="Services menu"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[340px] p-5 bg-white" role="menu" aria-label="Our services">
                          <div className="space-y-1">
                            {topServices.map((service) => (
                              <NavigationMenuLink asChild key={service.href}>
                                <Link
                                  to={service.href}
                                  role="menuitem"
                                  className="block p-3 rounded-lg hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset transition-all duration-200 group"
                                >
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 leading-tight mt-0.5">
                                    {service.description}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <Link 
                              to="/pricing" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline"
                            >
                              See Pricing →
                            </Link>
                            <Link 
                              to="/service-areas" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline"
                            >
                              Service Areas →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Resources dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                        aria-label="Resources menu"
                      >
                        Resources
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[380px] p-5 bg-white" role="menu" aria-label="Guides and resources">
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Guides by Service</div>
                          <div className="space-y-1">
                            {[
                              { name: 'Loan Signing Guide', href: '/blog/what-happens-loan-signing' },
                              { name: 'Estate Planning Guide', href: '/blog/estate-planning-guides' },
                              { name: 'Vehicle Title Guide', href: '/blog/ohio-car-title-transfer-requirements' },
                              { name: 'Healthcare Directives', href: '/blog/hcpoa-living-will-guide' },
                              { name: 'Apostille Guide', href: '/blog/how-apostille-works' },
                            ].map((item) => (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link to={item.href} role="menuitem" className="block p-2.5 rounded-lg hover:bg-blue-50 text-sm font-semibold text-gray-800 hover:text-brand-blue transition-colors">
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4 mb-2">Helpful Guides</div>
                          <div className="space-y-1">
                            {[
                              { name: 'What to Bring', href: '/blog/general-notary-what-to-bring' },
                              { name: 'Hospital Notarizations', href: '/blog/hospital-notary-what-to-expect' },
                              { name: 'After Hours Service', href: '/blog/after-hours-emergency-notary' },
                              { name: 'FAQ', href: '/faq' },
                            ].map((item) => (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link to={item.href} role="menuitem" className="block p-2.5 rounded-lg hover:bg-blue-50 text-sm font-semibold text-gray-800 hover:text-brand-blue transition-colors">
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link to="/resources" className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline">
                              View All Resources →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* About & Reviews — single link */}
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about"
                          className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white h-auto rounded-full transition-all duration-200 inline-flex items-center"
                        >
                          About & Reviews
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Contact — single link */}
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/contact"
                          className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white h-auto rounded-full transition-all duration-200 inline-flex items-center"
                        >
                          Contact
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <Button size="lg" className="hidden sm:flex bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-7 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full" asChild>
                <Link to="/book-now">Book Now</Link>
              </Button>
              <QuoteButton 
                variant="outline" 
                size="lg" 
                className="hidden sm:flex bg-brand-navy text-white hover:bg-brand-blue border-brand-navy font-bold px-7 py-3 text-base shadow-lg hover:shadow-xl hover:shadow-brand-navy/30 transition-all duration-300 hover:scale-105 rounded-full"
                useCalculator={true}
              >
                Get Quote
              </QuoteButton>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-gray-700" />
                ) : (
                  <Menu className="h-7 w-7 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation — simplified with intent options */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
              <nav className="py-4 max-h-[70vh] overflow-y-auto" role="navigation" aria-label="Mobile navigation">
                {/* Intent-based options at top */}
                <div className="space-y-1 mb-4">
                  {mobileIntentItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-6 py-4 text-base font-semibold text-foreground hover:text-primary hover:bg-blue-50 transition-colors mx-2 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Resources in mobile */}
                <div className="border-t border-gray-100 pt-3 mx-4 mb-3">
                  <div className="px-2 py-2 text-sm font-semibold text-muted-foreground">Resources</div>
                  <div className="space-y-1">
                    {[
                      { name: 'Loan Signing Guide', href: '/blog/what-happens-loan-signing' },
                      { name: 'Vehicle Title Guide', href: '/blog/ohio-car-title-transfer-requirements' },
                      { name: 'What to Bring', href: '/blog/general-notary-what-to-bring' },
                      { name: 'View All Resources', href: '/resources' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* More section */}
                <div className="border-t border-gray-100 pt-3 mx-4">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-muted-foreground w-full"
                    aria-expanded={showMore}
                  >
                    More
                    <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
                  </button>
                  {showMore && (
                    <div className="space-y-1 mt-1">
                      {mobileMoreItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="px-4 pt-4 pb-2 border-t border-gray-100 mt-3 space-y-3">
                  <Button 
                    className="w-full font-semibold py-3 shadow-md bg-destructive hover:bg-destructive/90 text-destructive-foreground" 
                    asChild
                  >
                    <Link to="/book-now" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                  </Button>
                  <QuoteButton 
                    variant="cta" 
                    className="w-full font-semibold py-3 shadow-md"
                    useCalculator={true}
                    onAfterAction={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </QuoteButton>
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
