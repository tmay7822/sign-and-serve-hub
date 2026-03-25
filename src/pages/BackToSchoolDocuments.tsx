import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { StandardCTAButtons } from '@/components/StandardCTAButtons';
import TrustSignals from '@/components/TrustSignals';
import { BookingWidget } from '@/components/BookingWidget';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_CONFIG } from '@/config/business';
import { TRENDING_DOCUMENTS } from '@/data/documents';
import { Link } from 'react-router-dom';
import { GraduationCap, FileText, Clock, CheckCircle2, TrendingUp, ArrowRight, Plane, Users } from 'lucide-react';

const BackToSchoolDocuments = () => {
  const schoolDocs = TRENDING_DOCUMENTS.filter(d => 
    d.trend === "Back to School" || d.trend === "Summer Travel"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Back to School Notary Services",
    "description": "Notarize school enrollment forms, study abroad consent, and educational documents for students and families.",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.name,
      "telephone": BUSINESS_CONFIG.phone
    },
    "areaServed": BUSINESS_CONFIG.serviceArea.primary
  };

  return (
    <>
      <Seo
        title="Back to School Notary Services | Student Documents | Ohio"
        description="Notarize school enrollment forms, study abroad consent, educational POA for college students. Mobile service for families in Cincinnati-Dayton."
        keywords="back to school notary, student document notarization, college POA, study abroad consent, school enrollment notary"
        canonical="https://www.signedontime.com/back-to-school-documents"
        jsonLd={jsonLd}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <Badge className="mb-4 bg-brand-gold text-brand-navy">Back to School Season</Badge>
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Back to School Notary Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Get your student documents notarized before school starts. Enrollment forms, study abroad consent, 
                and educational POAs for college students turning 18. July through September appointments available.
              </p>
              <StandardCTAButtons variant="top" className="justify-center" />
            </div>
          </div>
        </section>

        {/* Trending Documents */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Popular Back to School Documents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These documents see increased demand during back-to-school season (July-September).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {schoolDocs.map((doc) => (
                <Card key={doc.document} className="hover:shadow-md transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">{doc.trend}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{doc.document}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.reason}</p>
                    <BookingWidget defaultService="general-notary" size="sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Book Now
                      </span>
                    </BookingWidget>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Education Documents */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  More Education Documents We Notarize
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Transcript Request Authorization",
                    "Diploma Verification",
                    "Scholarship Application",
                    "Student Loan Documents",
                    "Letter of Recommendation Request",
                    "Academic Records Release",
                    "Home School Affidavit",
                    "College Application Documents",
                    "Minor Athlete Travel Consent"
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* College Students Turning 18 */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="mb-4">Important for Parents</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  College Students Turning 18?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Once your child turns 18, you no longer have legal authority over their medical or financial decisions. 
                  Before they leave for college, consider having these essential documents notarized:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Healthcare Power of Attorney</h3>
                      <p className="text-sm text-muted-foreground">
                        Allows you to make medical decisions if your student can't.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">HIPAA Authorization</h3>
                      <p className="text-sm text-muted-foreground">
                        Permits access to your student's medical records.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Educational Power of Attorney</h3>
                      <p className="text-sm text-muted-foreground">
                        Handle academic matters on their behalf if needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    to="/blog/college-18-plus-starter-pack" 
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Read the complete 18+ starter pack guide
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Schedule Before They Leave
                  </h3>
                  <p className="mb-6 opacity-90">
                    We offer family appointments where you can notarize all essential documents together. 
                    Mobile service to your home.
                  </p>
                  <StandardCTAButtons variant="bottom" className="justify-center" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Related Services & Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/college-18-plus" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      College 18+ Services
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete service for young adults heading to college.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/education-guides" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      Education Guides
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All our guides for education-related notarization.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/documents" className="block">
                <Card className="h-full hover:shadow-md hover:border-primary transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-1">
                      All Documents
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Browse our complete document catalog.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <TrustSignals />
      </main>
      
      <Footer />
    </>
  );
};

export default BackToSchoolDocuments;
