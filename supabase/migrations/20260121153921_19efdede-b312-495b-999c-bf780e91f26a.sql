-- =============================================
-- PHASE 1: Admin Authentication System
-- =============================================

-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy: Admins can view all roles
CREATE POLICY "Admins can view roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can manage roles
CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- =============================================
-- PHASE 2: Database-Backed Admin Tables
-- =============================================

-- Create tenants table (for multi-tenant SaaS)
CREATE TABLE public.tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  subdomain TEXT UNIQUE,
  custom_domain TEXT,
  owner_email TEXT NOT NULL,
  owner_user_id UUID REFERENCES auth.users(id),
  status TEXT DEFAULT 'provisioning' CHECK (status IN ('provisioning', 'trial', 'active', 'suspended', 'cancelled')),
  pricing_tier TEXT CHECK (pricing_tier IN ('starter', 'professional', 'enterprise')),
  ghl_contact_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Tenants: owners can read their own tenant
CREATE POLICY "Owners can view their tenant"
ON public.tenants FOR SELECT
TO authenticated
USING (owner_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Tenants: only admins can create/update
CREATE POLICY "Admins can manage tenants"
ON public.tenants FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create subscriptions table
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_tier TEXT,
  monthly_price DECIMAL(10,2),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'past_due', 'cancelled', 'trialing')),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage subscriptions"
ON public.subscriptions FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create site_config table
CREATE TABLE public.site_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
  config_key TEXT NOT NULL,
  config_value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id),
  UNIQUE (tenant_id, config_key)
);

ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- Site config: public read for active tenants, admin write
CREATE POLICY "Public can read site config"
ON public.site_config FOR SELECT
USING (true);

CREATE POLICY "Admins can manage site config"
ON public.site_config FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  service_slug TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  publish_date TIMESTAMPTZ,
  featured BOOLEAN DEFAULT false,
  featured_image_url TEXT,
  meta_description TEXT,
  focus_keyword TEXT,
  tags TEXT[],
  author TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (tenant_id, slug)
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Blog posts: public read for published, admin for all
CREATE POLICY "Public can read published posts"
ON public.blog_posts FOR SELECT
USING (status = 'published' OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage blog posts"
ON public.blog_posts FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create service_locations table
CREATE TABLE public.service_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
  county TEXT NOT NULL,
  city TEXT NOT NULL,
  zip TEXT NOT NULL,
  state TEXT NOT NULL,
  enabled BOOLEAN DEFAULT true,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('high', 'medium', 'low')),
  custom_content JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.service_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read enabled locations"
ON public.service_locations FOR SELECT
USING (enabled = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage locations"
ON public.service_locations FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
  reviewer_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  service_type TEXT,
  location TEXT,
  review_date DATE,
  source TEXT DEFAULT 'manual',
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read testimonials"
ON public.testimonials FOR SELECT
USING (true);

CREATE POLICY "Admins can manage testimonials"
ON public.testimonials FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create tenant_users table for multi-user access
CREATE TABLE public.tenant_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT DEFAULT 'editor' CHECK (role IN ('owner', 'admin', 'editor')),
  invited_at TIMESTAMPTZ DEFAULT now(),
  accepted_at TIMESTAMPTZ,
  UNIQUE (tenant_id, user_id)
);

ALTER TABLE public.tenant_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their tenant membership"
ON public.tenant_users FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage tenant users"
ON public.tenant_users FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_tenants_updated_at
  BEFORE UPDATE ON public.tenants
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_config_updated_at
  BEFORE UPDATE ON public.site_config
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();