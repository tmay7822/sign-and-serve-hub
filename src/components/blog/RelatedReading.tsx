import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedReadingProps {
  title: string;
  slug: string;
  description?: string;
}

const RelatedReading = ({ title, slug, description }: RelatedReadingProps) => {
  return (
    <div className="border-t border-border pt-6 mt-8">
      <div className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-border hover:bg-accent/20 transition-colors">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">Related reading:</p>
          <Link 
            to={`/blog/${slug}`}
            className="group block"
          >
            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </Link>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
      </div>
    </div>
  );
};

export default RelatedReading;