// CONTENT HUB BREADCRUMBS
// Enhanced breadcrumb navigation for SEO and user experience

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface ContentHubBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const ContentHubBreadcrumbs: React.FC<ContentHubBreadcrumbsProps> = ({
  items,
  className = ""
}) => {
  return (
    <nav className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`} aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
          {item.href && !item.current ? (
            <Link 
              to={item.href}
              className="hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={`${item.current ? 'text-foreground font-semibold' : 'font-medium'}`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default ContentHubBreadcrumbs;