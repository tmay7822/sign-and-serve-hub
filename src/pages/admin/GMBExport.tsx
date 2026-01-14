import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  GMB_BLOG_POSTS, 
  getGMBPostsByCategory, 
  formatForGMB, 
  exportAllPostsAsText,
  exportPostsAsCSV,
  getPostStats,
  type GMBBlogPost 
} from '@/data/gmbBlogPosts';
import { 
  Copy, 
  Download, 
  Check, 
  FileText, 
  MapPin, 
  Calendar, 
  Lightbulb,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

const GMBExport = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const stats = getPostStats();
  
  const copyToClipboard = async (text: string, postId: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(postId);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };
  
  const downloadAsText = () => {
    const content = exportAllPostsAsText();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gmb-blog-posts.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Downloaded GMB posts as text file');
  };
  
  const downloadAsCSV = () => {
    const content = exportPostsAsCSV();
    const blob = new Blob([content], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gmb-blog-posts.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Downloaded GMB posts as CSV');
  };
  
  const filteredPosts = activeCategory === 'all' 
    ? GMB_BLOG_POSTS 
    : getGMBPostsByCategory(activeCategory as GMBBlogPost['category']);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'location': return <MapPin className="h-4 w-4" />;
      case 'service': return <Building2 className="h-4 w-4" />;
      case 'seasonal': return <Calendar className="h-4 w-4" />;
      case 'tips': return <Lightbulb className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'location': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'service': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'seasonal': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'tips': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>GMB Export - Admin | Signed On Time</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            GMB Blog Posts Export
          </h1>
          <p className="text-muted-foreground">
            30 pre-written posts for Google My Business. Copy individual posts or download all.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-primary">{stats.totalPosts}</div>
              <div className="text-sm text-muted-foreground">Total Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-blue-600">{stats.categories.location}</div>
              <div className="text-sm text-muted-foreground">Location</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-600">{stats.categories.service}</div>
              <div className="text-sm text-muted-foreground">Service</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-orange-600">{stats.categories.seasonal}</div>
              <div className="text-sm text-muted-foreground">Seasonal</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                {stats.allValid ? (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600" />
                )}
                <span className="text-sm text-muted-foreground">
                  {stats.allValid ? 'All Valid' : `${stats.invalidPosts} Invalid`}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Export Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button onClick={downloadAsText} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download as Text
          </Button>
          <Button onClick={downloadAsCSV} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download as CSV
          </Button>
          <Button 
            onClick={() => copyToClipboard(exportAllPostsAsText(), -1)}
            variant="outline"
          >
            {copiedId === -1 ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            Copy All Posts
          </Button>
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="all" onValueChange={setActiveCategory}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              All ({GMB_BLOG_POSTS.length})
            </TabsTrigger>
            <TabsTrigger value="location" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Location ({stats.categories.location})
            </TabsTrigger>
            <TabsTrigger value="service" className="flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              Service ({stats.categories.service})
            </TabsTrigger>
            <TabsTrigger value="seasonal" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Seasonal ({stats.categories.seasonal})
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-1">
              <Lightbulb className="h-3 w-3" />
              Tips ({stats.categories.tips})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid gap-6">
              {filteredPosts.map((post) => {
                const formatted = formatForGMB(post);
                return (
                  <Card key={post.id} className={!formatted.isValid ? 'border-red-300' : ''}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getCategoryColor(post.category)}>
                              {getCategoryIcon(post.category)}
                              <span className="ml-1 capitalize">{post.category}</span>
                            </Badge>
                            {post.county && (
                              <Badge variant="outline">{post.county} County</Badge>
                            )}
                            {post.city && (
                              <Badge variant="outline">{post.city}</Badge>
                            )}
                            <Badge 
                              variant={formatted.isValid ? 'secondary' : 'destructive'}
                              className="ml-auto"
                            >
                              {formatted.charCount}/1500 chars
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">
                            #{post.id}: {post.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            CTA: {post.callToAction} → {post.linkedPage}
                          </CardDescription>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(
                            `${post.title}\n\n${post.content}\n\n${post.callToAction}: ${post.ctaLink}`,
                            post.id
                          )}
                        >
                          {copiedId === post.id ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-48 rounded-md border p-4 bg-muted/30">
                        <pre className="text-sm whitespace-pre-wrap font-sans">
                          {post.content}
                        </pre>
                      </ScrollArea>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">
                          Link: <a href={post.ctaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{post.ctaLink}</a>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(post.content, post.id + 1000)}
                        >
                          {copiedId === post.id + 1000 ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy Content Only
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Usage Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Use These Posts</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ol className="space-y-2">
              <li><strong>Log in to Google My Business</strong> at business.google.com</li>
              <li>Navigate to <strong>Posts</strong> in the left sidebar</li>
              <li>Click <strong>Create post</strong></li>
              <li>Select <strong>"Add update"</strong> post type</li>
              <li><strong>Copy</strong> the post content from above</li>
              <li>Add the <strong>CTA button</strong> with the provided link</li>
              <li>Add a relevant <strong>photo</strong> (use your service photos)</li>
              <li><strong>Publish</strong> or schedule for later</li>
            </ol>
            <p className="mt-4 text-muted-foreground">
              <strong>Tip:</strong> GMB posts expire after 7 days. Schedule posts regularly to maintain visibility.
              Post 2-3 times per week for best results.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GMBExport;
