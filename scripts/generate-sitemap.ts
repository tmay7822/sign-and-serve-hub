// SITEMAP GENERATION SCRIPT
// Merges routes from prerenderRoutes.ts + routes_city_corrected.csv
// Excludes admin, auth, undefined routes
// Generates sitemap.xml and robots.txt

import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

const BUSINESS_WEBSITE = 'https://www.signedontime.com';

// ── Source 1: Parse prerenderRoutes.ts ──────────────────────────
function getPrerenderRoutes(): string[] {
  const filePath = resolve(process.cwd(), 'src/config/prerenderRoutes.ts');
  const content = readFileSync(filePath, 'utf-8');
  const matches = content.match(/['"`]\/[^'"`]*['"`]/g) || [];
  return matches.map(m => m.slice(1, -1));
}

// ── Source 2: Parse routes_city_corrected.csv ───────────────────
function getCsvRoutes(): string[] {
  const filePath = resolve(process.cwd(), 'src/data/routes_city_corrected.csv');
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n').slice(1); // skip header
  const routes: string[] = [];
  for (const line of lines) {
    // First column is the path — handle quoted CSV fields
    const match = line.match(/^"?([^",]+)"?/);
    if (match && match[1].startsWith('/')) {
      routes.push(match[1]);
    }
  }
  return routes;
}

// ── Exclusion filter ────────────────────────────────────────────
function shouldExclude(path: string): boolean {
  if (path.startsWith('/admin')) return true;
  if (path === '/auth') return true;
  if (path.includes('undefined')) return true;
  if (path.startsWith('/api')) return true;
  return false;
}

// ── Priority assignment ─────────────────────────────────────────
function getPriority(path: string): { priority: number; changefreq: string } {
  if (path === '/') return { priority: 1.0, changefreq: 'weekly' };

  // Service hubs
  const serviceHubs = [
    '/general-notary', '/loan-signings', '/estate-plans', '/real-estate',
    '/apostille', '/business-services', '/college-18-plus', '/personal-family',
    '/healthcare-notary', '/real-estate-notary', '/business-banking', '/legal-court',
    '/international-apostille', '/vehicles-dmv', '/insurance-retirement',
    '/wills-trusts-estates', '/other-notary'
  ];
  if (serviceHubs.includes(path)) return { priority: 0.9, changefreq: 'monthly' };

  // High-priority static pages
  if (path === '/contact' || path === '/book-now') return { priority: 0.8, changefreq: 'monthly' };
  if (path === '/blog') return { priority: 0.8, changefreq: 'weekly' };
  if (path === '/pricing') return { priority: 0.7, changefreq: 'monthly' };
  if (path === '/reviews') return { priority: 0.7, changefreq: 'monthly' };

  // Blog categories
  if (path.match(/^\/blog\/[a-z-]+-guides$/) && !path.includes('-county-') && !path.includes('-ohio')) {
    return { priority: 0.8, changefreq: 'weekly' };
  }

  // County service pages (from CSV: /service-slug/county)
  if (path.match(/^\/[a-z-]+\/[a-z-]+$/) && !path.startsWith('/blog') && !path.startsWith('/service')) {
    // Could be a 2-segment county route like /general-notary/hamilton
    return { priority: 0.7, changefreq: 'monthly' };
  }

  // City service pages (from CSV: /service-slug/county/city)
  if (path.match(/^\/[a-z-]+\/[a-z-]+\/[a-z-]+$/) && !path.startsWith('/blog')) {
    return { priority: 0.6, changefreq: 'monthly' };
  }

  // Location blog posts
  if (path.match(/^\/blog\/.*-county-ohio$/)) return { priority: 0.7, changefreq: 'monthly' };
  if (path.match(/^\/blog\/.*-ohio$/)) return { priority: 0.6, changefreq: 'monthly' };

  // Regular blog posts
  if (path.startsWith('/blog/')) return { priority: 0.6, changefreq: 'monthly' };

  // Service area pages
  if (path.startsWith('/service/')) return { priority: 0.7, changefreq: 'monthly' };

  // Legacy location pages
  if (path.match(/-\d{5}$/)) return { priority: 0.7, changefreq: 'monthly' };

  // Low priority
  if (path === '/privacy-policy' || path === '/terms-of-service') return { priority: 0.3, changefreq: 'yearly' };

  return { priority: 0.5, changefreq: 'monthly' };
}

// ── Main ────────────────────────────────────────────────────────
const prerenderRoutes = getPrerenderRoutes();
const csvRoutes = getCsvRoutes();

// Merge and deduplicate
const allRoutes = [...new Set([...prerenderRoutes, ...csvRoutes])]
  .filter(r => !shouldExclude(r))
  .sort();

const today = new Date().toISOString().split('T')[0];

// Generate sitemap.xml
const xmlUrls = allRoutes.map(path => {
  const { priority, changefreq } = getPriority(path);
  const loc = `${BUSINESS_WEBSITE}${path === '/' ? '' : path}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>`;

// Generate robots.txt
const robots = `User-agent: *
Allow: /

# Disallow query parameters and admin pages
Disallow: /*?*
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: ${BUSINESS_WEBSITE}/sitemap.xml

# Crawl delay
Crawl-delay: 1`;

writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(process.cwd(), 'public/robots.txt'), robots);

// Stats
const stats = {
  prerenderRoutes: prerenderRoutes.length,
  csvRoutes: csvRoutes.length,
  excluded: prerenderRoutes.length + csvRoutes.length - allRoutes.length,
  total: allRoutes.length,
};

console.log('\n============================================');
console.log('SITEMAP GENERATION REPORT');
console.log('============================================');
console.log(`Prerender routes:    ${stats.prerenderRoutes}`);
console.log(`CSV routes:          ${stats.csvRoutes}`);
console.log(`Duplicates/excluded: ${stats.excluded}`);
console.log(`TOTAL in sitemap:    ${stats.total}`);
console.log('============================================\n');
