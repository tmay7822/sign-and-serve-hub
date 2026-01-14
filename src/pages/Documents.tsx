import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { DocumentSearch } from '@/components/DocumentSearch';
import TrustSignals from '@/components/TrustSignals';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import { BUSINESS_CONFIG } from '@/config/business';
import { getDocumentCount, getCategoryCount, getCurrentSeason, getCurrentSeasonSlug } from '@/data/documents';
import { FileText, Search, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documents = () => {
  const documentCount = getDocumentCount();
  const categoryCount = getCategoryCount();
  const currentSeason = getCurrentSeason();
  const seasonSlug = getCurrentSeasonSlug();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Documents We Notarize",
    "description": `Complete list of ${documentCount}+ documents we notarize across ${categoryCount} categories.`,
    "numberOfItems": documentCount,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.name,
      "telephone": BUSINESS_CONFIG.phone
    }
  };

  return (
    <>
      <Seo
        title="Documents We Notarize | 200+ Document Types | Signed On Time"
        description={`Complete list of ${documentCount}+ documents we notarize in Ohio. Search by category: Estate Planning, Real Estate, Healthcare, Business, Military, Immigration & more.`}
        keywords="documents notarized, notary documents list, what documents can be notarized, notarization services ohio"
        canonical="https://sign-and-serve-hub.lovable.app/documents"
        jsonLd={jsonLd}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <FileText className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Documents We Notarize
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Browse our complete catalog of {documentCount}+ document types across {categoryCount} categories.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/90">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span className="font-semibold">{documentCount}+ Documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span className="font-semibold">{categoryCount} Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <Link to={`/${seasonSlug}`} className="font-semibold hover:underline">
                    {currentSeason}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-semibold">Mobile Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Search Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <DocumentSearch showPopular={true} showStats={true} className="mb-12" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't See Your Document?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We notarize many more document types. Contact us to confirm we can help with your specific document.
            </p>
            <StandardCTAButtons variant="top" className="justify-center" />
          </div>
        </section>

        <TrustSignals />
      </main>
      
      <Footer />
    </>
  );
};

export default Documents;
