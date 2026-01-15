// DOCUMENT LIBRARY SECTION
// Displays all 222+ notarizable documents organized by category with booking CTAs

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Home, 
  Building, 
  Users, 
  DollarSign, 
  Scale, 
  Globe, 
  Heart, 
  Car, 
  Plane, 
  GraduationCap, 
  Shield,
  Phone,
  Calendar,
  ArrowRight,
  TrendingUp,
  GitCompare
} from 'lucide-react';
import { 
  DOCUMENT_CATEGORIES, 
  getDocumentBookingService, 
  getDocumentCount, 
  getCategoryCount,
  getCurrentTrendingDocuments,
  getCurrentSeason,
  getDocumentComparison,
  getDocumentsWithComparisons,
  DocumentComparison
} from '@/data/documents';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';
import { DocumentCompareModal } from '@/components/DocumentCompareModal';

interface DocumentLibrarySectionProps {
  highlightService?: string;
  showAllCategories?: boolean;
  compact?: boolean;
  title?: string;
  className?: string;
  locationName?: string;
}

// Map categories to icons
const categoryIcons: Record<string, React.ReactNode> = {
  "Estate Planning & Legal": <Scale className="h-5 w-5" />,
  "Real Estate & Property": <Home className="h-5 w-5" />,
  "Business & Corporate": <Building className="h-5 w-5" />,
  "Family & Personal": <Users className="h-5 w-5" />,
  "Financial & Insurance": <DollarSign className="h-5 w-5" />,
  "Legal & Court Documents": <FileText className="h-5 w-5" />,
  "International & Apostille": <Globe className="h-5 w-5" />,
  "Healthcare & Medical": <Heart className="h-5 w-5" />,
  "DMV & Vehicle": <Car className="h-5 w-5" />,
  "Immigration & Citizenship": <Plane className="h-5 w-5" />,
  "Education & Academic": <GraduationCap className="h-5 w-5" />,
  "Military & Veterans": <Shield className="h-5 w-5" />,
};

// Map service slugs to category names for highlighting
const serviceToCategoryMap: Record<string, string[]> = {
  'estate-plans': ['Estate Planning & Legal'],
  'wills-trusts-estates': ['Estate Planning & Legal'],
  'real-estate': ['Real Estate & Property'],
  'real-estate-notary': ['Real Estate & Property'],
  'loan-signings': ['Real Estate & Property', 'Financial & Insurance'],
  'business-services': ['Business & Corporate'],
  'business-banking': ['Business & Corporate', 'Financial & Insurance'],
  'personal-family': ['Family & Personal'],
  'insurance-retirement': ['Financial & Insurance'],
  'legal-court': ['Legal & Court Documents'],
  'apostille': ['International & Apostille', 'Immigration & Citizenship'],
  'international-apostille': ['International & Apostille', 'Immigration & Citizenship'],
  'healthcare-notary': ['Healthcare & Medical', 'Estate Planning & Legal'],
  'vehicles-dmv': ['DMV & Vehicle'],
  'college-18-plus': ['Education & Academic', 'Family & Personal'],
  'general-notary': [],
  'other-notary': [],
};

const DocumentLibrarySection: React.FC<DocumentLibrarySectionProps> = ({
  highlightService,
  showAllCategories = true,
  compact = false,
  title,
  className = '',
  locationName
}) => {
  const [selectedComparison, setSelectedComparison] = useState<DocumentComparison | null>(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  
  const totalDocuments = getDocumentCount();
  const totalCategories = getCategoryCount();
  const trendingDocuments = getCurrentTrendingDocuments().slice(0, 6);
  const currentSeason = getCurrentSeason();
  const documentsWithComparisons = getDocumentsWithComparisons();
  const phoneNumber = BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '');
  
  // Determine which categories to highlight
  const highlightedCategories = highlightService 
    ? serviceToCategoryMap[highlightService] || []
    : [];
  
  // Sort categories - highlighted ones first
  const sortedCategories = [...DOCUMENT_CATEGORIES].sort((a, b) => {
    const aHighlighted = highlightedCategories.includes(a.category);
    const bHighlighted = highlightedCategories.includes(b.category);
    if (aHighlighted && !bHighlighted) return -1;
    if (!aHighlighted && bHighlighted) return 1;
    return 0;
  });

  // Determine default open items (highlighted categories)
  const defaultOpenItems = highlightedCategories.length > 0 
    ? highlightedCategories.map(cat => cat.toLowerCase().replace(/[^a-z0-9]/g, '-'))
    : [];

  const handleCompareClick = (document: string) => {
    const comparison = getDocumentComparison(document);
    if (comparison) {
      setSelectedComparison(comparison);
      setCompareModalOpen(true);
    }
  };

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {title || `All Documents We Notarize`}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {totalDocuments}+ document types across {totalCategories} categories. 
            Professional notarization with same-day mobile service.
          </p>
        </div>

        {/* Trending Documents Section */}
        {trendingDocuments.length > 0 && (
          <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 flex-wrap">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Trending Now: {currentSeason} Documents</span>
                {locationName && (
                  <Badge variant="outline" className="text-xs">
                    {locationName}
                  </Badge>
                )}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Most requested documents this season in your area
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {trendingDocuments.map((trending, index) => {
                  const bookingService = getDocumentBookingService(trending.document);
                  return (
                    <div 
                      key={index}
                      className="flex items-center justify-between gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-sm text-foreground block truncate">
                          {trending.document}
                        </span>
                        <span className="text-xs text-muted-foreground block truncate">
                          {trending.reason}
                        </span>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <BookingWidget 
                          defaultService={bookingService}
                          variant="default"
                          size="sm"
                          className="h-8 px-2 text-xs"
                        >
                          <Calendar className="h-3 w-3" />
                        </BookingWidget>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-2"
                          asChild
                        >
                          <a href={`tel:${phoneNumber}`}>
                            <Phone className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Document Categories Accordion */}
        <Accordion 
          type="multiple" 
          defaultValue={defaultOpenItems}
          className="space-y-4"
        >
          {sortedCategories.map((category) => {
            const categorySlug = category.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
            const isHighlighted = highlightedCategories.includes(category.category);
            const icon = categoryIcons[category.category] || <FileText className="h-5 w-5" />;
            
            return (
              <AccordionItem 
                key={categorySlug} 
                value={categorySlug}
                className={`border rounded-lg px-4 ${isHighlighted ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'}`}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className={`p-2 rounded-lg ${isHighlighted ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground text-lg">
                          {category.category}
                        </span>
                        <Badge variant={isHighlighted ? "default" : "secondary"} className="text-xs">
                          {category.documents.length} docs
                        </Badge>
                        {isHighlighted && (
                          <Badge variant="outline" className="text-xs border-primary text-primary">
                            Related
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="pb-4">
                  <div className={`grid gap-2 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {category.documents.map((doc, index) => {
                      const bookingService = getDocumentBookingService(doc);
                      const hasComparison = documentsWithComparisons.includes(doc);
                      
                      return (
                        <div 
                          key={index}
                          className="flex items-center justify-between gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
                        >
                          <div className="flex-1 min-w-0 flex items-center gap-2">
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                              {doc}
                            </span>
                            {hasComparison && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-1.5 text-xs text-muted-foreground hover:text-primary shrink-0"
                                onClick={() => handleCompareClick(doc)}
                                title="Compare with similar document"
                              >
                                <GitCompare className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <BookingWidget 
                              defaultService={bookingService}
                              variant="outline"
                              size="sm"
                              className="h-8 px-2 text-xs"
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              Book
                            </BookingWidget>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2 text-xs"
                              asChild
                            >
                              <a href={`tel:${phoneNumber}`}>
                                <Phone className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Bottom CTA */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Don't See Your Document?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We notarize virtually any legal document. Contact us to discuss your specific needs 
              or book an appointment and bring your documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS_CONFIG.phone}
                </a>
              </Button>
              <Button size="lg" asChild>
                <Link to="/book-now">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Appointment
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Link to Full Documents Page */}
        <div className="text-center mt-6">
          <Link 
            to="/documents" 
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View Full Documents Library with Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Document Comparison Modal */}
      <DocumentCompareModal
        comparison={selectedComparison}
        open={compareModalOpen}
        onOpenChange={setCompareModalOpen}
      />
    </section>
  );
};

export default DocumentLibrarySection;
