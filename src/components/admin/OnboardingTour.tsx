import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { X, ChevronRight, ChevronLeft, Sparkles, Building2, Palette, MapPin, FileText, CheckCircle } from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  targetArea: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to Your Admin Portal!',
    description: "This is your control center for managing your notary website. Let's take a quick tour to get you started.",
    icon: <Sparkles className="w-6 h-6" />,
    targetArea: 'dashboard',
  },
  {
    id: 'business',
    title: 'Business Setup',
    description: 'Start here to add your business name, phone, email, and address. This information appears throughout your website.',
    icon: <Building2 className="w-6 h-6" />,
    targetArea: 'business-setup',
  },
  {
    id: 'theme',
    title: 'Customize Your Brand',
    description: 'Upload your logo and choose colors that match your brand. Pick from preset themes or create your own.',
    icon: <Palette className="w-6 h-6" />,
    targetArea: 'theme',
  },
  {
    id: 'locations',
    title: 'Service Areas',
    description: 'Add the cities and counties you serve. Each location gets its own SEO-optimized page.',
    icon: <MapPin className="w-6 h-6" />,
    targetArea: 'locations',
  },
  {
    id: 'blog',
    title: 'Blog & Content',
    description: 'Write blog posts to attract more customers. Use our templates or write your own content.',
    icon: <FileText className="w-6 h-6" />,
    targetArea: 'blog',
  },
  {
    id: 'done',
    title: "You're All Set!",
    description: "You now know the basics. Click any section to start customizing your website. Need help? Look for the ? icons throughout the dashboard.",
    icon: <CheckCircle className="w-6 h-6" />,
    targetArea: 'dashboard',
  },
];

const TOUR_KEY = 'admin-onboarding-completed';

interface OnboardingTourProps {
  onComplete?: () => void;
}

export function OnboardingTour({ onComplete }: OnboardingTourProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if tour was already completed
    const completed = localStorage.getItem(TOUR_KEY);
    if (!completed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    localStorage.setItem(TOUR_KEY, 'true');
    setIsVisible(false);
    onComplete?.();
  };

  const step = TOUR_STEPS[currentStep];
  const progress = ((currentStep + 1) / TOUR_STEPS.length) * 100;

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleSkip}
        />

        {/* Tour Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-md"
        >
          <Card className="shadow-2xl border-2">
            <CardHeader className="relative pb-2">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={handleSkip}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-1.5 mb-4">
                <motion.div
                  className="bg-primary h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Step Icon */}
              <div className="flex justify-center mb-2">
                <motion.div
                  key={step.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  {step.icon}
                </motion.div>
              </div>

              <CardTitle className="text-center text-xl">
                {step.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center pb-4">
              <motion.p
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-muted-foreground"
              >
                {step.description}
              </motion.p>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-2 border-t">
              <div className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {TOUR_STEPS.length}
              </div>
              
              <div className="flex gap-2">
                {currentStep > 0 && (
                  <Button variant="outline" size="sm" onClick={handlePrevious}>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                )}
                
                {currentStep === 0 && (
                  <Button variant="ghost" size="sm" onClick={handleSkip}>
                    Skip Tour
                  </Button>
                )}

                <Button size="sm" onClick={handleNext}>
                  {currentStep === TOUR_STEPS.length - 1 ? (
                    'Get Started'
                  ) : (
                    <>
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function resetOnboardingTour() {
  localStorage.removeItem(TOUR_KEY);
}
