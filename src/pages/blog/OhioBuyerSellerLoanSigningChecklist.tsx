import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const OhioBuyerSellerLoanSigningChecklist = () => {
  const faqs = [
    {
      question: "What happens if there's a last-minute lender update?",
      answer: "We'll adapt without rushing. Give yourself a 60-90 minute window for loan signings to accommodate any updates that might arrive."
    },
    {
      question: "Do I need to bring certified funds to the signing?",
      answer: "Your lender will specify if funds are needed at signing versus wire transfer. We'll confirm all requirements before the appointment."
    }
  ];

  return (
    <BlogPostTemplate
      title="Buyer/Seller Packages: What to Expect"
      subtitle="A simple checklist for Ohio buyer/seller loan signings—IDs, timing, scanbacks, and common pitfalls so closing day runs smoothly."
      metaDescription="A simple checklist for Ohio buyer/seller loan signings—IDs, timing, scanbacks, and common pitfalls so closing day runs smoothly."
      publishDate="2025-09-25"
      readTime={5}
      tags={['Loan Signings', 'Real Estate', 'Hospital Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "What Happens During a Loan Signing Appointment?",
        slug: "what-happens-loan-signing",
        description: "Step-by-step walkthrough of the entire loan signing process"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>Buying or selling a home is hectic. A clean loan signing keeps closing day calm and on time. Here's a quick checklist we use across Southwest Ohio.</p>

        <h2>IDs & names</h2>
        <p>Bring a current government photo ID. Make sure the name on your documents matches the ID (middle initials matter).</p>

        <h2>Timing windows</h2>
        <p>Give yourself a 60–90-minute window. If a last-minute lender update arrives, we'll adapt without rushing.</p>

        <h2>Funds & notarizations</h2>
        <p>Know whether your package includes acknowledgments, jurats, or both. We'll verify what needs a notary stamp and what only needs signatures.</p>

        <h2>Common pitfalls</h2>
        <p>Wrong dates; initials missing on specific pages; signatures outside the box. We double-check each critical page as we go.</p>

        <h2>Scanbacks / delivery</h2>
        <p>If your title company needs immediate scanbacks, tell us upfront. We can coordinate scans and courier/overnight handoff.</p>

        <p>A good signing is calm, accurate, and predictable. That's our job.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <p className="mb-4">Tell us your county/city and preferred time.</p>
          <div className="flex flex-wrap gap-2">
            <a href="/loan-signings" className="text-primary hover:underline font-medium">Loan Signings</a>
            <span>·</span>
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
            <span>·</span>
            <a href="/service-areas" className="text-primary hover:underline font-medium">Service Areas</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default OhioBuyerSellerLoanSigningChecklist;