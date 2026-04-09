import { useState, useEffect } from 'react';

const AvailabilityIndicator = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 7 && hour < 22);
    };
    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground/50'}`} />
      {isOpen ? (
        <span className="text-muted-foreground">We're available now — typical response within 30 minutes</span>
      ) : (
        <span className="text-muted-foreground">We're currently closed but check back at 7AM. For urgent needs leave a message and we will respond first thing.</span>
      )}
    </div>
  );
};

export default AvailabilityIndicator;
