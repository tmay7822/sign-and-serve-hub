import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';
import { Badge } from '@/components/ui/badge';
import EnhancedFAQSchema from '@/components/SEO/EnhancedFAQSchema';
import QuickAnswerSection from '@/components/SEO/QuickAnswerSection';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  serviceSlug: string;
  categorySlug: string;
  excerpt: string;
  content: string;
  heroImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishDate: string;
  author: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  quickAnswer?: {
    question: string;
    answer: string;
  };
}

interface DynamicBlogPostTemplateProps {
  post: BlogPost;
}

const DynamicBlogPostTemplate = ({ post }: DynamicBlogPostTemplateProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.publishDate,
    "author": { "@type": "Organization", "name": BUSINESS_CONFIG.name },
    "publisher": { "@type": "Organization", "name": BUSINESS_CONFIG.name },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BUSINESS_CONFIG.website}/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={post.metaTitle || `${post.title} | ${BUSINESS_CONFIG.name}`}
        description={post.metaDescription || post.excerpt}
        jsonLd={articleSchema}
      />

      {/* Enhanced FAQ Schema */}
      {post.faqs && post.faqs.length > 0 && (
        <EnhancedFAQSchema 
          faqs={post.faqs}
          mainEntity={{
            name: post.title,
            description: post.excerpt,
            url: `/blog/${post.slug}`
          }}
        />
      )}
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.categorySlug}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishDate}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl mb-8">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Top CTA Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Ready to Get Started?</h2>
              <p className="text-muted-foreground">Professional mobile notary services available throughout {BUSINESS_CONFIG.serviceArea.primary}</p>
            </div>
            <StandardCTAButtons 
              defaultService={post.serviceSlug || ''}
              variant="top"
              className="max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Quick Answer Section for AI Search - After Content */}
            {post.quickAnswer && (
              <div className="mt-8">
                <QuickAnswerSection
                  question={post.quickAnswer.question}
                  answer={post.quickAnswer.answer}
                  location="Cincinnati-Dayton Metro"
                  service="notary services"
                />
              </div>
            )}

            {/* FAQ Section with Enhanced Schema - After Content */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">
              Need Professional Notary Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact {BUSINESS_CONFIG.name} for reliable mobile notary services in {BUSINESS_CONFIG.serviceArea.primary}
            </p>
            <StandardCTAButtons 
              defaultService={post.serviceSlug || ''}
              variant="bottom"
              className="max-w-2xl mx-auto"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Call us at <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-brand-blue hover:underline font-semibold">{BUSINESS_CONFIG.phone}</a> for immediate assistance
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicBlogPostTemplate;
