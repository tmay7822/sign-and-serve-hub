import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const HospitalNotaryChecklistOhio = () => {
  const faqs = [
    {
      question: "What if the patient can't hold a pen?",
      answer: "We can assist with signature guidance while ensuring the patient is making the mark willingly. Some facilities have accommodations for patients with limited mobility."
    },
    {
      question: "Do visiting hours affect notary appointments?",
      answer: "We coordinate with hospital visiting policies and can often work within or around standard visiting hours for urgent documents."
    }
  ];

  return (
    <BlogPostTemplate
      title="Hospital Notary Checklist (Fast & Calm)"
      subtitle="Quick bedside notarization checklist—ID, alertness, witnesses, and room logistics for hospitals and rehab."
      metaDescription="Quick bedside notarization checklist—ID, alertness, witnesses, and room logistics for hospitals and rehab."
      publishDate="2025-09-25"
      readTime={5}
      tags={['Hospital Notary', 'Estate Docs', 'Loan Signings']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Healthcare Directives—Fast Bedside Notarization",
        slug: "healthcare-directives-notary-ohio-bedside",
        description: "Specialized guidance for healthcare directive notarization"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>For bedside notarization: confirm the signer is alert and willing, bring photo ID, and verify if witnesses are required by your form.</p>

        <h2>Before we arrive</h2>
        <ul>
          <li>Confirm the signer is alert and willing</li>
          <li>Have current photo ID ready</li>
          <li>Check if witnesses are needed</li>
          <li>Share hospital, unit/room details</li>
          <li>Provide parking or check-in information</li>
        </ul>

        <h2>During the visit</h2>
        <p>We coordinate with staff and keep the visit focused and respectful.</p>

        <h2>Room logistics</h2>
        <p>We work efficiently within hospital space constraints and medical equipment arrangements.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
            <span>·</span>
            <a href="/contact" className="text-primary hover:underline font-medium">Book</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default HospitalNotaryChecklistOhio;