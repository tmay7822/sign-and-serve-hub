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
    heroImage: '/src/assets/hero-notary.jpg',
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
    heroImage: '/src/assets/hero-notary.jpg',
    metaTitle: 'Mobile Notary vs Shipping Store Notary | Cost & Convenience Comparison',
    metaDescription: 'Compare mobile notary services with UPS/FedEx store notaries. Learn about costs, convenience, and which option works best for your needs.',
    publishDate: '2024-01-20',
    author: 'Terry May',
    tags: ['mobile notary benefits', 'cost comparison', 'convenience'],
    featured: true,
    readTime: 7
  },
  {
    id: 'what-happens-loan-signing',
    title: 'What Happens During a Loan Signing Appointment?',
    slug: 'what-happens-loan-signing',
    serviceSlug: 'loan-signings',
    categorySlug: 'loan-signing-guides',
    excerpt: 'Step-by-step walkthrough of the loan signing process, from arrival to completion, so you know exactly what to expect.',
    content: 'Detailed loan signing process...',
    heroImage: '/src/assets/hero-notary-appointment.jpg',
    metaTitle: 'What Happens During a Loan Signing | Step-by-Step Process',
    metaDescription: 'Complete walkthrough of the loan signing process including document review, signing procedures, and what to expect during your appointment.',
    publishDate: '2024-02-01',
    author: 'Terry May',
    tags: ['loan signing process', 'mortgage closing', 'what to expect'],
    featured: true,
    readTime: 8
  },
  {
    id: 'how-apostille-works',
    title: 'How the Apostille Process Works: Complete Guide',
    slug: 'how-apostille-works',
    serviceSlug: 'apostille',
    categorySlug: 'apostille-guides',
    excerpt: 'Understanding the apostille authentication process for international documents, including timeframes and requirements.',
    content: 'Complete apostille process guide...',
    heroImage: '/src/assets/hero-notary-appointment.jpg',
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
    heroImage: '/src/assets/hero-notary.jpg',
    metaTitle: 'Estate Planning Documents Checklist | Wills, Trusts & POA Guide',
    metaDescription: 'Complete checklist for estate planning document preparation including wills, trusts, and powers of attorney with witness requirements.',
    publishDate: '2024-02-15',
    author: 'Terry May',
    tags: ['estate planning', 'wills', 'trusts', 'power of attorney'],
    featured: true,
    readTime: 12
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