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