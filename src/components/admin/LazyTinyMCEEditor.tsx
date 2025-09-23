import React, { lazy, Suspense, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Edit } from 'lucide-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Lazy load TinyMCE to prevent Node.js util errors
const TinyMCEEditor = lazy(async () => {
  try {
    const { Editor } = await import('@tinymce/tinymce-react');
    return {
      default: ({ value, onChange, height = 400 }: { 
        value: string; 
        onChange: (content: string) => void;
        height?: number;
      }) => (
        <Editor
          apiKey="no-api-key"
          value={value}
          onEditorChange={onChange}
          init={{
            height,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            // Browser-safe configuration
            skin: false,
            content_css: false
          }}
        />
      )
    };
  } catch (error) {
    console.warn('TinyMCE failed to load, falling back to textarea:', error);
    throw error;
  }
});

interface LazyTinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
  height?: number;
}

export function LazyTinyMCEEditor({ value, onChange, height = 400 }: LazyTinyMCEEditorProps) {
  const [useRichEditor, setUseRichEditor] = useState(false);
  const [hasError, setHasError] = useState(false);

  const FallbackEditor = () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Content (Markdown supported)</label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setUseRichEditor(true)}
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          Enable Rich Editor
        </Button>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-96 font-mono text-sm"
        placeholder="Start writing your content here... Markdown is supported."
      />
    </div>
  );

  const ErrorFallback = () => (
    <div className="space-y-4">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Rich text editor failed to load. Using fallback editor instead.
        </AlertDescription>
      </Alert>
      <FallbackEditor />
    </div>
  );

  if (!useRichEditor) {
    return <FallbackEditor />;
  }

  if (hasError) {
    return <ErrorFallback />;
  }

  return (
    <div className="border rounded-md">
      <Suspense 
        fallback={
          <div className="flex items-center justify-center p-8 border rounded-md bg-muted/50">
            <div className="text-center space-y-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-muted-foreground">Loading rich text editor...</p>
            </div>
          </div>
        }
      >
        <ErrorBoundary onError={() => setHasError(true)}>
          <TinyMCEEditor 
            value={value} 
            onChange={onChange} 
            height={height}
          />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}