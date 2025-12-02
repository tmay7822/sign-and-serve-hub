// SITEMAP GENERATION SCRIPT
// Run during build to generate sitemap.xml from PRERENDER_ROUTES

import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Import routes directly (relative paths for script execution)
const PRERENDER_ROUTES = [
  '/',
  '/book-now',
  '/general-notary',
  '/loan-signings',
  '/estate-plans',
  '/real-estate',
  '/apostille',
  '/business-services',
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
  '/other-notary',
  '/faq',
  '/about',
  '/contact',
  '/pricing',
  '/service-areas',
  '/privacy-policy',
  '/terms-of-service',
  '/blog',
  '/blog/loan-signing',
  '/blog/estate-planning',
  '/blog/real-estate',
  '/blog/apostille',
  '/blog/business',
  '/blog/general-notary',
  '/blog/healthcare',
  '/blog/what-happens-loan-signing',
  '/blog/scanback-timing-explained',
  '/blog/refi-heloc-notary-errors-to-avoid-ohio',
  '/blog/ohio-buyer-seller-loan-signing-checklist',
  '/blog/hospital-rehab-loan-signings-ohio',
  '/blog/scanbacks-printing-mobile-loan-closings-ohio',
  '/blog/seller-signing-day',
  '/blog/wills-trusts-poa-checklist',
  '/blog/poa-pitfalls',
  '/blog/witness-requirements',
  '/blog/ohio-wills-poa-what-notaries-can-and-cant-do',
  '/blog/witnesses-for-wills-poa-ohio-local-norms',
  '/blog/small-estate-affidavit-executor-tips',
  '/blog/certification-of-trust-notary-ohio',
  '/blog/hcpoa-living-will-guide',
  '/blog/deeds-explained',
  '/blog/title-transfer-checklist',
  '/blog/contracts-title-authority-notary-ohio',
  '/blog/how-apostille-works',
  '/blog/apostille-processing-times',
  '/blog/apostille-school-docs',
  '/blog/translator-affidavits',
  '/blog/business-contract-notarization',
  '/blog/investor-notarizations',
  '/blog/vendor-packets-affidavits-notary-ohio',
  '/blog/permits-licensing-notary-same-day-ohio',
  '/blog/general-notary-what-to-bring',
  '/blog/mobile-vs-shipping-store',
  '/blog/notary-fees-explained',
  '/blog/what-notaries-cannot-do',
  '/blog/notary-vs-ron-rin',
  '/blog/affidavit-jurat-acknowledgment',
  '/blog/expired-id-options',
  '/blog/name-mismatch-aka-affidavit',
  '/blog/after-hours-emergency-notary',
  '/blog/international-travel-consent',
  '/blog/jail-notarization-process',
  '/blog/college-18-plus-starter-pack',
  '/blog/remote-hire-i9-steps',
  '/blog/hr-i9-vs-notary-ohio',
  '/blog/beneficiary-change-forms',
  '/blog/trust-certification-banking',
  '/blog/hospital-notary-what-to-expect',
  '/blog/hospital-notary-checklist-ohio',
  '/blog/hospital-notary-id-problems-ohio',
  '/blog/urgent-notary-same-day-ohio-hospitals',
  '/blog/healthcare-directives-notary-ohio-bedside',
  '/blog/senior-communities-notary-poa-healthcare-ohio',
  '/general-notary-blue-ash-45242',
  '/general-notary-hamilton-cincinnati',
  '/loan-signing-dayton-montgomery',
  '/notary-cincinnati-45202',
  '/notary-dayton-45402',
  '/notary-kettering-45429',
  '/notary-lebanon-45036',
  '/notary-mason-45040',
  '/notary-springdale-45246',
  '/notary-west-chester-45069',
  '/poa-warren-lebanon',
  '/wills-estates-warren-mason',
  // 16 new location pages
  '/notary-fairfield-45014',
  '/notary-hamilton-45011',
  '/notary-middletown-45042',
  '/notary-oxford-45056',
  '/notary-miamisburg-45342',
  '/notary-centerville-45459',
  '/notary-huber-heights-45424',
  '/notary-troy-45373',
  '/notary-loveland-45140',
  '/notary-milford-45150',
  '/notary-batavia-45103',
  '/notary-wilmington-45177',
  '/notary-hillsboro-45133',
  '/notary-georgetown-45121',
  '/notary-xenia-45385',
  '/notary-beavercreek-45431',
];

const BUSINESS_WEBSITE = 'https://signedontime.com';

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const getPriorityForRoute = (path: string): { priority: number; changefreq: SitemapUrl['changefreq'] } => {
  if (path === '/') {
    return { priority: 1.0, changefreq: 'weekly' };
  }
  
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
  
  if (path === '/blog') {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  const blogCategories = [
    '/blog/loan-signing', '/blog/estate-planning', '/blog/real-estate',
    '/blog/apostille', '/blog/business', '/blog/general-notary', '/blog/healthcare'
  ];
  if (blogCategories.includes(path)) {
    return { priority: 0.8, changefreq: 'weekly' };
  }
  
  if (path.startsWith('/blog/')) {
    return { priority: 0.6, changefreq: 'monthly' };
  }
  
  if (path.includes('notary') && (path.includes('-45') || path.includes('county'))) {
    return { priority: 0.7, changefreq: 'monthly' };
  }
  
  if (path === '/contact' || path === '/book-now') {
    return { priority: 0.8, changefreq: 'monthly' };
  }
  
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
  
  return { priority: 0.5, changefreq: 'monthly' };
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

// Generate and write files
const sitemap = generateSitemap();
const robots = generateRobotsTxt();

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(process.cwd(), 'public/robots.txt'), robots);

console.log(`✅ Generated sitemap.xml with ${PRERENDER_ROUTES.length} URLs`);
console.log('✅ Generated robots.txt');
