"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/**
 * --- TYPES ---
 */
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType;
}

/**
 * --- CUSTOM DENTAL SERVICE ICONS ---
 */
const FillingsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <path d="M12 20C12 10 18 8 32 8s20 2 20 12c0 8-4 10-4 18 0 8 4 12-8 16s-16-4-16-12c0-8 8-10 8-18s-4-4-8-4-8 4-8 10c0 4 4 6 4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M28 24h8m-4-4v8" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ImplantsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <path d="M32 8v48m-12-32h24m-20 8h16m-12 8h8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 12c4-4 16-4 20 0 2 6-4 8-10 8s-12-2-10-8z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const GeneralIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <rect x="16" y="12" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M24 24h16m-16 8h16m-16 8h8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const ORIGINAL_SERVICES: Service[] = [
  { id: 1, title: "Dental Fillings", description: "Dental fillings are a choice of treatment to address teeth cavities or holes.", icon: FillingsIcon },
  { id: 2, title: "Dental Implants Treatment", description: "Dental implants offer a great solution for those with missing or damaged teeth.", icon: ImplantsIcon },
  { id: 3, title: "General Dentistry", description: "A general dentist in Hyderabad major location in the city.", icon: GeneralIcon },
  { id: 4, title: "Teeth Braces & Clips", description: "Dental braces are orthodontic tools that do more than just straighten teeth.", icon: GeneralIcon },
  { id: 5, title: "Teeth Gap Treatment", description: "When there are gaps in the teeth, especially the front teeth, gap treatment is cosmetic.", icon: ImplantsIcon },
  { id: 6, title: "Wisdom Tooth Removal", description: "Safe and comfortable extraction of impacted or problematic wisdom teeth.", icon: FillingsIcon },
];

const SERVICES: Service[] = [...ORIGINAL_SERVICES, ...ORIGINAL_SERVICES, ...ORIGINAL_SERVICES];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="group relative bg-white rounded-[40px] p-8 lg:p-10 shadow-sm border border-gray-50 flex flex-col items-start min-h-[380px] w-full transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-8 right-8 text-yellow-500">
      <service.icon />
    </div>
    <div className="mt-auto relative z-10">
      <h3 className="text-2xl font-bold text-[#3d2a1d] mb-4 leading-tight group-hover:text-black transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
        {service.description}
      </p>
      <button className="flex items-center gap-2 bg-[#fdf200] hover:bg-black hover:text-white text-[#3d2a1d] font-bold py-3.5 px-8 rounded-full text-[10px] uppercase tracking-wider transition-all shadow-sm">
        View More
      </button>
    </div>
  </div>
);

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(ORIGINAL_SERVICES.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const cardWidth = 350; 
  const gap = 32; 
  
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex >= ORIGINAL_SERVICES.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(ORIGINAL_SERVICES.length);
    } 
    else if (currentIndex < ORIGINAL_SERVICES.length) {
      setIsTransitioning(false);
      setCurrentIndex(ORIGINAL_SERVICES.length + (ORIGINAL_SERVICES.length - 1));
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#fdf9f0] overflow-hidden min-h-screen flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#fdf200] rounded-l-[120px] -mr-12 z-0 hidden lg:block overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#3d2a1d 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
      </div>

      {/* Main Flex Wrapper - Not a fixed container to allow full-width right bleed */}
      <div className="w-full relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Header - Nested in a partial container or padded */}
        <div className="w-full lg:w-[38%] px-8 lg:pl-[8%] lg:pr-12 text-left z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
             <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-yellow-600">
                <Sparkles size={22} />
             </div>
             <span className="font-bold text-[#3d2a1d] text-sm uppercase tracking-widest">Our Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-[#3d2a1d] leading-[1.05] mb-8"
          >
            We Offer All-Round Dental Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg mb-12 max-w-sm leading-relaxed"
          >
            Providing expert care for our patients whenever they need us, ensuring no one walks away disappointed.
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-[#fdf200] hover:bg-black hover:text-white text-[#3d2a1d] font-bold py-5 px-12 rounded-full transition-all shadow-lg group"
          >
            All Services 
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-16">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-800 hover:bg-[#3d2a1d] hover:border-[#3d2a1d] hover:text-white transition-all duration-500 shadow-sm"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-800 hover:bg-[#3d2a1d] hover:border-[#3d2a1d] hover:text-white transition-all duration-500 shadow-sm"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Right Side: Slider Container - Bleeds to the right edge */}
        <div className="w-full lg:w-[62%] relative overflow-hidden py-10 mt-12 lg:mt-0">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: -(currentIndex * (cardWidth + gap))
            }}
            onAnimationComplete={handleTransitionEnd}
            transition={isTransitioning ? { 
              type: "spring", 
              stiffness: 45, 
              damping: 20,
              mass: 1
            } : { duration: 0 }}
          >
            {SERVICES.map((service, index) => (
              <div 
                key={`${service.id}-${index}`} 
                className="flex-shrink-0 w-[300px] sm:w-[350px]"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-white selection:bg-yellow-200 selection:text-black">
      <ServicesSlider />
    </div>
  );
}

const Sparkles = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4M3 5h4M19 17v4m-2-2h4"/>
  </svg>
);