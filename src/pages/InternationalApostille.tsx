import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const InternationalApostille = () => {
  const service = getServiceBySlug('international-apostille');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} />;
};

export default InternationalApostille;