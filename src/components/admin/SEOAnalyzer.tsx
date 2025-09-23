import React from 'react';
import readingTime from 'reading-time';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, XCircle, Target, Clock, Hash } from 'lucide-react';

interface SEOAnalyzerProps {
  title: string;
  content: string;
  metaDescription: string;
  slug: string;
  focusKeyword?: string;
}

const SEOAnalyzer: React.FC<SEOAnalyzerProps> = ({
  title,
  content,
  metaDescription,
  slug,
  focusKeyword = ''
}) => {
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.trim().split(/\s+/).length;
  const readingStats = readingTime(textContent);
  
  // SEO Analysis
  const checks = [
    {
      label: 'Title Length',
      status: title.length >= 30 && title.length <= 60 ? 'good' : title.length > 0 ? 'warning' : 'error',
      message: `${title.length} characters (30-60 recommended)`,
      score: title.length >= 30 && title.length <= 60 ? 100 : title.length > 60 ? 70 : title.length > 0 ? 50 : 0
    },
    {
      label: 'Meta Description',
      status: metaDescription.length >= 120 && metaDescription.length <= 160 ? 'good' : metaDescription.length > 0 ? 'warning' : 'error',
      message: `${metaDescription.length} characters (120-160 recommended)`,
      score: metaDescription.length >= 120 && metaDescription.length <= 160 ? 100 : metaDescription.length > 160 ? 70 : metaDescription.length > 0 ? 50 : 0
    },
    {
      label: 'Content Length',
      status: wordCount >= 300 ? 'good' : wordCount >= 150 ? 'warning' : 'error',
      message: `${wordCount} words (300+ recommended for blog posts)`,
      score: wordCount >= 300 ? 100 : wordCount >= 150 ? 70 : wordCount > 0 ? 40 : 0
    },
    {
      label: 'URL Slug',
      status: slug.length > 0 && slug.length <= 75 ? 'good' : 'warning',
      message: `${slug.length} characters (3-75 recommended)`,
      score: slug.length > 0 && slug.length <= 75 ? 100 : 50
    }
  ];

  if (focusKeyword) {
    const keywordInTitle = title.toLowerCase().includes(focusKeyword.toLowerCase());
    const keywordInContent = textContent.toLowerCase().includes(focusKeyword.toLowerCase());
    const keywordInDescription = metaDescription.toLowerCase().includes(focusKeyword.toLowerCase());
    
    checks.push({
      label: 'Focus Keyword in Title',
      status: keywordInTitle ? 'good' : 'error',
      message: keywordInTitle ? 'Focus keyword found in title' : 'Focus keyword not found in title',
      score: keywordInTitle ? 100 : 0
    });
    
    checks.push({
      label: 'Focus Keyword in Content',
      status: keywordInContent ? 'good' : 'error',
      message: keywordInContent ? 'Focus keyword found in content' : 'Focus keyword not found in content',
      score: keywordInContent ? 100 : 0
    });
    
    checks.push({
      label: 'Focus Keyword in Description',
      status: keywordInDescription ? 'good' : 'warning',
      message: keywordInDescription ? 'Focus keyword found in description' : 'Focus keyword not found in description',
      score: keywordInDescription ? 100 : 70
    });
  }

  const overallScore = checks.reduce((sum, check) => sum + check.score, 0) / checks.length;
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          SEO Analysis
          <Badge variant="outline" className={getScoreColor(overallScore)}>
            {Math.round(overallScore)}/100
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Hash className="h-4 w-4" />
            {wordCount} words
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingStats.text}
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Overall SEO Score</span>
            <span className={getScoreColor(overallScore)}>{Math.round(overallScore)}/100</span>
          </div>
          <Progress value={overallScore} className="h-2" />
        </div>

        <div className="space-y-3">
          {checks.map((check, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              {getStatusIcon(check.status)}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{check.label}</div>
                <div className="text-xs text-muted-foreground">{check.message}</div>
              </div>
              <Badge 
                variant="outline" 
                className={`text-xs ${getScoreColor(check.score)}`}
              >
                {check.score}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;