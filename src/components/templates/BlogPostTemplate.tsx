import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';

interface BlogPostTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultService?: string;
  showTopCTA?: boolean;
  showBottomCTA?: boolean;
  className?: string;
}

const BlogPostTemplate = ({ 
  title, 
  subtitle,
  children, 
  defaultService = '',
  showTopCTA = true,
  showBottomCTA = true,
  className = '' 
}: BlogPostTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-light text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl mb-8">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Top CTA Section */}
      {showTopCTA && (
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Ready to Get Started?</h2>
                <p className="text-muted-foreground">Professional mobile notary services available throughout {BUSINESS_CONFIG.serviceArea.primary}</p>
              </div>
              <StandardCTAButtons 
                defaultService={defaultService}
                variant="top"
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      {showBottomCTA && (
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
                defaultService={defaultService}
                variant="bottom"
                className="max-w-2xl mx-auto"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Call us at <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-brand-blue hover:underline font-semibold">{BUSINESS_CONFIG.phone}</a> for immediate assistance
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <PopupForm />
    </div>
  );
};

export default BlogPostTemplate;