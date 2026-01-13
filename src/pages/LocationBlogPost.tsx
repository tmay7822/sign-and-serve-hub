// LOCATION BLOG POST PAGE
// Dynamic page for location-specific blog posts

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationBlogTemplate from '@/components/templates/LocationBlogTemplate';
import { getLocationPostBySlug } from '@/data/locationBlogPosts';

const LocationBlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
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
