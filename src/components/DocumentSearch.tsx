import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, FileText } from 'lucide-react';
import { DOCUMENT_CATEGORIES, searchDocuments, getServicesForDocument } from '@/data/documents';

interface DocumentSearchProps {
  className?: string;
}

export const DocumentSearch = ({ className = "" }: DocumentSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredDocuments = searchQuery.trim() 
    ? searchDocuments(searchQuery)
    : selectedCategory 
      ? DOCUMENT_CATEGORIES.find(cat => cat.category === selectedCategory)?.documents || []
      : [];

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center">Find Your Document</h3>
        <p className="text-center text-muted-foreground">
          Search our comprehensive list of documents we can notarize
        </p>
        
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

        {/* Category Buttons */}
        {!searchQuery && (
          <div className="flex flex-wrap gap-2 justify-center">
            {DOCUMENT_CATEGORIES.map((category) => (
              <Badge
                key={category.category}
                variant={selectedCategory === category.category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => setSelectedCategory(
                  selectedCategory === category.category ? '' : category.category
                )}
              >
                {category.category}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      {filteredDocuments.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            {searchQuery ? `Search Results (${filteredDocuments.length})` : `${selectedCategory} Documents`}
          </h4>
          
          <div className="grid gap-3">
            {filteredDocuments.map((document) => {
              const relatedServices = getServicesForDocument(document);
              return (
                <Card key={document} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="font-medium">{document}</span>
                      </div>
                      {relatedServices.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {relatedServices.slice(0, 2).map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service.replace('-', ' ')}
                            </Badge>
                          ))}
                          {relatedServices.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{relatedServices.length - 2} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Category Information */}
      {selectedCategory && !searchQuery && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedCategory}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {DOCUMENT_CATEGORIES.find(cat => cat.category === selectedCategory)?.description}
            </p>
          </CardContent>
        </Card>
      )}

      {/* All Categories Overview */}
      {!searchQuery && !selectedCategory && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOCUMENT_CATEGORIES.map((category) => (
            <Card 
              key={category.category}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedCategory(category.category)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {category.description}
                </p>
                <Badge variant="outline">
                  {category.documents.length} documents
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};