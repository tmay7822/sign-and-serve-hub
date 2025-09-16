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
    title: 'Understanding Power of Attorney Documents: A Complete Guide',
    excerpt: 'Learn everything you need to know about Power of Attorney documents, when you need them, and how to get them properly notarized.',
    content: `Power of Attorney (POA) documents are among the most important legal instruments you can have. They allow you to designate someone you trust to make decisions on your behalf when you cannot do so yourself.

## Types of Power of Attorney

**General Power of Attorney:** Gives broad powers to your agent to act on your behalf in financial and legal matters.

**Limited Power of Attorney:** Restricts your agent's authority to specific tasks or time periods.

**Durable Power of Attorney:** Remains valid even if you become incapacitated.

**Medical Power of Attorney:** Specifically for healthcare decisions.

## When Do You Need a POA?

- Planning for future incapacity
- Managing finances while traveling
- Real estate transactions
- Business operations
- Military deployment

## Getting Your POA Notarized

All Power of Attorney documents must be notarized to be legally valid. Our mobile notary service ensures your documents are executed correctly with proper witness requirements where needed.`,
    author: 'Professional Notary Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Legal Documents',
    slug: 'understanding-power-of-attorney-documents'
  },
  {
    id: '2',
    title: '10 Essential Documents Every College Student Should Have Notarized',
    excerpt: 'When your child turns 18, you lose legal access to their information. Here are the key documents every college-bound student needs.',
    content: `The moment your child turns 18, they become a legal adult, and you lose automatic access to their medical, educational, and financial information. Here are the essential notarized documents every college student should have:

## Medical Documents
1. **HIPAA Authorization** - Allows parents to access medical information
2. **Medical Power of Attorney** - Authorizes medical decisions in emergencies
3. **Mental Health Treatment Authorization** - Critical for counseling services

## Educational Documents
4. **FERPA Release** - Grants access to educational records
5. **Emergency Contact Authorization** - Ensures schools can contact parents

## Financial Documents
6. **Limited Financial Power of Attorney** - For banking and financial aid matters
7. **Emergency Fund Access Authorization**

## Travel and General
8. **Travel Consent Forms** - For international trips and emergencies
9. **General Authorization for Emergency Decisions**
10. **Technology and Social Media Access** - For emergency account access

## Getting These Documents Notarized

We provide mobile notary services directly to college campuses, dorms, and homes. All documents can be prepared and notarized in one convenient appointment.`,
    author: 'College Planning Specialist',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'College Planning',
    slug: 'essential-documents-college-students-notarized'
  },
  {
    id: '3',
    title: 'Loan Signing Appointments: What to Expect and How to Prepare',
    excerpt: 'A complete guide to loan signing appointments, from preparation to completion, ensuring a smooth closing process.',
    content: `Loan signing appointments are a critical step in your real estate transaction. Here's everything you need to know to prepare for a successful signing.

## Before Your Appointment

**Gather Required Documents:**
- Government-issued photo ID
- Proof of homeowner's insurance
- Wire transfer confirmation (if applicable)
- Any additional documents requested by your lender

**Prepare Your Space:**
- Ensure good lighting for document review
- Have a flat surface for signing
- Keep children and distractions to a minimum

## During the Signing

**Document Review:**
We'll walk through each document, explaining its purpose without providing legal advice. Take your time to read and understand what you're signing.

**Key Documents Include:**
- Promissory Note
- Deed of Trust/Mortgage
- Closing Disclosure
- Various affidavits and declarations

**The Process:**
- Identity verification
- Document explanation
- Signature and notarization
- Initial review for completeness

## After Signing

Documents are typically returned to the title company or lender within hours. Your loan funds will be released according to your state's requirements.

## Questions?

Our experienced loan signing agents are certified and trained to ensure accuracy and completeness. We're here to make your closing as smooth as possible.`,
    author: 'Certified Loan Signing Agent',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Real Estate',
    slug: 'loan-signing-appointments-what-to-expect'
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