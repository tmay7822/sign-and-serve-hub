import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Palette, 
  Upload, 
  Save, 
  Eye,
  CheckCircle,
  Download,
  RefreshCw
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

interface ThemeCustomizerProps {
  onClose?: () => void;
}

interface ThemeColors {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  brandNavy: string;
  brandBlue: string;
  brandLight: string;
  brandGold: string;
}

const PRESET_THEMES = BUSINESS_CONFIG.theme.options;

export function ThemeCustomizer({ onClose }: ThemeCustomizerProps) {
  const [selectedTheme, setSelectedTheme] = useState(BUSINESS_CONFIG.theme.selected);
  const [customColors, setCustomColors] = useState<ThemeColors>(
    PRESET_THEMES[selectedTheme as keyof typeof PRESET_THEMES] as ThemeColors
  );
  const [logoUrl, setLogoUrl] = useState(BUSINESS_CONFIG.logo.url);
  const [saved, setSaved] = useState(false);

  const handleThemeSelect = (themeKey: string) => {
    setSelectedTheme(themeKey);
    setCustomColors(PRESET_THEMES[themeKey as keyof typeof PRESET_THEMES] as ThemeColors);
  };

  const updateColor = (colorKey: keyof ThemeColors, value: string) => {
    setCustomColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const handleSave = () => {
    const themeConfig = {
      selected: selectedTheme,
      customColors,
      logo: {
        url: logoUrl,
        alt: BUSINESS_CONFIG.logo.alt
      }
    };
    
    localStorage.setItem('themeConfig', JSON.stringify(themeConfig));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const resetToDefaults = () => {
    const defaultTheme = BUSINESS_CONFIG.theme.selected;
    setSelectedTheme(defaultTheme);
    setCustomColors(PRESET_THEMES[defaultTheme as keyof typeof PRESET_THEMES] as ThemeColors);
    setLogoUrl(BUSINESS_CONFIG.logo.url);
  };

  const hslToHex = (hsl: string): string => {
    // Convert HSL to hex for color input
    const [h, s, l] = hsl.split(' ').map(v => parseInt(v.replace('%', '')));
    const hue = h / 360;
    const saturation = s / 100;
    const lightness = l / 100;

    const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const x = c * (1 - Math.abs((hue * 6) % 2 - 1));
    const m = lightness - c / 2;

    let r, g, b;
    if (hue < 1/6) {
      [r, g, b] = [c, x, 0];
    } else if (hue < 2/6) {
      [r, g, b] = [x, c, 0];
    } else if (hue < 3/6) {
      [r, g, b] = [0, c, x];
    } else if (hue < 4/6) {
      [r, g, b] = [0, x, c];
    } else if (hue < 5/6) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {saved && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Theme saved successfully! Your website appearance has been updated.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Theme Customizer</h2>
          <p className="text-muted-foreground">
            Customize your website's colors, fonts, and branding
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={resetToDefaults}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview Changes
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Theme
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Theme Presets */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Color Themes
              </CardTitle>
              <CardDescription>
                Choose from professional color schemes or customize your own
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(PRESET_THEMES).map(([key, theme]) => (
                  <div
                    key={key}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedTheme === key ? 'border-primary bg-primary/5' : 'border-border'
                    }`}
                    onClick={() => handleThemeSelect(key)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{theme.name}</h3>
                      {selectedTheme === key && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex gap-2 mb-2">
                      {Object.entries(theme).slice(2, 6).map(([colorKey, colorValue]) => (
                        <div
                          key={colorKey}
                          className="w-6 h-6 rounded border"
                          style={{ backgroundColor: `hsl(${colorValue})` }}
                          title={colorKey}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Custom Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Colors</CardTitle>
              <CardDescription>
                Fine-tune colors for your selected theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(customColors).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={key} className="text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </Label>
                    <div className="flex gap-2">
                      <div
                        className="w-10 h-10 rounded border flex-shrink-0"
                        style={{ backgroundColor: `hsl(${value})` }}
                      />
                      <Input
                        id={key}
                        value={value}
                        onChange={(e) => updateColor(key as keyof ThemeColors, e.target.value)}
                        placeholder="000 0% 0%"
                        className="font-mono text-sm"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      HSL format: hue saturation% lightness%
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Logo & Branding */}
          <Card>
            <CardHeader>
              <CardTitle>Logo & Branding</CardTitle>
              <CardDescription>
                Upload your logo and configure branding elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="logo">Logo URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="logo"
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                    placeholder="/path/to/logo.png"
                  />
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {logoUrl && (
                <div className="p-4 border rounded-lg">
                  <p className="text-sm font-medium mb-2">Current Logo Preview:</p>
                  <div className="bg-muted p-4 rounded">
                    <img 
                      src={logoUrl} 
                      alt="Logo preview" 
                      className="max-h-16 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Logo Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>
                See how your theme looks in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: `hsl(${customColors.brandLight})`,
                  color: `hsl(${customColors.primary})`
                }}
              >
                <div 
                  className="p-3 rounded mb-3"
                  style={{ backgroundColor: `hsl(${customColors.primary})` }}
                >
                  <h3 
                    className="font-bold text-lg"
                    style={{ color: `hsl(${customColors.primaryForeground})` }}
                  >
                    Your Business Name
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm">
                    Professional mobile notary services throughout your area.
                  </p>
                  
                  <button 
                    className="px-4 py-2 rounded text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: `hsl(${customColors.accent})`,
                      color: `hsl(${customColors.accentForeground})`
                    }}
                  >
                    Get Quote Now
                  </button>
                  
                  <div className="flex gap-2 mt-3">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `hsl(${customColors.brandNavy})` }}
                    />
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `hsl(${customColors.brandBlue})` }}
                    />
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `hsl(${customColors.brandGold})` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Selected Theme:</strong> {PRESET_THEMES[selectedTheme as keyof typeof PRESET_THEMES]?.name}
              </div>
              <div>
                <strong>Primary Color:</strong> <code>hsl({customColors.primary})</code>
              </div>
              <div>
                <strong>Accent Color:</strong> <code>hsl({customColors.accent})</code>
              </div>
              <div>
                <strong>Logo:</strong> {logoUrl ? 'Custom logo set' : 'Default logo'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Theme</CardTitle>
              <CardDescription>
                Download your theme configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Theme Config
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Branding Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Color Psychology</h4>
              <p className="text-muted-foreground">
                Blue conveys trust and professionalism. Red creates urgency and action. 
                Choose colors that match your business personality.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Logo Guidelines</h4>
              <p className="text-muted-foreground">
                Use high-resolution PNG or SVG files. Ensure your logo is readable 
                at small sizes and works on both light and dark backgrounds.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Consistency</h4>
              <p className="text-muted-foreground">
                Maintain consistent branding across all touchpoints. Your theme 
                should reflect your business cards, uniforms, and other materials.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}