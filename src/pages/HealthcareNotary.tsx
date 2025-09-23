import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const HealthcareNotary = () => {
  const service = getServiceBySlug('healthcare-notary');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} />;
};

export default HealthcareNotary;