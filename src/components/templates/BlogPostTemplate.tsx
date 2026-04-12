import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import TopMiniCTA from '@/components/blog/TopMiniCTA';
import WhatToDoNext from '@/components/blog/WhatToDoNext';
import LocationServiceLink from '@/components/blog/LocationServiceLink';
import RelatedReading from '@/components/blog/RelatedReading';
import PopularServices from '@/components/blog/PopularServices';
import BlogFAQ from '@/components/blog/BlogFAQ';
import { BUSINESS_CONFIG } from '@/config/business';
import { getPathname } from '@/utils/ssg';

interface BlogPostTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  metaDescription?: string;
  publishDate?: string;
  readTime?: number;
  tags?: string[];
  relatedPost?: {
    title: string;
    slug: string;
    description?: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  showLocationLink?: boolean;
  showTopMiniCTA?: boolean;
  showWhatToDoNext?: boolean;
  showPopularServices?: boolean;
  className?: string;
}

const BlogPostTemplate = ({ 
  title, 
  subtitle,
  children, 
  metaDescription,
  publishDate,
  readTime,
  tags,
  relatedPost,
  faqs,
  showLocationLink = false,
  showTopMiniCTA = true,
  showWhatToDoNext = true,
  showPopularServices = true,
  className = '' 
}: BlogPostTemplateProps) => {
  // SSG-safe pathname extraction
  const pathname = getPathname();
  const postSlug = pathname.split('/').pop() || '';

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": publishDate || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": "Terry May",
      "sameAs": "https://www.wikidata.org/wiki/Q139255055",
      "jobTitle": "Certified Notary Public and Loan Signing Agent",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Signed On Time Mobile Notary Services",
        "url": "https://www.signedontime.com",
        "@id": "https://www.wikidata.org/wiki/Q139254455"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BUSINESS_CONFIG.website}/blog/${postSlug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_CONFIG.name
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={`${title} | ${BUSINESS_CONFIG.name} Blog`}
        description={metaDescription || subtitle || `${title} - Professional mobile notary guidance from ${BUSINESS_CONFIG.name}`}
        canonical={`${BUSINESS_CONFIG.website}/blog/${postSlug}`}
        jsonLd={articleSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl mb-6 text-muted-foreground">
                {subtitle}
              </p>
            )}
            {(publishDate || readTime) && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {publishDate && <span>Published {new Date(publishDate).toLocaleDateString()}</span>}
                {readTime && <span>• {readTime} min read</span>}
                {tags && tags.length > 0 && (
                  <span>• {tags.slice(0, 2).join(', ')}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex max-w-6xl mx-auto gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Top Mini CTA */}
              {showTopMiniCTA && <TopMiniCTA />}
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {children}
              </div>

              {/* Location Link */}
              {showLocationLink && <LocationServiceLink />}

              {/* Related Reading */}
              {relatedPost && (
                <RelatedReading 
                  title={relatedPost.title}
                  slug={relatedPost.slug}
                  description={relatedPost.description}
                />
              )}

              {/* FAQ Section */}
              {faqs && faqs.length > 0 && <BlogFAQ faqs={faqs} />}

              {/* What to Do Next */}
              {showWhatToDoNext && <WhatToDoNext />}
            </div>

            {/* Sidebar */}
            {showPopularServices && (
              <div className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-8">
                  <PopularServices />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostTemplate;