import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Eye,
  FileText,
  Calendar,
  Tag,
  CheckCircle,
  Clock
} from 'lucide-react';

interface BlogManagerProps {
  onClose?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  status: 'draft' | 'published';
  publishDate: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

const BLOG_CATEGORIES = [
  { value: 'general-notary', label: 'General Notary' },
  { value: 'loan-signings', label: 'Loan Signings' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'estate-planning', label: 'Estate Planning' },
  { value: 'business-notary', label: 'Business Notary' },
  { value: 'tips-guides', label: 'Tips & Guides' }
];

const BLOG_TEMPLATES = [
  {
    id: 'notary-basics',
    title: 'What to Bring to a Notary Appointment',
    category: 'general-notary',
    content: `# What to Bring to Your Notary Appointment

When you schedule a mobile notary appointment, proper preparation ensures a smooth and efficient process. Here's everything you need to bring:

## Required Documents

### 1. Valid Photo Identification
- Driver's license
- State-issued ID card  
- Passport
- Military ID

### 2. Documents to be Notarized
- Bring all original documents
- Do NOT sign anything before the notary arrives
- Have all pages present and accounted for

## What the Notary Will Bring
- Notary seal and supplies
- Notary journal
- Additional forms if needed

## Preparation Tips
- Review documents beforehand
- Have all signers present
- Ensure adequate lighting and table space
- Have payment ready

## Contact Information
If you have questions about your specific documents, call us at [PHONE] before your appointment.`,
    excerpt: 'Learn what documents and identification you need for a successful notary appointment.'
  },
  {
    id: 'loan-signing-process',
    title: 'What to Expect During Your Loan Signing',
    category: 'loan-signings',
    content: `# What to Expect During Your Loan Signing Appointment

A loan signing is one of the final steps in your mortgage or refinance process. Here's what you can expect:

## Before the Appointment
- You'll receive a call to schedule
- The signing typically takes 45-60 minutes
- All borrowers must be present

## During the Signing
- Review loan documents carefully
- Ask questions about anything unclear
- Sign where indicated by the signing agent
- Provide required identification

## Key Documents You'll Sign
- Promissory Note
- Deed of Trust/Mortgage
- Closing Disclosure
- Various disclosures and notices

## After Signing
- Documents are returned to the lender
- Funding typically occurs within 24-48 hours
- You'll receive copies of signed documents

## Questions?
Contact our certified signing agents at [PHONE] for any questions about your loan signing appointment.`,
    excerpt: 'Understanding the loan signing process helps ensure a smooth closing experience.'
  }
];

export function BlogManager({ onClose }: BlogManagerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const createNewPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: 'New Blog Post',
      slug: 'new-blog-post',
      content: '# New Blog Post\n\nStart writing your content here...',
      excerpt: '',
      category: 'general-notary',
      status: 'draft',
      publishDate: new Date().toISOString().split('T')[0],
      featured: false,
      seoTitle: '',
      seoDescription: '',
      keywords: ''
    };
    setPosts(prev => [...prev, newPost]);
    setCurrentPost(newPost);
    setIsEditing(true);
  };

  const createFromTemplate = (template: typeof BLOG_TEMPLATES[0]) => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: template.title,
      slug: template.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      content: template.content.replace('[PHONE]', '(555) 123-4567'), // Replace with actual phone
      excerpt: template.excerpt,
      category: template.category,
      status: 'draft',
      publishDate: new Date().toISOString().split('T')[0],
      featured: false,
      seoTitle: template.title,
      seoDescription: template.excerpt,
      keywords: ''
    };
    setPosts(prev => [...prev, newPost]);
    setCurrentPost(newPost);
    setIsEditing(true);
  };

  const updatePost = (field: keyof BlogPost, value: any) => {
    if (!currentPost) return;
    
    const updated = { ...currentPost, [field]: value };
    
    // Auto-generate slug from title
    if (field === 'title') {
      updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    
    setCurrentPost(updated);
    
    // Update in posts array
    setPosts(prev => prev.map(post => 
      post.id === updated.id ? updated : post
    ));
  };

  const savePost = () => {
    if (!currentPost) return;
    
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const deletePost = (postId: string) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
    if (currentPost?.id === postId) {
      setCurrentPost(null);
      setIsEditing(false);
    }
  };

  const publishPost = () => {
    if (!currentPost) return;
    updatePost('status', 'published');
    savePost();
  };

  if (isEditing && currentPost) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {saved && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Blog post saved successfully!
            </AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Edit Blog Post</h2>
            <p className="text-muted-foreground">
              Create engaging content for your website visitors
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              ← Back to Posts
            </Button>
            <Button variant="outline" onClick={savePost}>
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button onClick={publishPost}>
              Publish Post
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={currentPost.title}
                    onChange={(e) => updatePost('title', e.target.value)}
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={currentPost.excerpt}
                    onChange={(e) => updatePost('excerpt', e.target.value)}
                    placeholder="Brief summary for search results and previews"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content (Markdown)</Label>
                  <Textarea
                    id="content"
                    value={currentPost.content}
                    onChange={(e) => updatePost('content', e.target.value)}
                    placeholder="Write your blog post content using Markdown..."
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={currentPost.category} 
                    onValueChange={(value) => updatePost('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BLOG_CATEGORIES.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="publishDate">Publish Date</Label>
                  <Input
                    id="publishDate"
                    type="date"
                    value={currentPost.publishDate}
                    onChange={(e) => updatePost('publishDate', e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={currentPost.featured}
                    onChange={(e) => updatePost('featured', e.target.checked)}
                  />
                  <Label htmlFor="featured">Featured post</Label>
                </div>

                <div>
                  <Badge variant={currentPost.status === 'published' ? 'default' : 'secondary'}>
                    {currentPost.status === 'published' ? 'Published' : 'Draft'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input
                    id="seoTitle"
                    value={currentPost.seoTitle}
                    onChange={(e) => updatePost('seoTitle', e.target.value)}
                    placeholder="SEO-optimized title"
                  />
                </div>
                <div>
                  <Label htmlFor="seoDescription">SEO Description</Label>
                  <Textarea
                    id="seoDescription"
                    value={currentPost.seoDescription}
                    onChange={(e) => updatePost('seoDescription', e.target.value)}
                    placeholder="Meta description for search engines"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    value={currentPost.keywords}
                    onChange={(e) => updatePost('keywords', e.target.value)}
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Blog Manager</h2>
          <p className="text-muted-foreground">
            Create and manage blog posts to drive traffic and establish expertise
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={createNewPost}>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Templates */}
      {posts.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Get Started with Blog Templates</CardTitle>
            <CardDescription>
              Choose from pre-written blog posts that you can customize for your business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BLOG_TEMPLATES.map(template => (
                <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <CardDescription>{template.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        {BLOG_CATEGORIES.find(c => c.value === template.category)?.label}
                      </Badge>
                      <Button size="sm" onClick={() => createFromTemplate(template)}>
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Posts List */}
      {posts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Blog Posts</CardTitle>
            <CardDescription>
              Manage your published and draft blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${
                      post.status === 'published' ? 'bg-green-500' : 'bg-orange-500'
                    }`} />
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {BLOG_CATEGORIES.find(c => c.value === post.category)?.label} • {post.publishDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                      {post.status === 'published' ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Published
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          Draft
                        </>
                      )}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setCurrentPost(post);
                        setIsEditing(true);
                      }}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => deletePost(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-medium mb-2">No blog posts yet</h3>
          <p className="text-muted-foreground mb-4">
            Start creating content to attract customers and improve your SEO
          </p>
          <Button onClick={createNewPost}>
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Post
          </Button>
        </div>
      )}
    </div>
  );
}