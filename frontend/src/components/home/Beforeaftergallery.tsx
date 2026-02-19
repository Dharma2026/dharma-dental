'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

/**
 * Image Comparison Component
 * Allows users to drag a slider to compare two images.
 */

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
  label: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ beforeImg, afterImg, label }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let x: number;
    if ('touches' in event) {
      x = event.touches[0].pageX - rect.left;
    } else {
      x = event.pageX - rect.left;
    }
    
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-xl group"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* AFTER IMAGE (Background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImg})` }}
        />

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-none"
          style={{ 
            backgroundImage: `url(${beforeImg})`,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
          }}
        />

        {/* SLIDER LINE & HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/70 backdrop-blur-sm pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center text-black">
            <div className="flex gap-0.5">
              <ChevronLeft size={14} strokeWidth={3} />
              <ChevronRight size={14} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* LABELS */}
        <div className="absolute bottom-6 left-6 z-20 px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-slate-700 uppercase tracking-widest border border-slate-200/60 pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-6 right-6 z-20 px-3 py-1 bg-yellow-400/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-black uppercase tracking-widest border border-yellow-300/40 pointer-events-none">
          After
        </div>
      </div>
      <p className="text-center text-slate-500 text-sm font-medium">{label}</p>
    </div>
  );
};

interface CaseItem {
  id: number;
  before: string;
  after: string;
  label: string;
}

export default function BeforeAfterGallery() {
  const cases: CaseItem[] = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
      label: "Full Smile Reconstruction"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1609840114035-3c981993b369?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
      label: "Clear Aligners Results"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=600&auto=format&fit=crop",
      label: "Dental Implants"
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16">
          <div className="text-center md:text-left space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs justify-center md:justify-start"
            >
              <Sparkles size={16} /> Results Showcase
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
            See The 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad01] to-[#f5e502]"> Transformation</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-center md:text-right leading-relaxed font-serif  text-lg">
            Stunning results that showcase the life-changing impact of our specialized dental care.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ComparisonSlider 
                beforeImg={item.before} 
                afterImg={item.after} 
                label={item.label}
              />
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 text-center flex items-center justify-center">
        <Link href="/contact">
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer md:w-auto mr-2 group flex items-center justify-center gap-3 bg-[#fdc700] text-slate-900 px-8 py-5 rounded-xl font-bold text-sm shadow-xl hover:shadow-[#FAE01A]/20 transition-all"
              >
                Book your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
        </div>

      </div>
    </section>
  );
}