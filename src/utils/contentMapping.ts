// Content Mapping Utilities
// Aggregates all page data and builds link relationships

import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';
import { SERVICES } from '@/data/services';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog';
import { SERVICE_CONTENT } from '@/data/serviceContent';
import { LOCATION_PAGES } from '@/data/locationPages';
import { DOCUMENT_CATEGORIES, ALL_DOCUMENTS } from '@/data/documents';

export interface PageData {
  url: string;
  pageType: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  county?: string;
  city?: string;
  zip?: string;
  serviceSlug?: string;
  contentSummary: string;
  faqCount: number;
  documentCount: number;
  linksTo: string[];
  linkedFrom: string[];
  relatedServices: string[];
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
}

export interface LinkConnection {
  sourceUrl: string;
  targetUrl: string;
  linkType: string;
  context: string;
}

// Categorize a route by its URL pattern
export const categorizeRoute = (url: string): string => {
  if (url === '/') return 'Homepage';
  if (url.startsWith('/admin')) return 'Admin';
  if (url.startsWith('/blog/') && url.includes('-county-')) return 'Location Blog';
  if (url.startsWith('/blog/') && url.includes('-guides')) return 'Blog Category';
  if (url.startsWith('/blog/')) return 'Blog Post';
  if (url.startsWith('/service/')) return 'Service Landing';
  if (url.match(/\/notary-[\w-]+-\d{5}/)) return 'ZIP Landing';
  if (url.includes('-county')) return 'County Page';
  if (url.match(/-(notary|season|planning)/)) return 'Seasonal';
  
  const servicePages = [
    'general-notary', 'loan-signings', 'estate-plans', 'real-estate',
    'apostille', 'business-services', 'college-18-plus', 'personal-family',
    'healthcare-notary', 'real-estate-notary', 'business-banking', 'legal-court',
    'international-apostille', 'vehicles-dmv', 'insurance-retirement',
    'wills-trusts-estates', 'other-notary'
  ];
  
  for (const service of servicePages) {
    if (url === `/${service}`) return 'Service Hub';
  }
  
  const staticPages = ['faq', 'about', 'contact', 'pricing', 'documents', 'reviews', 
    'service-areas', 'privacy-policy', 'terms-of-service', 'book-now'];
  for (const page of staticPages) {
    if (url === `/${page}`) return 'Static Page';
  }
  
  return 'Other';
};

// Get title for a route
const getTitleForRoute = (url: string): string => {
  if (url === '/') return 'Home';
  
  // Service pages
  const service = SERVICES.find(s => url === `/${s.slug}`);
  if (service) return service.serviceName;
  
  // Blog categories
  const blogCat = BLOG_CATEGORIES.find(c => url === `/blog/${c.slug}`);
  if (blogCat) return blogCat.title;
  
  // Blog posts
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost) return blogPost.title;
  
  // Location pages
  const locationPage = LOCATION_PAGES.find(l => url === l.path);
  if (locationPage) return locationPage.title;
  
  // Generate title from URL
  return url
    .replace(/^\//, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
};

// Get meta info for a route
const getMetaForRoute = (url: string): { title: string; description: string } => {
  const service = SERVICES.find(s => url === `/${s.slug}`);
  if (service) return { 
    title: service.metaTitle || service.serviceName, 
    description: service.metaDescription || service.description 
  };
  
  const blogCat = BLOG_CATEGORIES.find(c => url === `/blog/${c.slug}`);
  if (blogCat) return { 
    title: blogCat.metaTitle || blogCat.title, 
    description: blogCat.metaDescription || blogCat.description 
  };
  
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost) return { 
    title: blogPost.metaTitle || blogPost.title, 
    description: blogPost.metaDescription || blogPost.excerpt 
  };
  
  const locationPage = LOCATION_PAGES.find(l => url === l.path);
  if (locationPage) return { 
    title: locationPage.title, 
    description: locationPage.metaDescription || '' 
  };
  
  return { title: getTitleForRoute(url), description: '' };
};

// Extract location info from URL
const extractLocationInfo = (url: string): { county?: string; city?: string; zip?: string } => {
  const result: { county?: string; city?: string; zip?: string } = {};
  
  // Check for county
  const countyMatch = url.match(/(\w+)-county/i);
  if (countyMatch) result.county = countyMatch[1];
  
  // Check for ZIP code
  const zipMatch = url.match(/(\d{5})/);
  if (zipMatch) result.zip = zipMatch[1];
  
  // Check for city from location pages
  const locationPage = LOCATION_PAGES.find(l => url === l.path);
  if (locationPage) {
    result.city = locationPage.city;
    result.county = locationPage.county;
    result.zip = locationPage.primaryZip;
  }
  
  return result;
};

// Get service slug for a route
const getServiceSlug = (url: string): string | undefined => {
  const service = SERVICES.find(s => url === `/${s.slug}`);
  if (service) return service.slug;
  
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost) return blogPost.serviceSlug;
  
  const blogCat = BLOG_CATEGORIES.find(c => url === `/blog/${c.slug}`);
  if (blogCat) return blogCat.serviceSlug;
  
  // Check for service mention in URL
  for (const service of SERVICES) {
    if (url.includes(service.slug)) return service.slug;
  }
  
  return undefined;
};

// Get content summary
const getContentSummary = (url: string): string => {
  const pageType = categorizeRoute(url);
  const serviceSlug = getServiceSlug(url);
  const serviceContent = serviceSlug ? SERVICE_CONTENT[serviceSlug] : undefined;
  
  const parts: string[] = [];
  
  if (serviceContent) {
    if (serviceContent.faqs?.length) parts.push(`${serviceContent.faqs.length} FAQs`);
    if (serviceContent.commonDocuments?.length) parts.push(`${serviceContent.commonDocuments.length} documents`);
    if (serviceContent.tips?.length) parts.push(`${serviceContent.tips.length} tips`);
  }
  
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost) {
    parts.push(`${blogPost.readTime} min read`);
    if (blogPost.faqs?.length) parts.push(`${blogPost.faqs.length} FAQs`);
  }
  
  return parts.length ? parts.join(', ') : pageType;
};

// Get FAQ count
const getFaqCount = (url: string): number => {
  const serviceSlug = getServiceSlug(url);
  const serviceContent = serviceSlug ? SERVICE_CONTENT[serviceSlug] : undefined;
  if (serviceContent?.faqs) return serviceContent.faqs.length;
  
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost?.faqs) return blogPost.faqs.length;
  
  return 0;
};

// Get document count
const getDocumentCount = (url: string): number => {
  const serviceSlug = getServiceSlug(url);
  const serviceContent = serviceSlug ? SERVICE_CONTENT[serviceSlug] : undefined;
  if (serviceContent?.commonDocuments) return serviceContent.commonDocuments.length;
  
  return 0;
};

// Get related services
const getRelatedServices = (url: string): string[] => {
  const serviceSlug = getServiceSlug(url);
  const serviceContent = serviceSlug ? SERVICE_CONTENT[serviceSlug] : undefined;
  if (serviceContent?.relatedServices) return serviceContent.relatedServices;
  
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost?.serviceSlug) return [blogPost.serviceSlug];
  
  return [];
};

// Determine page priority
const getPagePriority = (url: string): 'high' | 'medium' | 'low' => {
  const type = categorizeRoute(url);
  
  if (url === '/' || type === 'Service Hub') return 'high';
  if (type === 'Blog Category' || type === 'Static Page') return 'medium';
  return 'low';
};

// Build internal links - what each page links to
const buildLinksTo = (url: string): string[] => {
  const links: string[] = [];
  const serviceSlug = getServiceSlug(url);
  
  // Service pages link to related services
  if (serviceSlug) {
    const serviceContent = SERVICE_CONTENT[serviceSlug];
    if (serviceContent?.relatedServices) {
      links.push(...serviceContent.relatedServices.map(s => `/${s}`));
    }
  }
  
  // Blog posts link to their service hub
  const blogPost = BLOG_POSTS.find(p => url === `/blog/${p.slug}`);
  if (blogPost) {
    links.push(`/${blogPost.serviceSlug}`);
    links.push(`/blog/${blogPost.categorySlug}`);
  }
  
  // Blog categories link to their posts
  const blogCat = BLOG_CATEGORIES.find(c => url === `/blog/${c.slug}`);
  if (blogCat) {
    const catPosts = BLOG_POSTS.filter(p => p.categorySlug === blogCat.slug);
    links.push(...catPosts.slice(0, 5).map(p => `/blog/${p.slug}`));
    links.push(`/${blogCat.serviceSlug}`);
  }
  
  return [...new Set(links)];
};

// Build all page data
export const getAllPageData = (): PageData[] => {
  const pages: PageData[] = [];
  const allLinksTo: Map<string, string[]> = new Map();
  
  // First pass: collect basic data and links
  for (const url of PRERENDER_ROUTES) {
    const linksTo = buildLinksTo(url);
    allLinksTo.set(url, linksTo);
  }
  
  // Second pass: build linkedFrom
  const linkedFrom: Map<string, string[]> = new Map();
  for (const [url, targets] of allLinksTo) {
    for (const target of targets) {
      const existing = linkedFrom.get(target) || [];
      existing.push(url);
      linkedFrom.set(target, existing);
    }
  }
  
  // Build complete page data
  for (const url of PRERENDER_ROUTES) {
    const meta = getMetaForRoute(url);
    const location = extractLocationInfo(url);
    
    pages.push({
      url,
      pageType: categorizeRoute(url),
      title: getTitleForRoute(url),
      metaTitle: meta.title,
      metaDescription: meta.description,
      county: location.county,
      city: location.city,
      zip: location.zip,
      serviceSlug: getServiceSlug(url),
      contentSummary: getContentSummary(url),
      faqCount: getFaqCount(url),
      documentCount: getDocumentCount(url),
      linksTo: allLinksTo.get(url) || [],
      linkedFrom: linkedFrom.get(url) || [],
      relatedServices: getRelatedServices(url),
      priority: getPagePriority(url),
      lastUpdated: new Date().toISOString().split('T')[0]
    });
  }
  
  return pages;
};

// Build link graph for connections
export const buildLinkGraph = (): LinkConnection[] => {
  const connections: LinkConnection[] = [];
  const pages = getAllPageData();
  
  for (const page of pages) {
    for (const target of page.linksTo) {
      const targetPage = pages.find(p => p.url === target);
      if (targetPage) {
        let linkType = `${page.pageType}→${targetPage.pageType}`;
        let context = 'Navigation';
        
        if (page.pageType === 'Blog Post' && targetPage.pageType === 'Service Hub') {
          context = 'CTA Link';
        } else if (page.pageType === 'Service Hub' && targetPage.pageType === 'Blog Post') {
          context = 'Related Reading';
        } else if (page.pageType.includes('Location') && targetPage.pageType === 'Service Hub') {
          context = 'Popular Services';
        }
        
        connections.push({
          sourceUrl: page.url,
          targetUrl: target,
          linkType,
          context
        });
      }
    }
  }
  
  return connections;
};

// Find orphan pages (no inbound links)
export const findOrphanPages = (): string[] => {
  const pages = getAllPageData();
  return pages
    .filter(p => p.linkedFrom.length === 0 && p.url !== '/')
    .map(p => p.url);
};

// Find hub pages (most connections)
export const findHubPages = (limit: number = 10): PageData[] => {
  const pages = getAllPageData();
  return pages
    .map(p => ({ ...p, connectionCount: p.linksTo.length + p.linkedFrom.length }))
    .sort((a, b) => b.connectionCount - a.connectionCount)
    .slice(0, limit);
};

// Generate CSV export
export const generateFullCSV = (): string => {
  const pages = getAllPageData();
  const headers = [
    'URL', 'PageType', 'Title', 'MetaTitle', 'MetaDescription', 'County', 'City', 'ZIP',
    'ServiceSlug', 'ContentSummary', 'FAQCount', 'DocumentCount', 'LinksTo', 'LinkedFrom',
    'RelatedServices', 'Priority', 'LastUpdated'
  ];
  
  const rows = pages.map(p => [
    p.url,
    p.pageType,
    `"${p.title.replace(/"/g, '""')}"`,
    `"${p.metaTitle.replace(/"/g, '""')}"`,
    `"${p.metaDescription.replace(/"/g, '""')}"`,
    p.county || '',
    p.city || '',
    p.zip || '',
    p.serviceSlug || '',
    `"${p.contentSummary.replace(/"/g, '""')}"`,
    p.faqCount,
    p.documentCount,
    `"${p.linksTo.join(';')}"`,
    `"${p.linkedFrom.join(';')}"`,
    `"${p.relatedServices.join(';')}"`,
    p.priority,
    p.lastUpdated
  ].join(','));
  
  return [headers.join(','), ...rows].join('\n');
};

// Generate link map CSV
export const generateLinkMapCSV = (): string => {
  const connections = buildLinkGraph();
  const headers = ['SourceURL', 'TargetURL', 'LinkType', 'Context'];
  
  const rows = connections.map(c => [
    c.sourceUrl,
    c.targetUrl,
    c.linkType,
    c.context
  ].join(','));
  
  return [headers.join(','), ...rows].join('\n');
};

// Generate JSON export
export const generateFullJSON = (): string => {
  const data = {
    exportDate: new Date().toISOString(),
    totalPages: PRERENDER_ROUTES.length,
    pages: getAllPageData(),
    linkGraph: buildLinkGraph(),
    orphanPages: findOrphanPages(),
    hubPages: findHubPages(10)
  };
  
  return JSON.stringify(data, null, 2);
};

// Generate Mermaid diagram
export const generateSiteDiagram = (): string => {
  const pages = getAllPageData();
  const lines: string[] = ['graph TD'];
  
  // Group pages by type
  const serviceHubs = pages.filter(p => p.pageType === 'Service Hub').slice(0, 8);
  const blogCategories = pages.filter(p => p.pageType === 'Blog Category').slice(0, 6);
  const staticPages = pages.filter(p => p.pageType === 'Static Page').slice(0, 4);
  
  // Homepage connections
  lines.push('    HOME["/"] --> SH[Service Hubs]');
  lines.push('    HOME --> BL[Blog]');
  lines.push('    HOME --> ST[Static Pages]');
  
  // Service hubs
  serviceHubs.forEach((sh, i) => {
    const id = `SH${i}`;
    lines.push(`    SH --> ${id}["${sh.title}"]`);
  });
  
  // Blog categories
  blogCategories.forEach((bc, i) => {
    const id = `BC${i}`;
    lines.push(`    BL --> ${id}["${bc.title}"]`);
  });
  
  // Static pages
  staticPages.forEach((sp, i) => {
    const id = `ST${i}`;
    lines.push(`    ST --> ${id}["${sp.title}"]`);
  });
  
  return lines.join('\n');
};

// Get route statistics
export const getRouteStats = () => {
  const pages = getAllPageData();
  const typeCount = new Map<string, number>();
  
  for (const page of pages) {
    typeCount.set(page.pageType, (typeCount.get(page.pageType) || 0) + 1);
  }
  
  return {
    total: pages.length,
    byType: Object.fromEntries(typeCount),
    serviceHubs: typeCount.get('Service Hub') || 0,
    blogPosts: typeCount.get('Blog Post') || 0,
    blogCategories: typeCount.get('Blog Category') || 0,
    locationBlogs: typeCount.get('Location Blog') || 0,
    serviceLandings: typeCount.get('Service Landing') || 0,
    zipLandings: typeCount.get('ZIP Landing') || 0,
    staticPages: typeCount.get('Static Page') || 0,
    seasonal: typeCount.get('Seasonal') || 0,
    orphanCount: findOrphanPages().length,
    totalConnections: buildLinkGraph().length,
    totalFaqs: pages.reduce((sum, p) => sum + p.faqCount, 0),
    totalDocuments: ALL_DOCUMENTS.length,
    documentCategories: DOCUMENT_CATEGORIES.length
  };
};
