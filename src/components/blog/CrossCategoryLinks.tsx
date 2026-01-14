// CROSS-CATEGORY LINKS COMPONENT
// Reusable component for displaying cross-links between related blog categories for SEO

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Shield, GraduationCap, Globe, FileText, Users } from 'lucide-react';
import { BLOG_CATEGORIES } from '@/data/blog';

interface CrossCategoryLinksProps {
  currentCategorySlug: string;
  countySlug?: string;
  countyName?: string;
}

// Define which categories link to each other
const CROSS_CATEGORY_MAP: Record<string, string[]> = {
  'immigration-guides': ['military-guides', 'education-guides', 'apostille-guides'],
  'military-guides': ['immigration-guides', 'education-guides', 'estate-planning-guides'],
  'education-guides': ['immigration-guides', 'military-guides', 'apostille-guides'],
  'apostille-guides': ['immigration-guides', 'education-guides', 'business-guides'],
  'healthcare-guides': ['estate-planning-guides', 'general-notary-guides'],
  'estate-planning-guides': ['healthcare-guides', 'military-guides', 'general-notary-guides'],
};

// Icons for each category
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'immigration-guides': <Globe className="h-4 w-4" />,
  'military-guides': <Shield className="h-4 w-4" />,
  'education-guides': <GraduationCap className="h-4 w-4" />,
  'apostille-guides': <FileText className="h-4 w-4" />,
  'healthcare-guides': <Users className="h-4 w-4" />,
  'estate-planning-guides': <BookOpen className="h-4 w-4" />,
  'general-notary-guides': <FileText className="h-4 w-4" />,
  'business-guides': <FileText className="h-4 w-4" />,
};

// Cross-linking descriptions for context
const CROSS_LINK_CONTEXT: Record<string, Record<string, string>> = {
  'immigration-guides': {
    'military-guides': 'Military families often need immigration services for spouses',
    'education-guides': 'Students on F-1 visas and study abroad programs',
    'apostille-guides': 'Documents for international authentication',
  },
  'military-guides': {
    'immigration-guides': 'Military spouses and naturalization documents',
    'education-guides': 'GI Bill and military family education',
    'estate-planning-guides': 'Pre-deployment POAs and veteran estate planning',
  },
  'education-guides': {
    'immigration-guides': 'International student documentation',
    'military-guides': 'Military family education and GI Bill',
    'apostille-guides': 'Diploma authentication for abroad',
  },
};

const CrossCategoryLinks: React.FC<CrossCategoryLinksProps> = ({
  currentCategorySlug,
  countySlug,
  countyName,
}) => {
  const relatedCategories = CROSS_CATEGORY_MAP[currentCategorySlug] || [];
  
  if (relatedCategories.length === 0) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          {countyName ? `Related Topics in ${countyName} County` : 'Related Topics'}
        </h3>
        <ul className="space-y-3">
          {relatedCategories.map((catSlug) => {
            const category = BLOG_CATEGORIES.find(c => c.slug === catSlug);
            if (!category) return null;
            
            const linkPath = countySlug 
              ? `/blog/${catSlug}-${countySlug}-ohio`
              : `/blog/${catSlug}`;
            
            const context = CROSS_LINK_CONTEXT[currentCategorySlug]?.[catSlug];
            
            return (
              <li key={catSlug}>
                <Link 
                  to={linkPath}
                  className="group flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary mt-0.5 shrink-0">
                    {CATEGORY_ICONS[catSlug] || <ArrowRight className="h-4 w-4" />}
                  </span>
                  <div>
                    <span className="font-medium group-hover:underline">
                      {category.title}
                      {countyName && ` in ${countyName} County`}
                    </span>
                    {context && (
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        {context}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CrossCategoryLinks;
