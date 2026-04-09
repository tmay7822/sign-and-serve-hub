import { useLocation } from 'react-router-dom';
import { getOrigin } from '@/utils/ssg';

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
  autoGenerate?: boolean;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items, autoGenerate = true }) => {
  const location = useLocation();

  let breadcrumbItems: BreadcrumbItem[] = [];

  if (items) {
    breadcrumbItems = items;
  } else if (autoGenerate) {
    breadcrumbItems = generateBreadcrumbsFromPath(location.pathname);
  }

  if (breadcrumbItems.length === 0) return null;

  const origin = getOrigin();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": `${origin}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: "Home", url: "/", position: 1 },
  ];

  if (pathname === '/') return items;

  const pathParts = pathname.split('/').filter(Boolean);

  if (pathParts[0] === 'blog') {
    items.push({ name: "Blog", url: "/blog", position: 2 });

    if (pathParts.length > 1) {
      const secondPart = pathParts[1];
      const countyMatch = secondPart.match(/^([a-z-]+)-guides-([a-z-]+)-county-ohio$/);
      const cityMatch = secondPart.match(/^([a-z-]+)-guides-([a-z-]+)-ohio$/);

      if (countyMatch) {
        const categorySlug = `${countyMatch[1]}-guides`;
        const countyName = formatLocationName(countyMatch[2]);
        const categoryName = formatCategoryName(categorySlug);
        items.push({ name: `${categoryName} Guides`, url: `/blog/${categorySlug}`, position: 3 });
        items.push({ name: `${countyName} County`, url: pathname, position: 4 });
      } else if (cityMatch && !secondPart.includes('-county-')) {
        const categorySlug = `${cityMatch[1]}-guides`;
        const cityName = formatLocationName(cityMatch[2]);
        const categoryName = formatCategoryName(categorySlug);
        items.push({ name: `${categoryName} Guides`, url: `/blog/${categorySlug}`, position: 3 });
        items.push({ name: cityName, url: pathname, position: 4 });
      } else if (secondPart.endsWith('-guides')) {
        const categoryName = formatCategoryName(secondPart);
        items.push({ name: `${categoryName} Guides`, url: `/blog/${secondPart}`, position: 3 });
      } else {
        const postTitle = formatPostTitle(secondPart);
        items.push({ name: postTitle, url: pathname, position: 3 });
      }
    }
    return items;
  }

  if (pathParts[0] === 'service') {
    items.push({ name: "Service Areas", url: "/service-areas", position: 2 });
    if (pathParts.length >= 2) {
      const countySlug = pathParts[1];
      const countyName = formatLocationName(countySlug.replace('-county', ''));
      items.push({ name: `${countyName} County`, url: `/service/${countySlug}`, position: 3 });
      if (pathParts.length >= 3) {
        const cityZip = pathParts[2];
        const cityName = formatLocationName(cityZip.replace(/-\d{5}$/, ''));
        items.push({ name: cityName, url: pathname, position: 4 });
      }
    }
    return items;
  }

  if (pathParts.length >= 1) {
    const serviceName = formatServiceName(pathParts[0]);
    items.push({ name: serviceName, url: `/${pathParts[0]}`, position: 2 });
    if (pathParts.length >= 3) {
      const county = formatLocationName(pathParts[1]);
      const city = formatLocationName(pathParts[2]);
      items.push({ name: `${city}, ${county} County`, url: pathname, position: 3 });
    }
  }

  return items;
}

function formatServiceName(slug: string): string {
  const serviceNames: { [key: string]: string } = {
    'general-notary': 'General Notary',
    'loan-signings': 'Loan Signings',
    'estate-plans': 'Estate Planning',
    'real-estate': 'Real Estate',
    'apostille': 'Apostille Services',
    'business-services': 'Business Services',
    'healthcare-notary': 'Healthcare Notary',
    'college-18-plus': 'College & 18+ Services',
    'personal-family': 'Personal & Family',
    'vehicles-dmv': 'Vehicle & DMV',
  };
  return serviceNames[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatCategoryName(slug: string): string {
  return slug.replace('-guides', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatPostTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatLocationName(name: string): string {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default BreadcrumbSchema;
