import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const HealthcareDirectivesNotaryOhioBedside = () => {
  const faqs = [
    {
      question: "How do you verify the patient is alert and willing?",
      answer: "We have a brief conversation with the signer to confirm they understand what they're signing and are doing so willingly, without coercion."
    },
    {
      question: "Can family members serve as witnesses for healthcare directives?",
      answer: "This depends on your specific form and state requirements. We'll help you understand what's required and arrange appropriate witnesses."
    }
  ];

  return (
    <BlogPostTemplate
      title="Healthcare Directives—Fast Bedside Notarization"
      subtitle="How bedside notarization for healthcare directives works: ID rules, alertness, witnesses, and staff coordination."
      metaDescription="How bedside notarization for healthcare directives works: ID rules, alertness, witnesses, and staff coordination."
      publishDate="2025-09-25"
      readTime={4}
      tags={['Estate Docs', 'Hospital Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Hospital Notary Checklist (Fast & Calm)",
        slug: "hospital-notary-checklist-ohio",
        description: "Quick bedside notarization checklist for all hospital visits"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>For healthcare directives, time matters. We verify alertness and willingness, check photo ID, and move efficiently. If the facility can provide witnesses, great—otherwise plan to bring them if required by your form.</p>

        <h2>Our bedside process</h2>
        <ul>
          <li>Verify patient alertness and willingness</li>
          <li>Check current photo ID</li>
          <li>Coordinate with medical staff</li>
          <li>Complete notarization efficiently</li>
        </ul>

        <h2>Witness coordination</h2>
        <p>Tell us room/unit, parking instructions, and timing windows; we'll meet you there.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
            <span>·</span>
            <a href="/service-areas" className="text-primary hover:underline font-medium">Service Areas</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default HealthcareDirectivesNotaryOhioBedside;