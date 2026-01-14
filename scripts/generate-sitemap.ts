// SITEMAP GENERATION SCRIPT
// Run during build to generate sitemap.xml from centralized PRERENDER_ROUTES
// Uses the source of truth from src/config/prerenderRoutes.ts

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Read routes from prerenderRoutes.ts (parse the file to extract routes)
const prerenderRoutesPath = resolve(process.cwd(), 'src/config/prerenderRoutes.ts');
const prerenderRoutesContent = readFileSync(prerenderRoutesPath, 'utf-8');

// Extract routes from the TypeScript file
const routeMatches = prerenderRoutesContent.match(/['"`]\/[^'"`]*['"`]/g) || [];
const PRERENDER_ROUTES = routeMatches.map(match => match.slice(1, -1));

const BUSINESS_WEBSITE = 'https://www.signedontime.com';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface RouteStats {
  total: number;
  homepage: number;
  serviceHubs: number;
  blogHome: number;
  blogCategories: number;
  blogPosts: number;
  locationBlogCounty: number;
  locationBlogCity: number;
  locationPages: number;
  servicePages: number;
  staticPages: number;
  other: number;
}

const categorizeRoute = (path: string): keyof Omit<RouteStats, 'total'> => {
  if (path === '/') return 'homepage';
  
  const serviceHubs = [
    '/general-notary', '/loan-signings', '/estate-plans', '/real-estate', 
    '/apostille', '/business-services', '/college-18-plus', '/personal-family',
    '/healthcare-notary', '/real-estate-notary', '/business-banking', '/legal-court',
    '/international-apostille', '/vehicles-dmv', '/insurance-retirement', 
    '/wills-trusts-estates', '/other-notary'
  ];
  if (serviceHubs.includes(path)) return 'serviceHubs';
  
  if (path === '/blog') return 'blogHome';
  
  // Blog categories (ending in -guides as direct children of /blog)
  if (path.match(/^\/blog\/[a-z-]+-guides$/) && !path.includes('-county-') && !path.includes('-ohio')) {
    return 'blogCategories';
  }
  
  // Location blog posts - county level
  if (path.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-county-ohio$/)) {
    return 'locationBlogCounty';
  }
  
  // Location blog posts - city level
  if (path.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-ohio$/) && !path.includes('-county-')) {
    return 'locationBlogCity';
  }
  
  // Regular blog posts
  if (path.startsWith('/blog/')) return 'blogPosts';
  
  // Service pages (county/city)
  if (path.startsWith('/service/')) return 'servicePages';
  
  // Location pages (notary-city-zip format)
  if (path.match(/^\/[a-z-]+-\d{5}$/) || path.includes('notary-') || path.includes('signing-') || path.includes('poa-') || path.includes('wills-')) {
    return 'locationPages';
  }
  
  // Static pages
  const staticPages = ['/faq', '/about', '/contact', '/pricing', '/documents', '/service-areas', 
    '/book-now', '/privacy-policy', '/terms-of-service', '/tax-season-notary', 
    '/back-to-school-documents', '/home-buying-season-notary', '/year-end-planning-notary'];
  if (staticPages.includes(path)) return 'staticPages';
  
  return 'other';
};

const getPriorityForRoute = (path: string): { priority: number; changefreq: SitemapUrl['changefreq'] } => {
  const category = categorizeRoute(path);
  
  switch (category) {
    case 'homepage':
      return { priority: 1.0, changefreq: 'weekly' };
    case 'serviceHubs':
      return { priority: 0.9, changefreq: 'monthly' };
    case 'blogHome':
      return { priority: 0.8, changefreq: 'weekly' };
    case 'blogCategories':
      return { priority: 0.8, changefreq: 'weekly' };
    case 'blogPosts':
      return { priority: 0.6, changefreq: 'monthly' };
    case 'locationBlogCounty':
      return { priority: 0.7, changefreq: 'monthly' };
    case 'locationBlogCity':
      return { priority: 0.6, changefreq: 'monthly' };
    case 'servicePages':
      return { priority: 0.7, changefreq: 'monthly' };
    case 'locationPages':
      return { priority: 0.7, changefreq: 'monthly' };
    case 'staticPages':
      if (path === '/contact' || path === '/book-now') {
        return { priority: 0.8, changefreq: 'monthly' };
      }
      if (path === '/pricing') {
        return { priority: 0.7, changefreq: 'monthly' };
      }
      if (path === '/privacy-policy' || path === '/terms-of-service') {
        return { priority: 0.3, changefreq: 'yearly' };
      }
      return { priority: 0.5, changefreq: 'monthly' };
    default:
      return { priority: 0.5, changefreq: 'monthly' };
  }
};

const generateSitemap = (): string => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = PRERENDER_ROUTES.map(path => {
    const { priority, changefreq } = getPriorityForRoute(path);
    return {
      url: `${BUSINESS_WEBSITE}${path === '/' ? '' : path}`,
      lastmod: today,
      changefreq,
      priority
    };
  });

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

const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Disallow query parameters and admin pages
Disallow: /*?*
Disallow: /admin/
Disallow: /api/
Disallow: /.well-known/

# Sitemap location
Sitemap: ${BUSINESS_WEBSITE}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1`;
};

const generateStats = (): RouteStats => {
  const stats: RouteStats = {
    total: PRERENDER_ROUTES.length,
    homepage: 0,
    serviceHubs: 0,
    blogHome: 0,
    blogCategories: 0,
    blogPosts: 0,
    locationBlogCounty: 0,
    locationBlogCity: 0,
    locationPages: 0,
    servicePages: 0,
    staticPages: 0,
    other: 0
  };

  PRERENDER_ROUTES.forEach(route => {
    const category = categorizeRoute(route);
    stats[category]++;
  });

  return stats;
};

// Generate and write files
const sitemap = generateSitemap();
const robots = generateRobotsTxt();
const stats = generateStats();

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(process.cwd(), 'public/robots.txt'), robots);

// Output verification summary
console.log('\n============================================');
console.log('SITEMAP GENERATION REPORT');
console.log('============================================');
console.log(`✅ Generated sitemap.xml with ${stats.total} URLs`);
console.log('✅ Generated robots.txt');
console.log('');
console.log('ROUTE BREAKDOWN:');
console.log('--------------------------------------------');
console.log(`Homepage:                 ${stats.homepage}`);
console.log(`Service Hubs:             ${stats.serviceHubs}`);
console.log(`Blog Home:                ${stats.blogHome}`);
console.log(`Blog Categories:          ${stats.blogCategories}`);
console.log(`Blog Posts:               ${stats.blogPosts}`);
console.log(`Location Blog (County):   ${stats.locationBlogCounty}`);
console.log(`Location Blog (City):     ${stats.locationBlogCity}`);
console.log(`Service Pages:            ${stats.servicePages}`);
console.log(`Location Pages:           ${stats.locationPages}`);
console.log(`Static Pages:             ${stats.staticPages}`);
console.log(`Other:                    ${stats.other}`);
console.log('--------------------------------------------');
console.log(`TOTAL:                    ${stats.total}`);
console.log('============================================\n');
