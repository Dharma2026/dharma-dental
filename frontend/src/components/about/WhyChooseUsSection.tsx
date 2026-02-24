'use client';

// components/about/WhyChooseUsSection.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Plus,
  Sparkles,
  UserCheck,
  HeartPulse,
  Wallet,
  Clock,
  Star,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const LEFT_FEATURES: Feature[] = [
  {
    icon: UserCheck,
    title: 'Experienced Doctor',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Care',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    icon: Wallet,
    title: 'Flexible Payment Options',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
];

const RIGHT_FEATURES: Feature[] = [
  {
    icon: Clock,
    title: 'Emergency Services',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    icon: Star,
    title: 'Positive Patient Reviews',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
  {
    icon: Cpu,
    title: 'Latest Technology',
    text: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
  },
];

// 6 evenly-spaced dots on the orbit ring
const ORBIT_DEGREES = [0, 60, 120, 180, 240, 300];

// ─── Left Feature Block (text right-aligned, icon on the right) ───────────────

function LeftFeatureBlock({ icon: Icon, title, text, delay = 0 }: Feature & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-row-reverse sm:flex-row lg:flex-row-reverse items-start gap-4 text-right sm:text-left lg:text-right w-full max-w-[300px] ml-auto"
    >
      {/* Icon — on the right for left column (closest to centre) */}
      <div className="shrink-0 w-11 h-11 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-500 shadow-sm mt-0.5">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div>
        <h4 className="text-base sm:text-[17px] font-extrabold text-slate-900 mb-1 leading-snug tracking-tight">
          {title}
        </h4>
        <p className="text-slate-400 text-base leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

// ─── Right Feature Block (text left-aligned, icon on the left) ───────────────

function RightFeatureBlock({ icon: Icon, title, text, delay = 0 }: Feature & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-row items-start gap-4 text-left w-full max-w-[300px]"
    >
      {/* Icon — on the left for right column (closest to centre) */}
      <div className="shrink-0 w-11 h-11 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-500 shadow-sm mt-0.5">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div>
        <h4 className="text-base sm:text-[17px] font-extrabold text-slate-900 mb-1 leading-snug tracking-tight">
          {title}
        </h4>
        <p className="text-slate-400 text-base leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28
                        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
                        bg-[#f8fafc] overflow-hidden">

      {/* Decorative bg icons */}
      <div className="absolute left-[3%] top-1/2 -translate-y-1/2 text-yellow-400/10 pointer-events-none hidden md:block">
        <Plus size={120} strokeWidth={1.5} />
      </div>
      <div className="absolute left-[5%] bottom-[8%] text-slate-300/30 pointer-events-none hidden lg:block">
        {/* 4-point sparkle star */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
      </div>
      <div className="absolute right-[4%] bottom-[12%] text-yellow-400/10 pointer-events-none hidden md:block">
        <Sparkles size={130} strokeWidth={1} />
      </div>
      <div className="absolute right-[7%] top-[10%] text-slate-300/20 pointer-events-none hidden lg:block">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
      </div>
      {/* Small dot top-left area */}
      <div className="absolute left-[18%] top-[8%] w-2 h-2 rounded-full bg-yellow-300/40 pointer-events-none hidden md:block" />

      {/* ── Section Header ── */}
      <div className="max-w-5xl mx-auto text-center mb-14 sm:mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3"
        >
          + WHY CHOOSE US
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-400">
            Diagnosis of{' '}
          </span>
          Dental Diseases
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm sm:text-base font-medium max-w-sm mx-auto"
        >
          We are committed to sustainability and eco-friendly dental initiatives.
        </motion.p>
      </div>

      {/* ── 3-column layout ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 items-center">

        {/* LEFT: right-aligned features */}
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 items-center md:items-end">
          {LEFT_FEATURES.map((f, i) => (
            <LeftFeatureBlock key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>

        {/* CENTER: Tooth + orbit ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
          className="relative flex items-center justify-center py-10 md:py-0 order-first md:order-none"
        >
          {/* SPINNING orbit ring with 6 dots */}
          <div
            className="absolute rounded-full border border-dashed border-yellow-300/50"
            style={{
              width: 'clamp(220px, 35vw, 340px)',
              height: 'clamp(220px, 35vw, 340px)',
              animation: 'spinSlow 20s linear infinite',
            }}
          >
            {ORBIT_DEGREES.map((deg) => {
              // Radius = half of container width — needs to match clamp above at mid size (~280px → r=140)
              const r = 140;
              const rad = (deg * Math.PI) / 180;
              const x = 50 + (r / 2.8) * Math.cos(rad); // % positions within the div
              const y = 50 + (r / 2.8) * Math.sin(rad);
              return (
                <div
                  key={deg}
                  className="absolute w-2.5 h-2.5 rounded-full bg-yellow-400 shadow shadow-yellow-200"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              );
            })}
          </div>

          {/* White glow circle behind tooth */}
          <div
            className="absolute rounded-full bg-white shadow-[0_0_60px_30px_rgba(234,179,8,0.07)]"
            style={{
              width: 'clamp(180px, 28vw, 270px)',
              height: 'clamp(180px, 28vw, 270px)',
            }}
          />

          {/* 3D Tooth */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative z-10 drop-shadow-[0_20px_40px_rgba(234,179,8,0.18)]"
            style={{
              width: 'clamp(130px, 18vw, 210px)',
              height: 'clamp(150px, 20vw, 240px)',
            }}
          >
            <Image
              src="/about/why-choose-us-img.png"
              alt="3D Tooth illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: left-aligned features */}
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 items-center md:items-start">
          {RIGHT_FEATURES.map((f, i) => (
            <RightFeatureBlock key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Spin keyframe */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}