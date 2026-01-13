import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, FileText, Home, Shield, Globe, Briefcase, Heart } from 'lucide-react';
import { LOCATION_PAGES, LocationPageData } from '@/data/locationPages';

// Group locations by county
const groupByCounty = (locations: LocationPageData[]): Record<string, LocationPageData[]> => {
  return locations.reduce((acc, location) => {
    const county = location.county;
    if (!acc[county]) {
      acc[county] = [];
    }
    acc[county].push(location);
    return acc;
  }, {} as Record<string, LocationPageData[]>);
};

// County order for display (primary service areas first)
const COUNTY_ORDER = ['Hamilton', 'Warren', 'Butler', 'Montgomery', 'Greene', 'Clinton', 'Clermont', 'Brown', 'Miami'];

// Service icons mapping
const SERVICE_ICONS: Record<string, React.ElementType> = {
  'Mobile Notary': FileText,
  'General Notary': FileText,
  'Loan Signing Agent': Home,
  'Power of Attorney Notary': Shield,
  'Wills & Estate Notary': Shield,
  'Apostille Services': Globe,
  'Business Notary': Briefcase,
  'Healthcare Notary': Heart,
};

// Get unique services per county
const getServicesForCounty = (locations: LocationPageData[]): string[] => {
  const services = new Set<string>();
  locations.forEach(loc => {
    services.add(loc.serviceName);
  });
  return Array.from(services);
};

const LocationIndex = () => {
  const locationsByCounty = groupByCounty(LOCATION_PAGES);
  
  // Sort counties by defined order
  const sortedCounties = Object.keys(locationsByCounty).sort((a, b) => {
    const indexA = COUNTY_ORDER.indexOf(a);
    const indexB = COUNTY_ORDER.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">All Service Locations</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Click on any location below for detailed information about mobile notary services in that area, 
          including neighborhoods served, popular services, and local landmarks.
        </p>
        
        <div className="space-y-8">
          {sortedCounties.map((county) => {
            const countyLocations = locationsByCounty[county];
            const countyServices = getServicesForCounty(countyLocations);
            
            return (
              <Card key={county} className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <MapPin className="h-5 w-5 text-primary" />
                      {county} County
                      <Badge variant="secondary" className="ml-2">
                        {countyLocations.length} location{countyLocations.length !== 1 ? 's' : ''}
                      </Badge>
                    </CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {countyServices.map(service => {
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countyLocations
                      .sort((a, b) => {
                        // Sort by priority first, then by city name
                        const priorityOrder = { high: 0, medium: 1, low: 2 };
                        const priorityDiff = (priorityOrder[a.priority as keyof typeof priorityOrder] || 2) - 
                                            (priorityOrder[b.priority as keyof typeof priorityOrder] || 2);
                        if (priorityDiff !== 0) return priorityDiff;
                        return a.city.localeCompare(b.city);
                      })
                      .map((location) => {
                        const ServiceIcon = SERVICE_ICONS[location.serviceName] || FileText;
                        return (
                          <Link
                            key={location.slug}
                            to={location.path}
                            className="group flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                  {location.city}
                                </span>
                                {location.priority === 'high' && (
                                  <Badge variant="default" className="text-xs shrink-0">Popular</Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-muted-foreground">
                                  {location.primaryZip}
                                </span>
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground truncate flex items-center gap-1">
                                  <ServiceIcon className="h-3 w-3" />
                                  {location.serviceName}
                                </span>
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 ml-2 transition-colors" />
                          </Link>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{LOCATION_PAGES.length}</div>
            <div className="text-sm text-muted-foreground">Total Locations</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{sortedCounties.length}</div>
            <div className="text-sm text-muted-foreground">Counties Served</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">
              {LOCATION_PAGES.filter(l => l.travelFee === 'No travel fee').length}
            </div>
            <div className="text-sm text-muted-foreground">No Travel Fee</div>
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

export default LocationIndex;
