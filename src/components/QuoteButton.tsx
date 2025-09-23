import { Button } from "@/components/ui/button";
import { usePopupForm } from "@/hooks/usePopupForm";

interface QuoteButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

export const QuoteButton = ({ 
  className = "", 
  variant = "default", 
  size = "default",
  children = "Get a Quote"
}: QuoteButtonProps) => {
  const { openPopup } = usePopupForm();

  return (
    <Button 
      onClick={openPopup}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
};