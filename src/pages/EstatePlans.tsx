import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const EstatePlans = () => {
  const service = getServiceBySlug('estate-plans');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} showBooking={true} defaultService="estate-plans" />;
};

export default EstatePlans;