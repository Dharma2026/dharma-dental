'use client';

// app/treatments/dental-implants/page.tsx
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
  Zap,
  Sparkles,
  ThumbsUp,
  Timer,
  Stethoscope,
  Baby,
  Heart,
  Activity,
  Microscope,
  Award,
  TrendingUp,
  AlertCircle,
  Layers,
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

const IMPLANT_TYPES = [
  {
    icon: Award,
    title: 'Single Tooth Implant',
    desc: 'One implant post topped with a custom ceramic crown replaces a single missing tooth — without touching adjacent healthy teeth.',
    highlights: ['1 Implant + 1 Crown', 'No Adjacent Filing', 'Natural Look & Feel', 'Permanent Solution'],
    ideal: 'One missing tooth',
    popular: true,
  },
  {
    icon: Layers,
    title: 'Implant-Supported Bridge',
    desc: 'Two implants support a bridge spanning 3–4 teeth. Ideal when multiple adjacent teeth are missing.',
    highlights: ['2 Implants', '3–4 Unit Bridge', 'Fixed, Not Removable', 'Bone Preservation'],
    ideal: '2–4 adjacent missing',
    popular: false,
  },
  {
    icon: TrendingUp,
    title: 'All-on-4 / All-on-6',
    desc: 'A full arch of teeth anchored by just 4–6 strategically placed implants. Same-day teeth in most cases.',
    highlights: ['Full Arch Replacement', '4 or 6 Implants', 'Same-Day Loading', 'No Bone Graft Often'],
    ideal: 'Full arch / all teeth',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Implant-Retained Denture',
    desc: 'Snap-on overdenture anchored to 2–4 implants. Eliminates denture slipping and dramatically improves chewing.',
    highlights: ['Removable for Cleaning', 'Snap-On Security', '2–4 Implants', 'Cost-Effective'],
    ideal: 'Denture wearers',
    popular: false,
  },
  {
    icon: Zap,
    title: 'Immediate Load Implants',
    desc: 'A provisional crown placed on the implant on the same day of surgery — so you leave with a tooth.',
    highlights: ['Same-Day Tooth', 'Provisional Crown', 'Case-Specific', 'Aesthetic Priority'],
    ideal: 'Visible front teeth',
    popular: false,
  },
  {
    icon: ShieldCheck,
    title: 'Bone Grafting & Sinus Lift',
    desc: 'When bone volume is insufficient, we rebuild it with grafting materials so implants can be placed safely.',
    highlights: ['Ridge Augmentation', 'Sinus Lift', 'Guided Bone Regen', 'Enables Implants'],
    ideal: 'Bone loss patients',
    popular: false,
  },
];

const PROCEDURE_STEPS = [
  {
    step: '01',
    title: 'Consultation & 3D Scan',
    desc: 'A comprehensive assessment including CBCT 3D scan, dental photographs, and a detailed discussion of your goals. We create a digital treatment plan before a single incision is made.',
    duration: '60 min',
    phase: 'Planning',
  },
  {
    step: '02',
    title: 'Implant Placement Surgery',
    desc: 'Under local anaesthesia, the titanium implant post is precisely placed into the jaw bone at the pre-planned position and angle. Most patients report minimal discomfort.',
    duration: '45–90 min',
    phase: 'Surgery',
  },
  {
    step: '03',
    title: 'Osseointegration (Healing)',
    desc: 'The implant fuses with the surrounding bone — a process called osseointegration. This is what gives implants their extraordinary strength and stability.',
    duration: '8–12 weeks',
    phase: 'Healing',
  },
  {
    step: '04',
    title: 'Abutment Placement',
    desc: 'A small connector piece (abutment) is attached to the implant post. Impressions or digital scans are taken to fabricate your custom crown.',
    duration: '20 min',
    phase: 'Restoration',
  },
  {
    step: '05',
    title: 'Crown Fitting',
    desc: 'Your custom-made ceramic crown is fitted and adjusted for a perfect bite and natural appearance. You leave with a fully functional, beautiful tooth.',
    duration: '30 min',
    phase: 'Final',
  },
];

const BENEFITS = [
  { icon: ShieldCheck,  title: 'Looks & Feels Natural',       desc: 'Custom ceramic crowns are shade-matched to your existing teeth. Nobody will know it is not your original tooth.' },
  { icon: TrendingUp,   title: 'Preserves Jaw Bone',          desc: 'The titanium post stimulates bone just like a natural tooth root, preventing the bone shrinkage that follows extraction.' },
  { icon: ThumbsUp,     title: 'Protects Adjacent Teeth',     desc: 'Unlike a bridge, implants require no grinding down of neighbouring healthy teeth.' },
  { icon: Timer,        title: 'Lifetime Solution',           desc: 'The implant post can last a lifetime. Crowns last 15–25 years. No other replacement option comes close.' },
  { icon: Smile,        title: 'Restores Full Bite Force',    desc: 'Chew anything you want — steak, apples, nuts — with complete confidence. No dietary restrictions.' },
  { icon: Sparkles,     title: 'No Special Maintenance',      desc: 'Brush and floss an implant exactly like a natural tooth. No adhesives, no removal, no soaking overnight.' },
  { icon: Activity,     title: 'Speech Improvement',          desc: 'Gaps and ill-fitting dentures affect pronunciation. Implants restore natural speech immediately.' },
  { icon: Heart,        title: 'Boosts Confidence',           desc: 'Patients consistently report dramatic improvements in self-confidence and quality of life after implant treatment.' },
];

const IMPLANT_VS = [
  { factor: 'Looks natural',            implant: '✓ Identical to real tooth', bridge: '✓ Good',          denture: '⚠ Variable' },
  { factor: 'Bone preservation',        implant: '✓ Yes — stimulates bone',    bridge: '✗ Bone loss',     denture: '✗ Significant bone loss' },
  { factor: 'Adjacent teeth affected',  implant: '✓ None',                      bridge: '✗ Ground down',   denture: '✓ None' },
  { factor: 'Longevity',                implant: '✓ Lifetime (post)',            bridge: '10–15 years',     denture: '5–7 years' },
  { factor: 'Maintenance',              implant: '✓ Brush & floss normally',    bridge: '✓ Floss under',  denture: '⚠ Remove, clean daily' },
  { factor: 'Eating restrictions',      implant: '✓ None',                      bridge: '✓ Minimal',      denture: '✗ Many restrictions' },
  { factor: 'Feel',                      implant: '✓ Like natural tooth',        bridge: '✓ Good',          denture: '⚠ May slip / rub' },
  { factor: 'Cost (long-term)',         implant: '✓ Most cost-effective',        bridge: '⚠ Moderate',     denture: '⚠ Ongoing costs' },
];

const FAQS = [
  {
    q: 'Am I a suitable candidate for dental implants?',
    a: 'Most adults with good general health and sufficient jaw bone density are suitable. We assess suitability through a CBCT 3D scan and clinical examination. Conditions like uncontrolled diabetes, heavy smoking, or severe bone loss may require additional treatment beforehand but rarely rule out implants entirely.',
  },
  {
    q: 'Is implant surgery painful?',
    a: 'The procedure is performed under local anaesthesia — you will feel pressure but not pain. Post-operative discomfort is typically mild and well-managed with standard over-the-counter pain relief. Most patients are surprised by how comfortable the experience is.',
  },
  {
    q: 'How long does the entire process take?',
    a: 'From placement to final crown, the process typically takes 3–6 months to allow for osseointegration. In selected cases, immediate loading allows a temporary crown on the same day as surgery. We will give you a personalised timeline at your consultation.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'The titanium implant post is designed to last a lifetime. The ceramic crown typically lasts 15–25 years and can be replaced when needed without disturbing the implant. With good oral hygiene and regular check-ups, many implants last 30+ years.',
  },
  {
    q: 'What is the success rate of dental implants?',
    a: 'Modern dental implants have a success rate of 95–98% over 10 years in healthy patients. At Dharma Dental, we use premium-grade titanium implants from certified manufacturers and follow strict surgical protocols to maximise outcomes.',
  },
  {
    q: 'Can implants be done if I have bone loss?',
    a: 'Yes, in most cases. Bone grafting, ridge augmentation, or a sinus lift can rebuild sufficient bone to place implants. All-on-4 implants are specifically designed with angulated placement to utilise available bone without grafting in many full-arch cases.',
  },
  {
    q: 'How do I care for my implant?',
    a: 'Care for it exactly like a natural tooth — brush twice daily, floss once daily, and attend regular check-ups. We recommend a soft interdental brush around the implant crown. Avoid smoking, which significantly increases implant failure risk.',
  },
];

const STATS = [
  { value: '25k+', label: 'Implants Placed' },
  { value: '98%',  label: 'Success Rate' },
  { value: '22+',  label: 'Years Experience' },
  { value: '4.9★', label: 'Patient Rating' },
];

const CANDIDACY_CHECKS = [
  { label: 'Missing one or more teeth',            yes: true },
  { label: 'Fully grown adult (18+)',               yes: true },
  { label: 'Sufficient jaw bone density',           yes: true },
  { label: 'Healthy gums',                          yes: true },
  { label: 'Non-smoker or willing to quit',         yes: true },
  { label: 'Good general health',                   yes: true },
  { label: 'Committed to oral hygiene',             yes: true },
  { label: 'Unhappy with dentures or bridges',      yes: true },
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

export default function DentalImplantsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-400/8 rounded-full blur-[130px]" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/7 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
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
              <span className="text-yellow-400">Dental Implants</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Award size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Dental Implants</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Replace Teeth That<br />
                  <span className="text-yellow-400">Last a Lifetime.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Dental implants are the gold standard for replacing missing teeth — looking, feeling, and functioning exactly like natural teeth. With 25,000+ implants placed, Dharma Dental is the region&apos;s most trusted implant provider.
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
                  {['98% Success Rate', '25,000+ Implants Placed', 'Premium Titanium', 'EMI Options Available'].map((badge) => (
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
                  src="/treatments/implants/dental-implants-hero.webp"
                  alt="Dental Implants at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <Award size={200} className="text-yellow-400" />
                </div>

                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">25,000+ Successful Implants</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5 — Patient Reviews</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30 shrink-0">
                      <Award size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating success badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-lg leading-none">98%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider leading-none mt-0.5">Success</p>
              </div>

              {/* Floating lifetime badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-col items-center gap-1">
                <span className="text-yellow-400 text-xl">🦷</span>
                <p className="text-white font-black text-xs">Lifetime</p>
                <p className="text-slate-400 text-[10px]">Result</p>
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

      {/* ── WHAT IS A DENTAL IMPLANT ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">What Is a Dental Implant?</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  A Complete Tooth Root<br />
                  <span className="text-yellow-400">Built to Last Forever.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  A dental implant is a small titanium post that is surgically placed into the jaw bone in place of a missing tooth root. Over 8–12 weeks, the bone naturally fuses to the implant (osseointegration), creating an anchor as strong as a natural tooth root.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Once integrated, a custom ceramic crown is placed on top — indistinguishable in appearance and function from a natural tooth. Unlike dentures or bridges, implants are a permanent, self-contained replacement that requires no alteration of adjacent teeth.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Grade IV Titanium Posts',
                    'CBCT 3D Guided Planning',
                    'Ceramic Zirconia Crowns',
                    'Computer-Guided Surgery',
                    'Immediate Load Option',
                    'All-on-4 / All-on-6',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Implant anatomy diagram */}
            <FadeUp delay={0.15}>
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-6 uppercase tracking-widest text-center">
                  Anatomy of a Dental Implant
                </p>
                <div className="space-y-3">
                  {[
                    { part: 'Crown',       desc: 'Custom ceramic tooth visible above the gum line — shade-matched to your teeth', color: 'bg-yellow-400/20 border-yellow-400/30', text: 'text-yellow-400', position: 'Above gum' },
                    { part: 'Abutment',    desc: 'Connector piece that joins the crown to the implant post', color: 'bg-blue-400/15 border-blue-400/25', text: 'text-blue-400', position: 'Gum level' },
                    { part: 'Implant Post',desc: 'Grade IV titanium screw that replaces the natural tooth root', color: 'bg-green-400/15 border-green-400/25', text: 'text-green-400', position: 'In bone' },
                    { part: 'Osseointegration', desc: 'Bone grows around and fuses to the titanium — takes 8–12 weeks', color: 'bg-purple-400/15 border-purple-400/25', text: 'text-purple-400', position: 'Process' },
                    { part: 'Jaw Bone',    desc: 'Stimulated by the implant post — prevents the bone shrinkage that follows tooth loss', color: 'bg-slate-400/15 border-slate-400/25', text: 'text-slate-300', position: 'Foundation' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.part}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09 }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border ${item.color}`}
                    >
                      <div className="shrink-0 w-28">
                        <span className={`text-[10px] font-black uppercase tracking-wider ${item.text}`}>{item.part}</span>
                        <p className={`text-[9px] font-medium mt-0.5 ${item.text} opacity-60`}>{item.position}</p>
                      </div>
                      <span className="text-slate-400 text-xs leading-snug">{item.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── IMPLANT TYPES ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Implant Options</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              A Solution for Every<br />
              <span className="text-yellow-400">Missing Tooth Scenario.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Whether you are missing one tooth or all of them, we have the right implant solution. Our specialists will recommend the most appropriate option at your free consultation.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPLANT_TYPES.map((type, i) => (
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
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                      {type.ideal}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-base mb-2">{type.title}</h3>
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

      {/* ── AM I A CANDIDATE ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Candidacy</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Are You a Good<br />
                  <span className="text-yellow-400">Candidate for Implants?</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  The majority of adults with missing teeth are suitable candidates for dental implants. A CBCT 3D scan and clinical examination at your free consultation will confirm your suitability in detail.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Even patients with bone loss, gum disease history, or systemic conditions can often receive implants after appropriate preparation. We will walk you through every option.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20 mt-4"
                >
                  <CalendarDays size={15} /> Check My Candidacy — Free
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-widest">Quick Candidacy Checklist</p>
                <p className="text-slate-500 text-xs mb-6">Ideal candidates typically check most of these boxes:</p>
                <div className="space-y-3">
                  {CANDIDACY_CHECKS.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-400/8 border border-green-400/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={13} className="text-green-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 p-4 bg-yellow-400/8 border border-yellow-400/20 rounded-xl">
                  <p className="text-yellow-400 text-xs font-semibold leading-relaxed">
                    Don&apos;t tick every box? Don&apos;t worry — our specialists will assess your unique situation and explore all options at your free consultation.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PROCEDURE STEPS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">The Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Your Implant Journey —<br />
              <span className="text-yellow-400">Step by Step.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Transparency builds confidence. Here is exactly what happens at every stage of your dental implant treatment.
            </p>
          </FadeUp>

          <div className="relative">
            {/* Vertical connector for desktop */}
            <div className="hidden lg:block absolute left-[calc(10%+28px)] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

            <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-5">
              {PROCEDURE_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">
                    {/* Left — step icon */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-24 shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 relative z-10">
                        <span className="text-black font-black text-base">{step.step}</span>
                      </div>
                      <div className="lg:hidden">
                        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400/70">{step.phase}</span>
                      </div>
                    </div>
                    {/* Right — content */}
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Why Implants</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Eight Reasons Implants Are<br />
              <span className="text-yellow-400">Worth Every Rupee.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.07}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center mb-4 group-hover:bg-yellow-400/25 transition-colors shrink-0">
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

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Implants vs Bridge vs Denture —<br />
              <span className="text-yellow-400">The Complete Picture.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/8">
                    <th className="p-4 text-left text-slate-500 text-xs font-black uppercase tracking-widest">Factor</th>
                    <th className="p-4 text-center border-l border-white/8">
                      <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Implant</span>
                    </th>
                    <th className="p-4 text-center border-l border-white/8">
                      <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Bridge</span>
                    </th>
                    <th className="p-4 text-center border-l border-white/8">
                      <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Denture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {IMPLANT_VS.map((row, i) => (
                    <tr key={row.factor} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="p-4 text-slate-400 text-xs font-medium">{row.factor}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-green-400 font-semibold">{row.implant}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-slate-400 font-semibold">{row.bridge}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-slate-500 font-semibold">{row.denture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── EMI / AFFORDABILITY ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
                    <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Affordability</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-4">
                    Implants Are More<br />
                    <span className="text-yellow-400">Affordable Than You Think.</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    While the upfront cost of an implant may seem higher than alternatives, it is the most cost-effective option over a lifetime — no ongoing adhesive costs, no replacement dentures every 5–7 years, no bridge replacements every decade.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    We offer flexible payment options including no-cost EMI to help you invest in a lifetime solution without financial stress. Speak to our team about current plans.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Sparkles, label: 'No-Cost EMI',         sub: 'Spread payments interest-free' },
                    { icon: ShieldCheck, label: 'Transparent Pricing', sub: 'Full cost estimate before treatment' },
                    { icon: Award,   label: 'Premium Implants',    sub: 'Certified Grade IV titanium' },
                    { icon: ThumbsUp, label: 'Lifetime Investment', sub: 'No ongoing replacement costs' },
                  ].map((item, i) => (
                    <div key={item.label} className="bg-white/5 border border-white/8 rounded-2xl p-4 hover:border-yellow-400/20 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-3">
                        <item.icon size={16} className="text-yellow-400" />
                      </div>
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-slate-500 text-xs mt-1 leading-snug">{item.sub}</p>
                    </div>
                  ))}
                </div>
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
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Consultation</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    Ready to Reclaim<br />Your Complete Smile?
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a no-obligation implant consultation at your nearest Dharma Dental branch. Get a 3D scan, personalised treatment plan, and full cost breakdown — no commitment required.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free 3D Assessment', 'No Obligation', 'Same-Day Quote', 'EMI Available'].map((item) => (
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
              Dental Implant Questions,<br />
              <span className="text-yellow-400">Expertly Answered.</span>
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
                Contact our implant team
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
              <p className="text-slate-500 text-sm mt-1">Complete restorative and cosmetic care at Dharma Dental.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Root Canal Treatment', sub: 'Endodontics',  href: '/treatments/root-canal-treatment',  icon: Activity },
              { name: 'Cosmetic Veneers',     sub: 'Cosmetic',    href: '/treatments/cosmetic-veneers',      icon: Sparkles },
              { name: 'Teeth Whitening',      sub: 'Cosmetic',    href: '/treatments/teeth-whitening',       icon: Smile },
              { name: 'General Dentistry',    sub: 'Preventive',  href: '/treatments/general-dentistry',     icon: Stethoscope },
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