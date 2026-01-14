import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { Link } from 'react-router-dom';

const ImmigrationDocumentsNotaryGuide = () => {
  const faqs = [
    {
      question: "Does the Affidavit of Support (I-864) need to be notarized?",
      answer: "Yes, USCIS requires the I-864 Affidavit of Support to be signed in the presence of a notary public. The sponsor must sign in front of the notary with valid government-issued photo ID."
    },
    {
      question: "Can a notary help with document translation?",
      answer: "A notary cannot translate documents, but we can notarize a translator's affidavit certifying the accuracy of a translation. The translator signs the affidavit in our presence."
    },
    {
      question: "What's the difference between notarization and apostille for immigration?",
      answer: "Notarization verifies the signer's identity. An apostille authenticates the notary's signature for international use. Many immigration documents need notarization first, then apostille for countries in the Hague Convention."
    },
    {
      question: "Can you notarize documents in languages other than English?",
      answer: "Yes, we can notarize foreign language documents. The notary verifies identity and witnesses the signature—we don't need to read the document content. However, the notarial certificate itself will be in English."
    },
    {
      question: "How quickly can immigration documents be notarized?",
      answer: "We offer same-day and next-day mobile notary service throughout Greater Cincinnati and Dayton. For urgent immigration deadlines, call us to arrange immediate service."
    }
  ];

  return (
    <BlogPostTemplate
      title="Immigration Documents Notarization | Complete Ohio Guide"
      subtitle="Expert guidance for notarizing Affidavits of Support, visa applications, citizenship paperwork, and USCIS forms"
      metaDescription="Expert guide to notarizing immigration documents including I-864 Affidavit of Support, visa applications, and citizenship paperwork. Mobile notary service in Ohio."
      publishDate="2025-01-14"
      readTime={10}
      tags={['Immigration', 'Apostille', 'USCIS', 'Citizenship']}
      faqs={faqs}
      showLocationLink={true}
      showTopMiniCTA={true}
      showWhatToDoNext={true}
      showPopularServices={true}
    >
      <h2>Understanding Immigration Document Notarization</h2>
      <p>
        Immigration processes require precise documentation, and many USCIS forms and supporting documents 
        must be properly notarized. As a mobile notary serving Ohio's immigrant communities, we understand 
        the importance of accurate, timely notarization for your immigration journey.
      </p>

      <h2>Affidavit of Support (Form I-864)</h2>
      <p>
        The <strong>I-864 Affidavit of Support</strong> is one of the most commonly notarized immigration documents. 
        This form is required for most family-based immigrant visa applications and some employment-based categories.
      </p>
      
      <h3>I-864 Notarization Requirements</h3>
      <ul>
        <li><strong>Sponsor signature:</strong> Must be signed in the notary's presence</li>
        <li><strong>Valid photo ID:</strong> Current driver's license, passport, or state ID</li>
        <li><strong>Complete form:</strong> All sections must be filled out before notarization</li>
        <li><strong>Joint sponsors:</strong> Each sponsor needs separate notarization</li>
      </ul>

      <h2>Common Immigration Documents We Notarize</h2>
      
      <h3>USCIS Forms</h3>
      <ul>
        <li>Affidavit of Support (I-864, I-864A, I-864EZ)</li>
        <li>Affidavit of Relationship</li>
        <li>Naturalization Application support documents (N-400)</li>
        <li>Employment verification letters</li>
        <li>Financial support declarations</li>
      </ul>

      <h3>Identity & Status Documents</h3>
      <ul>
        <li>Affidavit of Single Status (for marriage abroad)</li>
        <li>Good Conduct Certificate requests</li>
        <li>Name change affidavits</li>
        <li>Birth certificate translation affidavits</li>
        <li>Marriage certificate authentication</li>
      </ul>

      <h3>Supporting Affidavits</h3>
      <ul>
        <li>Affidavit of Financial Support</li>
        <li>Affidavit of Relationship</li>
        <li>Employment verification affidavits</li>
        <li>Residence history affidavits</li>
        <li>Character reference affidavits</li>
      </ul>

      <h2>Apostille Requirements for International Use</h2>
      <p>
        If you're using documents for immigration purposes in a <strong>Hague Convention country</strong>, 
        you'll likely need an apostille after notarization. The process is:
      </p>
      <ol>
        <li>Document notarization (we handle this)</li>
        <li>County certification (if required by Ohio)</li>
        <li>Ohio Secretary of State apostille</li>
        <li>Embassy/consulate legalization (for non-Hague countries)</li>
      </ol>
      
      <p>
        <Link to="/apostille" className="text-primary hover:underline">
          Learn more about our apostille services →
        </Link>
      </p>

      <h2>Translator Affidavits</h2>
      <p>
        Foreign documents submitted to USCIS must be accompanied by certified translations. 
        We notarize <strong>translator affidavits</strong> where the translator certifies:
      </p>
      <ul>
        <li>They are competent in both languages</li>
        <li>The translation is complete and accurate</li>
        <li>They take responsibility for the translation's accuracy</li>
      </ul>

      <h2>What to Bring to Your Appointment</h2>
      <div className="bg-muted/50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">Immigration Notarization Checklist</h3>
        <ul className="space-y-2">
          <li>✓ Valid government-issued photo ID (passport preferred)</li>
          <li>✓ Completed forms (do NOT sign before the appointment)</li>
          <li>✓ Supporting documents in order</li>
          <li>✓ Translator (if affidavit is needed)</li>
          <li>✓ Payment (we accept all major forms)</li>
        </ul>
      </div>

      <h2>Special Considerations</h2>
      
      <h3>Multiple Signers</h3>
      <p>
        If multiple family members need documents notarized, we can handle everyone in a single 
        appointment. Each signer needs their own valid ID.
      </p>

      <h3>Time-Sensitive Deadlines</h3>
      <p>
        Immigration deadlines are strict. We offer <strong>same-day emergency service</strong> for 
        urgent notarization needs. Call us directly if you have an upcoming interview or filing deadline.
      </p>

      <h3>Mobile Service Benefits</h3>
      <p>
        We come to your home, workplace, or any convenient location. This is especially helpful for:
      </p>
      <ul>
        <li>Families with multiple signers</li>
        <li>Elderly relatives who can't travel easily</li>
        <li>Busy professionals with tight schedules</li>
        <li>After-hours notarization needs</li>
      </ul>

      <h2>Service Areas for Immigration Notarization</h2>
      <p>
        We provide mobile immigration document notarization throughout:
      </p>
      <ul>
        <li>Greater Cincinnati and Hamilton County</li>
        <li>Dayton and Montgomery County</li>
        <li>Warren County (Mason, Lebanon)</li>
        <li>Butler County (Hamilton, Fairfield, West Chester)</li>
        <li>Clermont, Greene, Clinton, and Brown counties</li>
      </ul>
    </BlogPostTemplate>
  );
};

export default ImmigrationDocumentsNotaryGuide;
