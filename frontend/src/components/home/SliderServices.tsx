'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
}

interface ServicesSliderSectionProps {
  services?: Service[];
}

const DENTAL_SERVICES: Service[] = [
  {
    id: 1,
    title: "Advanced Teeth Whitening Solutions",
    slug: "teeth-whitening",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    description: "Professional whitening treatments that brighten your smile by several shades with long-lasting results."
  },
  {
    id: 2,
    title: "Dental Implants & Full Restoration",
    slug: "dental-implants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    description: "Permanent tooth replacement solutions that look, feel, and function just like your natural teeth."
  },
  {
    id: 3,
    title: "Invisible Braces & Clear Aligners",
    slug: "clear-aligners",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200",
    description: "Straighten your teeth discreetly with modern clear aligner technology for a perfect smile."
  },
  {
    id: 4,
    title: "Cosmetic Dentistry & Smile Makeover",
    slug: "cosmetic-dentistry",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    description: "Transform your smile with veneers, bonding, and comprehensive cosmetic procedures."
  },
  {
    id: 5,
    title: "Root Canal Treatment & Endodontics",
    slug: "root-canal",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200",
    description: "Pain-free root canal procedures using advanced technology to save your natural teeth."
  },
  {
    id: 6,
    title: "Pediatric Dentistry & Kids Care",
    slug: "pediatric-dentistry",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200",
    description: "Gentle, child-friendly dental care in a fun environment for your little ones."
  }
];

const ServicesSliderSection: React.FC<ServicesSliderSectionProps> = ({ services }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const displayServices = services && services.length > 0 ? services : DENTAL_SERVICES;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + displayServices.length) % displayServices.length);
  }, [displayServices.length]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      paginate(1);
    }, 4000);
  }, [paginate]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const nextIndex = (index + 1) % displayServices.length;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-yellow-500/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Grid Container with rounded corners */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-[35%_1fr] py-8 px-8 min-h-[600px]">
            
            {/* Left Column: Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-between ">
              <div>
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-900/10 rounded-full mb-8 bg-[#ffe586]"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    Premium Services
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-6xl xl:text-6xl font-semibold leading-[1.05] tracking-tight text-slate-900 mb-2"
                >
                  Treatments That
                </motion.h2>
                
               

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-slate-600 max-w-sm mb-10 leading-relaxed font-medium"
                >
                  Discover how Dharma Dental delivers exceptional care across all specialties with cutting-edge technology and personalized treatment plans.
                </motion.p>

                {/* Feature Pills */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-3 mb-10"
                >
                  {["Expert Doctors", "Advanced Technology", "Pain-Free Care", "Proven Results"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2.5 border border-slate-900/5 rounded-full bg-slate-50 text-[12px] font-bold text-slate-900"
                    >
                      <Check className="w-4 h-4 text-yellow-600" />
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Controls */}
              <div className="flex items-center gap-6">
               <Link href="/">
                <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer md:w-auto mr-2 group flex items-center uppercase justify-center gap-3 bg-[#fdc700] text-slate-900 px-8 py-5 rounded-xl font-bold text-sm shadow-xl hover:shadow-[#FAE01A]/20 transition-all"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <div className="flex gap-3">
                  <motion.button 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#0F172A', color: '#ffffff' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { paginate(-1); startAutoplay(); }}
                    className="w-12 h-12 rounded-full border border-slate-900/10 flex items-center justify-center transition-all duration-300 hover:border-slate-900"
                    aria-label="Previous service"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#0F172A', color: '#ffffff' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { paginate(1); startAutoplay(); }}
                    className="w-12 h-12 rounded-full border border-slate-900/10 flex items-center justify-center transition-all duration-300 hover:border-slate-900"
                    aria-label="Next service"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Columns: Slider Cards */}
            <div className="grid lg:grid-cols-2">
              {[index, nextIndex].map((idx, i) => (
                <div 
                  key={i} 
                  className={`relative overflow-hidden bg-slate-50 ${i === 1 ? 'hidden lg:block' : 'block'}`}
                  onMouseEnter={stopAutoplay}
                  onMouseLeave={startAutoplay}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={displayServices[idx].id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 35 }, 
                        opacity: { duration: 0.2 } 
                      }}
                      className="absolute inset-0 p-6 lg:p-8 flex flex-col"
                    >
                      {/* Title & Description */}
                      <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-tight pr-6 mb-3 text-slate-900">
                          {displayServices[idx].title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed pr-4">
                          {displayServices[idx].description}
                        </p>
                      </div>
                      
                      {/* Image Container */}
                      <div className="relative flex-1 group overflow-hidden rounded-2xl min-h-[220px]">
                        <Image 
                          src={displayServices[idx].image}
                          alt={displayServices[idx].title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <Link href={`/services/${displayServices[idx].slug}`}>
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-0 right-0 bg-white px-6 py-4 rounded-tl-2xl flex items-center gap-2 text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 cursor-pointer"
                          >
                            Learn More <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSliderSection;