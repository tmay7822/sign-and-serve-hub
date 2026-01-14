// SITEMAP VERIFICATION SCRIPT
// Compares prerenderRoutes.ts with public/sitemap.xml to ensure completeness
// Run: npx tsx scripts/verify-sitemap.ts

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

interface VerificationResult {
  prerenderRoutesCount: number;
  sitemapUrlsCount: number;
  missingFromSitemap: string[];
  extraInSitemap: string[];
  duplicates: string[];
  isValid: boolean;
}

const BUSINESS_WEBSITE = 'https://signedontime.com';

// Extract routes from prerenderRoutes.ts
const extractPrerenderRoutes = (): string[] => {
  const prerenderRoutesPath = resolve(process.cwd(), 'src/config/prerenderRoutes.ts');
  
  if (!existsSync(prerenderRoutesPath)) {
    console.error('❌ prerenderRoutes.ts not found!');
    process.exit(1);
  }
  
  const content = readFileSync(prerenderRoutesPath, 'utf-8');
  const routeMatches = content.match(/['"`]\/[^'"`]*['"`]/g) || [];
  return routeMatches.map(match => match.slice(1, -1));
};

// Extract URLs from sitemap.xml
const extractSitemapUrls = (): string[] => {
  const sitemapPath = resolve(process.cwd(), 'public/sitemap.xml');
  
  if (!existsSync(sitemapPath)) {
    console.error('❌ sitemap.xml not found! Run: npx tsx scripts/generate-sitemap.ts');
    process.exit(1);
  }
  
  const content = readFileSync(sitemapPath, 'utf-8');
  const locMatches = content.match(/<loc>([^<]+)<\/loc>/g) || [];
  
  return locMatches.map(match => {
    const url = match.replace(/<\/?loc>/g, '');
    // Convert full URL to path
    return url.replace(BUSINESS_WEBSITE, '') || '/';
  });
};

// Find duplicates in an array
const findDuplicates = (arr: string[]): string[] => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  
  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  });
  
  return Array.from(duplicates);
};

// Categorize routes for detailed reporting
const categorizeRoutes = (routes: string[]): Record<string, string[]> => {
  const categories: Record<string, string[]> = {
    'Homepage': [],
    'Service Hubs': [],
    'Blog Categories': [],
    'Blog Posts': [],
    'Location Blog (County)': [],
    'Location Blog (City)': [],
    'Service Pages': [],
    'Location Pages': [],
    'Static Pages': [],
    'Other': []
  };

  routes.forEach(route => {
    if (route === '/') {
      categories['Homepage'].push(route);
    } else if (route.match(/^\/blog\/[a-z-]+-guides$/) && !route.includes('-county-') && !route.includes('-ohio')) {
      categories['Blog Categories'].push(route);
    } else if (route.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-county-ohio$/)) {
      categories['Location Blog (County)'].push(route);
    } else if (route.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-ohio$/) && !route.includes('-county-')) {
      categories['Location Blog (City)'].push(route);
    } else if (route.startsWith('/blog/')) {
      categories['Blog Posts'].push(route);
    } else if (route.startsWith('/service/')) {
      categories['Service Pages'].push(route);
    } else if (route.match(/notary|signing|poa-|wills-|estate/)) {
      categories['Location Pages'].push(route);
    } else if (['/general-notary', '/loan-signings', '/estate-plans', '/real-estate', 
      '/apostille', '/business-services', '/college-18-plus', '/personal-family',
      '/healthcare-notary', '/real-estate-notary', '/business-banking', '/legal-court',
      '/international-apostille', '/vehicles-dmv', '/insurance-retirement', 
      '/wills-trusts-estates', '/other-notary'].includes(route)) {
      categories['Service Hubs'].push(route);
    } else if (['/faq', '/about', '/contact', '/pricing', '/documents', '/service-areas', 
      '/book-now', '/privacy-policy', '/terms-of-service', '/tax-season-notary',
      '/back-to-school-documents', '/home-buying-season-notary', '/year-end-planning-notary'].includes(route)) {
      categories['Static Pages'].push(route);
    } else {
      categories['Other'].push(route);
    }
  });

  return categories;
};

const verifyRoutes = (): VerificationResult => {
  const prerenderRoutes = extractPrerenderRoutes();
  const sitemapUrls = extractSitemapUrls();
  
  const prerenderSet = new Set(prerenderRoutes);
  const sitemapSet = new Set(sitemapUrls);
  
  const missingFromSitemap = prerenderRoutes.filter(route => !sitemapSet.has(route));
  const extraInSitemap = sitemapUrls.filter(url => !prerenderSet.has(url));
  const duplicates = findDuplicates(prerenderRoutes);
  
  return {
    prerenderRoutesCount: prerenderRoutes.length,
    sitemapUrlsCount: sitemapUrls.length,
    missingFromSitemap,
    extraInSitemap,
    duplicates,
    isValid: missingFromSitemap.length === 0 && extraInSitemap.length === 0 && duplicates.length === 0
  };
};

// Main execution
const result = verifyRoutes();
const prerenderRoutes = extractPrerenderRoutes();
const categories = categorizeRoutes(prerenderRoutes);

console.log('\n============================================');
console.log('SITEMAP VERIFICATION REPORT');
console.log('============================================');
console.log(`Prerender Routes: ${result.prerenderRoutesCount}`);
console.log(`Sitemap URLs:     ${result.sitemapUrlsCount}`);
console.log('');

if (result.isValid) {
  console.log('✅ VERIFICATION PASSED - All routes are properly indexed!');
} else {
  console.log('⚠️  VERIFICATION FAILED - Issues detected:');
  
  if (result.missingFromSitemap.length > 0) {
    console.log(`\n❌ Missing from sitemap (${result.missingFromSitemap.length}):`);
    result.missingFromSitemap.slice(0, 10).forEach(route => console.log(`   - ${route}`));
    if (result.missingFromSitemap.length > 10) {
      console.log(`   ... and ${result.missingFromSitemap.length - 10} more`);
    }
  }
  
  if (result.extraInSitemap.length > 0) {
    console.log(`\n⚠️  Extra in sitemap (${result.extraInSitemap.length}):`);
    result.extraInSitemap.slice(0, 10).forEach(url => console.log(`   - ${url}`));
    if (result.extraInSitemap.length > 10) {
      console.log(`   ... and ${result.extraInSitemap.length - 10} more`);
    }
  }
  
  if (result.duplicates.length > 0) {
    console.log(`\n🔄 Duplicate routes (${result.duplicates.length}):`);
    result.duplicates.forEach(route => console.log(`   - ${route}`));
  }
}

console.log('\n--------------------------------------------');
console.log('COVERAGE BY CATEGORY:');
console.log('--------------------------------------------');
Object.entries(categories).forEach(([category, routes]) => {
  if (routes.length > 0) {
    console.log(`${category.padEnd(25)} ${routes.length}`);
  }
});
console.log('--------------------------------------------');
console.log(`TOTAL                     ${prerenderRoutes.length}`);
console.log('============================================\n');

// Exit with error code if verification failed
if (!result.isValid) {
  process.exit(1);
}
