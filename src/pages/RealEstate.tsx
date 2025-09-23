import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const RealEstate = () => {
  const service = getServiceBySlug('real-estate');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} showBooking={true} defaultService="real-estate" />;
};

export default RealEstate;