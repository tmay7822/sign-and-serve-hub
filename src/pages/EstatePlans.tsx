import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
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
  />;
};

export default EstatePlans;
