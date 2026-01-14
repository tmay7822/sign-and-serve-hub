// PAGE CONTEXT DETECTION HOOK
// Detects current page type and provides contextual CTA configuration

import { useLocation } from 'react-router-dom';
import { SERVICES, getServiceBySlug } from '@/data/services';

export interface PageContext {
  pageType: 'home' | 'service' | 'blog' | 'blog-post' | 'location' | 'booking' | 'pricing' | 'other';
  serviceName?: string;
  serviceSlug?: string;
  serviceId?: string;
  locationName?: string;
  blogCategory?: string;
  ctaLabel: string;
  ctaAction: 'book' | 'quote' | 'call' | 'chat';
}

export const usePageContext = (): PageContext => {
  const { pathname } = useLocation();
  
  // Home page
  if (pathname === '/') {
    return {
      pageType: 'home',
      ctaLabel: 'Get Quote',
      ctaAction: 'quote'
    };
  }
  
  // Booking pages - user is already in booking flow
  if (pathname === '/book-now' || pathname.includes('/book')) {
    return {
      pageType: 'booking',
      ctaLabel: 'Call Now',
      ctaAction: 'call'
    };
  }
  
  // Pricing page
  if (pathname === '/pricing') {
    return {
      pageType: 'pricing',
      ctaLabel: 'Book Now',
      ctaAction: 'book'
    };
  }
  
  // Check for service pages (both main and location-specific)
  // Location-specific service pages: /service-slug/city-zip
  const locationServiceMatch = pathname.match(/^\/([^/]+)\/([^/]+)$/);
  if (locationServiceMatch) {
    const [, serviceSlug, locationPart] = locationServiceMatch;
    const service = getServiceBySlug(serviceSlug);
    if (service) {
      // Extract city name from location part (e.g., "cincinnati-45202" -> "Cincinnati")
      const cityName = locationPart
        .split('-')
        .slice(0, -1) // Remove ZIP code
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        pageType: 'location',
        serviceName: service.serviceName,
        serviceSlug: service.slug,
        serviceId: service.id,
        locationName: cityName || undefined,
        ctaLabel: cityName ? `Book in ${cityName}` : `Book ${service.serviceName}`,
        ctaAction: 'book'
      };
    }
  }
  
  // Main service pages
  const cleanPath = pathname.replace(/^\//, '');
  const serviceMatch = SERVICES.find(s => s.slug === cleanPath);
  if (serviceMatch) {
    return {
      pageType: 'service',
      serviceName: serviceMatch.serviceName,
      serviceSlug: serviceMatch.slug,
      serviceId: serviceMatch.id,
      ctaLabel: `Book ${serviceMatch.serviceName}`,
      ctaAction: 'book'
    };
  }
  
  // Blog category pages
  const blogCategoryPatterns = [
    { pattern: '/blog/loan-signing', category: 'loan-signing', service: 'loan-signings', label: 'Book Loan Signing' },
    { pattern: '/blog/real-estate', category: 'real-estate', service: 'real-estate', label: 'Book Real Estate' },
    { pattern: '/blog/estate-planning', category: 'estate-planning', service: 'estate-plans', label: 'Book Estate Planning' },
    { pattern: '/blog/apostille', category: 'apostille', service: 'apostille', label: 'Book Apostille' },
    { pattern: '/blog/general-notary', category: 'general-notary', service: 'general-notary', label: 'Book Notary' },
  ];
  
  for (const { pattern, category, service, label } of blogCategoryPatterns) {
    if (pathname.startsWith(pattern)) {
      const serviceData = getServiceBySlug(service);
      return {
        pageType: 'blog-post',
        blogCategory: category,
        serviceName: serviceData?.serviceName,
        serviceId: serviceData?.id,
        ctaLabel: label,
        ctaAction: 'book'
      };
    }
  }
  
  // General blog pages
  if (pathname.startsWith('/blog')) {
    return {
      pageType: pathname === '/blog' ? 'blog' : 'blog-post',
      ctaLabel: 'Get Started',
      ctaAction: 'quote'
    };
  }
  
  // Service areas / location pages
  if (pathname.startsWith('/service-areas') || pathname.startsWith('/locations')) {
    return {
      pageType: 'location',
      ctaLabel: 'Find Your Area',
      ctaAction: 'quote'
    };
  }
  
  // Default for other pages
  return {
    pageType: 'other',
    ctaLabel: 'Get Quote',
    ctaAction: 'quote'
  };
};
