import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const InsuranceRetirement = () => {
  const service = getServiceBySlug('insurance-retirement');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} />;
};

export default InsuranceRetirement;