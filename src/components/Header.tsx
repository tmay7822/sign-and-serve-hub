import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, MapPin, FileText, Users, HelpCircle } from 'lucide-react';
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

// Service categories for mega menu - 5 logical groupings (ordered by priority)
const serviceCategories = [
  {
    title: "Vehicles & DMV",
    items: [
      { name: 'Car Title & Bill of Sale', href: '/vehicles-dmv', description: 'Title transfers, auto sales' },
      { name: 'DMV Documents', href: '/vehicles-dmv', description: 'Registrations, lien releases' },
    ]
  },
  {
    title: "Estate & Healthcare",
    items: [
      { name: 'Healthcare Notary', href: '/healthcare-notary', description: 'Hospital & care facilities' },
      { name: 'Estate Planning & POA', href: '/estate-plans', description: 'Wills, trusts, POA' },
    ]
  },
  {
    title: "Real Estate & Loans",
    items: [
      { name: 'Loan Signings', href: '/loan-signings', description: 'Mortgage closings, refinances' },
      { name: 'Real Estate', href: '/real-estate', description: 'Deeds, property transfers' },
      { name: 'Real Estate Notary', href: '/real-estate-notary', description: 'Closing support' },
    ]
  },
  {
    title: "General Notary",
    items: [
      { name: 'General Notary', href: '/general-notary', description: 'Acknowledgments, jurats, oaths' },
      { name: 'Personal & Family', href: '/personal-family', description: 'Travel consent, family docs' },
      { name: 'Legal & Court', href: '/legal-court', description: 'Court filings, affidavits' },
    ]
  },
  {
    title: "Business & International",
    items: [
      { name: 'Business Services', href: '/business-services', description: 'Contracts & corporate docs' },
      { name: 'Apostille', href: '/apostille', description: 'International authentication' },
    ]
  }
];

// Service Areas dropdown content
const serviceAreasContent = [
  { name: 'Hamilton County', href: '/hamilton-county', description: 'Cincinnati & surrounding areas' },
  { name: 'Warren County', href: '/warren-county', description: 'Mason, Lebanon, Springboro' },
  { name: 'Butler County', href: '/butler-county', description: 'West Chester, Fairfield' },
  { name: 'Montgomery County', href: '/montgomery-county', description: 'Dayton & suburbs' },
];

// Blog dropdown content
const blogContent = [
  { name: 'Loan Signing Guides', href: '/blog/loan-signing', description: 'Tips for closings' },
  { name: 'Estate Planning', href: '/blog/estate-planning', description: 'Wills, trusts & POA' },
  { name: 'Apostille Info', href: '/blog/apostille', description: 'International docs' },
  { name: 'General Notary', href: '/blog/general-notary', description: 'Notary basics' },
];

// About dropdown content
const aboutContent = [
  { name: 'Our Story', href: '/about', description: 'Meet Signed On Time' },
  { name: 'Reviews', href: '/reviews', description: '35 verified Google reviews' },
  { name: 'Pricing', href: '/pricing', description: 'Transparent rates' },
  { name: 'Contact Us', href: '/contact', description: 'Get in touch' },
];

// FAQ dropdown content
const faqContent = [
  { question: 'What ID do I need?', answer: 'Valid government-issued photo ID' },
  { question: 'How much does it cost?', answer: 'Starting at $25 + travel fee' },
  { question: 'Do you come to hospitals?', answer: 'Yes, we serve all facilities' },
];

// Mobile nav items (flat list) - ordered by priority: DMV, Healthcare, POA, Loan, Real Estate first
const mobileNavItems = [
  // Most Requested - TOP
  { name: 'Car Title & Bill of Sale', href: '/vehicles-dmv' },
  { name: 'Healthcare Notary', href: '/healthcare-notary' },
  { name: 'Estate Planning & POA', href: '/estate-plans' },
  { name: 'Loan Signings', href: '/loan-signings' },
  { name: 'Real Estate', href: '/real-estate' },
  // Secondary
  { name: 'General Notary', href: '/general-notary' },
  { name: 'Personal & Family', href: '/personal-family' },
  { name: 'Business Services', href: '/business-services' },
  // Apostille near bottom
  { name: 'Apostille', href: '/apostille' },
  // Other navigation
  { name: 'Documents', href: '/documents' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with phone number - professional gradient */}
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

      {/* Main header - refined styling with larger elements */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-24 lg:h-32">
            {/* Logo - larger and more prominent */}
            <div className="flex items-center flex-shrink-0 -my-4 lg:-my-8">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src={logoImage} 
                  alt={BUSINESS_CONFIG.logo.alt}
                  className="h-28 lg:h-44 w-auto max-h-none"
                />
              </Link>
            </div>

            {/* Desktop Navigation with Mega Menu - enhanced styling */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center bg-gray-50/60 rounded-full px-2 py-1.5 border border-gray-100">
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">
                    {/* Services Mega Menu */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                        aria-label="Services menu"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[850px] p-6 bg-white" role="menu" aria-label="Service categories">
                          <div className="grid grid-cols-5 gap-4">
                            {serviceCategories.map((category) => (
                              <div key={category.title} role="group" aria-labelledby={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                <h4 
                                  id={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="text-xs font-bold text-brand-navy mb-3 pb-2 border-b-2 border-brand-blue/20 uppercase tracking-wider"
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
                                          className="block p-2.5 rounded-lg hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset transition-all duration-200 group"
                                        >
                                          <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                                            {item.name}
                                          </div>
                                          <div className="text-xs text-gray-500 leading-tight mt-0.5">
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
                          <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <Link 
                              to="/documents" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded px-2 py-1 transition-colors"
                            >
                              View All Documents →
                            </Link>
                            <Link 
                              to="/pricing" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded px-2 py-1 transition-colors"
                            >
                              See Pricing →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Service Areas Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                      >
                        Service Areas
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-5 bg-white">
                          <div className="flex items-center gap-2 mb-4">
                            <MapPin className="h-5 w-5 text-brand-blue" />
                            <h4 className="text-sm font-bold text-brand-navy">Areas We Serve</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Mobile notary services across Greater Cincinnati, Dayton, and surrounding areas.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {serviceAreasContent.map((area) => (
                              <NavigationMenuLink asChild key={area.href}>
                                <Link
                                  to={area.href}
                                  className="block p-3 rounded-lg hover:bg-blue-50 transition-all group"
                                >
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue">
                                    {area.name}
                                  </div>
                                  <div className="text-xs text-gray-500">{area.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link 
                              to="/service-areas" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline"
                            >
                              View All Service Areas →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Blog Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                      >
                        Blog
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[380px] p-5 bg-white">
                          <div className="flex items-center gap-2 mb-4">
                            <FileText className="h-5 w-5 text-brand-blue" />
                            <h4 className="text-sm font-bold text-brand-navy">Notary Resources</h4>
                          </div>
                          <div className="space-y-1">
                            {blogContent.map((item) => (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link
                                  to={item.href}
                                  className="block p-3 rounded-lg hover:bg-blue-50 transition-all group"
                                >
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-500">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link 
                              to="/blog" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline"
                            >
                              View All Articles →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* About Us Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                      >
                        About Us
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[320px] p-5 bg-white">
                          <div className="flex items-center gap-2 mb-4">
                            <Users className="h-5 w-5 text-brand-blue" />
                            <h4 className="text-sm font-bold text-brand-navy">About Signed On Time</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Professional mobile notary services with certified signing agents serving Ohio.
                          </p>
                          <div className="space-y-1">
                            {aboutContent.map((item) => (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link
                                  to={item.href}
                                  className="block p-3 rounded-lg hover:bg-blue-50 transition-all group"
                                >
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-blue">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-500">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* FAQ Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="px-5 py-2.5 text-[15px] font-bold text-gray-700 hover:text-brand-navy bg-transparent hover:bg-white data-[state=open]:bg-white data-[state=open]:text-brand-navy h-auto rounded-full transition-all duration-200 shadow-none data-[state=open]:shadow-sm"
                      >
                        FAQ
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[350px] p-5 bg-white">
                          <div className="flex items-center gap-2 mb-4">
                            <HelpCircle className="h-5 w-5 text-brand-blue" />
                            <h4 className="text-sm font-bold text-brand-navy">Common Questions</h4>
                          </div>
                          <div className="space-y-3">
                            {faqContent.map((item, index) => (
                              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <div className="text-sm font-semibold text-gray-800">{item.question}</div>
                                <div className="text-xs text-gray-600 mt-1">{item.answer}</div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link 
                              to="/faq" 
                              className="text-sm font-semibold text-brand-blue hover:text-brand-navy hover:underline"
                            >
                              View All FAQs →
                            </Link>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>

            {/* CTA Section - enhanced with prominent styling */}
            <div className="flex items-center gap-4">
              <QuoteButton 
                variant="outline" 
                size="lg" 
                className="hidden sm:flex bg-brand-navy text-white hover:bg-brand-blue border-brand-navy font-bold px-7 py-3 text-base shadow-lg hover:shadow-xl hover:shadow-brand-navy/30 transition-all duration-300 hover:scale-105 rounded-full"
                useCalculator={true}
              >
                Get Quote
              </QuoteButton>

              {/* Mobile menu button - larger touch target */}
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