'use client';

// components/ScrollToTop.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

/**
 * Site-wide ScrollToTop component.
 * - Circular reading progress ring (yellow, driven by scrollYProgress)
 * - Smooth framer-motion entrance/exit
 * - Appears after scrolling 400px
 * 
 * Usage: Add <ScrollToTop /> to app/layout.tsx (inside <body>, outside page content)
 */
export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 left-8 z-50 group flex items-center justify-center w-14 h-14 cursor-pointer"
        >
          {/* Circular progress ring */}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 56 56">
            {/* Track */}
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-slate-200/60"
            />
            {/* Progress */}
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              className="text-yellow-400"
            />
          </svg>

          {/* Icon */}
          <div className="w-10 h-10 bg-white shadow-2xl rounded-full flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 border border-slate-100">
            <ChevronUp size={20} strokeWidth={2.5} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}