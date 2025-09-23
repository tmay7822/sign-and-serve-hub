// Legacy Blog Redirect
// Redirects old blog page to new blog architecture

import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    // Redirect to new blog home
    window.location.replace('/blog');
  }, []);

  return <Navigate to="/blog" replace />;
};

export default Blog;