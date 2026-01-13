// Parse routes_city_corrected.csv to build comprehensive county/city/zip data
import routesCsvRaw from '@/data/routes_city_corrected.csv?raw';
import { LOCATION_PAGES } from '@/data/locationPages';

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

// Get URL for a specific city - checks LOCATION_PAGES first, then generates dynamic URL
export const getCityServiceUrl = (county: string, city: string, zip: string): string => {
  // First check if there's a dedicated page in LOCATION_PAGES
  const existingPage = LOCATION_PAGES.find(page => {
    const cityMatch = page.city.toLowerCase() === city.toLowerCase();
    const zipMatch = page.primaryZip === zip;
    return cityMatch && zipMatch;
  });
  
  if (existingPage) {
    return existingPage.path;
  }
  
  // Generate dynamic URL for cities without dedicated pages
  const countySlug = county.toLowerCase().replace(/\s+/g, '-') + '-county';
  const citySlug = city.toLowerCase().replace(/\s+/g, '-') + '-' + zip;
  return `/service/${countySlug}/${citySlug}`;
};

// Comprehensive fallback data for when CSV parsing fails
const getFallbackCountyData = (): CountyData[] => {
  const allServices = ['General Notary', 'Loan Signing', 'Estate Planning', 'Real Estate', 'Apostille', 'Business Services', 'Healthcare Notary'];
  
  return [
    {
      county: 'Hamilton',
      cities: [
        { city: 'Cincinnati', zips: ['45202', '45203', '45204', '45205', '45206', '45207', '45208', '45209', '45211', '45212', '45213', '45214', '45215', '45216', '45217', '45218', '45219', '45220', '45223', '45224', '45225', '45226', '45227', '45229', '45230', '45231', '45232', '45233', '45236', '45237', '45238', '45239', '45240', '45241', '45243', '45244', '45245', '45246', '45247', '45248', '45249', '45251', '45252', '45255'], services: allServices },
        { city: 'Blue Ash', zips: ['45242'], services: allServices },
        { city: 'Springdale', zips: ['45246'], services: allServices },
        { city: 'Forest Park', zips: ['45240'], services: allServices },
        { city: 'Sharonville', zips: ['45241'], services: allServices },
        { city: 'Montgomery', zips: ['45242'], services: allServices },
        { city: 'Indian Hill', zips: ['45243'], services: allServices },
        { city: 'Madeira', zips: ['45243'], services: allServices },
        { city: 'Loveland', zips: ['45140'], services: allServices },
        { city: 'Norwood', zips: ['45212'], services: allServices },
        { city: 'Deer Park', zips: ['45236'], services: allServices },
        { city: 'Reading', zips: ['45215'], services: allServices },
        { city: 'Evendale', zips: ['45241'], services: allServices },
        { city: 'Glendale', zips: ['45246'], services: allServices },
        { city: 'Golf Manor', zips: ['45237'], services: allServices },
        { city: 'Silverton', zips: ['45236'], services: allServices },
        { city: 'Amberley Village', zips: ['45237'], services: allServices },
        { city: 'Mariemont', zips: ['45227'], services: allServices },
        { city: 'Terrace Park', zips: ['45174'], services: allServices },
        { city: 'Newtown', zips: ['45244'], services: allServices },
        { city: 'Anderson Township', zips: ['45230', '45244', '45255'], services: allServices },
        { city: 'Colerain Township', zips: ['45239', '45247', '45251'], services: allServices },
        { city: 'Green Township', zips: ['45211', '45238', '45247', '45248'], services: allServices },
        { city: 'Delhi Township', zips: ['45233', '45238'], services: allServices },
        { city: 'Sycamore Township', zips: ['45236', '45242', '45249'], services: allServices },
        { city: 'Symmes Township', zips: ['45140', '45249'], services: allServices },
        { city: 'Columbia Township', zips: ['45227', '45243'], services: allServices },
        { city: 'Springfield Township', zips: ['45215', '45224', '45231', '45240', '45246'], services: allServices },
        { city: 'Whitewater Township', zips: ['45002', '45030', '45052'], services: allServices },
        { city: 'Harrison', zips: ['45030'], services: allServices },
        { city: 'Cleves', zips: ['45002'], services: allServices },
        { city: 'North Bend', zips: ['45052'], services: allServices },
        { city: 'Addyston', zips: ['45001'], services: allServices },
        { city: 'Mt. Healthy', zips: ['45231'], services: allServices },
        { city: 'Wyoming', zips: ['45215'], services: allServices },
        { city: 'Lockland', zips: ['45215'], services: allServices },
        { city: 'Lincoln Heights', zips: ['45215'], services: allServices },
        { city: 'Woodlawn', zips: ['45215'], services: allServices },
        { city: 'Arlington Heights', zips: ['45215'], services: allServices },
        { city: 'Finneytown', zips: ['45224', '45231'], services: allServices },
      ],
      allZips: ['45001', '45002', '45030', '45052', '45140', '45174', '45202', '45203', '45204', '45205', '45206', '45207', '45208', '45209', '45211', '45212', '45213', '45214', '45215', '45216', '45217', '45218', '45219', '45220', '45223', '45224', '45225', '45226', '45227', '45229', '45230', '45231', '45232', '45233', '45236', '45237', '45238', '45239', '45240', '45241', '45242', '45243', '45244', '45245', '45246', '45247', '45248', '45249', '45251', '45252', '45255'],
      allServices
    },
    {
      county: 'Warren',
      cities: [
        { city: 'Mason', zips: ['45040'], services: allServices },
        { city: 'Lebanon', zips: ['45036'], services: allServices },
        { city: 'Springboro', zips: ['45066'], services: allServices },
        { city: 'Franklin', zips: ['45005'], services: allServices },
        { city: 'Deerfield Township', zips: ['45039', '45040'], services: allServices },
        { city: 'South Lebanon', zips: ['45065'], services: allServices },
        { city: 'Maineville', zips: ['45039'], services: allServices },
        { city: 'Morrow', zips: ['45152'], services: allServices },
        { city: 'Waynesville', zips: ['45068'], services: allServices },
        { city: 'Harveysburg', zips: ['45032'], services: allServices },
        { city: 'Pleasant Plain', zips: ['45162'], services: allServices },
        { city: 'Butlerville', zips: ['45162'], services: allServices },
        { city: 'Oregonia', zips: ['45054'], services: allServices },
        { city: 'Carlisle', zips: ['45005'], services: allServices },
        { city: 'Kings Mills', zips: ['45034'], services: allServices },
      ],
      allZips: ['45005', '45032', '45034', '45036', '45039', '45040', '45054', '45065', '45066', '45068', '45152', '45162'],
      allServices
    },
    {
      county: 'Butler',
      cities: [
        { city: 'Hamilton', zips: ['45011', '45012', '45013', '45015'], services: allServices },
        { city: 'Fairfield', zips: ['45014'], services: allServices },
        { city: 'West Chester', zips: ['45069', '45071'], services: allServices },
        { city: 'Liberty Township', zips: ['45044', '45069'], services: allServices },
        { city: 'Oxford', zips: ['45056'], services: allServices },
        { city: 'Middletown', zips: ['45042', '45044'], services: allServices },
        { city: 'Monroe', zips: ['45050'], services: allServices },
        { city: 'Trenton', zips: ['45067'], services: allServices },
        { city: 'Fairfield Township', zips: ['45011', '45014'], services: allServices },
        { city: 'Ross Township', zips: ['45013', '45061'], services: allServices },
        { city: 'Hanover Township', zips: ['45013'], services: allServices },
        { city: 'Seven Mile', zips: ['45062'], services: allServices },
        { city: 'Jacksonburg', zips: ['45042'], services: allServices },
        { city: 'Millville', zips: ['45013'], services: allServices },
        { city: 'College Corner', zips: ['45003'], services: allServices },
      ],
      allZips: ['45003', '45011', '45012', '45013', '45014', '45015', '45042', '45044', '45050', '45056', '45061', '45062', '45067', '45069', '45071'],
      allServices
    },
    {
      county: 'Montgomery',
      cities: [
        { city: 'Dayton', zips: ['45402', '45403', '45404', '45405', '45406', '45409', '45410', '45414', '45415', '45416', '45417', '45419', '45420', '45424', '45426', '45428', '45429', '45430', '45431', '45432', '45433', '45434', '45439', '45440', '45449', '45458', '45459'], services: allServices },
        { city: 'Kettering', zips: ['45429', '45439', '45440'], services: allServices },
        { city: 'Centerville', zips: ['45458', '45459'], services: allServices },
        { city: 'Miamisburg', zips: ['45342', '45449'], services: allServices },
        { city: 'Huber Heights', zips: ['45424'], services: allServices },
        { city: 'Vandalia', zips: ['45377'], services: allServices },
        { city: 'Trotwood', zips: ['45426'], services: allServices },
        { city: 'Englewood', zips: ['45322'], services: allServices },
        { city: 'West Carrollton', zips: ['45449'], services: allServices },
        { city: 'Oakwood', zips: ['45419'], services: allServices },
        { city: 'Riverside', zips: ['45431'], services: allServices },
        { city: 'Clayton', zips: ['45315'], services: allServices },
        { city: 'Brookville', zips: ['45309'], services: allServices },
        { city: 'Germantown', zips: ['45327'], services: allServices },
        { city: 'Moraine', zips: ['45439'], services: allServices },
        { city: 'Phillipsburg', zips: ['45354'], services: allServices },
        { city: 'Union', zips: ['45322'], services: allServices },
        { city: 'Farmersville', zips: ['45325'], services: allServices },
        { city: 'New Lebanon', zips: ['45345'], services: allServices },
        { city: 'Verona', zips: ['45378'], services: allServices },
      ],
      allZips: ['45309', '45315', '45322', '45325', '45327', '45342', '45345', '45354', '45377', '45378', '45402', '45403', '45404', '45405', '45406', '45409', '45410', '45414', '45415', '45416', '45417', '45419', '45420', '45424', '45426', '45428', '45429', '45430', '45431', '45432', '45433', '45434', '45439', '45440', '45449', '45458', '45459'],
      allServices
    },
    {
      county: 'Greene',
      cities: [
        { city: 'Beavercreek', zips: ['45430', '45431', '45432', '45434'], services: allServices },
        { city: 'Fairborn', zips: ['45324'], services: allServices },
        { city: 'Xenia', zips: ['45385'], services: allServices },
        { city: 'Yellow Springs', zips: ['45387'], services: allServices },
        { city: 'Bellbrook', zips: ['45305'], services: allServices },
        { city: 'Cedarville', zips: ['45314'], services: allServices },
        { city: 'Jamestown', zips: ['45335'], services: allServices },
        { city: 'Spring Valley', zips: ['45370'], services: allServices },
        { city: 'Clifton', zips: ['45316'], services: allServices },
        { city: 'Bowersville', zips: ['45307'], services: allServices },
      ],
      allZips: ['45305', '45307', '45314', '45316', '45324', '45335', '45370', '45385', '45387', '45430', '45431', '45432', '45434'],
      allServices
    },
    {
      county: 'Clinton',
      cities: [
        { city: 'Wilmington', zips: ['45177'], services: allServices },
        { city: 'Blanchester', zips: ['45107'], services: allServices },
        { city: 'Sabina', zips: ['45169'], services: allServices },
        { city: 'Clarksville', zips: ['45113'], services: allServices },
        { city: 'Midland', zips: ['45148'], services: allServices },
        { city: 'New Vienna', zips: ['45159'], services: allServices },
        { city: 'Port William', zips: ['45164'], services: allServices },
        { city: 'Martinsville', zips: ['45146'], services: allServices },
      ],
      allZips: ['45107', '45113', '45146', '45148', '45159', '45164', '45169', '45177'],
      allServices
    },
    {
      county: 'Clermont',
      cities: [
        { city: 'Milford', zips: ['45150'], services: allServices },
        { city: 'Batavia', zips: ['45103'], services: allServices },
        { city: 'Amelia', zips: ['45102'], services: allServices },
        { city: 'Goshen', zips: ['45122'], services: allServices },
        { city: 'Bethel', zips: ['45106'], services: allServices },
        { city: 'Williamsburg', zips: ['45176'], services: allServices },
        { city: 'New Richmond', zips: ['45157'], services: allServices },
        { city: 'Owensville', zips: ['45160'], services: allServices },
        { city: 'Moscow', zips: ['45153'], services: allServices },
        { city: 'Felicity', zips: ['45120'], services: allServices },
        { city: 'Neville', zips: ['45156'], services: allServices },
        { city: 'Mt. Orab', zips: ['45154'], services: allServices },
        { city: 'Hamersville', zips: ['45130'], services: allServices },
        { city: 'Marathon', zips: ['45145'], services: allServices },
        { city: 'Pierce Township', zips: ['45102', '45245'], services: allServices },
        { city: 'Union Township', zips: ['45103', '45244', '45245'], services: allServices },
        { city: 'Miami Township', zips: ['45140', '45150'], services: allServices },
      ],
      allZips: ['45102', '45103', '45106', '45120', '45122', '45130', '45140', '45145', '45150', '45153', '45154', '45156', '45157', '45160', '45176', '45244', '45245'],
      allServices
    },
    {
      county: 'Brown',
      cities: [
        { city: 'Georgetown', zips: ['45121'], services: allServices },
        { city: 'Mt. Orab', zips: ['45154'], services: allServices },
        { city: 'Ripley', zips: ['45167'], services: allServices },
        { city: 'Russellville', zips: ['45168'], services: allServices },
        { city: 'Sardinia', zips: ['45171'], services: allServices },
        { city: 'Hamersville', zips: ['45130'], services: allServices },
        { city: 'Fayetteville', zips: ['45118'], services: allServices },
        { city: 'Aberdeen', zips: ['45101'], services: allServices },
      ],
      allZips: ['45101', '45118', '45121', '45130', '45154', '45167', '45168', '45171'],
      allServices
    },
    {
      county: 'Miami',
      cities: [
        { city: 'Troy', zips: ['45373'], services: allServices },
        { city: 'Piqua', zips: ['45356'], services: allServices },
        { city: 'Tipp City', zips: ['45371'], services: allServices },
        { city: 'Covington', zips: ['45318'], services: allServices },
        { city: 'West Milton', zips: ['45383'], services: allServices },
        { city: 'Pleasant Hill', zips: ['45359'], services: allServices },
        { city: 'Bradford', zips: ['45308'], services: allServices },
        { city: 'Casstown', zips: ['45312'], services: allServices },
      ],
      allZips: ['45308', '45312', '45318', '45356', '45359', '45371', '45373', '45383'],
      allServices
    },
  ];
};

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
  try {
    // Check if CSV data is available
    if (!routesCsvRaw || typeof routesCsvRaw !== 'string' || routesCsvRaw.trim().length === 0) {
      console.warn('CSV data not available, using fallback');
      return getFallbackCountyData();
    }

    const rows = parseCSVRows(routesCsvRaw);
    if (rows.length < 2) {
      console.warn('CSV has no data rows, using fallback');
      return getFallbackCountyData();
    }

    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Find column indices
    const countyIdx = headers.indexOf('county');
    const cityIdx = headers.indexOf('city');
    const zipIdx = headers.indexOf('primaryZip');
    const serviceNameIdx = headers.indexOf('serviceName');

    if (countyIdx === -1 || cityIdx === -1 || zipIdx === -1) {
      console.warn('CSV missing required columns, using fallback');
      return getFallbackCountyData();
    }

    // Build county -> city -> data map
    const countyMap: Record<string, Record<string, { zips: Set<string>; services: Set<string> }>> = {};

    dataRows.forEach(row => {
      if (row.length < Math.max(countyIdx, cityIdx, zipIdx, serviceNameIdx) + 1) return;
      
      const county = row[countyIdx];
      const city = row[cityIdx].replace(/\s*\(part\)|\s*\(mostly\)/gi, '').trim();
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

    // If no data was parsed, use fallback
    if (Object.keys(countyMap).length === 0) {
      console.warn('No counties parsed from CSV, using fallback');
      return getFallbackCountyData();
    }

    // Convert to array format
    const countyOrder = ['Hamilton', 'Warren', 'Butler', 'Montgomery', 'Greene', 'Clinton', 'Clermont', 'Brown', 'Miami'];
    const allServicesDefault = ['General Notary', 'Loan Signing', 'Estate Planning', 'Real Estate', 'Apostille', 'Business Services', 'Healthcare Notary'];
    
    const result: CountyData[] = [];
    
    // First add counties in order
    countyOrder.forEach(county => {
      if (countyMap[county]) {
        const cities = Object.entries(countyMap[county])
          .map(([city, data]) => ({
            city,
            zips: Array.from(data.zips).sort(),
            services: data.services.size > 0 ? Array.from(data.services).sort() : allServicesDefault
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
          allServices: allServices.size > 0 ? Array.from(allServices).sort() : allServicesDefault
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
            services: data.services.size > 0 ? Array.from(data.services).sort() : allServicesDefault
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
          allServices: allServices.size > 0 ? Array.from(allServices).sort() : allServicesDefault
        });
      }
    });

    return result.length > 0 ? result : getFallbackCountyData();
  } catch (error) {
    console.error('Error parsing routes CSV:', error);
    return getFallbackCountyData();
  }
};

// Memoized version
let cachedCountyData: CountyData[] | null = null;

export const getCountyData = (): CountyData[] => {
  if (!cachedCountyData) {
    cachedCountyData = parseRoutesCSV();
  }
  return cachedCountyData;
};
