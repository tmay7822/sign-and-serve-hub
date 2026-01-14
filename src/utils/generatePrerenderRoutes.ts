// Utility to generate all service routes for pre-rendering
import { getCountyData, getCityServiceUrl } from './parseRoutesCsv';

/**
 * Generates all county service page routes
 * Format: /service/{county}-county
 */
export const generateCountyRoutes = (): string[] => {
  const countyData = getCountyData();
  return countyData.map(county => 
    `/service/${county.county.toLowerCase()}-county`
  );
};

/**
 * Generates all city service page routes
 * Format: /service/{county}-county/{city}-{zip}
 */
export const generateCityRoutes = (): string[] => {
  const countyData = getCountyData();
  const routes: string[] = [];
  
  countyData.forEach(county => {
    county.cities.forEach(city => {
      const citySlug = city.city.toLowerCase().replace(/\s+/g, '-');
      const primaryZip = city.zips[0];
      routes.push(`/service/${county.county.toLowerCase()}-county/${citySlug}-${primaryZip}`);
    });
  });
  
  return routes;
};

/**
 * Generates all service routes (counties + cities)
 * Use this to get the complete list for pre-rendering
 */
export const generateAllServiceRoutes = (): string[] => {
  return [
    ...generateCountyRoutes(),
    ...generateCityRoutes()
  ];
};

/**
 * Gets the top N high-priority city routes for initial pre-rendering
 * Prioritizes major cities and core service areas
 */
export const getHighPriorityCityRoutes = (limit: number = 50): string[] => {
  const countyData = getCountyData();
  const priorityRoutes: string[] = [];
  
  // Priority counties (core service areas)
  const priorityCounties = ['Hamilton', 'Warren', 'Butler', 'Montgomery'];
  
  // First, add cities from priority counties
  priorityCounties.forEach(countyName => {
    const county = countyData.find(c => c.county === countyName);
    if (county) {
      county.cities.forEach(city => {
        const citySlug = city.city.toLowerCase().replace(/\s+/g, '-');
        priorityRoutes.push(`/service/${county.county.toLowerCase()}-county/${citySlug}-${city.zips[0]}`);
      });
    }
  });
  
  // Then add remaining counties
  countyData
    .filter(c => !priorityCounties.includes(c.county))
    .forEach(county => {
      county.cities.forEach(city => {
        const citySlug = city.city.toLowerCase().replace(/\s+/g, '-');
        priorityRoutes.push(`/service/${county.county.toLowerCase()}-county/${citySlug}-${city.zips[0]}`);
      });
    });
  
  return priorityRoutes.slice(0, limit);
};

// Export a summary for debugging
export const getRouteSummary = () => {
  const countyRoutes = generateCountyRoutes();
  const cityRoutes = generateCityRoutes();
  
  return {
    totalCounties: countyRoutes.length,
    totalCities: cityRoutes.length,
    totalRoutes: countyRoutes.length + cityRoutes.length,
    countyRoutes,
    sampleCityRoutes: cityRoutes.slice(0, 10)
  };
};
