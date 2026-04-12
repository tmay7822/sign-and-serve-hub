import React from 'react';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import ServiceSummaryBlock from '@/components/ServiceSummaryBlock';
import { getServiceBySlug } from '@/data/services';

const GeneralNotary: React.FC = () => {
  const service = getServiceBySlug('general-notary');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceHubEnhanced 
    service={service} 
    showBooking={true} 
    defaultService="general-notary"
    bookingServiceName="General Notary"
    quickAnswer={{
      question: "What does a mobile notary do?",
      answer: "A mobile notary comes to your location to witness signatures, verify identities, and notarize important documents. We provide convenient, professional notary services at your home, office, or any location in the Cincinnati-Dayton metro area."
    }}
    summaryBlock={
      <ServiceSummaryBlock
        text="Need something notarized today? We come to you — home, office, hospital, or anywhere that works. Same-day appointments available 7 days a week."
        buttons={[{ type: 'book' }, { type: 'call', label: 'Call Now' }]}
      />
    }
  />;
};

export default GeneralNotary;
