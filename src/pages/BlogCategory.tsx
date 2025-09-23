// BLOG CATEGORY PAGE
// Dynamic blog category page that uses the template

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogCategoryTemplate from '@/components/templates/BlogCategoryTemplate';
import { getCategoryBySlug } from '@/data/blog';

const BlogCategory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
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