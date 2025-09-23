// White Label Pricing Tiers Configuration
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  maxLocations: number;
  basePrice: number;
  features: string[];
  recommended?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for single-location notary businesses',
    maxLocations: 25,
    basePrice: 2497,
    features: [
      'Up to 25 location pages',
      'Complete SEO optimization',
      'Mobile-responsive design',
      'Contact form integration',
      'Google My Business optimization guide',
      'Local schema markup',
      'Sitemap generation',
      'Basic customization',
      '30 days support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing notary services covering multiple counties',
    maxLocations: 75,
    basePrice: 3997,
    features: [
      'Up to 75 location pages',
      'Complete SEO optimization',
      'Mobile-responsive design',
      'Contact form integration',
      'Google My Business optimization guide',
      'Local schema markup',
      'Sitemap generation',
      'Advanced customization',
      'Blog system included',
      'Social media integration',
      '60 days support',
      'Priority setup'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large notary networks and franchise operations',
    maxLocations: 200,
    basePrice: 6997,
    features: [
      'Up to 200 location pages',
      'Complete SEO optimization',
      'Mobile-responsive design',
      'Contact form integration',
      'Google My Business optimization guide',
      'Local schema markup',
      'Sitemap generation',
      'Full customization',
      'Blog system included',
      'Social media integration',
      'Analytics dashboard',
      'Multi-location management',
      'White-label admin panel',
      '90 days support',
      'Dedicated setup specialist',
      'Training session included'
    ]
  }
];

export const getPricingTierById = (id: string): PricingTier | undefined => {
  return PRICING_TIERS.find(tier => tier.id === id);
};

export const getRecommendedTier = (): PricingTier => {
  return PRICING_TIERS.find(tier => tier.recommended) || PRICING_TIERS[1];
};

export const calculateLocationCount = (counties: string[]): number => {
  // Approximate locations per county for estimation
  const avgLocationsPerCounty = 15;
  return counties.length * avgLocationsPerCounty;
};

export const recommendTierByLocations = (locationCount: number): PricingTier => {
  if (locationCount <= 25) return PRICING_TIERS[0];
  if (locationCount <= 75) return PRICING_TIERS[1];
  return PRICING_TIERS[2];
};