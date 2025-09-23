// BLOG CATEGORY TEMPLATE
// Template for blog category pages (/blog/{slug})

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { BUSINESS_CONFIG } from '@/config/business';
import { BlogCategory, BlogPost, getPostsByCategory } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';

interface BlogCategoryTemplateProps {
  category: BlogCategory;
  posts?: BlogPost[];
  page?: number;
  totalPages?: number;
}

const BlogCategoryTemplate: React.FC<BlogCategoryTemplateProps> = ({
  category,
  posts,
  page = 1,
  totalPages = 1
}) => {
  const service = getServiceBySlug(category.serviceSlug);
  const categoryPosts = posts || getPostsByCategory(category.slug);
  
  useEffect(() => {
    // Set page title and meta description
    const title = category.metaTitle || `${category.title} Guides & Tips | ${BUSINESS_CONFIG.name}`;
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const description = category.metaDescription || category.description;
    
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
    const currentUrl = `${window.location.origin}/blog/${category.slug}`;
    
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }

    // Add pagination rel tags if applicable
    if (totalPages > 1) {
      // Remove existing pagination tags
      document.querySelectorAll('link[rel="prev"], link[rel="next"]').forEach(el => el.remove());
      
      if (page > 1) {
        const prevLink = document.createElement('link');
        prevLink.rel = 'prev';
        prevLink.href = page === 2 ? currentUrl : `${currentUrl}?page=${page - 1}`;
        document.head.appendChild(prevLink);
      }
      
      if (page < totalPages) {
        const nextLink = document.createElement('link');
        nextLink.rel = 'next';
        nextLink.href = `${currentUrl}?page=${page + 1}`;
        document.head.appendChild(nextLink);
      }
    }
  }, [category, page, totalPages]);

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Service Link Back */}
            {service && (
              <div className="mb-6">
                <Button variant="outline" asChild>
                  <Link to={`/${service.slug}`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {service.serviceName} in {BUSINESS_CONFIG.address.city} ({BUSINESS_CONFIG.address.state})
                  </Link>
                </Button>
              </div>
            )}
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {category.title} Guides & Tips
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {categoryPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {categoryPosts.map(post => (
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  {page > 1 && (
                    <Button variant="outline" asChild>
                      <Link to={page === 2 ? `/blog/${category.slug}` : `/blog/${category.slug}?page=${page - 1}`}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Link>
                    </Button>
                  )}
                  
                  <span className="text-muted-foreground">
                    Page {page} of {totalPages}
                  </span>
                  
                  {page < totalPages && (
                    <Button variant="outline" asChild>
                      <Link to={`/blog/${category.slug}?page=${page + 1}`}>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                No posts found in this category yet
              </h3>
              <p className="text-muted-foreground mb-8">
                Check back soon for helpful guides and tips about {category.title.toLowerCase()}.
              </p>
              <Button asChild>
                <Link to="/blog">View All Blog Posts</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Related Service CTA */}
      {service && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Need {service.serviceName}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Professional mobile {service.serviceName.toLowerCase()} services throughout {BUSINESS_CONFIG.serviceArea.primary}. 
                Same-day appointments often available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  Get Free Quote
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
      )}

      <Footer />
      <PopupForm />
    </div>
  );
};

export default BlogCategoryTemplate;