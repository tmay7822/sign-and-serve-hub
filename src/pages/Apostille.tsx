import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import { Navigate } from 'react-router-dom';

const Apostille = () => {
  const service = getServiceBySlug('apostille');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <ServiceHubEnhanced 
      service={service} 
      showBooking={true} 
      defaultService="apostille"
      bookingServiceName="Apostille"
      relatedGuides={[
        { title: 'How the Apostille Process Works', href: '/blog/how-apostille-works' },
        { title: 'Apostille Processing Times', href: '/blog/apostille-processing-times' },
        { title: 'Apostille for School Documents', href: '/blog/apostille-school-docs' },
      ]}
    />
  );
};

export default Apostille;
