import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';

interface BasePageTemplateProps {
  children: ReactNode;
  heroSection?: ReactNode;
  showCTA?: boolean;
  defaultService?: string;
  className?: string;
}

export const BasePageTemplate = ({ 
  children, 
  heroSection,
  showCTA = true,
  defaultService = '',
  className = '' 
}: BasePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {heroSection}

      <main className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      {showCTA && (
        <section className="py-12 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <StandardCTAButtons 
                defaultService={defaultService}
                className="max-w-2xl mx-auto"
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
      <PopupForm />
    </div>
  );
};