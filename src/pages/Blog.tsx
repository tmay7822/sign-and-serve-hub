import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Clock, Filter } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
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
    category: 'General Notary',
    slug: 'what-notaries-cannot-do'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'category'>('newest');

  // Get unique categories
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map(post => post.category)));
    return ['All', ...unique.sort()];
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);

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
              <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold px-6">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone}`}>Call {BUSINESS_CONFIG.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
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
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-brand-navy" />
                <span className="font-medium text-brand-navy">Filter by Topic:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-brand-gold text-brand-navy hover:bg-brand-gold/90" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Button
                  variant={sortBy === 'newest' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy('newest')}
                  className={sortBy === 'newest' 
                    ? "bg-brand-navy text-white hover:bg-brand-navy/90" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }
                >
                  Newest
                </Button>
                <Button
                  variant={sortBy === 'category' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy('category')}
                  className={sortBy === 'category' 
                    ? "bg-brand-navy text-white hover:bg-brand-navy/90" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }
                >
                  Topic
                </Button>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {filteredAndSortedPosts.map((post) => (
                <Card key={post.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <span className="bg-brand-light text-brand-navy px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-brand-navy hover:text-brand-blue transition-colors">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {post.content.split('\n\n')[0]}...
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <Button variant="outline" asChild>
                      <a href={`/blog/${post.slug}`}>Read More</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Professional Notary Services?</h3>
          <p className="text-xl mb-8 opacity-90">Get your documents notarized by certified professionals</p>
          <Button size="lg" variant="secondary">
            Get a Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default Blog;