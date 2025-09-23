import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path: string) => {
    const names: { [key: string]: string } = {
      'blog': 'Blog',
      'general-notary': 'General Notary',
      'loan-signings': 'Loan Signings',
      'estate-plans': 'Estate Plans',
      'real-estate': 'Real Estate',
      'apostille': 'Apostille',
      'business-services': 'Business Services',
      'faq': 'FAQ',
      'contact': 'Contact Us',
      'college-18-plus': 'College & 18+ Notarizations',
      'personal-family': 'Personal & Family',
      'healthcare-notary': 'Healthcare Notarizations',
      'real-estate-notary': 'Real Estate Notarizations',
      'business-banking': 'Business & Banking',
      'legal-court': 'Legal & Court',
      'international-apostille': 'International & Apostille',
      'vehicles-dmv': 'Vehicles & DMV',
      'insurance-retirement': 'Insurance & Retirement',
      'wills-trusts-estates': 'Wills, Trusts & Estates',
      'other-notary': 'Other Notarizations',
      'poa-warren-lebanon': 'Power of Attorney Warren County Lebanon',
      'loan-signing-dayton-montgomery': 'Loan Signing Dayton Montgomery County',
      'general-notary-hamilton-cincinnati': 'General Notary Hamilton County Cincinnati',
      'wills-estates-warren-mason': 'Wills Estates Warren County Mason',
    };
    return names[path] || path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="bg-background border-b border-border py-3">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return (
                <React.Fragment key={name}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{getBreadcrumbName(name)}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={routeTo}>
                        {getBreadcrumbName(name)}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbNav;