import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageUpload from './ImageUpload';
import SEOAnalyzer from './SEOAnalyzer';
import BulkContentGenerator from './BulkContentGenerator';
import { 
  Edit, 
  Trash2, 
  Plus, 
  Save, 
  Eye, 
  Calendar, 
  Tag, 
  ArrowLeft,
  FileText,
  Search,
  Target,
  Globe,
  Wand2,
  Upload
} from 'lucide-react';

interface BlogManagerProps {
  onClose?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: string;
  serviceSlug?: string;
  status: 'draft' | 'published';
  publishDate: string;
  featured: boolean;
  metaDescription?: string;
  focusKeyword?: string;
  tags?: string[];
  author: string;
}

const BLOG_CATEGORIES = [
  { id: 'general-notary', name: 'General Notary' },
  { id: 'loan-signings', name: 'Loan Signings' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'estate-planning', name: 'Estate Planning' },
  { id: 'business-notary', name: 'Business Notary' },
  { id: 'tips-guides', name: 'Tips & Guides' },
  { id: 'legal-documents', name: 'Legal Documents' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'apostille', name: 'Apostille Services' }
];

const BLOG_TEMPLATES = [
  {
    id: 'service-guide',
    title: 'Complete Service Guide Template',
    category: 'general-notary',
    description: 'Comprehensive guide template for any notary service',
    content: `# Complete Guide to [Service Name]

## What is [Service Name]?

[Service Name] is a crucial notary service that ensures your important documents are properly executed and legally binding. Whether you're dealing with personal, business, or legal matters, having professional [service name] can save you time and provide peace of mind.

## When You Need [Service Name]

- Real estate transactions
- Legal document execution
- Business contracts and agreements
- Personal family matters
- Financial documents
- Healthcare directives

## Our [Service Name] Process

### 1. Initial Consultation
We review your documents and requirements to ensure everything is prepared correctly before our visit.

### 2. Document Preparation
Our experienced notary will guide you through the proper preparation of all necessary documentation.

### 3. Professional Service
We provide mobile service at your convenience, ensuring all legal requirements are met.

### 4. Completion & Follow-up
You receive properly executed documents with guidance on next steps if needed.

## Why Choose Our [Service Name]

- **Licensed & Experienced**: Our notaries are fully licensed and experienced professionals
- **Mobile Service**: We come to you at your convenient location
- **Available 7 Days**: Flexible scheduling including evenings and weekends  
- **Competitive Pricing**: Transparent, upfront pricing with no hidden fees
- **Same-Day Service**: Often available for urgent requests

## Frequently Asked Questions

**Q: How quickly can you provide [service name]?**
A: We typically offer same-day service and can often accommodate urgent requests within 2-4 hours.

**Q: What documents do I need to prepare?**
A: Requirements vary by service type. We'll provide a complete checklist when you schedule your appointment.

**Q: Do you travel for [service name]?**
A: Yes! We provide mobile service throughout our service area for your convenience.

## Contact Us Today

Ready to schedule your [service name]? Contact us today for professional, reliable service you can trust.

*Professional notary services available throughout [Your Service Area]*`
  },
  {
    id: 'faq-template',
    title: 'Service FAQ Template',
    category: 'tips-guides',
    description: 'Common questions and answers for any service',
    content: `# [Service Name] - Frequently Asked Questions

## General Questions

**What is [service name] and why do I need it?**
[Service name] ensures your important documents are properly executed and legally binding according to state requirements.

**How much does [service name] cost?**
Our pricing is competitive and transparent. We provide upfront costs with no hidden fees.

**Do you provide mobile [service name]?**
Yes! We come directly to your preferred location for maximum convenience.

## Scheduling & Availability

**How quickly can I get [service name]?**
We offer same-day service and can often accommodate urgent requests within a few hours.

**What days and times are you available?**
We're available 7 days a week, including evenings and weekends for your convenience.

**What if I need to reschedule?**
We understand things come up. Just give us reasonable notice and we'll work with your schedule.

## Requirements & Process

**What documents do I need to bring?**
Requirements vary by service type. We'll provide a detailed checklist when you book your appointment.

**Do all parties need to be present?**
Yes, all signers must be present with valid photo identification during the notarization.

**What if I have questions during the process?**
Our experienced notaries are happy to explain each step and answer your questions.

## Contact Information

Have more questions? Contact us today and speak with a professional who can provide the information you need.`
  },
  {
    id: 'local-spotlight',
    title: 'Local Area Spotlight Template', 
    category: 'general-notary',
    description: 'Template for highlighting service in specific locations',
    content: `# Professional Notary Services in [City, County]

## About [City Name]

[City Name] is a vibrant community in [County Name], and we're proud to serve this area with professional notary services. Whether you're a long-time resident or new to the area, we understand the unique needs of our local community.

## Why [City] Residents Choose Our Services

### Local Expertise
- Familiar with [County] County requirements and procedures
- Understanding of local business and residential needs
- Established relationships with area institutions
- Quick response times throughout the [City] area

### Professional Service
- Licensed and experienced notary professionals
- Mobile service throughout [City] and surrounding areas
- Flexible scheduling to accommodate your lifestyle
- Competitive pricing with transparent fees

## Popular Services in [City]

Residents of [City] frequently need notary services for:
- Home buying and refinancing transactions
- Business documentation and contracts
- Power of attorney and healthcare directives
- Estate planning documents
- Employment and educational paperwork
- Vehicle title transfers and DMV documents

## Serving the [City] Community

As your local notary service provider, we're committed to:
- Supporting [City] residents and businesses
- Providing exceptional service throughout [County] County
- Building lasting relationships in the community
- Offering reliable, professional assistance when you need it most

## [County] County Expertise

[County] County has specific requirements for various documents and procedures. Our local expertise ensures your notarization needs are handled correctly the first time, saving you time and potential complications.

## Schedule Your [City] Appointment

Experience professional notary services in [City]. Contact us today to schedule your appointment and discover why residents throughout [County] County trust us for their important document needs.

## Service Coverage

We proudly serve:
- All of [City], [County] County
- Surrounding communities in [County] County  
- Nearby areas within our service region

*Your trusted notary professional serving [City], [County] County and beyond.*`
  }
];

export function BlogManager({ onClose }: BlogManagerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const createNewPost = () => {
    const newPost: BlogPost = {
      id: Math.random().toString(36).substr(2, 9),
      title: '',
      slug: '',
      content: '# New Blog Post\n\nStart writing your content here...',
      category: 'general-notary',
      status: 'draft',
      publishDate: new Date().toISOString(),
      featured: false,
      author: 'Admin',
      tags: []
    };
    setCurrentPost(newPost);
    setIsEditing(true);
  };

  const createFromTemplate = (template: typeof BLOG_TEMPLATES[0]) => {
    const newPost: BlogPost = {
      id: Math.random().toString(36).substr(2, 9),
      title: template.title.replace(' Template', ''),
      slug: template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      content: template.content,
      category: template.category,
      status: 'draft',
      publishDate: new Date().toISOString(),
      featured: false,
      author: 'Admin',
      tags: [template.category]
    };
    setCurrentPost(newPost);
    setIsEditing(true);
  };

  const updatePost = (field: keyof BlogPost, value: any) => {
    if (!currentPost) return;
    
    const updatedPost = { ...currentPost, [field]: value };
    
    // Auto-generate slug from title
    if (field === 'title') {
      updatedPost.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    
    setCurrentPost(updatedPost);
  };

  const handleImageUpload = (imageUrl: string, altText?: string) => {
    if (!currentPost) return;
    
    // Insert image at cursor position or append to content
    const imageMarkdown = `![${altText || 'Uploaded image'}](${imageUrl})`;
    updatePost('content', currentPost.content + '\n\n' + imageMarkdown);
  };

  const handleBulkGenerate = (generatedPosts: Array<{
    title: string;
    content: string;
    slug: string;
    category: string;
    serviceSlug: string;
    metaDescription: string;
    focusKeyword: string;
  }>) => {
    const newPosts = generatedPosts.map(postData => ({
      id: Math.random().toString(36).substr(2, 9),
      ...postData,
      author: 'Admin',
      publishDate: new Date().toISOString(),
      status: 'draft' as const,
      featured: false,
      tags: [postData.category, postData.serviceSlug],
      excerpt: postData.metaDescription
    }));

    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    savePost([...posts, ...newPosts]);
  };

  const savePost = (postsToSave?: BlogPost[]) => {
    const updatedPosts = postsToSave || (currentPost ? [...posts.filter(p => p.id !== currentPost.id), currentPost] : posts);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  const deletePost = (postId: string) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    if (currentPost?.id === postId) {
      setCurrentPost(null);
      setIsEditing(false);
    }
  };

  const publishPost = (post: BlogPost) => {
    const updatedPost = { ...post, status: 'published' as const };
    setCurrentPost(updatedPost);
    savePost([...posts.filter(p => p.id !== post.id), updatedPost]);
  };

  // Component rendering
  if (isEditing && currentPost) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant={currentPost.status === 'published' ? 'default' : 'secondary'}>
              {currentPost.status}
            </Badge>
            {currentPost.featured && <Badge variant="outline">Featured</Badge>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  {currentPost.id ? 'Edit Post' : 'Create New Post'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                    <TabsTrigger value="media">Media</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title *</label>
                      <Input
                        placeholder="Enter post title"
                        value={currentPost.title}
                        onChange={(e) => updatePost('title', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Content *</label>
                      <div className="border rounded-md">
                        <Editor
                          apiKey="no-api-key"
                          value={currentPost.content}
                          onEditorChange={(content) => updatePost('content', content)}
                          init={{
                            height: 400,
                            menubar: false,
                            plugins: [
                              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                              'bold italic forecolor | alignleft aligncenter ' +
                              'alignright alignjustify | bullist numlist outdent indent | ' +
                              'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                          }}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="seo" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meta Description</label>
                      <Textarea
                        placeholder="Brief description for search engines (120-160 characters)"
                        value={currentPost.metaDescription || ''}
                        onChange={(e) => updatePost('metaDescription', e.target.value)}
                        maxLength={160}
                        rows={3}
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {(currentPost.metaDescription || '').length}/160 characters
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Focus Keyword</label>
                      <Input
                        placeholder="Main keyword for SEO"
                        value={currentPost.focusKeyword || ''}
                        onChange={(e) => updatePost('focusKeyword', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL Slug</label>
                      <Input
                        placeholder="url-slug"
                        value={currentPost.slug}
                        onChange={(e) => updatePost('slug', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tags</label>
                      <Input
                        placeholder="Enter tags separated by commas"
                        value={currentPost.tags?.join(', ') || ''}
                        onChange={(e) => updatePost('tags', e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag))}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-4">
                    <ImageUpload onImageUpload={handleImageUpload} maxFiles={5} />
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <Select value={currentPost.category} onValueChange={(value) => updatePost('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {BLOG_CATEGORIES.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Service</label>
                        <Select value={currentPost.serviceSlug} onValueChange={(value) => updatePost('serviceSlug', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general-notary">General Notary</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="loan-signings">Loan Signings</SelectItem>
                            <SelectItem value="legal-documents">Legal Documents</SelectItem>
                            <SelectItem value="business-services">Business Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Publish Date</label>
                        <Input
                          type="datetime-local"
                          value={currentPost.publishDate ? new Date(currentPost.publishDate).toISOString().slice(0, 16) : ''}
                          onChange={(e) => updatePost('publishDate', e.target.value ? new Date(e.target.value).toISOString() : null)}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button onClick={() => savePost()}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button 
                    variant="default"
                    onClick={() => publishPost(currentPost)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Publish
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <SEOAnalyzer
              title={currentPost.title}
              content={currentPost.content}
              metaDescription={currentPost.metaDescription || ''}
              slug={currentPost.slug}
              focusKeyword={currentPost.focusKeyword}
            />
          </div>
        </div>
      </div>
    );
  }

  // Main Blog Manager View
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Blog Manager
            </CardTitle>
            <div className="flex gap-2">
              <Button onClick={createNewPost} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Post
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList>
              <TabsTrigger value="posts">All Posts ({posts.length})</TabsTrigger>
              <TabsTrigger value="bulk">
                <Wand2 className="h-4 w-4 mr-1" />
                Bulk Generator
              </TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="space-y-4">
                    <div className="text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium">No blog posts yet</h3>
                      <p>Get started by creating your first blog post, using a template, or generating bulk content.</p>
                    </div>

                    <div className="flex justify-center gap-2">
                      <Button onClick={createNewPost}>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Post
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="h-4 w-4" />
                    <Input placeholder="Search posts..." className="max-w-sm" />
                  </div>

                  <div className="space-y-3">
                    {posts.map((post) => (
                      <Card key={post.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{post.title}</h3>
                                <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                  {post.status}
                                </Badge>
                                {post.featured && <Badge variant="outline">Featured</Badge>}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(post.publishDate).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Tag className="h-3 w-3" />
                                  {post.category}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Globe className="h-3 w-3" />
                                  {post.slug}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setCurrentPost(post);
                                  setIsEditing(true);
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => deletePost(post.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="bulk">
              <BulkContentGenerator onGenerate={handleBulkGenerate} />
            </TabsContent>

            <TabsContent value="templates">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BLOG_TEMPLATES.map((template) => (
                  <Card key={template.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-sm">{template.title}</h5>
                          <Badge variant="outline" className="text-xs">{template.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{template.description}</p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => createFromTemplate(template)}
                          className="w-full"
                        >
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}