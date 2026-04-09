import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import { Navigate } from 'react-router-dom';

const VehiclesDMV = () => {
  const service = getServiceBySlug('vehicles-dmv');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <ServiceHubEnhanced 
      service={service} 
      quickAnswer={{
        question: "Do I need a notary for a car title transfer in Ohio?",
        answer: "Yes, Ohio requires the seller's signature on the vehicle title to be notarized. The buyer's signature typically does not need notarization. We provide mobile notary service and can meet you at your home, office, or even the parking lot where the vehicle is located."
      }}
      relatedGuides={[
        { title: 'Ohio Car Title Transfer Guide', href: '/blog/ohio-car-title-transfer-requirements' },
        { title: 'Title Transfer Checklist', href: '/blog/title-transfer-checklist' },
      ]}
    />
  );
};

export default VehiclesDMV;
