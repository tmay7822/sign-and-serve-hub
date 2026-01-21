import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface ServiceLocation {
  id: string;
  tenant_id?: string;
  county: string;
  city: string;
  zip: string;
  state: string;
  enabled: boolean;
  priority: 'high' | 'medium' | 'low';
  custom_content?: Record<string, any>;
  created_at: string;
}

export function useLocations(tenantId?: string) {
  const [locations, setLocations] = useState<ServiceLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchLocations();
  }, [tenantId]);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('service_locations')
        .select('*')
        .order('county', { ascending: true })
        .order('city', { ascending: true });

      if (tenantId) {
        query = query.eq('tenant_id', tenantId);
      } else {
        query = query.is('tenant_id', null);
      }

      const { data, error } = await query;

      if (error) throw error;
      setLocations(data as ServiceLocation[] || []);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const addLocation = async (location: Omit<ServiceLocation, 'id' | 'created_at'>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('service_locations')
        .insert({
          ...location,
          tenant_id: tenantId ?? null,
        })
        .select()
        .single();

      if (error) throw error;

      setLocations(prev => [...prev, data as ServiceLocation]);
      
      toast({
        title: 'Added',
        description: 'Location added successfully.',
      });

      return data as ServiceLocation;
    } catch (error) {
      console.error('Error adding location:', error);
      toast({
        title: 'Error',
        description: 'Failed to add location.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const updateLocation = async (id: string, updates: Partial<ServiceLocation>) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('service_locations')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setLocations(prev => prev.map(l => l.id === id ? data as ServiceLocation : l));
      
      toast({
        title: 'Saved',
        description: 'Location updated successfully.',
      });

      return data as ServiceLocation;
    } catch (error) {
      console.error('Error updating location:', error);
      toast({
        title: 'Error',
        description: 'Failed to update location.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const deleteLocation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('service_locations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setLocations(prev => prev.filter(l => l.id !== id));
      
      toast({
        title: 'Deleted',
        description: 'Location removed successfully.',
      });

      return true;
    } catch (error) {
      console.error('Error deleting location:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete location.',
        variant: 'destructive',
      });
      return false;
    }
  };

  const bulkImport = async (newLocations: Omit<ServiceLocation, 'id' | 'created_at'>[]) => {
    setSaving(true);
    try {
      const insertData = newLocations.map(loc => ({
        ...loc,
        tenant_id: tenantId ?? null,
      }));

      const { data, error } = await supabase
        .from('service_locations')
        .insert(insertData)
        .select();

      if (error) throw error;

      setLocations(prev => [...prev, ...(data as ServiceLocation[])]);
      
      toast({
        title: 'Imported',
        description: `${data?.length || 0} locations imported successfully.`,
      });

      return data as ServiceLocation[];
    } catch (error) {
      console.error('Error importing locations:', error);
      toast({
        title: 'Error',
        description: 'Failed to import locations.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const toggleLocation = async (id: string) => {
    const location = locations.find(l => l.id === id);
    if (location) {
      return updateLocation(id, { enabled: !location.enabled });
    }
    return null;
  };

  return {
    locations,
    loading,
    saving,
    fetchLocations,
    addLocation,
    updateLocation,
    deleteLocation,
    bulkImport,
    toggleLocation,
  };
}
