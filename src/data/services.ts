// SERVICES DATA MODEL
// This defines all services available for the notary business

export interface Service {
  id: string;
  serviceName: string;
  slug: string;
  summary: string;
  description: string;
  enabled: boolean;
  order: number;
  icon?: string;
  category: 'primary' | 'specialized' | 'supplemental';
  keywords: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'vehicles-dmv',
    serviceName: 'Car Title & Bill of Sale',
    slug: 'vehicles-dmv',
    summary: 'Fast, professional notarization for car title transfers, vehicle bills of sale, lien releases, and all DMV documents.',
    description: 'Professional notarization for car title transfers, vehicle bills of sale, lien releases, and all DMV documents. Mobile service available - we come to you at your home, office, or parking lot for convenient vehicle transactions.',
    enabled: true,
    order: 1,
    icon: 'Car',
    category: 'primary',
    keywords: ['car title notary', 'vehicle bill of sale', 'DMV notary', 'title transfer', 'auto notary', 'car sale notarization', 'vehicle notary Ohio'],
    metaTitle: 'Car Title & Bill of Sale Notary | Vehicle Title Transfers Ohio',
    metaDescription: 'Ohio car title transfer notarization at your location throughout Southwest Ohio. No BMV lines, no waiting. Bills of sale, lien releases. Same-day service available.'
  },
  {
    id: 'healthcare-notary',
    serviceName: 'Healthcare Notary',
    slug: 'healthcare-notary',
    summary: 'Hospital, nursing home, and healthcare facility notarization services.',
    description: 'Specialized healthcare notarization services in hospitals, nursing homes, assisted living facilities, and private residences for medical documents and healthcare directives.',
    enabled: true,
    order: 2,
    icon: 'Heart',
    category: 'primary',
    keywords: ['hospital notary', 'healthcare notary', 'nursing home notary', 'medical documents'],
    metaTitle: 'Healthcare & Hospital Notary Services',
    metaDescription: 'Bedside notarization at hospitals, nursing homes and care facilities throughout Southwest Ohio. Same-day urgent visits available. Compassionate service for patients and families.'
  },
  {
    id: 'estate-plans',
    serviceName: 'Estate Planning & POA',
    slug: 'estate-plans',
    summary: 'Wills, trusts, powers of attorney, and healthcare directives notarization services.',
    description: 'Professional notarization for estate planning documents including wills, living trusts, durable powers of attorney, healthcare powers of attorney, and living wills.',
    enabled: true,
    order: 3,
    icon: 'Shield',
    category: 'primary',
    keywords: ['estate planning notary', 'will notarization', 'trust documents', 'power of attorney', 'healthcare directive'],
    metaTitle: 'Estate Planning Notary | Wills, Trusts & POA Services',
    metaDescription: 'Mobile notary for wills, trusts, powers of attorney and healthcare directives throughout Southwest Ohio. Witness coordination included. Evening and weekend appointments available.'
  },
  {
    id: 'loan-signings',
    serviceName: 'Loan Signings',
    slug: 'loan-signings',
    summary: 'Certified Loan Signing Agent services for mortgage refinances, purchases, and HELOCs.',
    description: 'Professional loan signing services by certified Loan Signing Agents. We handle mortgage closings, refinances, reverse mortgages, and HELOC signings with precision and expertise.',
    enabled: true,
    order: 4,
    icon: 'Home',
    category: 'primary',
    keywords: ['loan signing agent', 'mortgage closing', 'refinance signing', 'HELOC', 'reverse mortgage'],
    metaTitle: 'Loan Signing Agent Services | Mortgage Closings',
    metaDescription: 'Certified loan signing agent serving Southwest Ohio. Mortgage closings, refinances and HELOCs. 25+ years lending experience. Same-day closings available.'
  },
  {
    id: 'real-estate',
    serviceName: 'Real Estate',
    slug: 'real-estate',
    summary: 'Real estate document notarization including deeds, powers of attorney, and closing documents.',
    description: 'Complete real estate notarization services including warranty deeds, quit claim deeds, powers of attorney for real estate transactions, and closing document preparation.',
    enabled: true,
    order: 5,
    icon: 'Building',
    category: 'primary',
    keywords: ['real estate notary', 'deed notarization', 'property transfer', 'closing documents'],
    metaTitle: 'Real Estate Notary Services | Deed & Property Documents',
    metaDescription: 'Professional real estate document notarization including deeds, powers of attorney, and closing documents. Mobile service available.'
  },
  {
    id: 'general-notary',
    serviceName: 'General Notary',
    slug: 'general-notary',
    summary: 'Complete notarization services for personal and business documents with certified mobile service.',
    description: 'Professional notarization for acknowledgments, jurats, oaths, affirmations, and copy certifications. Our certified mobile notaries come to you with same-day availability.',
    enabled: true,
    order: 6,
    icon: 'FileText',
    category: 'primary',
    keywords: ['notary public', 'document notarization', 'acknowledgment', 'jurat', 'oath', 'affirmation'],
    metaTitle: 'General Notary Services | Mobile Notary Public',
    metaDescription: 'Professional mobile notary services throughout Southwest Ohio. Acknowledgments, jurats, oaths and affidavits. NNA certified, insured. Same-day available — we come to you.'
  },
  {
    id: 'personal-family',
    serviceName: 'Personal & Family',
    slug: 'personal-family',
    summary: 'Personal and family document notarization including travel consent and family agreements.',
    description: 'Personal document notarization including travel consent forms, name change documents, family agreements, and personal affidavits.',
    enabled: true,
    order: 7,
    icon: 'Users',
    category: 'specialized',
    keywords: ['family notary', 'travel consent', 'name change', 'personal documents'],
    metaTitle: 'Personal & Family Notary Services',
    metaDescription: 'Personal and family document notarization including travel consent forms, name changes, and family agreements. Mobile service available.'
  },
  {
    id: 'business-services',
    serviceName: 'Business Services',
    slug: 'business-services',
    summary: 'Business document notarization including contracts, agreements, and corporate filings.',
    description: 'Professional business notarization services including contracts, partnership agreements, corporate resolutions, and business loan documents.',
    enabled: true,
    order: 8,
    icon: 'Briefcase',
    category: 'specialized',
    keywords: ['business notary', 'contract notarization', 'corporate documents', 'business agreements'],
    metaTitle: 'Business Notary Services | Corporate Document Notarization',
    metaDescription: 'Professional business document notarization including contracts, agreements, and corporate filings. Mobile service for business locations.'
  },
  {
    id: 'legal-court',
    serviceName: 'Legal & Court',
    slug: 'legal-court',
    summary: 'Legal document notarization for court filings, litigation, and legal proceedings.',
    description: 'Professional legal document notarization including court filings, depositions, affidavits, and litigation support documents.',
    enabled: true,
    order: 9,
    icon: 'Scale',
    category: 'specialized',
    keywords: ['legal notary', 'court documents', 'litigation support', 'legal affidavits'],
    metaTitle: 'Legal & Court Document Notary Services',
    metaDescription: 'Legal document notarization for court filings, litigation, and legal proceedings. Professional support for attorneys and legal teams.'
  },
  {
    id: 'college-18-plus',
    serviceName: 'College & 18+ Documents',
    slug: 'college-18-plus',
    summary: 'Student document notarization for college applications, financial aid, and independent living.',
    description: 'Specialized services for college students and young adults including FAFSA verification, housing applications, employment documents, and independence declarations.',
    enabled: true,
    order: 10,
    icon: 'GraduationCap',
    category: 'specialized',
    keywords: ['college notary', 'student documents', 'FAFSA', '18 plus documents'],
    metaTitle: 'College & Student Notary Services | 18+ Documents',
    metaDescription: 'Student-focused notary services for college applications, FAFSA, housing, and independence documents. Mobile service to campuses and dorms.'
  },
  {
    id: 'wills-trusts-estates',
    serviceName: 'Wills, Trusts & Estates',
    slug: 'wills-trusts-estates',
    summary: 'Comprehensive estate document notarization including wills, trusts, and probate documents.',
    description: 'Professional notarization for wills, living trusts, estate planning documents, probate forms, and inheritance paperwork.',
    enabled: true,
    order: 11,
    icon: 'FileText',
    category: 'specialized',
    keywords: ['will notary', 'trust notarization', 'estate documents', 'probate forms'],
    metaTitle: 'Wills, Trusts & Estate Notary Services',
    metaDescription: 'Professional notarization for wills, trusts, and estate documents. Experienced with probate and inheritance paperwork.'
  },
  {
    id: 'real-estate-notary',
    serviceName: 'Real Estate Notary',
    slug: 'real-estate-notary',
    summary: 'Specialized real estate notarization for closings, deeds, and property transactions.',
    description: 'Expert real estate notary services including closing document preparation, deed transfers, mortgage documents, and property transaction support.',
    enabled: true,
    order: 12,
    icon: 'Building2',
    category: 'specialized',
    keywords: ['real estate closing', 'deed notary', 'property transaction', 'mortgage documents'],
    metaTitle: 'Real Estate Notary Services | Property Closings',
    metaDescription: 'Specialized real estate notary for closings, deeds, and property transactions. Expert handling of mortgage and closing documents.'
  },
  {
    id: 'business-banking',
    serviceName: 'Business Banking',
    slug: 'business-banking',
    summary: 'Business banking document notarization for loans, accounts, and financial services.',
    description: 'Professional notarization for business banking documents including loan applications, account openings, corporate resolutions, and financial agreements.',
    enabled: true,
    order: 13,
    icon: 'Banknote',
    category: 'specialized',
    keywords: ['business banking', 'bank loan notary', 'corporate banking', 'financial documents'],
    metaTitle: 'Business Banking Notary Services',
    metaDescription: 'Business banking document notarization for loans, account openings, and corporate financial services. Mobile service available.'
  },
  {
    id: 'apostille',
    serviceName: 'Apostille Services',
    slug: 'apostille',
    summary: 'Document authentication and apostille services for international use and travel.',
    description: 'Complete apostille and document authentication services for international use including birth certificates, marriage licenses, educational documents, and business records.',
    enabled: true,
    order: 14,
    icon: 'Globe',
    category: 'specialized',
    keywords: ['apostille service', 'document authentication', 'international documents', 'birth certificate apostille'],
    metaTitle: 'Apostille Services | International Document Authentication',
    metaDescription: 'Ohio apostille services for international document authentication. Birth certificates, diplomas, business documents. Secretary of State submission preparation.'
  },
  {
    id: 'international-apostille',
    serviceName: 'International Apostille',
    slug: 'international-apostille',
    summary: 'International document authentication and apostille services for global use.',
    description: 'Complete international document preparation including apostille services, embassy certifications, and foreign document authentication.',
    enabled: true,
    order: 15,
    icon: 'Globe2',
    category: 'specialized',
    keywords: ['international apostille', 'embassy documents', 'foreign certification', 'international authentication'],
    metaTitle: 'International Apostille Services',
    metaDescription: 'International document authentication and apostille services for global use. Embassy certifications and foreign document preparation.'
  },
  {
    id: 'insurance-retirement',
    serviceName: 'Insurance & Retirement',
    slug: 'insurance-retirement',
    summary: 'Insurance claims, retirement planning, and financial document notarization.',
    description: 'Specialized notarization for insurance documents, retirement planning paperwork, beneficiary forms, and financial planning documents.',
    enabled: true,
    order: 16,
    icon: 'Shield',
    category: 'supplemental',
    keywords: ['insurance notary', 'retirement documents', 'beneficiary forms', 'financial planning'],
    metaTitle: 'Insurance & Retirement Notary Services',
    metaDescription: 'Professional notarization for insurance claims, retirement planning, and financial documents. Mobile service available.'
  },
  {
    id: 'other-notary',
    serviceName: 'Other Notary Services',
    slug: 'other-notary',
    summary: 'Miscellaneous notarization services for unique and specialized document needs.',
    description: 'Additional notary services for unique documents, special circumstances, and miscellaneous notarization needs not covered by standard categories.',
    enabled: true,
    order: 17,
    icon: 'MoreHorizontal',
    category: 'supplemental',
    keywords: ['misc notary', 'special documents', 'unique notarization', 'custom notary'],
    metaTitle: 'Other Notary Services | Miscellaneous Documents',
    metaDescription: 'Miscellaneous notarization services for unique and specialized document needs. Custom notary solutions available.'
  }
];

// Helper functions
export const getServiceBySlug = (slug: string): Service | undefined => {
  return SERVICES.find(service => service.slug === slug);
};

export const getPrimaryServices = (): Service[] => {
  return SERVICES.filter(service => service.category === 'primary' && service.enabled)
    .sort((a, b) => a.order - b.order);
};

export const getSpecializedServices = (): Service[] => {
  return SERVICES.filter(service => service.category === 'specialized' && service.enabled)
    .sort((a, b) => a.order - b.order);
};

export const getEnabledServices = (): Service[] => {
  return SERVICES.filter(service => service.enabled)
    .sort((a, b) => a.order - b.order);
};