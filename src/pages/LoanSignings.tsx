import { getServiceBySlug } from '@/data/services';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { Navigate } from 'react-router-dom';

const LoanSignings = () => {
  const service = getServiceBySlug('loan-signings');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} showBooking={true} defaultService="loan-signings" />;
};

export default LoanSignings;