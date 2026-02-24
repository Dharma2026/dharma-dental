'use client';

// components/about/JourneySection.tsx
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Plus, CheckCircle2, Sparkles } from 'lucide-react';

const FEATURES = [
  'Renowned Clinical Team',
  'Bespoke Patient Care',
  'Advanced Digital Scanners',
  'Comprehensive Aesthetics',
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function JourneySection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-[#fcfdfe] overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-linear-to-l from-yellow-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-28 items-center">

        {/* ── LEFT: Image Stack ── */}
        <div className="relative flex justify-center lg:justify-start order-1">

          {/* Rotating + accent — hidden on small, shown md+ */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 left-4 text-yellow-300 opacity-50 hidden md:block pointer-events-none"
          >
            <Plus size={40} strokeWidth={1} />
          </motion.div>

          {/*
            Container height is explicit per breakpoint so the absolutely
            positioned bottom image doesn't collapse the parent.
            sm: taller to fit both stacked images
          */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full
                          h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px]">

            {/* Main image — patient treatment (top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'circOut' }}
              className="absolute top-0 left-0
                         w-[72%] sm:w-[68%] md:w-[65%]
                         h-[62%] sm:h-[60%] md:h-[65%]
                         rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]
                         overflow-hidden z-10
                         shadow-[0_24px_48px_-8px_rgba(15,45,77,0.15)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                alt="Bespoke Dental Care"
                fill
                className="object-cover grayscale-10 hover:grayscale-0 transition-all duration-700"
                priority
              />
            </motion.div>

            {/* Overlapping image — clinic (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: 'circOut' }}
              className="absolute bottom-0 right-0
                         w-[65%] sm:w-[60%] md:w-[58%]
                         h-[55%] sm:h-[55%] md:h-[58%]
                         rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]
                         overflow-hidden z-20
                         shadow-[0_24px_48px_-8px_rgba(15,45,77,0.2)]
                         border-4 sm:border-6 md:border-8 lg:border-[10px] border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="State-of-the-Art Dental Suite"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Experience badge — thin ring variation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
              className="absolute top-[-12%] right-[10%] sm:-right-[-14%] md:-right-[-14%] z-30
                         w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48
                         pointer-events-none"
            >
              {/* Spinning ring + text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-xl">
                  <defs>
                    <path
                      id="badgeTextPath"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  {/* Thin yellow ring */}
                  <circle
                    cx="50" cy="50" r="37"
                    fill="white"
                    stroke="#eab308"
                    strokeWidth="11"
                  />
                  {/* Circular text on the ring */}
                  <text
                    fill="white"
                    fontSize="6.5"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="0.5"
                  >
                    <textPath href="#badgeTextPath" startOffset="0%">
                      15+ YEARS OF EXPERIENCE • 15+ YEARS OF EXPERIENCE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Static centre number (doesn't spin) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                  15+
                </span>
                <div className="w-5 h-0.5 bg-yellow-400 my-1 rounded-full" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-yellow-500 uppercase tracking-widest">
                  Years
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <motion.div
          className="order-2 flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 sm:w-10 h-px bg-yellow-500 shrink-0" />
            <span className="text-yellow-500 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-[11px]">
              Dharma Dental Journey
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                       font-black text-slate-900 leading-[1.08] mb-5 sm:mb-6 md:mb-8
                       tracking-tighter"
          >
            A Journey to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-orange-400 italic">
              Your Finest Smile
            </span>
            <br />
            Starts Here
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeInUp}
            className="text-slate-500 text-base sm:text-lg md:text-xl
                       leading-relaxed mb-8 sm:mb-10 md:mb-12
                       max-w-lg font-medium"
          >
            We synthesize world-class dental expertise with bespoke hospitality. Since 2009,
            our goal has been to provide high-precision oral care in an environment that
            feels clinical yet completely restorative.
          </motion.p>

          {/* Features grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 md:gap-y-6 gap-x-8 md:gap-x-12"
          >
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 sm:gap-4 group transition-all cursor-default"
              >
                <div className="shrink-0 w-8 h-8 rounded-xl
                                bg-yellow-50 flex items-center justify-center
                                text-yellow-500
                                group-hover:bg-linear-to-br
                                group-hover:from-yellow-400 group-hover:to-orange-400
                                group-hover:text-white
                                transition-all duration-300 shadow-sm">
                  <CheckCircle2 size={17} strokeWidth={3} />
                </div>
                <span className="text-slate-800 font-bold text-base sm:text-lg tracking-tight">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

         
        </motion.div>

      </div>
    </section>
  );
}