'use client';

// app/treatments/clear-aligners/page.tsx
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
  Layers,
  Zap,
  Target,
  RotateCcw,
  Heart,
  Baby,
  Eye,
  Coffee,
  Utensils,
  Brush,
  Wind,
  TrendingUp,
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

const ALIGNER_ADVANTAGES = [
  {
    icon: Eye,
    title: 'Virtually Invisible',
    desc: 'Made from crystal-clear medical-grade plastic, aligners are nearly undetectable when worn — most people will never notice.',
  },
  {
    icon: Utensils,
    title: 'No Food Restrictions',
    desc: 'Remove your aligners before eating or drinking anything other than water. Enjoy every food you love throughout treatment.',
  },
  {
    icon: Brush,
    title: 'Easy Oral Hygiene',
    desc: 'Remove trays to brush and floss exactly as normal. No wires, no brackets, no interdental brushes required.',
  },
  {
    icon: Heart,
    title: 'Comfortable to Wear',
    desc: 'Smooth plastic edges with no metal wires or sharp brackets to irritate the gums, cheeks, or lips.',
  },
  {
    icon: Timer,
    title: 'Fewer Clinic Visits',
    desc: 'Check-ins every 6–8 weeks vs every 4 weeks for braces. Ideal for busy professionals and students.',
  },
  {
    icon: Target,
    title: 'Predictable Results',
    desc: 'Advanced 3D software maps every movement before treatment begins — you see your predicted final result from day one.',
  },
  {
    icon: Zap,
    title: 'Fast Treatment',
    desc: 'Mild to moderate cases can be resolved in as little as 3–6 months. Complex cases average 12–18 months.',
  },
  {
    icon: ShieldCheck,
    title: 'Clinically Proven',
    desc: 'Millions of patients globally have achieved exceptional results with clear aligner therapy over the past 25 years.',
  },
];

const CONDITIONS_TREATED = [
  { label: 'Mild to Moderate Crowding',  suitable: true,  note: 'Most common case type for aligners' },
  { label: 'Spacing & Gaps',             suitable: true,  note: 'Excellent results for most gap sizes' },
  { label: 'Mild Overbite',              suitable: true,  note: 'Aligners with attachments work well' },
  { label: 'Mild Underbite',             suitable: true,  note: 'Case-dependent — assessed at consultation' },
  { label: 'Crossbite',                  suitable: true,  note: 'Posterior and anterior crossbites' },
  { label: 'Open Bite',                  suitable: true,  note: 'Effective with vertical attachments' },
  { label: 'Relapse / Retreatment',      suitable: true,  note: 'Ideal for minor post-brace shifts' },
  { label: 'Severe Skeletal Discrepancy',suitable: false, note: 'May require braces or surgery' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Consultation & 3D Scan',
    desc: 'A digital intraoral scan (no messy moulds) creates a precise 3D model of your teeth. We assess your bite, discuss your goals, and confirm you are a suitable aligner candidate.',
    duration: '60 min',
    phase: 'Assessment',
  },
  {
    step: '02',
    title: 'Digital Treatment Preview',
    desc: 'Using specialised software, we simulate the full tooth movement sequence and show you a digital preview of your predicted final smile before treatment begins.',
    duration: '15 min',
    phase: 'Planning',
  },
  {
    step: '03',
    title: 'Custom Aligner Fabrication',
    desc: 'Your full series of custom-made, precision-trimmed clear trays is manufactured from your 3D scan data using medical-grade SmartTrack® material.',
    duration: '2–3 weeks',
    phase: 'Fabrication',
  },
  {
    step: '04',
    title: 'Fitting & Attachment Placement',
    desc: 'Your first trays are issued. Small tooth-coloured attachments (if required) are bonded to certain teeth to help the trays grip and guide more complex movements.',
    duration: '30–45 min',
    phase: 'Start',
  },
  {
    step: '05',
    title: 'Tray Changes & Progress Checks',
    desc: 'Change to the next tray every 1–2 weeks. Return for a progress check every 6–8 weeks. We monitor tooth movement and issue new trays as needed.',
    duration: 'Every 6–8 wks',
    phase: 'Active Treatment',
  },
  {
    step: '06',
    title: 'Refinements (If Needed)',
    desc: 'In some cases, a short refinement phase with a few extra trays fine-tunes final positions. This is included as part of your treatment package.',
    duration: 'If required',
    phase: 'Refinement',
  },
  {
    step: '07',
    title: 'Retainer Fitting',
    desc: 'Your final smile is revealed. Custom clear retainers are fitted the same day to preserve your results permanently — worn nightly long-term.',
    duration: '30 min',
    phase: 'Completion',
  },
];

const ALIGNER_TIERS = [
  {
    name: 'Lite / Express',
    icon: Zap,
    duration: '3 – 6 months',
    trays: '7 – 14 trays',
    ideal: 'Minor crowding, small gaps, relapse',
    color: 'from-blue-400/15 to-blue-400/5',
    border: 'border-blue-400/25',
    accent: 'text-blue-400',
    features: ['Quick Treatment', 'Most Affordable', 'Simple Cases', 'Perfect for Relapse'],
  },
  {
    name: 'Moderate',
    icon: Target,
    duration: '6 – 12 months',
    trays: '15 – 26 trays',
    ideal: 'Moderate crowding, multiple gaps, mild bite issues',
    color: 'from-yellow-400/15 to-yellow-400/5',
    border: 'border-yellow-400/30',
    accent: 'text-yellow-400',
    features: ['Mid-Complexity Cases', 'Attachments Included', 'Bite Correction', 'Most Common'],
    popular: true,
  },
  {
    name: 'Comprehensive',
    icon: Award,
    duration: '12 – 18 months',
    trays: '26 – 40+ trays',
    ideal: 'Complex crowding, significant bite correction, full-arch treatment',
    color: 'from-green-400/15 to-green-400/5',
    border: 'border-green-400/25',
    accent: 'text-green-400',
    features: ['Complex Cases', 'Full Bite Correction', 'Refinements Included', 'Maximum Precision'],
  },
];

const LIFESTYLE_BENEFITS = [
  {
    icon: Coffee,
    title: 'Coffee & Tea Drinkers',
    desc: 'Simply remove your aligners before your morning coffee. No staining, no discolouration — trays stay crystal clear.',
    emoji: '☕',
  },
  {
    icon: Activity,
    title: 'Sports & Athletes',
    desc: 'Remove aligners during contact sports and wear a mouthguard. No broken brackets from impacts.',
    emoji: '🏃',
  },
  {
    icon: Smile,
    title: 'Professionals & Public Speakers',
    desc: 'Aligners are invisible at normal speaking distance. Continue presentations, meetings, and client interactions with complete confidence.',
    emoji: '💼',
  },
  {
    icon: Wind,
    title: 'Musicians',
    desc: 'Wind instrument players can remove aligners during practice. No adaptation period or buzzing issues.',
    emoji: '🎷',
  },
];

const ALIGNERS_VS_BRACES = [
  { factor: 'Visibility during treatment',  aligners: '✓ Nearly invisible',          braces: '⚠ Visible' },
  { factor: 'Remove for eating',            aligners: '✓ Yes — no restrictions',      braces: '✗ Fixed permanently' },
  { factor: 'Oral hygiene',                 aligners: '✓ Brush normally',             braces: '⚠ Complex cleaning' },
  { factor: 'Comfort',                      aligners: '✓ Smooth plastic, no wires',   braces: '⚠ Wires can irritate' },
  { factor: 'Clinic visit frequency',       aligners: '✓ Every 6–8 weeks',            braces: 'Every 4–6 weeks' },
  { factor: 'Complex bite correction',      aligners: '⚠ Mild to moderate',           braces: '✓ All complexity levels' },
  { factor: 'Treatment time',               aligners: '✓ Often shorter for mild cases', braces: '12–24 months' },
  { factor: 'Emergency visits',             aligners: '✓ Rare — no brackets to break', braces: '⚠ Broken brackets common' },
];

const FAQS = [
  {
    q: 'How many hours per day do I need to wear my aligners?',
    a: '20–22 hours per day minimum. Aligners should only be removed for eating, drinking anything other than water, and oral hygiene. Wearing them for less time significantly slows treatment and can cause trays to no longer fit correctly.',
  },
  {
    q: 'Will aligners affect my speech?',
    a: 'Most patients notice a very mild lisp during the first 1–3 days as the tongue adapts. This resolves quickly for virtually all patients. Reading aloud for a few minutes each day speeds up adaptation.',
  },
  {
    q: 'Are clear aligners suitable for my case?',
    a: 'Aligners are highly effective for mild to moderate crowding, spacing, and many bite issues. Severe skeletal problems or very complex bite corrections may require traditional braces. We assess suitability precisely at your free consultation with a 3D digital scan.',
  },
  {
    q: 'Do aligners hurt?',
    a: 'Aligners apply gentle continuous pressure rather than the periodic tightening of braces. Most patients experience mild pressure or tightness for the first day or two after switching to a new tray — a sign the teeth are moving. This is manageable without pain relief for most people.',
  },
  {
    q: 'What are the small bumps on my teeth (attachments)?',
    a: 'Attachments are small tooth-coloured composite shapes bonded to certain teeth. They act like handles — giving the aligner tray something to grip for more precise, controlled tooth movement. They are barely noticeable and removed when treatment is complete, leaving the tooth surface unchanged.',
  },
  {
    q: 'Can I drink with aligners in?',
    a: 'Water only. Hot drinks (tea, coffee) can warp the plastic and stain aligners. Sugary or acidic drinks trapped under aligners dramatically increase cavity risk. Remove aligners, enjoy your drink, rinse your mouth, and replace the trays.',
  },
  {
    q: 'What happens if I lose or damage a tray?',
    a: 'Contact us immediately. If you are near the end of a tray\'s wear period, move to the next tray. If you have just started, go back to the previous tray to maintain tooth position while a replacement is made. We always recommend keeping the previous set as a backup.',
  },
  {
    q: 'How do I clean my aligners?',
    a: 'Rinse under cool water every time you remove them. Brush gently with a soft toothbrush and clear, unscented soap (not toothpaste — it is abrasive). Soak in denture cleaning tablets or aligner cleaning crystals for 15–20 minutes once daily. Never use hot water.',
  },
];

const STATS = [
  { value: '2L+',  label: 'Smiles Transformed' },
  { value: '22+',  label: 'Years Experience' },
  { value: '15+',  label: 'Branches' },
  { value: '4.9★', label: 'Patient Rating' },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.06}>
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

export default function ClearAlignersPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[620px] bg-yellow-400/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-400/7 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/5 rounded-full blur-3xl" />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
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
              <span className="text-yellow-400">Clear Aligners</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Sparkles size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Clear Aligners</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Straight Teeth.<br />
                  <span className="text-yellow-400">Zero Compromise.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Virtually invisible, removable clear aligners that straighten your teeth without brackets, wires, or restrictions. See your predicted result before treatment even begins — and smile confidently every step of the way.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                  >
                    <CalendarDays size={15} /> Free Smile Assessment
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
                  {['Nearly Invisible', 'Removable Anytime', 'No Diet Restrictions', 'See Results Digitally First'].map((badge) => (
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
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/8" />
                <Image
                  src="/treatments/aligners/clear-aligners-hero.webp"
                  alt="Clear Aligners at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <Sparkles size={200} className="text-yellow-400" />
                </div>

                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">See Your Result Before You Start</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5 — Patient Reviews</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30 shrink-0">
                      <Sparkles size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating invisible badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-base leading-none">Nearly</p>
                <p className="font-black text-lg leading-none">Invisible</p>
              </div>

              {/* Floating removable badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-col items-center gap-1">
                <span className="text-yellow-400 text-xl">🫧</span>
                <p className="text-white font-black text-xs">Removable</p>
                <p className="text-slate-400 text-[10px]">Anytime</p>
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

      {/* ── WHAT ARE CLEAR ALIGNERS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">What Are Clear Aligners?</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Orthodontics Reimagined<br />
                  <span className="text-yellow-400">for Modern Life.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Clear aligners are a series of custom-made, precision-trimmed transparent trays worn over the teeth. Each tray in the series moves your teeth a fraction of a millimetre — and after wearing each tray for 1–2 weeks, you progress to the next, gradually guiding your teeth into their ideal position.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  At Dharma Dental, we use advanced digital treatment planning software to design your full aligner series. Before your first tray is made, you see a digital simulation of every tooth movement from start to finish — including a preview of your completed smile.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Medical-Grade Clear Plastic',
                    '3D Digital Scanning',
                    'No Metal or Wires',
                    'Digital Smile Preview',
                    'Custom-Fabricated Series',
                    'Refinements Included',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Conditions suitability panel */}
            <FadeUp delay={0.15}>
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-widest">Is Your Case Suitable?</p>
                <p className="text-slate-500 text-xs mb-6">Clear aligners work for most common orthodontic issues:</p>
                <div className="space-y-2.5">
                  {CONDITIONS_TREATED.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                        c.suitable
                          ? 'bg-green-400/6 border-green-400/20 hover:border-green-400/35'
                          : 'bg-rose-400/6 border-rose-400/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.suitable ? 'bg-green-400/20' : 'bg-rose-400/20'}`}>
                        <span className={`text-[10px] font-black ${c.suitable ? 'text-green-400' : 'text-rose-400'}`}>
                          {c.suitable ? '✓' : '✗'}
                        </span>
                      </div>
                      <div>
                        <span className={`text-xs font-bold ${c.suitable ? 'text-white' : 'text-slate-400'}`}>{c.label}</span>
                        <p className="text-slate-500 text-[11px] mt-0.5">{c.note}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 p-3.5 bg-yellow-400/8 border border-yellow-400/20 rounded-xl">
                  <p className="text-yellow-400 text-xs font-semibold leading-relaxed">
                    Not sure if you&apos;re suitable? A free 3D scan consultation will confirm your case type and the best treatment option for you.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 8 ADVANTAGES ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Why Clear Aligners</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Eight Reasons Patients<br />
              <span className="text-yellow-400">Choose Aligners Over Braces.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALIGNER_ADVANTAGES.map((adv, i) => (
              <FadeUp key={adv.title} delay={i * 0.07}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center mb-4 group-hover:bg-yellow-400/25 transition-colors shrink-0">
                    <adv.icon size={20} className="text-yellow-400" />
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{adv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{adv.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALIGNER TIERS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Treatment Packages</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              A Plan for Every<br />
              <span className="text-yellow-400">Smile Complexity.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Our clear aligner packages are tiered by complexity. Your orthodontist will recommend the right plan after your free 3D assessment.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {ALIGNER_TIERS.map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 0.1}>
                <div className={`relative h-full bg-gradient-to-b ${tier.color} border ${tier.border} rounded-3xl p-7 flex flex-col`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/30 whitespace-nowrap">
                        Most Common
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-5 mt-2">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center`}
                      style={{ background: `${tier.accent.replace('text-', 'rgba(').replace('-400', ', 0.15)')}` }}>
                      <tier.icon size={22} className={tier.accent} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${tier.accent} bg-white/5 border ${tier.border} px-2.5 py-1 rounded-full`}>
                      {tier.trays}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-xl mb-1">{tier.name}</h3>
                  <p className={`text-sm font-black mb-1 ${tier.accent}`}>{tier.duration}</p>
                  <p className="text-slate-500 text-xs mb-5 leading-snug">{tier.ideal}</p>
                  <div className="space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={13} className={`${tier.accent} shrink-0`} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className={`mt-6 w-full py-3 rounded-xl text-sm font-black uppercase tracking-wider text-center transition-all duration-200 ${
                      tier.popular
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20'
                        : 'bg-white/8 text-white border border-white/10 hover:bg-white/15'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP BY STEP PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">The Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              From First Scan to<br />
              <span className="text-yellow-400">Final Smile — Step by Step.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute left-[calc(10%+28px)] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
            <div className="space-y-5">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.08}>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-24 shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 relative z-10">
                        <span className="text-black font-black text-base">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/20 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                        <h3 className="text-white font-black text-base">{step.title}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                            {step.phase}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                            {step.duration}
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

      {/* ── LIFESTYLE FIT ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Lifestyle Fit</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Clear Aligners Fit Around<br />
              <span className="text-yellow-400">Your Life — Not the Other Way.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFESTYLE_BENEFITS.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.09}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-3xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="text-white font-black text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALIGNERS VS BRACES COMPARISON ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Clear Aligners vs<br />
              <span className="text-yellow-400">Traditional Braces.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/8">
                    <th className="p-4 text-left text-slate-500 text-xs font-black uppercase tracking-widest w-1/3">Factor</th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Clear Aligners</span>
                    </th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Traditional Braces</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ALIGNERS_VS_BRACES.map((row, i) => (
                    <tr key={row.factor} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="p-4 text-slate-400 text-xs font-medium">{row.factor}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-green-400 font-semibold">{row.aligners}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-slate-400 font-semibold">{row.braces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CARE GUIDE ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Sparkles size={17} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Aligner Care Guide</p>
                  <p className="text-slate-500 text-xs">Keep your trays clear and treatment on track</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  'Wear aligners 20–22 hours per day — removing them for less time causes trays to stop fitting and delays treatment.',
                  'Remove aligners before eating or drinking anything other than plain water. Sugary liquids under trays drastically increase cavity risk.',
                  'Rinse aligners every time you remove them and brush gently with clear soap — never toothpaste, which scratches and clouds the plastic.',
                  'Soak trays in aligner cleaning crystals or retainer tablets for 15–20 minutes daily to remove bacteria and prevent odour.',
                  'Always store trays in their case when not in your mouth — loose trays are the #1 cause of loss and pet-related damage.',
                  'Switch to the next tray as directed. If a new tray feels very tight, use your previous tray for an extra day before progressing.',
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
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Smile Assessment</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    See Your Predicted Smile<br />Before Treatment Begins.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a free consultation at any Dharma Dental branch. We&apos;ll 3D scan your teeth, confirm your suitability, and show you a digital preview of your final smile — all at no cost and no obligation.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free 3D Scan', 'Digital Smile Preview', 'No Obligation', 'EMI Available'].map((item) => (
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
              Clear Aligner Questions<br />
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
                Contact our team
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
              <p className="text-slate-500 text-sm mt-1">Complete smile transformation at Dharma Dental.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Orthodontics & Braces', sub: 'Orthodontics', href: '/treatments/orthodontics-braces',  icon: Layers },
              { name: 'Teeth Whitening',       sub: 'Cosmetic',     href: '/treatments/teeth-whitening',       icon: Sparkles },
              { name: 'Dental Implants',       sub: 'Restorative',  href: '/treatments/dental-implants',       icon: Award },
              { name: 'General Dentistry',     sub: 'Preventive',   href: '/treatments/general-dentistry',     icon: Stethoscope },
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