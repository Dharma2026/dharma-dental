'use client';

// components/about/WhatWeDoSection.tsx
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Plus,
  Sparkles,
  ChevronDown,
  Calendar,
  Stethoscope,
  Activity,
  type LucideIcon,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AccordionItemProps {
  title: string;
  content: string;
  icon: LucideIcon;
  isOpen: boolean;
  onClick: () => void;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACCORDION_DATA = [
  {
    title: 'Book An Appointment',
    content:
      'Experience a seamless scheduling process designed for your convenience. Our concierge team ensures your visit fits perfectly into your busy lifestyle.',
    icon: Calendar,
  },
  {
    title: 'Diagnostic Precision',
    content:
      'We utilize 5D scanning and AI-driven diagnostics to detect potential oral health concerns long before they become visible to the human eye.',
    icon: Activity,
  },
  {
    title: 'Expert Aesthetic Care',
    content:
      'Receive treatment from world-class specialists who specialize in minimally invasive cosmetic enhancements and functional restoration.',
    icon: Stethoscope,
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({ title, content, icon: Icon, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 group transition-all duration-300 text-left"
      >
        <div className="flex items-center gap-4 sm:gap-5 min-w-0">
          <div
            className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? 'bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-200'
                : 'bg-slate-50 text-slate-400 group-hover:bg-yellow-50 group-hover:text-yellow-500'
            }`}
          >
            <Icon size={20} />
          </div>
          <span
            className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 truncate ${
              isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-yellow-500'
            }`}
          >
            {title}
          </span>
        </div>

        <div
          className={`shrink-0 p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? 'bg-slate-900 text-white rotate-180'
              : 'bg-slate-50 text-slate-300'
          }`}
        >
          <ChevronDown size={16} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number],
            }}
          >
            <p className="pb-6 sm:pb-8 pl-14 sm:pl-[68px] pr-2 text-slate-500 text-base sm:text-lg leading-relaxed">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function WhatWeDoSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28
                        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
                        bg-[#fcfdfe] overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-center">

        {/* ── LEFT: Accordion ── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 sm:w-12 h-px bg-yellow-500 shrink-0" />
            <span className="text-yellow-500 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         font-black text-slate-900 leading-[1.08]
                         mb-5 sm:mb-6 md:mb-8 tracking-tighter">
            Redefining Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-400 italic">
              Dental Ritual
            </span>
          </h2>

          {/* Body */}
          <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed
                        mb-8 sm:mb-10 md:mb-12 max-w-xl font-medium">
            We bridge clinical excellence with boutique hospitality. Our sustainable
            approach prioritizes digital precision and your absolute comfort.
          </p>

          {/* Accordion card */}
          <div className="bg-white/60 backdrop-blur-sm p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/40">
            {ACCORDION_DATA.map((item, idx) => (
              <AccordionItem
                key={idx}
                {...item}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Image ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative group"
        >
          {/* Animated background glow */}
          <div className="absolute -inset-4 bg-linear-to-tr from-yellow-400/20 to-orange-400/10 blur-3xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Floating sparkle icon */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 sm:-top-10 -right-2 sm:-right-4 z-20 hidden sm:block"
          >
            <div className="bg-white p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 text-yellow-500">
              <Sparkles size={24} />
            </div>
          </motion.div>

          {/* Main image */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 w-full
                       aspect-[4/3] sm:aspect-[4/4] md:aspect-[4/5]
                       rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem]
                       overflow-hidden
                       shadow-[0_24px_48px_-8px_rgba(15,45,77,0.15)]
                       border-6 sm:border-8 md:border-[10px] lg:border-[12px] border-white
                       cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
              alt="Premium Dental Experience"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 sm:p-10 md:p-12">
              <div className="text-white">
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1 sm:mb-2 text-yellow-400">
                  Technology First
                </p>
                <h4 className="text-xl sm:text-2xl font-bold">Clinical Precision.</h4>
              </div>
            </div>
          </motion.div>

          {/* Bottom decorative + */}
          <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 text-yellow-400/30 z-0 hidden md:block pointer-events-none">
            <Plus size={100} strokeWidth={1} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}