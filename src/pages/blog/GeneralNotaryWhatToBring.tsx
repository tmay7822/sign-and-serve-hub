import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { BUSINESS_CONFIG } from '@/config/business';

const GeneralNotaryWhatToBring = () => {
  const faqs = [
    {
      question: "What if my ID has a different address than what's on the document?",
      answer: "Address differences are usually okay as long as the name matches exactly. The important part is name consistency between ID and document."
    },
    {
      question: "Can I bring a photocopy of my ID instead of the original?",
      answer: "No, we need to see the original, valid photo ID. Photocopies, expired IDs, or screenshots are not acceptable for notarization."
    }
  ];

  return (
    <BlogPostTemplate
      title="What to Bring to a Notarization"
      subtitle="Getting a document notarized is simple when you know what to bring. Use this short checklist to save time and avoid re-signs."
      metaDescription="A quick checklist for a smooth notarization—IDs, witnesses, signatures, and common mistakes to avoid."
      publishDate="2024-01-08"
      lastUpdated="2026-02-05"
      readTime={3}
      tags={['General Notary', 'Preparation']}
      faqs={faqs}
      showLocationLink={true}
      relatedPost={{
        title: "What a Notary Cannot Do (and Why It Matters)",
        slug: "what-notaries-cannot-do", 
        description: "Understanding notary boundaries and limitations"
      }}
    >
      <article className="prose prose-lg max-w-none">
        <h2>Your quick checklist</h2>
        <ul>
          <li><strong>Valid photo ID:</strong> driver's license, passport, or state ID. Must be current and legible.</li>
          <li><strong>Completed—but unsigned—document:</strong> never sign before you meet the notary.</li>
          <li><strong>Names must match:</strong> the name on the ID should match the name on the document.</li>
          <li><strong>All signers present:</strong> every signer must appear in person.</li>
          <li><strong>Witnesses (if required):</strong> some forms need 1–2 disinterested witnesses. Ask us if you need help coordinating.</li>
        </ul>

        <h2>Common documents we notarize in {BUSINESS_CONFIG.serviceArea.primary}</h2>
        <ul>
          <li>Affidavits and sworn statements</li>
          <li>Power of Attorney (POA)</li>
          <li>Deeds and real estate forms</li>
          <li>School and medical releases</li>
          <li>Consent to travel letters</li>
        </ul>

        <h2>Tips from {BUSINESS_CONFIG.name}</h2>
        <ul>
          <li>Bring a <strong>backup ID</strong> if your primary is worn or recently renewed.</li>
          <li>If you're unsure about witnesses, <strong>ask before the appointment</strong>.</li>
          <li>Have a simple plan for where we'll meet: home, office, hospital, or a public location.</li>
        </ul>
      </article>
    </BlogPostTemplate>
  );
};

export default GeneralNotaryWhatToBring;