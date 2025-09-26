import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const POAPitfalls = () => {
  const faqs = [
    {
      question: "What happens if the signer shows signs of confusion during POA signing?",
      answer: "We cannot proceed with notarization if there are concerns about the signer's capacity. We may suggest rescheduling or consulting with healthcare providers."
    },
    {
      question: "Do banks have preferred POA forms?",
      answer: "Yes, many banks have their own POA forms they prefer. It's best to ask the receiving institution about their requirements before signing."
    }
  ];

  return (
    <BlogPostTemplate
      title="POA Pitfalls—Capacity, Witnesses, and Acceptance"
      subtitle="To be accepted, a POA must be executed correctly."
      metaDescription="Avoid POA rejections: capacity, ID, witnesses, and signatures for better acceptance."
      publishDate="2024-01-20"
      readTime={3}
      tags={['Power of Attorney', 'Estate Planning']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Wills, Trusts & POA—Notary Checklist",
        slug: "wills-trusts-poa-checklist", 
        description: "Complete preparation guide for estate documents"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>Key checks</h2>
        <ul>
          <li><strong>Capacity:</strong> Signer is alert, aware, and willing.</li>
          <li><strong>ID:</strong> Government photo ID matches the name on the document.</li>
          <li><strong>Witnesses:</strong> Some POA forms require them.</li>
        </ul>

        <h2>Pro tip</h2>
        <p>Ask the receiving bank, hospital, or title company if they have <strong>preferred forms</strong>.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default POAPitfalls;