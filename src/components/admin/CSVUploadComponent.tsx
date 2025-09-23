// CSV UPLOAD COMPONENT
// For white-label setup and location data management

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  handleFileUpload, 
  processLocationCSV, 
  validateBusinessConfig,
  BusinessConfig,
  CSVUploadResult 
} from '@/utils/csvUpload';
import { Upload, CheckCircle, AlertCircle, Download } from 'lucide-react';

interface CSVUploadComponentProps {
  onLocationUpload?: (locations: any[]) => void;
  onBusinessConfigSave?: (config: BusinessConfig) => void;
}

const CSVUploadComponent: React.FC<CSVUploadComponentProps> = ({
  onLocationUpload,
  onBusinessConfigSave
}) => {
  const [uploadStatus, setUploadStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [businessConfig, setBusinessConfig] = useState<Partial<BusinessConfig>>({
    businessName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    serviceArea: '',
    addressLine: '',
    zip: ''
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    try {
      setUploadStatus({ type: null, message: 'Processing file...' });
      
      const csvText = await handleFileUpload(file);
      const result = processLocationCSV(csvText);
      
      if (result.success) {
        setUploadStatus({ 
          type: 'success', 
          message: `Successfully processed ${result.data?.length || 0} locations` 
        });
        onLocationUpload?.(result.data || []);
      } else {
        setUploadStatus({ 
          type: 'error', 
          message: `Upload failed: ${result.errors.join(', ')}` 
        });
      }
    } catch (error) {
      setUploadStatus({ 
        type: 'error', 
        message: `Error processing file: ${error instanceof Error ? error.message : 'Unknown error'}` 
      });
    }
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleBusinessConfigSubmit = () => {
    const result = validateBusinessConfig(businessConfig);
    
      if (result.success && result.data) {
        setUploadStatus({ 
          type: 'success', 
          message: 'Business configuration saved successfully' 
        });
        onBusinessConfigSave?.(result.data[0] as BusinessConfig);
      } else {
      setUploadStatus({ 
        type: 'error', 
        message: `Configuration errors: ${result.errors.join(', ')}` 
      });
    }
  };
  
  const downloadSampleCSV = () => {
    const sampleData = [
      'county,city,zip,state',
      'Hamilton,Cincinnati,45202,OH',
      'Hamilton,Blue Ash,45242,OH',
      'Warren,Mason,45040,OH',
      'Warren,Lebanon,45036,OH',
      'Montgomery,Dayton,45402,OH'
    ].join('\n');
    
    const blob = new Blob([sampleData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample-locations.csv';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Business Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Business Configuration</CardTitle>
          <CardDescription>
            Configure your business information for the white-label site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                value={businessConfig.businessName}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, businessName: e.target.value }))}
                placeholder="Your Mobile Notary LLC"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={businessConfig.phone}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={businessConfig.email}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, email: e.target.value }))}
                placeholder="you@yourbusiness.com"
              />
            </div>
            <div>
              <Label htmlFor="city">Primary City *</Label>
              <Input
                id="city"
                value={businessConfig.city}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, city: e.target.value }))}
                placeholder="Cincinnati"
              />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                value={businessConfig.state}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, state: e.target.value }))}
                placeholder="OH"
              />
            </div>
            <div>
              <Label htmlFor="serviceArea">Service Area *</Label>
              <Input
                id="serviceArea"
                value={businessConfig.serviceArea}
                onChange={(e) => setBusinessConfig(prev => ({ ...prev, serviceArea: e.target.value }))}
                placeholder="Cincinnati-Dayton Metro"
              />
            </div>
          </div>
          <Button onClick={handleBusinessConfigSubmit} className="w-full">
            Save Business Configuration
          </Button>
        </CardContent>
      </Card>
      
      {/* Location Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Location Data Upload</CardTitle>
          <CardDescription>
            Upload a CSV file with your service locations (counties, cities, ZIP codes)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Button 
              onClick={downloadSampleCSV}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Sample CSV
            </Button>
            <span className="text-sm text-muted-foreground">
              Use this format: county, city, zip, state
            </span>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileSelect}
              className="hidden"
              id="csv-upload"
            />
            <label htmlFor="csv-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Upload Location CSV</p>
              <p className="text-muted-foreground">
                Click to select or drag and drop your CSV file
              </p>
            </label>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p><strong>CSV Format:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Header row: county, city, zip, state</li>
              <li>One location per row</li>
              <li>No special characters in location names</li>
              <li>Example: Hamilton,Cincinnati,45202,OH</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      {/* Status Messages */}
      {uploadStatus.type && (
        <Alert className={uploadStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
          {uploadStatus.type === 'success' ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription className={uploadStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
            {uploadStatus.message}
          </AlertDescription>
        </Alert>
      )}
      
      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Setup Instructions</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm">
          <ol>
            <li><strong>Configure Business Info:</strong> Fill out all required business information above.</li>
            <li><strong>Prepare Location Data:</strong> Create a CSV file with your service areas (download sample for format).</li>
            <li><strong>Upload Locations:</strong> Upload your CSV to generate local service pages automatically.</li>
            <li><strong>Review & Deploy:</strong> Check the generated pages and deploy your white-label site.</li>
          </ol>
          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p><strong>White Label Features:</strong></p>
            <ul>
              <li>Automatic local service page generation</li>
              <li>SEO-optimized URLs and meta tags</li>
              <li>Business branding throughout</li>
              <li>Structured data for local search</li>
              <li>Mobile-responsive design</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CSVUploadComponent;