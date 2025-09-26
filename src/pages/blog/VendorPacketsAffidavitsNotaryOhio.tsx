import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const VendorPacketsAffidavitsNotaryOhio = () => {
  const faqs = [
    {
      question: "Do you notarize vendor packets on-site at job locations?",
      answer: "Yes, we can meet you at your office, jobsite, or other convenient location to complete vendor packet notarizations."
    },
    {
      question: "How quickly can you provide scanbacks for compliance teams?",
      answer: "Same-day scanbacks are available. We'll coordinate with your compliance team's timeline and delivery requirements."
    }
  ];

  return (
    <BlogPostTemplate
      title="Vendor Packets & Affidavits—Keep Projects Moving"
      subtitle="On-site notarization for vendor packets and affidavits—what to prep and how to finish in one visit."
      metaDescription="On-site notarization for vendor packets and affidavits—what to prep and how to finish in one visit."
      publishDate="2025-09-25"
      readTime={4}
      tags={['Business Notary', 'Affidavits', 'Contracts']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Contracts & Title Authority—Sign the Right Way",
        slug: "contracts-title-authority-notary-ohio",
        description: "When signing as an officer/owner, here's how to avoid re-signs"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>We notarize vendor packets, affidavits, and certifications on-site so your team stays productive.</p>

        <h2>What to have ready</h2>
        <ul>
          <li>IDs ready</li>
          <li>Confirm signer roles/titles</li>
          <li>Bring all pages (not just signature sheets)</li>
        </ul>

        <h2>Same-day service</h2>
        <p>If your compliance team needs same-day scanbacks, we can handle that.</p>

        <h2>On-site flexibility</h2>
        <p>We meet you at your office, jobsite, or preferred location to keep your project timeline on track.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/business-services" className="text-primary hover:underline font-medium">Business Notary</a>
            <span>·</span>
            <a href="/contact" className="text-primary hover:underline font-medium">Book</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default VendorPacketsAffidavitsNotaryOhio;