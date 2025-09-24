import { useEffect } from 'react';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const WitnessRequirements = () => {
  useEffect(() => {
    document.title = `Document Witness Requirements | ${BUSINESS_CONFIG.name}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'When witnesses are required, who can qualify, and how we help arrange them.');
    }
  }, []);

  return (
    <BlogPostTemplate
      title="Do You Need Witnesses? Notary Guide"
      subtitle="Some forms need one or two disinterested witnesses."
      defaultService="wills-trusts-estates"
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