// LOCATION-SPECIFIC BLOG POSTS DATA
// Generates SEO-optimized blog content for each county and category combination

import { BLOG_CATEGORIES, BlogPost } from './blog';
import { BUSINESS_CONFIG } from '@/config/business';

// Counties we serve with their cities
export const LOCATION_COUNTIES = [
  {
    name: 'Hamilton',
    slug: 'hamilton-county',
    cities: ['Cincinnati', 'Blue Ash', 'Springdale', 'Forest Park', 'Norwood', 'Reading'],
    primaryZip: '45202',
    majorCity: 'Cincinnati'
  },
  {
    name: 'Warren',
    slug: 'warren-county',
    cities: ['Mason', 'Lebanon', 'Springboro', 'Franklin', 'West Chester', 'Waynesville'],
    primaryZip: '45040',
    majorCity: 'Mason'
  },
  {
    name: 'Montgomery',
    slug: 'montgomery-county',
    cities: ['Dayton', 'Kettering', 'Centerville', 'Vandalia', 'Miamisburg', 'Huber Heights'],
    primaryZip: '45402',
    majorCity: 'Dayton'
  },
  {
    name: 'Butler',
    slug: 'butler-county',
    cities: ['Hamilton', 'Fairfield', 'Oxford', 'Monroe', 'Middletown', 'West Chester'],
    primaryZip: '45011',
    majorCity: 'Hamilton'
  },
  {
    name: 'Greene',
    slug: 'greene-county',
    cities: ['Beavercreek', 'Fairborn', 'Xenia', 'Yellow Springs', 'Bellbrook', 'Cedarville'],
    primaryZip: '45385',
    majorCity: 'Beavercreek'
  },
  {
    name: 'Clinton',
    slug: 'clinton-county',
    cities: ['Wilmington', 'Blanchester', 'Sabina', 'New Vienna', 'Clarksville'],
    primaryZip: '45177',
    majorCity: 'Wilmington'
  }
];

// Category-specific content templates
const CATEGORY_CONTENT_TEMPLATES: Record<string, {
  intro: (county: string, cities: string[]) => string;
  services: string[];
  faqs: (county: string, majorCity: string) => Array<{ question: string; answer: string }>;
  quickAnswer: (county: string) => { question: string; answer: string };
}> = {
  'general-notary-guides': {
    intro: (county, cities) => `
      <p>Looking for reliable mobile notary services in <strong>${county} County, Ohio</strong>? Our certified notary professionals travel directly to your location throughout ${cities.slice(0, 4).join(', ')}, and surrounding areas. Whether you're at home, your office, or a healthcare facility, we bring convenience to document notarization.</p>
      
      <h2>Mobile Notary Services Across ${county} County</h2>
      <p>We understand that your time is valuable. That's why we offer flexible scheduling including evenings and weekends for ${county} County residents. Our mobile notary service eliminates the need to search for parking, wait in lines, or take time off work.</p>
      
      <h3>Documents We Notarize in ${county} County</h3>
      <ul>
        <li><strong>Powers of Attorney</strong> – Financial, healthcare, and durable POA documents</li>
        <li><strong>Affidavits</strong> – Sworn statements for legal, personal, or business matters</li>
        <li><strong>Acknowledgments</strong> – Property deeds, contracts, and agreements</li>
        <li><strong>Oaths and Affirmations</strong> – Official declarations under oath</li>
        <li><strong>Certified Copies</strong> – For documents that require authentication</li>
      </ul>
      
      <h3>Why Choose Our ${county} County Notary Service?</h3>
      <p>With years of experience serving ${county} County, we've built a reputation for professionalism, accuracy, and reliability. Our notaries are background-checked, insured, and up-to-date on Ohio notary requirements.</p>
      
      <h2>Service Areas in ${county} County</h2>
      <p>We proudly serve all communities in ${county} County including:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Power of Attorney', 'Affidavits', 'Acknowledgments', 'Jurats', 'Oaths'],
    faqs: (county, majorCity) => [
      {
        question: `How quickly can a notary come to me in ${county} County?`,
        answer: `We offer same-day and next-day appointments throughout ${county} County. In ${majorCity} and nearby areas, we can often arrive within 2-4 hours for urgent requests.`
      },
      {
        question: `What ID do I need for notarization in ${county} County?`,
        answer: `You'll need a valid, unexpired government-issued photo ID such as a driver's license, passport, or state ID. Ohio law requires the notary to positively identify all signers.`
      },
      {
        question: `How much does mobile notary service cost in ${county} County?`,
        answer: `Our general notary services start at $10 per notarization plus a travel fee based on your location in ${county} County. Contact us for a specific quote based on your document needs.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Where can I find a mobile notary in ${county} County, Ohio?`,
      answer: `Signed on Time provides professional mobile notary services throughout ${county} County with same-day availability. We travel to your home, office, or hospital for convenient document notarization.`
    })
  },
  'loan-signing-guides': {
    intro: (county, cities) => `
      <p>Need a professional <strong>loan signing agent in ${county} County, Ohio</strong>? Our certified signing agents are experienced with all types of mortgage closings, refinances, and HELOCs. We serve ${cities.slice(0, 4).join(', ')}, and all surrounding communities.</p>
      
      <h2>Professional Loan Signing Services in ${county} County</h2>
      <p>Closing on your home shouldn't be stressful. Our loan signing agents are trained to guide you through the mortgage documents efficiently and accurately. We work with all major title companies, lenders, and signing services.</p>
      
      <h3>Types of Loan Signings We Handle</h3>
      <ul>
        <li><strong>Purchase Closings</strong> – Buyer and seller packages for new home purchases</li>
        <li><strong>Refinance Signings</strong> – Streamline your existing mortgage with ease</li>
        <li><strong>HELOC Closings</strong> – Home equity line of credit documentation</li>
        <li><strong>Reverse Mortgages</strong> – Specialized signings for senior homeowners</li>
        <li><strong>Commercial Loans</strong> – Business property transactions</li>
      </ul>
      
      <h3>Why ${county} County Lenders Trust Us</h3>
      <p>We understand that loan signings require precision and attention to detail. Our agents are NNA-certified, background-checked, and experienced with the specific requirements of Ohio real estate transactions.</p>
      
      <h2>Loan Signing Locations in ${county} County</h2>
      <p>We travel to signers throughout ${county} County at their preferred location:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Purchase Closings', 'Refinance Signings', 'HELOC', 'Reverse Mortgages', 'Commercial'],
    faqs: (county, majorCity) => [
      {
        question: `How long does a loan signing take in ${county} County?`,
        answer: `Most residential loan signings take 45-60 minutes. We schedule adequate time to ensure all documents are signed correctly without rushing.`
      },
      {
        question: `Can you do evening or weekend loan signings in ${county} County?`,
        answer: `Yes! We offer flexible scheduling including evenings and weekends throughout ${county} County. Many closings in ${majorCity} and surrounding areas are scheduled after regular business hours.`
      },
      {
        question: `What should I bring to my loan signing in ${county} County?`,
        answer: `Bring two forms of ID (one must be a valid photo ID), any funds required for closing, and review your closing disclosure beforehand if provided by your lender.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Who provides loan signing services in ${county} County, Ohio?`,
      answer: `Signed on Time offers professional NNA-certified loan signing agent services throughout ${county} County. We handle purchase closings, refinances, and HELOCs with same-day availability.`
    })
  },
  'real-estate-guides': {
    intro: (county, cities) => `
      <p>Navigating <strong>real estate transactions in ${county} County, Ohio</strong> requires professional notary services you can trust. From deed transfers to property contracts, our mobile notary team serves ${cities.slice(0, 4).join(', ')}, and all surrounding areas.</p>
      
      <h2>Real Estate Notary Services in ${county} County</h2>
      <p>Real estate documents are among the most important papers you'll ever sign. Our notaries understand Ohio property law requirements and ensure your documents are executed correctly the first time.</p>
      
      <h3>Real Estate Documents We Notarize</h3>
      <ul>
        <li><strong>Property Deeds</strong> – Warranty deeds, quitclaim deeds, and survivorship deeds</li>
        <li><strong>Purchase Agreements</strong> – Residential and commercial contracts</li>
        <li><strong>Title Documents</strong> – Title transfers and affidavits of title</li>
        <li><strong>Lease Agreements</strong> – Commercial and residential leases</li>
        <li><strong>Easements</strong> – Right-of-way and utility easement documents</li>
      </ul>
      
      <h3>Understanding ${county} County Real Estate Requirements</h3>
      <p>Ohio has specific requirements for property document notarization. Our team stays current on ${county} County Recorder's Office requirements to ensure your documents are accepted without issues.</p>
      
      <h2>Real Estate Service Areas in ${county} County</h2>
      <p>We provide real estate notary services throughout:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Deeds', 'Purchase Agreements', 'Title Documents', 'Leases', 'Easements'],
    faqs: (county, majorCity) => [
      {
        question: `How do I transfer a property deed in ${county} County?`,
        answer: `Property deed transfers require the current owner to sign before a notary, then the deed must be recorded with the ${county} County Recorder's Office. We can notarize the deed and provide guidance on the recording process.`
      },
      {
        question: `Can you notarize real estate documents at the title company in ${county} County?`,
        answer: `Yes, we regularly work with title companies, attorney offices, and real estate agencies throughout ${county} County. We can meet at any professional location or your home.`
      },
      {
        question: `What's the difference between a warranty deed and quitclaim deed in Ohio?`,
        answer: `A warranty deed guarantees clear title and protects the buyer, while a quitclaim deed transfers only the interest the seller has without any guarantees. Both require notarization in Ohio.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Where can I get real estate documents notarized in ${county} County?`,
      answer: `Signed on Time provides mobile real estate notary services throughout ${county} County for deed transfers, property contracts, and all real estate transactions. We come to your location.`
    })
  },
  'estate-planning-guides': {
    intro: (county, cities) => `
      <p>Protect your family's future with properly executed <strong>estate planning documents in ${county} County, Ohio</strong>. Our mobile notary service travels to ${cities.slice(0, 4).join(', ')}, and surrounding communities for wills, powers of attorney, and healthcare directives.</p>
      
      <h2>Estate Planning Notary Services in ${county} County</h2>
      <p>Estate planning documents require careful attention to Ohio's legal requirements. Our notaries understand witness requirements, proper execution procedures, and the importance of these life-critical documents.</p>
      
      <h3>Estate Documents We Help Execute</h3>
      <ul>
        <li><strong>Last Will and Testament</strong> – Proper witnessing and notarization</li>
        <li><strong>Powers of Attorney</strong> – Financial, healthcare, and durable POAs</li>
        <li><strong>Living Wills</strong> – Healthcare directives and end-of-life wishes</li>
        <li><strong>Trust Documents</strong> – Trust certifications and amendments</li>
        <li><strong>Beneficiary Designations</strong> – Account and policy updates</li>
      </ul>
      
      <h3>Ohio Estate Planning Requirements</h3>
      <p>Ohio has specific requirements for estate documents. Wills must be witnessed by two disinterested adults. Powers of attorney have different witness requirements. We ensure proper execution for ${county} County residents.</p>
      
      <h2>Estate Planning Service Areas in ${county} County</h2>
      <p>We provide estate document notarization throughout:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Wills', 'Powers of Attorney', 'Living Wills', 'Trusts', 'Beneficiary Forms'],
    faqs: (county, majorCity) => [
      {
        question: `Do I need a notary for my will in ${county} County?`,
        answer: `While Ohio doesn't require wills to be notarized, adding a notarized self-proving affidavit makes probate smoother. We can witness and notarize your will for maximum legal protection.`
      },
      {
        question: `Can you notarize estate documents at a hospital in ${county} County?`,
        answer: `Yes, we regularly provide bedside notarization at hospitals, nursing homes, and assisted living facilities throughout ${county} County. We understand the urgency these situations require.`
      },
      {
        question: `How many witnesses do I need for a power of attorney in Ohio?`,
        answer: `Ohio generally requires one witness for a power of attorney (who cannot be the agent named). The document must also be notarized. We can provide witnesses if needed.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Who can help with estate planning documents in ${county} County, Ohio?`,
      answer: `Signed on Time provides mobile notary services for estate planning documents throughout ${county} County including wills, powers of attorney, and healthcare directives. We travel to homes, hospitals, and care facilities.`
    })
  },
  'apostille-guides': {
    intro: (county, cities) => `
      <p>Need documents authenticated for international use in <strong>${county} County, Ohio</strong>? Our apostille and authentication services help ${cities.slice(0, 4).join(', ')}, residents prepare documents for use abroad in Hague Convention countries.</p>
      
      <h2>Apostille Services for ${county} County Residents</h2>
      <p>An apostille is an international certification that authenticates documents for use in foreign countries. We help ${county} County residents navigate the apostille process with the Ohio Secretary of State.</p>
      
      <h3>Documents We Help Apostille</h3>
      <ul>
        <li><strong>Birth Certificates</strong> – For international adoption, marriage, or residency</li>
        <li><strong>Marriage Certificates</strong> – For spouse visas and international records</li>
        <li><strong>Educational Documents</strong> – Diplomas, transcripts, and degrees</li>
        <li><strong>Business Documents</strong> – Corporate filings and commercial papers</li>
        <li><strong>Legal Documents</strong> – Court orders, powers of attorney, and more</li>
      </ul>
      
      <h3>Ohio Apostille Process for ${county} County</h3>
      <p>Documents requiring apostilles must first be notarized (if applicable), then submitted to the Ohio Secretary of State. We can notarize your documents and guide you through the state submission process.</p>
      
      <h2>Apostille Service Areas in ${county} County</h2>
      <p>We assist clients throughout:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Birth Certificates', 'Marriage Certificates', 'Diplomas', 'Business Docs', 'Legal Docs'],
    faqs: (county, majorCity) => [
      {
        question: `How long does the apostille process take for ${county} County documents?`,
        answer: `The Ohio Secretary of State typically processes apostilles within 5-7 business days. Rush processing is available for an additional fee. We can notarize documents same-day to start the process quickly.`
      },
      {
        question: `What countries accept Ohio apostilles?`,
        answer: `All countries that are members of the Hague Apostille Convention accept Ohio apostilles. This includes most European countries, Australia, Japan, Mexico, and many others. Non-Hague countries require embassy authentication.`
      },
      {
        question: `Do all documents need notarization before apostille?`,
        answer: `Not all documents require notarization before apostille. State-issued documents (birth certificates, marriage certificates) typically don't need prior notarization. Private documents usually do require notarization first.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Where can I get apostille services in ${county} County, Ohio?`,
      answer: `Signed on Time helps ${county} County residents with document notarization for apostille and guidance on Ohio Secretary of State submission. We serve all communities with mobile service.`
    })
  },
  'business-guides': {
    intro: (county, cities) => `
      <p>Keep your business moving with professional <strong>notary services for ${county} County businesses</strong>. We serve companies in ${cities.slice(0, 4).join(', ')}, and throughout the region with on-site mobile notarization.</p>
      
      <h2>Business Notary Services in ${county} County</h2>
      <p>Business documents often require quick turnaround and professional handling. Our mobile notary service comes directly to your ${county} County office, job site, or meeting location.</p>
      
      <h3>Business Documents We Notarize</h3>
      <ul>
        <li><strong>Contracts</strong> – Business agreements, vendor contracts, and NDAs</li>
        <li><strong>Corporate Documents</strong> – Articles of incorporation, bylaws, and resolutions</li>
        <li><strong>Affidavits</strong> – Business affidavits and sworn statements</li>
        <li><strong>Permits and Licenses</strong> – Applications requiring notarization</li>
        <li><strong>Banking Documents</strong> – Signature cards, corporate resolutions, and more</li>
      </ul>
      
      <h3>Why ${county} County Businesses Choose Us</h3>
      <p>We understand business timelines. Same-day service, professional appearance, and reliable scheduling make us the choice for ${county} County companies from startups to established corporations.</p>
      
      <h2>Business Service Areas in ${county} County</h2>
      <p>We serve businesses throughout:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Contracts', 'Corporate Docs', 'Affidavits', 'Permits', 'Banking Documents'],
    faqs: (county, majorCity) => [
      {
        question: `Can you come to our office in ${county} County?`,
        answer: `Absolutely! We provide on-site mobile notary services throughout ${county} County. We regularly visit offices in ${majorCity} and surrounding business districts for quick, professional notarization.`
      },
      {
        question: `What if we need notarization for multiple employees?`,
        answer: `We offer volume pricing for businesses with multiple documents or signers. Contact us to discuss your needs and we'll provide a competitive quote for your ${county} County location.`
      },
      {
        question: `Do you handle confidential business documents?`,
        answer: `Yes, we maintain strict confidentiality for all business documents. Our notaries are bonded and understand the sensitive nature of corporate documentation.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Where can businesses get notary services in ${county} County?`,
      answer: `Signed on Time provides mobile business notary services throughout ${county} County. We come to your office for contracts, corporate documents, and all business notarization needs.`
    })
  },
  'healthcare-guides': {
    intro: (county, cities) => `
      <p>When medical situations require urgent document signing, our <strong>healthcare notary services in ${county} County, Ohio</strong> provide compassionate, professional assistance. We serve hospitals, nursing homes, and private residences in ${cities.slice(0, 4).join(', ')}, and surrounding areas.</p>
      
      <h2>Healthcare Notary Services in ${county} County</h2>
      <p>Healthcare document needs often arise unexpectedly. Our mobile notaries understand the sensitivity of medical situations and provide calm, professional service at hospitals and care facilities throughout ${county} County.</p>
      
      <h3>Healthcare Documents We Notarize</h3>
      <ul>
        <li><strong>Healthcare Powers of Attorney</strong> – Designate medical decision makers</li>
        <li><strong>Living Wills</strong> – Document end-of-life care wishes</li>
        <li><strong>HIPAA Authorizations</strong> – Medical record release forms</li>
        <li><strong>DNR Orders</strong> – When notarization is required</li>
        <li><strong>Medical Affidavits</strong> – Sworn statements for healthcare matters</li>
      </ul>
      
      <h3>Hospital and Facility Notarization in ${county} County</h3>
      <p>We work with hospital staff and family members to coordinate notarization visits. We understand patient alertness requirements and work efficiently while maintaining proper legal standards.</p>
      
      <h2>Healthcare Service Areas in ${county} County</h2>
      <p>We serve healthcare facilities and homes throughout:</p>
      <ul>
        ${cities.map(city => `<li>${city}</li>`).join('\n        ')}
      </ul>
    `,
    services: ['Healthcare POA', 'Living Wills', 'HIPAA Forms', 'DNR Orders', 'Medical Affidavits'],
    faqs: (county, majorCity) => [
      {
        question: `Can you come to the hospital in ${county} County?`,
        answer: `Yes, we regularly provide bedside notarization at hospitals throughout ${county} County including major facilities in ${majorCity}. We coordinate with nursing staff for appropriate timing.`
      },
      {
        question: `What if the patient can't hold a pen?`,
        answer: `Ohio law allows for signature by mark (X) with proper witnessing. We can guide you through alternatives that meet legal requirements while accommodating physical limitations.`
      },
      {
        question: `How quickly can you arrive for an urgent healthcare signing?`,
        answer: `For urgent healthcare situations in ${county} County, we prioritize availability and can often arrive within 2-4 hours. Same-day service is available for most healthcare notarization needs.`
      }
    ],
    quickAnswer: (county) => ({
      question: `Who provides hospital notary services in ${county} County, Ohio?`,
      answer: `Signed on Time offers compassionate healthcare notary services throughout ${county} County including hospital bedside signings, nursing home visits, and urgent healthcare document notarization.`
    })
  }
};

// Generate all location-specific blog posts
export const generateLocationBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  const today = new Date().toISOString().split('T')[0];
  
  LOCATION_COUNTIES.forEach(county => {
    BLOG_CATEGORIES.forEach(category => {
      const template = CATEGORY_CONTENT_TEMPLATES[category.slug];
      if (!template) return;
      
      const slug = `${category.slug}-${county.slug}-ohio`;
      const title = `${category.title} Services in ${county.name} County, Ohio`;
      
      posts.push({
        id: slug,
        title,
        slug,
        serviceSlug: category.serviceSlug,
        categorySlug: category.slug,
        excerpt: `Professional ${category.title.toLowerCase()} services throughout ${county.name} County, Ohio. Mobile notary serving ${county.cities.slice(0, 3).join(', ')}, and all surrounding communities.`,
        content: template.intro(county.name, county.cities),
        heroImage: `/assets/blog-${category.serviceSlug === 'general-notary' ? 'general-notary' : category.serviceSlug === 'loan-signings' ? 'loan-signing' : category.serviceSlug === 'estate-plans' ? 'estate-planning' : category.serviceSlug === 'real-estate' ? 'real-estate' : category.serviceSlug === 'apostille' ? 'apostille' : 'business'}.jpg`,
        metaTitle: `${category.title} in ${county.name} County OH | Mobile Notary`,
        metaDescription: `Professional ${category.title.toLowerCase()} in ${county.name} County, Ohio. Serving ${county.cities.slice(0, 2).join(', ')} & more. Same-day mobile notary. Call ${BUSINESS_CONFIG.phone}.`,
        publishDate: today,
        author: 'Terry May',
        tags: [category.title, county.name + ' County', 'Ohio Notary', 'Mobile Notary', county.majorCity],
        featured: false,
        readTime: 6,
        faqs: template.faqs(county.name, county.majorCity),
        quickAnswer: template.quickAnswer(county.name)
      });
    });
  });
  
  return posts;
};

// Get all location blog posts
export const LOCATION_BLOG_POSTS = generateLocationBlogPosts();

// Get location blog post by slug
export const getLocationPostBySlug = (slug: string): BlogPost | undefined => {
  return LOCATION_BLOG_POSTS.find(post => post.slug === slug);
};

// Get all slugs for location blog posts (for SSG)
export const getLocationBlogSlugs = (): string[] => {
  return LOCATION_BLOG_POSTS.map(post => `/blog/${post.slug}`);
};

// Get posts by county
export const getLocationPostsByCounty = (countySlug: string): BlogPost[] => {
  const countyName = LOCATION_COUNTIES.find(c => c.slug === countySlug)?.name;
  if (!countyName) return [];
  return LOCATION_BLOG_POSTS.filter(post => 
    post.tags?.includes(countyName + ' County')
  );
};

// Get posts by category for a specific county
export const getLocationPostsByCategoryAndCounty = (categorySlug: string, countySlug: string): BlogPost | undefined => {
  const slug = `${categorySlug}-${countySlug}-ohio`;
  return LOCATION_BLOG_POSTS.find(post => post.slug === slug);
};

export default LOCATION_BLOG_POSTS;
