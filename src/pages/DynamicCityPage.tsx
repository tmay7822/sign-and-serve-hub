// DYNAMIC CITY PAGE
// Renders a service page for any city/county/ZIP from the service areas directory

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
import { getCountyData, CityData, CountyData } from '@/utils/parseRoutesCsv';
import { MapPin, Clock, Shield, Star, Phone, FileText, ArrowRight, Home, Globe, Briefcase, Heart } from 'lucide-react';

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

const DynamicCityPage: React.FC = () => {
  const { county: countyParam, cityZip: cityZipParam } = useParams<{ county: string; cityZip: string }>();
  const navigate = useNavigate();

  // Parse URL params
  const countyName = countyParam?.replace(/-county$/i, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || '';
  
  // Parse city and zip from cityZip param (e.g., "cincinnati-45202" or "blue-ash-45242")
  const cityZipMatch = cityZipParam?.match(/^(.+)-(\d{5})$/);
  const citySlug = cityZipMatch?.[1] || '';
  const zipCode = cityZipMatch?.[2] || '';
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Find the county and city data
  const countyData = getCountyData();
  const county = countyData.find(c => c.county.toLowerCase() === countyName.toLowerCase());
  const cityData = county?.cities.find(c => 
    c.city.toLowerCase() === cityName.toLowerCase() && 
    c.zips.includes(zipCode)
  ) || county?.cities.find(c => 
    c.city.toLowerCase() === cityName.toLowerCase()
  );

  // Set page metadata
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!county || !cityData) return;

    const title = `Mobile Notary in ${cityData.city}, OH ${zipCode || cityData.zips[0]} | ${county.county} County`;
    const description = `Professional mobile notary services in ${cityData.city}, ${county.county} County. Same-day appointments for loan signings, estate planning, real estate closings, and all notarization needs.`;

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
  }, [county, cityData, zipCode]);

  // If no data found, redirect to service areas
  if (!county || !cityData) {
    // Use effect to navigate after render
    useEffect(() => {
      navigate('/service-areas', { replace: true });
    }, [navigate]);
    return null;
  }

  const displayZip = zipCode || cityData.zips[0];
  const services = cityData.services.length > 0 ? cityData.services : county.allServices;

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessSchema 
        serviceName={`Mobile Notary in ${cityData.city}`}
        serviceDescription={`Professional mobile notary services in ${cityData.city}, ${county.county} County, Ohio`}
        url={`/service/${countyParam}/${cityZipParam}`}
      />
      <BreadcrumbSchema />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <BreadcrumbNav />
          <div className="text-center max-w-4xl mx-auto mt-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mobile Notary in {cityData.city}, OH {displayZip}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional mobile notary services in {cityData.city}, {county.county} County. 
              We come to your location with same-day availability and certified, insured service.
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
                <Clock className="h-4 w-4" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Mobile to {cityData.city}</span>
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

      {/* Services Available */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Notary Services Available in {cityData.city}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => {
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
                        Professional {service.toLowerCase()} services in {cityData.city}, {county.county} County.
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

      {/* Local Service Details */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Why Choose Our Notary Service in {cityData.city}?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mobile Service to Your Location</h3>
                    <p className="text-muted-foreground">
                      We travel to your home, office, hospital, or any convenient location in {cityData.city} 
                      and throughout {county.county} County.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Same-day appointments often available. We work around your schedule with 
                      evening and weekend appointments in {cityData.city}.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional & Certified</h3>
                    <p className="text-muted-foreground">
                      Licensed Ohio notary with E&O insurance, background check, and bonding. 
                      Your documents are handled with complete professionalism.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5-Star Customer Service</h3>
                    <p className="text-muted-foreground">
                      Trusted by families and businesses in {cityData.city}. Read our reviews 
                      and see why customers choose us.
                    </p>
                  </div>
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
                    <span className="font-medium text-foreground">City:</span>
                    <span className="text-muted-foreground">{cityData.city}, OH</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">County:</span>
                    <span className="text-muted-foreground">{county.county} County</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">ZIP Codes:</span>
                    <span className="text-muted-foreground">{cityData.zips.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="font-medium text-foreground">Response Time:</span>
                    <span className="text-muted-foreground">Same-day available</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium text-foreground">Services:</span>
                    <span className="text-muted-foreground">{services.length} available</span>
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
                  vertical={true}
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations in County */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Other Locations in {county.county} County
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {county.cities
              .filter(c => c.city !== cityData.city)
              .slice(0, 15)
              .map((city) => {
                const url = `/service/${county.county.toLowerCase()}-county/${city.city.toLowerCase().replace(/\s+/g, '-')}-${city.zips[0]}`;
                return (
                  <Link key={city.city} to={url}>
                    <Badge 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city.city} ({city.zips[0]})
                    </Badge>
                  </Link>
                );
              })}
            {county.cities.length > 16 && (
              <Link to="/service-areas">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  +{county.cities.length - 16} more
                </Badge>
              </Link>
            )}
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
              Ready for Professional Notary Service in {cityData.city}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for reliable mobile notary services in {cityData.city}, {county.county} County. 
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

export default DynamicCityPage;
