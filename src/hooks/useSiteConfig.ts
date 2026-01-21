import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { Json } from '@/integrations/supabase/types';

export interface SiteConfigData {
  businessInfo?: {
    businessName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  theme?: {
    selectedTheme: string;
    logoUrl: string;
    colors: Record<string, string>;
  };
  hours?: Record<string, string>;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
  social?: Record<string, string>;
  credentials?: Record<string, boolean>;
}

export function useSiteConfig(tenantId?: string) {
  const [config, setConfig] = useState<SiteConfigData>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchConfig();
  }, [tenantId]);

  const fetchConfig = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('site_config')
        .select('config_key, config_value');
      
      if (tenantId) {
        query = query.eq('tenant_id', tenantId);
      } else {
        query = query.is('tenant_id', null);
      }
      
      const { data, error } = await query;

      if (error) throw error;

      const configMap: SiteConfigData = {};
      data?.forEach((row) => {
        (configMap as Record<string, unknown>)[row.config_key] = row.config_value;
      });

      setConfig(configMap);
    } catch (error) {
      console.error('Error fetching site config:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveConfig = async (key: keyof SiteConfigData, value: unknown) => {
    setSaving(true);
    try {
      // Build the upsert object with proper typing
      const upsertData: {
        config_key: string;
        config_value: Json;
        updated_at: string;
        tenant_id?: string;
      } = {
        config_key: key as string,
        config_value: value as Json,
        updated_at: new Date().toISOString(),
      };
      
      // Only include tenant_id if it's defined
      if (tenantId) {
        upsertData.tenant_id = tenantId;
      }

      const { error } = await supabase
        .from('site_config')
        .upsert(upsertData, {
          onConflict: 'tenant_id,config_key'
        });

      if (error) throw error;

      setConfig(prev => ({ ...prev, [key]: value }));
      
      toast({
        title: 'Saved',
        description: 'Configuration updated successfully.',
      });
    } catch (error) {
      console.error('Error saving config:', error);
      toast({
        title: 'Error',
        description: 'Failed to save configuration.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const saveAllConfig = async (newConfig: Partial<SiteConfigData>) => {
    setSaving(true);
    try {
      const upserts = Object.entries(newConfig).map(([key, value]) => {
        const item: {
          config_key: string;
          config_value: Json;
          updated_at: string;
          tenant_id?: string;
        } = {
          config_key: key,
          config_value: value as Json,
          updated_at: new Date().toISOString(),
        };
        
        if (tenantId) {
          item.tenant_id = tenantId;
        }
        
        return item;
      });

      const { error } = await supabase
        .from('site_config')
        .upsert(upserts, {
          onConflict: 'tenant_id,config_key'
        });

      if (error) throw error;

      setConfig(prev => ({ ...prev, ...newConfig }));
      
      toast({
        title: 'Saved',
        description: 'All configurations updated successfully.',
      });
    } catch (error) {
      console.error('Error saving configs:', error);
      toast({
        title: 'Error',
        description: 'Failed to save configurations.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  return {
    config,
    loading,
    saving,
    fetchConfig,
    saveConfig,
    saveAllConfig,
  };
}
