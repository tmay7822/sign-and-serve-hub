import { Link } from 'react-router-dom';

interface BlogMetaProps {
  publishDate: string;
  lastUpdated: string;
  readTime?: number;
}

const BlogMeta = ({ publishDate, lastUpdated, readTime }: BlogMetaProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
        <span>Published: {formatDate(publishDate)}</span>
        <span>|</span>
        <span>Last Updated: {formatDate(lastUpdated)}</span>
        {readTime && (
          <>
            <span>|</span>
            <span>{readTime} min read</span>
          </>
        )}
      </div>
      <p className="text-sm text-muted-foreground">
        Author:{' '}
        <Link to="/about" className="text-primary hover:underline font-medium">
          Terry May
        </Link>
        {' — Mobile Notary & Loan Signing Agent, Waynesville OH'}
      </p>
    </div>
  );
};

export default BlogMeta;
