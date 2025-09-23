import { Button } from "@/components/ui/button";
import { usePopupForm } from "@/hooks/usePopupForm";
import { BookingWidget } from "./BookingWidget";

interface QuoteButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  showBooking?: boolean;
  defaultService?: string;
}

export const QuoteButton = ({ 
  className = "", 
  variant = "default", 
  size = "default",
  children = "Get a Quote",
  showBooking = false,
  defaultService
}: QuoteButtonProps) => {
  const { openPopup } = usePopupForm();

  if (showBooking) {
    return (
      <div className="flex gap-2 flex-wrap">
        <BookingWidget
          defaultService={defaultService}
          variant="default"
          size={size === "icon" ? "default" : size}
          className={className}
        >
          Book Now
        </BookingWidget>
        <Button 
          onClick={openPopup}
          variant="outline"
          size={size}
          className={className}
        >
          Get Quote
        </Button>
      </div>
    );
  }

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