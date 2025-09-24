import { useEffect } from 'react';

interface TidyCalEmbedProps {
  serviceId: string;
  className?: string;
  height?: string;
}

export const TidyCalEmbed = ({ serviceId, className = "", height = "600px" }: TidyCalEmbedProps) => {
  useEffect(() => {
    // Load TidyCal embed script if not already loaded
    if (!document.querySelector('script[src*="tidycal.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://asset.tidycal.com/js/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // TidyCal service-specific calendar IDs
  const tidyCalIds: Record<string, string> = {
    'general-notary': 'm42zv71/professional-general-notary',
    'loan-signings': 'm42zv71/loan-signing-real-estate',
    'real-estate': 'm42zv71/loan-signing-real-estate',
    'estate-plans': 'm42zv71/estateplanning-healthcare',
    'apostille': 'm42zv71/apostille-services',
    'business-docs': 'm42zv71/business-services',
    'healthcare-notary': 'm42zv71/estateplanning-healthcare'
  };

  const calendarId = tidyCalIds[serviceId] || tidyCalIds['general-notary'];

  return (
    <div className={`tidycal-embed ${className}`}>
      <iframe
        src={`https://tidycal.com/${calendarId}?embed=true`}
        width="100%"
        height={height}
        frameBorder="0"
        title="Schedule Appointment"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};