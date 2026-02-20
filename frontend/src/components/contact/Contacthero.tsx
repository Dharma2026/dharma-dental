'use client';

// components/contact/sections/ContactHero.tsx
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Phone, Mail, Sparkles, ChevronRight, Home } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// ─── Floating Particle ────────────────────────────────────────────────────────
function Particle({
  x, y, size, delay, color,
}: {
  x: string; y: string; size: number; delay: number; color: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} pointer-events-none`}
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative bg-slate-950 overflow-hidden pt-46 pb-24 px-6 min-h-[80vh] flex items-center"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Parallax blobs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-[5%] right-[-5%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[25%] w-[350px] h-[350px] bg-yellow-300/5 rounded-full blur-[90px]" />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <Particle x="15%" y="25%" size={3} delay={0}   color="bg-yellow-400/40" />
      <Particle x="80%" y="20%" size={2} delay={1}   color="bg-blue-400/40"   />
      <Particle x="65%" y="75%" size={4} delay={0.5} color="bg-yellow-300/30" />
      <Particle x="25%" y="80%" size={2} delay={2}   color="bg-white/20"      />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: EASE }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent origin-left"
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>

          {/* ── Breadcrumbs ── */}
          <motion.nav
            variants={slideRight}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 mb-12"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-500 hover:text-yellow-400 transition-colors duration-300 text-[11px] font-bold uppercase tracking-[0.2em] group"
            >
              <Home size={12} className="group-hover:scale-110 transition-transform" />
              Home
            </Link>
            <ChevronRight size={10} className="text-slate-200" />
            <span className="text-yellow-400 text-[11px] font-bold uppercase tracking-[0.2em]">
              Contact
            </span>
          </motion.nav>

          {/* ── Centered content ── */}
          <div className="flex flex-col items-center text-center">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.05)]"
              >
                <Sparkles size={13} className="text-yellow-400" />
              </motion.div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[11px]">
                  Get In Touch
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
                  className="h-[1px] w-12 bg-gradient-to-r from-yellow-400 to-transparent origin-left"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase tracking-tight">
                Let&apos;s{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500">
                    Talk
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
                    className="absolute bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-100 rounded-full origin-center"
                  />
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600">
                  About Your
                </span>{' '}
                <span className="text-white">Smile.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg font-serif italic mb-10 opacity-80"
            >
              Whether you have a question, need to book an appointment, or want to
              explore personalized treatment options — our experts are here to help.
            </motion.p>

            {/* CTA Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+919169269369"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-[11px] uppercase tracking-[0.15em] shadow-[0_15px_30px_rgba(250,204,21,0.15)] hover:shadow-[0_20px_40px_rgba(250,204,21,0.3)] hover:bg-yellow-300 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Phone size={14} />
                </motion.div>
                Call Now
              </motion.a>
              <motion.a
                href="mailto:hydndc@gmail.com"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white rounded-full font-bold text-[11px] uppercase tracking-[0.15em] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <Mail size={14} />
                Email Us
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* Diagonal bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#ffefbe] z-20"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  );
}