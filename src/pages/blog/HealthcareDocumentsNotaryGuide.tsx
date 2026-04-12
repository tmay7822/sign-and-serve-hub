import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { Link } from 'react-router-dom';
import RelatedServicesSection from '@/components/blog/RelatedServicesSection';

const HealthcareDocumentsNotaryGuide = () => {
  const faqs = [
    {
      question: "Can a DNR order be notarized?",
      answer: "Yes, DNR (Do Not Resuscitate) orders can be notarized in Ohio. The signer must be alert, understand what they're signing, and sign voluntarily in the notary's presence with valid ID."
    },
    {
      question: "What's the difference between a Healthcare POA and Living Will?",
      answer: "A Healthcare Power of Attorney designates someone to make medical decisions for you if you can't. A Living Will specifies your wishes for end-of-life care. Many people have both documents."
    },
    {
      question: "Can you notarize documents at the hospital bedside?",
      answer: "Yes, bedside notarization is one of our specialties. We work with hospital staff to find appropriate times and ensure patient comfort and alertness during signing."
    },
    {
      question: "Does the patient need to be fully conscious?",
      answer: "The signer must be alert and understand what they're signing. They don't need to be fully mobile, but must be able to communicate understanding and sign (or make a mark) voluntarily."
    },
    {
      question: "Can family members serve as witnesses for healthcare documents?",
      answer: "Ohio law may restrict who can witness certain healthcare documents. Generally, beneficiaries and healthcare providers cannot serve as witnesses. We can provide or help arrange qualified witnesses."
    }
  ];

  return (
    <BlogPostTemplate
      title="Healthcare Documents Notarization | Hospital & Medical Forms Guide"
      subtitle="Expert guide to notarizing DNR orders, medical POAs, and healthcare directives—including bedside hospital service"
      metaDescription="Expert guide to healthcare document notarization including DNR orders, medical POAs, and hospital bedside signings. Same-day service in Ohio."
      publishDate="2025-01-14"
      lastUpdated="2026-04-10"
      readTime={9}
      tags={['Healthcare', 'Hospital Notary', 'Medical POA', 'DNR']}
      faqs={faqs}
      showLocationLink={true}
      showTopMiniCTA={true}
      showWhatToDoNext={true}
      showPopularServices={true}
    >
      <h2>Healthcare Document Notarization Services</h2>
      <p>
        Healthcare decisions are deeply personal and critically important. Whether you're planning 
        ahead or facing an urgent medical situation, we provide compassionate, professional 
        notarization for all healthcare-related documents—including bedside service at hospitals 
        and care facilities.
      </p>

      <h2>Healthcare Power of Attorney (HCPOA)</h2>
      <p>
        A <strong>Healthcare Power of Attorney</strong> (also called a Medical POA or Healthcare Proxy) 
        designates a trusted person to make medical decisions on your behalf if you become unable to 
        communicate your wishes.
      </p>

      <h3>Key Elements of HCPOA</h3>
      <ul>
        <li><strong>Principal:</strong> The person granting the power (you)</li>
        <li><strong>Agent:</strong> The person who will make decisions (usually spouse, family member)</li>
        <li><strong>Scope:</strong> All healthcare decisions or limited to specific situations</li>
        <li><strong>Activation:</strong> When the principal cannot communicate</li>
        <li><strong>Witnesses:</strong> Ohio typically requires two witnesses</li>
      </ul>

      <h2>Living Will (Advance Directive)</h2>
      <p>
        A <strong>Living Will</strong> documents your wishes for end-of-life medical care. It typically addresses:
      </p>
      <ul>
        <li>Life-sustaining treatment preferences</li>
        <li>Artificial nutrition and hydration</li>
        <li>Pain management and comfort care</li>
        <li>Organ and tissue donation wishes</li>
        <li>Specific treatment scenarios</li>
      </ul>

      <h2>DNR (Do Not Resuscitate) Orders</h2>
      <p>
        A <strong>DNR order</strong> instructs healthcare providers not to perform CPR if your heart 
        stops or you stop breathing. In Ohio, DNR orders can be:
      </p>
      <ul>
        <li><strong>In-hospital DNR:</strong> Part of your medical record at a facility</li>
        <li><strong>Out-of-hospital DNR:</strong> Portable order recognized by EMS</li>
        <li><strong>POLST form:</strong> Broader medical order set including DNR</li>
      </ul>

      <div className="bg-muted/50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">DNR Notarization Requirements</h3>
        <ul className="space-y-2">
          <li>✓ Patient must be alert and understand the document</li>
          <li>✓ Valid photo ID (or alternative identification)</li>
          <li>✓ Signing must be voluntary (not coerced)</li>
          <li>✓ Patient must be able to sign or make a mark</li>
        </ul>
      </div>

      <h2>Hospital & Bedside Notarization</h2>
      <p>
        We specialize in <strong>bedside notarization</strong> at hospitals, rehabilitation facilities, 
        and nursing homes throughout Greater Cincinnati and Dayton. Our approach prioritizes:
      </p>

      <h3>Patient Comfort & Care</h3>
      <ul>
        <li>Coordinating with nursing staff on optimal timing</li>
        <li>Working around medication schedules and treatments</li>
        <li>Ensuring adequate alertness and understanding</li>
        <li>Keeping visits brief and stress-free</li>
      </ul>

      <h3>What We Handle</h3>
      <ul>
        <li>Healthcare Powers of Attorney</li>
        <li>Living Wills and Advance Directives</li>
        <li>DNR and POLST forms</li>
        <li>Financial POAs (while patient is capable)</li>
        <li>Real estate documents</li>
        <li>Loan signings for hospitalized borrowers</li>
      </ul>
      <p>
        <Link to="/healthcare-notary" className="text-primary hover:underline">
          Learn more about our hospital notary services →
        </Link>
      </p>

      <h2>Senior Care Facility Documents</h2>
      <p>
        We visit assisted living facilities, nursing homes, and memory care units for document notarization. 
        Common documents include:
      </p>
      <ul>
        <li>Admission and consent forms</li>
        <li>Healthcare directive updates</li>
        <li>Financial management documents</li>
        <li>Estate planning document updates</li>
        <li>Property sale documents</li>
      </ul>

      <h2>Mental Health Advance Directives</h2>
      <p>
        A <strong>Psychiatric Advance Directive</strong> allows you to specify your mental health 
        treatment preferences in case of a mental health crisis. These documents can address:
      </p>
      <ul>
        <li>Preferred treatment facilities</li>
        <li>Medication preferences</li>
        <li>ECT (electroconvulsive therapy) wishes</li>
        <li>Designated decision-makers</li>
        <li>Contact and notification preferences</li>
      </ul>

      <h2>Caregiver Authorization Affidavit</h2>
      <p>
        If you're caring for a minor who is not your child, a <strong>Caregiver Authorization Affidavit</strong> 
        allows you to:
      </p>
      <ul>
        <li>Consent to medical and dental care</li>
        <li>Enroll the child in school</li>
        <li>Make educational decisions</li>
        <li>Access medical records</li>
      </ul>

      <h2>Organ Donor Authorization</h2>
      <p>
        While most organ donation registration is done through the BMV or online registry, some situations 
        require notarized authorization, particularly for:
      </p>
      <ul>
        <li>Living organ donation consent</li>
        <li>Directed donation to specific recipients</li>
        <li>Research and tissue donation consent</li>
      </ul>

      <h2>ID Challenges in Healthcare Settings</h2>
      <p>
        Hospital patients sometimes lack valid ID. Ohio law allows alternative identification methods, including:
      </p>
      <ul>
        <li><strong>Credible witness:</strong> Someone who knows the signer and has valid ID</li>
        <li><strong>Knowledge-based authentication:</strong> Personal questions the notary verifies</li>
        <li><strong>Expired ID with other documentation:</strong> In some circumstances</li>
      </ul>
      <p>
        <Link to="/blog/hospital-notary-id-problems-ohio" className="text-primary hover:underline">
          Learn about ID solutions for hospital notarization →
        </Link>
      </p>

      <h2>Witness Requirements</h2>
      <p>
        Many healthcare documents require witnesses in addition to notarization. Important witness rules:
      </p>
      <ul>
        <li>Witnesses must be adults (18+)</li>
        <li>Generally cannot be beneficiaries or heirs</li>
        <li>Healthcare providers often cannot serve as witnesses</li>
        <li>We can provide or help arrange qualified witnesses</li>
      </ul>

      <h2>Service Areas for Healthcare Notarization</h2>
      <p>
        We provide hospital and healthcare facility notarization throughout:
      </p>
      <ul>
        <li><strong>Cincinnati:</strong> UC Medical Center, Christ Hospital, Good Samaritan, Mercy Health</li>
        <li><strong>Dayton:</strong> Miami Valley Hospital, Kettering Health, Dayton VA</li>
        <li><strong>Warren County:</strong> Atrium Medical Center, Bethesda North</li>
        <li><strong>Butler County:</strong> West Chester Hospital, Fairfield Mercy</li>
        <li>Plus all senior care facilities, rehab centers, and hospice locations</li>
      </ul>

      <div className="bg-primary/5 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-3">Urgent Healthcare Notarization</h3>
        <p>
          Medical situations don't wait for business hours. We offer <strong>same-day and emergency 
          healthcare notarization</strong> for urgent situations. Call us directly for immediate 
          scheduling assistance.
        </p>
      </div>

      <RelatedServicesSection 
        services={[
          { slug: 'healthcare-notary', title: 'Hospital Notary Services', description: 'Bedside notarization at hospitals and facilities' },
          { slug: 'estate-plans', title: 'Estate Planning', description: 'POAs, living wills, and advance directives' },
          { slug: 'wills-trusts-estates', title: 'Wills & Estates', description: 'Complete estate document services' },
          { slug: 'documents', title: 'Document Catalog', description: 'Browse all healthcare documents we notarize' }
        ]}
      />
    </BlogPostTemplate>
  );
};

export default HealthcareDocumentsNotaryGuide;
