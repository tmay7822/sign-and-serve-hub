// Parse routes_city_corrected.csv to build comprehensive county/city/zip data
import routesCsvRaw from '@/data/routes_city_corrected.csv?raw';

export interface CityData {
  city: string;
  zips: string[];
  services: string[];
}

export interface CountyData {
  county: string;
  cities: CityData[];
  allZips: string[];
  allServices: string[];
}

interface ParsedRoute {
  path: string;
  serviceSlug: string;
  serviceName: string;
  county: string;
  city: string;
  primaryZip: string;
  state: string;
}

// Parse CSV text into rows
const parseCSVRows = (csvText: string): string[][] => {
  const lines = csvText.trim().split('\n');
  return lines.map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    return values;
  });
};

// Parse the routes CSV and build county data
export const parseRoutesCSV = (): CountyData[] => {
  const rows = parseCSVRows(routesCsvRaw);
  const headers = rows[0];
  const dataRows = rows.slice(1);

  // Find column indices
  const countyIdx = headers.indexOf('county');
  const cityIdx = headers.indexOf('city');
  const zipIdx = headers.indexOf('primaryZip');
  const serviceNameIdx = headers.indexOf('serviceName');

  // Build county -> city -> data map
  const countyMap: Record<string, Record<string, { zips: Set<string>; services: Set<string> }>> = {};

  dataRows.forEach(row => {
    if (row.length < Math.max(countyIdx, cityIdx, zipIdx, serviceNameIdx) + 1) return;
    
    const county = row[countyIdx];
    const city = row[cityIdx].replace(/\s*\(part\)|\s*\(mostly\)/gi, '').trim(); // Clean up city names
    const zip = row[zipIdx];
    const serviceName = row[serviceNameIdx];

    if (!county || !city || !zip) return;

    if (!countyMap[county]) {
      countyMap[county] = {};
    }
    if (!countyMap[county][city]) {
      countyMap[county][city] = { zips: new Set(), services: new Set() };
    }
    
    countyMap[county][city].zips.add(zip);
    if (serviceName) {
      countyMap[county][city].services.add(serviceName);
    }
  });

  // Convert to array format
  const countyOrder = ['Hamilton', 'Warren', 'Butler', 'Montgomery', 'Greene', 'Clinton', 'Clermont', 'Brown', 'Miami'];
  
  const result: CountyData[] = [];
  
  // First add counties in order
  countyOrder.forEach(county => {
    if (countyMap[county]) {
      const cities = Object.entries(countyMap[county])
        .map(([city, data]) => ({
          city,
          zips: Array.from(data.zips).sort(),
          services: Array.from(data.services).sort()
        }))
        .sort((a, b) => a.city.localeCompare(b.city));

      const allZips = new Set<string>();
      const allServices = new Set<string>();
      cities.forEach(c => {
        c.zips.forEach(z => allZips.add(z));
        c.services.forEach(s => allServices.add(s));
      });

      result.push({
        county,
        cities,
        allZips: Array.from(allZips).sort(),
        allServices: Array.from(allServices).sort()
      });
    }
  });

  // Add any remaining counties not in order
  Object.keys(countyMap).forEach(county => {
    if (!countyOrder.includes(county)) {
      const cities = Object.entries(countyMap[county])
        .map(([city, data]) => ({
          city,
          zips: Array.from(data.zips).sort(),
          services: Array.from(data.services).sort()
        }))
        .sort((a, b) => a.city.localeCompare(b.city));

      const allZips = new Set<string>();
      const allServices = new Set<string>();
      cities.forEach(c => {
        c.zips.forEach(z => allZips.add(z));
        c.services.forEach(s => allServices.add(s));
      });

      result.push({
        county,
        cities,
        allZips: Array.from(allZips).sort(),
        allServices: Array.from(allServices).sort()
      });
    }
  });

  return result;
};

// Memoized version
let cachedCountyData: CountyData[] | null = null;

export const getCountyData = (): CountyData[] => {
  if (!cachedCountyData) {
    cachedCountyData = parseRoutesCSV();
  }
  return cachedCountyData;
};
