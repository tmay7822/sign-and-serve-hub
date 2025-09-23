// SERVICE HUB PAGE
// Dynamic service hub page that uses the template

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceHubTemplate from '@/components/templates/ServiceHubTemplate';
import { getServiceBySlug } from '@/data/services';

const ServiceHub: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const service = getServiceBySlug(slug);
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubTemplate service={service} />;
};

export default ServiceHub;