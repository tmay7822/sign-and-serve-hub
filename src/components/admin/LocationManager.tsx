import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Plus, 
  Trash2, 
  Save,
  Download,
  Upload,
  CheckCircle,
  AlertTriangle,
  Eye
} from 'lucide-react';
import { LOCATIONS } from '@/config/business';

interface LocationManagerProps {
  onClose?: () => void;
}

interface LocationData {
  county: string;
  city: string;
  zip: string;
  state: string;
  enabled: boolean;
  priority: 'high' | 'medium' | 'low';
}

const US_STATES = [
  { value: 'OH', label: 'Ohio' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'IN', label: 'Indiana' },
  { value: 'MI', label: 'Michigan' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'WV', label: 'West Virginia' }
];

const OHIO_COUNTIES = [
  'Hamilton', 'Warren', 'Montgomery', 'Butler', 'Greene', 'Clinton', 
  'Clermont', 'Brown', 'Adams', 'Highland', 'Ross', 'Pickaway',
  'Franklin', 'Delaware', 'Marion', 'Union', 'Madison', 'Fayette'
];

export function LocationManager({ onClose }: LocationManagerProps) {
  const [locations, setLocations] = useState<LocationData[]>(
    LOCATIONS.map(loc => ({ ...loc, enabled: true, priority: 'medium' as const }))
  );
  const [newLocation, setNewLocation] = useState<Partial<LocationData>>({
    state: 'OH',
    enabled: true,
    priority: 'medium'
  });
  const [saved, setSaved] = useState(false);
  const [selectedState, setSelectedState] = useState('OH');

  const addLocation = () => {
    if (newLocation.county && newLocation.city && newLocation.zip && newLocation.state) {
      setLocations(prev => [...prev, newLocation as LocationData]);
      setNewLocation({
        state: selectedState,
        enabled: true,
        priority: 'medium'
      });
    }
  };

  const removeLocation = (index: number) => {
    setLocations(prev => prev.filter((_, i) => i !== index));
  };

  const updateLocation = (index: number, field: keyof LocationData, value: any) => {
    setLocations(prev => prev.map((loc, i) => 
      i === index ? { ...loc, [field]: value } : loc
    ));
  };

  const toggleLocation = (index: number) => {
    updateLocation(index, 'enabled', !locations[index].enabled);
  };

  const handleSave = () => {
    localStorage.setItem('serviceLocations', JSON.stringify(locations));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addCountyLocations = (county: string, state: string) => {
    // This would typically fetch cities from an API or database
    // For now, we'll add a placeholder that users can customize
    const newLoc: LocationData = {
      county,
      city: `${county} County`,
      zip: '00000',
      state,
      enabled: true,
      priority: 'medium'
    };
    
    setLocations(prev => [...prev, newLoc]);
  };

  const exportCSV = () => {
    const headers = ['County', 'City', 'ZIP', 'State', 'Enabled', 'Priority'];
    const csvContent = [
      headers.join(','),
      ...locations.map(loc => 
        `${loc.county},${loc.city},${loc.zip},${loc.state},${loc.enabled},${loc.priority}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'service-locations.csv';
    a.click();
  };

  const enabledLocations = locations.filter(loc => loc.enabled);
  const highPriorityCount = enabledLocations.filter(loc => loc.priority === 'high').length;
  const mediumPriorityCount = enabledLocations.filter(loc => loc.priority === 'medium').length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {saved && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Locations saved successfully! Your local SEO pages will be updated.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Location Manager</h2>
          <p className="text-muted-foreground">
            Manage your service areas to automatically generate local SEO pages
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{enabledLocations.length}</div>
              <div className="text-sm text-muted-foreground">Active Locations</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{highPriorityCount}</div>
              <div className="text-sm text-muted-foreground">High Priority</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{mediumPriorityCount}</div>
              <div className="text-sm text-muted-foreground">Medium Priority</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{new Set(locations.map(l => l.county)).size}</div>
              <div className="text-sm text-muted-foreground">Counties</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="manage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="manage">Manage Locations</TabsTrigger>
          <TabsTrigger value="add">Add Locations</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Import</TabsTrigger>
        </TabsList>

        {/* Manage Existing Locations */}
        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Current Service Locations</CardTitle>
              <CardDescription>
                Enable/disable locations and set their priority for SEO
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {locations.map((location, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 border rounded-lg ${
                    !location.enabled ? 'opacity-50 bg-muted' : ''
                  }`}>
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={location.enabled}
                        onChange={() => toggleLocation(index)}
                        className="rounded"
                      />
                      <div>
                        <div className="font-medium">
                          {location.city}, {location.county} County
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {location.zip}, {location.state}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select 
                        value={location.priority} 
                        onValueChange={(value: 'high' | 'medium' | 'low') => 
                          updateLocation(index, 'priority', value)
                        }
                      >
                        <SelectTrigger className="w-28">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                      <Badge variant={
                        location.priority === 'high' ? 'default' : 
                        location.priority === 'medium' ? 'secondary' : 'outline'
                      }>
                        {location.priority}
                      </Badge>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => removeLocation(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add New Locations */}
        <TabsContent value="add">
          <div className="space-y-6">
            {/* Manual Entry */}
            <Card>
              <CardHeader>
                <CardTitle>Add Individual Location</CardTitle>
                <CardDescription>
                  Manually add a specific city to your service area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select 
                      value={newLocation.state} 
                      onValueChange={(value) => {
                        setNewLocation(prev => ({...prev, state: value}));
                        setSelectedState(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map(state => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="county">County</Label>
                    <Input
                      id="county"
                      value={newLocation.county || ''}
                      onChange={(e) => setNewLocation(prev => ({...prev, county: e.target.value}))}
                      placeholder="County name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={newLocation.city || ''}
                      onChange={(e) => setNewLocation(prev => ({...prev, city: e.target.value}))}
                      placeholder="City name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      value={newLocation.zip || ''}
                      onChange={(e) => setNewLocation(prev => ({...prev, zip: e.target.value}))}
                      placeholder="ZIP code"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={addLocation} className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Location
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick County Addition */}
            <Card>
              <CardHeader>
                <CardTitle>Add by County</CardTitle>
                <CardDescription>
                  Quickly add entire counties to your service area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {OHIO_COUNTIES.map(county => (
                    <Button
                      key={county}
                      variant="outline"
                      size="sm"
                      onClick={() => addCountyLocations(county, selectedState)}
                      className="justify-start"
                    >
                      {county} County
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Bulk Import */}
        <TabsContent value="bulk">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Import Locations</CardTitle>
              <CardDescription>
                Import multiple locations from a CSV file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    CSV format: County, City, ZIP, State, Enabled, Priority
                    <br />
                    Example: Hamilton, Cincinnati, 45202, OH, true, high
                  </AlertDescription>
                </Alert>

                <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Upload CSV File</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop your CSV file here or click to browse
                  </p>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={exportCSV}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Template
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Import
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* SEO Impact Info */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Impact</CardTitle>
          <CardDescription>
            Understanding how locations affect your website's search visibility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">High Priority Locations</h4>
              <p className="text-sm text-muted-foreground">
                Generate individual landing pages with full content optimization
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Medium Priority Locations</h4>
              <p className="text-sm text-muted-foreground">
                Generate basic landing pages with essential SEO elements
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Low Priority Locations</h4>
              <p className="text-sm text-muted-foreground">
                Include in sitemaps and location lists without dedicated pages
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}