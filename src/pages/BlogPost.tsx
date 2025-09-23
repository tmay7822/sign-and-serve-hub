// BLOG POST PAGE
// Dynamic blog post page that uses the template

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
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

  return <BlogPostTemplate post={post} />;
};

export default BlogPost;