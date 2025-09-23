// BLOG POST TEMPLATE
// Template for individual blog posts (/blog/{slug})

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import ArticleSchema from '@/components/SEO/ArticleSchema';
import { BUSINESS_CONFIG } from '@/config/business';
import { BlogPost, getPostsByCategory } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostTemplateProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  post,
  relatedPosts
}) => {
  const service = getServiceBySlug(post.serviceSlug);
  const related = relatedPosts || getPostsByCategory(post.categorySlug)
    .filter(p => p.id !== post.id)
    .slice(0, 3);
  
  // Count words for schema
  const wordCount = post.content.split(/\s+/).length;

  useEffect(() => {
    // Set page title and meta description
    const title = post.metaTitle || `${post.title} | ${BUSINESS_CONFIG.name}`;
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const description = post.metaDescription || post.excerpt;
    
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = `${window.location.origin}/blog/${post.slug}`;
    
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: currentUrl },
      ...(post.heroImage ? [{ property: 'og:image', content: post.heroImage }] : []),
      { property: 'article:published_time', content: post.publishDate },
      { property: 'article:author', content: post.author }
    ];

    // Remove existing OG tags
    document.querySelectorAll('meta[property^="og:"], meta[property^="article:"]').forEach(el => el.remove());
    
    // Add new OG tags
    ogTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...(post.heroImage ? [{ name: 'twitter:image', content: post.heroImage }] : [])
    ];

    // Remove existing Twitter tags
    document.querySelectorAll('meta[name^="twitter:"]').forEach(el => el.remove());
    
    // Add new Twitter tags
    twitterTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });
  }, [post]);

  // Create the contextual service link for first paragraph
  const createServiceLink = () => {
    if (!service) return '';
    return (
      <Link 
        to={`/${service.slug}`}
        className="text-primary hover:underline font-medium"
      >
        {service.serviceName} in {BUSINESS_CONFIG.address.city} ({BUSINESS_CONFIG.address.state})
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <ArticleSchema
        headline={post.title}
        datePublished={post.publishDate}
        author={post.author}
        image={post.heroImage}
        description={post.excerpt}
        wordCount={wordCount}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Article Header */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <Link to={`/blog/${post.categorySlug}`} className="hover:text-primary">
                {post.categorySlug.replace('-guides', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </div>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {post.heroImage && (
              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.heroImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* First paragraph with contextual service link */}
            <p className="text-lg leading-relaxed mb-6">
              Looking for {createServiceLink()}? Our mobile team serves {BUSINESS_CONFIG.serviceArea.primary} with same-day appointments. Learn more on our{' '}
              {service && (
                <Link to={`/${service.slug}`} className="text-primary hover:underline font-medium">
                  {service.serviceName} page
                </Link>
              )}.
            </p>

            {/* Main content */}
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Need Help Today?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Professional mobile notary services throughout {BUSINESS_CONFIG.serviceArea.primary}. 
              Same-day appointments often available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Book an Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {related.map(relatedPost => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                  {relatedPost.heroImage && (
                    <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                      <img 
                        src={relatedPost.heroImage} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="hover:text-primary transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {relatedPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{relatedPost.readTime} min read</span>
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="text-primary hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <PopupForm />
    </div>
  );
};

export default BlogPostTemplate;