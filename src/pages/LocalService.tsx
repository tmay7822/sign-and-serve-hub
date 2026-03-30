// LOCAL SERVICE PAGE
// Dynamic local service page that uses the template

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocalServiceTemplate from '@/components/templates/LocalServiceTemplate';
import { getRouteByPath } from '@/data/locations';

const LocalService: React.FC = () => {
  const { serviceSlug, county, city } = useParams<{ 
    serviceSlug: string; 
    county: string; 
    city?: string; 
  }>();
  
  if (!serviceSlug || !county) {
    return <Navigate to="/" replace />;
  }

  const path = city ? `/${serviceSlug}/${county}/${city}` : `/${serviceSlug}/${county}`;
  const route = getRouteByPath(path);
  
  if (!route) {
    return <Navigate to="/" replace />;
  }

  return <LocalServiceTemplate route={route} />;
};

export default LocalService;
