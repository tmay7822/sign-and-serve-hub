import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const OhioWillsPOAWhatNotariesCanAndCantDo = () => {
  const faqs = [
    {
      question: "Can a notary help me choose the right POA form?",
      answer: "No, notaries cannot provide legal advice or recommend specific forms. We recommend consulting with an attorney for document selection and legal guidance."
    },
    {
      question: "Do all wills need to be notarized in Ohio?",
      answer: "No, Ohio allows self-proving wills with notarization, but simple wills with witnesses may not require notarization. Check with your attorney."
    }
  ];

  return (
    <BlogPostTemplate
      title="Wills & POA: What a Notary Can (and Can't) Do"
      subtitle="Clear up confusion: what Ohio notaries can and can't do for wills and powers of attorney—IDs, witnesses, and limits."
      metaDescription="Clear up confusion: what Ohio notaries can and can't do for wills and powers of attorney—IDs, witnesses, and limits."
      publishDate="2025-09-25"
      lastUpdated="2026-02-08"
      readTime={5}
      tags={['Estate Docs', 'Wills', 'POA', 'Hospital Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Estate Planning Documents Checklist",
        slug: "wills-trusts-poa-checklist",
        description: "Complete preparation guide for wills, trusts, and powers of attorney"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>What we can do</h2>
        <p>We notarize signatures, not the legal content. For wills/POA we:</p>
        <ul>
          <li>Verify ID</li>
          <li>Confirm willingness</li>
          <li>Complete required notarial certificates</li>
        </ul>
        
        <p>We <strong>don't</strong> draft, interpret, or advise.</p>

        <h2>Witnesses</h2>
        <p>Some documents or institutions require witnesses separate from the notary. Ask your attorney/issuer; we'll share what's typical locally.</p>

        <h2>At hospitals/senior communities</h2>
        <p>We coordinate with staff and work within visiting policies.</p>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-primary rounded-r-lg">
          <h3 className="text-lg font-semibold mb-4">What next:</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/estate-plans" className="text-primary hover:underline font-medium">Estate Docs</a>
            <span>·</span>
            <a href="/healthcare-notary" className="text-primary hover:underline font-medium">Hospital Notary</a>
          </div>
        </div>
      </article>
    </BlogPostTemplate>
  );
};

export default OhioWillsPOAWhatNotariesCanAndCantDo;