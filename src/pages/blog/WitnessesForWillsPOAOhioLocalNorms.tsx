import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

const WitnessesForWillsPOAOhioLocalNorms = () => {
  const faqs = [
    {
      question: "Can my spouse be a witness to my will?",
      answer: "Generally no. Witnesses should be disinterested parties who are not beneficiaries or related to the signer by blood or marriage."
    },
    {
      question: "What happens if we can't find qualified witnesses at the hospital?",
      answer: "We can often help coordinate with hospital staff or family friends who meet the requirements. Plan ahead when possible."
    }
  ];

  return (
    <BlogPostTemplate
      title="Witnesses for Wills/POA—Local Norms Explained"
      subtitle="Do you need witnesses for wills or POA? Local norms, who can serve, and how to avoid delays at signing time."
      metaDescription="Do you need witnesses for wills or POA? Local norms, who can serve, and how to avoid delays at signing time."
      publishDate="2025-09-25"
      readTime={5}
      tags={['Estate Docs', 'Witnesses', 'Hospital Notary']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "Do You Need Witnesses? Notary Guide",
        slug: "witness-requirements",
        description: "Understanding when witnesses are required for document signing"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <p>Witness rules vary by form and requesting institution. Typical guidance:</p>

        <h2>Who can serve as witnesses</h2>
        <ul>
          <li>Adults who are disinterested (not beneficiaries)</li>
          <li>Not related by blood or marriage</li>
          <li>With valid ID</li>
          <li>Present for the entire signing and witnessing</li>
        </ul>

        <h2>Local norms</h2>
        <p>We'll share what's common locally and help you plan ahead—especially important for hospital or rehab signings.</p>

        <h2>Planning ahead</h2>
        <p>For bedside signings, coordinate witness availability in advance to avoid delays.</p>

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

export default WitnessesForWillsPOAOhioLocalNorms;