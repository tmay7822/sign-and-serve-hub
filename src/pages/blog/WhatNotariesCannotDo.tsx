import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const WhatNotariesCannotDo = () => {
  const faqs = [
    {
      question: "Can a notary help me choose between an acknowledgment or jurat?",
      answer: "We can explain the differences in general terms, but cannot advise which one to use. That decision should be made by your attorney or the requesting party."
    },
    {
      question: "What if I need help understanding my document before signing?",
      answer: "We cannot interpret documents or provide legal advice. Consider consulting an attorney if you have questions about what you're signing."
    }
  ];

  return (
    <BlogPostTemplate
      title="What a Notary Cannot Do (and Why It Matters)"
      subtitle="We protect signers and documents by staying neutral."
      metaDescription="Notaries can't give legal advice or draft docs. Learn the boundaries and how we help."
      publishDate="2024-01-12"
      readTime={3}
      tags={['Notary Rules', 'Legal Boundaries']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "What to Bring to a Notarization",
        slug: "general-notary-what-to-bring",
        description: "Essential checklist for smooth notarization"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>We cannot</h2>
        <ul>
          <li>Give legal or tax advice</li>
          <li>Choose the notarial act for you</li>
          <li>Draft or alter your documents</li>
          <li>Notarize if you're unwilling or not present</li>
        </ul>

        <h2>We can</h2>
        <ul>
          <li>Verify identity and willingness</li>
          <li>Explain notarial certificates (in general terms)</li>
          <li>Coordinate witnesses</li>
          <li>Travel to your location</li>
        </ul>

        <p>According to the <a href="https://www.ohiosos.gov/notary/" target="_blank" rel="noopener">Ohio Secretary of State</a>, notary commissions in Ohio are valid for 5-year terms.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default WhatNotariesCannotDo;