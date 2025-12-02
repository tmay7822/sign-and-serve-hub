import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Sitemap generation plugin
function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    closeBundle() {
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
      ];

      const BUSINESS_WEBSITE = 'https://signedontime.com';
      const today = new Date().toISOString().split('T')[0];

      const getPriority = (path: string) => {
        if (path === '/') return { priority: 1.0, changefreq: 'weekly' };
        if (['/general-notary', '/loan-signings', '/estate-plans', '/real-estate', '/apostille', '/business-services'].includes(path)) 
          return { priority: 0.9, changefreq: 'monthly' };
        if (path === '/blog') return { priority: 0.8, changefreq: 'weekly' };
        if (path.startsWith('/blog/') && !path.includes('-')) return { priority: 0.8, changefreq: 'weekly' };
        if (path.startsWith('/blog/')) return { priority: 0.6, changefreq: 'monthly' };
        if (path === '/contact' || path === '/book-now') return { priority: 0.8, changefreq: 'monthly' };
        return { priority: 0.5, changefreq: 'monthly' };
      };

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${PRERENDER_ROUTES.map(path => {
        const { priority, changefreq } = getPriority(path);
        return `
  <url>
    <loc>${BUSINESS_WEBSITE}${path === '/' ? '' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      }).join('')}
</urlset>`;

      fs.writeFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), sitemap);
      console.log(`✅ Generated sitemap.xml with ${PRERENDER_ROUTES.length} URLs`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-accordion'],
        },
      },
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      preload: 'swap',
      pruneSource: false,
    },
    // Entry point for SSG
    entry: './src/main.tsx',
  },
}));
