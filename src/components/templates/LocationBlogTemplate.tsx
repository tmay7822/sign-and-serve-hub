// LOCATION BLOG POST TEMPLATE
// SEO-optimized template for county-specific blog content

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import EnhancedFAQSchema from '@/components/SEO/EnhancedFAQSchema';
import QuickAnswerSection from '@/components/SEO/QuickAnswerSection';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, MapPin, ArrowRight } from 'lucide-react';
import { BlogPost, BLOG_CATEGORIES } from '@/data/blog';
import { LOCATION_COUNTIES } from '@/data/locationBlogPosts';
import { BUSINESS_CONFIG } from '@/config/business';

interface LocationBlogTemplateProps {
  post: BlogPost;
}

const LocationBlogTemplate: React.FC<LocationBlogTemplateProps> = ({ post }) => {
  // Extract county from slug
  const countySlug = post.slug.replace(`${post.categorySlug}-`, '').replace('-ohio', '');
  const county = LOCATION_COUNTIES.find(c => c.slug === countySlug);
  const category = BLOG_CATEGORIES.find(c => c.slug === post.categorySlug);
  
  // Get related location posts (other categories for same county)
  const relatedCategories = BLOG_CATEGORIES.filter(c => c.slug !== post.categorySlug).slice(0, 3);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Seo 
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.tags?.join(', ')}
        canonical={`${BUSINESS_CONFIG.website}/blog/${post.slug}`}
      />
      
      {/* FAQ Schema for SEO */}
      {post.faqs && post.faqs.length > 0 && (
        <EnhancedFAQSchema faqs={post.faqs} />
      )}
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                {category && (
                  <>
                    <li>
                      <Link 
                        to={`/blog/${category.slug}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {category.title}
                      </Link>
                    </li>
                    <li className="text-muted-foreground">/</li>
                  </>
                )}
                <li className="text-foreground font-medium truncate max-w-[200px]">
                  {county?.name} County
                </li>
              </ol>
            </nav>
            
            {/* Category Badge */}
            {category && (
              <Link to={`/blog/${category.slug}`}>
                <Badge variant="secondary" className="mb-4 hover:bg-secondary/80 transition-colors">
                  {category.title}
                </Badge>
              </Link>
            )}
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
              {post.excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              {county && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{county.name} County, Ohio</span>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Top CTA */}
        <section className="py-6 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-center sm:text-left text-muted-foreground">
                <strong className="text-foreground">Need a notary in {county?.name} County?</strong> We come to you!
              </p>
              <StandardCTAButtons />
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Article Content */}
              <article className="lg:col-span-2">
                {/* Quick Answer */}
                {post.quickAnswer && (
                  <div className="mb-8">
                    <QuickAnswerSection 
                      question={post.quickAnswer.question}
                      answer={post.quickAnswer.answer}
                      location={county?.name + ' County, Ohio'}
                      service={category?.title}
                      showCTA={true}
                    />
                  </div>
                )}
                
                {/* Main Content */}
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-ul:text-muted-foreground prose-li:marker:text-primary
                    prose-ol:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* FAQs */}
                {post.faqs && post.faqs.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faqs.map((faq, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h3 className="font-semibold text-foreground mb-2">
                              {faq.question}
                            </h3>
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </article>
              
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-4 space-y-6">
                  {/* Service Hub Link */}
                  {category && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          Learn More About {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Visit our main {category.title.toLowerCase()} page for comprehensive service information.
                        </p>
                        <Link 
                          to={`/${category.serviceSlug}`}
                          className="inline-flex items-center text-primary hover:underline font-medium"
                        >
                          View {category.title} Services
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                  
                  {/* Cities in County */}
                  {county && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-3">
                          Cities We Serve in {county.name} County
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {county.cities.map((city, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <MapPin className="h-3 w-3 text-primary" />
                              {city}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                  
                  {/* Related County Guides */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        More {county?.name} County Guides
                      </h3>
                      <ul className="space-y-3">
                        {relatedCategories.map((cat) => (
                          <li key={cat.id}>
                            <Link 
                              to={`/blog/${cat.slug}-${county?.slug}-ohio`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                              <ArrowRight className="h-3 w-3" />
                              {cat.title} in {county?.name} County
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* CTA Card */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2">
                        Ready to Schedule?
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        Book your {county?.name} County notary appointment today.
                      </p>
                      <StandardCTAButtons className="justify-center" />
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Professional Notary Services in {county?.name} County
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              From {county?.cities.slice(0, 3).join(', ')} and beyond, we bring mobile notary 
              services directly to you. Same-day appointments available.
            </p>
            <StandardCTAButtons />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default LocationBlogTemplate;
