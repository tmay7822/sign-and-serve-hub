// CSV UPLOAD UTILITIES
// For white-label sites to upload their location and route data

import { LocationCity, RouteCity } from '@/data/locations';

export interface CSVUploadResult {
  success: boolean;
  data?: any[];
  errors: string[];
}

// Parse CSV text content
export const parseCSV = (csvText: string): string[][] => {
  const lines = csvText.split('\n');
  const result: string[][] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      // Simple CSV parsing - handles basic cases
      const fields = line.split(',').map(field => field.trim().replace(/^"|"$/g, ''));
      result.push(fields);
    }
  }
  
  return result;
};

// Validate and transform locations CSV
export const processLocationCSV = (csvText: string): CSVUploadResult => {
  const errors: string[] = [];
  const locations: LocationCity[] = [];
  
  try {
    const rows = parseCSV(csvText);
    if (rows.length === 0) {
      return { success: false, errors: ['CSV file is empty'] };
    }
    
    const headers = rows[0];
    if (!headers.includes('county') || !headers.includes('zip') || !headers.includes('state')) {
      return { 
        success: false, 
        errors: ['CSV must contain columns: county, zip, state'] 
      };
    }
    
    const countyIndex = headers.indexOf('county');
    const zipIndex = headers.indexOf('zip');
    const stateIndex = headers.indexOf('state');
    const cityIndex = headers.indexOf('city');
    
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length < 3) {
        errors.push(`Row ${i + 1}: Insufficient columns`);
        continue;
      }
      
      const county = row[countyIndex]?.trim();
      const zip = row[zipIndex]?.trim();
      const state = row[stateIndex]?.trim();
      const city = cityIndex >= 0 ? row[cityIndex]?.trim() : '';
      
      if (!county || !zip || !state) {
        errors.push(`Row ${i + 1}: Missing required fields`);
        continue;
      }
      
      locations.push({
        county,
        city: city || county, // Use county as city if city not provided
        type: 'city',
        primaryZip: zip,
        state
      });
    }
    
    return {
      success: errors.length === 0,
      data: locations,
      errors
    };
    
  } catch (error) {
    return {
      success: false,
      errors: [`Error parsing CSV: ${error instanceof Error ? error.message : 'Unknown error'}`]
    };
  }
};

// Generate routes from locations and services
export const generateRoutesFromLocations = (
  locations: LocationCity[], 
  services: Array<{slug: string, serviceName: string}>
): RouteCity[] => {
  const routes: RouteCity[] = [];
  
  for (const location of locations) {
    for (const service of services) {
      const citySlug = location.city.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      const countySlug = location.county.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
        
      const path = `/${service.slug}/${countySlug}/${citySlug}`;
      const title = `${service.serviceName} in ${location.city}, ${location.state} ${location.primaryZip} | {brand.businessName}`;
      const metaDescription = `Mobile ${service.serviceName} in ${location.city} (${location.primaryZip}), ${location.county} County, ${location.state}. Same-day, certified & insured. Call {brand.phone}.`;
      
      routes.push({
        path,
        serviceSlug: service.slug,
        serviceName: service.serviceName,
        county: location.county,
        city: location.city,
        primaryZip: location.primaryZip,
        state: location.state,
        title,
        metaDescription,
        priority: 'medium'
      });
    }
  }
  
  return routes;
};

// File upload handler
export const handleFileUpload = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvText = event.target?.result as string;
      resolve(csvText);
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsText(file);
  });
};

// Validate business configuration
export interface BusinessConfig {
  businessName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  serviceArea: string;
  [key: string]: any;
}

export const validateBusinessConfig = (config: Partial<BusinessConfig>): CSVUploadResult => {
  const errors: string[] = [];
  const required = ['businessName', 'phone', 'email', 'city', 'state', 'serviceArea'];
  
  for (const field of required) {
    if (!config[field]?.trim()) {
      errors.push(`${field} is required`);
    }
  }
  
  if (config.phone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(config.phone)) {
    errors.push('Phone must be in format: (555) 123-4567');
  }
  
  if (config.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    errors.push('Invalid email format');
  }
  
  return {
    success: errors.length === 0,
    data: [config], // Wrap in array to match expected return type
    errors
  };
};