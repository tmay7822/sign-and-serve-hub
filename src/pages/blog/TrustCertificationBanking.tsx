import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { BUSINESS_CONFIG } from '@/config/business';

const TrustCertificationBanking = () => {
  const faqs = [
    {
      question: "What information do banks typically require in a trust certification?",
      answer: "Banks usually require trustee names and powers, trust date and amendments, and notarized certification if required by their policies."
    },
    {
      question: "Do I need to bring the entire trust document to the bank?",
      answer: "No, a trust certification summarizes key facts without exposing the full trust document, which maintains privacy while providing necessary information."
    }
  ];

  return (
    <BlogPostTemplate
      title="Trust Certification for Banks—Checklist"
      subtitle="A trust certification summarizes key facts without exposing the full trust."
      metaDescription="What banks look for in a trust certification and how to notarize it properly."
      publishDate="2024-01-25"
      lastUpdated="2026-03-25"
      readTime={5}
      tags={['trust certification', 'banking', 'estate planning']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Estate Planning Documents Checklist",
        slug: "wills-trusts-poa-checklist",
        description: "Complete preparation guide for wills, trusts, and powers of attorney"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>What banks often check</h2>
        <ul>
          <li>Trustee names and powers</li>
          <li>Trust date and amendments</li>
          <li>Notarized certification (if required)</li>
        </ul>

        <h2>Bring</h2>
        <ul>
          <li>Valid IDs for trustees</li>
          <li>Completed (unsigned) certification</li>
          <li>Any bank instructions</li>
        </ul>

        <p>We provide <strong>mobile notary services for trust certifications</strong> throughout {BUSINESS_CONFIG.serviceArea.primary}. Call <strong>{BUSINESS_CONFIG.phone}</strong> for same-day service.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default TrustCertificationBanking;