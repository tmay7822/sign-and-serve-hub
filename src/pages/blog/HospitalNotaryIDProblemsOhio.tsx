import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const HospitalNotaryIDProblemsOhio = () => {
  const faqs = [
    {
      question: "What if the patient's wallet was lost in the emergency?",
      answer: "Family members can sometimes retrieve replacement ID from the DMV with proper documentation. We'll help you understand what alternatives might be acceptable."
    },
    {
      question: "Can hospital bracelets be used as identification?",
      answer: "Hospital bracelets are not sufficient for notarization. We need government-issued photo ID, though alternatives may exist depending on the situation."
    }
  ];

  return (
    <BlogPostTemplate
      title="ID Problems at the Hospital—What Now?"
      subtitle="Missing or expired ID during a hospital signing? Practical options and what's allowed."
      metaDescription="Missing or expired ID during a hospital signing? Practical options and what's allowed."
      publishDate="2025-09-25"
      lastUpdated="2026-03-30"
      readTime={5}
      tags={['Hospital Notary', 'IDs', 'Estate Docs']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Hospital Notary Checklist (Fast & Calm)",
        slug: "hospital-notary-checklist-ohio",
        description: "Complete preparation guide for hospital notarizations"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>If the signer's ID is expired or missing, options depend on the form and the institution. We'll help you understand typical alternatives (if any) and what's acceptable to the document recipient.</p>

        <h2>Common ID problems</h2>
        <ul>
          <li>Expired driver's license</li>
          <li>Lost wallet/purse</li>
          <li>ID damaged in accident</li>
          <li>Name changes not reflected on ID</li>
        </ul>

        <h2>Potential solutions</h2>
        <ul>
          <li>Passport if available</li>
          <li>State ID card</li>
          <li>Military ID in some cases</li>
          <li>Family member can obtain replacement</li>
        </ul>

        <h2>When in doubt</h2>
        <p>Call/text before we travel to discuss options and avoid unnecessary trips.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
            <span>·</span>
            <a href="/contact" className="text-primary hover:underline font-medium">Contact</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default HospitalNotaryIDProblemsOhio;