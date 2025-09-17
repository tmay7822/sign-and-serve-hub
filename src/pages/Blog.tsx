import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Clock, Filter } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string; // Keep for backward compatibility
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What to Bring to a Notarization',
    excerpt: 'A quick checklist for a smooth notarization—IDs, witnesses, signatures, and common mistakes to avoid.',
    content: 'Getting a document notarized is simple when you know what to bring. Use this short checklist to save time and avoid re-signs.',
    author: 'Professional Notary Team',
    date: '2025-01-15',
    readTime: '4 min read',
    tags: ['General Notary', 'Documents'],
    category: 'General Notary',
    slug: 'general-notary-what-to-bring'
  },
  {
    id: '2',
    title: 'Mobile Notary vs. Shipping Store—Which Is Better?',
    excerpt: 'Compare mobile notary vs shipping store. Cost, convenience, privacy, witnesses, and turnaround explained.',
    content: 'Both options work. The right choice depends on your document and your schedule.',
    author: 'Professional Notary Team',
    date: '2025-02-14',
    readTime: '3 min read',
    tags: ['General Notary', 'Mobile Service'],
    category: 'General Notary',
    slug: 'mobile-vs-shipping-store'
  },
  {
    id: '3',
    title: 'Simple Guide to HCPOA and Living Will',
    excerpt: 'Understand Healthcare Power of Attorney and Living Will, who signs, witnesses, and how a mobile notary helps.',
    content: 'Healthcare decisions matter. Two documents help your family act with clarity.',
    author: 'Healthcare Notary Specialist',
    date: '2025-02-13',
    readTime: '5 min read',
    tags: ['Healthcare', 'Estate Planning', 'Legal/Court'],
    category: 'Healthcare',
    slug: 'hcpoa-living-will-guide'
  },
  {
    id: '4',
    title: 'Hospital & Care Facility Notarizations—What to Expect',
    excerpt: 'On-site notarizations in hospitals, rehab, and nursing homes. What to expect, IDs, witnesses, and scheduling.',
    content: 'We routinely meet patients and families on-site. Here\'s how to keep it smooth.',
    author: 'Healthcare Notary Specialist',
    date: '2025-03-12',
    readTime: '4 min read',
    tags: ['Healthcare', 'Mobile Service'],
    category: 'Healthcare',
    slug: 'hospital-notary-what-to-expect'
  },
  {
    id: '5',
    title: 'Wills, Trusts & POA—Notary Checklist',
    excerpt: 'A practical checklist for notarizing estate documents—IDs, witnesses, readiness, and signing tips.',
    content: 'Estate documents need clean execution. Use this quick checklist.',
    author: 'Estate Planning Specialist',
    date: '2025-03-11',
    readTime: '5 min read',
    tags: ['Estate Planning', 'Legal/Court', 'Documents'],
    category: 'Estate Planning',
    slug: 'wills-trusts-poa-checklist'
  },
  {
    id: '6',
    title: 'What Happens at a Loan Signing?',
    excerpt: 'Buyer, seller, refi, or HELOC—what to expect at your loan signing. IDs, signatures, scanbacks, and timing.',
    content: 'Whether you\'re buying, selling, or refinancing, here\'s the basic flow.',
    author: 'Certified Loan Signing Agent',
    date: '2025-04-10',
    readTime: '4 min read',
    tags: ['Real Estate', 'Business Services'],
    category: 'Real Estate',
    slug: 'what-happens-loan-signing'
  },
  {
    id: '7',
    title: 'How the Apostille Process Works (Plain English)',
    excerpt: 'From notarization to state authentication—see the simple apostille path for Ohio residents.',
    content: 'If your document will be used overseas in a Hague-member country, you may need an apostille.',
    author: 'International Documents Specialist',
    date: '2025-04-09',
    readTime: '5 min read',
    tags: ['Apostille', 'International', 'Documents'],
    category: 'Apostille',
    slug: 'how-apostille-works'
  },
  {
    id: '8',
    title: 'Remote Hire I-9—Simple Steps for Employers & Employees',
    excerpt: 'Remote hire I-9 support. What employers and employees need, IDs, and quick appointments.',
    content: 'When teams work hybrid or fully remote, you can appoint an authorized representative to complete Section 2 of the I-9.',
    author: 'Business Services Specialist',
    date: '2025-05-08',
    readTime: '4 min read',
    tags: ['Business Services', 'Legal/Court'],
    category: 'Business Services',
    slug: 'remote-hire-i9-steps'
  },
  {
    id: '9',
    title: 'College 18+ Starter Pack—FERPA, HIPAA & POA Forms',
    excerpt: 'Essential legal documents every 18+ college student needs. FERPA waivers, HIPAA forms, and POA explained.',
    content: 'When your child turns 18, certain documents help maintain family access to important information.',
    author: 'Educational Notary Specialist',
    date: '2025-05-07',
    readTime: '5 min read',
    tags: ['College/18+', 'Healthcare', 'Legal/Court'],
    category: 'College/18+',
    slug: 'college-18-plus-starter-pack'
  },
  {
    id: '10',
    title: 'Title Transfer Checklist—Avoid These 7 Mistakes',
    excerpt: 'Avoid DMV rejections. Use this title transfer checklist: IDs, liens, odometer, signatures, and notarization.',
    content: 'Get the title done right the first time. Here\'s what causes most rejections.',
    author: 'Vehicle Notary Specialist',
    date: '2025-06-06',
    readTime: '4 min read',
    tags: ['Vehicles/DMV', 'Documents'],
    category: 'Vehicles/DMV',
    slug: 'title-transfer-checklist'
  },
  {
    id: '11',
    title: 'Affidavit vs. Jurat vs. Acknowledgment—Explained',
    excerpt: 'The difference between affidavits, jurats, and acknowledgments in simple terms. Which do you need?',
    content: 'These three types of notarizations serve different purposes. Here\'s how to tell them apart.',
    author: 'Legal Documents Specialist',
    date: '2025-06-05',
    readTime: '3 min read',
    tags: ['Legal/Court', 'General Notary', 'Documents'],
    category: 'Legal/Court',
    slug: 'affidavit-jurat-acknowledgment'
  },
  {
    id: '12',
    title: 'Beneficiary Change Forms—What to Know',
    excerpt: 'When to update beneficiaries on 401k, IRA, life insurance. Mobile notary for quick form completion.',
    content: 'Life changes mean beneficiary updates. Here\'s when and how to handle these important forms.',
    author: 'Insurance Specialist',
    date: '2025-07-04',
    readTime: '4 min read',
    tags: ['Insurance/Retirement', 'Documents'],
    category: 'Insurance/Retirement',
    slug: 'beneficiary-change-forms'
  },
  {
    id: '13',
    title: 'Real Estate Investor Notarizations Made Simple',
    excerpt: 'Common investor documents—assignments, POAs, deeds, and contracts. Quick mobile service for deal closings.',
    content: 'Investors need fast, reliable notarization for time-sensitive deals.',
    author: 'Real Estate Specialist',
    date: '2025-07-03',
    readTime: '5 min read',
    tags: ['Business Services', 'Real Estate', 'Documents'],
    category: 'Business Services',
    slug: 'investor-notarizations'
  },
  {
    id: '14',
    title: 'Seller Signing Day—What to Expect & Bring',
    excerpt: 'Seller signing checklist—what to bring, expect, and sign on closing day. Mobile notary available.',
    content: 'Congratulations on your sale! Here\'s how to close smoothly.',
    author: 'Real Estate Closing Agent',
    date: '2025-08-02',
    readTime: '4 min read',
    tags: ['Real Estate', 'Documents'],
    category: 'Real Estate',
    slug: 'seller-signing-day'
  },
  {
    id: '15',
    title: 'Scanback Timing Explained for Borrowers',
    excerpt: 'When do scanbacks happen after loan signings? Timeline from signing to funding explained.',
    content: 'After you sign, documents move quickly through the funding pipeline.',
    author: 'Loan Signing Agent',
    date: '2025-08-01',
    readTime: '3 min read',
    tags: ['Real Estate', 'Business Services'],
    category: 'Real Estate',
    slug: 'scanback-timing-explained'
  },
  {
    id: '16',
    title: 'Apostille Processing Times & Rush Options',
    excerpt: 'Ohio apostille timing: regular vs rush service, what affects speed, and how to plan ahead.',
    content: 'Planning ahead saves time and money when getting documents apostilled.',
    author: 'International Documents Specialist',
    date: '2025-08-30',
    readTime: '4 min read',
    tags: ['Apostille', 'International', 'Documents'],
    category: 'Apostille',
    slug: 'apostille-processing-times'
  },
  {
    id: '17',
    title: 'In-Person vs. RON vs. RIN—Which Option Is Right for You?',
    excerpt: 'Compare in-person, RON, and RIN notarization options. Which is right for your documents?',
    content: 'Multiple notarization options exist. Here\'s when to use each.',
    author: 'Technology Notary Specialist',
    date: '2025-09-15',
    readTime: '5 min read',
    tags: ['General Notary', 'Technology'],
    category: 'General Notary',
    slug: 'notary-vs-ron-rin'
  },
  {
    id: '18',
    title: 'Business Contract Notarizations—When and Why',
    excerpt: 'When do business contracts need notarization? Common agreements, legal requirements, and benefits.',
    content: 'Not all contracts require notarization, but many benefit from it.',
    author: 'Business Contracts Specialist',
    date: '2025-09-10',
    readTime: '4 min read',
    tags: ['Business Services', 'Legal/Court', 'Documents'],
    category: 'Business Services',
    slug: 'business-contract-notarization'
  },
  {
    id: '19',
    title: 'Minor & Student Travel Consent—What Airlines Check',
    excerpt: 'Flying with one parent or without parents? What to put in a travel consent letter and when to notarize.',
    content: 'Border agents and airlines may ask for a notarized consent letter when minors travel.',
    author: 'Travel Document Specialist',
    date: '2025-09-05',
    readTime: '3 min read',
    tags: ['College/18+', 'International', 'Legal/Court'],
    category: 'College/18+',
    slug: 'international-travel-consent'
  },
  {
    id: '20',
    title: 'Small Estate Affidavits—Executor Tips to Avoid Delays',
    excerpt: 'How small estate affidavits work, common errors, and notarization tips for executors.',
    content: 'A small estate affidavit can be faster than probate—but details matter.',
    author: 'Estate Planning Specialist',
    date: '2025-09-01',
    readTime: '5 min read',
    tags: ['Estate Planning', 'Legal/Court', 'Documents'],
    category: 'Estate Planning',
    slug: 'small-estate-affidavit-executor-tips'
  },
  {
    id: '21',
    title: 'Jail & Detention Notarizations—How It Works',
    excerpt: 'Step-by-step jail and detention notarizations—ID, scheduling, and facility rules.',
    content: 'We routinely perform notarizations at jails, detention centers, and prisons.',
    author: 'Legal Documents Specialist',
    date: '2025-01-20',
    readTime: '4 min read',
    tags: ['Legal/Court', 'Mobile Service'],
    category: 'Legal/Court',
    slug: 'jail-notarization-process'
  },
  {
    id: '22',
    title: 'After-Hours & Emergency Notary Service',
    excerpt: 'Nights, weekends, and urgent notarizations—what\'s possible and how to book fast.',
    content: 'Documents don\'t keep office hours. We offer flexible, after-hours appointments.',
    author: 'Mobile Notary Specialist',
    date: '2025-02-18',
    readTime: '3 min read',
    tags: ['General Notary', 'Mobile Service'],
    category: 'General Notary',
    slug: 'after-hours-emergency-notary'
  },
  {
    id: '23',
    title: 'Do You Need Witnesses? Notary Guide',
    excerpt: 'When witnesses are required, who can qualify, and how we help arrange them.',
    content: 'Some forms need one or two disinterested witnesses.',
    author: 'General Notary Specialist',
    date: '2025-03-15',
    readTime: '4 min read',
    tags: ['General Notary', 'Legal/Court'],
    category: 'General Notary',
    slug: 'witness-requirements'
  },
  {
    id: '24',
    title: 'Expired ID? Options for Notarization',
    excerpt: 'What to do if your ID is expired—alternatives and tips for notarization.',
    content: 'Most notarizations require a current, government photo ID. If yours is expired, here are options.',
    author: 'ID Verification Specialist',
    date: '2025-04-12',
    readTime: '3 min read',
    tags: ['General Notary', 'Documents'],
    category: 'General Notary',
    slug: 'expired-id-options'
  },
  {
    id: '25',
    title: 'Name Mismatch? How to Avoid Re-Signs',
    excerpt: 'AKA/Formerly Known As, hyphens, and spelling—clean up name mismatches before you sign.',
    content: 'Name differences cause delays. Here\'s how to fix them.',
    author: 'Document Preparation Specialist',
    date: '2025-05-10',
    readTime: '3 min read',
    tags: ['General Notary', 'Legal/Court', 'Documents'],
    category: 'General Notary',
    slug: 'name-mismatch-aka-affidavit'
  },
  {
    id: '26',
    title: 'Warranty, Quitclaim, and TOD Deeds—Notary\'s Role',
    excerpt: 'Understand deed types and what a notary does (and doesn\'t do) for property transfers.',
    content: 'Deeds transfer interests in property. Your notary\'s job is focused and neutral.',
    author: 'Real Estate Specialist',
    date: '2025-06-08',
    readTime: '4 min read',
    tags: ['Real Estate', 'Legal/Court', 'Documents'],
    category: 'Real Estate',
    slug: 'deeds-explained'
  },
  {
    id: '27',
    title: 'POA Pitfalls—Capacity, Witnesses, and Acceptance',
    excerpt: 'Avoid POA rejections: capacity, ID, witnesses, and signatures for better acceptance.',
    content: 'To be accepted, a POA must be executed correctly.',
    author: 'Legal Documents Specialist',
    date: '2025-07-06',
    readTime: '4 min read',
    tags: ['Legal/Court', 'Estate Planning', 'Documents'],
    category: 'Legal/Court',
    slug: 'poa-pitfalls-and-readiness'
  },
  {
    id: '28',
    title: 'Apostille for Diplomas & Transcripts—Guide',
    excerpt: 'How to notarize and apostille school records for use overseas—simple steps and tips.',
    content: 'Using school documents overseas? You may need an apostille.',
    author: 'International Documents Specialist',
    date: '2025-08-04',
    readTime: '5 min read',
    tags: ['Apostille', 'International', 'College/18+'],
    category: 'Apostille',
    slug: 'apostille-school-docs'
  },
  {
    id: '29',
    title: 'Notarizing Translator Affidavits',
    excerpt: 'When translations need an affidavit and notarization—process and requirements.',
    content: 'Some agencies require a translator\'s signed certificate of accuracy.',
    author: 'International Documents Specialist',
    date: '2025-08-15',
    readTime: '3 min read',
    tags: ['International', 'Legal/Court', 'Documents'],
    category: 'International',
    slug: 'translator-affidavit-notary'
  },
  {
    id: '30',
    title: 'Trust Certification for Banks—Checklist',
    excerpt: 'What banks look for in a trust certification and how to notarize it properly.',
    content: 'A trust certification summarizes key facts without exposing the full trust.',
    author: 'Estate Planning Specialist',
    date: '2025-08-20',
    readTime: '4 min read',
    tags: ['Estate Planning', 'Business Services', 'Documents'],
    category: 'Estate Planning',
    slug: 'trust-certification-for-banks'
  },
  {
    id: '31',
    title: 'Notary Fees—What\'s the Mobile Travel Charge?',
    excerpt: 'Understand standard notarization fees vs mobile travel charges with transparent pricing.',
    content: 'There are two parts to mobile service pricing: notarial acts and travel.',
    author: 'Pricing Specialist',
    date: '2025-08-25',
    readTime: '3 min read',
    tags: ['General Notary', 'Mobile Service'],
    category: 'General Notary',
    slug: 'notary-fees-and-mobile-travel'
  },
  {
    id: '32',
    title: 'What a Notary Cannot Do (and Why It Matters)',
    excerpt: 'Notaries can\'t give legal advice or draft docs. Learn the boundaries and how we help.',
    content: 'We protect signers and documents by staying neutral.',
    author: 'Compliance Specialist',
    date: '2025-09-03',
    readTime: '4 min read',
    tags: ['General Notary', 'Legal/Court'],
    category: 'General Notary',
    slug: 'what-notaries-cannot-do'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'category'>('newest');

  // Get unique categories from tags
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
    return ['All', ...unique.sort()];
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.tags.includes(selectedCategory));

    if (sortBy === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      filtered = filtered.sort((a, b) => a.category.localeCompare(b.category));
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Quote Section */}
      <section className="py-6 bg-brand-light border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold text-brand-navy mb-2">Need Expert Notary Help?</h2>
              <p className="text-brand-navy">Get professional guidance for your documents</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold px-6" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>Call {BUSINESS_CONFIG.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notary Knowledge Center
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Expert insights, guides, and tips for all your notarization needs
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-2 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-start">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              {/* Sort Controls */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? 's' : ''} found
                </div>
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'category')}
                    className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="category">By Category</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No blog posts found for the selected category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredAndSortedPosts.map((post) => (
                  <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex-shrink-0 p-4 lg:p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar size={14} />
                        <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock size={14} />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg lg:text-xl mb-2 line-clamp-2 leading-tight">
                        {post.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-brand-light text-brand-navy px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-muted-foreground">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow p-4 lg:p-6 pt-0">
                      <CardDescription className="text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    
                    <CardFooter className="flex-shrink-0 p-4 lg:p-6 pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User size={14} />
                          <span className="text-xs truncate">{post.author}</span>
                        </div>
                        <Button size="sm" variant="outline" asChild className="whitespace-nowrap">
                          <Link to={`/blog/${post.slug}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default Blog;