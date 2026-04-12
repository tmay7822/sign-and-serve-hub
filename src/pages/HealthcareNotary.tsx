import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import ServiceSummaryBlock from '@/components/ServiceSummaryBlock';
import { Navigate } from 'react-router-dom';

const HealthcareNotary = () => {
  const service = getServiceBySlug('healthcare-notary');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <ServiceHubEnhanced
      service={service}
      bookingServiceName="Healthcare Document"
      summaryBlock={
        <ServiceSummaryBlock
          text="We can be there today. Call or text (513) 226-9052 and we will come to your hospital, nursing home, or care facility anywhere in Southwest Ohio."
          buttons={[{ type: 'call' }]}
        />
      }
    />
  );
};

export default HealthcareNotary;
