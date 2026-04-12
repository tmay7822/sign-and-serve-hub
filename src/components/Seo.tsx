import { Helmet } from 'react-helmet-async';
import { BUSINESS_CONFIG } from '@/config/business';
import { getPathname } from '@/utils/ssg';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | null;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/hero-notary.jpg',
  jsonLd
}) => {
  // Always build canonical from the configured website + current pathname
  // Strip trailing slashes for consistency
  const pathname = getPathname().replace(/\/+$/, '') || '';
  const url = canonical || `${BUSINESS_CONFIG.website}${pathname}`;
  const cleanUrl = url.replace(/\/+$/, '') || BUSINESS_CONFIG.website;

  // Baseline WebPage structured data for every page
  const baseJsonLd = jsonLd || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": cleanUrl,
    "publisher": {
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.name,
      "telephone": BUSINESS_CONFIG.phone
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={cleanUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cleanUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={`${BUSINESS_CONFIG.name} — ${BUSINESS_CONFIG.tagline}`} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd !== null && (
        <script type="application/ld+json">
          {JSON.stringify(baseJsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
