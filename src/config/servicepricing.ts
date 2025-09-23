// Service Pricing Configuration
export interface ServicePricing {
  id: string;
  serviceName: string;
  baseRate: number;
  description: string;
  estimatedTime: string;
  tidyCalId?: string;
  category: 'primary' | 'specialized' | 'supplemental';
}

export interface TravelZone {
  name: string;
  counties: string[];
  zips: string[];
  fee: number;
  description: string;
}

export const SERVICE_PRICING: ServicePricing[] = [
  {
    id: 'general-notary',
    serviceName: 'General Notary',
    baseRate: 75,
    description: 'Basic notarization (acknowledgments, jurats, oaths)',
    estimatedTime: '15-30 minutes',
    tidyCalId: 'general-notary',
    category: 'primary'
  },
  {
    id: 'loan-signings',
    serviceName: 'Loan Signings',
    baseRate: 150,
    description: 'Mortgage closings, refinances, HELOCs',
    estimatedTime: '60-90 minutes',
    tidyCalId: 'loan-signing',
    category: 'primary'
  },
  {
    id: 'real-estate',
    serviceName: 'Real Estate Documents',
    baseRate: 100,
    description: 'Deeds, property transfers, investor documents',
    estimatedTime: '30-45 minutes',
    tidyCalId: 'real-estate',
    category: 'primary'
  },
  {
    id: 'estate-plans',
    serviceName: 'Estate Plans (Wills, Trusts, POA)',
    baseRate: 125,
    description: 'Comprehensive estate planning documents',
    estimatedTime: '45-60 minutes',
    tidyCalId: 'estate-planning',
    category: 'primary'
  },
  {
    id: 'apostille',
    serviceName: 'Apostille Services',
    baseRate: 100,
    description: 'International document authentication',
    estimatedTime: '30-45 minutes',
    tidyCalId: 'apostille',
    category: 'specialized'
  },
  {
    id: 'business-docs',
    serviceName: 'Business Documents',
    baseRate: 85,
    description: 'I-9 verification, corporate documents',
    estimatedTime: '20-40 minutes',
    tidyCalId: 'business',
    category: 'specialized'
  },
  {
    id: 'healthcare-notary',
    serviceName: 'Healthcare Documents',
    baseRate: 110,
    description: 'Healthcare POA, living wills, HIPAA forms',
    estimatedTime: '30-60 minutes',
    tidyCalId: 'healthcare',
    category: 'specialized'
  }
];

export const TRAVEL_ZONES: TravelZone[] = [
  {
    name: 'Primary Zone',
    counties: ['Hamilton', 'Butler', 'Warren'],
    zips: ['45001', '45002', '45030', '45052', '45140', '45150', '45174', '45202', '45211', '45212', '45215', '45216', '45217', '45218', '45227', '45231', '45236', '45237', '45239', '45240', '45241', '45242', '45243', '45244', '45246', '45003', '45004', '45011', '45013', '45014', '45044', '45050', '45056', '45062', '45067', '45032', '45036', '45039', '45040', '45065', '45068', '45152', '45162'],
    fee: 0,
    description: 'No travel fee - Cincinnati, West Chester, Mason, Lebanon areas'
  },
  {
    name: 'Secondary Zone',
    counties: ['Montgomery', 'Greene', 'Clinton'],
    zips: ['45005', '45066', '45309', '45322', '45325', '45327', '45342', '45345', '45354', '45377', '45378', '45402', '45415', '45419', '45424', '45426', '45429', '45431', '45439', '45449', '45459', '45305', '45307', '45314', '45316', '45324', '45335', '45370', '45385', '45387', '45440', '45107', '45113', '45142', '45146', '45148', '45159', '45164', '45169', '45177'],
    fee: 25,
    description: '$25 travel fee - Dayton, Springfield, Wilmington areas'
  }
];

export const EMERGENCY_FEES = {
  sameDay: 25,
  afterHours: 50, // After 6 PM or weekends
  holidays: 75
};

export const getServicePricing = (serviceId: string): ServicePricing | undefined => {
  return SERVICE_PRICING.find(service => service.id === serviceId);
};

export const getTravelFee = (zipCode: string): number => {
  for (const zone of TRAVEL_ZONES) {
    if (zone.zips.includes(zipCode)) {
      return zone.fee;
    }
  }
  return 50; // Default fee for areas outside defined zones
};

export const getTravelZone = (zipCode: string): TravelZone | undefined => {
  return TRAVEL_ZONES.find(zone => zone.zips.includes(zipCode));
};

export const calculateTotalPrice = (serviceId: string, zipCode: string, isEmergency?: boolean): number => {
  const service = getServicePricing(serviceId);
  if (!service) return 0;
  
  let total = service.baseRate;
  total += getTravelFee(zipCode);
  
  if (isEmergency) {
    total += EMERGENCY_FEES.sameDay;
  }
  
  return total;
};

export const getPricingEstimate = (serviceIds: string[], zipCode: string): {
  services: Array<{ id: string; name: string; price: number }>;
  travelFee: number;
  subtotal: number;
  total: number;
} => {
  const services = serviceIds.map(id => {
    const service = getServicePricing(id);
    return {
      id,
      name: service?.serviceName || 'Unknown Service',
      price: service?.baseRate || 0
    };
  });
  
  const travelFee = getTravelFee(zipCode);
  const subtotal = services.reduce((sum, service) => sum + service.price, 0);
  const total = subtotal + travelFee;
  
  return {
    services,
    travelFee,
    subtotal,
    total
  };
};