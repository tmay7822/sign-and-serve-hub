import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';

interface LocationServiceLinkProps {
  children?: React.ReactNode;
}

const LocationServiceLink = ({ children }: LocationServiceLinkProps) => {
  return (
    <div className="bg-accent/10 border-l-4 border-primary p-4 my-6 rounded-r-lg">
      {children || (
        <p className="text-sm text-muted-foreground">
          We serve Hamilton, Butler, Warren, Clermont, Brown, Montgomery, Greene, and Clinton Counties—see{' '}
          <Link 
            to="/service-areas" 
            className="text-primary hover:underline font-medium"
          >
            Service Areas
          </Link>
          .
        </p>
      )}
    </div>
  );
};

export default LocationServiceLink;