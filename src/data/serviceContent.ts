// SERVICE-SPECIFIC CONTENT
// Detailed content for each service including unique features, processes, and FAQs

interface ServiceContent {
  serviceId: string;
  specificServices: string[];
  process: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  commonDocuments: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  tips: Array<{
    title: string;
    description: string;
  }>;
  relatedServices: string[];
}

export const SERVICE_CONTENT: { [key: string]: ServiceContent } = {
  'general-notary': {
    serviceId: 'general-notary',
    specificServices: [
      'Acknowledgments for real estate deeds',
      'Jurats for sworn statements and affidavits',
      'Copy certifications of important documents',
      'Oaths and affirmations for various purposes',
      'Signature witnessing for contracts',
      'I-9 employment verification forms'
    ],
    process: {
      title: 'Our General Notary Process',
      steps: [
        {
          title: 'Schedule Appointment',
          description: 'Call or text to schedule at your preferred location and time'
        },
        {
          title: 'Document Review',
          description: 'We review your documents and verify all parties are present'
        },
        {
          title: 'ID Verification',
          description: 'Valid government-issued photo ID required for all signers'
        },
        {
          title: 'Notarization',
          description: 'Professional notarization with official seal and signature'
        }
      ]
    },
    commonDocuments: [
      'Real estate deeds and property documents',
      'Power of attorney forms',
      'Affidavits and sworn statements',
      'Contract acknowledgments',
      'Employment verification (I-9)',
      'Medical forms and healthcare directives'
    ],
    faqs: [
      {
        question: 'What ID do I need for notarization?',
        answer: 'You need a current, government-issued photo ID such as a driver\'s license, passport, or state ID card. The ID must not be expired and must clearly show your photo and signature.'
      },
      {
        question: 'Can you notarize documents in languages other than English?',
        answer: 'Yes, as long as the notarial certificate is in English and you can communicate with the notary in English to confirm your identity and willingness to sign.'
      },
      {
        question: 'Do all parties need to be present for notarization?',
        answer: 'Yes, all parties whose signatures require notarization must be physically present before the notary at the time of signing.'
      }
    ],
    tips: [
      {
        title: 'Bring Valid ID',
        description: 'Always bring current, government-issued photo identification'
      },
      {
        title: 'Don\'t Pre-Sign',
        description: 'Wait to sign documents until you\'re in front of the notary'
      },
      {
        title: 'Review Documents',
        description: 'Read all documents carefully before signing'
      }
    ],
    relatedServices: ['real-estate', 'estate-plans', 'business-services']
  },
  
  'loan-signings': {
    serviceId: 'loan-signings',
    specificServices: [
      'Purchase mortgage closings',
      'Refinance loan signings',
      'HELOC (Home Equity Line of Credit)',
      'Reverse mortgage signings',
      'Commercial loan documents',
      'Seller closing packages'
    ],
    process: {
      title: 'Professional Loan Signing Process',
      steps: [
        {
          title: 'Document Review',
          description: 'We receive and review your loan package 24 hours prior'
        },
        {
          title: 'Appointment Confirmation',
          description: 'Confirm time, location, and all required parties'
        },
        {
          title: 'Guided Signing',
          description: 'Professional guidance through each document with explanations'
        },
        {
          title: 'Document Return',
          description: 'Secure return via FedEx or as specified by lender'
        }
      ]
    },
    commonDocuments: [
      'Loan note and deed of trust',
      'Closing disclosure (CD)',
      'Right to cancel forms',
      'Property disclosure statements',
      'Title insurance documents',
      'Tax and insurance information'
    ],
    faqs: [
      {
        question: 'How long does a loan signing take?',
        answer: 'Most residential loan signings take 45-90 minutes depending on the loan type and number of documents. We allow ample time to review everything carefully.'
      },
      {
        question: 'Can you explain the loan documents to me?',
        answer: 'We can point out key information like payment amounts, interest rates, and due dates, but we cannot provide legal advice. Consult your lender or attorney for detailed explanations.'
      },
      {
        question: 'What if I find an error in the documents?',
        answer: 'We\'ll contact your lender immediately to resolve any errors before proceeding with the signing.'
      }
    ],
    tips: [
      {
        title: 'Review Closing Disclosure',
        description: 'Compare final terms with your loan estimate before signing'
      },
      {
        title: 'Ask Questions',
        description: 'Don\'t hesitate to ask about any document you don\'t understand'
      },
      {
        title: 'Bring Certified Funds',
        description: 'Have your certified check or wire transfer ready if required'
      }
    ],
    relatedServices: ['real-estate', 'real-estate-notary']
  },

  'estate-plans': {
    serviceId: 'estate-plans',
    specificServices: [
      'Last will and testament notarization',
      'Living trust document signing',
      'Durable power of attorney for finances',
      'Healthcare power of attorney',
      'Advanced healthcare directives',
      'HIPAA authorization forms'
    ],
    process: {
      title: 'Estate Planning Document Process',
      steps: [
        {
          title: 'Document Preparation',
          description: 'Ensure all estate planning documents are properly prepared'
        },
        {
          title: 'Witness Coordination',
          description: 'Arrange for required witnesses (we can provide if needed)'
        },
        {
          title: 'Signing Ceremony',
          description: 'Proper execution with notarization and witnessing'
        },
        {
          title: 'Document Storage',
          description: 'Guidance on secure storage and distribution of originals'
        }
      ]
    },
    commonDocuments: [
      'Wills with testamentary provisions',
      'Revocable living trusts',
      'Financial powers of attorney',
      'Healthcare directives and living wills',
      'Guardian nomination forms',
      'Trust funding documents'
    ],
    faqs: [
      {
        question: 'Do wills need to be notarized in Ohio?',
        answer: 'Ohio wills don\'t require notarization but can be "self-proving" with notarized witness signatures, which simplifies probate court proceedings.'
      },
      {
        question: 'How many witnesses do I need for estate planning documents?',
        answer: 'Ohio requires 2 witnesses for wills. Powers of attorney should be notarized. We can coordinate witnesses if you don\'t have them available.'
      },
      {
        question: 'Can family members serve as witnesses?',
        answer: 'It\'s best to use disinterested witnesses who are not beneficiaries. We can provide neutral witnesses for your documents.'
      }
    ],
    tips: [
      {
        title: 'Use Neutral Witnesses',
        description: 'Avoid having beneficiaries serve as witnesses to prevent conflicts'
      },
      {
        title: 'Update Regularly',
        description: 'Review and update estate plans every 3-5 years or after major life changes'
      },
      {
        title: 'Store Safely',
        description: 'Keep originals in a safe deposit box or with your attorney'
      }
    ],
    relatedServices: ['wills-trusts-estates', 'healthcare-notary']
  },

  'real-estate': {
    serviceId: 'real-estate',
    specificServices: [
      'Warranty deed notarizations',
      'Quit claim deed signings',
      'Real estate power of attorney',
      'Property transfer documents',
      'Mortgage satisfaction letters',
      'Homestead exemption forms'
    ],
    process: {
      title: 'Real Estate Document Process',
      steps: [
        {
          title: 'Document Review',
          description: 'Verify all property information and parties are correct'
        },
        {
          title: 'Identity Confirmation',
          description: 'Confirm identity of all grantors and grantees'
        },
        {
          title: 'Notarization',
          description: 'Proper notarial acts according to Ohio law'
        },
        {
          title: 'Recording Guidance',
          description: 'Instructions for filing with county recorder\'s office'
        }
      ]
    },
    commonDocuments: [
      'Warranty deeds and quit claim deeds',
      'Real estate purchase agreements',
      'Property disclosure forms',
      'Mortgage documents and refinancing',
      'Lien releases and satisfactions',
      'Easement and right-of-way documents'
    ],
    faqs: [
      {
        question: 'What\'s the difference between warranty and quit claim deeds?',
        answer: 'Warranty deeds provide guarantees about clear title, while quit claim deeds transfer only the interest the grantor has, with no warranties about title quality.'
      },
      {
        question: 'Do I need witnesses for real estate deeds?',
        answer: 'Ohio doesn\'t require witnesses for deeds, but notarization is mandatory for recording at the county recorder\'s office.'
      },
      {
        question: 'Can you help with property transfers between family members?',
        answer: 'Yes, we regularly handle family property transfers including gifts, inheritance distributions, and transfers to trusts.'
      }
    ],
    tips: [
      {
        title: 'Verify Legal Description',
        description: 'Ensure property legal description matches existing deeds exactly'
      },
      {
        title: 'Check Liens First',
        description: 'Research any existing liens before property transfers'
      },
      {
        title: 'File Promptly',
        description: 'Record documents at county recorder\'s office as soon as possible'
      }
    ],
    relatedServices: ['loan-signings', 'real-estate-notary']
  },

  'apostille': {
    serviceId: 'apostille',
    specificServices: [
      'Birth certificate apostilles',
      'Marriage certificate authentication',
      'Educational document certification',
      'Business document apostilles',
      'Criminal background check certification',
      'Medical document authentication'
    ],
    process: {
      title: 'Apostille Process',
      steps: [
        {
          title: 'Document Review',
          description: 'Verify documents are eligible for apostille certification'
        },
        {
          title: 'Notarization',
          description: 'Notarize documents that require notarial certification'
        },
        {
          title: 'State Submission',
          description: 'Submit to Ohio Secretary of State for apostille'
        },
        {
          title: 'Return Delivery',
          description: 'Secure return of apostilled documents to you'
        }
      ]
    },
    commonDocuments: [
      'Vital records (birth, death, marriage certificates)',
      'Educational transcripts and diplomas',
      'Corporate documents and articles',
      'Power of attorney documents',
      'Affidavits and sworn statements',
      'FBI background check results'
    ],
    faqs: [
      {
        question: 'How long does the apostille process take?',
        answer: 'Standard processing through Ohio Secretary of State takes 2-3 weeks. Expedited service is available for urgent requests.'
      },
      {
        question: 'Which countries accept apostilles?',
        answer: 'Apostilles are recognized by all countries that signed the Hague Convention, which includes most countries worldwide except a few like China and UAE.'
      },
      {
        question: 'Can you apostille documents from other states?',
        answer: 'Documents must be apostilled by the state where they were issued. We can handle Ohio documents and coordinate with other states as needed.'
      }
    ],
    tips: [
      {
        title: 'Get Certified Copies',
        description: 'Always apostille certified copies, never original documents'
      },
      {
        title: 'Check Requirements',
        description: 'Verify destination country\'s specific apostille requirements'
      },
      {
        title: 'Plan Ahead',
        description: 'Allow 3-4 weeks for complete apostille processing'
      }
    ],
    relatedServices: ['international-apostille', 'general-notary']
  },

  'business-banking': {
    serviceId: 'business-banking',
    specificServices: [
      'Corporate resolutions and minutes',
      'Bank signature cards and agreements',
      'Business loan documents',
      'Partnership agreements',
      'LLC operating agreements',
      'Commercial real estate documents'
    ],
    process: {
      title: 'Business Banking Document Process',
      steps: [
        {
          title: 'Document Review',
          description: 'Review all business documents and corporate requirements'
        },
        {
          title: 'Authority Verification',
          description: 'Confirm signing authority and corporate authorization'
        },
        {
          title: 'Professional Notarization',
          description: 'Execute documents with proper notarial certificates'
        },
        {
          title: 'Secure Delivery',
          description: 'Return completed documents to your bank or institution'
        }
      ]
    },
    commonDocuments: [
      'Corporate resolutions and board minutes',
      'Banking agreements and signature cards',
      'Commercial loan applications and agreements',
      'Business formation documents',
      'Partnership and LLC agreements',
      'Commercial property documents'
    ],
    faqs: [
      {
        question: 'Can you notarize corporate documents without board approval?',
        answer: 'No, we need to see proper corporate authorization such as board resolutions or bylaws that authorize the signing of documents.'
      },
      {
        question: 'What ID is required for business document signings?',
        answer: 'Corporate officers need valid government-issued photo ID. We may also need to verify their authority through corporate records.'
      },
      {
        question: 'Do you handle rush business banking documents?',
        answer: 'Yes, we provide same-day service for urgent business banking needs including loan closings and time-sensitive agreements.'
      }
    ],
    tips: [
      {
        title: 'Bring Corporate Authorization',
        description: 'Have board resolutions or bylaws ready that authorize document signing'
      },
      {
        title: 'Verify Signatory Authority',
        description: 'Ensure the person signing has proper corporate authority'
      },
      {
        title: 'Multiple Locations Available',
        description: 'We can coordinate signings at multiple business locations'
      }
    ],
    relatedServices: ['business-services', 'general-notary']
  },

  'business-services': {
    serviceId: 'business-services',
    specificServices: [
      'Articles of incorporation',
      'Corporate bylaws and resolutions',
      'Employment agreements and contracts',
      'Non-disclosure agreements (NDAs)',
      'Business partnership documents',
      'Commercial lease agreements'
    ],
    process: {
      title: 'Business Document Process',
      steps: [
        {
          title: 'Business Document Review',
          description: 'Analyze corporate structure and document requirements'
        },
        {
          title: 'Stakeholder Coordination',
          description: 'Coordinate with all parties and their representatives'
        },
        {
          title: 'Professional Execution',
          description: 'Handle complex multi-party business document signings'
        },
        {
          title: 'Distribution & Filing',
          description: 'Manage document distribution and filing requirements'
        }
      ]
    },
    commonDocuments: [
      'Corporate formation and governance documents',
      'Employment contracts and agreements',
      'Business acquisition and sale documents',
      'Commercial contracts and agreements',
      'Franchise and licensing agreements',
      'Business dissolution documents'
    ],
    faqs: [
      {
        question: 'Can you handle multi-party business agreements?',
        answer: 'Yes, we coordinate complex signings with multiple parties, attorneys, and business representatives.'
      },
      {
        question: 'Do you provide mobile service for business locations?',
        answer: 'Absolutely. We regularly visit corporate offices, attorney offices, and business locations throughout the region.'
      },
      {
        question: 'Can you notarize documents for out-of-state businesses?',
        answer: 'Yes, as long as the signers are physically present in Ohio and have valid identification.'
      }
    ],
    tips: [
      {
        title: 'Schedule Coordination Meetings',
        description: 'Complex business deals benefit from advance coordination calls'
      },
      {
        title: 'Prepare Corporate Records',
        description: 'Have current corporate records available to verify authority'
      },
      {
        title: 'Plan for Multiple Signatures',
        description: 'Allow extra time for multi-party business document signings'
      }
    ],
    relatedServices: ['business-banking', 'general-notary']
  },

  'college-18-plus': {
    serviceId: 'college-18-plus',
    specificServices: [
      'FERPA release forms',
      'Medical consent and HIPAA forms',
      'Financial aid documents',
      'Student housing agreements',
      'Internship and employment forms',
      'Study abroad documentation'
    ],
    process: {
      title: 'College Document Process',
      steps: [
        {
          title: 'Student Document Review',
          description: 'Review all required college and university forms'
        },
        {
          title: 'Parent & Student Coordination',
          description: 'Coordinate signings between students and parents'
        },
        {
          title: 'Campus or Mobile Service',
          description: 'Meet at campus locations or your preferred location'
        },
        {
          title: 'Timely Submission',
          description: 'Ensure documents meet school deadlines'
        }
      ]
    },
    commonDocuments: [
      'FERPA educational privacy releases',
      'Medical consent and healthcare forms',
      'Financial aid and scholarship documents',
      'Student loan promissory notes',
      'Housing and residence hall agreements',
      'Study abroad and travel consent'
    ],
    faqs: [
      {
        question: 'Do both parents need to sign college forms?',
        answer: 'It depends on the specific form and custody arrangements. We can review requirements and coordinate with all necessary parties.'
      },
      {
        question: 'Can you meet students on campus?',
        answer: 'Yes, we provide mobile service to college campuses throughout the Cincinnati-Dayton area including UC, Xavier, Miami, and Wright State.'
      },
      {
        question: 'What if my student is away at college in another state?',
        answer: 'We can coordinate timing when they\'re home, or help you find qualified notaries in their college town.'
      }
    ],
    tips: [
      {
        title: 'Start Early',
        description: 'Begin document preparation well before school deadlines'
      },
      {
        title: 'Campus Meetings Available',
        description: 'We can meet at student unions, libraries, or dorm lobbies'
      },
      {
        title: 'Parent Coordination',
        description: 'Plan signings when both parents can be present if required'
      }
    ],
    relatedServices: ['healthcare-notary', 'general-notary']
  },

  'healthcare-notary': {
    serviceId: 'healthcare-notary',
    specificServices: [
      'Healthcare power of attorney (HCPOA)',
      'Living wills and advance directives',
      'HIPAA authorization forms',
      'Medical consent forms',
      'DNR (Do Not Resuscitate) orders',
      'Patient advocacy documents'
    ],
    process: {
      title: 'Healthcare Document Process',
      steps: [
        {
          title: 'Healthcare Document Review',
          description: 'Review medical and healthcare directive documents'
        },
        {
          title: 'Capacity Assessment',
          description: 'Ensure signer understands and is capable of signing'
        },
        {
          title: 'Witness Coordination',
          description: 'Arrange required medical witnesses when needed'
        },
        {
          title: 'Hospital/Home Service',
          description: 'Mobile service to hospitals, homes, or care facilities'
        }
      ]
    },
    commonDocuments: [
      'Healthcare powers of attorney',
      'Living wills and medical directives',
      'HIPAA privacy authorization forms',
      'Medical treatment consent forms',
      'End-of-life care instructions',
      'Mental health treatment authorizations'
    ],
    faqs: [
      {
        question: 'Can you visit hospitals and nursing homes?',
        answer: 'Yes, we regularly provide mobile service to hospitals, nursing homes, assisted living facilities, and rehabilitation centers.'
      },
      {
        question: 'What if the patient can\'t leave their bed?',
        answer: 'We come to the patient\'s bedside and can work around medical equipment and care schedules.'
      },
      {
        question: 'Do healthcare documents need witnesses?',
        answer: 'Some healthcare documents require witnesses in addition to notarization. We can coordinate with medical staff or provide neutral witnesses.'
      }
    ],
    tips: [
      {
        title: 'Coordinate with Medical Staff',
        description: 'Work with nurses and doctors to find optimal signing times'
      },
      {
        title: 'Ensure Patient Alertness',
        description: 'Schedule when patient is most alert and comfortable'
      },
      {
        title: 'Bring Required Witnesses',
        description: 'Some forms need medical personnel or family members as witnesses'
      }
    ],
    relatedServices: ['estate-plans', 'wills-trusts-estates']
  },

  'insurance-retirement': {
    serviceId: 'insurance-retirement',
    specificServices: [
      'Retirement plan distributions',
      'IRA and 401(k) beneficiary changes',
      'Life insurance beneficiary updates',
      'Annuity contracts and applications',
      'Pension plan documents',
      'Disability insurance claims'
    ],
    process: {
      title: 'Insurance & Retirement Process',
      steps: [
        {
          title: 'Document Analysis',
          description: 'Review insurance and retirement document requirements'
        },
        {
          title: 'Beneficiary Verification',
          description: 'Confirm accuracy of all beneficiary information'
        },
        {
          title: 'Professional Notarization',
          description: 'Execute documents according to company requirements'
        },
        {
          title: 'Company Submission',
          description: 'Coordinate return to insurance or retirement companies'
        }
      ]
    },
    commonDocuments: [
      'Retirement account beneficiary designations',
      'Life insurance policy changes',
      'Annuity contracts and riders',
      'Pension distribution elections',
      'Insurance claim affidavits',
      'Retirement plan loan documents'
    ],
    faqs: [
      {
        question: 'How often should I update my beneficiaries?',
        answer: 'Review beneficiaries after major life events like marriage, divorce, births, or deaths. We recommend reviewing every 3-5 years.'
      },
      {
        question: 'Can you help with retirement planning documents?',
        answer: 'We notarize retirement documents but don\'t provide financial advice. Consult your financial advisor for planning decisions.'
      },
      {
        question: 'Do life insurance beneficiary changes need witnesses?',
        answer: 'Most insurance companies only require notarization, but some may require witnesses. We can review specific requirements.'
      }
    ],
    tips: [
      {
        title: 'Review Regularly',
        description: 'Update beneficiaries after major life changes'
      },
      {
        title: 'Keep Records Current',
        description: 'Ensure all contact information and relationships are accurate'
      },
      {
        title: 'Coordinate with Advisors',
        description: 'Work with financial advisors to ensure proper documentation'
      }
    ],
    relatedServices: ['estate-plans', 'business-services']
  },

  'international-apostille': {
    serviceId: 'international-apostille',
    specificServices: [
      'Educational transcript apostilles',
      'Corporate document authentication',
      'FBI background check certification',
      'Medical document apostilles',
      'Immigration document certification',
      'Commercial document authentication'
    ],
    process: {
      title: 'International Apostille Process',
      steps: [
        {
          title: 'Document Assessment',
          description: 'Evaluate documents for international apostille requirements'
        },
        {
          title: 'Multi-State Coordination',
          description: 'Handle documents from multiple states when needed'
        },
        {
          title: 'Secretary of State Processing',
          description: 'Submit to appropriate Secretary of State offices'
        },
        {
          title: 'International Delivery',
          description: 'Coordinate secure delivery for international use'
        }
      ]
    },
    commonDocuments: [
      'University transcripts and diplomas',
      'Corporate certificates and articles',
      'FBI criminal background checks',
      'Medical licenses and certifications',
      'Marriage and birth certificates',
      'Commercial invoices and certificates'
    ],
    faqs: [
      {
        question: 'Which countries accept apostilles?',
        answer: 'Apostilles are accepted by all Hague Convention member countries, which includes most nations worldwide except a few like China and UAE.'
      },
      {
        question: 'How long does international apostille processing take?',
        answer: 'Standard processing takes 2-3 weeks per state. Expedited service is available for urgent international deadlines.'
      },
      {
        question: 'Can you handle documents from multiple states?',
        answer: 'Yes, we coordinate apostille processing for documents from different states, which is common for international applications.'
      }
    ],
    tips: [
      {
        title: 'Check Destination Requirements',
        description: 'Verify specific apostille requirements for your destination country'
      },
      {
        title: 'Use Certified Copies',
        description: 'Always apostille certified copies, never original documents'
      },
      {
        title: 'Plan for Processing Time',
        description: 'Allow 4-6 weeks for complete multi-state apostille processing'
      }
    ],
    relatedServices: ['apostille', 'general-notary']
  },

  'legal-court': {
    serviceId: 'legal-court',
    specificServices: [
      'Court affidavits and depositions',
      'Legal document authentication',
      'Subpoena and summons service prep',
      'Evidence authentication',
      'Attorney document certification',
      'Paralegal support services'
    ],
    process: {
      title: 'Legal & Court Document Process',
      steps: [
        {
          title: 'Legal Document Review',
          description: 'Review court documents and legal requirements'
        },
        {
          title: 'Attorney Coordination',
          description: 'Work with legal counsel on document preparation'
        },
        {
          title: 'Court-Compliant Execution',
          description: 'Execute documents meeting court standards'
        },
        {
          title: 'Timely Court Filing',
          description: 'Ensure documents meet court deadlines and requirements'
        }
      ]
    },
    commonDocuments: [
      'Sworn affidavits and declarations',
      'Court pleadings and motions',
      'Evidence authentication certificates',
      'Deposition transcripts and exhibits',
      'Settlement agreements and releases',
      'Divorce and custody documents'
    ],
    faqs: [
      {
        question: 'Can you notarize documents for court cases?',
        answer: 'Yes, we regularly notarize affidavits, declarations, and other court documents for attorneys and self-represented parties.'
      },
      {
        question: 'Do you work with law firms directly?',
        answer: 'Absolutely. We provide regular mobile notary services to law firms throughout the Cincinnati-Dayton metro area.'
      },
      {
        question: 'Can you handle rush orders for court deadlines?',
        answer: 'Yes, we understand legal deadlines are critical and offer same-day and emergency service for urgent court filings.'
      }
    ],
    tips: [
      {
        title: 'Coordinate with Counsel',
        description: 'Work with your attorney to ensure proper document preparation'
      },
      {
        title: 'Meet Court Deadlines',
        description: 'Schedule notarization well before court filing deadlines'
      },
      {
        title: 'Verify Requirements',
        description: 'Confirm specific court requirements for document format'
      }
    ],
    relatedServices: ['general-notary', 'business-services']
  },

  'other-notary': {
    serviceId: 'other-notary',
    specificServices: [
      'Travel consent letters',
      'Custody and guardianship forms',
      'Immigration document support',
      'School enrollment forms',
      'Government application support',
      'Miscellaneous affidavits'
    ],
    process: {
      title: 'Specialized Notary Process',
      steps: [
        {
          title: 'Document Assessment',
          description: 'Evaluate unique document requirements and restrictions'
        },
        {
          title: 'Research & Preparation',
          description: 'Research specific requirements for unusual documents'
        },
        {
          title: 'Custom Service Delivery',
          description: 'Provide tailored notarization for specialized needs'
        },
        {
          title: 'Follow-up Support',
          description: 'Assist with any post-notarization requirements'
        }
      ]
    },
    commonDocuments: [
      'International travel consent forms',
      'Immigration support documents',
      'Custody and child welfare forms',
      'Government agency applications',
      'Academic and educational forms',
      'Personal and family affidavits'
    ],
    faqs: [
      {
        question: 'Can you notarize unusual or specialized documents?',
        answer: 'Yes, we handle many types of specialized documents. We research requirements to ensure proper notarization.'
      },
      {
        question: 'Do you provide notarization for immigration documents?',
        answer: 'We can notarize supporting documents for immigration cases, but cannot notarize USCIS forms themselves.'
      },
      {
        question: 'Can you help with documents I\'ve never seen before?',
        answer: 'Absolutely. We research unfamiliar documents to ensure we provide the correct notarial service.'
      }
    ],
    tips: [
      {
        title: 'Provide Context',
        description: 'Explain the document\'s purpose to help us serve you better'
      },
      {
        title: 'Allow Extra Time',
        description: 'Unusual documents may require additional research and preparation'
      },
      {
        title: 'Bring Instructions',
        description: 'Include any specific requirements from requesting agencies'
      }
    ],
    relatedServices: ['general-notary', 'apostille']
  },

  'personal-family': {
    serviceId: 'personal-family',
    specificServices: [
      'Name change affidavits',
      'Family consent forms',
      'Custody and visitation agreements',
      'Adoption support documents',
      'Marriage and divorce papers',
      'Child welfare and protection forms'
    ],
    process: {
      title: 'Personal & Family Document Process',
      steps: [
        {
          title: 'Family Consultation',
          description: 'Discuss family document needs and sensitive situations'
        },
        {
          title: 'Privacy Protection',
          description: 'Ensure confidentiality and comfort for all family members'
        },
        {
          title: 'Flexible Scheduling',
          description: 'Accommodate family schedules and childcare needs'
        },
        {
          title: 'Compassionate Service',
          description: 'Provide understanding support during difficult times'
        }
      ]
    },
    commonDocuments: [
      'Name change and identity documents',
      'Custody agreements and modifications',
      'Adoption consent and support forms',
      'Family court affidavits',
      'Divorce settlement agreements',
      'Child support and welfare documents'
    ],
    faqs: [
      {
        question: 'Can you help with sensitive family situations?',
        answer: 'Yes, we handle family documents with discretion and compassion, understanding these can be emotional situations.'
      },
      {
        question: 'Do you accommodate families with young children?',
        answer: 'Absolutely. We can work around nap times, school schedules, and provide child-friendly environments.'
      },
      {
        question: 'Can you coordinate with family court requirements?',
        answer: 'Yes, we ensure documents meet family court standards and can coordinate with court schedules when needed.'
      }
    ],
    tips: [
      {
        title: 'Schedule Strategically',
        description: 'Plan around children\'s schedules and family commitments'
      },
      {
        title: 'Maintain Privacy',
        description: 'Choose comfortable, private locations for sensitive discussions'
      },
      {
        title: 'Prepare Children',
        description: 'Help children understand the process age-appropriately'
      }
    ],
    relatedServices: ['estate-plans', 'legal-court']
  },

  'real-estate-notary': {
    serviceId: 'real-estate-notary',
    specificServices: [
      'Purchase agreement notarizations',
      'Property disclosure statements',
      'Real estate agent documents',
      'Investor transaction support',
      'Commercial property documents',
      'Real estate power of attorney'
    ],
    process: {
      title: 'Real Estate Professional Process',
      steps: [
        {
          title: 'Transaction Coordination',
          description: 'Coordinate with real estate professionals and clients'
        },
        {
          title: 'Document Verification',
          description: 'Verify all property information and party details'
        },
        {
          title: 'Professional Execution',
          description: 'Handle complex real estate document packages'
        },
        {
          title: 'Industry Support',
          description: 'Provide ongoing support to real estate professionals'
        }
      ]
    },
    commonDocuments: [
      'Real estate purchase agreements',
      'Property disclosure forms',
      'Agent listing and buyer agreements',
      'Investment property documents',
      'Commercial lease agreements',
      'Real estate partnership agreements'
    ],
    faqs: [
      {
        question: 'Do you work with real estate agents regularly?',
        answer: 'Yes, we provide ongoing mobile notary services to real estate agents, brokers, and property managers throughout the region.'
      },
      {
        question: 'Can you handle last-minute real estate signings?',
        answer: 'Absolutely. Real estate deals often have tight timelines, and we provide same-day service for urgent closings.'
      },
      {
        question: 'Do you service both residential and commercial properties?',
        answer: 'Yes, we handle all types of real estate transactions from residential purchases to complex commercial property deals.'
      }
    ],
    tips: [
      {
        title: 'Coordinate Early',
        description: 'Schedule notarization as soon as documents are ready'
      },
      {
        title: 'Verify Property Details',
        description: 'Double-check all property addresses and legal descriptions'
      },
      {
        title: 'Plan for Contingencies',
        description: 'Have backup plans for document changes or scheduling issues'
      }
    ],
    relatedServices: ['real-estate', 'loan-signings']
  },

  'vehicles-dmv': {
    serviceId: 'vehicles-dmv',
    specificServices: [
      'Vehicle title transfers',
      'DMV power of attorney forms',
      'Car sale and purchase documents',
      'Vehicle registration affidavits',
      'Auto dealer support services',
      'Motorcycle and boat titles'
    ],
    process: {
      title: 'Vehicle & DMV Document Process',
      steps: [
        {
          title: 'Title Verification',
          description: 'Verify vehicle information and title requirements'
        },
        {
          title: 'Buyer-Seller Coordination',
          description: 'Coordinate between buyers, sellers, and dealers'
        },
        {
          title: 'DMV-Compliant Notarization',
          description: 'Execute documents meeting BMV/DMV standards'
        },
        {
          title: 'Registration Support',
          description: 'Ensure documents are ready for registration'
        }
      ]
    },
    commonDocuments: [
      'Vehicle titles and title transfers',
      'Bill of sale documents',
      'DMV power of attorney forms',
      'Vehicle registration affidavits',
      'Auto dealer wholesale documents',
      'Boat and motorcycle titles'
    ],
    faqs: [
      {
        question: 'Can you help with vehicle title transfers?',
        answer: 'Yes, we regularly notarize vehicle titles, bills of sale, and other DMV documents for car sales and transfers.'
      },
      {
        question: 'Do you work with auto dealers?',
        answer: 'Absolutely. We provide regular notary services to auto dealers for wholesale purchases, title work, and customer transactions.'
      },
      {
        question: 'What if the buyer and seller can\'t meet at the same time?',
        answer: 'We can coordinate separate appointments or meet at neutral locations like the BMV office to facilitate the transfer.'
      }
    ],
    tips: [
      {
        title: 'Bring Current Title',
        description: 'Ensure the current title is available and properly signed'
      },
      {
        title: 'Verify VIN Numbers',
        description: 'Double-check vehicle identification numbers match all documents'
      },
      {
        title: 'Plan BMV Visit',
        description: 'Schedule BMV appointment soon after notarization'
      }
    ],
    relatedServices: ['general-notary', 'business-services']
  },

  'wills-trusts-estates': {
    serviceId: 'wills-trusts-estates',
    specificServices: [
      'Will execution and self-proving',
      'Trust document signings',
      'Estate administration documents',
      'Probate court affidavits',
      'Executor and trustee documents',
      'Asset transfer forms'
    ],
    process: {
      title: 'Estate Document Process',
      steps: [
        {
          title: 'Estate Planning Review',
          description: 'Review comprehensive estate planning documents'
        },
        {
          title: 'Witness Coordination',
          description: 'Arrange proper witnesses for wills and trusts'
        },
        {
          title: 'Ceremonial Execution',
          description: 'Conduct formal will and trust signing ceremonies'
        },
        {
          title: 'Document Preservation',
          description: 'Ensure proper execution for legal validity'
        }
      ]
    },
    commonDocuments: [
      'Last will and testament documents',
      'Revocable and irrevocable trusts',
      'Estate administration forms',
      'Probate court filings',
      'Trustee appointment documents',
      'Asset distribution agreements'
    ],
    faqs: [
      {
        question: 'Do wills need special witness requirements?',
        answer: 'Ohio wills require 2 witnesses who are not beneficiaries. Self-proving wills also need notarized witness signatures.'
      },
      {
        question: 'Can you help with trust document signings?',
        answer: 'Yes, we handle trust documents, trustee appointments, and related estate planning document executions.'
      },
      {
        question: 'What about probate court documents?',
        answer: 'We notarize probate affidavits, executor appointments, and other court documents required for estate administration.'
      }
    ],
    tips: [
      {
        title: 'Use Professional Witnesses',
        description: 'Consider professional witnesses who are not family members'
      },
      {
        title: 'Create Self-Proving Wills',
        description: 'Self-proving wills with notarized witnesses simplify probate'
      },
      {
        title: 'Update Estate Plans',
        description: 'Review and update documents every 3-5 years or after life changes'
      }
    ],
    relatedServices: ['estate-plans', 'healthcare-notary']
  }
};

export const getServiceContent = (serviceId: string): ServiceContent | undefined => {
  return SERVICE_CONTENT[serviceId];
};

export const getServiceFAQs = (serviceId: string) => {
  const content = getServiceContent(serviceId);
  return content?.faqs || [];
};

export const getServiceTips = (serviceId: string) => {
  const content = getServiceContent(serviceId);
  return content?.tips || [];
};