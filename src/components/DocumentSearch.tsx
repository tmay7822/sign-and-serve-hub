import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Search, FileText, Calendar, Phone, Star, ChevronRight } from 'lucide-react';
import { 
  DOCUMENT_CATEGORIES, 
  POPULAR_DOCUMENTS,
  searchDocuments, 
  getServicesForDocument,
  getDocumentBookingService,
  getCategoryForDocument,
  ALL_DOCUMENTS
} from '@/data/documents';
import { BookingWidget } from '@/components/BookingWidget';
import { BUSINESS_CONFIG } from '@/config/business';

interface DocumentSearchProps {
  className?: string;
  showPopular?: boolean;
  showStats?: boolean;
}

export const DocumentSearch = ({ 
  className = "", 
  showPopular = true,
  showStats = true 
}: DocumentSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredDocuments = searchQuery.trim() 
    ? searchDocuments(searchQuery)
    : selectedCategory 
      ? DOCUMENT_CATEGORIES.find(cat => cat.category === selectedCategory)?.documents || []
      : [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
    setSearchQuery('');
  };

  const showResults = searchQuery.trim() || selectedCategory;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Stats */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Find Your Document</h3>
        <p className="text-center text-muted-foreground">
          Search our comprehensive list of documents we can notarize
        </p>
        
        {showStats && (
          <div className="flex justify-center gap-6 text-sm">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">{ALL_DOCUMENTS.length}</span>
              <p className="text-muted-foreground">Document Types</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">{DOCUMENT_CATEGORIES.length}</span>
              <p className="text-muted-foreground">Categories</p>
            </div>
          </div>
        )}
        
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for a document type..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedCategory('');
            }}
            className="pl-10"
          />
        </div>
      </div>

      {/* Sticky Category Pills */}
      <div className="sticky top-0 bg-background z-10 py-3 -mx-4 px-4 border-b">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2">
            <Badge 
              variant={selectedCategory === '' && !searchQuery ? "default" : "outline"}
              className="cursor-pointer shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => {
                setSelectedCategory('');
                setSearchQuery('');
              }}
            >
              All Categories
            </Badge>
            {DOCUMENT_CATEGORIES.map((category) => (
              <Badge
                key={category.category}
                variant={selectedCategory === category.category ? "default" : "outline"}
                className="cursor-pointer shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCategoryClick(category.category)}
              >
                {category.category} ({category.documents.length})
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Popular Documents - Quick Access */}
      {showPopular && !showResults && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" />
            <h4 className="text-lg font-semibold">Popular Documents</h4>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {POPULAR_DOCUMENTS.map((document) => {
              const category = getCategoryForDocument(document);
              const bookingService = getDocumentBookingService(document);
              
              return (
                <Card key={document} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4 text-primary shrink-0" />
                          <span className="font-medium truncate">{document}</span>
                        </div>
                        {category && (
                          <Badge variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        )}
                      </div>
                      <BookingWidget 
                        defaultService={bookingService}
                        size="sm"
                        variant="default"
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Book
                        </span>
                      </BookingWidget>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Search/Category Results */}
      {showResults && filteredDocuments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">
              {searchQuery 
                ? `Search Results (${filteredDocuments.length})` 
                : `${selectedCategory} (${filteredDocuments.length} documents)`}
            </h4>
            {selectedCategory && !searchQuery && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedCategory('')}
              >
                Clear Filter
              </Button>
            )}
          </div>
          
          {/* Category Description */}
          {selectedCategory && !searchQuery && (
            <Card className="bg-muted/50">
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  {DOCUMENT_CATEGORIES.find(cat => cat.category === selectedCategory)?.description}
                </p>
              </CardContent>
            </Card>
          )}
          
          <div className="grid gap-3">
            {filteredDocuments.map((document) => {
              const relatedServices = getServicesForDocument(document);
              const bookingService = getDocumentBookingService(document);
              const category = getCategoryForDocument(document);
              
              return (
                <Card key={document} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4 text-primary shrink-0" />
                          <span className="font-medium">{document}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {searchQuery && category && (
                            <Badge 
                              variant="outline" 
                              className="text-xs cursor-pointer hover:bg-secondary"
                              onClick={() => handleCategoryClick(category)}
                            >
                              {category}
                            </Badge>
                          )}
                          {relatedServices.slice(0, 2).map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service.replace(/-/g, ' ')}
                            </Badge>
                          ))}
                          {relatedServices.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{relatedServices.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <BookingWidget 
                          defaultService={bookingService}
                          size="sm"
                          variant="default"
                        >
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Book Now
                          </span>
                        </BookingWidget>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && filteredDocuments.length === 0 && (
        <Card className="text-center py-8">
          <CardContent>
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-semibold mb-2">No documents found</h4>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? We can notarize most documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <BookingWidget defaultService="general-notary">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book General Notary
                </span>
              </BookingWidget>
              <Button variant="outline" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Categories Overview */}
      {!showResults && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Browse by Category</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCUMENT_CATEGORIES.map((category) => (
              <Card 
                key={category.category}
                className="cursor-pointer hover:shadow-md transition-all hover:border-primary group"
                onClick={() => handleCategoryClick(category.category)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{category.category}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    {category.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {category.documents.length} documents
                    </Badge>
                    <div className="flex gap-1">
                      {category.relatedServices.slice(0, 1).map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service.replace(/-/g, ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold">Don't see your document?</h4>
              <p className="text-sm text-muted-foreground">
                We notarize virtually any legal document. Contact us for assistance.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {BUSINESS_CONFIG.phone}
                </a>
              </Button>
              <BookingWidget defaultService="general-notary" variant="default">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Now
                </span>
              </BookingWidget>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
