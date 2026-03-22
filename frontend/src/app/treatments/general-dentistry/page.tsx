'use client';

// app/treatments/general-dentistry/page.tsx  (or pages/treatments/general-dentistry.tsx)
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ChevronRight,
  Phone,
  CalendarDays,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Smile,
  ClipboardList,
  Syringe,
  Wind,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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
    icon: ClipboardList,
    title: 'Comprehensive Dental Exam',
    desc: 'Thorough assessment of teeth, gums, bite, and jaw health using digital X-rays and intraoral cameras for accurate diagnosis.',
    highlights: ['Digital X-rays', 'Intraoral Camera', 'Bite Analysis', 'Oral Cancer Screening'],
  },
  {
    icon: Smile,
    title: 'Professional Teeth Cleaning',
    desc: 'Ultrasonic scaling and polishing to remove plaque, tartar, and surface stains that regular brushing cannot address.',
    highlights: ['Ultrasonic Scaling', 'Air Polishing', 'Fluoride Treatment', 'Gum Assessment'],
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Dentistry',
    desc: 'Proactive care including sealants, fluoride therapy, and custom mouthguards to protect teeth before problems start.',
    highlights: ['Fissure Sealants', 'Fluoride Therapy', 'Sports Guards', 'Night Guards'],
  },
  {
    icon: Syringe,
    title: 'Tooth-Coloured Fillings',
    desc: 'Mercury-free composite resin fillings that blend seamlessly with your natural tooth colour for a confident smile.',
    highlights: ['Composite Resin', 'Mercury-Free', 'Same-Day Restoration', 'Shade Matching'],
  },
  {
    icon: Wind,
    title: 'Gum Disease Treatment',
    desc: 'Early to advanced periodontal care including deep cleaning, root planing, and maintenance programmes.',
    highlights: ['Deep Scaling', 'Root Planing', 'Antibiotic Therapy', 'Maintenance Plans'],
  },
  {
    icon: Microscope,
    title: 'Oral Health Consultations',
    desc: 'Personalised advice on diet, habits, and home-care routines to maintain long-term oral health and disease prevention.',
    highlights: ['Diet Counselling', 'Oral Hygiene Tips', 'Habit Correction', 'Health Reports'],
  },
];

const PROCESS = [
  { step: '01', title: 'Book Your Visit', desc: 'Schedule online or call us. We confirm your slot within minutes.' },
  { step: '02', title: 'Comprehensive Exam', desc: 'Digital X-rays, photos, and a full oral health assessment by our specialist.' },
  { step: '03', title: 'Personalised Plan', desc: 'Receive a clear, itemised treatment plan with costs — no surprises.' },
  { step: '04', title: 'Comfortable Treatment', desc: 'Pain-free procedures with sedation options available on request.' },
  { step: '05', title: 'Aftercare & Follow-Up', desc: 'Detailed home-care instructions and scheduled recall visits for lasting results.' },
];

const FAQS = [
  {
    q: 'How often should I visit for a general dental check-up?',
    a: 'We recommend a professional check-up and cleaning every 6 months for most patients. If you have gum disease or a higher cavity risk, we may suggest visits every 3–4 months.',
  },
  {
    q: 'Are dental X-rays safe?',
    a: 'Yes. Our digital X-rays emit up to 90% less radiation than traditional film X-rays. We also use protective lead aprons and follow ALARA (As Low As Reasonably Achievable) principles.',
  },
  {
    q: 'What is the difference between scaling and polishing?',
    a: 'Scaling removes hardened tartar (calculus) using ultrasonic instruments, while polishing removes surface stains and leaves a smooth finish that makes it harder for plaque to re-attach.',
  },
  {
    q: 'Do tooth-coloured fillings last as long as silver amalgam?',
    a: 'Modern composite resin fillings are highly durable and can last 10–15 years with good oral hygiene. They also bond directly to the tooth, preserving more healthy tooth structure.',
  },
  {
    q: 'Is gum disease treatment painful?',
    a: 'We administer local anaesthesia before deep cleaning, so you should feel minimal discomfort during treatment. Some sensitivity and soreness for a day or two after is normal.',
  },
];

const STATS = [
  { value: '22+', label: 'Years of Excellence' },
  { value: '2L+', label: 'Happy Patients' },
  { value: '15+', label: 'Clinic Locations' },
  { value: '4.9★', label: 'Patient Rating' },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${open ? 'border-yellow-400/40 bg-yellow-400/5' : 'border-white/8 bg-white/3'}`}>
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

export default function GeneralDentistryPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-yellow-400/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
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
              <span className="text-yellow-400">General Dentistry</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Stethoscope size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">General Dentistry</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Your Smile Starts<br />
                  <span className="text-yellow-400">With Good Basics.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Comprehensive general dental care for the whole family — from routine check-ups and professional cleaning to fillings, gum treatment, and preventive care. Painless. Personalised. Proven.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                  >
                    <CalendarDays size={15} /> Book Appointment
                  </Link>
                  <a
                    href="tel:+919169269369"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </FadeUp>

              {/* Trust badges */}
              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-8">
                  {['Pain-Free Care', 'Same-Day Appointments', 'Family Friendly', 'Digital X-Rays'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                      {badge}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — visual card */}
            <FadeUp delay={0.2} className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 aspect-[4/3] lg:aspect-auto lg:h-[420px]">
                {/* Placeholder image — replace src with actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/10" />
                <Image
                  src="/treatments/general/general-dentistry-hero.webp"
                  alt="General Dentistry at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Trusted by 2 Lakh+ Patients</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30">
                      <Stethoscope size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30">
                <p className="font-black text-lg leading-none">22+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider leading-none mt-0.5">Yrs Exp</p>
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

      {/* ── INTRO / WHY ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Why General Dentistry Matters</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Prevention Is Always<br />
                  <span className="text-yellow-400">Better Than Cure.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Most serious dental problems — advanced gum disease, deep decay, tooth loss — are entirely preventable with regular professional care. A twice-yearly visit to Dharma Dental gives our specialists the chance to catch issues early, when treatment is simpler, faster, and more affordable.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our general dentistry service is the foundation of every patient relationship at Dharma Dental. Whether you are visiting us for the first time or have been with us for years, you receive the same thorough, personalised attention every single appointment.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Certified BDS / MDS Doctors',
                    'Digital Intraoral Cameras',
                    'Sterilised Equipment Every Use',
                    'Transparent Treatment Costs',
                    'All Ages Welcome',
                    'Flexible Appointment Times',
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
                  { icon: ShieldCheck, label: 'Preventive Focus', sub: 'Stop problems before they start' },
                  { icon: Microscope, label: 'Advanced Diagnostics', sub: 'Digital X-rays & HD cameras' },
                  { icon: Smile, label: 'Pain-Free Promise', sub: 'Gentle techniques, local anaesthesia' },
                  { icon: ClipboardList, label: 'Detailed Reports', sub: 'Full records given after each visit' },
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
              Everything Your Smile Needs,<br />
              <span className="text-yellow-400">Under One Roof.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              From routine maintenance to more involved restorative care, our general dentistry team handles it all with precision and care.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.08}>
                <div className="group h-full bg-slate-900/60 border border-white/8 rounded-3xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/15 flex items-center justify-center mb-4 group-hover:bg-yellow-400/25 transition-colors">
                    <service.icon size={22} className="text-yellow-400" />
                  </div>
                  <h3 className="text-white font-black text-base mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">The Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              What to Expect at<br />
              <span className="text-yellow-400">Your Appointment.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Connector line (desktop) */}
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

      {/* ── CTA BANNER ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-300 p-10 lg:p-14">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
              </div>
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Free Consultation</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    Ready for Your Best<br />Smile Yet?
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a no-obligation consultation at any Dharma Dental branch. Our specialists will assess your oral health and walk you through your personalised plan.
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
              Questions About<br />
              <span className="text-yellow-400">General Dentistry.</span>
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Still unsure? Here are answers to the questions patients ask us most often.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Have a different question?{' '}
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
              <p className="text-slate-500 text-sm mt-1">We offer a full range of specialist dental care.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Teeth Whitening', sub: 'Cosmetic', href: '/treatments/teeth-whitening', icon: Smile },
              { name: 'Dental Implants', sub: 'Restorative', href: '/treatments/dental-implants', icon: ShieldCheck },
              { name: 'Root Canal Therapy', sub: 'Endodontics', href: '/treatments/root-canal', icon: Syringe },
              { name: 'Invisalign / Braces', sub: 'Orthodontics', href: '/treatments/orthodontics', icon: Wind },
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