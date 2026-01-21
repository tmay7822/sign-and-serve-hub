import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Testimonial {
  id: string;
  tenant_id?: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  service_type?: string;
  location?: string;
  review_date?: string;
  source: string;
  verified: boolean;
  created_at: string;
}

export function useTestimonials(tenantId?: string) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, [tenantId]);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (tenantId) {
        query = query.eq('tenant_id', tenantId);
      } else {
        query = query.is('tenant_id', null);
      }

      const { data, error } = await query;

      if (error) throw error;
      setTestimonials(data as Testimonial[] || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTestimonial = async (testimonial: Omit<Testimonial, 'id' | 'created_at'>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .insert({
          ...testimonial,
          tenant_id: tenantId ?? null,
        })
        .select()
        .single();

      if (error) throw error;

      setTestimonials(prev => [data as Testimonial, ...prev]);
      
      toast({
        title: 'Added',
        description: 'Testimonial added successfully.',
      });

      return data as Testimonial;
    } catch (error) {
      console.error('Error adding testimonial:', error);
      toast({
        title: 'Error',
        description: 'Failed to add testimonial.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const updateTestimonial = async (id: string, updates: Partial<Testimonial>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setTestimonials(prev => prev.map(t => t.id === id ? data as Testimonial : t));
      
      toast({
        title: 'Saved',
        description: 'Testimonial updated successfully.',
      });

      return data as Testimonial;
    } catch (error) {
      console.error('Error updating testimonial:', error);
      toast({
        title: 'Error',
        description: 'Failed to update testimonial.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTestimonials(prev => prev.filter(t => t.id !== id));
      
      toast({
        title: 'Deleted',
        description: 'Testimonial removed successfully.',
      });

      return true;
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete testimonial.',
        variant: 'destructive',
      });
      return false;
    }
  };

  return {
    testimonials,
    loading,
    saving,
    fetchTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
  };
}
