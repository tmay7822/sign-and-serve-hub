// BLOG DATA MODEL
// This defines blog categories and posts structure

export interface BlogCategory {
  id: string;
  title: string;
  slug: string;
  serviceSlug: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  serviceSlug: string;
  categorySlug: string;
  excerpt: string;
  content: string;
  heroImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishDate: string;
  author: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  quickAnswer?: {
    question: string;
    answer: string;
  };
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'general-notary-guides',
    title: 'General Notary',
    slug: 'general-notary-guides',
    serviceSlug: 'general-notary',
    description: 'Essential guides and tips for general notary services, document preparation, and notarization processes.',
    metaTitle: 'General Notary Guides & Tips',
    metaDescription: 'Expert guides for general notary services including document preparation, ID requirements, and notarization processes.',
    order: 1
  },
  {
    id: 'loan-signing-guides',
    title: 'Loan Signings',
    slug: 'loan-signing-guides',
    serviceSlug: 'loan-signings',
    description: 'Comprehensive guides for loan signings, mortgage processes, and what to expect during your closing.',
    metaTitle: 'Loan Signing Guides & Tips',
    metaDescription: 'Expert guidance for loan signings, mortgage closings, and refinance processes. Learn what to expect and how to prepare.',
    order: 2
  },
  {
    id: 'real-estate-guides',
    title: 'Real Estate',
    slug: 'real-estate-guides',
    serviceSlug: 'real-estate',
    description: 'Real estate document guides including deed transfers, property transactions, and closing preparations.',
    metaTitle: 'Real Estate Notary Guides & Tips',
    metaDescription: 'Complete guides for real estate document notarization, deed transfers, and property transaction processes.',
    order: 3
  },
  {
    id: 'estate-planning-guides',
    title: 'Estate Planning',
    slug: 'estate-planning-guides',
    serviceSlug: 'estate-plans',
    description: 'Estate planning guides covering wills, trusts, powers of attorney, and healthcare directive preparation.',
    metaTitle: 'Estate Planning Guides & Tips',
    metaDescription: 'Expert estate planning guides for wills, trusts, powers of attorney, and healthcare directives. Learn proper preparation and execution.',
    order: 4
  },
  {
    id: 'apostille-guides',
    title: 'Apostille Services',
    slug: 'apostille-guides',
    serviceSlug: 'apostille',
    description: 'Complete guides for apostille services, international document authentication, and travel document preparation.',
    metaTitle: 'Apostille Service Guides & Tips',
    metaDescription: 'Comprehensive apostille guides covering international document authentication, processing times, and preparation requirements.',
    order: 5
  },
  {
    id: 'business-guides',
    title: 'Business Services',
    slug: 'business-guides',
    serviceSlug: 'business-services',
    description: 'Business notarization guides including contract preparation, corporate documents, and business process optimization.',
    metaTitle: 'Business Notary Guides & Tips',
    metaDescription: 'Business notarization guides for contracts, corporate documents, and professional business processes.',
    order: 6
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'general-notary-what-to-bring',
    title: 'What to Bring to Your General Notary Appointment',
    slug: 'general-notary-what-to-bring',
    serviceSlug: 'general-notary',
    categorySlug: 'general-notary-guides',
    excerpt: 'Essential checklist of documents and ID requirements for your notary appointment to ensure a smooth, successful signing.',
    content: 'Complete guide content...',
    heroImage: '/assets/blog-general-notary.jpg',
    metaTitle: 'What to Bring to Your Notary Appointment | Complete Checklist',
    metaDescription: 'Essential checklist for your notary appointment including ID requirements, documents needed, and preparation tips for successful notarization.',
    publishDate: '2024-01-15',
    author: 'Terry May',
    tags: ['notary preparation', 'ID requirements', 'document checklist'],
    featured: true,
    readTime: 5
  },
  {
    id: 'mobile-vs-shipping-store',
    title: 'Mobile Notary vs. UPS/FedEx Store: Which is Better?',
    slug: 'mobile-vs-shipping-store',
    serviceSlug: 'general-notary',
    categorySlug: 'general-notary-guides',
    excerpt: 'Compare the benefits of mobile notary services versus traditional shipping store notaries for your specific needs.',
    content: 'Complete comparison guide...',
    heroImage: '/assets/blog-general-notary.jpg',
    metaTitle: 'Mobile Notary vs Shipping Store Notary | Cost & Convenience Comparison',
    metaDescription: 'Compare mobile notary services with UPS/FedEx store notaries. Learn about costs, convenience, and which option works best for your needs.',
    publishDate: '2024-01-20',
    author: 'Terry May',
    tags: ['mobile notary benefits', 'cost comparison', 'convenience'],
    featured: true,
    readTime: 7
  },
  {
    id: 'witness-requirements',
    title: 'Do You Need Witnesses? Notary Guide',
    slug: 'witness-requirements',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'When witnesses are required, who can qualify, and how we help arrange them for your document signing.',
    content: 'Witness requirements guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Document Witness Requirements | Notary Guide',
    metaDescription: 'When witnesses are required, who can qualify, and how we help arrange them.',
    publishDate: '2024-01-20',
    author: 'Terry May',
    tags: ['witnesses', 'notary requirements', 'document signing'],
    featured: false,
    readTime: 4
  },
  {
    id: 'what-happens-loan-signing',
    title: 'What Happens During a Loan Signing Appointment?',
    slug: 'what-happens-loan-signing',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'Step-by-step walkthrough of the loan signing process, from arrival to completion, so you know exactly what to expect.',
    content: 'Detailed loan signing process...',
    heroImage: '/assets/blog-loan-signing.jpg',
    metaTitle: 'What Happens During a Loan Signing | Step-by-Step Process',
    metaDescription: 'Complete walkthrough of the loan signing process including document review, signing procedures, and what to expect during your appointment.',
    publishDate: '2024-02-01',
    author: 'Terry May',
    tags: ['loan signing process', 'mortgage closing', 'what to expect'],
    featured: true,
    readTime: 8
  },
  // NEW LOAN SIGNING POSTS
  {
    id: 'ohio-buyer-seller-loan-signing-checklist',
    title: 'Buyer/Seller Packages: What to Expect',
    slug: 'ohio-buyer-seller-loan-signing-checklist',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'A simple checklist for Ohio buyer/seller loan signings—IDs, timing, scanbacks, and common pitfalls so closing day runs smoothly.',
    content: 'Complete loan signing checklist...',
    heroImage: '/assets/blog-loan-signing.jpg',
    metaTitle: 'Ohio Buyer/Seller Loan Signing Checklist | What to Expect',
    metaDescription: 'A simple checklist for Ohio buyer/seller loan signings—IDs, timing, scanbacks, and common pitfalls so closing day runs smoothly.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Loan Signings', 'Real Estate', 'Hospital Notary'],
    featured: true,
    readTime: 5
  },
  {
    id: 'refi-heloc-notary-errors-to-avoid-ohio',
    title: 'Refinance & HELOC: Avoid 5 Common Errors',
    slug: 'refi-heloc-notary-errors-to-avoid-ohio',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'Refi or HELOC? Avoid five common signing errors—dates, initials, NORTC timing, and ID mismatches—so funding isn\'t delayed.',
    content: 'Refinance and HELOC error prevention guide...',
    heroImage: '/assets/blog-loan-signing.jpg',
    metaTitle: 'Refi & HELOC Notary Errors to Avoid | Ohio Loan Signing Guide',
    metaDescription: 'Refi or HELOC? Avoid five common signing errors—dates, initials, NORTC timing, and ID mismatches—so funding isn\'t delayed.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Loan Signings', 'Refinance', 'HELOC'],
    featured: false,
    readTime: 4
  },
  {
    id: 'scanbacks-printing-mobile-loan-closings-ohio',
    title: 'Scanbacks, Printing & Mobile Closings Explained',
    slug: 'scanbacks-printing-mobile-loan-closings-ohio',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'Title needs scanbacks or printed sets? How mobile notaries handle printing, scanbacks, and delivery with clear expectations.',
    content: 'Scanbacks and mobile closing process guide...',
    heroImage: '/assets/blog-loan-signing.jpg',
    metaTitle: 'Scanbacks & Mobile Loan Closings | Ohio Title Company Guide',
    metaDescription: 'Title needs scanbacks or printed sets? How mobile notaries handle printing, scanbacks, and delivery with clear expectations.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Loan Signings', 'Title/Escrow', 'Business Notary'],
    featured: false,
    readTime: 4
  },
  {
    id: 'hospital-rehab-loan-signings-ohio',
    title: 'Hospital or Rehab Loan Signings—How They Work',
    slug: 'hospital-rehab-loan-signings-ohio',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'Bedside loan signings in hospitals or rehab facilities—ID rules, witness options, and how we coordinate with staff.',
    content: 'Hospital loan signing process guide...',
    heroImage: '/assets/blog-loan-signing.jpg',
    metaTitle: 'Hospital Loan Signings | Bedside Notary Ohio',
    metaDescription: 'Bedside loan signings in hospitals or rehab facilities—ID rules, witness options, and how we coordinate with staff.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Loan Signings', 'Hospital Notary', 'Estate Docs'],
    featured: false,
    readTime: 5
  },
  // NEW ESTATE & FAMILY POSTS
  {
    id: 'ohio-wills-poa-what-notaries-can-and-cant-do',
    title: 'Wills & POA: What a Notary Can (and Can\'t) Do',
    slug: 'ohio-wills-poa-what-notaries-can-and-cant-do',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Clear up confusion: what Ohio notaries can and can\'t do for wills and powers of attorney—IDs, witnesses, and limits.',
    content: 'Notary role and limitations guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Ohio Wills & POA: What Notaries Can and Can\'t Do',
    metaDescription: 'Clear up confusion: what Ohio notaries can and can\'t do for wills and powers of attorney—IDs, witnesses, and limits.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Estate Docs', 'Wills', 'POA', 'Hospital Notary'],
    featured: true,
    readTime: 5
  },
  {
    id: 'healthcare-directives-notary-ohio-bedside',
    title: 'Healthcare Directives—Fast Bedside Notarization',
    slug: 'healthcare-directives-notary-ohio-bedside',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'How bedside notarization for healthcare directives works: ID rules, alertness, witnesses, and staff coordination.',
    content: 'Healthcare directive bedside notarization guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Healthcare Directives Bedside Notarization | Ohio Hospital Guide',
    metaDescription: 'How bedside notarization for healthcare directives works: ID rules, alertness, witnesses, and staff coordination.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Estate Docs', 'Hospital Notary'],
    featured: false,
    readTime: 4
  },
  {
    id: 'certification-of-trust-notary-ohio',
    title: 'Trusts & Certification of Trust—Bank-Ready Signings',
    slug: 'certification-of-trust-notary-ohio',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Banks often ask for a Certification of Trust. Here\'s what to prepare so the notarization is quick and accepted.',
    content: 'Trust certification for banking guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Certification of Trust for Banks | Ohio Notary Guide',
    metaDescription: 'Banks often ask for a Certification of Trust. Here\'s what to prepare so the notarization is quick and accepted.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Estate Docs', 'Banking', 'Business Notary'],
    featured: false,
    readTime: 4
  },
  {
    id: 'witnesses-for-wills-poa-ohio-local-norms',
    title: 'Witnesses for Wills/POA—Local Norms Explained',
    slug: 'witnesses-for-wills-poa-ohio-local-norms',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Do you need witnesses for wills or POA? Local norms, who can serve, and how to avoid delays at signing time.',
    content: 'Witness requirements and local norms guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Witnesses for Wills & POA | Ohio Local Norms Guide',
    metaDescription: 'Do you need witnesses for wills or POA? Local norms, who can serve, and how to avoid delays at signing time.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Estate Docs', 'Witnesses', 'Hospital Notary'],
    featured: false,
    readTime: 5
  },
  // NEW BUSINESS NOTARY POSTS
  {
    id: 'vendor-packets-affidavits-notary-ohio',
    title: 'Vendor Packets & Affidavits—Keep Projects Moving',
    slug: 'vendor-packets-affidavits-notary-ohio',
    serviceSlug: 'business-services',
    categorySlug: 'business-guides',
    excerpt: 'On-site notarization for vendor packets and affidavits—what to prep and how to finish in one visit.',
    content: 'Vendor packet notarization guide...',
    heroImage: '/assets/blog-business.jpg',
    metaTitle: 'Vendor Packets & Affidavits Notary | Ohio Business Services',
    metaDescription: 'On-site notarization for vendor packets and affidavits—what to prep and how to finish in one visit.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Business Notary', 'Affidavits', 'Contracts'],
    featured: false,
    readTime: 4
  },
  {
    id: 'contracts-title-authority-notary-ohio',
    title: 'Contracts & Title Authority—Sign the Right Way',
    slug: 'contracts-title-authority-notary-ohio',
    serviceSlug: 'business-services',
    categorySlug: 'business-guides',
    excerpt: 'When signing as an officer/owner, the notary checks ID and your stated capacity—here\'s how to avoid re-signs.',
    content: 'Contract signing authority guide...',
    heroImage: '/assets/blog-business.jpg',
    metaTitle: 'Contract Title Authority | Ohio Business Notary Guide',
    metaDescription: 'When signing as an officer/owner, the notary checks ID and your stated capacity—here\'s how to avoid re-signs.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Business Notary', 'Contracts', 'Loan Signings'],
    featured: false,
    readTime: 5
  },
  {
    id: 'permits-licensing-notary-same-day-ohio',
    title: 'Permits & Licensing—Same-Day Notarization',
    slug: 'permits-licensing-notary-same-day-ohio',
    serviceSlug: 'business-services',
    categorySlug: 'business-guides',
    excerpt: 'Need a permit or license notarized today? Mobile notary comes to your office, jobsite, or city counter meet-up.',
    content: 'Permit and licensing notarization guide...',
    heroImage: '/assets/blog-business.jpg',
    metaTitle: 'Permits & Licensing Same-Day Notary | Ohio Mobile Service',
    metaDescription: 'Need a permit or license notarized today? Mobile notary comes to your office, jobsite, or city counter meet-up.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Business Notary', 'Permits', 'Mobile'],
    featured: false,
    readTime: 3
  },
  {
    id: 'hr-i9-vs-notary-ohio',
    title: 'Notarizing for HR—I-9 vs. Notary Work',
    slug: 'hr-i9-vs-notary-ohio',
    serviceSlug: 'business-services',
    categorySlug: 'business-guides',
    excerpt: 'HR teams: I-9 verification isn\'t a notarization. Here\'s what a notary can do, and what is strictly an employer duty.',
    content: 'HR I-9 vs notary work explanation...',
    heroImage: '/assets/blog-business.jpg',
    metaTitle: 'HR I-9 vs Notary Work | Ohio Business Compliance Guide',
    metaDescription: 'HR teams: I-9 verification isn\'t a notarization. Here\'s what a notary can do, and what is strictly an employer duty.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Business Notary', 'HR', 'Compliance'],
    featured: false,
    readTime: 5
  },
  // NEW HOSPITAL & SENIOR CARE POSTS
  {
    id: 'hospital-notary-checklist-ohio',
    title: 'Hospital Notary Checklist (Fast & Calm)',
    slug: 'hospital-notary-checklist-ohio',
    serviceSlug: 'healthcare-notary',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Quick bedside notarization checklist—ID, alertness, witnesses, and room logistics for hospitals and rehab.',
    content: 'Hospital bedside notarization checklist...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Hospital Notary Checklist | Ohio Bedside Notarization Guide',
    metaDescription: 'Quick bedside notarization checklist—ID, alertness, witnesses, and room logistics for hospitals and rehab.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Hospital Notary', 'Estate Docs', 'Loan Signings'],
    featured: true,
    readTime: 5
  },
  {
    id: 'senior-communities-notary-poa-healthcare-ohio',
    title: 'Senior Communities—POA & Healthcare Docs',
    slug: 'senior-communities-notary-poa-healthcare-ohio',
    serviceSlug: 'healthcare-notary',
    categorySlug: 'estate-planning-guides',
    excerpt: 'We come to senior communities for POA and healthcare documents—how we work with staff and families.',
    content: 'Senior community notarization guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Senior Communities POA & Healthcare Docs | Ohio Notary',
    metaDescription: 'We come to senior communities for POA and healthcare documents—how we work with staff and families.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Hospital Notary', 'Estate Docs'],
    featured: false,
    readTime: 4
  },
  {
    id: 'urgent-notary-same-day-ohio-hospitals',
    title: 'Urgent Documents—Same-Day Options',
    slug: 'urgent-notary-same-day-ohio-hospitals',
    serviceSlug: 'healthcare-notary',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Time-sensitive notarization? How same-day hospital notary visits work and what to prepare.',
    content: 'Urgent hospital notarization guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Urgent Same-Day Hospital Notary | Ohio Emergency Service',
    metaDescription: 'Time-sensitive notarization? How same-day hospital notary visits work and what to prepare.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Hospital Notary', 'Estate Docs', 'Loan Signings'],
    featured: false,
    readTime: 4
  },
  {
    id: 'hospital-notary-id-problems-ohio',
    title: 'ID Problems at the Hospital—What Now?',
    slug: 'hospital-notary-id-problems-ohio',
    serviceSlug: 'healthcare-notary',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Missing or expired ID during a hospital signing? Practical options and what\'s allowed.',
    content: 'Hospital ID problem solutions guide...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Hospital Notary ID Problems | Ohio Solutions Guide',
    metaDescription: 'Missing or expired ID during a hospital signing? Practical options and what\'s allowed.',
    publishDate: '2025-09-25',
    author: 'Terry May',
    tags: ['Hospital Notary', 'IDs', 'Estate Docs'],
    featured: false,
    readTime: 5
  },
  // EXISTING POSTS CONTINUE
  {
    id: 'how-apostille-works',
    title: 'How the Apostille Process Works: Complete Guide',
    slug: 'how-apostille-works',
    serviceSlug: 'apostille',
    categorySlug: 'apostille-guides',
    excerpt: 'Understanding the apostille authentication process for international documents, including timeframes and requirements.',
    content: 'Complete apostille process guide...',
    heroImage: '/assets/blog-apostille.jpg',
    metaTitle: 'How Apostille Works | International Document Authentication Guide',
    metaDescription: 'Complete guide to the apostille process for international documents including requirements, timeframes, and step-by-step procedures.',
    publishDate: '2024-02-10',
    author: 'Terry May',
    tags: ['apostille process', 'international documents', 'authentication'],
    featured: true,
    readTime: 10
  },
  {
    id: 'wills-trusts-poa-checklist',
    title: 'Estate Planning Documents Checklist: Wills, Trusts & POA',
    slug: 'wills-trusts-poa-checklist',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Comprehensive checklist for preparing estate planning documents including witness requirements and proper execution.',
    content: 'Estate planning checklist...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Estate Planning Documents Checklist | Wills, Trusts & POA Guide',
    metaDescription: 'Complete checklist for estate planning document preparation including wills, trusts, and powers of attorney with witness requirements.',
    publishDate: '2024-02-15',
    author: 'Terry May',
    tags: ['estate planning', 'wills', 'trusts', 'power of attorney'],
    featured: true,
    readTime: 12
  },
  {
    id: 'estate-planning-guides',
    title: 'Estate Planning Document Guides',
    slug: 'estate-planning-guides',
    serviceSlug: 'estate-plans',
    categorySlug: 'estate-planning-guides',
    excerpt: 'Complete guides for wills, trusts, POAs, and other estate planning documents with professional notary guidance.',
    content: 'Collection of estate planning guides...',
    heroImage: '/assets/blog-estate-planning.jpg',
    metaTitle: 'Estate Planning Guides | Wills, Trusts & POA Resources',
    metaDescription: 'Comprehensive guides for wills, trusts, power of attorney, and healthcare directives. Professional notary services for all estate planning documents.',
    publishDate: '2024-01-15',
    author: 'Terry May',
    tags: ['estate planning', 'wills', 'trusts', 'power of attorney'],
    featured: false,
    readTime: 8
  },
  {
    id: 'business-contract-notarization',
    title: 'When Do Business Contracts Need Notarization?',
    slug: 'business-contract-notarization',
    serviceSlug: 'business-services',
    categorySlug: 'business-guides',
    excerpt: 'Understanding when business contracts require notarization and the benefits of professional notary services for your business.',
    content: 'Business contract notarization guide...',
    heroImage: '/assets/blog-business.jpg',
    metaTitle: 'Business Contract Notarization | When Required & Benefits',
    metaDescription: 'Learn when business contracts need notarization, legal requirements, and how professional notary services protect your business interests.',
    publishDate: '2024-02-20',
    author: 'Terry May',
    tags: ['business contracts', 'notarization', 'legal protection'],
    featured: false,
    readTime: 6
  }
];

// Helper functions
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return BLOG_CATEGORIES.find(category => category.slug === slug);
};

export const getCategoryByServiceSlug = (serviceSlug: string): BlogCategory | undefined => {
  return BLOG_CATEGORIES.find(category => category.serviceSlug === serviceSlug);
};

export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.categorySlug === categorySlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getPostsByService = (serviceSlug: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.serviceSlug === serviceSlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

// Get all posts with pagination
export const getAllPosts = (): BlogPost[] => {
  return BLOG_POSTS.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

// Get posts for blog home (featured first, then recent)
export const getPostsForBlogHome = (limit?: number): BlogPost[] => {
  const featured = getFeaturedPosts();
  const nonFeatured = BLOG_POSTS.filter(post => !post.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  
  const allPosts = [...featured, ...nonFeatured];
  return limit ? allPosts.slice(0, limit) : allPosts;
};

// Get total blog count
export const getTotalBlogCount = (): number => {
  return BLOG_POSTS.length;
};