import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import ServiceSummaryBlock from '@/components/ServiceSummaryBlock';
import { Navigate } from 'react-router-dom';

const EstatePlans = () => {
  const service = getServiceBySlug('estate-plans');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubEnhanced 
    service={service} 
    showBooking={true} 
    defaultService="estate-plans"
    bookingServiceName="Estate Planning"
    quickAnswer={{
      question: "How do I get estate planning documents notarized?",
      answer: "We notarize wills, powers of attorney, healthcare directives, and trust documents. Our mobile notary comes to your location with proper witnesses when required. We verify identity, witness signatures, and make sure documents are properly filled out before notarizing."
    }}
    relatedGuides={[
      { title: 'Wills, Trusts & POA Checklist', href: '/blog/wills-trusts-poa-checklist' },
      { title: 'HCPOA & Living Will Guide', href: '/blog/hcpoa-living-will-guide' },
      { title: 'POA Pitfalls to Avoid', href: '/blog/poa-pitfalls-and-readiness' },
    ]}
    summaryBlock={
      <ServiceSummaryBlock
        text="Need a will, trust, or power of attorney notarized? We come to your home, attorney's office, or care facility. Same-day and evening appointments available."
        buttons={[{ type: 'book' }, { type: 'call', label: 'Call Now' }]}
      />
    }
  />;
};

export default EstatePlans;
