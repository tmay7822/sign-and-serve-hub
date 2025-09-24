// BLOG HOME PAGE
// Main blog landing page with categories and featured posts

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';
import { BLOG_CATEGORIES, getFeaturedPosts } from '@/data/blog';
import { Calendar, Clock, User, ArrowRight, BookOpen, FileText, Users, Building, Globe, Briefcase } from 'lucide-react';

const BlogHome: React.FC = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 6);

  useEffect(() => {
    // Set page title and meta description
    document.title = `Expert Notary Guides & Resources | ${BUSINESS_CONFIG.name}`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const description = `Professional notary guides and expert tips for all your document needs. Learn about loan signings, estate planning, apostille services, and more from certified notaries.`;
    
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
    const currentUrl = `${window.location.origin}/blog`;
    
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }
  }, []);

  const getCategoryIcon = (serviceSlug: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'general-notary': <FileText className="h-8 w-8" />,
      'loan-signings': <Building className="h-8 w-8" />,
      'real-estate': <Building className="h-8 w-8" />,
      'estate-plans': <Users className="h-8 w-8" />,
      'apostille': <Globe className="h-8 w-8" />,
      'business-services': <Briefcase className="h-8 w-8" />
    };
    return icons[serviceSlug] || <BookOpen className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Expert Notary Guides & Resources
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional insights and practical guides from certified notaries. Learn what to expect, 
              how to prepare, and get expert tips for all your notarization needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingWidget size="lg" className="text-lg px-8 py-3">
                Book Now
              </BookingWidget>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Browse by Service Type
            </h2>
            <p className="text-lg text-muted-foreground">
              Find expert guides tailored to your specific notarization needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_CATEGORIES.map(category => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {getCategoryIcon(category.serviceSlug)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    <Link 
                      to={`/blog/${category.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {category.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6">
                    {category.description}
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <Link to={`/blog/${category.slug}`}>
                      View Guides
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Featured Guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential reading for anyone needing notary services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                {post.heroImage && (
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img 
                      src={post.heroImage} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>By {post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-primary hover:underline font-medium"
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

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Need Professional Notary Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert guides help you prepare, but when you're ready for professional service, 
              we're here to help. Mobile service throughout {BUSINESS_CONFIG.serviceArea.primary}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingWidget size="lg" className="text-lg px-8 py-3">
                Book Now
              </BookingWidget>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default BlogHome;