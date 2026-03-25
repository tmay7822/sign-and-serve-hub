// BLOG CATEGORY TEMPLATE
// Template for blog category pages (/blog/{slug}) with location internal linking

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { BUSINESS_CONFIG } from '@/config/business';
import { BlogCategory, BlogPost, getPostsByCategory, BLOG_CATEGORIES } from '@/data/blog';
import { getCountyPostsByCategory, getCityPostsByCategory, LOCATION_COUNTIES } from '@/data/locationBlogPosts';
import { getServiceBySlug } from '@/data/services';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, MapPin, ChevronRight, Globe, Shield, GraduationCap, BookOpen, FileText } from 'lucide-react';

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
  const countyPosts = getCountyPostsByCategory(category.slug);
  const cityPosts = getCityPostsByCategory(category.slug);

  const seoTitle = category.metaTitle || `${category.title} Guides & Tips | ${BUSINESS_CONFIG.name}`;
  const seoDescription = category.metaDescription || category.description;

  // Group city posts by county for organized display
  const cityPostsByCounty = LOCATION_COUNTIES.map(county => ({
    county: county.name,
    slug: county.slug,
    posts: cityPosts.filter(post => post.tags?.includes(county.name + ' County'))
  })).filter(group => group.posts.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={seoTitle}
        description={seoDescription}
      />
      <BreadcrumbSchema />
      <Header />
      <BreadcrumbNav />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
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

      {/* Location-Specific Guides Section */}
      {(countyPosts.length > 0 || cityPosts.length > 0) && (
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {category.title} by Location
              </h2>
              <p className="text-muted-foreground">
                Find {category.title.toLowerCase()} guides specific to your area
              </p>
            </div>
            
            {/* County-Level Links */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">By County</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {countyPosts.map(post => {
                  const countyName = post.tags?.find(t => t.includes('County'))?.replace(' County', '') || '';
                  return (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-card border hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {countyName} County
                      </span>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* City-Level Links by County */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">By City</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityPostsByCounty.map(group => (
                  <Card key={group.county} className="overflow-hidden">
                    <CardHeader className="py-3 bg-muted/50">
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {group.county} County
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="flex flex-wrap gap-2">
                        {group.posts.map(post => {
                          const cityName = post.title.replace(`${category.title} Services in `, '').replace(', Ohio', '');
                          return (
                            <Link
                              key={post.id}
                              to={`/blog/${post.slug}`}
                            >
                              <Badge 
                                variant="secondary" 
                                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                              >
                                {cityName}
                              </Badge>
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Categories Section (for Immigration, Military, Education) */}
      {['immigration-guides', 'military-guides', 'education-guides'].includes(category.slug) && (
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Explore Related Topics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.slug !== 'immigration-guides' && (
                <Link 
                  to="/blog/immigration-guides"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-md transition-all group"
                >
                  <Globe className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Immigration Guides</h3>
                    <p className="text-sm text-muted-foreground">USCIS forms, visa documents, affidavits</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary" />
                </Link>
              )}
              {category.slug !== 'military-guides' && (
                <Link 
                  to="/blog/military-guides"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-md transition-all group"
                >
                  <Shield className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Military & Veterans</h3>
                    <p className="text-sm text-muted-foreground">Deployment POAs, VA documents, DD-214</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary" />
                </Link>
              )}
              {category.slug !== 'education-guides' && (
                <Link 
                  to="/blog/education-guides"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-md transition-all group"
                >
                  <GraduationCap className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Education & Academic</h3>
                    <p className="text-sm text-muted-foreground">Transcripts, study abroad, diplomas</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary" />
                </Link>
              )}
              {/* Also link to Apostille for document authentication context */}
              <Link 
                to="/blog/apostille-guides"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-md transition-all group"
              >
                <FileText className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Apostille Services</h3>
                  <p className="text-sm text-muted-foreground">International document authentication</p>
                </div>
                <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {category.title} Articles & Guides
          </h2>
          
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
    </div>
  );
};

export default BlogCategoryTemplate;
