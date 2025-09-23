import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Wand2, MapPin, FileText, Target } from 'lucide-react';
import { LOCATIONS_CITY } from '@/data/locations';
import { SERVICES } from '@/data/services';

interface BulkContentGeneratorProps {
  onGenerate: (posts: Array<{
    title: string;
    content: string;
    slug: string;
    category: string;
    serviceSlug: string;
    metaDescription: string;
    focusKeyword: string;
  }>) => void;
}

const BulkContentGenerator: React.FC<BulkContentGeneratorProps> = ({ onGenerate }) => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [contentType, setContentType] = useState<'service-guide' | 'faq' | 'local-spotlight'>('service-guide');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const contentTemplates = {
    'service-guide': {
      title: (service: string, city: string, county: string) => `Complete Guide to ${service} in ${city}, ${county}`,
      content: (service: string, city: string, county: string) => `
# Your Trusted ${service} Professional in ${city}, ${county}

When you need reliable ${service.toLowerCase()} services in ${city}, ${county}, you want a professional who understands local requirements and provides exceptional service. Our experienced team has been serving the ${city} community with comprehensive ${service.toLowerCase()} solutions.

## Why Choose Our ${service} Services in ${city}?

### Local Expertise
- Deep understanding of ${county} County requirements
- Familiar with local regulations and procedures
- Established relationships with ${city} institutions
- Quick response times throughout the ${city} area

### Professional Service
- Licensed and bonded ${service.toLowerCase()} professional
- Available 7 days a week for your convenience
- Mobile service - we come to you in ${city}
- Competitive pricing with no hidden fees

## Our ${service} Process in ${city}

We make ${service.toLowerCase()} simple and convenient for ${city} residents:

1. **Schedule Your Appointment** - Call or book online for same-day service in ${city}
2. **Document Review** - We review your documents before our arrival
3. **Professional Service** - Complete ${service.toLowerCase()} at your ${city} location
4. **Completion** - Receive your properly executed documents immediately

## Service Areas in ${county} County

While we specialize in ${city}, we also serve the entire ${county} County area including surrounding communities. No matter where you are in ${county} County, we can provide professional ${service.toLowerCase()} services.

## Common ${service} Questions from ${city} Residents

**Q: How quickly can you provide ${service.toLowerCase()} in ${city}?**
A: We offer same-day service throughout ${city} and can often accommodate urgent requests within 2-4 hours.

**Q: Do you travel to ${city} for ${service.toLowerCase()}?**
A: Yes! We provide mobile ${service.toLowerCase()} throughout ${city} and ${county} County for your convenience.

**Q: What documents do I need for ${service.toLowerCase()} in ${city}?**
A: Document requirements vary, but we'll review everything with you when you schedule your ${city} appointment.

## Schedule Your ${city} ${service} Today

Don't let paperwork delays hold you back. Contact us today to schedule professional ${service.toLowerCase()} in ${city}, ${county}. We're here to serve the ${city} community with reliable, professional service you can trust.

*Serving ${city}, ${county} County and surrounding areas with professional ${service.toLowerCase()} services.*
      `,
      metaDescription: (service: string, city: string, county: string) => 
        `Professional ${service.toLowerCase()} services in ${city}, ${county}. Licensed, mobile, and available 7 days a week. Same-day service throughout ${county} County.`,
      focusKeyword: (service: string, city: string) => `${service.toLowerCase()} ${city.toLowerCase()}`
    },
    'faq': {
      title: (service: string, city: string, county: string) => `${service} FAQ - Common Questions in ${city}, ${county}`,
      content: (service: string, city: string, county: string) => `
# Frequently Asked Questions: ${service} in ${city}, ${county}

## General Questions

**What is ${service.toLowerCase()} and why do I need it in ${city}?**
${service} is an essential service that ensures your important documents are properly executed and legally binding. In ${city}, ${county}, having access to professional ${service.toLowerCase()} can save you time and ensure compliance with local regulations.

**How much does ${service.toLowerCase()} cost in ${city}?**
Our ${service.toLowerCase()} fees in ${city} are competitive and transparent. We provide upfront pricing with no hidden costs, and we serve the entire ${county} County area.

**Do you provide mobile ${service.toLowerCase()} in ${city}?**
Yes! We come directly to you anywhere in ${city}, ${county}. Whether you're at home, office, or another location in ${city}, we provide convenient mobile service.

## Scheduling and Availability

**How quickly can I get ${service.toLowerCase()} in ${city}?**
We offer same-day service throughout ${city} and ${county} County. In many cases, we can accommodate urgent requests within 2-4 hours.

**What days and times do you provide ${service.toLowerCase()} in ${city}?**
We're available 7 days a week for ${service.toLowerCase()} in ${city}, including evenings and weekends for your convenience.

**Do you serve areas outside of ${city}?**
Absolutely! While we specialize in ${city}, we serve the entire ${county} County area and surrounding communities.

## Requirements and Process

**What do I need to bring for ${service.toLowerCase()} in ${city}?**
Requirements vary depending on your specific needs. When you schedule your ${city} appointment, we'll provide a complete checklist of required documents and identification.

**Can you explain the ${service.toLowerCase()} process in ${city}?**
Our process is straightforward: schedule your appointment, we review your documents, provide professional service at your ${city} location, and you receive completed documents immediately.

**What if I have questions during the ${service.toLowerCase()} process in ${city}?**
Our experienced professionals are happy to explain each step and answer any questions during your ${city} appointment.

## Contact Us for ${service} in ${city}

Have more questions about ${service.toLowerCase()} in ${city}, ${county}? Contact us today to speak with a professional who understands local requirements and can provide the reliable service you need.

*Professional ${service.toLowerCase()} services throughout ${city}, ${county} County.*
      `,
      metaDescription: (service: string, city: string, county: string) => 
        `Common ${service.toLowerCase()} questions answered for ${city}, ${county} residents. Professional, mobile service available 7 days a week throughout ${county} County.`,
      focusKeyword: (service: string, city: string) => `${service.toLowerCase()} ${city.toLowerCase()} faq`
    },
    'local-spotlight': {
      title: (service: string, city: string, county: string) => `${city}, ${county}: Your Local ${service} Resource`,
      content: (service: string, city: string, county: string) => `
# ${service} Services: Spotlight on ${city}, ${county}

## Discovering ${city}, ${county}

${city} is a vibrant community in ${county} County, and we're proud to serve this area with professional ${service.toLowerCase()} services. Whether you're a long-time ${city} resident or new to the area, we understand the unique needs of our local community.

## Why ${city} Residents Choose Our ${service} Services

### Community Connection
- Locally focused ${service.toLowerCase()} professional
- Understanding of ${city} and ${county} County requirements
- Established presence in the ${city} community
- Commitment to serving ${city} families and businesses

### Convenient Service
- Mobile ${service.toLowerCase()} throughout ${city}
- Flexible scheduling for ${city} residents
- Same-day availability in ${county} County
- Professional service you can trust

## Popular ${service} Needs in ${city}

${city} residents frequently need ${service.toLowerCase()} for:
- Real estate transactions in ${county} County
- Business documents and contracts
- Personal and family legal documents
- Estate planning and related paperwork
- Educational and employment documentation

## Serving the Greater ${city} Area

While ${city} is our primary focus, we extend our ${service.toLowerCase()} services throughout ${county} County. This includes nearby communities and ensures that everyone in the area has access to professional, reliable service.

## ${city} Community Commitment

As your local ${service.toLowerCase()} professional, we're committed to:
- Supporting ${city} businesses and residents
- Providing exceptional service throughout ${county} County
- Maintaining strong community connections
- Offering competitive pricing for ${city} area services

## About ${county} County Services

${county} County has specific requirements for various documents and legal processes. Our expertise in local regulations ensures that your ${service.toLowerCase()} needs are handled correctly the first time, saving you time and potential complications.

## Schedule Your ${city} ${service} Appointment

Ready to experience professional ${service.toLowerCase()} in ${city}? We make the process simple and convenient. Contact us today to schedule your appointment and discover why ${city} residents trust us for their important document needs.

## ${city} Service Area

Our ${service.toLowerCase()} services cover:
- All of ${city}, ${county}
- Surrounding ${county} County communities
- Nearby areas within our service radius

*Your trusted ${service.toLowerCase()} professional serving ${city}, ${county} and the surrounding area.*
      `,
      metaDescription: (service: string, city: string, county: string) => 
        `Local ${service.toLowerCase()} spotlight for ${city}, ${county}. Community-focused professional service throughout ${county} County. Schedule your appointment today.`,
      focusKeyword: (service: string, city: string) => `${city.toLowerCase()} ${service.toLowerCase()}`
    }
  };

  const handleLocationToggle = (locationKey: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationKey) 
        ? prev.filter(l => l !== locationKey)
        : [...prev, locationKey]
    );
  };

  const generateContent = async () => {
    if (!selectedService || selectedLocations.length === 0) return;

    setGenerating(true);
    setProgress(0);

    const service = SERVICES.find(s => s.slug === selectedService);
    if (!service) return;

    const posts = [];
    const template = contentTemplates[contentType];
    
    for (let i = 0; i < selectedLocations.length; i++) {
      const locationKey = selectedLocations[i];
      const location = LOCATIONS_CITY.find(l => `${l.city}-${l.county}` === locationKey);
      
      if (location) {
        const post = {
          title: template.title(service.serviceName, location.city, location.county),
          content: template.content(service.serviceName, location.city, location.county),
          slug: `${service.slug}-${location.city.toLowerCase().replace(/\s+/g, '-')}-${location.county.toLowerCase().replace(/\s+/g, '-')}-${contentType}`,
          category: service.category || 'general-notary',
          serviceSlug: service.slug,
          metaDescription: template.metaDescription(service.serviceName, location.city, location.county),
          focusKeyword: template.focusKeyword(service.serviceName, location.city)
        };
        
        posts.push(post);
      }
      
      setProgress(((i + 1) / selectedLocations.length) * 100);
      
      // Small delay to show progress
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    onGenerate(posts);
    setGenerating(false);
    setProgress(0);
  };

  const topCounties = ['Hamilton', 'Montgomery', 'Warren', 'Butler', 'Clermont'];
  const groupedLocations = LOCATIONS_CITY.reduce((acc, location) => {
    if (!acc[location.county]) {
      acc[location.county] = [];
    }
    acc[location.county].push(location);
    return acc;
  }, {} as Record<string, typeof LOCATIONS_CITY>);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Bulk Content Generator
          <Badge variant="secondary">Generate Location-Specific Posts</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Service Type</label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.serviceName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Content Type</label>
            <Select value={contentType} onValueChange={setContentType as any}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service-guide">Service Guide</SelectItem>
                <SelectItem value="faq">FAQ Page</SelectItem>
                <SelectItem value="local-spotlight">Local Spotlight</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Select Locations</label>
            <div className="text-xs text-muted-foreground">
              {selectedLocations.length} locations selected
            </div>
          </div>
          
          <div className="max-h-64 overflow-y-auto space-y-3 border rounded-md p-3">
            {topCounties.map(county => (
              <div key={county} className="space-y-2">
                <div className="font-medium text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {county} County
                </div>
                <div className="grid grid-cols-2 gap-2 ml-6">
                  {groupedLocations[county]?.map(location => {
                    const locationKey = `${location.city}-${location.county}`;
                    return (
                      <div key={locationKey} className="flex items-center space-x-2">
                        <Checkbox
                          id={locationKey}
                          checked={selectedLocations.includes(locationKey)}
                          onCheckedChange={() => handleLocationToggle(locationKey)}
                        />
                        <label 
                          htmlFor={locationKey}
                          className="text-sm cursor-pointer hover:text-primary"
                        >
                          {location.city}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {generating && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Generating content...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}

        <div className="flex gap-2">
          <Button 
            onClick={generateContent}
            disabled={!selectedService || selectedLocations.length === 0 || generating}
            className="flex-1"
          >
            <FileText className="h-4 w-4 mr-2" />
            Generate {selectedLocations.length} Blog Posts
          </Button>
        </div>

        {selectedLocations.length > 0 && (
          <div className="text-xs text-muted-foreground p-3 bg-muted/30 rounded-lg">
            <strong>Preview:</strong> This will create {selectedLocations.length} blog posts for {selectedService} 
            in the selected locations, each optimized for local SEO with proper meta descriptions, 
            focus keywords, and location-specific content.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BulkContentGenerator;