// SITEMAP GENERATION UTILITY
// Generates sitemap.xml from PRERENDER_ROUTES for SEO optimization

import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';
import { BUSINESS_CONFIG } from '@/config/business';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const getPriorityForRoute = (path: string): { priority: number; changefreq: SitemapUrl['changefreq'] } => {
  // Homepage - Highest Priority
  if (path === '/') {
    return { priority: 1.0, changefreq: 'weekly' };
  }
  
  // Main Service Hubs - High Priority
  const serviceHubs = [
    '/general-notary', '/loan-signings', '/estate-plans', '/real-estate', 
    '/apostille', '/business-services', '/college-18-plus', '/personal-family',
    '/healthcare-notary', '/real-estate-notary', '/business-banking', '/legal-court',
    '/international-apostille', '/vehicles-dmv', '/insurance-retirement', 
    '/wills-trusts-estates', '/other-notary'
  ];
  if (serviceHubs.includes(path)) {
    return { priority: 0.9, changefreq: 'monthly' };
  }
  
  // Blog Home - High Priority
  if (path === '/blog') {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  // Blog Categories - High Priority
  const blogCategories = [
    '/blog/general-notary-guides', '/blog/loan-signing-guides', 
    '/blog/real-estate-guides', '/blog/estate-planning-guides',
    '/blog/apostille-guides', '/blog/business-guides', '/blog/healthcare-guides'
  ];
  if (blogCategories.includes(path)) {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  // Blog Posts - Medium Priority
  if (path.startsWith('/blog/')) {
    return { priority: 0.6, changefreq: 'monthly' };
  }
  
  // Location Pages - Medium-High Priority
  if (path.includes('notary') && (path.includes('-45') || path.includes('county'))) {
    return { priority: 0.7, changefreq: 'monthly' };
  }
  
  // Contact, Book Now - High Priority
  if (path === '/contact' || path === '/book-now') {
    return { priority: 0.8, changefreq: 'monthly' };
  }
  
  // Static Pages
  const staticPages: Record<string, number> = {
    '/faq': 0.6,
    '/about': 0.5,
    '/pricing': 0.7,
    '/service-areas': 0.6,
    '/privacy-policy': 0.3,
    '/terms-of-service': 0.3
  };
  if (staticPages[path] !== undefined) {
    return { priority: staticPages[path], changefreq: 'monthly' };
  }
  
  // Default
  return { priority: 0.5, changefreq: 'monthly' };
};

export const generateSitemap = (): string => {
  const baseUrl = BUSINESS_CONFIG.website;
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = PRERENDER_ROUTES.map(path => {
    const { priority, changefreq } = getPriorityForRoute(path);
    return {
      url: `${baseUrl}${path === '/' ? '' : path}`,
      lastmod: today,
      changefreq,
      priority
    };
  });

  // Generate XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</urlset>';
  
  const xmlUrls = urls.map(urlObj => `
  <url>
    <loc>${urlObj.url}</loc>
    <lastmod>${urlObj.lastmod}</lastmod>
    <changefreq>${urlObj.changefreq}</changefreq>
    <priority>${urlObj.priority}</priority>
  </url>`).join('');

  return `${xmlHeader}${xmlUrls}\n${xmlFooter}`;
};

export const generateRobotsTxt = (): string => {
  const baseUrl = BUSINESS_CONFIG.website;
  
  return `User-agent: *
Allow: /

# Disallow query parameters and admin pages
Disallow: /*?*
Disallow: /admin/
Disallow: /api/
Disallow: /.well-known/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1`;
};
