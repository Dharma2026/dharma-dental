'use client';

// components/Team/TeamHero.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Plus } from 'lucide-react';

export default function TeamHero() {
  return (
    <section className="relative w-full pt-28 md:pt-46 pb-24 md:pb-32 bg-slate-950 overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(234, 179, 8, 0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

      {/* Floating sparkle — left */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] top-1/3 text-yellow-400 pointer-events-none hidden md:block"
      >
        <Sparkles size={80} strokeWidth={1} />
      </motion.div>

      {/* Decorative plus — left */}
      <div className="absolute -left-12 bottom-10 text-white/5 -rotate-12 pointer-events-none">
        <Plus size={200} strokeWidth={1} />
      </div>

      {/* Decorative plus — right */}
      <div className="absolute -right-16 top-10 text-yellow-400/5 rotate-12 pointer-events-none">
        <Plus size={240} strokeWidth={1} />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 px-4"
      >
        {/* Sub-header badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-yellow-500/50" />
          <span className="text-yellow-500 font-black uppercase tracking-[0.4em] text-[10px]">
            Established 2009
          </span>
          <div className="h-px w-12 bg-yellow-500/50" />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
          Team <span className="text-yellow-400 italic">Us</span>
        </h1>

        {/* Glassmorphism breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center bg-white/5 backdrop-blur-md px-8 py-3.5 rounded-2xl border border-white/10 gap-4 text-sm md:text-base font-bold shadow-2xl">
            <li>
              <Link href="/" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight size={16} className="text-white/20" />
            </li>
            <li className="text-white">Team Our Practice</li>
          </ol>
        </nav>
      </motion.div>

      {/* Bottom floating sparkle */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-12 text-yellow-400/30 pointer-events-none"
      >
        <Sparkles size={32} />
      </motion.div>
    </section>
  );
}