// INTERNAL LINKING HUB
// Automated related content suggestions for SEO

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPostsByService, BLOG_CATEGORIES } from '@/data/blog';
import { getRoutesByService } from '@/data/locations';
import { ArrowRight, FileText, MapPin, Users } from 'lucide-react';

interface InternalLinkingHubProps {
  currentPage: {
    type: 'service' | 'blog' | 'location';
    serviceSlug: string;
    title: string;
  };
  maxItems?: number;
}

const InternalLinkingHub: React.FC<InternalLinkingHubProps> = ({
  currentPage,
  maxItems = 6
}) => {
  const relatedPosts = getPostsByService(currentPage.serviceSlug).slice(0, maxItems);
  const relatedLocations = getRoutesByService(currentPage.serviceSlug).slice(0, maxItems);
  const categories = BLOG_CATEGORIES;
  const currentCategory = categories.find(cat => cat.serviceSlug === currentPage.serviceSlug);

  return (
    <div className="space-y-8">
      {/* Related Blog Posts */}
      {relatedPosts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Expert Guides & Resources
            </h3>
            {currentCategory && (
              <Button variant="outline" size="sm" asChild>
                <Link to={`/blog/${currentCategory.slug}`}>
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.readTime} min read
                    </Badge>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Read Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Related Service Locations */}
      {relatedLocations.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Local Service Areas
            </h3>
            <Button variant="outline" size="sm" asChild>
              <Link to="/service-areas">
                View All Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedLocations.map(location => (
              <Card key={location.path} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    <Link 
                      to={location.path}
                      className="hover:text-primary transition-colors"
                    >
                      {location.city}
                    </Link>
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground mb-3">
                    <div>{location.county} County</div>
                    <div>ZIP: {location.primaryZip}</div>
                  </div>
                  <Link 
                    to={location.path}
                    className="inline-flex items-center text-xs text-primary hover:underline"
                  >
                    Local service details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links to Related Services */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Related Services
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.slice(0, 6).map(category => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  <Link 
                    to={`/${category.serviceSlug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {category.title}
                  </Link>
                </h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    to={`/blog/${category.slug}`}
                    className="text-xs text-primary hover:underline"
                  >
                    Guides & Tips
                  </Link>
                  <Link 
                    to={`/${category.serviceSlug}`}
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Service Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalLinkingHub;