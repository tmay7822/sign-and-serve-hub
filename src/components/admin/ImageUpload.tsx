import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string, altText?: string) => void;
  maxFiles?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, maxFiles = 1 }) => {
  const [uploadedImages, setUploadedImages] = useState<Array<{ url: string; name: string }>>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    
    try {
      for (const file of acceptedFiles) {
        // Create a local URL for the image
        const imageUrl = URL.createObjectURL(file);
        
        // Store in assets folder simulation
        const assetPath = `/src/assets/blog/${file.name}`;
        
        setUploadedImages(prev => [...prev, { url: imageUrl, name: file.name }]);
        onImageUpload(assetPath, file.name.replace(/\.[^/.]+$/, ""));
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif']
    },
    maxFiles,
    disabled: uploading
  });

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Card
        {...getRootProps()}
        className={`border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/25 hover:border-primary/50'
        } ${uploading ? 'pointer-events-none opacity-50' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          {isDragActive ? (
            <p>Drop the images here...</p>
          ) : (
            <div>
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}
        </div>
      </Card>

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative group">
              <Card className="p-2">
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm truncate">{image.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeImage(index)}
                    className="ml-auto h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;