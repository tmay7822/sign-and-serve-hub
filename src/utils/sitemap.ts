// SITEMAP GENERATION UTILITY
// Generates sitemap.xml for SEO optimization

import { SERVICES, getEnabledServices } from '@/data/services';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog';
import { ROUTES_CITY, getHighPriorityRoutes } from '@/data/locations';
import { BUSINESS_CONFIG } from '@/config/business';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = BUSINESS_CONFIG.website;
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [];

  // Homepage - Highest Priority
  urls.push({
    url: `${baseUrl}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0
  });

  // Main Service Hubs - High Priority
  getEnabledServices().forEach(service => {
    urls.push({
      url: `${baseUrl}/${service.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9
    });
  });

  // Blog Home - High Priority
  urls.push({
    url: `${baseUrl}/blog`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8
  });

  // Blog Categories - High Priority
  BLOG_CATEGORIES.forEach(category => {
    urls.push({
      url: `${baseUrl}/blog/${category.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Blog Posts - Medium Priority
  BLOG_POSTS.forEach(post => {
    urls.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.publishDate,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  // High Priority Local Service Pages
  getHighPriorityRoutes().forEach(route => {
    urls.push({
      url: `${baseUrl}${route.path}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7
    });
  });

  // Medium Priority Local Service Pages
  ROUTES_CITY.filter(route => route.priority === 'medium').forEach(route => {
    urls.push({
      url: `${baseUrl}${route.path}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.5
    });
  });

  // Static Pages
  const staticPages = [
    { path: '/faq', priority: 0.6 },
    { path: '/contact', priority: 0.8 }
  ];

  staticPages.forEach(page => {
    urls.push({
      url: `${baseUrl}${page.path}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: page.priority
    });
  });

  // Legacy Pages - Lower Priority
  const legacyPages = [
    '/college-18-plus',
    '/personal-family',
    '/healthcare-notary',
    '/real-estate-notary',
    '/business-banking',
    '/legal-court',
    '/international-apostille',
    '/vehicles-dmv',
    '/insurance-retirement',
    '/wills-trusts-estates',
    '/other-notary'
  ];

  legacyPages.forEach(path => {
    urls.push({
      url: `${baseUrl}${path}`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.3
    });
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