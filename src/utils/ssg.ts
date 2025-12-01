// SSG-SAFE HELPER UTILITIES
// Provides safe access to browser APIs during static site generation

import { BUSINESS_CONFIG } from '@/config/business';

/**
 * Check if code is running in a browser environment
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Get the current origin, with fallback for SSG
 */
export const getOrigin = (): string => {
  if (isBrowser) {
    return window.location.origin;
  }
  return BUSINESS_CONFIG.website;
};

/**
 * Get the current href, with fallback for SSG
 */
export const getHref = (fallback?: string): string => {
  if (isBrowser) {
    return window.location.href;
  }
  return fallback || BUSINESS_CONFIG.website;
};

/**
 * Get the current pathname, with fallback for SSG
 */
export const getPathname = (fallback?: string): string => {
  if (isBrowser) {
    return window.location.pathname;
  }
  return fallback || '/';
};
