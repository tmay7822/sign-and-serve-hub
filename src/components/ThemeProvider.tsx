import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const selectedTheme = BUSINESS_CONFIG.theme.selected;
    const themeConfig = BUSINESS_CONFIG.theme.options[selectedTheme];
    
    if (themeConfig) {
      const root = document.documentElement;
      
      // Apply theme colors to CSS variables
      root.style.setProperty('--primary', themeConfig.primary);
      root.style.setProperty('--primary-foreground', themeConfig.primaryForeground);
      root.style.setProperty('--accent', themeConfig.accent);
      root.style.setProperty('--accent-foreground', themeConfig.accentForeground);
      root.style.setProperty('--brand-navy', themeConfig.brandNavy);
      root.style.setProperty('--brand-blue', themeConfig.brandBlue);
      root.style.setProperty('--brand-light', themeConfig.brandLight);
      root.style.setProperty('--brand-gold', themeConfig.brandGold);
      
      // Update gradients
      root.style.setProperty('--gradient-primary', `linear-gradient(135deg, hsl(${themeConfig.brandNavy}), hsl(${themeConfig.brandBlue}))`);
      root.style.setProperty('--gradient-hero', `linear-gradient(135deg, hsl(${themeConfig.brandNavy} / 0.9), hsl(${themeConfig.brandBlue} / 0.8))`);
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;