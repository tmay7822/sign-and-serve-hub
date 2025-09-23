import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  FileText, 
  Save, 
  Eye, 
  Upload,
  CheckCircle,
  Edit3,
  MessageSquare,
  Star,
  Users
} from 'lucide-react';

interface ContentManagerProps {
  onClose?: () => void;
}

interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  backgroundImage: string;
}

interface ServiceContent {
  title: string;
  description: string;
  features: string[];
  price: string;
}

interface AboutContent {
  headline: string;
  description: string;
  experience: string;
  certifications: string[];
}

export function ContentManager({ onClose }: ContentManagerProps) {
  const [saved, setSaved] = useState(false);
  const [heroContent, setHeroContent] = useState<HeroContent>({
    headline: "Professional Mobile Notary Services",
    subheadline: "Fast, reliable, and convenient notary services brought directly to you. Available 7 days a week throughout the metro area.",
    ctaText: "Get Quote Now",
    backgroundImage: "/src/assets/hero-notary.jpg"
  });

  const [services, setServices] = useState<ServiceContent[]>([
    {
      title: "General Notary Services",
      description: "Complete notarization for all your personal and business documents with fast, professional service.",
      features: ["Document notarization", "Acknowledgments", "Jurats", "Oaths and affirmations"],
      price: "Starting at $15"
    },
    {
      title: "Loan Signings",
      description: "Professional loan signing services for mortgages, refinances, and HELOCs with certified signing agents.",
      features: ["Mortgage signings", "Refinance documents", "HELOC signings", "Same-day service available"],
      price: "Starting at $125"
    },
    {
      title: "Real Estate Documents",
      description: "Specialized notary services for real estate transactions, deeds, and property-related documents.",
      features: ["Deed notarizations", "Property transfers", "Real estate contracts", "Title documents"],
      price: "Starting at $25"
    }
  ]);

  const [aboutContent, setAboutContent] = useState<AboutContent>({
    headline: "Experienced & Trusted Mobile Notary",
    description: "With over 10 years of experience in the notary industry, we provide reliable, professional mobile notary services throughout the metro area. Our certified notaries are bonded, insured, and background-checked for your peace of mind.",
    experience: "10+ Years Experience",
    certifications: ["NNA Certified", "Background Checked", "E&O Insured", "Bonded"]
  });

  const handleSave = () => {
    // Save content to localStorage or your preferred storage
    localStorage.setItem('heroContent', JSON.stringify(heroContent));
    localStorage.setItem('servicesContent', JSON.stringify(services));
    localStorage.setItem('aboutContent', JSON.stringify(aboutContent));
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateService = (index: number, field: keyof ServiceContent, value: any) => {
    setServices(prev => prev.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    ));
  };

  const addService = () => {
    setServices(prev => [...prev, {
      title: "New Service",
      description: "Service description",
      features: ["Feature 1", "Feature 2"],
      price: "Contact for pricing"
    }]);
  };

  const removeService = (index: number) => {
    setServices(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Success Message */}
      {saved && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Content saved successfully! Changes will be visible on your website.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Content Manager</h2>
          <p className="text-muted-foreground">
            Customize your website content without touching code
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview Changes
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="hero" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="about">About Section</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>

        {/* Hero Section */}
        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Hero Section Content
              </CardTitle>
              <CardDescription>
                The main banner that visitors see first on your homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="headline">Main Headline</Label>
                <Input
                  id="headline"
                  value={heroContent.headline}
                  onChange={(e) => setHeroContent(prev => ({...prev, headline: e.target.value}))}
                  placeholder="Your main headline"
                />
              </div>
              <div>
                <Label htmlFor="subheadline">Subheadline</Label>
                <Textarea
                  id="subheadline"
                  value={heroContent.subheadline}
                  onChange={(e) => setHeroContent(prev => ({...prev, subheadline: e.target.value}))}
                  placeholder="Supporting text that explains your services"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ctaText">Call-to-Action Button Text</Label>
                  <Input
                    id="ctaText"
                    value={heroContent.ctaText}
                    onChange={(e) => setHeroContent(prev => ({...prev, ctaText: e.target.value}))}
                    placeholder="Get Quote Now"
                  />
                </div>
                <div>
                  <Label htmlFor="backgroundImage">Background Image URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="backgroundImage"
                      value={heroContent.backgroundImage}
                      onChange={(e) => setHeroContent(prev => ({...prev, backgroundImage: e.target.value}))}
                      placeholder="/path/to/image.jpg"
                    />
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Section */}
        <TabsContent value="services">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Service Offerings</h3>
                <p className="text-muted-foreground">
                  Configure the services you offer and their descriptions
                </p>
              </div>
              <Button onClick={addService}>
                Add Service
              </Button>
            </div>

            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Service {index + 1}</CardTitle>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeService(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Service Title</Label>
                      <Input
                        value={service.title}
                        onChange={(e) => updateService(index, 'title', e.target.value)}
                        placeholder="Service name"
                      />
                    </div>
                    <div>
                      <Label>Starting Price</Label>
                      <Input
                        value={service.price}
                        onChange={(e) => updateService(index, 'price', e.target.value)}
                        placeholder="Starting at $XX"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(index, 'description', e.target.value)}
                      placeholder="Describe this service offering"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Key Features (one per line)</Label>
                    <Textarea
                      value={service.features.join('\n')}
                      onChange={(e) => updateService(index, 'features', e.target.value.split('\n').filter(f => f.trim()))}
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* About Section */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                About Section Content
              </CardTitle>
              <CardDescription>
                Tell your story and highlight your credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="aboutHeadline">Section Headline</Label>
                <Input
                  id="aboutHeadline"
                  value={aboutContent.headline}
                  onChange={(e) => setAboutContent(prev => ({...prev, headline: e.target.value}))}
                  placeholder="About your business"
                />
              </div>
              <div>
                <Label htmlFor="aboutDescription">Description</Label>
                <Textarea
                  id="aboutDescription"
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent(prev => ({...prev, description: e.target.value}))}
                  placeholder="Tell your story and explain why customers should choose you"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Experience Statement</Label>
                  <Input
                    id="experience"
                    value={aboutContent.experience}
                    onChange={(e) => setAboutContent(prev => ({...prev, experience: e.target.value}))}
                    placeholder="10+ Years Experience"
                  />
                </div>
                <div>
                  <Label htmlFor="certifications">Certifications (one per line)</Label>
                  <Textarea
                    id="certifications"
                    value={aboutContent.certifications.join('\n')}
                    onChange={(e) => setAboutContent(prev => ({...prev, certifications: e.target.value.split('\n').filter(c => c.trim())}))}
                    placeholder="NNA Certified&#10;Background Checked&#10;E&O Insured"
                    rows={4}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testimonials Section */}
        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                Customer Testimonials
              </CardTitle>
              <CardDescription>
                Manage customer reviews and testimonials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">Testimonials Manager</h3>
                <p>Testimonial management will be available in the next update.</p>
                <Button variant="outline" className="mt-4">
                  Add Testimonial
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Preview All Changes
            </Button>
            <Button variant="outline" size="sm">
              Reset to Defaults
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}