// DYNAMIC LOCATION PAGE
// Renders location pages based on URL slug using centralized data

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustSignals from '@/components/TrustSignals';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getLocationPageByPath, LOCATION_PAGES, LocationPageData, toRouteCity } from '@/data/locationPages';
import { getServiceBySlug } from '@/data/services';
import { getPostsByService } from '@/data/blog';
import { BUSINESS_CONFIG } from '@/config/business';
import { MapPin, Clock, Shield, Star, Home, Users, Building, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import DocumentLibrarySection from '@/components/DocumentLibrarySection';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Get nearby locations based on same county or adjacent areas
const getNearbyLocations = (currentPage: LocationPageData): LocationPageData[] => {
  // First get same county locations (excluding current)
  const sameCounty = LOCATION_PAGES.filter(
    loc => loc.county === currentPage.county && loc.slug !== currentPage.slug
  );
  
  // Define adjacent counties for cross-linking
  const adjacentCounties: Record<string, string[]> = {
    'Hamilton': ['Warren', 'Butler', 'Clermont'],
    'Warren': ['Hamilton', 'Butler', 'Montgomery', 'Clermont'],
    'Butler': ['Hamilton', 'Warren', 'Montgomery'],
    'Montgomery': ['Warren', 'Butler', 'Miami'],
    'Clermont': ['Hamilton', 'Warren', 'Brown'],
    'Brown': ['Clermont', 'Hamilton'],
    'Miami': ['Montgomery'],
  };
  
  // Get locations from adjacent counties
  const adjacent = LOCATION_PAGES.filter(
    loc => adjacentCounties[currentPage.county]?.includes(loc.county) && loc.slug !== currentPage.slug
  );
  
  // Combine and prioritize: same county first, then adjacent, limit to 6
  const combined = [...sameCounty, ...adjacent];
  
  // Sort by priority (high first) and take top 6
  return combined
    .sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return (priorityOrder[a.priority as keyof typeof priorityOrder] || 2) - 
             (priorityOrder[b.priority as keyof typeof priorityOrder] || 2);
    })
    .slice(0, 6);
};

const DynamicLocationPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Try to find location page data by path
  const pageData = getLocationPageByPath(pathname);
  
  if (!pageData) {
    return <Navigate to="/service-areas" replace />;
  }

  const service = getServiceBySlug(pageData.serviceSlug);
  const relatedPosts = getPostsByService(pageData.serviceSlug).slice(0, 3);
  const route = toRouteCity(pageData);
  const nearbyLocations = getNearbyLocations(pageData);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="geo.region" content={`US-${pageData.state}`} />
        <meta name="geo.placename" content={`${pageData.city}, ${pageData.state}`} />
        <meta name="geo.position" content={`${pageData.primaryZip}`} />
        <link rel="canonical" href={`${BUSINESS_CONFIG.website}${pageData.path}`} />
      </Helmet>
      
      <LocalBusinessSchema 
        serviceName={`${pageData.serviceName} in ${pageData.city}`}
        serviceDescription={pageData.metaDescription}
        url={pageData.path}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/50 border-b" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/service-areas">Service Areas</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{pageData.city}, {pageData.state} {pageData.primaryZip}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {pageData.serviceName} in {pageData.city}, {pageData.state} {pageData.primaryZip}
            </h1>
            <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              Professional mobile notary serving {pageData.city}, {pageData.county} County with same-day appointments and evening availability.
            </p>
            
            {/* Service Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">{pageData.city} Area Services:</h3>
                <ul className="space-y-2 text-white/90">
                  {pageData.popularServices.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3 text-brand-gold">{pageData.primaryZip} Coverage Areas:</h3>
                <ul className="space-y-2 text-white/90">
                  {pageData.neighborhoods.map((neighborhood, index) => (
                    <li key={index}>• {neighborhood}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StandardCTAButtons 
                defaultService={pageData.serviceSlug}
                variant="top"
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Local Service Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Professional {pageData.serviceName} in {pageData.city}, {pageData.county} County
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Residential Services</h3>
                    <p className="text-muted-foreground">
                      Home visits throughout {pageData.city} for estate planning, loan signings, and family document notarization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Senior Communities</h3>
                    <p className="text-muted-foreground">
                      Specialized service for senior living facilities and elderly residents in the {pageData.city} area.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Evening Appointments</h3>
                    <p className="text-muted-foreground">
                      Flexible scheduling including evenings and weekends for working families in {pageData.city}.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Business Services</h3>
                    <p className="text-muted-foreground">
                      On-site notarization for {pageData.city} businesses, offices, and commercial transactions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-card shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">{pageData.city} {pageData.primaryZip} Neighborhoods:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {pageData.neighborhoods.map((area, index) => (
                        <li key={index}>• {area}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Local Landmarks We Serve:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {pageData.localLandmarks.map((landmark, index) => (
                        <li key={index}>• {landmark}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Why {pageData.city} Residents Choose Our Service
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  {pageData.city} families and businesses trust us for important document signings because we understand the community&apos;s needs and provide reliable, professional service at your convenience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Background checked and insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="font-medium text-foreground">Mobile to your {pageData.city} location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-brand-blue fill-current" />
                    <span className="font-medium text-foreground">5-star rated service</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-card shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xl">Service Details</h4>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">Service Area:</span>
                      <span>{pageData.city}, {pageData.county} County</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">ZIP Code:</span>
                      <span>{pageData.primaryZip}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">Travel Fee:</span>
                      <span>{pageData.travelFee}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium text-foreground">Availability:</span>
                      <span>Same-day available</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/book-now">Book Appointment</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {BUSINESS_CONFIG.phone}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full Document Library */}
      <DocumentLibrarySection 
        highlightService={pageData.serviceSlug}
        title={`Documents We Notarize in ${pageData.city}`}
        className="bg-background"
      />

      {/* Related Blog Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Helpful Resources for {pageData.city} Residents
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3 line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:underline text-sm font-medium">
                        Read More →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nearby Locations for Cross-Linking */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                Nearby Service Areas
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                We also provide mobile notary services in these nearby locations
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={loc.path}
                    className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {loc.city}, {loc.state}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 ml-6">
                        <span className="text-sm text-muted-foreground">
                          {loc.primaryZip} • {loc.county} County
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 ml-2 transition-colors" />
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/service-areas">
                    View All Service Areas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Need Mobile Notary Service in {pageData.city}?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Trusted by {pageData.city} families and businesses. {pageData.travelFee} for {pageData.primaryZip} area.
          </p>
          <StandardCTAButtons 
            defaultService={pageData.serviceSlug}
            variant="top"
            className="justify-center"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicLocationPage;
