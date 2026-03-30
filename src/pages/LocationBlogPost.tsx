// LOCATION BLOG POST PAGE
// Dynamic page for location-specific blog posts

import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import LocationBlogTemplate from '@/components/templates/LocationBlogTemplate';
import { getLocationPostBySlug } from '@/data/locationBlogPosts';

const LocationBlogPost: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.replace('/blog/', '');
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getLocationPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <LocationBlogTemplate post={post} />;
};

export default LocationBlogPost;
