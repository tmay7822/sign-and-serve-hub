import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface BlogPost {
  id: string;
  tenant_id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category?: string;
  service_slug?: string;
  status: 'draft' | 'published' | 'archived';
  publish_date?: string;
  featured: boolean;
  featured_image_url?: string;
  meta_description?: string;
  focus_keyword?: string;
  tags?: string[];
  author?: string;
  created_at: string;
  updated_at: string;
}

export function useBlogPosts(tenantId?: string) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, [tenantId]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (tenantId) {
        query = query.eq('tenant_id', tenantId);
      } else {
        query = query.is('tenant_id', null);
      }

      const { data, error } = await query;

      if (error) throw error;
      setPosts(data as BlogPost[] || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          ...post,
          tenant_id: tenantId ?? null,
        })
        .select()
        .single();

      if (error) throw error;

      setPosts(prev => [data as BlogPost, ...prev]);
      
      toast({
        title: 'Created',
        description: 'Blog post created successfully.',
      });

      return data as BlogPost;
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to create blog post.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const updatePost = async (id: string, updates: Partial<BlogPost>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setPosts(prev => prev.map(p => p.id === id ? data as BlogPost : p));
      
      toast({
        title: 'Saved',
        description: 'Blog post updated successfully.',
      });

      return data as BlogPost;
    } catch (error) {
      console.error('Error updating blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to update blog post.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setPosts(prev => prev.filter(p => p.id !== id));
      
      toast({
        title: 'Deleted',
        description: 'Blog post deleted successfully.',
      });

      return true;
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete blog post.',
        variant: 'destructive',
      });
      return false;
    }
  };

  const publishPost = async (id: string) => {
    return updatePost(id, {
      status: 'published',
      publish_date: new Date().toISOString(),
    });
  };

  return {
    posts,
    loading,
    saving,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    publishPost,
  };
}
