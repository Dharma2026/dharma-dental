'use client';

// app/treatments/cosmetic-dentistry/page.tsx
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
  Heart,
  Eye,
  TrendingUp,
  Camera,
  Palette,
  Wand2,
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

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    shortDesc: 'Brighten your smile by up to 8 shades in a single in-chair session.',
    desc: 'Professional-grade whitening treatments that go far beyond over-the-counter products. Our in-chair laser whitening delivers dramatic results in under 90 minutes, while our take-home kits offer gradual brightening at your convenience.',
    highlights: ['In-Chair Laser Whitening', 'Custom Take-Home Kits', 'Up to 8 Shades Lighter', 'Long-Lasting Results'],
    time: '60–90 min',
    href: '/treatments/teeth-whitening',
    popular: true,
  },
  {
    icon: Layers,
    title: 'Porcelain Veneers',
    shortDesc: 'Ultra-thin ceramic shells that transform the shape, size, and colour of your teeth.',
    desc: 'Custom-crafted porcelain veneers permanently bonded to the front surface of teeth, correcting discolouration, chips, gaps, and mild misalignment in as few as two appointments.',
    highlights: ['0.3–0.5mm Thin', 'Stain-Resistant', 'Natural Translucency', '15–20 Year Lifespan'],
    time: '2 visits',
    href: '/treatments/porcelain-veneers',
    popular: false,
  },
  {
    icon: Wand2,
    title: 'Composite Bonding',
    shortDesc: 'Tooth-coloured resin sculpted directly on the tooth to fix chips, gaps, and discolouration.',
    desc: 'A minimally invasive, highly artistic procedure where tooth-coloured composite resin is applied, shaped, and polished in a single visit — transforming smiles without removing tooth structure.',
    highlights: ['Single Visit', 'No Drilling', 'Reversible', 'Natural Appearance'],
    time: '1–2 hours',
    href: '/treatments/composite-bonding',
    popular: false,
  },
  {
    icon: Smile,
    title: 'Smile Makeover',
    shortDesc: 'A fully customised combination of cosmetic treatments planned around your face and goals.',
    desc: 'Our most comprehensive cosmetic service. We analyse your facial proportions, skin tone, gum line, and smile aesthetics to create a personalised combination of treatments that delivers your dream smile.',
    highlights: ['Full Smile Design', 'Digital Preview', 'Multiple Treatments', 'Life-Changing Results'],
    time: 'Multiple visits',
    href: '/treatments/smile-makeover',
    popular: false,
  },
  {
    icon: Eye,
    title: 'Gum Contouring',
    shortDesc: 'Reshape an uneven or excessive gum line to reveal more of your beautiful teeth.',
    desc: 'Using laser or surgical techniques, we reshape and reposition the gum tissue to balance a "gummy smile" or uneven gum line — exposing more tooth and creating perfect proportions.',
    highlights: ['Laser Gum Reshaping', 'Crown Lengthening', 'Minimal Downtime', 'Immediate Improvement'],
    time: '60–90 min',
    href: '/treatments/gum-contouring',
    popular: false,
  },
  {
    icon: Palette,
    title: 'Tooth Gems & Whitening Add-Ons',
    shortDesc: 'Premium finishing touches that personalise your smile.',
    desc: 'Finish your smile transformation with optional add-ons including decorative tooth gems and fluoride strengthening treatments applied after whitening for maximum lustre and protection.',
    highlights: ['Crystal Tooth Gems', 'Post-Whitening Fluoride', 'Safe Application', 'Removable'],
    time: '30–45 min',
    href: '/treatments/smile-add-ons',
    popular: false,
  },
];

const SMILE_CONCERNS = [
  { concern: 'Stained or yellowed teeth',         solution: 'Teeth Whitening',         icon: Sparkles },
  { concern: 'Chipped or cracked teeth',           solution: 'Composite Bonding / Veneers', icon: Layers },
  { concern: 'Gaps between teeth',                 solution: 'Veneers / Aligners / Bonding', icon: Target },
  { concern: 'Short or uneven teeth',              solution: 'Veneers / Composite Bonding', icon: TrendingUp },
  { concern: 'Excessive gum show',                 solution: 'Gum Contouring',           icon: Eye },
  { concern: 'Crooked or misaligned teeth',        solution: 'Clear Aligners / Braces',  icon: Smile },
  { concern: 'Missing teeth',                      solution: 'Dental Implants',           icon: ShieldCheck },
  { concern: 'Overall smile transformation',       solution: 'Smile Makeover Package',   icon: Wand2 },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Digital Smile Design Consultation',
    desc: 'We photograph your face and smile, take digital measurements, and discuss your goals in detail. Using smile design software, we map out your ideal tooth proportions relative to your facial features.',
    duration: '60–90 min',
    phase: 'Discovery',
  },
  {
    step: '02',
    title: 'Digital Smile Preview',
    desc: 'A digital mockup of your proposed smile is created and shown to you before any treatment begins. You can approve the design or request adjustments — your input shapes the final result.',
    duration: '30 min',
    phase: 'Design',
  },
  {
    step: '03',
    title: 'Mock-Up on Your Teeth',
    desc: 'For veneer and bonding cases, we create a 3D mock-up directly on your teeth using composite resin — so you can see, feel, and approve the outcome in real life before treatment is finalised.',
    duration: '60 min',
    phase: 'Trial',
  },
  {
    step: '04',
    title: 'Treatment Delivery',
    desc: 'Your chosen treatments are completed with precision. Veneer preparations, whitening sessions, bonding sculpting — each step is performed to the exact specifications agreed in your smile design.',
    duration: 'Per treatment',
    phase: 'Treatment',
  },
  {
    step: '05',
    title: 'Final Reveal & Photos',
    desc: 'Your new smile is revealed in its final form. We take professional before-and-after photographs for your records and provide a complete aftercare guide to maintain your results.',
    duration: '30 min',
    phase: 'Reveal',
  },
];

const VENEER_VS_BONDING = [
  { factor: 'Material',             veneer: 'Porcelain / Zirconia',     bonding: 'Composite Resin' },
  { factor: 'Tooth reduction',      veneer: '0.3–0.5mm enamel removed', bonding: '✓ Usually none' },
  { factor: 'Visits required',      veneer: '2 visits',                  bonding: '✓ Single visit' },
  { factor: 'Stain resistance',     veneer: '✓ Highly stain resistant',  bonding: '⚠ Can stain over time' },
  { factor: 'Lifespan',             veneer: '✓ 15–20 years',             bonding: '5–10 years' },
  { factor: 'Reversibility',        veneer: '✗ Permanent',               bonding: '✓ Reversible' },
  { factor: 'Cost',                 veneer: 'Higher investment',          bonding: '✓ More affordable' },
  { factor: 'Best for',             veneer: 'Significant changes, permanence', bonding: 'Minor corrections, budget' },
];

const RESULTS = [
  {
    treatment: 'Teeth Whitening',
    before: 'Yellow, stained enamel from coffee, tea, and ageing',
    after: 'Bright, uniformly white smile up to 8 shades lighter',
    duration: '1 session',
    icon: Sparkles,
  },
  {
    treatment: 'Porcelain Veneers',
    before: 'Chipped, uneven, discoloured, or gapped front teeth',
    after: 'Perfect shape, size, and colour — indistinguishable from natural teeth',
    duration: '2 visits',
    icon: Layers,
  },
  {
    treatment: 'Composite Bonding',
    before: 'Minor chips, small gaps, slight discolouration',
    after: 'Seamlessly restored natural-looking tooth surface',
    duration: '1 visit',
    icon: Wand2,
  },
  {
    treatment: 'Smile Makeover',
    before: 'Multiple cosmetic concerns affecting smile confidence',
    after: 'Complete smile transformation customised to your face',
    duration: '2–4 visits',
    icon: Camera,
  },
];

const FAQS = [
  {
    q: 'What is the difference between veneers and composite bonding?',
    a: 'Veneers are thin custom-crafted porcelain shells permanently bonded to your teeth — highly durable, stain-resistant, and long-lasting (15–20 years) but require a small amount of enamel removal. Composite bonding uses tooth-coloured resin sculpted directly on the tooth in a single visit — reversible, affordable, and requiring no drilling, but less durable (5–10 years) and more prone to staining.',
  },
  {
    q: 'Are cosmetic dental treatments painful?',
    a: 'Most cosmetic procedures are comfortable with minimal or no discomfort. Whitening may cause temporary sensitivity for 24–48 hours. Veneer preparation is done under local anaesthesia. Composite bonding requires no anaesthesia in most cases. We discuss comfort management before every procedure.',
  },
  {
    q: 'How long do cosmetic dental results last?',
    a: 'Whitening results last 1–3 years with maintenance. Composite bonding lasts 5–10 years. Porcelain veneers last 15–20 years. Results are significantly extended with good oral hygiene, avoiding staining drinks, and attending regular check-ups.',
  },
  {
    q: 'Can I preview my new smile before treatment?',
    a: 'Yes — this is a cornerstone of our cosmetic approach. We use Digital Smile Design software to create a photographic preview of your proposed smile. For veneer and bonding cases, we also create a physical mock-up on your actual teeth so you can see and feel the result before any permanent changes are made.',
  },
  {
    q: 'Do veneers damage your natural teeth?',
    a: 'Veneer preparation requires removing a very thin layer of enamel (0.3–0.5mm) — roughly the thickness of a contact lens. This is minimal and done to ensure the veneer sits flush without adding bulk. Ultra-thin "prep-less" veneers are available for some cases where no reduction is needed.',
  },
  {
    q: 'How white should I make my teeth?',
    a: 'We recommend a natural-looking result that complements your skin tone and facial features rather than the whitest possible shade. A well-matched, slightly off-white result always looks more natural and age-appropriate than stark white. We use shade guides and digital tools to find your perfect shade during consultation.',
  },
  {
    q: 'What is a Smile Makeover?',
    a: 'A Smile Makeover is a personalised treatment plan combining two or more cosmetic procedures to address all your smile concerns at once. It may include whitening, veneers, bonding, gum contouring, and orthodontics — sequenced and coordinated to deliver a complete transformation.',
  },
];

const STATS = [
  { value: '2L+',  label: 'Smiles Transformed' },
  { value: '22+',  label: 'Years Experience' },
  { value: '15+',  label: 'Clinic Branches' },
  { value: '4.9★', label: 'Patient Rating' },
];

const WHY_CHOOSE = [
  { icon: Wand2,      title: 'Digital Smile Design',     desc: 'See your new smile digitally before a single tooth is touched — approve every detail upfront.' },
  { icon: Award,      title: 'Specialist Cosmetic Team', desc: 'Our cosmetic dentists hold advanced training in smile aesthetics, proportion, and shade matching.' },
  { icon: Camera,     title: 'Physical Mock-Up Trial',   desc: 'For veneer and bonding cases, we trial your new smile on your actual teeth before final treatment.' },
  { icon: Palette,    title: 'Artistic Shade Matching',  desc: 'We use a 16-shade Vita guide and digital photography to achieve a perfectly natural tooth colour.' },
  { icon: ShieldCheck,'title': 'Premium Materials Only', desc: 'We use only premium-grade porcelain, zirconia, and nano-composite resin — never low-grade alternatives.' },
  { icon: Heart,      title: 'Lifetime Maintenance Plan',desc: 'Every cosmetic patient receives a personalised maintenance schedule to protect their investment.' },
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

export default function CosmeticDentistryPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Layered background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-yellow-400/9 rounded-full blur-[150px]" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl" />
          {/* Elegant diagonal line pattern */}
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 60px)',
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
              <span className="text-yellow-400">Cosmetic Dentistry</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Sparkles size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Cosmetic Dentistry</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Your Dream Smile,<br />
                  <span className="text-yellow-400">Artfully Created.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  World-class cosmetic dentistry that combines clinical expertise with genuine artistry. From instant teeth whitening to full smile makeovers — see your result before treatment begins and smile with total confidence.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                  >
                    <CalendarDays size={15} /> Free Smile Consultation
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
                  {['Digital Smile Design', 'Physical Mock-Up Trial', 'Premium Materials', 'Specialist Cosmetic Team'].map((badge) => (
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
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-transparent to-amber-500/5" />
                <Image
                  src="/treatments/cosmetic/cosmetic-dentistry-hero.webp"
                  alt="Cosmetic Dentistry at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                  <Sparkles size={200} className="text-yellow-400" />
                </div>

                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">See Your New Smile Before We Start</p>
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

              {/* Floating art badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-base leading-none">Smile</p>
                <p className="font-black text-lg leading-none">Design</p>
              </div>

              {/* Floating result badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-col items-center gap-1">
                <span className="text-yellow-400 text-xl">🎨</span>
                <p className="text-white font-black text-xs">Artisan</p>
                <p className="text-slate-400 text-[10px]">Results</p>
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

      {/* ── WHAT IS COSMETIC DENTISTRY ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">What Is Cosmetic Dentistry?</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Where Clinical Science<br />
                  <span className="text-yellow-400">Meets Artistic Vision.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile — while always preserving or enhancing dental health. At Dharma Dental, we believe the best cosmetic result is one that looks completely natural: perfectly proportioned, naturally coloured, and expressive of your personality.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our cosmetic team combines clinical excellence with genuine artistic sensibility. We study your facial structure, lip line, gum architecture, and existing teeth before designing anything — because a great smile is designed to complement a face, not just look good in isolation.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Digital Smile Design (DSD)',
                    'Physical Mock-Up Trial',
                    'Vita 16-Shade System',
                    'Premium Porcelain Labs',
                    'Minimal Tooth Reduction',
                    'Long-Term Maintenance Plans',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Smile concern finder */}
            <FadeUp delay={0.15}>
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-2 uppercase tracking-widest">Find Your Solution</p>
                <p className="text-slate-500 text-xs mb-6">What is your main smile concern?</p>
                <div className="space-y-2.5">
                  {SMILE_CONCERNS.map((item, i) => (
                    <motion.div
                      key={item.concern}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:border-yellow-400/25 hover:bg-yellow-400/5 transition-all group cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-yellow-400/15 flex items-center justify-center shrink-0 group-hover:bg-yellow-400/25 transition-colors">
                        <item.icon size={14} className="text-yellow-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold">{item.concern}</p>
                        <p className="text-yellow-400/70 text-[10px] font-bold uppercase tracking-wider mt-0.5">{item.solution}</p>
                      </div>
                      <ArrowRight size={12} className="text-slate-600 group-hover:text-yellow-400 transition-colors shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Every Cosmetic Treatment,<br />
              <span className="text-yellow-400">Under One Roof.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              From a simple whitening session to a complete smile transformation — we offer every cosmetic dental procedure at a level of quality usually reserved for specialist cosmetic clinics.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.08}>
                <div className={`group relative h-full rounded-3xl p-6 hover:bg-yellow-400/5 transition-all duration-300 flex flex-col border ${service.popular ? 'border-yellow-400/50 bg-yellow-400/5' : 'border-white/8 bg-slate-900/60 hover:border-yellow-400/30'}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/30">
                        Most Requested
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4 mt-2">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-colors">
                      <service.icon size={22} className="text-yellow-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                      {service.time}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-base mb-1">{service.title}</h3>
                  <p className="text-yellow-400/80 text-xs font-semibold mb-2">{service.shortDesc}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[11px] text-slate-400 font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 text-yellow-400 text-xs font-black uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER RESULTS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Results</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              What to Expect —<br />
              <span className="text-yellow-400">Before &amp; After Each Treatment.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESULTS.map((r, i) => (
              <FadeUp key={r.treatment} delay={i * 0.09}>
                <div className="bg-slate-900/60 border border-white/8 rounded-3xl overflow-hidden hover:border-yellow-400/25 transition-colors">
                  {/* Header */}
                  <div className="bg-yellow-400/10 border-b border-yellow-400/15 px-5 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-yellow-400/20 flex items-center justify-center shrink-0">
                      <r.icon size={17} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-white font-black text-sm">{r.treatment}</p>
                      <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-wider">{r.duration}</p>
                    </div>
                  </div>
                  {/* Before */}
                  <div className="p-5 border-b border-white/5">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-rose-400/20 flex items-center justify-center text-[9px] font-black text-rose-400 shrink-0 mt-0.5">B</span>
                      <p className="text-[10px] font-black uppercase tracking-widest text-rose-400">Before</p>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{r.before}</p>
                  </div>
                  {/* After */}
                  <div className="p-5">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-[9px] font-black text-green-400 shrink-0 mt-0.5">A</span>
                      <p className="text-[10px] font-black uppercase tracking-widest text-green-400">After</p>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed font-medium">{r.after}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Gallery CTA */}
          <FadeUp delay={0.3} className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-bold hover:bg-white/10 transition-colors"
            >
              <Camera size={15} /> View Full Smile Gallery
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── VENEERS VS BONDING ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Porcelain Veneers vs<br />
              <span className="text-yellow-400">Composite Bonding — Compared.</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mt-4 leading-relaxed">
              Two of our most popular cosmetic treatments — but which is right for you? Here&apos;s an honest comparison.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/8">
                    <th className="p-4 text-left text-slate-500 text-xs font-black uppercase tracking-widest w-1/3">Factor</th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Porcelain Veneers</span>
                    </th>
                    <th className="p-4 text-center border-l border-white/8 w-1/3">
                      <span className="text-slate-300 text-xs font-black uppercase tracking-widest">Composite Bonding</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {VENEER_VS_BONDING.map((row, i) => (
                    <tr key={row.factor} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="p-4 text-slate-400 text-xs font-medium">{row.factor}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-yellow-300 font-semibold">{row.veneer}</td>
                      <td className="p-4 border-l border-white/8 text-center text-xs text-slate-300 font-semibold">{row.bonding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Can&apos;t decide?{' '}
              <Link href="/contact" className="text-yellow-400 font-semibold hover:underline">
                Book a free cosmetic consultation
              </Link>
              {' '}and our specialist will recommend the ideal option for your smile and budget.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Our Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              How We Create Your<br />
              <span className="text-yellow-400">Perfect Smile.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Our Digital Smile Design process ensures you are in control at every stage — no surprises, no regrets.
            </p>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute left-[calc(10%+28px)] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />
            <div className="space-y-5">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.09}>
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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Why Dharma Dental</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Six Reasons to Trust<br />
              <span className="text-yellow-400">Your Smile With Us.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center mb-4 group-hover:bg-yellow-400/25 transition-colors">
                    <item.icon size={20} className="text-yellow-400" />
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAINTENANCE TIPS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Heart size={17} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Protecting Your Investment</p>
                  <p className="text-slate-500 text-xs">How to maintain your cosmetic results long-term</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  'Brush twice daily with a non-abrasive, fluoride toothpaste. Avoid whitening toothpastes on veneers — they can dull the surface polish.',
                  'Limit tea, coffee, red wine, and coloured foods in the first 48 hours after whitening. Use a straw where practical.',
                  'Do not bite fingernails, chew pens, or use teeth to open packaging — composite bonding and even porcelain can chip under sudden force.',
                  'Wear a custom night guard if you grind your teeth. Bruxism is the leading cause of premature veneer and crown failure.',
                  'Attend 6-monthly check-ups and professional cleaning. Your dentist will polish veneers and monitor bonding for wear.',
                  'Avoid smoking — it stains both natural teeth and restorations, undoing whitening results within months.',
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
                {/* Subtle diagonal pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 1px, transparent 1px, transparent 40px)',
                  }}
                />
              </div>
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Cosmetic Consultation</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    You Deserve to Love<br />Your Smile.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a free cosmetic smile consultation at any Dharma Dental branch. We will photograph your smile, discuss your goals, and show you a digital preview of what&apos;s possible — all at no cost and no obligation.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free Digital Preview', 'No Obligation', 'Specialist Consultation', 'EMI Available'].map((item) => (
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
              Cosmetic Dentistry Questions<br />
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
                Contact our cosmetic team
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
              <p className="text-slate-500 text-sm mt-1">Complete dental care for a healthy, beautiful smile.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Clear Aligners',       sub: 'Orthodontics', href: '/treatments/clear-aligners',       icon: Sparkles },
              { name: 'Dental Implants',      sub: 'Restorative',  href: '/treatments/dental-implants',      icon: Award },
              { name: 'General Dentistry',    sub: 'Preventive',   href: '/treatments/general-dentistry',    icon: Stethoscope },
              { name: 'Orthodontics & Braces',sub: 'Orthodontics', href: '/treatments/orthodontics-braces',  icon: Layers },
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