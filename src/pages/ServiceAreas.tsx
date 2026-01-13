import { useState } from 'react';
import Seo from '@/components/Seo';
import { BasePageTemplate } from '@/components/templates/BasePageTemplate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { MapPin, Phone, Clock, FileText, ChevronDown, ChevronUp, Home, Shield, Globe, Briefcase, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { getCountyData, CountyData, getCityServiceUrl } from '@/utils/parseRoutesCsv';

// Get all county data from CSV
const COUNTY_DATA = getCountyData();

// County descriptions
const COUNTY_DESCRIPTIONS: Record<string, { description: string; featured: boolean }> = {
  'Hamilton': {
    description: 'Full mobile notary services throughout Hamilton County including downtown Cincinnati, emergency visits, and hospital/bedside service.',
    featured: true
  },
  'Warren': {
    description: 'Professional notary services for estate planning, real estate closings, and business documents throughout Warren County.',
    featured: true
  },
  'Butler': {
    description: 'Mobile notary and loan signing services for residential and commercial needs throughout Butler County.',
    featured: true
  },
  'Montgomery': {
    description: 'Same-day and emergency notary services throughout the Dayton metro area including Wright-Patterson AFB.',
    featured: true
  },
  'Greene': {
    description: 'Mobile notary services near Wright-Patterson AFB and throughout Xenia, Beavercreek, and Fairborn areas.',
    featured: false
  },
  'Clinton': {
    description: 'Professional notary services for rural Clinton County communities with flexible scheduling and same-day availability.',
    featured: false
  },
  'Clermont': {
    description: 'Professional mobile notary services for healthcare, legal, and financial documents throughout Clermont County.',
    featured: false
  },
  'Brown': {
    description: 'Rural and residential notary services with flexible scheduling throughout Brown County.',
    featured: false
  },
  'Miami': {
    description: 'Mobile notary services serving Troy, Piqua, and the greater Miami County area with same-day availability.',
    featured: false
  }
};

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

// County card component with expandable cities
const CountyCard = ({ county }: { county: CountyData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const meta = COUNTY_DESCRIPTIONS[county.county] || { description: '', featured: false };
  const displayCities = isOpen ? county.cities : county.cities.slice(0, 6);

  return (
    <Card className={`h-full ${meta.featured ? 'ring-2 ring-primary/20' : ''}`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CollapsibleTrigger asChild>
              <button 
                type="button"
                className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer text-left"
              >
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <CardTitle className="text-xl">{county.county} County</CardTitle>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </CollapsibleTrigger>
            {meta.featured && (
              <Badge variant="default">Core Area</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription>
            {meta.description}
          </CardDescription>
          
          {/* Services Available */}
          <div>
            <p className="font-medium text-sm mb-2 flex items-center gap-1">
              <FileText className="h-4 w-4 text-primary" />
              Services Available:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {county.allServices.map((service) => {
                const Icon = SERVICE_ICONS[service] || FileText;
                return (
                  <Badge key={service} variant="outline" className="text-xs flex items-center gap-1">
                    <Icon className="h-3 w-3" />
                    {service}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Cities & ZIP Codes */}
          <div>
            <p className="font-medium text-sm mb-2">
              Cities & ZIP Codes ({county.cities.length} cities, {county.allZips.length} ZIPs):
            </p>
            <div className="flex flex-wrap gap-2">
              {displayCities.map(({ city, zips }, cityIndex) => (
                <Link 
                  key={cityIndex} 
                  to={getCityServiceUrl(county.county, city, zips[0])}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {city} ({zips.join(', ')}) →
                  </Badge>
                </Link>
              ))}
            </div>
            
            <CollapsibleContent className="mt-2">
              {county.cities.length > 6 && (
                <div className="flex flex-wrap gap-2">
                  {county.cities.slice(6).map(({ city, zips }, cityIndex) => (
                    <Link 
                      key={cityIndex + 6} 
                      to={getCityServiceUrl(county.county, city, zips[0])}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {city} ({zips.join(', ')}) →
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </CollapsibleContent>
            
            {!isOpen && county.cities.length > 6 && (
              <CollapsibleTrigger asChild>
                <button 
                  type="button"
                  className="mt-2 text-sm text-primary hover:underline cursor-pointer flex items-center gap-1"
                >
                  <ChevronDown className="h-3 w-3" />
                  Show all {county.cities.length} cities
                </button>
              </CollapsibleTrigger>
            )}
            
            {isOpen && county.cities.length > 6 && (
              <CollapsibleTrigger asChild>
                <button 
                  type="button"
                  className="mt-2 text-sm text-primary hover:underline cursor-pointer flex items-center gap-1"
                >
                  <ChevronUp className="h-3 w-3" />
                  Show less
                </button>
              </CollapsibleTrigger>
            )}
          </div>
        </CardContent>
      </Collapsible>
    </Card>
  );
};

// All Service Locations - comprehensive directory from CSV
const AllLocationsDirectory = () => {
  const [expandedCounties, setExpandedCounties] = useState<Set<string>>(new Set());

  const toggleCounty = (county: string) => {
    setExpandedCounties(prev => {
      const next = new Set(prev);
      if (next.has(county)) {
        next.delete(county);
      } else {
        next.add(county);
      }
      return next;
    });
  };

  // Calculate totals
  const totalCities = COUNTY_DATA.reduce((sum, c) => sum + c.cities.length, 0);
  const totalZips = new Set(COUNTY_DATA.flatMap(c => c.allZips)).size;

  return (
    <section id="all-locations" className="mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">All Service Locations</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Complete directory of all {totalCities} cities and {totalZips} ZIP codes we serve across {COUNTY_DATA.length} counties.
        </p>
        
        <div className="space-y-4">
          {COUNTY_DATA.map((county) => {
            const isExpanded = expandedCounties.has(county.county);
            const displayCities = isExpanded ? county.cities : county.cities.slice(0, 8);
            
            return (
              <Card key={county.county} className="overflow-hidden">
                <CardHeader 
                  className="bg-primary/5 border-b cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => toggleCounty(county.county)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <MapPin className="h-5 w-5 text-primary" />
                      {county.county} County
                      <Badge variant="secondary" className="ml-2">
                        {county.cities.length} cities
                      </Badge>
                      <Badge variant="outline" className="ml-1">
                        {county.allZips.length} ZIPs
                      </Badge>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground ml-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
                      )}
                    </CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {county.allServices.map(service => {
                        const Icon = SERVICE_ICONS[service] || FileText;
                        return (
                          <Badge key={service} variant="outline" className="text-xs flex items-center gap-1">
                            <Icon className="h-3 w-3" />
                            {service}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {displayCities.map(({ city, zips, services }) => (
                      <Link
                        key={city}
                        to={getCityServiceUrl(county.county, city, zips[0])}
                        className="block group"
                      >
                        <div className="p-3 rounded-lg border border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {city}
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            ZIP: {zips.join(', ')}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {services.slice(0, 3).map(service => (
                              <Badge key={service} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                            {services.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{services.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {county.cities.length > 8 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCounty(county.county);
                      }}
                      className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-3 w-3" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3 w-3" />
                          Show all {county.cities.length} cities in {county.county} County
                        </>
                      )}
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{totalCities}</div>
            <div className="text-sm text-muted-foreground">Cities Served</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{totalZips}</div>
            <div className="text-sm text-muted-foreground">ZIP Codes</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{COUNTY_DATA.length}</div>
            <div className="text-sm text-muted-foreground">Counties</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">Same Day</div>
            <div className="text-sm text-muted-foreground">Availability</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  return (
    <>
      <Seo
        title="Service Areas - Mobile Notary Throughout Southwest Ohio"
        description="Professional mobile notary services across Hamilton, Warren, Butler, Montgomery, Greene, Clinton, Clermont, and Brown counties. Same-day appointments available."
        keywords="mobile notary Southwest Ohio, Hamilton County notary, Warren County mobile notary, Montgomery County notary services"
        canonical="https://www.signedontime.com/service-areas"
      />

      <BasePageTemplate
        heroSection={
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <BreadcrumbNav />
              <div className="text-center mt-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Professional mobile notary services throughout Southwest Ohio. We come to you - home, office, or hospital.
                </p>
                
                {/* CTAs in hero */}
                <StandardCTAButtons defaultService="general-notary" className="max-w-2xl mx-auto mb-6" />
                
                {/* Jump link to counties */}
                <a 
                  href="#counties-we-serve" 
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <MapPin className="h-4 w-4" />
                  View all counties we serve
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        }
        defaultService="general-notary"
        showCTA={false}
        mainClassName="pt-8 pb-16"
      >
        {/* Counties Overview - Immediately visible */}
        <section id="counties-we-serve" className="mb-16 scroll-mt-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Counties We Serve</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Click on any county to expand and see all cities and ZIP codes. We offer the full range of notary services in every location.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {COUNTY_DATA.map((county, index) => (
                <CountyCard key={index} county={county} />
              ))}
            </div>
          </div>
        </section>

        {/* All Locations Directory */}
        <AllLocationsDirectory />

        {/* Service Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Flexible Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Available 7 days a week including evenings and weekends. 
                    Emergency services available 24/7.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Mobile Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We come to your location - home, office, hospital, or anywhere 
                    you need professional notary services.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Easy Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Call {BUSINESS_CONFIG.phone} or book online for fast, 
                    professional notary services in your area.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-primary/5">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
                <p className="text-lg mb-6">
                  We may still be able to help! Our service area is continuously expanding, 
                  and we accommodate special requests when possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Us Today
                  </Link>
                  <a 
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Call {BUSINESS_CONFIG.phone}
                  </a>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Want to learn more about our company?
                  </p>
                  <Link 
                    to="/about" 
                    className="text-primary hover:underline font-medium"
                  >
                    Read Our Story & Values →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </BasePageTemplate>
    </>
  );
};

export default ServiceAreas;
