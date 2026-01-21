import { HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface HelpTooltipProps {
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export function HelpTooltip({ content, side = 'top', className = '' }: HelpTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={`inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors ${className}`}
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs text-sm">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// Common help text for reuse
export const HELP_TEXT = {
  businessName: 'Your official business name as it should appear on your website and in search results.',
  tagline: 'A short phrase that describes what you do. Example: "Mobile Notary Services for Greater Cincinnati"',
  phone: 'Your main business phone number. This will be used for call buttons throughout the site.',
  email: 'Your business email address. Customers will use this to contact you.',
  address: 'Your physical business address. This helps with local SEO and map listings.',
  
  metaTitle: 'The title that appears in browser tabs and search results. Keep it under 60 characters.',
  metaDescription: 'A brief summary of your page for search results. Keep it under 160 characters.',
  focusKeyword: 'The main keyword you want this page to rank for in search engines.',
  
  locationPriority: 'High priority locations are featured more prominently in search results and navigation.',
  locationEnabled: 'Toggle whether this location page is active on your website.',
  
  blogCategory: 'Categorize your post to help visitors find related content.',
  blogTags: 'Add relevant keywords as tags to improve discoverability.',
  blogSlug: 'The URL-friendly version of your title. Use lowercase letters and hyphens.',
  blogFeatured: 'Featured posts appear prominently on your blog homepage.',
  
  themeColors: 'HSL color format: hue (0-360), saturation (0-100%), lightness (0-100%).',
  logoUrl: 'Upload your logo or enter a URL. Recommended size: 200x60 pixels.',
  
  testimonialRating: 'Star rating from 1 to 5.',
  testimonialVerified: 'Mark as verified if this review came from a verified customer or platform.',
  testimonialSource: 'Where did this review come from? (Google, Yelp, or manual entry)',
};
