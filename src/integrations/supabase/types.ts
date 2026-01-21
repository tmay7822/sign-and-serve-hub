export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_chat_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          role: string
          session_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          role: string
          session_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          role?: string
          session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_sessions: {
        Row: {
          created_at: string | null
          id: string
          message_count: number | null
          resulted_in_lead: boolean | null
          service_interest: string | null
          visitor_zip: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message_count?: number | null
          resulted_in_lead?: boolean | null
          service_interest?: string | null
          visitor_zip?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message_count?: number | null
          resulted_in_lead?: boolean | null
          service_interest?: string | null
          visitor_zip?: string | null
        }
        Relationships: []
      }
      ai_leads: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          message: string | null
          name: string | null
          phone: string | null
          service_type: string | null
          session_id: string | null
          status: string | null
          zip_code: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service_type?: string | null
          session_id?: string | null
          status?: string | null
          zip_code?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
          service_type?: string | null
          session_id?: string | null
          status?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_leads_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author: string | null
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured: boolean | null
          featured_image_url: string | null
          focus_keyword: string | null
          id: string
          meta_description: string | null
          publish_date: string | null
          service_slug: string | null
          slug: string
          status: string | null
          tags: string[] | null
          tenant_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featured_image_url?: string | null
          focus_keyword?: string | null
          id?: string
          meta_description?: string | null
          publish_date?: string | null
          service_slug?: string | null
          slug: string
          status?: string | null
          tags?: string[] | null
          tenant_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          featured_image_url?: string | null
          focus_keyword?: string | null
          id?: string
          meta_description?: string | null
          publish_date?: string | null
          service_slug?: string | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          tenant_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      service_locations: {
        Row: {
          city: string
          county: string
          created_at: string | null
          custom_content: Json | null
          enabled: boolean | null
          id: string
          priority: string | null
          state: string
          tenant_id: string | null
          zip: string
        }
        Insert: {
          city: string
          county: string
          created_at?: string | null
          custom_content?: Json | null
          enabled?: boolean | null
          id?: string
          priority?: string | null
          state: string
          tenant_id?: string | null
          zip: string
        }
        Update: {
          city?: string
          county?: string
          created_at?: string | null
          custom_content?: Json | null
          enabled?: boolean | null
          id?: string
          priority?: string | null
          state?: string
          tenant_id?: string | null
          zip?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_locations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      site_config: {
        Row: {
          config_key: string
          config_value: Json
          id: string
          tenant_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          id?: string
          tenant_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          id?: string
          tenant_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_config_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          monthly_price: number | null
          plan_tier: string | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tenant_id: string | null
          trial_ends_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          monthly_price?: number | null
          plan_tier?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id?: string | null
          trial_ends_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          monthly_price?: number | null
          plan_tier?: string | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id?: string | null
          trial_ends_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_users: {
        Row: {
          accepted_at: string | null
          id: string
          invited_at: string | null
          role: string | null
          tenant_id: string
          user_id: string
        }
        Insert: {
          accepted_at?: string | null
          id?: string
          invited_at?: string | null
          role?: string | null
          tenant_id: string
          user_id: string
        }
        Update: {
          accepted_at?: string | null
          id?: string
          invited_at?: string | null
          role?: string | null
          tenant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          business_name: string
          created_at: string | null
          custom_domain: string | null
          ghl_contact_id: string | null
          id: string
          owner_email: string
          owner_user_id: string | null
          pricing_tier: string | null
          status: string | null
          subdomain: string | null
          updated_at: string | null
        }
        Insert: {
          business_name: string
          created_at?: string | null
          custom_domain?: string | null
          ghl_contact_id?: string | null
          id?: string
          owner_email: string
          owner_user_id?: string | null
          pricing_tier?: string | null
          status?: string | null
          subdomain?: string | null
          updated_at?: string | null
        }
        Update: {
          business_name?: string
          created_at?: string | null
          custom_domain?: string | null
          ghl_contact_id?: string | null
          id?: string
          owner_email?: string
          owner_user_id?: string | null
          pricing_tier?: string | null
          status?: string | null
          subdomain?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string | null
          id: string
          location: string | null
          rating: number | null
          review_date: string | null
          review_text: string
          reviewer_name: string
          service_type: string | null
          source: string | null
          tenant_id: string | null
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          location?: string | null
          rating?: number | null
          review_date?: string | null
          review_text: string
          reviewer_name: string
          service_type?: string | null
          source?: string | null
          tenant_id?: string | null
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          location?: string | null
          rating?: number | null
          review_date?: string | null
          review_text?: string
          reviewer_name?: string
          service_type?: string | null
          source?: string | null
          tenant_id?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
