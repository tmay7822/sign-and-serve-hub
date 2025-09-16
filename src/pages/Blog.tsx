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