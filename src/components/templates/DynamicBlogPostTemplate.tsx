import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
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

interface DynamicBlogPostTemplateProps {
  post: BlogPost;
}

const DynamicBlogPostTemplate = ({ post }: DynamicBlogPostTemplateProps) => {
  useEffect(() => {
    document.title = `${post.title} | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription || post.excerpt);
    }
  }, [post]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.categorySlug}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishDate}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl mb-8">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Top CTA Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Ready to Get Started?</h2>
              <p className="text-muted-foreground">Professional mobile notary services available throughout {BUSINESS_CONFIG.serviceArea.primary}</p>
            </div>
            <StandardCTAButtons 
              defaultService={post.serviceSlug || ''}
              variant="top"
              className="max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">
              Need Professional Notary Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact {BUSINESS_CONFIG.name} for reliable mobile notary services in {BUSINESS_CONFIG.serviceArea.primary}
            </p>
            <StandardCTAButtons 
              defaultService={post.serviceSlug || ''}
              variant="bottom"
              className="max-w-2xl mx-auto"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Call us at <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-brand-blue hover:underline font-semibold">{BUSINESS_CONFIG.phone}</a> for immediate assistance
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <PopupForm />
    </div>
  );
};

export default DynamicBlogPostTemplate;