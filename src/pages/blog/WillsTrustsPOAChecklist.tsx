import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const WillsTrustsPOAChecklist = () => {
  const faqs = [
    {
      question: "What happens if names don't match exactly between ID and documents?",
      answer: "Names must match exactly. Minor variations may require a name affidavit or document revision before notarization."
    },
    {
      question: "Can you help arrange witnesses for estate documents?",
      answer: "Yes, we can coordinate with disinterested parties who meet witness requirements. It's best to plan this in advance."
    }
  ];

  return (
    <BlogPostTemplate
      title="Wills, Trusts & POA—Notary Checklist"
      subtitle="Estate documents need clean execution. Use this quick checklist:"
      metaDescription="A practical checklist for notarizing estate documents—IDs, witnesses, readiness, and signing tips."
      publishDate="2024-01-18"
      lastUpdated="2026-02-18"
      readTime={4}
      tags={['Estate Planning', 'Wills', 'Power of Attorney']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "POA Pitfalls—Capacity, Witnesses, and Acceptance",
        slug: "poa-pitfalls",
        description: "Avoid common POA rejection issues"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>Bring</h2>
        <ul>
          <li>Current photo IDs for all signers</li>
          <li>Documents <strong>complete but unsigned</strong></li>
          <li>Any required <strong>witnesses</strong> (we can help with notice)</li>
        </ul>

        <h2>Prepare</h2>
        <ul>
          <li>Confirm spellings, dates, and roles (trustee, agent, executor)</li>
          <li>Choose a quiet space with a flat surface</li>
          <li>Allow enough time—rushing causes errors</li>
        </ul>

        <h2>Common estate documents we handle</h2>
        <ul>
          <li>Last Will & Testament and Codicils</li>
          <li>Revocable/Irrevocable Trusts and Certifications</li>
          <li>Financial and Medical POA</li>
          <li>Small Estate Affidavits and Executor Oaths</li>
        </ul>

        <p><em>Tip:</em> Ask your attorney to review content before we arrive. We handle the notarization precisely and promptly.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default WillsTrustsPOAChecklist;