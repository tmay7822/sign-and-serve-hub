import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const NotaryFeesExplained = () => {
  const faqs = [
    {
      question: "How much do mobile notary services cost?",
      answer: "There are two parts: notarial acts (per-signature fee, often state-regulated) and mobile travel (time/distance-based). We provide transparent quotes upfront."
    },
    {
      question: "Are there additional charges for after-hours service?",
      answer: "Yes, evening, weekend, and holiday appointments may have additional fees. We'll explain all costs before scheduling."
    }
  ];

  return (
    <BlogPostTemplate
      title="Notary Fees—What's the Mobile Travel Charge?"
      subtitle="There are two parts to mobile service pricing:"
      metaDescription="Understand standard notarization fees vs mobile travel charges with transparent pricing."
      publishDate="2024-01-10"
      readTime={2}
      tags={['Pricing', 'Mobile Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "What to Bring to a Notarization", 
        slug: "general-notary-what-to-bring",
        description: "Essential checklist for smooth notarization"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <ol>
          <li><strong>Notarial act(s):</strong> Per-signature fee (often regulated by state).</li>
          <li><strong>Mobile travel:</strong> Time and distance to come to you (market-based).</li>
        </ol>

        <p>You'll get a clear quote before we schedule.</p>
      </article>
    </BlogPostTemplate>
  );
};

export default NotaryFeesExplained;