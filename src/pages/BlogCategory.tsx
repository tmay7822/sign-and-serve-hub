// BLOG CATEGORY PAGE
// Dynamic blog category page that uses the template

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import BlogCategoryTemplate from '@/components/templates/BlogCategoryTemplate';
import { getCategoryBySlug } from '@/data/blog';

const BlogCategory: React.FC = () => {
  const location = useLocation();
  
  // Extract slug from pathname (e.g., /blog/general-notary-guides -> general-notary-guides)
  const pathParts = location.pathname.split('/');
  const slug = pathParts[pathParts.length - 1];
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogCategoryTemplate category={category} />;
};

export default BlogCategory;
