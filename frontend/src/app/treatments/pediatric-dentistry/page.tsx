'use client';

// app/treatments/pediatric-dentistry/page.tsx
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
  Baby,
  Heart,
  Sparkles,
  Zap,
  BookOpen,
  Users,
  Stethoscope,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────

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
    icon: Baby,
    title: 'Infant & Toddler Oral Care',
    desc: 'Early dental visits from the first tooth. We guide parents on teething, thumb-sucking, bottle habits, and healthy diet for healthy baby teeth.',
    highlights: ['First Tooth Check', 'Teething Guidance', 'Bottle Decay Prevention', 'Parent Education'],
    age: '0 – 3 yrs',
  },
  {
    icon: Smile,
    title: 'Dental Check-Up & Cleaning',
    desc: 'Gentle, thorough exams and professional cleaning tailored to children. We use child-friendly tools and flavoured polishing paste to make it fun.',
    highlights: ['Gentle Scaling', 'Flavoured Polish', 'Digital X-Rays', 'Growth Monitoring'],
    age: '3+ yrs',
  },
  {
    icon: ShieldCheck,
    title: 'Pit & Fissure Sealants',
    desc: 'Protective coatings applied to the back teeth to seal deep grooves where bacteria hide — the #1 cavity prevention tool for school-age children.',
    highlights: ['Painless Procedure', 'Cavity Prevention', 'Lasts 5–10 Years', 'No Drilling'],
    age: '6 – 12 yrs',
  },
  {
    icon: Zap,
    title: 'Fluoride Treatments',
    desc: 'Professional fluoride varnish applied in minutes to strengthen enamel and dramatically reduce the risk of tooth decay.',
    highlights: ['Quick Application', 'Enamel Strengthening', 'Safe & Effective', 'Twice-Yearly'],
    age: '3+ yrs',
  },
  {
    icon: Sparkles,
    title: 'Paediatric Fillings',
    desc: 'Tooth-coloured composite fillings for milk and permanent teeth. We use topical numbing and gentle technique so children feel minimal discomfort.',
    highlights: ['Tooth-Coloured', 'Topical Numbing', 'Mercury-Free', 'Child-Friendly'],
    age: '3+ yrs',
  },
  {
    icon: BookOpen,
    title: 'Orthodontic Monitoring',
    desc: 'Early assessment of jaw growth, bite development, and tooth spacing. Timely intervention can simplify — or even eliminate — the need for braces later.',
    highlights: ['Growth Tracking', 'Early Intervention', 'Space Maintainers', 'Habit Correction'],
    age: '7+ yrs',
  },
  {
    icon: Heart,
    title: 'Pulp Therapy (Baby Root Canal)',
    desc: 'When decay reaches the nerve of a baby tooth, pulp therapy saves the tooth without extraction — preserving space for the adult tooth to come in correctly.',
    highlights: ['Tooth Preservation', 'Pain Relief', 'Space Maintenance', 'Stainless Steel Crowns'],
    age: '2 – 10 yrs',
  },
  {
    icon: Users,
    title: 'Habit Counselling',
    desc: 'Personalised guidance and gentle appliances to help children break harmful oral habits like thumb-sucking, tongue-thrusting, and mouth-breathing.',
    highlights: ['Thumb-Sucking', 'Tongue Thrust', 'Mouth Breathing', 'Myofunctional Tips'],
    age: '2 – 8 yrs',
  },
];

const MILESTONES = [
  {
    age: '6 Months',
    title: 'First Tooth Erupts',
    desc: "Begin wiping gums with a soft damp cloth. Schedule your baby's first dental visit.",
    color: 'from-yellow-400/20 to-yellow-400/5',
    border: 'border-yellow-400/30',
    dot: 'bg-yellow-400',
    textColor: 'text-yellow-400',
  },
  {
    age: '1 Year',
    title: 'First Dental Visit',
    desc: 'The American Academy of Pediatric Dentistry recommends a dental visit by the first birthday.',
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/30',
    dot: 'bg-blue-400',
    textColor: 'text-blue-400',
  },
  {
    age: '2 – 3 Years',
    title: 'Full Baby Teeth Set',
    desc: '20 primary teeth are in. Regular 6-monthly check-ups and fluoride treatments begin.',
    color: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/30',
    dot: 'bg-green-400',
    textColor: 'text-green-400',
  },
  {
    age: '6 – 7 Years',
    title: 'First Adult Molars',
    desc: 'Sealants applied to first permanent molars. Orthodontic assessment recommended.',
    color: 'from-purple-400/20 to-purple-400/5',
    border: 'border-purple-400/30',
    dot: 'bg-purple-400',
    textColor: 'text-purple-400',
  },
  {
    age: '12 – 13 Years',
    title: 'Full Adult Teeth',
    desc: 'All permanent teeth present except wisdom teeth. Final orthodontic planning if needed.',
    color: 'from-rose-400/20 to-rose-400/5',
    border: 'border-rose-400/30',
    dot: 'bg-rose-400',
    textColor: 'text-rose-400',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Welcome & Tour',
    desc: 'Your child explores the clinic, meets the team, and gets comfortable before anything starts.',
  },
  {
    step: '02',
    title: 'Fun Examination',
    desc: 'We use child-friendly language ("tooth counter", "tooth camera") to make the exam exciting.',
  },
  {
    step: '03',
    title: 'Gentle Cleaning',
    desc: 'Flavoured polishing paste, soft instruments, and lots of encouragement throughout.',
  },
  {
    step: '04',
    title: 'Parent Briefing',
    desc: 'We explain findings clearly to parents and provide a simple home-care plan.',
  },
  {
    step: '05',
    title: 'Reward & Recall',
    desc: 'Every child leaves with a sticker and a scheduled recall so they look forward to coming back.',
  },
];

const FAQS = [
  {
    q: 'When should my child have their first dental visit?',
    a: "We recommend bringing your child in within 6 months of their first tooth erupting, or by their first birthday — whichever comes first. Early visits establish a dental home and allow us to spot any concerns before they become problems.",
  },
  {
    q: 'Are dental X-rays safe for children?',
    a: 'Yes. We use digital X-rays which emit up to 90% less radiation than traditional film. We also use lead aprons and only take X-rays when clinically necessary — typically once every 12–24 months for a healthy child.',
  },
  {
    q: "Why treat baby teeth? They fall out anyway.",
    a: 'Baby teeth hold space for adult teeth and are essential for chewing, speaking, and jaw development. An untreated cavity in a baby tooth can cause pain, infection, and force early extraction — leading to crowding of adult teeth.',
  },
  {
    q: 'My child is nervous about the dentist. Can you help?',
    a: "Absolutely. Our paediatric team is trained in behaviour management techniques including Tell-Show-Do, positive reinforcement, and distraction. We go at your child's pace and never rush. For very anxious children we offer nitrous oxide (laughing gas) sedation.",
  },
  {
    q: "How can I prevent cavities in my child's teeth?",
    a: 'Brush twice daily with a fluoride toothpaste (rice-grain amount under 3 yrs, pea-sized from 3+), limit sugary snacks and drinks especially between meals, attend 6-monthly check-ups, and ask us about sealants and fluoride varnish at age 6.',
  },
  {
    q: 'At what age should orthodontic treatment be considered?',
    a: 'We begin monitoring jaw and bite development from age 7. Early (Phase 1) orthodontic treatment between ages 7–10 can guide jaw growth, create space, and reduce the complexity of braces in the teenage years.',
  },
];

const STATS = [
  { value: '22+', label: 'Years Experience' },
  { value: '2L+', label: 'Happy Patients' },
  { value: '15+', label: 'Branches' },
  { value: '4.9★', label: 'Parent Rating' },
];

const PARENT_TIPS = [
  'Start brushing as soon as the first tooth appears — use a soft-bristle infant toothbrush and a rice-grain amount of fluoride toothpaste.',
  'Avoid putting your baby to sleep with a bottle of milk or juice. The sugars pool around teeth overnight and cause bottle tooth decay.',
  'Limit sugary snacks and drinks to mealtimes only. Frequent snacking keeps acid levels high and increases cavity risk.',
  'Supervise brushing until age 7–8. Young children lack the fine motor skills for effective brushing on their own.',
  'Make dental visits positive by using encouraging language. Avoid words like "hurt", "needle", or "drill" before appointments.',
  "Ask us about fissure sealants when your child's first adult molars come in at around age 6 — it's the single most effective cavity prevention measure.",
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div
        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
          open ? 'border-yellow-400/40 bg-yellow-400/5' : 'border-white/8 bg-white/3'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        >
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

export default function PediatricDentistryPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-yellow-400/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-400/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
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
              <span className="text-yellow-400">Paediatric Dentistry</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Baby size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Paediatric Dentistry</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Little Smiles Deserve<br />
                  <span className="text-yellow-400">Big Care.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Gentle, fun, and fearless dental care designed exclusively for children from infancy to their teens. We build healthy habits and happy dental experiences that last a lifetime.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                  >
                    <CalendarDays size={15} /> Book for Your Child
                  </Link>
                  <a
                    href="tel:+919169269369"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={15} /> Call Us
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-8">
                  {['Child-Friendly Environment', 'Anxiety-Free Approach', 'All Ages 0–16', 'Laughing Gas Available'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                      {badge}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right */}
            <FadeUp delay={0.2} className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/10" />
                <Image
                  src="/treatments/pedistry/pediatric-dentistry-hero.webp"
                  alt="Paediatric Dentistry at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Baby size={180} className="text-yellow-400" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Trusted by Families Across Branches</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5 — Parent Reviews</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30 shrink-0">
                      <Baby size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30">
                <p className="font-black text-base leading-none">Ages</p>
                <p className="font-black text-lg leading-none">0–16</p>
              </div>

              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:block">
                <p className="text-yellow-400 font-black text-xl leading-none">😄</p>
                <p className="text-white font-bold text-xs mt-1">Anxiety Free</p>
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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Why Choose Dharma for Your Child</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  A Dental Experience<br />
                  <span className="text-yellow-400">Kids Actually Enjoy.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Dental anxiety in adulthood almost always begins with a bad childhood experience. Our entire paediatric programme is designed to prevent exactly that — creating positive associations with dental care from the very first visit.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our specialists use the Tell-Show-Do technique, child-friendly language, and distraction tools so children feel safe, informed, and in control throughout every appointment.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Specialist Paediatric Dentists',
                    'Tell-Show-Do Technique',
                    'Flavoured Polishing Paste',
                    'Nitrous Oxide Available',
                    'Sticker Reward System',
                    'Parent Always Welcome',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: 'Gentle by Design', sub: 'Every step planned for comfort' },
                  { icon: Baby, label: 'Age-Appropriate', sub: 'Different approach for each stage' },
                  { icon: ShieldCheck, label: 'Prevention First', sub: 'Sealants, fluoride & education' },
                  { icon: Stethoscope, label: 'Growth Monitoring', sub: 'Track jaw & bite development' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-yellow-400" />
                    </div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-snug">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Complete Care at<br />
              <span className="text-yellow-400">Every Age &amp; Stage.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              From your baby's first tooth to your teenager's final check-up before adulthood — we're with your child every step of the way.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.07}>
                <div className="group h-full bg-slate-900/60 border border-white/8 rounded-3xl p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-colors">
                      <service.icon size={20} className="text-yellow-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                      {service.age}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">{service.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((h) => (
                      <span key={h} className="px-2 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] text-slate-400 font-medium">
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

      {/* ── DENTAL MILESTONES TIMELINE ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Dental Milestones</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Your Child&apos;s Smile<br />
              <span className="text-yellow-400">Through the Years.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Understanding what to expect at each stage helps you stay ahead of dental problems and keep your child's smile on track.
            </p>
          </FadeUp>

          {/* Desktop timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[4.5rem] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="grid grid-cols-5 gap-6">
              {MILESTONES.map((m, i) => (
                <FadeUp key={m.age} delay={i * 0.1}>
                  <div className="relative pt-20">
                    <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${m.dot} ring-4 ring-slate-950 z-10`} />
                    <span className={`absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider whitespace-nowrap ${m.textColor}`}>
                      {m.age}
                    </span>
                    <div className={`bg-gradient-to-b ${m.color} border ${m.border} rounded-2xl p-4`}>
                      <p className="text-white font-black text-sm mb-1.5">{m.title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden space-y-4">
            {MILESTONES.map((m, i) => (
              <FadeUp key={m.age} delay={i * 0.08}>
                <div className={`flex gap-4 bg-gradient-to-r ${m.color} border ${m.border} rounded-2xl p-5`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${m.dot} shrink-0 mt-1.5`} />
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${m.textColor}`}>{m.age}</span>
                    <p className="text-white font-black text-sm mt-0.5 mb-1">{m.title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIRST VISIT PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">First Visit</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              What Happens at Your<br />
              <span className="text-yellow-400">Child&apos;s First Appointment.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p, i) => (
                <FadeUp key={p.step} delay={i * 0.1}>
                  <div className="text-center lg:text-left relative">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg shadow-yellow-400/20 relative z-10">
                      <span className="text-black font-black text-base">{p.step}</span>
                    </div>
                    <h3 className="text-white font-black text-sm mb-2">{p.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARENT TIPS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Sparkles size={17} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Parent Tips</p>
                  <p className="text-slate-500 text-xs">Simple habits for a lifetime of healthy smiles</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PARENT_TIPS.map((tip, i) => (
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
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Consultation</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    Give Your Child the Gift<br />of a Healthy Smile.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a friendly, no-pressure first visit at any Dharma Dental branch. Our team will make sure your child feels safe, happy, and excited to come back.
                  </p>
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
              Parent Questions,<br />
              <span className="text-yellow-400">Honestly Answered.</span>
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              We know you have questions. Here are the ones parents ask us most.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Have more questions?{' '}
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
              <p className="text-slate-500 text-sm mt-1">Comprehensive dental care for the whole family.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'General Dentistry', sub: 'Preventive', href: '/treatments/general-dentistry', icon: Stethoscope },
              { name: 'Orthodontics & Braces', sub: 'Orthodontics', href: '/treatments/orthodontics', icon: Smile },
              { name: 'Dental Implants', sub: 'Restorative', href: '/treatments/dental-implants', icon: ShieldCheck },
              { name: 'Teeth Whitening', sub: 'Cosmetic', href: '/treatments/teeth-whitening', icon: Sparkles },
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