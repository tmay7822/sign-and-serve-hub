// GMB Service Areas Data for Google My Business and Directory Listings
// Comprehensive coverage of all 9 Ohio counties

export interface GMBCity {
  name: string;
  zipCodes: string[];
  isPopular?: boolean;
}

export interface GMBCounty {
  name: string;
  state: string;
  cities: GMBCity[];
  population: number;
  primaryCity: string;
  linkedPage: string;
}

export interface GMBServiceAreaExport {
  businessName: string;
  businessPhone: string;
  businessAddress: string;
  businessWebsite: string;
  primaryServiceArea: string;
  radiusMiles: number;
  counties: GMBCounty[];
}

export const GMB_SERVICE_AREAS: GMBServiceAreaExport = {
  businessName: "Signed On Time",
  businessPhone: "(513) 226-9052",
  businessAddress: "Cincinnati, OH",
  businessWebsite: "https://signedontime.com",
  primaryServiceArea: "Cincinnati-Dayton Metro Area",
  radiusMiles: 50,
  counties: [
    {
      name: "Hamilton",
      state: "OH",
      cities: [
        { name: "Cincinnati", zipCodes: ["45202", "45203", "45204", "45205", "45206", "45207", "45208", "45209", "45211", "45212", "45213", "45214", "45215", "45216", "45217", "45219", "45220", "45223", "45224", "45225", "45226", "45227", "45229", "45230", "45231", "45232", "45233", "45237", "45238", "45239"], isPopular: true },
        { name: "Blue Ash", zipCodes: ["45242"], isPopular: true },
        { name: "Springdale", zipCodes: ["45246"], isPopular: true },
        { name: "Forest Park", zipCodes: ["45240"] },
        { name: "Norwood", zipCodes: ["45212"] },
        { name: "Montgomery", zipCodes: ["45242"] },
        { name: "Madeira", zipCodes: ["45243"] },
        { name: "Indian Hill", zipCodes: ["45243"] },
        { name: "Sharonville", zipCodes: ["45241"] },
        { name: "Deer Park", zipCodes: ["45236"] },
        { name: "Reading", zipCodes: ["45215"] },
        { name: "Cheviot", zipCodes: ["45211"] }
      ],
      population: 830639,
      primaryCity: "Cincinnati",
      linkedPage: "/service/hamilton-county"
    },
    {
      name: "Warren",
      state: "OH",
      cities: [
        { name: "Mason", zipCodes: ["45040"], isPopular: true },
        { name: "Lebanon", zipCodes: ["45036"], isPopular: true },
        { name: "Springboro", zipCodes: ["45066"], isPopular: true },
        { name: "Franklin", zipCodes: ["45005"] },
        { name: "Waynesville", zipCodes: ["45068"] },
        { name: "Morrow", zipCodes: ["45152"] },
        { name: "South Lebanon", zipCodes: ["45065"] },
        { name: "Maineville", zipCodes: ["45039"] },
        { name: "Landen", zipCodes: ["45039"] }
      ],
      population: 242836,
      primaryCity: "Mason",
      linkedPage: "/service/warren-county"
    },
    {
      name: "Montgomery",
      state: "OH",
      cities: [
        { name: "Dayton", zipCodes: ["45402", "45403", "45404", "45405", "45406", "45407", "45409", "45410", "45414", "45415", "45416", "45417", "45419", "45420", "45424", "45426", "45428", "45429", "45430", "45431", "45432", "45433", "45434", "45439", "45440"], isPopular: true },
        { name: "Kettering", zipCodes: ["45429", "45440"], isPopular: true },
        { name: "Centerville", zipCodes: ["45458", "45459"], isPopular: true },
        { name: "Miamisburg", zipCodes: ["45342"], isPopular: true },
        { name: "Vandalia", zipCodes: ["45377"] },
        { name: "Huber Heights", zipCodes: ["45424"] },
        { name: "Trotwood", zipCodes: ["45426"] },
        { name: "Oakwood", zipCodes: ["45419"] },
        { name: "West Carrollton", zipCodes: ["45449"] },
        { name: "Englewood", zipCodes: ["45322"] },
        { name: "Clayton", zipCodes: ["45315"] }
      ],
      population: 537309,
      primaryCity: "Dayton",
      linkedPage: "/service/montgomery-county"
    },
    {
      name: "Butler",
      state: "OH",
      cities: [
        { name: "Hamilton", zipCodes: ["45011", "45013", "45015"], isPopular: true },
        { name: "Fairfield", zipCodes: ["45014"], isPopular: true },
        { name: "West Chester", zipCodes: ["45069", "45071"], isPopular: true },
        { name: "Middletown", zipCodes: ["45042", "45044"] },
        { name: "Oxford", zipCodes: ["45056"] },
        { name: "Monroe", zipCodes: ["45050"] },
        { name: "Trenton", zipCodes: ["45067"] },
        { name: "Liberty Township", zipCodes: ["45044"] }
      ],
      population: 390357,
      primaryCity: "Hamilton",
      linkedPage: "/service/butler-county"
    },
    {
      name: "Greene",
      state: "OH",
      cities: [
        { name: "Beavercreek", zipCodes: ["45431", "45432", "45434"], isPopular: true },
        { name: "Fairborn", zipCodes: ["45324"], isPopular: true },
        { name: "Xenia", zipCodes: ["45385"], isPopular: true },
        { name: "Yellow Springs", zipCodes: ["45387"] },
        { name: "Bellbrook", zipCodes: ["45305"] },
        { name: "Cedarville", zipCodes: ["45314"] },
        { name: "Jamestown", zipCodes: ["45335"] }
      ],
      population: 167966,
      primaryCity: "Beavercreek",
      linkedPage: "/service/greene-county"
    },
    {
      name: "Clinton",
      state: "OH",
      cities: [
        { name: "Wilmington", zipCodes: ["45177"], isPopular: true },
        { name: "Blanchester", zipCodes: ["45107"] },
        { name: "Sabina", zipCodes: ["45169"] },
        { name: "New Vienna", zipCodes: ["45159"] },
        { name: "Clarksville", zipCodes: ["45113"] }
      ],
      population: 42040,
      primaryCity: "Wilmington",
      linkedPage: "/service/clinton-county"
    },
    {
      name: "Clermont",
      state: "OH",
      cities: [
        { name: "Milford", zipCodes: ["45150"], isPopular: true },
        { name: "Batavia", zipCodes: ["45103"], isPopular: true },
        { name: "Loveland", zipCodes: ["45140"], isPopular: true },
        { name: "Amelia", zipCodes: ["45102"] },
        { name: "Bethel", zipCodes: ["45106"] },
        { name: "Goshen", zipCodes: ["45122"] },
        { name: "New Richmond", zipCodes: ["45157"] },
        { name: "Williamsburg", zipCodes: ["45176"] }
      ],
      population: 208601,
      primaryCity: "Milford",
      linkedPage: "/service/clermont-county"
    },
    {
      name: "Miami",
      state: "OH",
      cities: [
        { name: "Troy", zipCodes: ["45373"], isPopular: true },
        { name: "Piqua", zipCodes: ["45356"], isPopular: true },
        { name: "Tipp City", zipCodes: ["45371"] },
        { name: "Covington", zipCodes: ["45318"] },
        { name: "West Milton", zipCodes: ["45383"] }
      ],
      population: 106987,
      primaryCity: "Troy",
      linkedPage: "/service/miami-county"
    }
  ]
};

// Helper Functions

export const getAllCities = (): string[] => {
  const cities: string[] = [];
  GMB_SERVICE_AREAS.counties.forEach(county => {
    county.cities.forEach(city => {
      cities.push(city.name);
    });
  });
  return [...new Set(cities)].sort();
};

export const getPopularCities = (): string[] => {
  const cities: string[] = [];
  GMB_SERVICE_AREAS.counties.forEach(county => {
    county.cities.forEach(city => {
      if (city.isPopular) {
        cities.push(city.name);
      }
    });
  });
  return cities;
};

export const getAllZipCodes = (): string[] => {
  const zips: string[] = [];
  GMB_SERVICE_AREAS.counties.forEach(county => {
    county.cities.forEach(city => {
      zips.push(...city.zipCodes);
    });
  });
  return [...new Set(zips)].sort();
};

export const getCountyByName = (name: string): GMBCounty | undefined => {
  return GMB_SERVICE_AREAS.counties.find(
    county => county.name.toLowerCase() === name.toLowerCase()
  );
};

export const getCitiesByCounty = (countyName: string): string[] => {
  const county = getCountyByName(countyName);
  if (!county) return [];
  return county.cities.map(city => city.name);
};

export const exportServiceAreasAsText = (): string => {
  let output = `${GMB_SERVICE_AREAS.businessName.toUpperCase()} - MOBILE NOTARY SERVICE AREAS\n\n`;
  output += `Primary Area: ${GMB_SERVICE_AREAS.primaryServiceArea} (${GMB_SERVICE_AREAS.radiusMiles}-mile radius)\n`;
  output += `Phone: ${GMB_SERVICE_AREAS.businessPhone}\n`;
  output += `Website: ${GMB_SERVICE_AREAS.businessWebsite}\n\n`;
  output += `${'='.repeat(60)}\n\n`;

  GMB_SERVICE_AREAS.counties.forEach(county => {
    output += `${county.name.toUpperCase()} COUNTY\n`;
    output += `Cities: ${county.cities.map(c => c.name).join(', ')}\n`;
    const allZips = county.cities.flatMap(c => c.zipCodes);
    output += `ZIP Codes: ${[...new Set(allZips)].join(', ')}\n\n`;
  });

  return output;
};

export const exportCitiesAsList = (): string => {
  return getAllCities().join(', ');
};

export const exportZipCodesAsList = (): string => {
  return getAllZipCodes().join(', ');
};

export const exportServiceAreasAsJSON = (): string => {
  return JSON.stringify(GMB_SERVICE_AREAS, null, 2);
};

export const exportServiceAreasAsCSV = (): string => {
  const headers = 'County,City,ZIP Codes,Is Popular,Primary City,Population';
  const rows: string[] = [];
  
  GMB_SERVICE_AREAS.counties.forEach(county => {
    county.cities.forEach(city => {
      rows.push(
        `"${county.name}","${city.name}","${city.zipCodes.join('; ')}","${city.isPopular ? 'Yes' : 'No'}","${county.primaryCity}","${county.population}"`
      );
    });
  });
  
  return [headers, ...rows].join('\n');
};

export const exportForDirectoryBulkUpload = (): string => {
  // Format optimized for directory submission forms
  const headers = 'Business Name,Phone,Address,Service Area,Cities Served,ZIP Codes';
  const citiesList = getAllCities().slice(0, 50).join('; '); // Most directories limit this
  const zipsList = getAllZipCodes().slice(0, 30).join('; ');
  
  const row = `"${GMB_SERVICE_AREAS.businessName}","${GMB_SERVICE_AREAS.businessPhone}","${GMB_SERVICE_AREAS.businessAddress}","${GMB_SERVICE_AREAS.primaryServiceArea}","${citiesList}","${zipsList}"`;
  
  return [headers, row].join('\n');
};

export const getFormattedNAP = (): { name: string; address: string; phone: string; website: string } => {
  return {
    name: GMB_SERVICE_AREAS.businessName,
    address: GMB_SERVICE_AREAS.businessAddress,
    phone: GMB_SERVICE_AREAS.businessPhone,
    website: GMB_SERVICE_AREAS.businessWebsite
  };
};

export const getServiceAreaStats = () => {
  const allCities = getAllCities();
  const allZips = getAllZipCodes();
  const popularCities = getPopularCities();
  const totalPopulation = GMB_SERVICE_AREAS.counties.reduce((sum, c) => sum + c.population, 0);

  return {
    totalCounties: GMB_SERVICE_AREAS.counties.length,
    totalCities: allCities.length,
    totalZipCodes: allZips.length,
    popularCities: popularCities.length,
    totalPopulation: totalPopulation,
    radiusMiles: GMB_SERVICE_AREAS.radiusMiles
  };
};

export const getCountyStats = () => {
  return GMB_SERVICE_AREAS.counties.map(county => ({
    name: county.name,
    cityCount: county.cities.length,
    zipCount: [...new Set(county.cities.flatMap(c => c.zipCodes))].length,
    population: county.population,
    primaryCity: county.primaryCity
  }));
};
