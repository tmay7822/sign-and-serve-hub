// LOCATIONS DATA MODEL
// This defines the location structure for local SEO pages

export interface LocationCity {
  county: string;
  city: string;
  type: 'city' | 'township' | 'village';
  primaryZip: string;
  state: string;
  population?: number;
  latitude?: number;
  longitude?: number;
}

export interface RouteCity {
  path: string;
  serviceSlug: string;
  serviceName: string;
  county: string;
  city: string;
  primaryZip: string;
  state: string;
  title: string;
  metaDescription: string;
  priority: 'high' | 'medium' | 'low';
}

// Import the actual location data from CSV
export const LOCATIONS_CITY: LocationCity[] = [
  { county: "Hamilton", city: "Cincinnati", type: "city", primaryZip: "45202", state: "OH", population: 309317 },
  { county: "Hamilton", city: "Blue Ash", type: "city", primaryZip: "45242", state: "OH", population: 12114 },
  { county: "Hamilton", city: "Springdale", type: "city", primaryZip: "45246", state: "OH", population: 11223 },
  { county: "Hamilton", city: "Forest Park", type: "city", primaryZip: "45240", state: "OH", population: 18720 },
  { county: "Warren", city: "Mason", type: "city", primaryZip: "45040", state: "OH", population: 34792 },
  { county: "Warren", city: "Lebanon", type: "city", primaryZip: "45036", state: "OH", population: 20841 },
  { county: "Warren", city: "Springboro", type: "city", primaryZip: "45066", state: "OH", population: 18062 },
  { county: "Warren", city: "Franklin", type: "city", primaryZip: "45005", state: "OH", population: 11765 },
  { county: "Warren", city: "West Chester", type: "city", primaryZip: "45069", state: "OH", population: 63914 },
  { county: "Montgomery", city: "Dayton", type: "city", primaryZip: "45402", state: "OH", population: 137644 },
  { county: "Montgomery", city: "Kettering", type: "city", primaryZip: "45429", state: "OH", population: 55870 },
  { county: "Montgomery", city: "Centerville", type: "city", primaryZip: "45459", state: "OH", population: 23999 },
  { county: "Montgomery", city: "Vandalia", type: "city", primaryZip: "45377", state: "OH", population: 15246 },
  { county: "Montgomery", city: "Miamisburg", type: "city", primaryZip: "45342", state: "OH", population: 19749 },
  { county: "Butler", city: "Hamilton", type: "city", primaryZip: "45011", state: "OH", population: 62082 },
  { county: "Butler", city: "Fairfield", type: "city", primaryZip: "45014", state: "OH", population: 42510 },
  { county: "Butler", city: "Oxford", type: "city", primaryZip: "45056", state: "OH", population: 22072 },
  { county: "Butler", city: "Monroe", type: "city", primaryZip: "45050", state: "OH", population: 15412 },
  { county: "Greene", city: "Beavercreek", type: "city", primaryZip: "45324", state: "OH", population: 47741 },
  { county: "Greene", city: "Fairborn", type: "city", primaryZip: "45324", state: "OH", population: 32456 },
  { county: "Greene", city: "Xenia", type: "city", primaryZip: "45385", state: "OH", population: 25441 },
  { county: "Greene", city: "Yellow Springs", type: "city", primaryZip: "45387", state: "OH", population: 3697 },
  { county: "Clinton", city: "Wilmington", type: "city", primaryZip: "45177", state: "OH", population: 12425 },
  { county: "Clinton", city: "Blanchester", type: "city", primaryZip: "45107", state: "OH", population: 4220 }
];

// Generate route combinations for high-traffic service/location pairs
export const generateRoutes = (): RouteCity[] => {
  const routes: RouteCity[] = [];
  
  // High-priority service/location combinations
  const highPriorityServices = ['general-notary', 'loan-signings', 'estate-plans'];
  const highPriorityLocations = LOCATIONS_CITY.filter(loc => 
    (loc.population && loc.population > 20000) || 
    ['Cincinnati', 'Dayton', 'Mason', 'West Chester', 'Hamilton'].includes(loc.city)
  );

  // Generate high-priority routes
  highPriorityServices.forEach(serviceSlug => {
    highPriorityLocations.forEach(location => {
      const serviceName = getServiceNameBySlug(serviceSlug);
      routes.push({
        path: `/${serviceSlug}/${location.county.toLowerCase()}/${location.city.toLowerCase().replace(/\s+/g, '-')}`,
        serviceSlug,
        serviceName,
        county: location.county,
        city: location.city,
        primaryZip: location.primaryZip,
        state: location.state,
        title: `${serviceName} in ${location.city}, ${location.state} ${location.primaryZip} | Professional Mobile Service`,
        metaDescription: `Professional ${serviceName.toLowerCase()} services in ${location.city}, ${location.county} County, ${location.state}. Mobile notary serving ${location.primaryZip}. Same-day appointments available.`,
        priority: 'high'
      });
    });
  });

  // Medium-priority routes for specialized services in major cities
  const mediumPriorityServices = ['real-estate', 'apostille', 'business-services'];
  const majorCities = LOCATIONS_CITY.filter(loc => 
    ['Cincinnati', 'Dayton', 'Mason', 'West Chester', 'Hamilton', 'Kettering'].includes(loc.city)
  );

  mediumPriorityServices.forEach(serviceSlug => {
    majorCities.forEach(location => {
      const serviceName = getServiceNameBySlug(serviceSlug);
      routes.push({
        path: `/${serviceSlug}/${location.county.toLowerCase()}/${location.city.toLowerCase().replace(/\s+/g, '-')}`,
        serviceSlug,
        serviceName,
        county: location.county,
        city: location.city,
        primaryZip: location.primaryZip,
        state: location.state,
        title: `${serviceName} in ${location.city}, ${location.state} ${location.primaryZip}`,
        metaDescription: `${serviceName} services in ${location.city}, ${location.county} County. Professional mobile service to ${location.primaryZip} area.`,
        priority: 'medium'
      });
    });
  });

  return routes;
};

function getServiceNameBySlug(slug: string): string {
  const serviceNames: { [key: string]: string } = {
    'general-notary': 'General Notary',
    'loan-signings': 'Loan Signings',
    'estate-plans': 'Estate Planning',
    'real-estate': 'Real Estate Notary',
    'apostille': 'Apostille Services',
    'business-services': 'Business Notary Services',
    'healthcare-notary': 'Healthcare Notary',
    'college-18-plus': 'College & 18+ Services',
    'personal-family': 'Personal & Family Notary',
    'vehicles-dmv': 'Vehicle & DMV Services'
  };
  return serviceNames[slug] || 'Notary Services';
}

// Helper functions
export const getLocationByCity = (city: string, county?: string): LocationCity | undefined => {
  return LOCATIONS_CITY.find(location => 
    location.city.toLowerCase() === city.toLowerCase() &&
    (!county || location.county.toLowerCase() === county.toLowerCase())
  );
};

export const getLocationsByCounty = (county: string): LocationCity[] => {
  return LOCATIONS_CITY.filter(location => 
    location.county.toLowerCase() === county.toLowerCase()
  );
};

export const getRouteByPath = (path: string): RouteCity | undefined => {
  const routes = generateRoutes();
  return routes.find(route => route.path === path);
};

export const getRoutesByService = (serviceSlug: string): RouteCity[] => {
  const routes = generateRoutes();
  return routes.filter(route => route.serviceSlug === serviceSlug);
};

export const getHighPriorityRoutes = (): RouteCity[] => {
  const routes = generateRoutes();
  return routes.filter(route => route.priority === 'high');
};

export const ROUTES_CITY = generateRoutes();