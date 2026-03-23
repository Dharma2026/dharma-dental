'use client';

// app/treatments/orthodontics-braces/page.tsx
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  Phone,
  CalendarDays,
  ShieldCheck,
  Smile,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
  Sparkles,
  ThumbsUp,
  Timer,
  Stethoscope,
  Activity,
  Award,
  TrendingUp,
  Layers,
  Zap,
  Target,
  RotateCcw,
  Heart,
  Baby,
} from 'lucide-react';

// ─── Animation Helper ─────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TREATMENT_TYPES = [
  {
    icon: Layers,
    title: 'Metal Braces',
    desc: 'The time-tested gold standard. High-grade stainless steel brackets and wires deliver precise, powerful tooth movement for complex cases.',
    highlights: ['Most Affordable', 'Handles Complex Cases', 'Reliable & Precise', 'Coloured Bands Available'],
    ideal: 'All ages, complex cases',
    duration: '12 – 24 months',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Ceramic / Clear Braces',
    desc: 'Tooth-coloured ceramic brackets that blend with your smile. Same effectiveness as metal braces with a far more discreet appearance.',
    highlights: ['Tooth-Coloured', 'Less Visible', 'Same Precision', 'Adult-Friendly'],
    ideal: 'Teens & adults',
    duration: '12 – 24 months',
    popular: false,
  },
  {
    icon: Zap,
    title: 'Clear Aligners (Invisalign)',
    desc: 'Virtually invisible, removable trays that straighten teeth without brackets or wires. Change trays every 1–2 weeks as your smile transforms.',
    highlights: ['Virtually Invisible', 'Removable', 'No Diet Restrictions', 'Easy to Clean'],
    ideal: 'Teens & adults, mild–mod',
    duration: '6 – 18 months',
    popular: true,
  },
  {
    icon: Target,
    title: 'Self-Ligating Braces',
    desc: 'Advanced braces with a built-in clip mechanism that eliminates elastic ties — reducing friction and often shortening treatment time.',
    highlights: ['Fewer Visits', 'Less Friction', 'Faster Treatment', 'Easier Hygiene'],
    ideal: 'All ages',
    duration: '10 – 20 months',
    popular: false,
  },
  {
    icon: Baby,
    title: 'Phase 1 (Early) Orthodontics',
    desc: 'Interceptive treatment for children aged 7–10 to guide jaw growth, create space, and prevent more complex treatment later.',
    highlights: ['Ages 7 – 10', 'Guides Jaw Growth', 'Creates Space', 'Reduces Future Tx'],
    ideal: 'Children 7–10 yrs',
    duration: '6 – 12 months',
    popular: false,
  },
  {
    icon: RotateCcw,
    title: 'Retainers',
    desc: 'Custom fixed or removable retainers worn after braces to maintain your results and prevent teeth from shifting back.',
    highlights: ['Fixed or Removable', 'Maintains Results', 'Custom-Fitted', 'Essential Post-Tx'],
    ideal: 'Post-treatment',
    duration: 'Ongoing',
    popular: false,
  },
];

const CONDITIONS_TREATED = [
  { label: 'Crowding',           desc: 'Teeth overlap due to insufficient space in the jaw.' },
  { label: 'Spacing / Gaps',     desc: 'Unwanted spaces between teeth from missing or small teeth.' },
  { label: 'Overbite',           desc: 'Upper front teeth excessively overlap the lower teeth.' },
  { label: 'Underbite',          desc: 'Lower teeth protrude in front of upper teeth.' },
  { label: 'Crossbite',          desc: 'Upper teeth sit inside the lower teeth on one or both sides.' },
  { label: 'Open Bite',          desc: 'Upper and lower front teeth don\'t meet when biting.' },
  { label: 'Deep Bite',          desc: 'Lower teeth are almost completely hidden by upper front teeth.' },
  { label: 'Protrusion',         desc: 'Front teeth stick out excessively, affecting appearance and function.' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Orthodontic Consultation',
    desc: 'A detailed assessment of your bite, teeth, and jaw. We take digital X-rays, photographs, and 3D scans to fully understand your case.',
    duration: '60 min',
    phase: 'Assessment',
  },
  {
    step: '02',
    title: 'Custom Treatment Plan',
    desc: 'We present a personalised plan showing your predicted outcome, treatment duration, options available, and a full cost breakdown — no surprises.',
    duration: '30 min',
    phase: 'Planning',
  },
  {
    step: '03',
    title: 'Brace / Aligner Fitting',
    desc: 'Brackets bonded or first aligner trays issued. We walk you through care instructions, what to expect, and who to call if you have concerns.',
    duration: '60–90 min',
    phase: 'Start',
  },
  {
    step: '04',
    title: 'Regular Adjustment Visits',
    desc: 'Every 4–8 weeks we review your progress, adjust wires or issue new aligner trays. Each visit is quick and usually painless.',
    duration: '20–30 min',
    phase: 'Active Treatment',
  },
  {
    step: '05',
    title: 'Brace Removal & Retention',
    desc: 'Braces are removed and your smile is revealed. Custom retainers are fitted immediately to hold your beautiful new alignment.',
    duration: '45 min',
    phase: 'Completion',
  },
];

const BENEFITS = [
  { icon: Smile,       title: 'Straighter, Confident Smile',   desc: 'Achieve the smile you have always wanted — dramatically improving your appearance and self-confidence.' },
  { icon: ShieldCheck, title: 'Better Oral Health',            desc: 'Straight teeth are easier to clean, reducing risk of cavities, gum disease, and bad breath.' },
  { icon: Activity,    title: 'Improved Bite Function',        desc: 'Correcting bite issues reduces jaw pain, headaches, and abnormal wear on tooth surfaces.' },
  { icon: Heart,       title: 'Speech Improvement',           desc: 'Gaps, protrusions, and bite issues can affect pronunciation. Orthodontics often dramatically improves speech.' },
  { icon: TrendingUp,  title: 'Long-Lasting Results',         desc: 'With proper retention, orthodontic results are permanent. The investment pays off for decades.' },
  { icon: ThumbsUp,    title: 'Non-Invasive Treatment',       desc: 'No surgery, no extractions in most cases — just gentle, guided forces that move teeth predictably over time.' },
];

const AGE_GROUPS = [
  {
    age: 'Children (7–12)',
    icon: Baby,
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/30',
    accent: 'text-blue-400',
    dot: 'bg-blue-400',
    desc: 'Early assessment and Phase 1 interceptive treatment to guide jaw development and prevent complex problems in the teenage years.',
    options: ['Space Maintainers', 'Phase 1 Braces', 'Palate Expanders', 'Habit Appliances'],
  },
  {
    age: 'Teenagers (13–17)',
    icon: TrendingUp,
    color: 'from-yellow-400/20 to-yellow-400/5',
    border: 'border-yellow-400/30',
    accent: 'text-yellow-400',
    dot: 'bg-yellow-400',
    desc: 'The ideal time for orthodontic treatment — jaw growth is nearly complete, all permanent teeth are in, and teeth move efficiently.',
    options: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Self-Ligating'],
  },
  {
    age: 'Adults (18+)',
    icon: Award,
    color: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/30',
    accent: 'text-green-400',
    dot: 'bg-green-400',
    desc: 'It is never too late for a straight smile. Adult orthodontics is increasingly popular — especially discreet options like clear aligners and ceramic braces.',
    options: ['Clear Aligners', 'Ceramic Braces', 'Self-Ligating', 'Lingual Braces'],
  },
];

const BRACES_VS_ALIGNERS = [
  { factor: 'Visibility',          braces: '⚠ Visible metal/ceramic', aligners: '✓ Nearly invisible' },
  { factor: 'Removability',        braces: '✗ Fixed',                  aligners: '✓ Removable for eating' },
  { factor: 'Complex cases',       braces: '✓ Handles all cases',      aligners: '⚠ Mild to moderate' },
  { factor: 'Eating restrictions', braces: '⚠ Avoid hard/sticky',      aligners: '✓ None — remove to eat' },
  { factor: 'Oral hygiene',        braces: '⚠ More challenging',       aligners: '✓ Remove to brush' },
  { factor: 'Clinic visits',       braces: 'Every 4–6 weeks',          aligners: 'Every 6–8 weeks' },
  { factor: 'Treatment time',      braces: '12–24 months',             aligners: '6–18 months (mild–mod)' },
  { factor: 'Cost',                braces: '✓ More affordable',        aligners: '⚠ Slightly higher' },
];

const FAQS = [
  {
    q: 'What is the right age to start orthodontic treatment?',
    a: 'We recommend a first orthodontic assessment at age 7 when the first adult molars are present. Ideal treatment age is typically 11–14 for teenagers. However, adults can achieve excellent results at any age — we treat patients well into their 50s and 60s.',
  },
  {
    q: 'Are braces painful?',
    a: 'Braces are not painful to fit. You may experience mild soreness for 2–4 days after each adjustment as teeth begin to move — this is normal and managed easily with over-the-counter pain relief. Most patients adapt within a few weeks.',
  },
  {
    q: 'How long does orthodontic treatment take?',
    a: 'Treatment duration depends on the complexity of the case. Simple crowding may resolve in 6–9 months; complex bite corrections can take 18–24 months. Clear aligners for mild cases can be as short as 3–6 months. We will give you an accurate timeline at your consultation.',
  },
  {
    q: 'Can I still play sports or a musical instrument with braces?',
    a: 'Yes. We provide a protective mouthguard for contact sports. Musicians usually adapt to braces within a few weeks. Clear aligner patients can simply remove their trays during practice.',
  },
  {
    q: 'Will I need to wear a retainer after braces?',
    a: 'Yes — this is essential. Teeth have a natural tendency to shift back toward their original positions. We provide a custom retainer (fixed behind the teeth and/or removable) on the day braces are removed. Worn as directed, your results will last a lifetime.',
  },
  {
    q: 'What foods do I need to avoid with braces?',
    a: 'Hard foods (nuts, raw carrots, ice), sticky foods (toffee, chewing gum), and chewy foods (bagels, hard bread crusts) can damage brackets or wires. Clear aligner patients have no dietary restrictions — simply remove trays before eating.',
  },
  {
    q: 'How do I keep my teeth clean with braces?',
    a: 'Brush after every meal using a soft-bristle brush and fluoride toothpaste, angling the brush at 45° above and below the wire. Use interdental brushes to clean between brackets. Floss daily with a floss threader or water flosser. We demonstrate proper technique at your fitting appointment.',
  },
];

const STATS = [
  { value: '22+',  label: 'Years Experience' },
  { value: '2L+',  label: 'Smiles Transformed' },
  { value: '15+',  label: 'Clinic Branches' },
  { value: '4.9★', label: 'Patient Rating' },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${open ? 'border-yellow-400/40 bg-yellow-400/5' : 'border-white/8 bg-white/3'}`}>
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
          <span className="text-white font-semibold text-sm leading-snug">{q}</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={18} className={open ? 'text-yellow-400' : 'text-slate-500'} />
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>
        </motion.div>
      </div>
    </FadeUp>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OrthodonticsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-400/8 rounded-full blur-[130px]" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/7 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/treatments" className="hover:text-yellow-400 transition-colors">Treatments</Link>
              <ChevronRight size={12} />
              <span className="text-yellow-400">Orthodontics &amp; Braces</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Smile size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Orthodontics &amp; Braces</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Straighten Your Smile.<br />
                  <span className="text-yellow-400">Transform Your Life.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  From traditional braces to virtually invisible clear aligners — Dharma Dental offers every orthodontic solution for children, teenagers, and adults. Correct your bite, close gaps, and achieve the smile you deserve.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                  >
                    <CalendarDays size={15} /> Free Consultation
                  </Link>
                  <a
                    href="tel:+919169269369"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-8">
                  {['All Ages Welcome', 'Metal, Ceramic & Clear Aligners', 'EMI Options', 'Free Assessment'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                      {badge}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — visual */}
            <FadeUp delay={0.2} className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 h-[440px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/8" />
                <Image
                  src="/treatments/orthodontics/orthodontics-hero.webp"
                  alt="Orthodontics & Braces at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <Smile size={200} className="text-yellow-400" />
                </div>

                {/* Overlay info card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">2 Lakh+ Smiles Transformed</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5 — Patient Reviews</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30 shrink-0">
                      <Smile size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating age badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-base leading-none">All</p>
                <p className="font-black text-lg leading-none">Ages</p>
              </div>

              {/* Floating invisible badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-col items-center gap-1">
                <span className="text-yellow-400 text-xl">✨</span>
                <p className="text-white font-black text-xs">Invisible</p>
                <p className="text-slate-400 text-[10px]">Options</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-black text-yellow-400 tracking-tight">{s.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS ORTHODONTICS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">What Is Orthodontics?</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  More Than a<br />
                  <span className="text-yellow-400">Straight Smile.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Orthodontics is a dental speciality focused on diagnosing, preventing, and correcting misaligned teeth and jaws (malocclusion). While the cosmetic result — a straighter, more symmetrical smile — is obvious, the health benefits are equally significant.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Straight teeth are significantly easier to clean, reducing the risk of cavities and gum disease. Correcting bite issues reduces abnormal wear, jaw pain, and headaches. At Dharma Dental, every orthodontic treatment plan is developed by a specialist with your health outcomes — not just aesthetics — in mind.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'BDS / MDS Orthodontists',
                    'Digital Cephalometric X-ray',
                    '3D Digital Impressions',
                    'Computer-Predicted Results',
                    'In-House Lab',
                    'Clear Aligner Certified',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Conditions treated */}
            <FadeUp delay={0.15}>
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-widest">Conditions We Treat</p>
                <p className="text-slate-500 text-xs mb-6">Orthodontics corrects a wide range of alignment and bite issues:</p>
                <div className="grid grid-cols-1 gap-2.5">
                  {CONDITIONS_TREATED.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:border-yellow-400/20 hover:bg-yellow-400/5 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 mt-1.5" />
                      <div>
                        <span className="text-white font-bold text-xs">{c.label}</span>
                        <span className="text-slate-500 text-xs ml-2">{c.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TREATMENT OPTIONS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Treatment Options</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Every Option. Every Age.<br />
              <span className="text-yellow-400">One Expert Team.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              We offer the full spectrum of orthodontic treatments and will help you choose the right option for your lifestyle, budget, and clinical needs.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENT_TYPES.map((type, i) => (
              <FadeUp key={type.title} delay={i * 0.08}>
                <div className={`group relative h-full bg-slate-900/60 border rounded-3xl p-6 hover:bg-yellow-400/5 transition-all duration-300 flex flex-col ${type.popular ? 'border-yellow-400/50 bg-yellow-400/5' : 'border-white/8 hover:border-yellow-400/30'}`}>
                  {type.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/30">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4 mt-2">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-colors">
                      <type.icon size={22} className="text-yellow-400" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                        {type.duration}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-black text-base mb-1">{type.title}</h3>
                  <p className="text-slate-500 text-[11px] font-semibold mb-2 uppercase tracking-wider">{type.ideal}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{type.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[11px] text-slate-400 font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE-GROUP GUIDE ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">By Age Group</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Orthodontics at<br />
              <span className="text-yellow-400">Every Stage of Life.</span>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {AGE_GROUPS.map((group, i) => (
              <FadeUp key={group.age} delay={i * 0.1}>
                <div className={`h-full bg-gradient-to-b ${group.color} border ${group.border} rounded-3xl p-7 flex flex-col`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${group.dot} bg-opacity-20`}
                    style={{ background: `${group.dot.replace('bg-', 'rgba(').replace('-400', ', 0.15)')}` }}>
                    <group.icon size={22} className={group.accent} />
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-widest mb-1 ${group.accent}`}>{group.age}</span>
                  <p className="text-white font-black text-base mb-3">
                    {i === 0 ? 'Early Intervention' : i === 1 ? 'Prime Treatment Age' : 'Never Too Late'}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{group.desc}</p>
                  <div className="space-y-2">
                    {group.options.map((opt) => (
                      <div key={opt} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={12} className={`${group.accent} shrink-0`} />
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRACES VS ALIGNERS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Traditional Braces vs<br />
              <span className="text-yellow-400">Clear Aligners — Compared.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Both are excellent options — the best choice depends on your lifestyle, case complexity, and preferences. We will guide you at your consultation.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/8">
                    <th className="p-4 text-left text-slate-500 text-xs font-black uppercase tracking-widest w-1/3">Factor</th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-slate-300 text-xs font-black uppercase tracking-widest">Traditional Braces</span>
                    </th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Clear Aligners</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BRACES_VS_ALIGNERS.map((row, i) => (
                    <tr key={row.factor} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="p-4 text-slate-400 text-xs font-medium">{row.factor}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-slate-400 font-semibold">{row.braces}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-green-400 font-semibold">{row.aligners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Not sure which is right for you?{' '}
              <Link href="/contact" className="text-yellow-400 font-semibold hover:underline">
                Book a free consultation
              </Link>
              {' '}and our orthodontist will recommend the ideal option for your case.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Your Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Your Orthodontic Journey —<br />
              <span className="text-yellow-400">From First Visit to Final Smile.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute left-[calc(10%+28px)] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
            <div className="space-y-5">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-24 shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 relative z-10">
                        <span className="text-black font-black text-base">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/20 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-white font-black text-base">{step.title}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                            {step.phase}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                            ≈ {step.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Beyond Aesthetics —<br />
              <span className="text-yellow-400">Why Orthodontics Changes Everything.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.08}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center mb-4 group-hover:bg-yellow-400/25 transition-colors">
                    <b.icon size={20} className="text-yellow-400" />
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARE TIPS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Heart size={17} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Care Tips During Treatment</p>
                  <p className="text-slate-500 text-xs">Keep your teeth healthy and treatment on track</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  'Brush after every meal — food trapped in brackets causes rapid decay and staining.',
                  'Use an interdental / proxy brush to clean between brackets and under wires daily.',
                  'Avoid hard, crunchy, or sticky foods that can snap wires or pop brackets off.',
                  'Wear your aligners for 20–22 hours per day for treatment to stay on schedule.',
                  'Contact us immediately if a wire is poking or a bracket has come loose — don\'t wait.',
                  'Wear your retainer exactly as directed after treatment — the most critical phase for lasting results.',
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-yellow-400 font-black text-[10px]">{i + 1}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-300 p-10 lg:p-14">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
              </div>
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Orthodontic Consultation</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    Your Straight Smile<br />Starts With One Visit.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a free consultation at any Dharma Dental branch. Our orthodontic specialist will assess your teeth, explain your options, and give you a personalised treatment plan with costs.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free Assessment', 'No Obligation', 'All Options Shown', 'EMI Available'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-black/70 text-xs font-semibold">
                        <CheckCircle2 size={13} className="text-black/50 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-7 py-4 bg-black text-white rounded-xl text-sm font-black uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-xl"
                  >
                    <CalendarDays size={15} /> Book Now
                  </Link>
                  <a
                    href="tel:+919169269369"
                    className="flex items-center gap-2 px-7 py-4 bg-white/30 text-black border border-black/15 rounded-xl text-sm font-black uppercase tracking-wider hover:bg-white/50 transition-colors"
                  >
                    <Phone size={15} /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Orthodontic Questions<br />
              <span className="text-yellow-400">Honestly Answered.</span>
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              More questions?{' '}
              <Link href="/contact" className="text-yellow-400 font-semibold hover:underline">
                Contact our orthodontic team
              </Link>
              {' '}or call{' '}
              <a href="tel:+919169269369" className="text-yellow-400 font-semibold hover:underline">
                +91 91692 69369
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── RELATED TREATMENTS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="flex items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
                Explore Other <span className="text-yellow-400">Treatments</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1">Complete smile care at Dharma Dental.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Teeth Whitening',      sub: 'Cosmetic',     href: '/treatments/teeth-whitening',      icon: Sparkles },
              { name: 'Dental Implants',      sub: 'Restorative',  href: '/treatments/dental-implants',      icon: Award },
              { name: 'Paediatric Dentistry', sub: 'Children',     href: '/treatments/pediatric-dentistry',  icon: Baby },
              { name: 'General Dentistry',    sub: 'Preventive',   href: '/treatments/general-dentistry',    icon: Stethoscope },
            ].map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <Link
                  href={t.href}
                  className="group flex items-center gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0 group-hover:bg-yellow-400/25 transition-colors">
                    <t.icon size={18} className="text-yellow-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium">{t.sub}</p>
                    <p className="text-white font-bold text-sm leading-snug">{t.name}</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-400 transition-colors ml-auto shrink-0" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS STRIP ── */}
      <section className="py-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0" />
                <span className="text-white font-bold text-sm">Available at all Dharma Dental branches:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                {['Anantapur', 'Vanasthalipuram, Hyderabad', 'Kondapur, Hyderabad', 'Whitefield, Bengaluru', 'Sarjapur, Bengaluru'].map((loc) => (
                  <span key={loc} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                    {loc}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Clock size={14} className="text-yellow-400" />
                <span className="text-slate-400 text-xs">Mon–Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}