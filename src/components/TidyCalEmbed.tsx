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

  // TidyCal service-specific calendar IDs (replace with your actual TidyCal IDs)
  const tidyCalIds: Record<string, string> = {
    'general-notary': 'your-general-notary-id',
    'loan-signing': 'your-loan-signing-id',
    'real-estate': 'your-real-estate-id',
    'estate-planning': 'your-estate-planning-id',
    'apostille': 'your-apostille-id',
    'business': 'your-business-id',
    'healthcare': 'your-healthcare-id'
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