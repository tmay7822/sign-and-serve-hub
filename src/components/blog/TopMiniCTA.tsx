import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '@/config/business';

const TopMiniCTA = () => {
  return (
    <div className="bg-card/50 border border-border rounded-lg p-4 my-6">
      <p className="text-sm text-muted-foreground mb-3">
        Need a mobile notary in Southwest Ohio? We come to you.
      </p>
      <div className="flex flex-wrap gap-1 text-sm">
        <span className="text-foreground font-medium">Popular services:</span>
        <Link 
          to="/loan-signings" 
          className="text-primary hover:underline font-medium"
        >
          Loan Signings
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link 
          to="/wills-trusts-estates" 
          className="text-primary hover:underline font-medium"
        >
          Wills/POA
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link 
          to="/healthcare-notary" 
          className="text-primary hover:underline font-medium"
        >
          Hospital Notary
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link 
          to="/service-areas" 
          className="text-primary hover:underline font-medium"
        >
          Service Areas
        </Link>
      </div>
    </div>
  );
};

export default TopMiniCTA;