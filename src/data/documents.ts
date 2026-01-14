// COMPREHENSIVE DOCUMENT LIST
// All documents and services that can be notarized, organized by category

export interface DocumentCategory {
  category: string;
  description: string;
  documents: string[];
  relatedServices: string[];
}

export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  {
    category: "Estate Planning & Legal",
    description: "Wills, trusts, powers of attorney, and estate planning documents",
    documents: [
      "Simple Will",
      "Will Codicil",
      "Living Trust",
      "Trust Amendment",
      "Trust Certification",
      "Durable Power of Attorney",
      "Power of Attorney (POA)",
      "Revocation of Power of Attorney",
      "Health Care Proxy",
      "Living Will",
      "Medical Directive",
      "HIPAA Authorization",
      "Healthcare Power of Attorney",
      "Temporary Guardianship Agreement",
      "Petition for Guardianship",
      "Waiver of Right to Claim Against Estate",
      "Small Estate Affidavit",
      "Advance Healthcare Directive",
      "Pet Trust",
      "Special Needs Trust",
      "Irrevocable Trust",
      "Beneficiary Designation Form",
      "Transfer on Death Deed",
      "Lady Bird Deed",
      "Life Estate Deed"
    ],
    relatedServices: ["estate-plans", "wills-trusts-estates", "healthcare-notary"]
  },
  {
    category: "Real Estate & Property",
    description: "Property transfers, deeds, mortgages, and real estate transactions",
    documents: [
      "Property Deed",
      "Warranty Deed",
      "Quitclaim Deed",
      "Grant Deed",
      "Deed of Trust",
      "Real Estate Contract",
      "Real Estate Option Agreement",
      "Agreement of Sale",
      "Loan Agreement",
      "Loan Modification Agreement",
      "Mortgage Agreement",
      "Release of Lien",
      "Lien Waiver",
      "Mechanic's Lien",
      "Title Transfer",
      "Settlement Agreement",
      "Settlement Statement (HUD-1)",
      "Escrow Agreement",
      "Homeowner Association (HOA) Agreement",
      "Lease Agreement",
      "Rental Agreement",
      "Assignment of Lease",
      "Notice of Default",
      "Notice to Quit",
      "Partition Deed",
      "Preliminary Notice",
      "Zoning Compliance Certificate",
      "For Sale by Owner Agreement",
      "Land Purchase Agreement",
      "Construction Lien",
      "Right of Way Easement",
      "Property Survey Affidavit",
      "Boundary Line Agreement"
    ],
    relatedServices: ["real-estate", "loan-signings", "real-estate-notary"]
  },
  {
    category: "Business & Corporate",
    description: "Business formations, contracts, and corporate governance documents",
    documents: [
      "Certificate of Incorporation",
      "Incorporation Documents",
      "Corporate Resolution",
      "Operating Agreement",
      "Partnership Agreement",
      "Contract",
      "Vendor Agreement",
      "Work for Hire Agreement",
      "Employee Non-Compete Agreement",
      "Mutual Non-Disclosure Agreement (NDA)",
      "Business Contract Notarization",
      "Hold Harmless Agreement",
      "Subordination Agreement",
      "Investment Authorization Form",
      "Stock Transfer Agreement",
      "Exclusive License Agreement",
      "Personal Guarantee",
      "Installment Payment Agreement",
      "Mutual Release Agreement",
      "Final Release of Waiver",
      "Uniform Commercial Code (UCC) Financing Statement",
      "Environmental Impact Statement",
      "Articles of Organization (LLC)",
      "Annual Report Filing",
      "Registered Agent Appointment",
      "Business License Application",
      "Commercial Lease Agreement",
      "Franchise Agreement",
      "Letter of Intent",
      "Service Agreement",
      "Independent Contractor Agreement",
      "Employee Handbook Acknowledgment"
    ],
    relatedServices: ["business-services", "business-banking", "general-notary"]
  },
  {
    category: "Family & Personal",
    description: "Family-related documents, travel consents, and personal agreements",
    documents: [
      "Adoption Papers",
      "Marriage License Application",
      "Prenuptial Agreement",
      "Postnuptial Agreement",
      "Separation Agreement",
      "Child Custody Agreement",
      "Child Support Agreement",
      "Authorization for Minor to Travel",
      "International Travel Consent",
      "Parental Consent for Travel",
      "Parental Permission for Field Trip",
      "Name Change Application",
      "Paternity Affidavit",
      "Medical Records Release Authorization",
      "Pet Custody Agreement",
      "Cohabitation Agreement",
      "Domestic Partnership Agreement",
      "Grandparent Visitation Agreement",
      "Emancipation Petition",
      "Religious/Cultural Ceremony Consent",
      "Summer Camp Medical Authorization",
      "School Medical Emergency Authorization"
    ],
    relatedServices: ["personal-family", "general-notary", "college-18-plus"]
  },
  {
    category: "Financial & Insurance",
    description: "Financial documents, insurance forms, and retirement paperwork",
    documents: [
      "Financial Statement",
      "Promissory Note",
      "Bill of Sale",
      "Vehicle Bill of Sale",
      "Retirement Benefits Form",
      "Insurance Assignment Form",
      "Health Insurance Claim Form",
      "Beneficiary Change Forms",
      "Spousal Consent Form",
      "Tax Form (W-9, W-2, etc.)",
      "Investment Authorization Form",
      "IRA/401k Beneficiary Change",
      "Pension Benefits Form",
      "Annuity Application",
      "Life Insurance Application",
      "Disability Claim Form",
      "Long-Term Care Insurance Form"
    ],
    relatedServices: ["insurance-retirement", "vehicles-dmv", "business-banking"]
  },
  {
    category: "Legal & Court Documents",
    description: "Affidavits, legal statements, and court-related paperwork",
    documents: [
      "Affidavit",
      "Signature Affidavit",
      "Affidavit of Domicile",
      "Name Mismatch Affidavit",
      "Proof of Identity Affidavit",
      "Proof of Life Certificate",
      "Jurat",
      "Temporary Restraining Order (TRO)",
      "Resignation Letter",
      "Witness Statement",
      "Character Reference Letter",
      "Victim Impact Statement",
      "Motion for Continuance",
      "Stipulation Agreement",
      "Declaration Under Penalty of Perjury",
      "Habeas Corpus Petition Support",
      "Expungement Application"
    ],
    relatedServices: ["legal-court", "general-notary", "other-notary"]
  },
  {
    category: "International & Apostille",
    description: "Documents requiring international certification and apostille services",
    documents: [
      "Apostille Processing",
      "Authentication for International Use",
      "Translator Affidavits",
      "Educational Documents for International Use",
      "Birth Certificate Apostille",
      "Marriage Certificate Apostille",
      "Business Document Apostille",
      "FBI Background Check Authentication",
      "State Department Authentication",
      "Consulate Certification",
      "Hague Apostille Documents",
      "Embassy Document Legalization",
      "Foreign Marriage Documents"
    ],
    relatedServices: ["apostille", "international-apostille", "general-notary"]
  },
  {
    category: "Healthcare & Medical",
    description: "Medical forms, hospital documents, and healthcare consent paperwork",
    documents: [
      "DNR (Do Not Resuscitate) Order",
      "Mental Health Advance Directive",
      "Organ Donor Authorization",
      "Hospital Discharge Papers",
      "Medical Power of Attorney",
      "Patient Transfer Authorization",
      "Medical Treatment Consent",
      "Psychiatric Advance Directive",
      "Caregiver Authorization Affidavit",
      "Medical Records Authorization",
      "Skilled Nursing Facility Admission",
      "Hospice Care Agreement",
      "Home Health Care Authorization",
      "Medical Research Consent",
      "Vaccination Consent Form",
      "POLST Form (Physician Orders for Life-Sustaining Treatment)",
      "Mental Health Treatment Authorization",
      "Medication Authorization Form"
    ],
    relatedServices: ["healthcare-notary", "general-notary", "estate-plans"]
  },
  {
    category: "DMV & Vehicle",
    description: "Vehicle titles, transfers, registrations, and DMV paperwork",
    documents: [
      "Vehicle Title Transfer",
      "Certificate of Title",
      "Odometer Disclosure Statement",
      "Vehicle Power of Attorney",
      "Lien Release (Vehicle)",
      "Duplicate Title Application",
      "Motor Vehicle Registration",
      "Commercial Vehicle Registration",
      "Trailer Title Transfer",
      "Motorcycle Title Transfer",
      "Boat/Watercraft Title",
      "ATV/Off-Road Vehicle Title",
      "Salvage Title Application",
      "Out-of-State Title Transfer",
      "Fleet Vehicle Transfer",
      "Dealer License Application",
      "Vehicle Gift Affidavit",
      "Repossession Affidavit",
      "Vehicle Lien Satisfaction",
      "Vehicle Inspection Authorization"
    ],
    relatedServices: ["vehicles-dmv", "general-notary"]
  },
  {
    category: "Immigration & Citizenship",
    description: "Immigration forms, citizenship documents, and visa paperwork",
    documents: [
      "Affidavit of Support (I-864)",
      "Affidavit of Relationship",
      "Naturalization Application (N-400)",
      "Passport Application",
      "Visa Application Support Documents",
      "Green Card Renewal",
      "Work Permit Application",
      "Immigration Sponsorship Letter",
      "Affidavit of Single Status",
      "Name Change for Immigration",
      "Birth Certificate Translation Affidavit",
      "Marriage Certificate for Immigration",
      "Divorce Decree Authentication",
      "Good Conduct Certificate",
      "Financial Support Declaration",
      "Employment Verification for Immigration",
      "USCIS Forms (I-130, I-485, etc.)",
      "Asylum Application Support",
      "Citizenship Renunciation Documents",
      "Dual Citizenship Declaration"
    ],
    relatedServices: ["apostille", "international-apostille", "general-notary"]
  },
  {
    category: "Education & Academic",
    description: "School enrollment, transcripts, and academic documents",
    documents: [
      "School Enrollment Forms",
      "Transcript Request Authorization",
      "Diploma Verification",
      "Educational Power of Attorney",
      "Study Abroad Consent",
      "Student Loan Documents",
      "Scholarship Application",
      "Letter of Recommendation Request",
      "Academic Records Release",
      "Home School Affidavit",
      "GED/High School Equivalency",
      "College Application Documents",
      "Teacher Certification Papers",
      "Professional License Application",
      "Continuing Education Verification",
      "Student ID Affidavit",
      "Minor Athlete Travel Consent",
      "Tuition Payment Authorization",
      "School District Transfer Request",
      "Special Education Authorization"
    ],
    relatedServices: ["college-18-plus", "general-notary", "apostille"]
  },
  {
    category: "Military & Veterans",
    description: "Military service documents, VA paperwork, and veteran benefits",
    documents: [
      "DD-214 Authentication",
      "VA Benefits Application",
      "Military Power of Attorney",
      "Deployment POA",
      "Family Care Plan",
      "Military Dependent ID Application",
      "VA Home Loan Documents",
      "GI Bill Authorization",
      "Survivor Benefit Plan Forms",
      "Military Retirement Papers",
      "Medal/Award Verification",
      "Military Medical Records Release",
      "Separation Documents",
      "Commissary/Exchange Authorization",
      "Military Housing Application",
      "Veteran ID Card Application",
      "TRICARE Authorization",
      "Military Spouse Employment Authorization"
    ],
    relatedServices: ["general-notary", "estate-plans", "real-estate"]
  }
];

// Generate comprehensive alphabetical list from all categories
export const ALL_DOCUMENTS = [
  ...new Set(
    DOCUMENT_CATEGORIES.flatMap(cat => cat.documents)
  )
].sort((a, b) => a.localeCompare(b));

// Popular/commonly requested documents
export const POPULAR_DOCUMENTS = [
  "Power of Attorney (POA)",
  "Simple Will",
  "Healthcare Power of Attorney",
  "Vehicle Title Transfer",
  "Affidavit",
  "Quitclaim Deed",
  "Trust Certification",
  "Living Will",
  "Affidavit of Support (I-864)",
  "Loan Agreement"
];

// Helper function to search documents
export const searchDocuments = (query: string): string[] => {
  if (!query.trim()) return ALL_DOCUMENTS;

  const searchTerm = query.toLowerCase();
  return ALL_DOCUMENTS.filter(doc =>
    doc.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get documents by category
export const getDocumentsByCategory = (category: string): string[] => {
  const categoryData = DOCUMENT_CATEGORIES.find(cat =>
    cat.category.toLowerCase() === category.toLowerCase()
  );
  return categoryData ? categoryData.documents : [];
};

// Helper function to find which services handle a specific document
export const getServicesForDocument = (document: string): string[] => {
  const services: string[] = [];

  DOCUMENT_CATEGORIES.forEach(category => {
    if (category.documents.includes(document)) {
      services.push(...category.relatedServices);
    }
  });

  return [...new Set(services)]; // Remove duplicates
};

// Get the primary booking service for a document
export const getDocumentBookingService = (document: string): string => {
  for (const category of DOCUMENT_CATEGORIES) {
    if (category.documents.includes(document)) {
      return category.relatedServices[0] || 'general-notary';
    }
  }
  return 'general-notary';
};

// Get category for a specific document
export const getCategoryForDocument = (document: string): string | null => {
  for (const category of DOCUMENT_CATEGORIES) {
    if (category.documents.includes(document)) {
      return category.category;
    }
  }
  return null;
};

// Get total document count
export const getDocumentCount = (): number => ALL_DOCUMENTS.length;

// Get category count
export const getCategoryCount = (): number => DOCUMENT_CATEGORIES.length;
