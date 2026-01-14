// INTERNAL LINK CHECKER SCRIPT
// Validates all internal cross-links in blog content and templates
// Run: npx tsx scripts/check-internal-links.ts

import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join } from 'path';

interface LinkReport {
  file: string;
  line: number;
  link: string;
  isValid: boolean;
  issue?: string;
}

// Extract routes from prerenderRoutes.ts
const extractValidRoutes = (): Set<string> => {
  const prerenderRoutesPath = resolve(process.cwd(), 'src/config/prerenderRoutes.ts');
  const content = readFileSync(prerenderRoutesPath, 'utf-8');
  const routeMatches = content.match(/['"`]\/[^'"`]*['"`]/g) || [];
  return new Set(routeMatches.map(match => match.slice(1, -1)));
};

// Extract internal links from content
const extractInternalLinks = (content: string, filePath: string): LinkReport[] => {
  const reports: LinkReport[] = [];
  const lines = content.split('\n');
  
  // Patterns for internal links
  const patterns = [
    // React Router Link to="/path"
    /to=["'`](\/?[^"'`]+)["'`]/g,
    // href="/path" (HTML)
    /href=["'`](\/?[^"'`]+)["'`]/g,
    // Template literal links in content
    /<a\s+href=["'`]([^"'`]+)["'`]/g
  ];
  
  lines.forEach((line, index) => {
    patterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern);
      while ((match = regex.exec(line)) !== null) {
        const link = match[1];
        
        // Only check internal links (starting with /)
        if (link && link.startsWith('/') && !link.startsWith('//')) {
          // Skip external protocols, anchors, and query strings for now
          if (!link.includes('http') && !link.startsWith('/#')) {
            // Remove query strings and anchors for validation
            const cleanLink = link.split('?')[0].split('#')[0];
            
            reports.push({
              file: filePath,
              line: index + 1,
              link: cleanLink,
              isValid: false // Will be validated later
            });
          }
        }
      }
    });
  });
  
  return reports;
};

// Get all TypeScript/TSX files recursively
const getAllTsFiles = (dir: string, files: string[] = []): string[] => {
  if (!existsSync(dir)) return files;
  
  const entries = readdirSync(dir);
  
  entries.forEach(entry => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory() && !entry.includes('node_modules') && !entry.startsWith('.')) {
      getAllTsFiles(fullPath, files);
    } else if (stat.isFile() && (entry.endsWith('.tsx') || entry.endsWith('.ts'))) {
      files.push(fullPath);
    }
  });
  
  return files;
};

// Special validation for dynamic routes
const isValidDynamicRoute = (link: string, validRoutes: Set<string>): boolean => {
  // Check if it matches a dynamic pattern that would be handled by the router
  
  // County blog patterns: /blog/{category}-{county}-county-ohio
  if (link.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-county-ohio$/)) {
    return true; // These are dynamically generated
  }
  
  // City blog patterns: /blog/{category}-{city}-ohio
  if (link.match(/^\/blog\/[a-z-]+-guides-[a-z-]+-ohio$/)) {
    return true;
  }
  
  // Service county patterns: /service/{county}-county
  if (link.match(/^\/service\/[a-z-]+-county$/)) {
    return true;
  }
  
  // Service city patterns: /service/{county}-county/{city}-{zip}
  if (link.match(/^\/service\/[a-z-]+-county\/[a-z-]+-\d{5}$/)) {
    return true;
  }
  
  return validRoutes.has(link);
};

// Main execution
const validRoutes = extractValidRoutes();
const srcDir = resolve(process.cwd(), 'src');

console.log('\n============================================');
console.log('INTERNAL LINK VALIDATION REPORT');
console.log('============================================');
console.log(`Valid routes in prerenderRoutes.ts: ${validRoutes.size}`);
console.log('');

// Files to scan
const filesToScan = [
  // Blog templates
  'src/components/templates/LocationBlogTemplate.tsx',
  'src/components/templates/BlogCategoryTemplate.tsx',
  'src/components/templates/BlogPostTemplate.tsx',
  'src/components/templates/DynamicBlogPostTemplate.tsx',
  // Cross-linking components
  'src/components/blog/CrossCategoryLinks.tsx',
  'src/components/blog/RelatedServicesSection.tsx',
  'src/components/blog/LocationServiceLink.tsx',
  // Data files with content
  'src/data/locationBlogPosts.ts',
  'src/data/blog.ts',
  // Other key components
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/InternalLinkingHub.tsx'
];

// Also scan all blog post pages
const blogPagesDir = resolve(process.cwd(), 'src/pages/blog');
if (existsSync(blogPagesDir)) {
  const blogPages = readdirSync(blogPagesDir)
    .filter(f => f.endsWith('.tsx'))
    .map(f => `src/pages/blog/${f}`);
  filesToScan.push(...blogPages);
}

let totalLinks = 0;
let validLinks = 0;
let invalidLinks: LinkReport[] = [];

filesToScan.forEach(relativePath => {
  const fullPath = resolve(process.cwd(), relativePath);
  
  if (!existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${relativePath}`);
    return;
  }
  
  const content = readFileSync(fullPath, 'utf-8');
  const reports = extractInternalLinks(content, relativePath);
  
  reports.forEach(report => {
    totalLinks++;
    
    if (isValidDynamicRoute(report.link, validRoutes)) {
      report.isValid = true;
      validLinks++;
    } else {
      // Check for common issues
      if (report.link.includes(' ')) {
        report.issue = 'Contains space in slug';
      } else if (report.link.includes('undefined')) {
        report.issue = 'Contains undefined';
      } else if (report.link.endsWith('/')) {
        report.issue = 'Trailing slash';
      } else {
        report.issue = 'Route not found in prerenderRoutes.ts';
      }
      invalidLinks.push(report);
    }
  });
});

console.log('SCAN RESULTS:');
console.log('--------------------------------------------');
console.log(`Total links scanned:  ${totalLinks}`);
console.log(`Valid links:          ${validLinks}`);
console.log(`Invalid/Missing:      ${invalidLinks.length}`);
console.log('');

if (invalidLinks.length === 0) {
  console.log('✅ All internal links are valid!');
} else {
  console.log('❌ BROKEN/MISSING LINKS FOUND:');
  console.log('');
  
  // Group by file
  const byFile: Record<string, LinkReport[]> = {};
  invalidLinks.forEach(report => {
    if (!byFile[report.file]) byFile[report.file] = [];
    byFile[report.file].push(report);
  });
  
  Object.entries(byFile).forEach(([file, reports]) => {
    console.log(`📄 ${file}`);
    reports.forEach(report => {
      console.log(`   Line ${report.line}: ${report.link}`);
      console.log(`   └── ${report.issue}`);
    });
    console.log('');
  });
}

console.log('============================================');
console.log('LINK PATTERNS DETECTED:');
console.log('--------------------------------------------');

// Analyze link patterns
const patterns: Record<string, number> = {
  'Blog category links': 0,
  'Location blog (county)': 0,
  'Location blog (city)': 0,
  'Service hub links': 0,
  'Service page links': 0,
  'Static page links': 0,
  'Other': 0
};

invalidLinks.concat(
  Array.from({ length: validLinks }).map(() => ({ link: '', isValid: true } as LinkReport))
).forEach(report => {
  // This is just for counting valid patterns, not accurate but gives an idea
});

// Count actual valid patterns
const allReports: LinkReport[] = [];
filesToScan.forEach(relativePath => {
  const fullPath = resolve(process.cwd(), relativePath);
  if (existsSync(fullPath)) {
    const content = readFileSync(fullPath, 'utf-8');
    allReports.push(...extractInternalLinks(content, relativePath));
  }
});

allReports.forEach(report => {
  if (report.link.match(/^\/blog\/[a-z-]+-guides$/)) patterns['Blog category links']++;
  else if (report.link.match(/-county-ohio$/)) patterns['Location blog (county)']++;
  else if (report.link.match(/-ohio$/) && report.link.startsWith('/blog/')) patterns['Location blog (city)']++;
  else if (report.link.startsWith('/service/')) patterns['Service page links']++;
  else if (['/general-notary', '/loan-signings', '/estate-plans', '/real-estate', '/apostille', '/healthcare-notary'].some(s => report.link === s)) patterns['Service hub links']++;
  else if (['/book-now', '/contact', '/blog', '/faq'].some(s => report.link === s)) patterns['Static page links']++;
  else patterns['Other']++;
});

Object.entries(patterns).forEach(([pattern, count]) => {
  if (count > 0) {
    console.log(`${pattern.padEnd(30)} ${count}`);
  }
});

console.log('============================================\n');

// Exit with error code if broken links found
if (invalidLinks.length > 0) {
  process.exit(1);
}
