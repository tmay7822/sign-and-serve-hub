import React from 'react';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { getServiceBySlug } from '@/data/services';

const GeneralNotary: React.FC = () => {
  const service = getServiceBySlug('general-notary');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceHubTemplate service={service} />;
};

export default GeneralNotary;