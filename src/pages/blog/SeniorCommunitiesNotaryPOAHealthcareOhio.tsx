import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const SeniorCommunitiesNotaryPOAHealthcareOhio = () => {
  const faqs = [
    {
      question: "Do senior communities have witness policies?",
      answer: "Many facilities can provide staff witnesses if needed. We recommend asking the community about witness availability when scheduling."
    },
    {
      question: "Can family members be present during the signing?",
      answer: "Yes, family members can typically be present, and we coordinate with families and staff to ensure a comfortable signing environment."
    }
  ];

  return (
    <BlogPostTemplate
      title="Senior Communities—POA & Healthcare Docs"
      subtitle="We come to senior communities for POA and healthcare documents—how we work with staff and families."
      metaDescription="We come to senior communities for POA and healthcare documents—how we work with staff and families."
      publishDate="2025-09-25"
      readTime={4}
      tags={['Hospital Notary', 'Estate Docs']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Hospital Notary Checklist (Fast & Calm)",
        slug: "hospital-notary-checklist-ohio",
        description: "Essential checklist for all bedside notarization visits"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>We schedule with family and staff, confirm ID readiness, and guide each signature. If your form mentions witnesses, ask the community about availability—or plan to provide them.</p>

        <h2>Coordination process</h2>
        <ul>
          <li>Schedule with family and facility staff</li>
          <li>Confirm resident alertness and willingness</li>
          <li>Verify ID requirements are met</li>
          <li>Guide through each signature carefully</li>
        </ul>

        <h2>Witness arrangements</h2>
        <p>Many communities can provide staff witnesses when needed, or you can arrange for family friends who meet the requirements.</p>

        <h2>Family involvement</h2>
        <p>We work with families to ensure comfort and understanding throughout the process.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
            <span>·</span>
            <a href="/estate-plans" className="text-primary hover:underline font-medium">Estate Docs</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default SeniorCommunitiesNotaryPOAHealthcareOhio;