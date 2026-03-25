// BLOG HOME PAGE
// Main blog landing page with categories and featured posts

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';
import { BLOG_CATEGORIES, getPostsForBlogHome, getTotalBlogCount } from '@/data/blog';
import { Calendar, Clock, User, ArrowRight, BookOpen, FileText, Users, Building, Globe, Briefcase, Plus } from 'lucide-react';

const BlogHome: React.FC = () => {
  const [displayedPosts, setDisplayedPosts] = useState(12); // Start with 12 posts
  const [sortBy, setSortBy] = useState<'recent' | 'featured'>('featured');
  
  const totalPosts = getTotalBlogCount();
  
  // Get posts based on sort preference
  const allPosts = sortBy === 'featured' 
    ? getPostsForBlogHome() // Featured first, then recent
    : getPostsForBlogHome().sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()); // All by date
    
  const postsToShow = allPosts.slice(0, displayedPosts);
  const hasMorePosts = displayedPosts < allPosts.length;

  const loadMorePosts = () => {
    setDisplayedPosts(prev => Math.min(prev + 12, allPosts.length));
  };

  // Reset displayed posts when sort changes
  const handleSortChange = (newSort: 'recent' | 'featured') => {
    setSortBy(newSort);
    setDisplayedPosts(12);
  };


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

            <StandardCTAButtons variant="top" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {BLOG_CATEGORIES.map(category => (
              <Card 
                key={category.id} 
                className="gradient-card border-2 border-black/10 hover:border-brand-blue/30 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group bg-white/80 backdrop-blur-sm min-h-[280px] flex flex-col"
              >
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="mx-auto w-16 h-16 lg:w-18 lg:h-18 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">
                      {getCategoryIcon(category.serviceSlug)}
                    </div>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-brand-navy leading-tight font-semibold">
                    <Link 
                      to={`/blog/${category.slug}`}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {category.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 flex flex-col flex-grow">
                  <CardDescription className="text-base lg:text-lg mb-6 flex-grow text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <div className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full bg-brand-blue/5 border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 font-medium py-3"
                      asChild
                    >
                      <Link to={`/blog/${category.slug}`}>
                        View Guides
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
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
              Expert Guides & Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse {totalPosts}+ professional guides covering all notary services
            </p>
            
            {/* Sort Options */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant={sortBy === 'featured' ? 'default' : 'outline'}
                onClick={() => handleSortChange('featured')}
                className="px-6"
              >
                Featured First
              </Button>
              <Button
                variant={sortBy === 'recent' ? 'default' : 'outline'}
                onClick={() => handleSortChange('recent')}
                className="px-6"
              >
                Most Recent
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map(post => (
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

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMorePosts}
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Plus className="h-5 w-5 mr-2" />
                Load More Guides ({allPosts.length - displayedPosts} remaining)
              </Button>
            </div>
          )}
          
          {/* Show All Posts Link */}
          {!hasMorePosts && allPosts.length > 12 && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Showing all {allPosts.length} guides
              </p>
            </div>
          )}
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
            
            <StandardCTAButtons variant="bottom" />
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default BlogHome;