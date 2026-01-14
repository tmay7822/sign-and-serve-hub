// LINK VALIDATION UTILITIES
// Runtime utilities for validating internal links

import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';

/**
 * Check if a route is valid (exists in prerender routes or matches a dynamic pattern)
 */
export const isValidRoute = (path: string): boolean => {
  // Direct match
  if (PRERENDER_ROUTES.includes(path)) {
    return true;
  }
  
  // Check dynamic patterns
  return isValidDynamicPattern(path);
};

/**
 * Check if a path matches a valid dynamic route pattern
 */
export const isValidDynamicPattern = (path: string): boolean => {
  // County blog patterns: /blog/{category}-guides-{county}-county-ohio
  if (path.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-county-ohio$/)) {
    return true;
  }
  
  // City blog patterns: /blog/{category}-guides-{city}-ohio
  if (path.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-ohio$/)) {
    return true;
  }
  
  // Service county patterns: /service/{county}-county
  if (path.match(/^\/service\/[a-z-]+-county$/)) {
    return true;
  }
  
  // Service city patterns: /service/{county}-county/{city}-{zip}
  if (path.match(/^\/service\/[a-z-]+-county\/[a-z-]+-\d{5}$/)) {
    return true;
  }
  
  return false;
};

/**
 * Extract all internal links from HTML content
 */
export const extractInternalLinksFromHTML = (html: string): string[] => {
  const links: string[] = [];
  const hrefPattern = /href=["']([^"']+)["']/g;
  
  let match;
  while ((match = hrefPattern.exec(html)) !== null) {
    const link = match[1];
    if (link && link.startsWith('/') && !link.startsWith('//')) {
      // Remove query strings and anchors
      const cleanLink = link.split('?')[0].split('#')[0];
      links.push(cleanLink);
    }
  }
  
  return [...new Set(links)]; // Remove duplicates
};

/**
 * Validate an array of links and return invalid ones
 */
export const validateLinks = (links: string[]): { valid: string[]; invalid: string[] } => {
  const valid: string[] = [];
  const invalid: string[] = [];
  
  links.forEach(link => {
    if (isValidRoute(link)) {
      valid.push(link);
    } else {
      invalid.push(link);
    }
  });
  
  return { valid, invalid };
};

/**
 * Generate a valid blog category URL
 */
export const generateBlogCategoryUrl = (categorySlug: string): string => {
  return `/blog/${categorySlug}`;
};

/**
 * Generate a valid county blog URL
 */
export const generateCountyBlogUrl = (categorySlug: string, countySlug: string): string => {
  return `/blog/${categorySlug}-${countySlug}-ohio`;
};

/**
 * Generate a valid city blog URL
 */
export const generateCityBlogUrl = (categorySlug: string, citySlug: string): string => {
  return `/blog/${categorySlug}-${citySlug}-ohio`;
};

/**
 * Normalize a slug (lowercase, replace spaces with hyphens)
 */
export const normalizeSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

/**
 * Validate a slug format
 */
export const isValidSlug = (slug: string): boolean => {
  // Slug should be lowercase, alphanumeric with hyphens, no spaces or special chars
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
};

/**
 * Get route statistics for debugging
 */
export const getRouteStats = (): {
  total: number;
  blogCategories: number;
  blogPosts: number;
  locationBlog: number;
  servicePages: number;
  other: number;
} => {
  let blogCategories = 0;
  let blogPosts = 0;
  let locationBlog = 0;
  let servicePages = 0;
  let other = 0;
  
  PRERENDER_ROUTES.forEach(route => {
    if (route.match(/^\/blog\/[a-z-]+-guides$/) && !route.includes('-ohio')) {
      blogCategories++;
    } else if (route.match(/-county-ohio$/) || (route.match(/-ohio$/) && route.startsWith('/blog/'))) {
      locationBlog++;
    } else if (route.startsWith('/blog/')) {
      blogPosts++;
    } else if (route.startsWith('/service/')) {
      servicePages++;
    } else {
      other++;
    }
  });
  
  return {
    total: PRERENDER_ROUTES.length,
    blogCategories,
    blogPosts,
    locationBlog,
    servicePages,
    other
  };
};
