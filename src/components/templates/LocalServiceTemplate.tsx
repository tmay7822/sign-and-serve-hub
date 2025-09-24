// LOCAL SERVICE TEMPLATE
// Template for local service pages (/{service}/{county}/{city})

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { QuoteButton } from '@/components/QuoteButton';
import { BUSINESS_CONFIG } from '@/config/business';
import { RouteCity } from '@/data/locations';
import { Service, getServiceBySlug } from '@/data/services';
import { BlogPost, getPostsByService, getCategoryByServiceSlug } from '@/data/blog';
import { MapPin, Clock, Shield, Star, Phone, ArrowRight, FileText, Users, Building } from 'lucide-react';

interface LocalServiceTemplateProps {
  route: RouteCity;
  service?: Service;
  featuredPosts?: BlogPost[];
}

const LocalServiceTemplate: React.FC<LocalServiceTemplateProps> = ({
  route,
  service: serviceOverride,
  featuredPosts
}) => {
  const service = serviceOverride || getServiceBySlug(route.serviceSlug);
  const category = getCategoryByServiceSlug(route.serviceSlug);
  const posts = featuredPosts || getPostsByService(route.serviceSlug).slice(0, 3);

  useEffect(() => {
    // Set page title and meta description
    document.title = route.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', route.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = route.metaDescription;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = `${window.location.origin}${route.path}`;
    
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }

    // Add geo meta tags
    const geoTags = [
      { name: 'geo.region', content: `US-${route.state}` },
      { name: 'geo.placename', content: `${route.city}, ${route.state}` },
      { name: 'geo.postal-code', content: route.primaryZip }
    ];

    // Remove existing geo tags
    document.querySelectorAll('meta[name^="geo."]').forEach(el => el.remove());
    
    // Add new geo tags
    geoTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });
  }, [route]);

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema 
        serviceName={`${route.serviceName} in ${route.city}`}
        serviceDescription={route.metaDescription}
        url={route.path}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {route.serviceName} in {route.city}, {route.state} {route.primaryZip}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional mobile {route.serviceName.toLowerCase()} services in {route.city}, {route.county} County. 
              We come to your location with same-day availability and certified, insured service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <QuoteButton size="lg" className="text-lg px-8 py-3">
                Get Free Quote
              </QuoteButton>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Mobile to {route.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Details */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                {route.serviceName} Services in {route.city}
              </h2>
              
              {service && (
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.summary} Our certified mobile notary serves {route.city} and surrounding areas 
                  in {route.county} County with professional, reliable service.
                </p>
              )}

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local {route.city} Service</h3>
                    <p className="text-muted-foreground">
                      Serving {route.city}, {route.county} County, and the {route.primaryZip} area. 
                      We know the local requirements and provide efficient, professional service.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Same-day appointments often available. We work around your schedule with 
                      evening and weekend appointments in {route.city}.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Certified & Insured</h3>
                    <p className="text-muted-foreground">
                      Licensed Ohio notary with E&O insurance, background check, and bonding. 
                      Your documents are handled with complete professionalism.
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Learn More:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service && (
                    <Button variant="outline" className="justify-start h-auto p-4" asChild>
                      <Link to={`/${service.slug}`}>
                        <FileText className="mr-3 h-5 w-5 flex-shrink-0" />
                        <div className="text-left">
                          <div className="font-medium">{service.serviceName} Services</div>
                          <div className="text-sm text-muted-foreground">Complete service details</div>
                        </div>
                      </Link>
                    </Button>
                  )}
                  
                  {category && (
                    <Button variant="outline" className="justify-start h-auto p-4" asChild>
                      <Link to={`/blog/${category.slug}`}>
                        <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                        <div className="text-left">
                          <div className="font-medium">{category.title} Guides</div>
                          <div className="text-sm text-muted-foreground">Expert tips & advice</div>
                        </div>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 bg-card shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Service Information
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Service Area:</span>
                    <span className="text-muted-foreground">{route.city}, {route.county} County</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">ZIP Code:</span>
                    <span className="text-muted-foreground">{route.primaryZip}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Response Time:</span>
                    <span className="text-muted-foreground">Same-day available</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium text-foreground">Travel Fee:</span>
                    <span className="text-muted-foreground">Included in service</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Business Hours:</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Weekdays:</span>
                      <span>{BUSINESS_CONFIG.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends:</span>
                      <span>{BUSINESS_CONFIG.hours.weekends}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency:</span>
                      <span>{BUSINESS_CONFIG.hours.emergency}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <QuoteButton className="w-full" size="lg">
                    Get Free Quote
                  </QuoteButton>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href={`tel:${BUSINESS_CONFIG.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call: {BUSINESS_CONFIG.phone}
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Choose Us in {route.city}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Local expertise combined with professional mobile notary services throughout {route.county} County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Local Knowledge</h3>
              <p className="text-muted-foreground">
                Familiar with {route.city} and {route.county} County requirements, ensuring smooth, 
                efficient service for all your document needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast Response</h3>
              <p className="text-muted-foreground">
                Quick response times to {route.city} locations. Same-day service available 
                for urgent notarization needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Professional Service</h3>
              <p className="text-muted-foreground">
                Certified, bonded, and insured notary service with a commitment to 
                excellence in every {route.city} appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {posts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Helpful Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert guides and tips for your {route.serviceName.toLowerCase()} needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {posts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{post.readTime} min read</span>
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {category && (
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link to={`/blog/${category.slug}`}>
                    View All {route.serviceName} Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Ready for Professional {route.serviceName} in {route.city}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for reliable mobile notary services in {route.city}, {route.county} County. 
              Same-day appointments often available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton size="lg" className="text-lg px-8 py-3">
                Get Free Quote
              </QuoteButton>
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
    </div>
  );
};

export default LocalServiceTemplate;