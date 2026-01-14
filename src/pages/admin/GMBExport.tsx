import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  GMB_BLOG_POSTS, 
  GMB_POSTING_CALENDAR,
  getGMBPostsByCategory, 
  formatForGMB, 
  exportAllPostsAsText,
  exportPostsAsCSV,
  getPostStats,
  getPostsGroupedByWeek,
  exportCalendarAsCSV,
  exportCalendarAsICS,
  getCalendarStats,
  type GMBBlogPost 
} from '@/data/gmbBlogPosts';
import {
  GMB_FAQS,
  getFAQStats,
  getCategoryLabel,
  exportFAQsAsText,
  exportFAQsAsCSV
} from '@/data/gmbFAQs';
import {
  GMB_SERVICE_AREAS,
  getServiceAreaStats,
  getCountyStats,
  exportServiceAreasAsText,
  exportCitiesAsList,
  exportZipCodesAsList,
  exportServiceAreasAsCSV,
  exportForDirectoryBulkUpload
} from '@/data/gmbServiceAreas';
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
  AlertCircle,
  HelpCircle,
  Map,
  CalendarDays,
  Building
} from 'lucide-react';
import { toast } from 'sonner';

const GMBExport = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activePostCategory, setActivePostCategory] = useState<string>('all');
  const [activeFAQCategory, setActiveFAQCategory] = useState<string>('all');
  const [activeCalendarWeek, setActiveCalendarWeek] = useState<number | 'all'>('all');
  
  const stats = getPostStats();
  const faqStats = getFAQStats();
  const serviceAreaStats = getServiceAreaStats();
  const calendarStats = getCalendarStats();
  const postsGroupedByWeek = getPostsGroupedByWeek();
  const countyStats = getCountyStats();
  
  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };
  
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };
  
  const filteredPosts = activePostCategory === 'all' 
    ? GMB_BLOG_POSTS 
    : getGMBPostsByCategory(activePostCategory as GMBBlogPost['category']);

  const filteredFAQs = activeFAQCategory === 'all'
    ? GMB_FAQS
    : GMB_FAQS.filter(faq => faq.category === activeFAQCategory);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'location': return <MapPin className="h-4 w-4" />;
      case 'major-city': return <Building className="h-4 w-4" />;
      case 'service': return <Building2 className="h-4 w-4" />;
      case 'seasonal': return <Calendar className="h-4 w-4" />;
      case 'tips': return <Lightbulb className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'location': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'major-city': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'service': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'seasonal': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'tips': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>GMB Content Export - Admin | Signed On Time</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            GMB Content Export
          </h1>
          <p className="text-muted-foreground">
            Pre-written content for Google My Business posts, FAQs, and service areas.
          </p>
        </div>
        
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Blog Posts</span>
              <span className="sm:hidden">Posts</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar</span>
              <span className="sm:hidden">Cal</span>
            </TabsTrigger>
            <TabsTrigger value="faqs" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="areas" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Service Areas</span>
              <span className="sm:hidden">Areas</span>
            </TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="posts" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <div className="text-2xl font-bold">{stats.avgCharCount}</div>
                  <div className="text-sm text-muted-foreground">Avg Chars</div>
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
            <Card>
              <CardHeader>
                <CardTitle>Bulk Export</CardTitle>
                <CardDescription>Download all posts for scheduling or backup</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button onClick={() => downloadFile(exportAllPostsAsText(), 'gmb-posts.txt', 'text/plain')}>
                  <Download className="h-4 w-4 mr-2" />
                  Download as Text
                </Button>
                <Button onClick={() => downloadFile(exportPostsAsCSV(), 'gmb-posts.csv', 'text/csv')} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download as CSV
                </Button>
                <Button 
                  onClick={() => copyToClipboard(exportAllPostsAsText(), 'all-posts')}
                  variant="outline"
                >
                  {copiedId === 'all-posts' ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  Copy All Posts
                </Button>
              </CardContent>
            </Card>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activePostCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActivePostCategory('all')}
              >
                All ({GMB_BLOG_POSTS.length})
              </Button>
              <Button 
                variant={activePostCategory === 'location' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActivePostCategory('location')}
              >
                <MapPin className="h-3 w-3 mr-1" />
                Location ({stats.categories.location})
              </Button>
              <Button 
                variant={activePostCategory === 'service' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActivePostCategory('service')}
              >
                <Building2 className="h-3 w-3 mr-1" />
                Service ({stats.categories.service})
              </Button>
              <Button 
                variant={activePostCategory === 'seasonal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActivePostCategory('seasonal')}
              >
                <Calendar className="h-3 w-3 mr-1" />
                Seasonal ({stats.categories.seasonal})
              </Button>
              <Button 
                variant={activePostCategory === 'tips' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActivePostCategory('tips')}
              >
                <Lightbulb className="h-3 w-3 mr-1" />
                Tips ({stats.categories.tips})
              </Button>
            </div>

            {/* Posts List */}
            <div className="grid gap-6">
              {filteredPosts.map((post) => {
                const formatted = formatForGMB(post);
                return (
                  <Card key={post.id} className={!formatted.isValid ? 'border-red-300' : ''}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                            `post-${post.id}`
                          )}
                        >
                          {copiedId === `post-${post.id}` ? (
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
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            {/* Calendar Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{calendarStats.totalScheduledPosts}</div>
                  <p className="text-sm text-muted-foreground">Scheduled Posts</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{calendarStats.totalWeeks}</div>
                  <p className="text-sm text-muted-foreground">Weeks</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{calendarStats.postsPerWeek}</div>
                  <p className="text-sm text-muted-foreground">Posts/Week</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-sm font-medium">{calendarStats.startDate}</div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-sm font-medium">{calendarStats.endDate}</div>
                  <p className="text-sm text-muted-foreground">End Date</p>
                </CardContent>
              </Card>
            </div>

            {/* Calendar Export */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar Export</CardTitle>
                <CardDescription>Export the posting schedule for calendar apps or scheduling tools</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button onClick={() => downloadFile(exportCalendarAsCSV(), 'gmb-calendar.csv', 'text/csv')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CSV (Hootsuite, Buffer)
                </Button>
                <Button variant="outline" onClick={() => downloadFile(exportCalendarAsICS(), 'gmb-calendar.ics', 'text/calendar')}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Download iCal
                </Button>
              </CardContent>
            </Card>

            {/* Week Filter */}
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCalendarWeek === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCalendarWeek('all')}
              >
                All Weeks
              </Button>
              {Object.keys(postsGroupedByWeek).map(week => (
                <Button 
                  key={week}
                  variant={activeCalendarWeek === parseInt(week) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCalendarWeek(parseInt(week))}
                >
                  Week {week}
                </Button>
              ))}
            </div>

            {/* Weekly Schedule */}
            <div className="space-y-6">
              {Object.entries(postsGroupedByWeek)
                .filter(([week]) => activeCalendarWeek === 'all' || parseInt(week) === activeCalendarWeek)
                .map(([week, posts]) => (
                <Card key={week}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5" />
                      Week {week}
                    </CardTitle>
                    <CardDescription>
                      {posts.length} posts scheduled • Theme: {posts[0]?.schedule.theme}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {posts.map(post => (
                        <div key={post.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge variant="outline">{post.schedule.dayOfWeek}</Badge>
                              <Badge variant="secondary">{post.schedule.suggestedDate}</Badge>
                              <Badge className={getCategoryColor(post.category)}>
                                {post.category}
                              </Badge>
                            </div>
                            <p className="font-medium mt-1">#{post.id}: {post.title}</p>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => copyToClipboard(post.content, `cal-${post.id}`)}
                          >
                            {copiedId === `cal-${post.id}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="space-y-6">
            {/* FAQ Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{faqStats.total}</div>
                  <p className="text-sm text-muted-foreground">Total FAQs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{faqStats.highPriority}</div>
                  <p className="text-sm text-muted-foreground">High Priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{faqStats.averageCharCount}</div>
                  <p className="text-sm text-muted-foreground">Avg Chars</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-green-600">
                    {faqStats.invalidCount === 0 ? '✓' : faqStats.invalidCount}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {faqStats.invalidCount === 0 ? 'All Valid' : 'Over 500'}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">500</div>
                  <p className="text-sm text-muted-foreground">Char Limit</p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Export */}
            <Card>
              <CardHeader>
                <CardTitle>FAQ Export</CardTitle>
                <CardDescription>Download FAQs for Google My Business Q&A section</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button onClick={() => downloadFile(exportFAQsAsText(), 'gmb-faqs.txt', 'text/plain')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download as Text
                </Button>
                <Button variant="outline" onClick={() => downloadFile(exportFAQsAsCSV(), 'gmb-faqs.csv', 'text/csv')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download as CSV
                </Button>
                <Button variant="outline" onClick={() => copyToClipboard(exportFAQsAsText(), 'all-faqs')}>
                  {copiedId === 'all-faqs' ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  Copy All FAQs
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeFAQCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFAQCategory('all')}
              >
                All ({faqStats.total})
              </Button>
              {Object.entries(faqStats.byCategory).map(([cat, count]) => (
                <Button 
                  key={cat}
                  variant={activeFAQCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFAQCategory(cat)}
                >
                  {getCategoryLabel(cat as any)} ({count})
                </Button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="grid gap-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          Q: {faq.question}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{getCategoryLabel(faq.category)}</Badge>
                          <Badge variant={faq.priority === 'high' ? 'default' : 'outline'}>
                            {faq.priority} priority
                          </Badge>
                          <Badge variant={faq.answer.length <= 500 ? 'secondary' : 'destructive'}>
                            {faq.answer.length}/500 chars
                          </Badge>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => copyToClipboard(`Q: ${faq.question}\nA: ${faq.answer}`, `faq-${faq.id}`)}
                      >
                        {copiedId === `faq-${faq.id}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium text-sm mb-2">A:</p>
                      <p className="text-sm">{faq.answer}</p>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <strong>Learn More:</strong> {faq.linkedPage}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Service Areas Tab */}
          <TabsContent value="areas" className="space-y-6">
            {/* Service Area Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{serviceAreaStats.totalCounties}</div>
                  <p className="text-sm text-muted-foreground">Counties</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{serviceAreaStats.totalCities}</div>
                  <p className="text-sm text-muted-foreground">Cities</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{serviceAreaStats.totalZipCodes}</div>
                  <p className="text-sm text-muted-foreground">ZIP Codes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{serviceAreaStats.radiusMiles}mi</div>
                  <p className="text-sm text-muted-foreground">Radius</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">{(serviceAreaStats.totalPopulation / 1000000).toFixed(1)}M</div>
                  <p className="text-sm text-muted-foreground">Population</p>
                </CardContent>
              </Card>
            </div>

            {/* NAP Info */}
            <Card>
              <CardHeader>
                <CardTitle>Business NAP (Name, Address, Phone)</CardTitle>
                <CardDescription>Consistent NAP info for all directory listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Business Name</p>
                    <p className="font-medium">{GMB_SERVICE_AREAS.businessName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">{GMB_SERVICE_AREAS.businessAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{GMB_SERVICE_AREAS.businessPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="font-medium">{GMB_SERVICE_AREAS.businessWebsite}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Area Export */}
            <Card>
              <CardHeader>
                <CardTitle>Service Area Export</CardTitle>
                <CardDescription>Download service areas for GMB and directory submissions</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button onClick={() => downloadFile(exportServiceAreasAsText(), 'service-areas.txt', 'text/plain')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Text
                </Button>
                <Button variant="outline" onClick={() => downloadFile(exportServiceAreasAsCSV(), 'service-areas.csv', 'text/csv')}>
                  <Download className="mr-2 h-4 w-4" />
                  Download as CSV
                </Button>
                <Button variant="outline" onClick={() => downloadFile(exportForDirectoryBulkUpload(), 'directory-upload.csv', 'text/csv')}>
                  <Download className="mr-2 h-4 w-4" />
                  Directory Bulk Upload
                </Button>
                <Button variant="outline" onClick={() => copyToClipboard(exportCitiesAsList(), 'cities-list')}>
                  {copiedId === 'cities-list' ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  Copy Cities List
                </Button>
                <Button variant="outline" onClick={() => copyToClipboard(exportZipCodesAsList(), 'zips-list')}>
                  {copiedId === 'zips-list' ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  Copy ZIP Codes
                </Button>
              </CardContent>
            </Card>

            {/* County Breakdown */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {countyStats.map((county) => (
                <Card key={county.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span>{county.name} County</span>
                      <Badge variant="secondary">{county.population.toLocaleString()}</Badge>
                    </CardTitle>
                    <CardDescription>Primary: {county.primaryCity}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{county.cityCount} cities</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{county.zipCount} ZIPs</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground mb-2">Cities:</p>
                      <div className="flex flex-wrap gap-1">
                        {GMB_SERVICE_AREAS.counties
                          .find(c => c.name === county.name)?.cities
                          .slice(0, 5)
                          .map(city => (
                            <Badge key={city.name} variant="outline" className="text-xs">
                              {city.name}
                            </Badge>
                          ))}
                        {(GMB_SERVICE_AREAS.counties.find(c => c.name === county.name)?.cities.length || 0) > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{(GMB_SERVICE_AREAS.counties.find(c => c.name === county.name)?.cities.length || 0) - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default GMBExport;
