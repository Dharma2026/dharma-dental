'use client';

// components/contact/sections/ContactCTA.tsx
import { motion, Variants } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactCTA() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px] mb-5"
          >
            <Sparkles size={13} /> Emergency Dental Care
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4"
          >
            Dental Emergency?{' '}
            <span className="text-yellow-400">Call Us Now.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-lg font-serif italic mb-10"
          >
            We offer priority slots for urgent dental care — 6 days a week.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="tel:+919169269369"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-yellow-400/20 hover:bg-yellow-300 transition-colors"
          >
            <Phone size={18} /> +91 91692 69369
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}