import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const BusinessServices = () => {
  const service = getServiceBySlug('business-services');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} showBooking={true} defaultService="business-docs" />;
};

export default BusinessServices;