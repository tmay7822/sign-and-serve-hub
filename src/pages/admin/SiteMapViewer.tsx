import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { PRERENDER_ROUTES } from '@/config/prerenderRoutes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Printer, 
  Download, 
  Copy, 
  Home,
  FileText,
  MapPin,
  BookOpen,
  Calendar,
  Building,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface RouteCategory {
  name: string;
  icon: React.ReactNode;
  routes: string[];
  subcategories?: { name: string; routes: string[] }[];
}

const categorizeRoutes = (routes: string[]): RouteCategory[] => {
  const categories: RouteCategory[] = [
    {
      name: 'Homepage',
      icon: <Home className="h-4 w-4" />,
      routes: routes.filter(r => r === '/')
    },
    {
      name: 'Service Hubs',
      icon: <Building className="h-4 w-4" />,
      routes: routes.filter(r => 
        ['/general-notary', '/loan-signings', '/estate-plans', '/real-estate', '/apostille', 
         '/business-services', '/college-18-plus', '/personal-family', '/healthcare-notary',
         '/real-estate-notary', '/business-banking', '/legal-court', '/international-apostille',
         '/vehicles-dmv', '/insurance-retirement', '/wills-trusts-estates', '/other-notary'].includes(r)
      )
    },
    {
      name: 'Static Pages',
      icon: <FileText className="h-4 w-4" />,
      routes: routes.filter(r => 
        ['/faq', '/about', '/contact', '/pricing', '/documents', '/service-areas', 
         '/book-now', '/privacy-policy', '/terms-of-service'].includes(r)
      )
    },
    {
      name: 'Seasonal Landing Pages',
      icon: <Calendar className="h-4 w-4" />,
      routes: routes.filter(r => 
        ['/tax-season-notary', '/back-to-school-documents', '/home-buying-season-notary', 
         '/year-end-planning-notary'].includes(r)
      )
    },
    {
      name: 'Blog',
      icon: <BookOpen className="h-4 w-4" />,
      routes: [],
      subcategories: [
        { name: 'Blog Home & Categories', routes: routes.filter(r => r === '/blog' || (r.startsWith('/blog/') && r.endsWith('-guides') && !r.includes('ohio'))) },
        { name: 'Individual Posts', routes: routes.filter(r => r.startsWith('/blog/') && !r.endsWith('-guides') && !r.includes('-county-ohio') && !r.includes('-city-ohio') && !r.match(/-ohio$/)) },
        { name: 'County Blog Posts', routes: routes.filter(r => r.startsWith('/blog/') && r.includes('-county-ohio')) },
        { name: 'City Blog Posts', routes: routes.filter(r => r.startsWith('/blog/') && r.includes('-ohio') && !r.includes('-county-ohio')) },
      ]
    },
    {
      name: 'Service Areas',
      icon: <MapPin className="h-4 w-4" />,
      routes: [],
      subcategories: [
        { name: 'County Landing Pages', routes: routes.filter(r => r.startsWith('/service/') && !r.includes('/service/') || (r.match(/^\/service\/[a-z-]+-county$/) !== null)) },
        { name: 'Hamilton County Cities', routes: routes.filter(r => r.startsWith('/service/hamilton-county/')) },
        { name: 'Warren County Cities', routes: routes.filter(r => r.startsWith('/service/warren-county/')) },
        { name: 'Butler County Cities', routes: routes.filter(r => r.startsWith('/service/butler-county/')) },
        { name: 'Montgomery County Cities', routes: routes.filter(r => r.startsWith('/service/montgomery-county/')) },
        { name: 'Greene County Cities', routes: routes.filter(r => r.startsWith('/service/greene-county/')) },
        { name: 'Clinton County Cities', routes: routes.filter(r => r.startsWith('/service/clinton-county/')) },
        { name: 'Clermont County Cities', routes: routes.filter(r => r.startsWith('/service/clermont-county/')) },
        { name: 'Brown County Cities', routes: routes.filter(r => r.startsWith('/service/brown-county/')) },
        { name: 'Miami County Cities', routes: routes.filter(r => r.startsWith('/service/miami-county/')) },
      ]
    },
    {
      name: 'Legacy Location Pages',
      icon: <MapPin className="h-4 w-4" />,
      routes: routes.filter(r => r.startsWith('/notary-') || r.startsWith('/general-notary-') || r.startsWith('/loan-signing-') || r.startsWith('/poa-') || r.startsWith('/wills-'))
    }
  ];

  return categories;
};

const RouteItem = ({ route }: { route: string }) => (
  <div className="flex items-center gap-2 py-1 text-sm hover:bg-muted/50 px-2 rounded group">
    <span className="text-muted-foreground font-mono text-xs flex-1">{route}</span>
    <Link 
      to={route} 
      target="_blank"
      className="opacity-0 group-hover:opacity-100 text-xs text-primary hover:underline"
    >
      Open →
    </Link>
  </div>
);

const CategorySection = ({ 
  category, 
  searchQuery, 
  defaultOpen = false 
}: { 
  category: RouteCategory; 
  searchQuery: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const filteredRoutes = category.routes.filter(r => 
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSubcategories = category.subcategories?.map(sub => ({
    ...sub,
    routes: sub.routes.filter(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(sub => sub.routes.length > 0);

  const totalCount = category.subcategories 
    ? category.subcategories.reduce((sum, sub) => sum + sub.routes.length, 0)
    : category.routes.length;

  const filteredCount = filteredSubcategories 
    ? filteredSubcategories.reduce((sum, sub) => sum + sub.routes.length, 0)
    : filteredRoutes.length;

  if (filteredCount === 0 && searchQuery) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-lg print:border-none">
      <CollapsibleTrigger className="flex items-center gap-2 w-full p-4 hover:bg-muted/50 print:p-2">
        {isOpen ? <ChevronDown className="h-4 w-4 print:hidden" /> : <ChevronRight className="h-4 w-4 print:hidden" />}
        {category.icon}
        <span className="font-semibold flex-1 text-left">{category.name}</span>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded">
          {searchQuery ? `${filteredCount}/${totalCount}` : totalCount}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 print:block print:px-2">
        {category.subcategories ? (
          <div className="space-y-3">
            {(filteredSubcategories || category.subcategories).map(sub => (
              <SubcategorySection key={sub.name} subcategory={sub} searchQuery={searchQuery} />
            ))}
          </div>
        ) : (
          <div className="pl-6 border-l-2 border-muted">
            {filteredRoutes.map(route => (
              <RouteItem key={route} route={route} />
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

const SubcategorySection = ({ 
  subcategory, 
  searchQuery 
}: { 
  subcategory: { name: string; routes: string[] }; 
  searchQuery: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filteredRoutes = subcategory.routes.filter(r => 
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredRoutes.length === 0) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="print:block">
      <CollapsibleTrigger className="flex items-center gap-2 w-full py-2 px-2 hover:bg-muted/30 rounded print:py-1">
        {isOpen ? <ChevronDown className="h-3 w-3 print:hidden" /> : <ChevronRight className="h-3 w-3 print:hidden" />}
        <span className="text-sm flex-1 text-left">{subcategory.name}</span>
        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
          {filteredRoutes.length}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-6 border-l border-muted ml-1.5 print:block print:pl-4">
        {filteredRoutes.map(route => (
          <RouteItem key={route} route={route} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default function SiteMapViewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const categories = useMemo(() => categorizeRoutes(PRERENDER_ROUTES), []);

  const stats = useMemo(() => {
    const blogRoutes = PRERENDER_ROUTES.filter(r => r.startsWith('/blog'));
    const serviceRoutes = PRERENDER_ROUTES.filter(r => r.startsWith('/service/'));
    const locationRoutes = PRERENDER_ROUTES.filter(r => 
      r.startsWith('/notary-') || r.startsWith('/general-notary-') || 
      r.startsWith('/loan-signing-') || r.startsWith('/poa-') || r.startsWith('/wills-')
    );

    return {
      total: PRERENDER_ROUTES.length,
      blog: blogRoutes.length,
      service: serviceRoutes.length,
      location: locationRoutes.length,
      other: PRERENDER_ROUTES.length - blogRoutes.length - serviceRoutes.length - locationRoutes.length
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = async () => {
    await navigator.clipboard.writeText(PRERENDER_ROUTES.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportCSV = () => {
    const csv = 'URL,Category\n' + PRERENDER_ROUTES.map(route => {
      let category = 'Other';
      if (route === '/') category = 'Homepage';
      else if (route.startsWith('/blog')) category = 'Blog';
      else if (route.startsWith('/service/')) category = 'Service Area';
      else if (route.startsWith('/notary-')) category = 'Location';
      return `"${route}","${category}"`;
    }).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap-routes.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl print:py-2 print:px-0">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Header - hidden in print */}
      <div className="print:hidden mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Site Map Viewer</h1>
            <p className="text-muted-foreground">Complete structure of {stats.total} pages</p>
          </div>
          <Link to="/admin">
            <Button variant="outline">← Back to Admin</Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Total Pages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.blog}</div>
              <div className="text-xs text-muted-foreground">Blog Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.service}</div>
              <div className="text-xs text-muted-foreground">Service Areas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.location}</div>
              <div className="text-xs text-muted-foreground">Location Pages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.other}</div>
              <div className="text-xs text-muted-foreground">Static Pages</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" onClick={handleCopyAll}>
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy All'}
            </Button>
            <Button variant="outline" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </div>
        </div>
      </div>

      {/* Print Header */}
      <div className="hidden print:block mb-4">
        <h1 className="text-2xl font-bold">Sign & Serve Hub - Complete Site Map</h1>
        <p className="text-sm text-gray-600">{stats.total} pages | Printed {new Date().toLocaleDateString()}</p>
      </div>

      {/* Route Categories */}
      <div className="space-y-4 print:space-y-2">
        {categories.map(category => (
          <CategorySection 
            key={category.name} 
            category={category} 
            searchQuery={searchQuery}
            defaultOpen={category.name === 'Homepage'}
          />
        ))}
      </div>

      {/* Print Footer */}
      <div className="hidden print:block mt-8 pt-4 border-t text-xs text-gray-500">
        Generated from Sign & Serve Hub | {new Date().toLocaleString()}
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { font-size: 10px !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          [data-state="closed"] > [data-radix-collapsible-content] { display: block !important; height: auto !important; }
          @page { margin: 0.5in; }
        }
      `}</style>
    </div>
  );
}
