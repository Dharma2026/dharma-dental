'use client';

// components/contact/sections/ContactHero.tsx
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, Sparkles } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactHero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden pt-28 pb-36 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px] mb-5"
          >
            <Sparkles size={13} /> Get In Touch
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6"
          >
            Let&apos;s Talk<br />
            <span className="text-yellow-400 italic">About Your Smile</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-lg leading-relaxed max-w-lg font-serif italic"
          >
            Whether you have a question, need to book an appointment, or want to
            explore treatment options — we&apos;re here to help.
          </motion.p>

          {/* Quick contact pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
            <a
              href="tel:+919169269369"
              className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href="mailto:hydndc@gmail.com"
              className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/10"
            >
              <Mail size={14} /> Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  );
}