import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const WitnessRequirements = () => {
  const faqs = [
    {
      question: "Can family members be witnesses?",
      answer: "Generally no. Witnesses should be disinterested parties who are not beneficiaries or related to the signer by blood or marriage."
    },
    {
      question: "Do witnesses need to bring ID?",
      answer: "Yes, witnesses must be able to present valid government-issued photo identification if requested by the notary."
    }
  ];

  return (
    <BlogPostTemplate
      title="Do You Need Witnesses? Notary Guide"
      subtitle="Some forms need one or two disinterested witnesses."
      metaDescription="When witnesses are required, who can qualify, and how we help arrange them."
      publishDate="2024-01-20"
      readTime={4}
      tags={['witnesses', 'notary requirements', 'document signing']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Estate Planning Documents Checklist",
        slug: "wills-trusts-poa-checklist",
        description: "Complete preparation guide for wills, trusts, and powers of attorney"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>Common docs needing witnesses</h2>
        <ul>
          <li>Wills and living wills</li>
          <li>POA/HCPOA (varies by form)</li>
          <li>Real estate deeds (sometimes)</li>
          <li>Retirement/beneficiary forms (sometimes)</li>
        </ul>

        <h2>Who can be a witness?</h2>
        <ul>
          <li>Not a party to the document or beneficiary</li>
          <li>Over 18 and competent</li>
          <li>Able to present valid ID (if requested)</li>
        </ul>

        <p>We can often <strong>help arrange witnesses</strong> with notice.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default WitnessRequirements;