// BLOG POST PAGE
// Dynamic blog post page that uses the template

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicBlogPostTemplate from '@/components/templates/DynamicBlogPostTemplate';
import { getPostBySlug } from '@/data/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <DynamicBlogPostTemplate post={post} />;
};

export default BlogPost;