import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Clock } from 'lucide-react';

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
    date: '2024-01-15',
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
    date: '2024-01-14',
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
    date: '2024-01-13',
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
    date: '2024-01-12',
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
    date: '2024-01-11',
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
    date: '2024-01-10',
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
    date: '2024-01-09',
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
    date: '2024-01-08',
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
    date: '2024-01-07',
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
    date: '2024-01-06',
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
    date: '2024-01-05',
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
    date: '2024-01-04',
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
    date: '2024-01-03',
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
    date: '2024-01-02',
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
    date: '2024-01-01',
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
    date: '2023-12-30',
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
    date: '2023-12-29',
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
    date: '2023-12-28',
    readTime: '4 min read',
    category: 'Business Services',
    slug: 'business-contract-notarization'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
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