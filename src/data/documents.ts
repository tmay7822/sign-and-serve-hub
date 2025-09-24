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
      "Small Estate Affidavit Executor Tips"
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
      "Zoning Compliance Certificate"
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
      "Environmental Impact Statement"
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
      "Medical Records Release Authorization"
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
      "Investment Authorization Form"
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
      "Resignation Letter"
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
      "Business Document Apostille"
    ],
    relatedServices: ["apostille", "international-apostille", "general-notary"]
  }
];

// Comprehensive alphabetical list of all documents
export const ALL_DOCUMENTS = [
  "Adoption Papers",
  "Affidavit",
  "Affidavit of Domicile",
  "Agreement of Sale",
  "Assignment of Lease",
  "Authorization for Minor to Travel",
  "Beneficiary Change Forms",
  "Bill of Sale",
  "Business Contract Notarization",
  "Certificate of Incorporation",
  "Child Custody Agreement",
  "Child Support Agreement",
  "Contract",
  "Corporate Resolution",
  "Deed of Trust",
  "Durable Power of Attorney",
  "Employee Non-Compete Agreement",
  "Environmental Impact Statement",
  "Escrow Agreement",
  "Estate Plan",
  "Exclusive License Agreement",
  "Final Release of Waiver",
  "Financial Statement",
  "Grant Deed",
  "Health Care Proxy",
  "Health Insurance Claim Form",
  "HIPAA Authorization",
  "Hold Harmless Agreement",
  "Homeowner Association (HOA) Agreement",
  "Incorporation Documents",
  "Installment Payment Agreement",
  "Insurance Assignment Form",
  "International Travel Consent",
  "Investment Authorization Form",
  "Jurat",
  "Land Contract",
  "Lease Agreement",
  "Letter of Consent",
  "Lien Waiver",
  "Living Trust",
  "Living Will",
  "Loan Agreement",
  "Loan Modification Agreement",
  "Marriage License Application",
  "Mechanic's Lien",
  "Medical Directive",
  "Medical Records Release Authorization",
  "Mortgage Agreement",
  "Mutual Non-Disclosure Agreement (NDA)",
  "Mutual Release Agreement",
  "Name Change Application",
  "Name Mismatch Affidavit",
  "Notice of Default",
  "Notice to Quit",
  "Operating Agreement",
  "Parental Consent for Travel",
  "Parental Permission for Field Trip",
  "Partition Deed",
  "Partnership Agreement",
  "Paternity Affidavit",
  "Personal Guarantee",
  "Petition for Guardianship",
  "Postnuptial Agreement",
  "Power of Attorney (POA)",
  "Preliminary Notice",
  "Prenuptial Agreement",
  "Promissory Note",
  "Proof of Identity Affidavit",
  "Proof of Life Certificate",
  "Property Deed",
  "Quitclaim Deed",
  "Real Estate Contract",
  "Real Estate Option Agreement",
  "Release of Lien",
  "Rental Agreement",
  "Rental Application",
  "Resignation Letter",
  "Retirement Benefits Form",
  "Revocation of Power of Attorney",
  "Revocation of Trust",
  "Separation Agreement",
  "Settlement Agreement",
  "Settlement Statement (HUD-1)",
  "Signature Affidavit",
  "Simple Will",
  "Small Estate Affidavit Executor Tips",
  "Spousal Consent Form",
  "Stock Transfer Agreement",
  "Subordination Agreement",
  "Tax Form (W-9, W-2, etc.)",
  "Temporary Guardianship Agreement",
  "Temporary Restraining Order (TRO)",
  "Title Transfer",
  "Translator Affidavits",
  "Trust Amendment",
  "Trust Certification",
  "Trustee Appointment",
  "Uniform Commercial Code (UCC) Financing Statement",
  "Vehicle Bill of Sale",
  "Vehicle Title Application",
  "Vendor Agreement",
  "Waiver of Right to Claim Against Estate",
  "Warranty Deed",
  "Will Codicil",
  "Work for Hire Agreement",
  "Zoning Compliance Certificate"
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