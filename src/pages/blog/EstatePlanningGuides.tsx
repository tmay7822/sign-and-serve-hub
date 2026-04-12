import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { BUSINESS_CONFIG } from '@/config/business';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstatePlanningGuides = () => {
  const guides = [
    {
      title: "Wills & Trusts Checklist",
      description: "Everything you need to know about preparing and notarizing wills and trust documents",
      icon: <FileText className="w-6 h-6" />,
      link: "/blog/wills-trusts-poa-checklist"
    },
    {
      title: "Healthcare Power of Attorney Guide",
      description: "Understanding HCPOA forms and living will requirements",
      icon: <Shield className="w-6 h-6" />,
      link: "/blog/hcpoa-living-will-guide"
    },
    {
      title: "Witness Requirements",
      description: "When you need witnesses and who qualifies as a disinterested witness",
      icon: <Users className="w-6 h-6" />,
      link: "/blog/witness-requirements"
    },
    {
      title: "Small Estate Affidavit Tips",
      description: "Executor tips for handling small estate affidavits in Ohio",
      icon: <FileText className="w-6 h-6" />,
      link: "/blog/small-estate-affidavit-executor-tips"
    },
    {
      title: "Trust Certification for Banking",
      description: "What banks require for trust certifications and account management",
      icon: <Shield className="w-6 h-6" />,
      link: "/blog/trust-certification-banking"
    },
    {
      title: "Power of Attorney (POA) Pitfalls to Avoid",
      description: "Common mistakes that can invalidate power of attorney documents",
      icon: <FileText className="w-6 h-6" />,
      link: "/blog/poa-pitfalls"
    }
  ];

  return (
    <BlogPostTemplate
      title="Estate Planning Guides"
      subtitle="Professional guidance for wills, trusts, power of attorney, and healthcare directives in Ohio"
      metaDescription="Comprehensive guides for wills, trusts, power of attorney, and healthcare directives. Professional notary services for all estate planning documents."
      publishDate="2024-01-15"
      lastUpdated="2026-03-07"
      readTime={8}
      tags={['estate planning', 'wills', 'trusts', 'power of attorney']}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="text-primary">
                  {guide.icon}
                </div>
                <h3 className="text-lg">{guide.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{guide.description}</p>
              <Link 
                to={guide.link}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Read Guide →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2>Why Choose Professional Notary Services for Estate Planning?</h2>
        
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-brand-navy font-bold mb-4">Estate Planning Document Requirements</h3>
          <ul className="space-y-2">
            <li><strong>Proper Notarization:</strong> Most estate planning documents require notarization to be legally valid</li>
            <li><strong>Witness Requirements:</strong> Many documents need one or two disinterested witnesses</li>
            <li><strong>Identity Verification:</strong> Signers must present valid government-issued ID</li>
            <li><strong>Mental Capacity:</strong> Notary confirms signer is of sound mind and acting willingly</li>
            <li><strong>Document Completeness:</strong> All blanks filled, no alterations after signing</li>
          </ul>
        </div>

        <h2>Common Estate Planning Documents We Notarize</h2>
        <ul>
          <li><strong>Last Will and Testament</strong> - Distribute assets according to your wishes</li>
          <li><strong>Living Trust Documents</strong> - Avoid probate and manage assets during incapacity</li>
          <li><strong>Durable Power of Attorney</strong> - Authorize someone to handle financial matters</li>
          <li><strong>Healthcare Power of Attorney (HCPOA)</strong> - Medical decision-making authority</li>
          <li><strong>Living Will/Advance Directive</strong> - End-of-life medical preferences</li>
          <li><strong>Trust Amendments</strong> - Modify existing trust provisions</li>
        </ul>

        <h2>Mobile Service Benefits</h2>
        <p>
          Estate planning often involves sensitive family discussions and may include elderly or mobility-limited individuals. 
          Our mobile notary service brings professional notarization to your location, ensuring comfort and convenience during 
          these important legal signings.
        </p>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-center">
            <strong>Important:</strong> We provide notarization services only. We do not prepare legal documents or provide legal advice. 
            Consult with an attorney for estate planning document preparation and legal guidance.
          </p>
        </div>
      </div>
    </BlogPostTemplate>
  );
};

export default EstatePlanningGuides;