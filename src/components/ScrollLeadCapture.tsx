import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HIDDEN_PATHS = ['/book-now', '/contact'];
const SESSION_KEY = 'sot-lead-capture-shown';

const ScrollLeadCapture = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const shouldHide = HIDDEN_PATHS.includes(pathname);

  useEffect(() => {
    if (shouldHide) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const onScroll = () => {
      const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.65) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [shouldHide]);

  const close = () => setVisible(false);

  if (shouldHide) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 z-40 w-[300px] max-w-[calc(100vw-2rem)] bg-card border rounded-xl shadow-xl p-5 sm:bottom-6"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <h3 className="text-lg font-bold text-foreground mb-1">Need a Notary Today?</h3>
          <p className="text-sm text-muted-foreground mb-4">Same-day appointments available across Southwest Ohio.</p>
          <div className="flex flex-col gap-2">
            <Button size="sm" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground" asChild>
              <a href="tel:5132269052">
                <Phone className="mr-2 h-4 w-4" />
                Call (513) 226-9052
              </a>
            </Button>
            <Button size="sm" variant="outline" className="w-full" asChild>
              <Link to="/book-now">
                <Calendar className="mr-2 h-4 w-4" />
                Book Online
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollLeadCapture;
