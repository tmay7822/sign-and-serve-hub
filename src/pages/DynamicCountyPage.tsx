// DYNAMIC COUNTY PAGE
// Renders a service page for an entire county showing all cities

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';
import { getCountyData, CountyData, getCityServiceUrl } from '@/utils/parseRoutesCsv';
import { MapPin, Clock, Shield, Star, Phone, FileText, ArrowRight, Home, Globe, Briefcase, Heart, Users } from 'lucide-react';

// Service icons mapping
const SERVICE_ICONS: Record<string, React.ElementType> = {
  'General Notary': FileText,
  'Loan Signing': Home,
  'Estate Planning': Shield,
  'Real Estate': Home,
  'Apostille': Globe,
  'Business Services': Briefcase,
  'Healthcare Notary': Heart,
};

// Service slug mapping
const SERVICE_SLUGS: Record<string, string> = {
  'General Notary': 'general-notary',
  'Loan Signing': 'loan-signings',
  'Estate Planning': 'estate-plans',
  'Real Estate': 'real-estate',
  'Apostille': 'apostille',
  'Business Services': 'business-services',
  'Healthcare Notary': 'healthcare-notary',
};

const DynamicCountyPage: React.FC = () => {
  const { county: countyParam } = useParams<{ county: string }>();
  const navigate = useNavigate();

  // Parse URL param (e.g., "hamilton-county" -> "Hamilton")
  const countyName = countyParam?.replace(/-county$/i, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || '';

  // Find the county data
  const countyData = getCountyData();
  const county = countyData.find(c => c.county.toLowerCase() === countyName.toLowerCase());

  // Set page metadata
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!county) return;

    const title = `Mobile Notary in ${county.county} County, Ohio | All Cities & Services`;
    const description = `Professional mobile notary services throughout ${county.county} County, Ohio. Serving ${county.cities.length} cities including ${county.cities.slice(0, 3).map(c => c.city).join(', ')} and more. Same-day appointments available.`;

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [county]);

  // If no data found, redirect to service areas
  if (!county) {
    useEffect(() => {
      navigate('/service-areas', { replace: true });
    }, [navigate]);
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema 
        serviceName={`Mobile Notary in ${county.county} County`}
        serviceDescription={`Professional mobile notary services throughout ${county.county} County, Ohio`}
        url={`/service/${countyParam}`}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <BreadcrumbNav />
          <div className="text-center max-w-4xl mx-auto mt-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mobile Notary in {county.county} County, Ohio
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional mobile notary services throughout {county.county} County. 
              Serving {county.cities.length} cities with same-day availability and certified, insured service.
            </p>

            <div className="mb-8">
              <StandardCTAButtons 
                defaultService="general-notary"
                variant="top"
                className="justify-center"
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{county.cities.length} Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{county.allZips.length} ZIP Codes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Notary Services in {county.county} County
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {county.allServices.map((service) => {
              const Icon = SERVICE_ICONS[service] || FileText;
              const slug = SERVICE_SLUGS[service] || 'general-notary';
              
              return (
                <Link key={service} to={`/${slug}`}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Professional {service.toLowerCase()} services throughout {county.county} County.
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Cities in County */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center">
            All Cities in {county.county} County
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Click on any city to view detailed service information and schedule an appointment.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {county.cities.map((cityData) => {
              const url = getCityServiceUrl(county.county, cityData.city, cityData.zips[0]);
              
              return (
                <Link key={cityData.city} to={url} className="group">
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cityData.city}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        ZIP: {cityData.zips.join(', ')}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {cityData.services.slice(0, 2).map(service => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {cityData.services.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{cityData.services.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Why Choose Our Notary Service in {county.county} County?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">County-Wide Mobile Service</h3>
                    <p className="text-muted-foreground">
                      We travel to all {county.cities.length} cities in {county.county} County. 
                      Home, office, hospital - we come to you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Same-Day Appointments</h3>
                    <p className="text-muted-foreground">
                      Flexible scheduling with evening and weekend availability. 
                      Emergency service for urgent needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional & Certified</h3>
                    <p className="text-muted-foreground">
                      Licensed Ohio notary with E&O insurance, background check, and bonding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5-Star Customer Service</h3>
                    <p className="text-muted-foreground">
                      Trusted by families and businesses throughout {county.county} County.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 bg-card shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {county.county} County Service Information
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Cities Served:</span>
                    <span className="text-muted-foreground">{county.cities.length}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">ZIP Codes:</span>
                    <span className="text-muted-foreground">{county.allZips.length}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Services:</span>
                    <span className="text-muted-foreground">{county.allServices.length} available</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Response Time:</span>
                    <span className="text-muted-foreground">Same-day available</span>
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

                <StandardCTAButtons 
                  defaultService="general-notary"
                  className="flex-col gap-3"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Counties */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Other Counties We Serve
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {countyData
              .filter(c => c.county !== county.county)
              .map((otherCounty) => {
                const url = `/service/${otherCounty.county.toLowerCase()}-county`;
                return (
                  <Link key={otherCounty.county} to={url}>
                    <Badge 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-sm py-2 px-4"
                    >
                      {otherCounty.county} County ({otherCounty.cities.length} cities)
                    </Badge>
                  </Link>
                );
              })}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/service-areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Ready for Professional Notary Service in {county.county} County?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for reliable mobile notary services throughout {county.county} County. 
              Same-day appointments often available.
            </p>
            
            <StandardCTAButtons 
              defaultService="general-notary"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicCountyPage;
