import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  FileText, 
  MapPin, 
  Palette, 
  MessageSquare, 
  Upload,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { BusinessSetupWizard } from './BusinessSetupWizard';
import { ContentManager } from './ContentManager';
import { LocationManager } from './LocationManager';
import { ThemeCustomizer } from './ThemeCustomizer';

// Lazy load BlogManager to prevent TinyMCE crashes
const LazyBlogManager = lazy(() => 
  import('./BlogManager').then(module => ({ default: module.BlogManager }))
);

interface AdminStats {
  setupComplete: boolean;
  contentUpdated: boolean;
  blogPosts: number;
  locations: number;
  lastUpdated: string;
}

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [stats, setStats] = useState<AdminStats>({
    setupComplete: false,
    contentUpdated: false,
    blogPosts: 0,
    locations: 0,
    lastUpdated: 'Never'
  });

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Overview and quick actions',
      icon: Settings,
      component: null
    },
    {
      id: 'business-setup',
      title: 'Business Setup',
      description: 'Configure your business information',
      icon: Settings,
      component: BusinessSetupWizard
    },
    {
      id: 'content',
      title: 'Content Manager',
      description: 'Edit page content and services',
      icon: FileText,
      component: ContentManager
    },
    {
      id: 'blog',
      title: 'Blog Manager',
      description: 'Create and manage blog posts',
      icon: MessageSquare,
      component: LazyBlogManager
    },
    {
      id: 'locations',
      title: 'Locations Manager',
      description: 'Manage service areas and locations',
      icon: MapPin,
      component: LocationManager
    },
    {
      id: 'theme',
      title: 'Theme Customizer',
      description: 'Customize colors and branding',
      icon: Palette,
      component: ThemeCustomizer
    }
  ];

  const getCurrentComponent = () => {
    const item = menuItems.find(item => item.id === currentView);
    if (item?.component) {
      const Component = item.component;
      return <Component onClose={() => setCurrentView('dashboard')} />;
    }
    return null;
  };

  const getStatusBadge = (completed: boolean) => {
    return completed ? (
      <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
        <CheckCircle className="w-3 h-3 mr-1" />
        Complete
      </Badge>
    ) : (
      <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
        <Clock className="w-3 h-3 mr-1" />
        Pending
      </Badge>
    );
  };

  if (currentView !== 'dashboard') {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView('dashboard')}
                >
                  ← Back to Dashboard
                </Button>
                <h1 className="text-2xl font-bold">
                  {menuItems.find(item => item.id === currentView)?.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground">Loading component...</p>
              </div>
            </div>
          }>
            {getCurrentComponent()}
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Manage your white-label notary website without touching code
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview Site
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Config
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Setup Status</p>
                  <div className="mt-2">
                    {getStatusBadge(stats.setupComplete)}
                  </div>
                </div>
                <Settings className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Content</p>
                  <div className="mt-2">
                    {getStatusBadge(stats.contentUpdated)}
                  </div>
                </div>
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Blog Posts</p>
                  <p className="text-2xl font-bold mt-1">{stats.blogPosts}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Locations</p>
                  <p className="text-2xl font-bold mt-1">{stats.locations}</p>
                </div>
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Checklist */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Setup Checklist
            </CardTitle>
            <CardDescription>
              Complete these steps to get your white-label site ready for deployment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Configure Business Information', completed: stats.setupComplete, action: () => setCurrentView('business-setup') },
                { title: 'Customize Content & Services', completed: stats.contentUpdated, action: () => setCurrentView('content') },
                { title: 'Set Up Service Locations', completed: stats.locations > 0, action: () => setCurrentView('locations') },
                { title: 'Customize Theme & Branding', completed: false, action: () => setCurrentView('theme') },
                { title: 'Create Blog Content', completed: stats.blogPosts > 0, action: () => setCurrentView('blog') },
              ].map((step, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-orange-500" />
                    )}
                    <span className={step.completed ? 'text-green-800' : 'text-foreground'}>
                      {step.title}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" onClick={step.action}>
                    {step.completed ? 'Edit' : 'Set Up'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="w-5 h-5" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => setCurrentView(item.id)}
                  >
                    Open {item.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and helpful resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/admin/content-map'}>
                <Download className="w-4 h-4 mr-2" />
                Content Map Export
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/admin/gmb-export'}>
                <FileText className="w-4 h-4 mr-2" />
                GMB Export
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/admin/sitemap'}>
                <Eye className="w-4 h-4 mr-2" />
                View Sitemap
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Logo
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}