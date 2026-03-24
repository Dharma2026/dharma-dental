'use client';

// app/branches/hyderabad/page.tsx
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
  Mail,
  Navigation,
  Car,
  Train,
  Bus,
  Stethoscope,
  Activity,
  Award,
  Layers,
  Baby,
  Heart,
  Zap,
  Users,
  Building2,
  Wifi,
  CreditCard,
  Accessibility,
  Camera,
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

const BRANCHES = [
  {
    id: 'vanasthalipuram',
    name: 'Vanasthalipuram',
    fullName: 'Dharma Dental — Vanasthalipuram',
    address: 'Vanasthalipuram, Hyderabad, Telangana',
    phone: '+91 923 695 2369',
    email: 'hydndc@gmail.com',
    hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
    sunday: 'Closed',
    mapsUrl: 'https://maps.google.com/?q=Vanasthalipuram+Hyderabad',
    landmark: 'Near Vanasthalipuram Bus Stop',
    parking: 'Free street parking available',
    color: 'from-yellow-400/20 to-yellow-400/5',
    border: 'border-yellow-400/30',
    accent: 'text-yellow-400',
    dot: 'bg-yellow-400',
    features: ['Ground Floor Access', 'Air-Conditioned', 'Digital X-Ray Suite', 'Sterilisation Room'],
    established: '2008',
  },
  {
    id: 'kondapur',
    name: 'Kondapur',
    fullName: 'Dharma Dental — Kondapur',
    address: 'Kondapur, Hyderabad, Telangana',
    phone: '+91 923 695 2370',
    email: 'kondapur@dharmadentalcare.com',
    hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
    sunday: 'Closed',
    mapsUrl: 'https://maps.google.com/?q=Kondapur+Hyderabad',
    landmark: 'Near Kondapur Junction, HITEC City Area',
    parking: 'Dedicated clinic parking',
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/30',
    accent: 'text-blue-400',
    dot: 'bg-blue-400',
    features: ['Dedicated Parking', 'Air-Conditioned', '3D CBCT Scanner', 'VIP Consultation Room'],
    established: '2015',
  },
];

const TREATMENTS = [
  { icon: Stethoscope, name: 'General Dentistry',       href: '/treatments/general-dentistry' },
  { icon: Baby,        name: 'Paediatric Dentistry',    href: '/treatments/pediatric-dentistry' },
  { icon: Activity,    name: 'Root Canal Treatment',    href: '/treatments/root-canal-treatment' },
  { icon: Award,       name: 'Dental Implants',         href: '/treatments/dental-implants' },
  { icon: Layers,      name: 'Orthodontics & Braces',   href: '/treatments/orthodontics-braces' },
  { icon: Sparkles,    name: 'Clear Aligners',          href: '/treatments/clear-aligners' },
  { icon: Heart,       name: 'Cosmetic Dentistry',      href: '/treatments/cosmetic-dentistry' },
  { icon: Zap,         name: 'Teeth Whitening',         href: '/treatments/teeth-whitening' },
];

const AMENITIES = [
  { icon: Wifi,           label: 'Free Wi-Fi',              desc: 'Stay connected while you wait' },
  { icon: CreditCard,     label: 'All Payment Methods',     desc: 'Cash, cards, UPI, EMI accepted' },
  { icon: Accessibility,  label: 'Accessible Facilities',   desc: 'Wheelchair-friendly access' },
  { icon: Camera,         label: 'Digital Records',         desc: 'All X-rays & records stored digitally' },
  { icon: Users,          label: 'Family-Friendly',         desc: 'Comfortable waiting area for families' },
  { icon: Building2,      label: 'Modern Infrastructure',   desc: 'State-of-the-art dental equipment' },
];

const NEARBY_AREAS = {
  vanasthalipuram: [
    'LB Nagar', 'Saroornagar', 'Dilsukhnagar', 'Nagole',
    'Hayathnagar', 'Gaddiannaram', 'Champapet', 'Kothapet',
  ],
  kondapur: [
    'HITEC City', 'Gachibowli', 'Madhapur', 'Jubilee Hills',
    'Banjara Hills', 'Manikonda', 'Nanakramguda', 'Financial District',
  ],
};

const FAQS = [
  {
    q: 'Do I need to book an appointment at the Hyderabad clinics?',
    a: 'We strongly recommend booking an appointment to minimise your waiting time. However, we do accept walk-in patients for emergency dental care. Call the specific branch or book online — we typically confirm slots within minutes.',
  },
  {
    q: 'Are the same treatments available at both Hyderabad branches?',
    a: 'Yes. Both Vanasthalipuram and Kondapur branches offer the full range of Dharma Dental treatments — from general dentistry and root canals to dental implants, orthodontics, and cosmetic procedures. Both branches have digital X-ray facilities and specialist doctors.',
  },
  {
    q: 'Do you offer emergency dental care in Hyderabad?',
    a: 'Yes. Both Hyderabad branches accept dental emergencies including severe toothache, broken teeth, lost fillings, and dental abscesses. Call ahead so we can prepare for your arrival. Walk-ins for emergencies are always welcome.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods — cash, debit and credit cards, net banking, UPI (PhonePe, GPay, Paytm), and no-cost EMI through partner banks. Ask our front desk team for current EMI options.',
  },
  {
    q: 'Are the doctors at the Hyderabad clinics the same as other branches?',
    a: 'Dharma Dental maintains the same clinical standards, protocols, and patient experience across all branches. Specialist doctors are posted at each branch, and complex cases may be coordinated with specialists across locations as required.',
  },
  {
    q: 'Is there parking available at the Hyderabad clinics?',
    a: 'Kondapur has dedicated clinic parking. Vanasthalipuram has free street parking available nearby. Both clinics are also accessible by auto-rickshaw and cab.',
  },
];

const STATS = [
  { value: '22+',  label: 'Years in Hyderabad' },
  { value: '2',    label: 'Hyderabad Branches' },
  { value: '50k+', label: 'Hyderabad Patients' },
  { value: '4.9★', label: 'Google Rating' },
];

const TEAM_HIGHLIGHTS = [
  { icon: Award,       title: 'BDS & MDS Qualified',    desc: 'All dentists hold recognised degrees from accredited dental colleges.' },
  { icon: ShieldCheck, title: 'Continuous Training',    desc: 'Regular upskilling on latest techniques, materials, and equipment.' },
  { icon: Heart,       title: 'Patient-First Approach', desc: 'Every treatment decision prioritises your long-term health and comfort.' },
  { icon: Users,       title: 'Specialist On-Site',     desc: 'Endodontists, orthodontists, and implant specialists available at both branches.' },
];

const TRANSPORT = {
  vanasthalipuram: [
    { mode: 'Bus', icon: Bus,   detail: 'Multiple TSRTC routes stop at Vanasthalipuram Bus Stand — 2 min walk' },
    { mode: 'Auto / Cab', icon: Car, detail: 'Easily accessible by Ola/Uber from LB Nagar Metro (10 min)' },
    { mode: 'Metro', icon: Train, detail: 'Nearest metro: LB Nagar (Blue Line) — cab/auto recommended for last mile' },
  ],
  kondapur: [
    { mode: 'Metro', icon: Train, detail: 'Nearest metro: Raidurg (Orange Line, Hyderabad Metro) — 5 min cab/auto' },
    { mode: 'Bus', icon: Bus,    detail: 'TSRTC routes connect Kondapur to most parts of Hyderabad' },
    { mode: 'Cab', icon: Car,    detail: 'Well-connected by Ola/Uber — Gachibowli, Madhapur within 10 minutes' },
  ],
};

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

// ─── Branch Card ─────────────────────────────────────────────────────────────

function BranchCard({ branch, areaKey }: { branch: typeof BRANCHES[0]; areaKey: 'vanasthalipuram' | 'kondapur' }) {
  return (
    <div className={`bg-gradient-to-b ${branch.color} border ${branch.border} rounded-3xl overflow-hidden`}>
      {/* Branch image placeholder */}
      <div className="relative h-52 bg-slate-800/60 overflow-hidden">
        <Image
          src={`/images/branch-${branch.id}.jpg`}
          alt={branch.fullName}
          fill
          className="object-cover opacity-70"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent`} />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Building2 size={120} className="text-white" />
        </div>
        {/* Est badge */}
        <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2">
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Est.</p>
          <p className={`font-black text-sm ${branch.accent}`}>{branch.established}</p>
        </div>
        {/* Branch name overlay */}
        <div className="absolute bottom-4 left-5">
          <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-sm border ${branch.border}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${branch.dot} animate-pulse`} />
            <span className={`text-[10px] font-black uppercase tracking-widest ${branch.accent}`}>{branch.name}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <div>
          <h3 className="text-white font-black text-lg tracking-tight">{branch.fullName}</h3>
          <p className="text-slate-400 text-sm mt-1">{branch.landmark}</p>
        </div>

        {/* Key info */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin size={14} className={`${branch.accent} shrink-0 mt-0.5`} />
            <span className="text-slate-300 text-sm">{branch.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={14} className={`${branch.accent} shrink-0`} />
            <div>
              <span className="text-slate-300 text-sm">{branch.hours}</span>
              <span className="text-slate-500 text-xs ml-2">· Sunday {branch.sunday}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={14} className={`${branch.accent} shrink-0`} />
            <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className={`text-sm font-semibold hover:${branch.accent} transition-colors text-slate-300`}>
              {branch.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={14} className={`${branch.accent} shrink-0`} />
            <a href={`mailto:${branch.email}`} className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
              {branch.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Car size={14} className={`${branch.accent} shrink-0`} />
            <span className="text-slate-400 text-sm">{branch.parking}</span>
          </div>
        </div>

        {/* Branch features */}
        <div className="flex flex-wrap gap-2">
          {branch.features.map((f) => (
            <span key={f} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-400`}>
              {f}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-white/8 border border-white/12 rounded-xl text-white text-xs font-black uppercase tracking-wider hover:bg-white/15 transition-colors"
          >
            <Navigation size={13} /> Directions
          </a>
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20`}
          >
            <CalendarDays size={13} /> Book Here
          </Link>
        </div>
      </div>

      {/* Transport section */}
      <div className={`border-t ${branch.border} px-6 py-5`}>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${branch.accent}`}>How to Reach</p>
        <div className="space-y-2">
          {TRANSPORT[areaKey].map((t) => (
            <div key={t.mode} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <t.icon size={13} className="text-slate-400" />
              </div>
              <div>
                <span className="text-white text-xs font-bold">{t.mode}: </span>
                <span className="text-slate-400 text-xs">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby areas */}
      <div className={`border-t ${branch.border} px-6 py-5`}>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${branch.accent}`}>Serving Nearby Areas</p>
        <div className="flex flex-wrap gap-2">
          {NEARBY_AREAS[areaKey].map((area) => (
            <span key={area} className="text-[11px] text-slate-500 bg-white/3 border border-white/8 px-2.5 py-1 rounded-full">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HyderabadPage() {
  const [activeTab, setActiveTab] = useState<'vanasthalipuram' | 'kondapur'>('vanasthalipuram');

  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-yellow-400/8 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/7 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
          {/* City skyline–inspired horizontal lines */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 40px)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/branches" className="hover:text-yellow-400 transition-colors">Branches</Link>
              <ChevronRight size={12} />
              <span className="text-yellow-400">Hyderabad</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <MapPin size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Hyderabad — 2 Branches</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Dharma Dental<br />
                  <span className="text-yellow-400">Hyderabad.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  World-class dental care at two convenient Hyderabad locations — Vanasthalipuram and Kondapur. Same exceptional standards, same specialist team, whichever branch is closest to you.
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
                    href="tel:+919236952369"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-8">
                  {['Open Mon–Sat', '9 AM – 8 PM', 'Emergency Care', 'All Specialists On-Site'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-yellow-400 shrink-0" />
                      {badge}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — map + stats card */}
            <FadeUp delay={0.2} className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/8" />

                {/* Hyderabad city visual */}
                <Image
                  src="/images/hyderabad-city.jpg"
                  alt="Hyderabad City — Dharma Dental"
                  fill
                  className="object-cover opacity-40"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />

                {/* Branch pins */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="text-center">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">2 Clinics in Hyderabad</p>
                  </div>
                  {BRANCHES.map((b) => (
                    <motion.div
                      key={b.id}
                      whileHover={{ scale: 1.03 }}
                      className={`w-full bg-slate-950/70 backdrop-blur-sm border ${b.border} rounded-2xl px-5 py-4 flex items-center gap-4`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${b.dot} flex items-center justify-center shadow-lg shrink-0`}
                        style={{ background: `${b.dot.replace('bg-', '').replace('-400', '')}` }}>
                        <MapPin size={18} className="text-black" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-black text-sm">{b.name}</p>
                        <p className="text-slate-400 text-xs truncate">{b.landmark}</p>
                      </div>
                      <a
                        href={b.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[10px] font-black uppercase tracking-wider ${b.accent} hover:opacity-80 transition-opacity shrink-0`}
                      >
                        Get Directions →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-lg leading-none">50k+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider leading-none mt-0.5">Patients</p>
              </div>

              {/* Floating rating */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white font-black text-sm">4.9</p>
                <p className="text-slate-400 text-[10px]">Google</p>
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

      {/* ── BRANCH CARDS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Our Locations</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Two Clinics Serving<br />
              <span className="text-yellow-400">All of Hyderabad.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Whether you&apos;re in the eastern suburbs or the tech corridor — Dharma Dental Hyderabad is close by, with the same specialist team and clinical standards at both locations.
            </p>
          </FadeUp>

          {/* Mobile tab switcher */}
          <div className="flex lg:hidden gap-3 mb-8 bg-white/5 rounded-2xl p-1.5">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveTab(b.id as 'vanasthalipuram' | 'kondapur')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === b.id
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Desktop — side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            {BRANCHES.map((branch) => (
              <FadeUp key={branch.id} delay={branch.id === 'vanasthalipuram' ? 0 : 0.1}>
                <BranchCard branch={branch} areaKey={branch.id as 'vanasthalipuram' | 'kondapur'} />
              </FadeUp>
            ))}
          </div>

          {/* Mobile — tabbed */}
          <div className="lg:hidden">
            {BRANCHES.filter((b) => b.id === activeTab).map((branch) => (
              <BranchCard key={branch.id} branch={branch} areaKey={branch.id as 'vanasthalipuram' | 'kondapur'} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED MAPS ── */}
      <section className="py-8 lg:py-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
              Find Us on the <span className="text-yellow-400">Map</span>
            </h2>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-6">
            {BRANCHES.map((branch, i) => (
              <FadeUp key={branch.id} delay={i * 0.1}>
                <div className={`rounded-3xl overflow-hidden border ${branch.border}`}>
                  <div className={`px-5 py-3.5 bg-gradient-to-r ${branch.color} border-b ${branch.border} flex items-center gap-3`}>
                    <div className={`w-2 h-2 rounded-full ${branch.dot} animate-pulse`} />
                    <p className="text-white font-black text-sm">{branch.fullName}</p>
                  </div>
                  {/* Google Maps embed placeholder */}
                  <div className="relative bg-slate-900 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className={`${branch.accent} mx-auto mb-3`} />
                      <p className="text-white font-bold text-sm mb-1">{branch.name}, Hyderabad</p>
                      <p className="text-slate-500 text-xs mb-4">{branch.address}</p>
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors`}
                      >
                        <Navigation size={12} /> Open in Google Maps
                      </a>
                    </div>
                    {/* Replace the div above with a real iframe for production: */}
                    {/* 
                    <iframe
                      src="https://www.google.com/maps/embed?pb=PASTE_YOUR_EMBED_URL_HERE"
                      width="100%"
                      height="100%"
                      style={{ border: 0, position: 'absolute', inset: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    */}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TREATMENTS AVAILABLE ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Treatments Available</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Every Treatment.<br />
              <span className="text-yellow-400">Both Locations.</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mt-4 leading-relaxed">
              The full Dharma Dental treatment menu is available at both Hyderabad branches.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TREATMENTS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.07}>
                <Link
                  href={t.href}
                  className="group flex items-center gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0 group-hover:bg-yellow-400/25 transition-colors">
                    <t.icon size={18} className="text-yellow-400" />
                  </div>
                  <p className="text-white font-bold text-sm leading-snug flex-1">{t.name}</p>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-400 transition-colors shrink-0" />
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="text-center mt-8">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-yellow-400 text-sm font-bold hover:gap-4 transition-all"
            >
              View All Treatments <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Clinic Amenities</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              A Comfortable Experience<br />
              <span className="text-yellow-400">From Arrival to Farewell.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AMENITIES.map((a, i) => (
              <FadeUp key={a.label} delay={i * 0.08}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 flex gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-yellow-400/15 flex items-center justify-center group-hover:bg-yellow-400/25 transition-colors shrink-0">
                    <a.icon size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm mb-1">{a.label}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM HIGHLIGHTS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Our Hyderabad Team</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Specialists Who Put<br />
                  <span className="text-yellow-400">Your Health First.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Both Hyderabad branches are staffed by qualified, experienced dental professionals — BDS and MDS-trained doctors with specialist expertise across all treatment areas. Our team follows the same protocols and clinical standards that have made Dharma Dental the most trusted dental group in the region.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We believe dentistry should be comfortable, transparent, and patient-led. Every doctor at our Hyderabad clinics takes the time to explain your diagnosis, discuss your options, and obtain your fully informed consent before any treatment begins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20 mt-2"
                >
                  <CalendarDays size={15} /> Meet the Team — Book Now
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {TEAM_HIGHLIGHTS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-yellow-400" />
                    </div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OPENING HOURS DETAIL ── */}
      <section className="py-16 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
              Opening Hours — <span className="text-yellow-400">Both Branches</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {BRANCHES.map((branch) => (
                <div key={branch.id} className={`bg-slate-900/60 border ${branch.border} rounded-2xl overflow-hidden`}>
                  <div className={`px-6 py-4 bg-gradient-to-r ${branch.color} border-b ${branch.border}`}>
                    <p className={`font-black text-sm ${branch.accent}`}>{branch.name}</p>
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      { day: 'Monday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Tuesday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Wednesday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Thursday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Friday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Saturday', hours: '9:00 AM – 8:00 PM', open: true },
                      { day: 'Sunday', hours: 'Closed', open: false },
                    ].map((row) => (
                      <div key={row.day} className="flex items-center justify-between px-6 py-3">
                        <span className={`text-sm ${row.open ? 'text-slate-300' : 'text-slate-600'}`}>{row.day}</span>
                        <span className={`text-sm font-semibold ${row.open ? 'text-white' : 'text-slate-600'}`}>{row.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Emergency note */}
          <FadeUp delay={0.2} className="mt-6">
            <div className="flex items-start gap-3 p-4 bg-yellow-400/8 border border-yellow-400/20 rounded-2xl">
              <Zap size={16} className="text-yellow-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm">
                <span className="text-yellow-400 font-black">Dental Emergency?</span>{' '}
                Call your nearest branch directly. We prioritise emergency patients and will do our best to see you the same day.
                {' '}<a href="tel:+919236952369" className="text-yellow-400 font-semibold hover:underline">+91 923 695 2369</a>
              </p>
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
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Hyderabad — 2 Locations</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    Your Nearest Dharma Dental<br />Is Closer Than You Think.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a free consultation at your nearest Hyderabad branch — Vanasthalipuram or Kondapur. Same-day appointments often available for new patients.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free Consultation', 'Same-Day Slots', 'All Specialists', 'EMI Available'].map((item) => (
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
                    href="tel:+919236952369"
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
              Questions About Our<br />
              <span className="text-yellow-400">Hyderabad Clinics.</span>
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
                Contact us
              </Link>
              {' '}or call{' '}
              <a href="tel:+919236952369" className="text-yellow-400 font-semibold hover:underline">
                +91 923 695 2369
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── OTHER BRANCHES ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="flex items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
                Other <span className="text-yellow-400">Branches</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1">Find a Dharma Dental clinic across South India.</p>
            </div>
            <Link href="/branches" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              All Branches <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { city: 'Sarjapur, Bengaluru',        href: '/branches/bengaluru/sarjapur',   icon: MapPin },
              { city: 'Whitefield, Bengaluru',       href: '/branches/bengaluru/whitefield', icon: MapPin },
              { city: 'Anantapur, Andhra Pradesh',   href: '/branches/anantapur',            icon: MapPin },
            ].map((b, i) => (
              <FadeUp key={b.city} delay={i * 0.08}>
                <Link
                  href={b.href}
                  className="group flex items-center gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0 group-hover:bg-yellow-400/25 transition-colors">
                    <MapPin size={18} className="text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">{b.city}</p>
                    <p className="text-slate-500 text-xs mt-0.5">Dharma Dental Branch</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-yellow-400 transition-colors shrink-0" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}