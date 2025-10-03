// AI Knowledge Base for Chat Widget
// Add new FAQs and information here - they'll be automatically used by the AI

export const AI_KNOWLEDGE = {
  faqs: [
    {
      question: "Do you travel to me?",
      answer: "Yes! We provide mobile notary services across Cincinnati–Dayton area. We come to your home, office, or any convenient location within our service area."
    },
    {
      question: "What IDs do I need?",
      answer: "You'll need a current, government-issued photo ID such as a driver's license, state ID, passport, or military ID. The ID must be unexpired and clearly show your photo and signature."
    },
    {
      question: "Do you offer after-hours service?",
      answer: "Absolutely! We offer evening and weekend appointments to accommodate your schedule. Emergency and rush services are available for urgent document needs."
    },
    {
      question: "What are your fees?",
      answer: "Our fees include travel within our service area plus per-signature notarization. We provide instant quotes over the phone or through our contact form. No hidden fees, transparent pricing."
    },
    {
      question: "Which loan packages do you handle?",
      answer: "We handle all types: buyer packages, seller packages, refinances, HELOCs, reverse mortgages, and investor/commercial loan documents. Fully trained in all major loan document types."
    },
    {
      question: "How far in advance should I schedule?",
      answer: "We often accommodate same-day requests, but we recommend scheduling 24-48 hours in advance for best availability, especially for loan signings and complex document packages."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Yes, we carry comprehensive Errors & Omissions insurance and are fully bonded. We're also NNA (National Notary Association) certified and background-checked for your peace of mind."
    },
    {
      question: "Can you notarize documents in languages other than English?",
      answer: "We can notarize documents in any language, but the signer must be able to communicate directly with the notary in English, or a qualified translator must be present during the signing."
    }
  ],
  
  services: [
    {
      id: "general-notary",
      name: "General Notary",
      baseRate: 75,
      description: "Basic notarization (acknowledgments, oaths)",
      typicalDocs: ["Affidavits", "Powers of Attorney", "Contracts", "Certifications"]
    },
    {
      id: "loan-signings",
      name: "Loan Signings",
      baseRate: 100,
      description: "Mortgage closings, refinances, HELOCs",
      typicalDocs: ["Purchase packages", "Refinance packages", "HELOCs", "Reverse mortgages"]
    },
    {
      id: "real-estate",
      name: "Real Estate Documents",
      baseRate: 100,
      description: "Deeds, property transfers, investor documents",
      typicalDocs: ["Warranty deeds", "Quit claim deeds", "Property transfers", "Investor packages"]
    },
    {
      id: "estate-plans",
      name: "Estate Plans (Wills, Trusts, POA)",
      baseRate: 125,
      description: "Comprehensive estate planning documents",
      typicalDocs: ["Wills", "Trusts", "Powers of Attorney", "Healthcare directives"]
    },
    {
      id: "apostille",
      name: "Apostille Services",
      baseRate: 225,
      description: "International document authentication",
      typicalDocs: ["Birth certificates", "Diplomas", "Corporate documents", "Legal documents"]
    },
    {
      id: "business-docs",
      name: "Business Documents",
      baseRate: 85,
      description: "I-9 verification, corporate documents",
      typicalDocs: ["I-9 forms", "Business contracts", "Corporate resolutions", "Vendor documents"]
    },
    {
      id: "healthcare-notary",
      name: "Healthcare Documents",
      baseRate: 110,
      description: "Healthcare POA, living wills, HIPAA forms",
      typicalDocs: ["Healthcare POA", "Living wills", "DNR forms", "HIPAA authorizations"]
    }
  ],
  
  travelZones: {
    primary: {
      counties: ["Hamilton", "Butler", "Warren"],
      fee: 0,
      description: "No travel fee"
    },
    secondary: {
      counties: ["Montgomery", "Greene", "Clinton"],
      fee: 25,
      description: "$25 travel fee"
    },
    outside: {
      fee: 50,
      description: "$50 travel fee for areas outside standard zones"
    }
  },
  
  serviceZips: [
    // Hamilton County
    "45202", "45208", "45246", "45240", "45242", "45001", "45002", "45030", "45052", 
    "45140", "45150", "45174", "45211", "45212", "45215", "45216", "45217", "45218",
    "45227", "45231", "45236", "45237", "45239", "45241", "45243", "45244",
    // Warren County
    "45040", "45036", "45066", "45005", "45065", "45032", "45039", "45068", "45152", "45162",
    // Montgomery County
    "45402", "45414", "45429", "45459", "45377", "45309", "45322", "45325", "45327",
    "45342", "45345", "45354", "45378", "45415", "45419", "45424", "45426", "45431",
    "45439", "45449",
    // Butler County
    "45011", "45069", "45056", "45014", "45050", "45003", "45004", "45013", "45044", "45062", "45067",
    // Greene County
    "45430", "45324", "45385", "45305", "45387", "45307", "45314", "45316", "45335", "45370", "45440",
    // Clinton County
    "45177", "45107", "45169", "45113", "45148", "45142", "45146", "45159", "45164"
  ],
  
  commonScenarios: [
    {
      scenario: "expired_id",
      keywords: ["expired", "old id", "license expired"],
      response: "If your ID is expired, we may still be able to help depending on Ohio notary rules. Call Terry at (513) 226-9052 to discuss your specific situation."
    },
    {
      scenario: "hospital_visit",
      keywords: ["hospital", "nursing home", "bedside", "medical facility"],
      response: "Yes! We regularly do hospital and nursing home visits. We're experienced with bedside signings for healthcare directives, POAs, and estate documents. Same-day service often available."
    },
    {
      scenario: "after_hours",
      keywords: ["evening", "night", "weekend", "after hours", "late"],
      response: "We offer after-hours service Monday-Sunday. Evening appointments have an additional $50 fee. Call (513) 226-9052 or book through our website."
    },
    {
      scenario: "same_day",
      keywords: ["today", "same day", "urgent", "emergency", "asap"],
      response: "We often accommodate same-day requests! There's a $25 same-day fee. Call Terry at (513) 226-9052 to check availability."
    },
    {
      scenario: "witnesses",
      keywords: ["witness", "witnesses needed"],
      response: "We can coordinate witnesses with advance notice. Some documents require witnesses in addition to notarization. Let us know what you need and we'll arrange it."
    }
  ],
  
  policies: {
    cancellation: "24-hour notice appreciated but not required",
    witnessArrangement: "We can coordinate witnesses with advance notice",
    languages: "Documents in any language accepted. Signer must communicate in English or provide translator.",
    paymentMethods: "Cash, check, Venmo, Zelle accepted",
    travelTime: "Allow 24-48 hours for best availability, though same-day often possible"
  }
};