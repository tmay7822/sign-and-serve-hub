// SERVICE HUB TEMPLATE
// Template for service landing pages (/{slug})

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { QuoteButton } from '@/components/QuoteButton';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';
import { Service } from '@/data/services';
import { BlogPost, getPostsByService, getCategoryByServiceSlug } from '@/data/blog';
import { RouteCity, getRoutesByService } from '@/data/locations';
import { getServiceContent } from '@/data/serviceContent';
import { FileText, MapPin, Clock, Shield, Star, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

interface ServiceHubTemplateProps {
  service: Service;
  featuredPosts?: BlogPost[];
  localRoutes?: RouteCity[];
  showBooking?: boolean;
  defaultService?: string;
}

const ServiceHubTemplate: React.FC<ServiceHubTemplateProps> = ({
  service,
  featuredPosts,
  localRoutes,
  showBooking = false,
  defaultService
}) => {
  const category = getCategoryByServiceSlug(service.slug);
  const posts = featuredPosts || getPostsByService(service.slug).slice(0, 4);
  const routes = localRoutes || getRoutesByService(service.slug).slice(0, 12);
  const serviceContent = getServiceContent(service.id);

  useEffect(() => {
    // Set page title and meta description
    const title = service.metaTitle || `${service.serviceName} in ${BUSINESS_CONFIG.address.city}, ${BUSINESS_CONFIG.address.state} | ${BUSINESS_CONFIG.name}`;
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const description = service.metaDescription || `${service.summary} Same-day mobile ${service.serviceName.toLowerCase()} in ${BUSINESS_CONFIG.serviceArea.primary}. Call ${BUSINESS_CONFIG.phone}.`;
    
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
    const currentUrl = `${window.location.origin}/${service.slug}`;
    
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }
  }, [service]);

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema 
        serviceName={service.serviceName}
        serviceDescription={service.description}
        url={`/${service.slug}`}
      />
      <BreadcrumbSchema />
      <Header />
      <BreadcrumbNav />
      
      {/* Hero Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {service.serviceName} in {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {showBooking ? (
                <BookingWidget 
                  size="lg" 
                  className="text-lg px-8 py-3"
                  defaultService={defaultService}
                >
                  Book Now
                </BookingWidget>
              ) : (
                <QuoteButton 
                  size="lg" 
                  className="text-lg px-8 py-3"
                  useCalculator={true}
                >
                  Get Free Quote
                </QuoteButton>
              )}
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>
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
                <span>Mobile to You</span>
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

      {/* Service Details Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Professional {service.serviceName}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {service.summary}
              </p>
              
              {/* Specific Services */}
              {serviceContent?.specificServices && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What We Notarize</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {serviceContent.specificServices.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Link to Blog Category and FAQ */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {category && (
                  <Button variant="outline" size="lg" asChild>
                    <Link to={`/blog/${category.slug}`}>
                      {service.serviceName} Guides & Tips
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                <Button variant="outline" size="lg" asChild>
                  <Link to="/faq">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    View FAQ
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Certified & Professional</h3>
                    <p className="text-muted-foreground">Licensed notary with background check and E&O insurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Mobile Service</h3>
                    <p className="text-muted-foreground">We come to your location at your convenience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Same-Day Available</h3>
                    <p className="text-muted-foreground">Often available within hours of your request</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Service Area Card */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Service Area</h3>
                <p className="text-muted-foreground mb-4">
                  We serve {BUSINESS_CONFIG.serviceArea.primary} including:
                </p>
                <p className="text-foreground font-medium mb-6">
                  {BUSINESS_CONFIG.serviceArea.counties}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Weekdays: {BUSINESS_CONFIG.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Weekends: {BUSINESS_CONFIG.hours.weekends}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Emergency: {BUSINESS_CONFIG.hours.emergency}</span>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              {serviceContent?.tips && (
                <div className="bg-card p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-foreground mb-4">Quick Tips</h3>
                  <div className="space-y-3">
                    {serviceContent.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{tip.title}</h4>
                          <p className="text-muted-foreground text-sm">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {serviceContent?.process && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {serviceContent.process.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, professional, and efficient
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceContent.process.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts Section */}
      {posts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {service.serviceName} Guides & Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert guidance and tips for your {service.serviceName.toLowerCase()} needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {posts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.readTime} min read</span>
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">
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
                    View All {service.serviceName} Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Local Service Areas */}
      {routes.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Local {service.serviceName} Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional mobile service throughout the region
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {routes.slice(0, 12).map(route => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="flex items-center gap-2 p-3 rounded-lg bg-card hover:bg-accent transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium text-foreground">{route.city}</div>
                    <div className="text-muted-foreground">{route.state} {route.primaryZip}</div>
                  </div>
                </Link>
              ))}
            </div>

            {routes.length > 12 && (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  And many more locations throughout {BUSINESS_CONFIG.serviceArea.counties}
                </p>
                <Button variant="outline">
                  See All Service Areas
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for professional {service.serviceName.toLowerCase()} services. 
              Same-day appointments often available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {showBooking ? (
                <BookingWidget 
                  size="lg" 
                  className="text-lg px-8 py-3"
                  defaultService={defaultService}
                >
                  Book Now
                </BookingWidget>
              ) : (
                <QuoteButton 
                  size="lg" 
                  className="text-lg px-8 py-3"
                  useCalculator={true}
                >
                  Get Free Quote
                </QuoteButton>
              )}
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

export default ServiceHubTemplate;