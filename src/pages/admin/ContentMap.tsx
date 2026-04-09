import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Download,
  FileText,
  Link2,
  MapPin,
  Search,
  Copy,
  Check,
  FileJson,
  FileSpreadsheet,
  Printer,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Network
} from 'lucide-react';
import { toast } from 'sonner';
import {
  getAllPageData,
  buildLinkGraph,
  findOrphanPages,
  findHubPages,
  generateFullCSV,
  generateLinkMapCSV,
  generateFullJSON,
  generateSiteDiagram,
  getRouteStats,
  type PageData
} from '@/utils/contentMapping';

const ContentMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Memoized data
  const pages = useMemo(() => getAllPageData(), []);
  const stats = useMemo(() => getRouteStats(), []);
  const orphanPages = useMemo(() => findOrphanPages(), []);
  const hubPages = useMemo(() => findHubPages(10), []);
  const linkGraph = useMemo(() => buildLinkGraph(), []);
  const mermaidDiagram = useMemo(() => generateSiteDiagram(), []);

  // Get unique page types for filter
  const pageTypes = useMemo(() => {
    const types = new Set(pages.map(p => p.pageType));
    return Array.from(types).sort();
  }, [pages]);

  // Filtered pages
  const filteredPages = useMemo(() => {
    return pages.filter(page => {
      const matchesSearch = searchQuery === '' || 
        page.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (page.county?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (page.city?.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = typeFilter === 'all' || page.pageType === typeFilter;
      
      return matchesSearch && matchesType;
    });
  }, [pages, searchQuery, typeFilter]);

  // Copy to clipboard
  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Download functions
  const downloadCSV = () => {
    const csv = generateFullCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `site-content-map-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CSV downloaded!');
  };

  const downloadLinkMapCSV = () => {
    const csv = generateLinkMapCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `site-link-map-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Link map CSV downloaded!');
  };

  const downloadJSON = () => {
    const json = generateFullJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `site-content-map-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('JSON downloaded!');
  };

  const printPage = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Content Map & Export</h1>
            <p className="text-muted-foreground">
              Complete site architecture with {stats.total} pages and {stats.totalConnections} connections
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={downloadCSV} variant="outline" size="sm">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Full CSV
            </Button>
            <Button onClick={downloadLinkMapCSV} variant="outline" size="sm">
              <Link2 className="w-4 h-4 mr-2" />
              Link Map CSV
            </Button>
            <Button onClick={downloadJSON} variant="outline" size="sm">
              <FileJson className="w-4 h-4 mr-2" />
              JSON
            </Button>
            <Button onClick={printPage} variant="outline" size="sm">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Pages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{stats.serviceHubs}</div>
              <div className="text-sm text-muted-foreground">Service Hubs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{stats.blogPosts}</div>
              <div className="text-sm text-muted-foreground">Blog Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{stats.serviceLandings}</div>
              <div className="text-sm text-muted-foreground">Location Pages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{stats.totalConnections}</div>
              <div className="text-sm text-muted-foreground">Internal Links</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-500">{stats.orphanCount}</div>
              <div className="text-sm text-muted-foreground">Orphan Pages</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pages" className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="pages" className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              All Pages
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-1">
              <Link2 className="w-4 h-4" />
              Link Map
            </TabsTrigger>
            <TabsTrigger value="orphans" className="flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" />
              Orphans ({orphanPages.length})
            </TabsTrigger>
            <TabsTrigger value="hubs" className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Hub Pages
            </TabsTrigger>
            <TabsTrigger value="diagram" className="flex items-center gap-1">
              <Network className="w-4 h-4" />
              Diagram
            </TabsTrigger>
            <TabsTrigger value="breakdown" className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              Breakdown
            </TabsTrigger>
          </TabsList>

          {/* All Pages Tab */}
          <TabsContent value="pages" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by URL, title, city, or county..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {pageTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardContent className="p-0">
                <ScrollArea className="h-[600px]">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background">
                      <TableRow>
                        <TableHead className="w-[300px]">URL</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-center">FAQs</TableHead>
                        <TableHead className="text-center">Links Out</TableHead>
                        <TableHead className="text-center">Links In</TableHead>
                        <TableHead>Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPages.map((page) => (
                        <TableRow key={page.url}>
                          <TableCell className="font-mono text-xs">
                            <div className="flex items-center gap-2">
                              <span className="truncate max-w-[250px]">{page.url}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => copyToClipboard(page.url, page.url)}
                              >
                                {copiedField === page.url ? (
                                  <Check className="w-3 h-3 text-green-500" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {page.pageType}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {page.title}
                          </TableCell>
                          <TableCell>
                            {page.county || page.city ? (
                              <div className="flex items-center gap-1 text-xs">
                                <MapPin className="w-3 h-3" />
                                {page.city && <span>{page.city}</span>}
                                {page.county && <span className="text-muted-foreground">{page.county}</span>}
                                {page.zip && <span className="text-muted-foreground">({page.zip})</span>}
                              </div>
                            ) : '—'}
                          </TableCell>
                          <TableCell className="text-center">
                            {page.faqCount > 0 ? page.faqCount : '—'}
                          </TableCell>
                          <TableCell className="text-center">
                            {page.linksTo.length > 0 ? page.linksTo.length : '—'}
                          </TableCell>
                          <TableCell className="text-center">
                            {page.linkedFrom.length > 0 ? page.linkedFrom.length : '—'}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={page.priority === 'high' ? 'default' : page.priority === 'medium' ? 'secondary' : 'outline'}
                            >
                              {page.priority}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              Showing {filteredPages.length} of {pages.length} pages
            </p>
          </TabsContent>

          {/* Link Map Tab */}
          <TabsContent value="links" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Internal Link Connections</CardTitle>
                <CardDescription>
                  {linkGraph.length} connections between pages
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[500px]">
                  <Table>
                    <TableHeader className="sticky top-0 bg-background">
                      <TableRow>
                        <TableHead>Source URL</TableHead>
                        <TableHead>Target URL</TableHead>
                        <TableHead>Link Type</TableHead>
                        <TableHead>Context</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {linkGraph.slice(0, 200).map((link, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-mono text-xs truncate max-w-[200px]">
                            {link.sourceUrl}
                          </TableCell>
                          <TableCell className="font-mono text-xs truncate max-w-[200px]">
                            {link.targetUrl}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {link.linkType}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {link.context}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
            {linkGraph.length > 200 && (
              <p className="text-sm text-muted-foreground">
                Showing first 200 of {linkGraph.length} connections. Download CSV for full list.
              </p>
            )}
          </TabsContent>

          {/* Orphan Pages Tab */}
          <TabsContent value="orphans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Orphan Pages (No Inbound Links)
                </CardTitle>
                <CardDescription>
                  These pages have no other pages linking to them. Consider adding internal links.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orphanPages.length === 0 ? (
                  <p className="text-green-600">No orphan pages found! All pages have inbound links.</p>
                ) : (
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {orphanPages.map((url) => (
                        <div key={url} className="flex items-center justify-between p-2 border rounded">
                          <code className="text-sm">{url}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(url, `orphan-${url}`)}
                          >
                            {copiedField === `orphan-${url}` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hub Pages Tab */}
          <TabsContent value="hubs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Top Hub Pages (Most Connected)
                </CardTitle>
                <CardDescription>
                  Pages with the most inbound and outbound links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60px]">#</TableHead>
                      <TableHead>URL</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="text-center">Links Out</TableHead>
                      <TableHead className="text-center">Links In</TableHead>
                      <TableHead className="text-center">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hubPages.map((page, i) => (
                      <TableRow key={page.url}>
                        <TableCell className="font-bold">{i + 1}</TableCell>
                        <TableCell className="font-mono text-xs">{page.url}</TableCell>
                        <TableCell>{page.title}</TableCell>
                        <TableCell className="text-center">{page.linksTo.length}</TableCell>
                        <TableCell className="text-center">{page.linkedFrom.length}</TableCell>
                        <TableCell className="text-center font-bold">
                          {page.linksTo.length + page.linkedFrom.length}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diagram Tab */}
          <TabsContent value="diagram" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  Site Architecture Diagram (Mermaid)
                </CardTitle>
                <CardDescription>
                  Copy this code into a Mermaid renderer to visualize the site structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{mermaidDiagram}</code>
                  </pre>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(mermaidDiagram, 'mermaid')}
                  >
                    {copiedField === 'mermaid' ? (
                      <>
                        <Check className="w-4 h-4 mr-1 text-green-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Breakdown Tab */}
          <TabsContent value="breakdown" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pages by Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(stats.byType).sort((a, b) => b[1] - a[1]).map(([type, count]) => (
                      <div key={type} className="flex items-center justify-between">
                        <span>{type}</span>
                        <div className="flex items-center gap-2">
                          <div
                            className="bg-primary h-2 rounded"
                            style={{ width: `${(count / stats.total) * 200}px` }}
                          />
                          <span className="font-mono text-sm w-12 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Total FAQs Across Site</span>
                      <span className="font-bold">{stats.totalFaqs}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Documents in Library</span>
                      <span className="font-bold">{stats.totalDocuments}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Document Categories</span>
                      <span className="font-bold">{stats.documentCategories}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Blog Categories</span>
                      <span className="font-bold">{stats.blogCategories}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Location Blog Posts</span>
                      <span className="font-bold">{stats.locationBlogs}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Seasonal Pages</span>
                      <span className="font-bold">{stats.seasonal}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentMap;
