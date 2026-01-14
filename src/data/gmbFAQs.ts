// GMB FAQ Data for Google My Business Q&A Section
// Maximum 500 characters per answer for GMB optimization

export interface GMBFAQ {
  id: number;
  question: string;
  answer: string;
  category: 'basics' | 'requirements' | 'loan' | 'estate' | 'pricing' | 'scheduling' | 'specialty';
  linkedPage: string;
  priority: 'high' | 'medium' | 'low';
}

export const GMB_FAQS: GMBFAQ[] = [
  // SERVICE BASICS (4)
  {
    id: 1,
    question: "Do you come to me for notary services?",
    answer: "Yes! We're a mobile notary serving Cincinnati, Dayton & surrounding areas. We come to homes, offices, hospitals, and senior communities in Hamilton, Warren, Montgomery, Butler, Greene, Clinton, and Clermont counties. Same-day appointments available 7 days a week. Call (513) 226-9052.",
    category: "basics",
    linkedPage: "/service-areas",
    priority: "high"
  },
  {
    id: 2,
    question: "What areas do you serve?",
    answer: "We serve a 50-mile radius from Cincinnati including Hamilton, Warren, Montgomery, Butler, Greene, Clinton, Clermont, Brown, and Miami counties. Cities include Cincinnati, Dayton, Mason, West Chester, Kettering, Hamilton, Lebanon, and more. Call for availability.",
    category: "basics",
    linkedPage: "/service-areas",
    priority: "high"
  },
  {
    id: 3,
    question: "Do you offer same-day notary appointments?",
    answer: "Yes! Same-day mobile notary appointments are available 7 days a week for most service areas. We also offer after-hours and weekend service for urgent situations. Call or text (513) 226-9052 for immediate availability.",
    category: "basics",
    linkedPage: "/book-now",
    priority: "high"
  },
  {
    id: 4,
    question: "What notary services do you offer?",
    answer: "We offer loan signings, real estate closings, wills & trusts, powers of attorney, healthcare directives, apostille services, business contracts, I-9 verification, affidavits, and general notarizations. Our mobile notary comes to you for all document types.",
    category: "basics",
    linkedPage: "/",
    priority: "high"
  },

  // ID & REQUIREMENTS (4)
  {
    id: 5,
    question: "What ID do I need for notarization?",
    answer: "You need a current, government-issued photo ID like a driver's license, passport, or state ID card. The ID must not be expired and show your photo and signature clearly. Military IDs are also accepted. Contact us if you have ID questions.",
    category: "requirements",
    linkedPage: "/faq",
    priority: "high"
  },
  {
    id: 6,
    question: "Can I use an expired ID for notarization?",
    answer: "Generally no, but alternatives exist. We can sometimes use multiple forms of ID together, or credible witnesses who know you. Contact us before your appointment if your ID is expired - we'll help find a solution. Call (513) 226-9052.",
    category: "requirements",
    linkedPage: "/blog/expired-id-options",
    priority: "medium"
  },
  {
    id: 7,
    question: "Do I need witnesses for notarization?",
    answer: "It depends on the document. Ohio wills require 2 witnesses. Some powers of attorney may need witnesses. We can often provide witnesses for an additional fee. Ask when scheduling so we come prepared. Call (513) 226-9052.",
    category: "requirements",
    linkedPage: "/blog/witness-requirements",
    priority: "medium"
  },
  {
    id: 8,
    question: "What should I bring to my notary appointment?",
    answer: "Bring: 1) Valid government photo ID (not expired), 2) All documents ready but UNSIGNED, 3) Any required witnesses, 4) Payment method. Do NOT sign documents before the notary arrives - we must witness your signature.",
    category: "requirements",
    linkedPage: "/blog/general-notary-what-to-bring",
    priority: "high"
  },

  // LOAN SIGNINGS (3)
  {
    id: 9,
    question: "What is a loan signing agent?",
    answer: "A loan signing agent is a certified notary who specializes in mortgage closings. We guide borrowers through loan documents, ensure proper signing, and return completed packages to the title company. We're NNA-certified and work with all major lenders.",
    category: "loan",
    linkedPage: "/loan-signings",
    priority: "medium"
  },
  {
    id: 10,
    question: "How long does a loan signing take?",
    answer: "Most purchase loan signings take 45-60 minutes. Refinances typically take 30-45 minutes. Reverse mortgages may take 60-90 minutes due to additional disclosures. We schedule ample time and never rush you through important documents.",
    category: "loan",
    linkedPage: "/loan-signings",
    priority: "medium"
  },
  {
    id: 11,
    question: "Who pays for the notary at a real estate closing?",
    answer: "The title company or lender typically pays the signing agent fee - it's included in your closing costs. You don't pay us directly. We're hired by the title company to ensure your closing is completed accurately and conveniently.",
    category: "loan",
    linkedPage: "/loan-signings",
    priority: "medium"
  },

  // ESTATE PLANNING (3)
  {
    id: 12,
    question: "Can you notarize wills and powers of attorney?",
    answer: "Yes! We specialize in estate planning documents including wills, living trusts, financial POA, healthcare POA, living wills, and trust certifications. We coordinate witnesses when needed and travel to your home or attorney's office.",
    category: "estate",
    linkedPage: "/estate-plans",
    priority: "high"
  },
  {
    id: 13,
    question: "Do you offer hospital or bedside notary service?",
    answer: "Yes, we provide sensitive hospital and bedside notary services throughout Cincinnati and Dayton. We handle healthcare directives, POAs, wills, and urgent documents. Same-day hospital visits available. Call (513) 226-9052 for immediate assistance.",
    category: "estate",
    linkedPage: "/healthcare-notary",
    priority: "high"
  },
  {
    id: 14,
    question: "Can you notarize documents at nursing homes?",
    answer: "Absolutely! We regularly visit nursing homes, assisted living facilities, and senior communities. We're experienced with elderly signers and understand competency requirements. We bring patience and professionalism to every appointment.",
    category: "estate",
    linkedPage: "/healthcare-notary",
    priority: "medium"
  },

  // PRICING & PAYMENT (3)
  {
    id: 15,
    question: "How much does mobile notary service cost?",
    answer: "Ohio notary fees are up to $5 per notarial act (state regulated). Mobile service includes travel fees of $0-25 depending on location. Many areas have no travel fee. We provide upfront quotes before every appointment - no surprises! Call for your free quote.",
    category: "pricing",
    linkedPage: "/pricing",
    priority: "high"
  },
  {
    id: 16,
    question: "Is there a travel fee for mobile notary?",
    answer: "Travel fees range from $0-25 depending on your location. Many areas within our primary service zone have no travel fee. We always quote the total price upfront before scheduling. No hidden fees ever. Call (513) 226-9052 for your exact quote.",
    category: "pricing",
    linkedPage: "/pricing",
    priority: "medium"
  },
  {
    id: 17,
    question: "What payment methods do you accept?",
    answer: "We accept cash, Venmo, Zelle, and PayPal for mobile notary appointments. For loan signings, payment is handled by the title company. Payment is due at the time of service unless other arrangements are made in advance.",
    category: "pricing",
    linkedPage: "/pricing",
    priority: "medium"
  },

  // SCHEDULING (3)
  {
    id: 18,
    question: "How do I schedule a notary appointment?",
    answer: "Three easy ways: 1) Call or text (513) 226-9052, 2) Book online at SignedOnTime.com, 3) Use our website chat. We confirm appointments quickly and offer same-day service when available. Tell us your location, document type, and preferred time.",
    category: "scheduling",
    linkedPage: "/book-now",
    priority: "high"
  },
  {
    id: 19,
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes! We understand plans change. Please give us as much notice as possible so we can accommodate other clients. Same-day cancellations may incur a fee for loan signings. Call or text (513) 226-9052 to reschedule.",
    category: "scheduling",
    linkedPage: "/contact",
    priority: "low"
  },
  {
    id: 20,
    question: "Do you offer after-hours or weekend notary service?",
    answer: "Yes! We offer evening and weekend appointments 7 days a week. After-hours service is perfect for busy professionals and urgent situations. Additional fees may apply for late-night appointments. Call (513) 226-9052 to check availability.",
    category: "scheduling",
    linkedPage: "/book-now",
    priority: "medium"
  },

  // SPECIALTY SERVICES (2)
  {
    id: 21,
    question: "Do you handle apostille services?",
    answer: "Yes! We help with Ohio Secretary of State apostille processing for birth certificates, diplomas, marriage licenses, and other documents. Perfect for international use - immigration, studying abroad, or overseas employment. Call for apostille guidance.",
    category: "specialty",
    linkedPage: "/apostille",
    priority: "medium"
  },
  {
    id: 22,
    question: "Can you notarize business documents?",
    answer: "Absolutely! We handle contracts, partnership agreements, corporate resolutions, I-9 employment verification, vendor packets, and affidavits. We come to your office for convenient service. Perfect for HR departments and busy professionals.",
    category: "specialty",
    linkedPage: "/business-services",
    priority: "medium"
  }
];

// Helper Functions

export const getFAQsByCategory = (category: GMBFAQ['category']): GMBFAQ[] => {
  return GMB_FAQS.filter(faq => faq.category === category);
};

export const getFAQsByPriority = (priority: GMBFAQ['priority']): GMBFAQ[] => {
  return GMB_FAQS.filter(faq => faq.priority === priority);
};

export const formatFAQForGMB = (faq: GMBFAQ): { question: string; answer: string; charCount: number; isValid: boolean } => {
  return {
    question: faq.question,
    answer: faq.answer,
    charCount: faq.answer.length,
    isValid: faq.answer.length <= 500
  };
};

export const exportFAQsAsText = (): string => {
  return GMB_FAQS.map(faq => 
    `Q: ${faq.question}\nA: ${faq.answer}\n`
  ).join('\n');
};

export const exportFAQsAsCSV = (): string => {
  const headers = 'Question,Answer,Category,Priority,Linked Page';
  const rows = GMB_FAQS.map(faq => 
    `"${faq.question}","${faq.answer.replace(/"/g, '""')}","${faq.category}","${faq.priority}","${faq.linkedPage}"`
  );
  return [headers, ...rows].join('\n');
};

export const getFAQStats = () => {
  const categoryStats = {
    basics: getFAQsByCategory('basics').length,
    requirements: getFAQsByCategory('requirements').length,
    loan: getFAQsByCategory('loan').length,
    estate: getFAQsByCategory('estate').length,
    pricing: getFAQsByCategory('pricing').length,
    scheduling: getFAQsByCategory('scheduling').length,
    specialty: getFAQsByCategory('specialty').length,
  };

  const invalidFAQs = GMB_FAQS.filter(faq => faq.answer.length > 500);
  const avgCharCount = Math.round(
    GMB_FAQS.reduce((sum, faq) => sum + faq.answer.length, 0) / GMB_FAQS.length
  );

  return {
    total: GMB_FAQS.length,
    byCategory: categoryStats,
    averageCharCount: avgCharCount,
    invalidCount: invalidFAQs.length,
    highPriority: getFAQsByPriority('high').length
  };
};

export const getCategoryLabel = (category: GMBFAQ['category']): string => {
  const labels: Record<GMBFAQ['category'], string> = {
    basics: 'Service Basics',
    requirements: 'ID & Requirements',
    loan: 'Loan Signings',
    estate: 'Estate Planning',
    pricing: 'Pricing & Payment',
    scheduling: 'Scheduling',
    specialty: 'Specialty Services'
  };
  return labels[category];
};
