import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { HelpTooltip, HELP_TEXT } from './HelpTooltip';
import { 
  Wand2, 
  Save, 
  Eye, 
  FileText, 
  Tag, 
  Calendar,
  ArrowLeft,
  Loader2,
  Sparkles
} from 'lucide-react';
import type { BlogPost } from '@/hooks/useBlogPosts';

const BLOG_CATEGORIES = [
  { id: 'general-notary', name: 'General Notary' },
  { id: 'loan-signing', name: 'Loan Signing' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'estate-planning', name: 'Estate Planning' },
  { id: 'apostille', name: 'Apostille' },
  { id: 'business', name: 'Business' },
];

const BLOG_TEMPLATES = [
  {
    id: 'how-to',
    name: 'How-To Guide',
    description: 'Step-by-step instructions for a process',
    icon: '📋',
    contentStarter: `## What You'll Learn\n\nIn this guide, we'll walk you through...\n\n## Step 1: Getting Started\n\n[Add content here]\n\n## Step 2: The Process\n\n[Add content here]\n\n## Step 3: Final Steps\n\n[Add content here]\n\n## Conclusion\n\n[Add content here]`,
  },
  {
    id: 'faq',
    name: 'FAQ Article',
    description: 'Answer common questions',
    icon: '❓',
    contentStarter: `## Frequently Asked Questions\n\n### Question 1: [Your question here]?\n\n[Answer here]\n\n### Question 2: [Your question here]?\n\n[Answer here]\n\n### Question 3: [Your question here]?\n\n[Answer here]\n\n## Need More Help?\n\n[Call to action here]`,
  },
  {
    id: 'local',
    name: 'Local Guide',
    description: 'Location-specific content',
    icon: '📍',
    contentStarter: `## Notary Services in [City Name]\n\nLooking for reliable notary services in [City]? Here's everything you need to know.\n\n## Services We Offer\n\n- [Service 1]\n- [Service 2]\n- [Service 3]\n\n## Service Area\n\nWe proudly serve [City] and surrounding areas including...\n\n## Book an Appointment\n\n[Call to action]`,
  },
];

interface SimpleBlogEditorProps {
  post?: BlogPost;
  onSave: (post: Partial<BlogPost>) => Promise<void>;
  onCancel: () => void;
  saving?: boolean;
}

export function SimpleBlogEditor({ post, onSave, onCancel, saving }: SimpleBlogEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [category, setCategory] = useState(post?.category || '');
  const [metaDescription, setMetaDescription] = useState(post?.meta_description || '');
  const [focusKeyword, setFocusKeyword] = useState(post?.focus_keyword || '');
  const [featured, setFeatured] = useState(post?.featured || false);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(post?.tags || []);
  const [showTemplates, setShowTemplates] = useState(!post && !content);
  const [generatingTitles, setGeneratingTitles] = useState(false);
  const [suggestedTitles, setSuggestedTitles] = useState<string[]>([]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleTemplateSelect = (template: typeof BLOG_TEMPLATES[0]) => {
    setContent(template.contentStarter);
    setShowTemplates(false);
  };

  const handleGenerateTitles = async () => {
    if (!focusKeyword && !category) return;
    
    setGeneratingTitles(true);
    // Simulate AI title generation (in production, call an edge function)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const keyword = focusKeyword || category;
    const titles = [
      `Complete Guide to ${keyword} in Ohio`,
      `Everything You Need to Know About ${keyword}`,
      `${keyword}: Tips from a Professional Notary`,
      `How to Get ${keyword} Done Right`,
      `${keyword} Explained: A Simple Guide`,
    ];
    
    setSuggestedTitles(titles);
    setGeneratingTitles(false);
  };

  const handleSave = async () => {
    const slug = generateSlug(title);
    
    await onSave({
      title,
      slug,
      content,
      category,
      meta_description: metaDescription,
      focus_keyword: focusKeyword,
      featured,
      tags,
      status: 'draft',
    });
  };

  const handlePublish = async () => {
    const slug = generateSlug(title);
    
    await onSave({
      title,
      slug,
      content,
      category,
      meta_description: metaDescription,
      focus_keyword: focusKeyword,
      featured,
      tags,
      status: 'published',
      publish_date: new Date().toISOString(),
    });
  };

  // Template Selection View
  if (showTemplates) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h2 className="text-xl font-semibold">Choose a Template</h2>
        </div>

        <p className="text-muted-foreground">
          Start with a template to make writing easier, or start from scratch.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {BLOG_TEMPLATES.map(template => (
            <Card 
              key={template.id}
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => handleTemplateSelect(template)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{template.icon}</div>
                <h3 className="font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card 
            className="cursor-pointer hover:border-primary transition-colors border-dashed"
            onClick={() => setShowTemplates(false)}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">✏️</div>
              <h3 className="font-semibold mb-2">Start from Scratch</h3>
              <p className="text-sm text-muted-foreground">Write your own content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h2 className="text-xl font-semibold">
            {post ? 'Edit Post' : 'New Post'}
          </h2>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave} disabled={saving || !title}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            Save Draft
          </Button>
          <Button size="sm" onClick={handlePublish} disabled={saving || !title || !content}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileText className="w-4 h-4 mr-2" />}
            Publish
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="title">Title</Label>
                  <HelpTooltip content="Write a compelling title that includes your main keyword. Keep it under 60 characters for best SEO." />
                </div>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your blog post title..."
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  {title.length}/60 characters
                </p>
              </div>

              {/* AI Title Suggestions */}
              {suggestedTitles.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm">Suggested Titles</Label>
                  <div className="space-y-1">
                    {suggestedTitles.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => setTitle(suggestion)}
                        className="block w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Content</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTemplates(true)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Use Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog post content here... Use Markdown for formatting."
                className="min-h-[400px] font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Supports Markdown formatting. Use ## for headings, **bold**, *italic*, and - for lists.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SEO Settings */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="focusKeyword">Focus Keyword</Label>
                  <HelpTooltip content={HELP_TEXT.focusKeyword} />
                </div>
                <div className="flex gap-2">
                  <Input
                    id="focusKeyword"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                    placeholder="e.g., mobile notary Cincinnati"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleGenerateTitles}
                    disabled={generatingTitles}
                  >
                    {generatingTitles ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Wand2 className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <HelpTooltip content={HELP_TEXT.metaDescription} />
                </div>
                <Textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Brief description for search results..."
                  className="h-20"
                />
                <p className="text-xs text-muted-foreground">
                  {metaDescription.length}/160 characters
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Organization */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Organization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label>Category</Label>
                  <HelpTooltip content={HELP_TEXT.blogCategory} />
                </div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {BLOG_CATEGORIES.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label>Tags</Label>
                  <HelpTooltip content={HELP_TEXT.blogTags} />
                </div>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add a tag..."
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <Button variant="outline" size="icon" onClick={handleAddTag}>
                    <Tag className="w-4 h-4" />
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label htmlFor="featured">Featured Post</Label>
                  <HelpTooltip content={HELP_TEXT.blogFeatured} />
                </div>
                <Switch
                  id="featured"
                  checked={featured}
                  onCheckedChange={setFeatured}
                />
              </div>
            </CardContent>
          </Card>

          {/* URL Preview */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                URL Preview
                <HelpTooltip content={HELP_TEXT.blogSlug} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground break-all">
                /blog/{generateSlug(title) || 'your-post-title'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
