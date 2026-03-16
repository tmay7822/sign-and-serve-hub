import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync } from "fs";

// Vite plugin to auto-generate sitemap.xml and robots.txt during build
function sitemapGeneratorPlugin(): Plugin {
  return {
    name: 'sitemap-generator',
    buildStart() {
      try {
        const prerenderRoutesPath = path.resolve(__dirname, 'src/config/prerenderRoutes.ts');
        const prerenderRoutesContent = readFileSync(prerenderRoutesPath, 'utf-8');
        
        // Extract routes from the TypeScript file
        const routeMatches = prerenderRoutesContent.match(/['"`]\/[^'"`]*['"`]/g) || [];
        const routes = routeMatches.map(match => match.slice(1, -1));
        
        const BUSINESS_WEBSITE = 'https://www.signedontime.com';
        const today = new Date().toISOString().split('T')[0];
        
        // Generate sitemap.xml
        const getPriority = (p: string) => {
          if (p === '/') return { priority: 1.0, changefreq: 'weekly' };
          if (['/general-notary', '/loan-signings', '/estate-plans', '/real-estate', '/apostille', '/business-services'].includes(p)) 
            return { priority: 0.9, changefreq: 'monthly' };
          if (p === '/blog') return { priority: 0.8, changefreq: 'weekly' };
          if (p.startsWith('/blog/')) return { priority: 0.6, changefreq: 'monthly' };
          if (p.startsWith('/service/')) return { priority: 0.7, changefreq: 'monthly' };
          if (p === '/contact' || p === '/book-now') return { priority: 0.8, changefreq: 'monthly' };
          return { priority: 0.5, changefreq: 'monthly' };
        };
        
        const xmlUrls = routes.map(p => {
          const { priority, changefreq } = getPriority(p);
          return `  <url>\n    <loc>${BUSINESS_WEBSITE}${p === '/' ? '' : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        }).join('\n');
        
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>`;
        
        const robots = `User-agent: *\nAllow: /\n\n# Disallow query parameters and admin pages\nDisallow: /*?*\nDisallow: /admin/\nDisallow: /api/\n\n# Sitemap location\nSitemap: ${BUSINESS_WEBSITE}/sitemap.xml\n\n# Crawl delay\nCrawl-delay: 1`;
        
        writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap);
        writeFileSync(path.resolve(__dirname, 'public/robots.txt'), robots);
        
        console.log(`✅ Sitemap generated with ${routes.length} URLs`);
      } catch (error) {
        console.error('⚠️ Sitemap generation failed:', error);
      }
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
    mode === "production" && sitemapGeneratorPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
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
}));
