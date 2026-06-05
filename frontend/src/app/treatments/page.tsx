'use client';

// app/treatments/page.tsx
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
  MapPin,
  Clock,
  Sparkles,
  Activity,
  Award,
  Layers,
  Baby,
  Heart,
  Zap,
  Stethoscope,
  Search,
  Timer,
  Users,
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

const TREATMENTS = [
  {
    id: 'general-dentistry',
    href: '/treatments/general-dentistry',
    icon: Stethoscope,
    category: 'Preventive',
    title: 'General Dentistry',
    tagline: 'The Foundation of Every Healthy Smile.',
    desc: 'Comprehensive check-ups, professional cleaning, fillings, gum treatment, and preventive care for patients of all ages. The cornerstone of long-term oral health.',
    highlights: ['Dental Check-Ups', 'Teeth Cleaning', 'Tooth-Coloured Fillings', 'Gum Treatment', 'Preventive Care', 'Oral Cancer Screening'],
    duration: '30–60 min',
    sessions: '1–2 visits',
    suitable: 'All ages',
    color: 'from-emerald-400/20 via-emerald-400/5 to-transparent',
    border: 'border-emerald-400/25',
    accent: 'text-emerald-400',
    badgeBg: 'bg-emerald-400/10 border-emerald-400/20',
    badgeText: 'text-emerald-400',
    iconBg: 'bg-emerald-400/15',
    popular: false,
    image: '/treatments/general/general-dentistry-hero.webp',
  },
  {
    id: 'pediatric-dentistry',
    href: '/treatments/pediatric-dentistry',
    icon: Baby,
    category: 'Children',
    title: 'Paediatric Dentistry',
    tagline: 'Little Smiles Deserve Big Care.',
    desc: 'Gentle, fun, anxiety-free dental care designed exclusively for children from infancy to their teens — building healthy habits and happy dental experiences for life.',
    highlights: ['Infant & Toddler Care', 'Fissure Sealants', 'Fluoride Treatments', 'Paediatric Fillings', 'Habit Counselling', 'Orthodontic Monitoring'],
    duration: '30–45 min',
    sessions: 'Ongoing',
    suitable: 'Ages 0–16',
    color: 'from-blue-400/20 via-blue-400/5 to-transparent',
    border: 'border-blue-400/25',
    accent: 'text-blue-400',
    badgeBg: 'bg-blue-400/10 border-blue-400/20',
    badgeText: 'text-blue-400',
    iconBg: 'bg-blue-400/15',
    popular: false,
    image: '/treatments/pedistry/pediatric-dentistry-hero.webp',
  },
  {
    id: 'root-canal',
    href: '/treatments/root-canal',
    icon: Activity,
    category: 'Restorative',
    title: 'Root Canal Treatment',
    tagline: 'Save Your Tooth. End the Pain.',
    desc: 'Modern, pain-free endodontic therapy that eliminates infection, relieves toothache, and saves your natural tooth — often completed in a single comfortable visit.',
    highlights: ['Rotary NiTi Instruments', 'Single-Visit Option', 'Digital Apex Locator', 'Rubber Dam Isolation', 'Antimicrobial Irrigation', 'Crown Restoration'],
    duration: '60–90 min',
    sessions: '1–2 visits',
    suitable: 'Adults & teens',
    color: 'from-rose-400/20 via-rose-400/5 to-transparent',
    border: 'border-rose-400/25',
    accent: 'text-rose-400',
    badgeBg: 'bg-rose-400/10 border-rose-400/20',
    badgeText: 'text-rose-400',
    iconBg: 'bg-rose-400/15',
    popular: false,
    image: '/treatments/rootcanal/root-canal-hero.webp',
  },
  {
    id: 'dental-implants',
    href: '/treatments/dental-implants',
    icon: Award,
    category: 'Restorative',
    title: 'Dental Implants',
    tagline: 'Replace Teeth That Last a Lifetime.',
    desc: 'The gold standard for replacing missing teeth — titanium implants that look, feel, and function exactly like natural teeth. 25,000+ successful implants placed.',
    highlights: ['Single Tooth Implants', 'All-on-4 / All-on-6', 'Implant Bridges', 'Immediate Loading', '3D CBCT Planning', 'Zirconia Crowns'],
    duration: '45–90 min',
    sessions: '3–5 months',
    suitable: 'Adults 18+',
    color: 'from-yellow-400/20 via-yellow-400/5 to-transparent',
    border: 'border-yellow-400/25',
    accent: 'text-yellow-400',
    badgeBg: 'bg-yellow-400/10 border-yellow-400/20',
    badgeText: 'text-yellow-400',
    iconBg: 'bg-yellow-400/15',
    popular: true,
    image: '/treatments/implants/dental-implants-hero.webp',
  },
  {
    id: 'orthodontics-and-braces',
    href: '/treatments/orthodontics-and-braces',
    icon: Layers,
    category: 'Orthodontics',
    title: 'Orthodontics & Braces',
    tagline: 'Straighten Your Smile. Transform Your Life.',
    desc: 'Full spectrum orthodontic care for children, teens, and adults — metal braces, ceramic braces, self-ligating systems, and Phase 1 early treatment.',
    highlights: ['Metal Braces', 'Ceramic Braces', 'Self-Ligating Braces', 'Phase 1 Treatment', 'Space Maintainers', 'Custom Retainers'],
    duration: '30–90 min',
    sessions: '12–24 months',
    suitable: 'All ages',
    color: 'from-purple-400/20 via-purple-400/5 to-transparent',
    border: 'border-purple-400/25',
    accent: 'text-purple-400',
    badgeBg: 'bg-purple-400/10 border-purple-400/20',
    badgeText: 'text-purple-400',
    iconBg: 'bg-purple-400/15',
    popular: false,
    image: '/treatments/orthodontics/orthodontics-hero.webp',
  },
  {
    id: 'clear-aligners',
    href: '/treatments/clear-aligners',
    icon: Sparkles,
    category: 'Orthodontics',
    title: 'Clear Aligners',
    tagline: 'Straight Teeth. Zero Compromise.',
    desc: 'Virtually invisible, removable clear aligners that straighten teeth without brackets or wires. See your predicted result digitally before treatment even begins.',
    highlights: ['Nearly Invisible', 'Removable Trays', 'No Diet Restrictions', 'Digital Smile Preview', 'Fewer Clinic Visits', 'Refinements Included'],
    duration: '30–60 min',
    sessions: '3–18 months',
    suitable: 'Teens & adults',
    color: 'from-cyan-400/20 via-cyan-400/5 to-transparent',
    border: 'border-cyan-400/25',
    accent: 'text-cyan-400',
    badgeBg: 'bg-cyan-400/10 border-cyan-400/20',
    badgeText: 'text-cyan-400',
    iconBg: 'bg-cyan-400/15',
    popular: true,
    image: '/treatments/aligners/clear-aligners-hero.webp',
  },
  {
    id: 'cosmetic-dentistry',
    href: '/treatments/cosmetic-dentistry',
    icon: Heart,
    category: 'Cosmetic',
    title: 'Cosmetic Dentistry',
    tagline: 'Your Dream Smile, Artfully Created.',
    desc: 'World-class smile transformation combining clinical precision with genuine artistry — teeth whitening, porcelain veneers, composite bonding, gum contouring, and full smile makeovers.',
    highlights: ['Teeth Whitening', 'Porcelain Veneers', 'Composite Bonding', 'Smile Makeover', 'Gum Contouring', 'Digital Smile Design'],
    duration: '60–120 min',
    sessions: '1–4 visits',
    suitable: 'Adults',
    color: 'from-pink-400/20 via-pink-400/5 to-transparent',
    border: 'border-pink-400/25',
    accent: 'text-pink-400',
    badgeBg: 'bg-pink-400/10 border-pink-400/20',
    badgeText: 'text-pink-400',
    iconBg: 'bg-pink-400/15',
    popular: false,
    image: '/treatments/cosmetic/cosmetic-dentistry-hero.webp',
  },
];

const CATEGORIES = ['All', 'Preventive', 'Children', 'Restorative', 'Orthodontics', 'Cosmetic'];

const STATS = [
  { value: '7',    label: 'Treatment Categories' },
  { value: '22+',  label: 'Years Experience' },
  { value: '2L+',  label: 'Patients Treated' },
  { value: '4.9★', label: 'Patient Rating' },
];

const WHY_CHOOSE = [
  { icon: ShieldCheck, title: 'All Under One Roof',      desc: 'Every treatment from preventive to cosmetic, available at all 15+ branches.' },
  { icon: Users,       title: 'Specialist at Every Step', desc: 'BDS and MDS-qualified doctors with specialist expertise across all fields.' },
  { icon: Timer,       title: 'Transparent Costs',        desc: 'Full treatment cost estimates before you commit — no surprise bills.' },
  { icon: Heart,       title: 'Pain-Free Promise',        desc: 'Modern anaesthesia and gentle techniques make every visit comfortable.' },
];

// ─── Treatment Card ───────────────────────────────────────────────────────────

function TreatmentCard({ treatment, index }: { treatment: typeof TREATMENTS[0]; index: number }) {
  return (
    <FadeUp delay={index * 0.07}>
      <div className={`group relative h-full bg-slate-900/60 border ${treatment.border} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col`}
        style={{ background: `linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.8) 100%)` }}
      >
        {/* Colour accent top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${treatment.color.replace('from-', 'from-').replace('via-', 'via-').replace('to-transparent', 'to-transparent')}`}
          style={{ background: `linear-gradient(90deg, ${treatment.accent.replace('text-', '').replace('-400', '')} 0%, transparent 100%)` }}
        />

        {/* Popular badge */}
        {treatment.popular && (
          <div className="absolute top-5 right-5 z-10">
            <span className="px-2.5 py-1 bg-yellow-400 text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-yellow-400/30">
              Most Popular
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative h-44 overflow-hidden shrink-0">
          <div className={`absolute inset-0 bg-gradient-to-b ${treatment.color} opacity-60`} />
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
            <treatment.icon size={100} className="text-white" />
          </div>
          {/* Category badge */}
          <div className="absolute bottom-4 left-5">
            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${treatment.badgeBg} ${treatment.badgeText}`}>
              {treatment.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Icon + title */}
          <div className="flex items-start gap-4 mb-3">
            <div className={`w-11 h-11 rounded-2xl ${treatment.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <treatment.icon size={20} className={treatment.accent} />
            </div>
            <div>
              <h3 className="text-white font-black text-base leading-tight">{treatment.title}</h3>
              <p className={`text-xs font-semibold mt-0.5 ${treatment.accent} opacity-80`}>{treatment.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{treatment.desc}</p>

          {/* Key details row */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock size={11} className="shrink-0" />
              {treatment.duration}
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Timer size={11} className="shrink-0" />
              {treatment.sessions}
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Users size={11} className="shrink-0" />
              {treatment.suitable}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {treatment.highlights.slice(0, 4).map((h) => (
              <span key={h} className="px-2 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] text-slate-400 font-medium">
                {h}
              </span>
            ))}
            {treatment.highlights.length > 4 && (
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] text-slate-500 font-medium">
                +{treatment.highlights.length - 4} more
              </span>
            )}
          </div>

          {/* CTA */}
          <Link
            href={treatment.href}
            className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-200 group/btn ${
              treatment.popular
                ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20'
                : `bg-white/5 border ${treatment.border} text-white hover:bg-white/10`
            }`}
          >
            Learn More
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = TREATMENTS.filter((t) => {
    const matchCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchSearch = searchQuery === '' ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-yellow-400/8 rounded-full blur-[160px]" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
          {/* Dot matrix */}
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-yellow-400">Treatments</span>
            </nav>
          </FadeUp>

          <div className="max-w-3xl">
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                <Stethoscope size={12} className="text-yellow-400" />
                <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">All Treatments</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                Expert Care for<br />
                <span className="text-yellow-400">Every Dental Need.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                From your child&apos;s first check-up to a complete smile transformation — Dharma Dental offers every dental treatment under one roof, delivered by specialist doctors at 15+ branches across South India.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-xl shadow-yellow-400/20"
                >
                  <CalendarDays size={15} /> Book Free Consultation
                </Link>
                <a
                  href="tel:+919169269369"
                  className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone size={15} /> Call Now
                </a>
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

      {/* ── TREATMENTS GRID ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Filter + Search bar */}
          <FadeUp className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-72">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400/40 focus:ring-1 focus:ring-yellow-400/20 transition-all"
                />
              </div>
            </div>
          </FadeUp>

          {/* Results count */}
          {(activeCategory !== 'All' || searchQuery) && (
            <FadeUp className="mb-6">
              <p className="text-slate-500 text-sm">
                Showing <span className="text-white font-semibold">{filtered.length}</span> treatment{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && <span> in <span className="text-yellow-400 font-semibold">{activeCategory}</span></span>}
                {searchQuery && <span> matching &quot;<span className="text-yellow-400 font-semibold">{searchQuery}</span>&quot;</span>}
              </p>
            </FadeUp>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((treatment, i) => (
                <TreatmentCard key={treatment.id} treatment={treatment} index={i} />
              ))}
            </div>
          ) : (
            <FadeUp className="text-center py-20">
              <p className="text-slate-500 text-lg font-semibold mb-2">No treatments found</p>
              <p className="text-slate-600 text-sm mb-6">Try a different search term or category</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-5 py-2.5 bg-yellow-400 text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors"
              >
                Clear Filters
              </button>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── FULL TREATMENTS TABLE (Quick Reference) ── */}
      <section className="py-16 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Quick Reference</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">
              All Treatments at a <span className="text-yellow-400">Glance</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/8">
                    <th className="p-4 text-left text-slate-500 text-xs font-black uppercase tracking-widest">Treatment</th>
                    <th className="p-4 text-center border-l border-white/8 text-slate-500 text-xs font-black uppercase tracking-widest">Category</th>
                    <th className="p-4 text-center border-l border-white/8 text-slate-500 text-xs font-black uppercase tracking-widest">Duration</th>
                    <th className="p-4 text-center border-l border-white/8 text-slate-500 text-xs font-black uppercase tracking-widest">Suitable For</th>
                    <th className="p-4 text-center border-l border-white/8 text-slate-500 text-xs font-black uppercase tracking-widest">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {TREATMENTS.map((t, i) => (
                    <tr key={t.id} className={`border-b border-white/5 last:border-0 group hover:bg-white/[0.03] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${t.iconBg} flex items-center justify-center shrink-0`}>
                            <t.icon size={14} className={t.accent} />
                          </div>
                          <div>
                            <span className="text-white font-bold text-sm">{t.title}</span>
                            {t.popular && (
                              <span className="ml-2 text-[9px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-1.5 py-0.5 rounded-full">Popular</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-l border-white/5 text-center">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${t.badgeBg} ${t.badgeText}`}>{t.category}</span>
                      </td>
                      <td className="p-4 border-l border-white/5 text-center text-xs text-slate-400">{t.duration}</td>
                      <td className="p-4 border-l border-white/5 text-center text-xs text-slate-400">{t.suitable}</td>
                      <td className="p-4 border-l border-white/5 text-center">
                        <Link
                          href={t.href}
                          className={`inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider ${t.accent} hover:opacity-80 transition-opacity`}
                        >
                          View <ArrowRight size={11} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY DHARMA ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Why Dharma Dental</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              One Practice for<br />
              <span className="text-yellow-400">Every Dental Need.</span>
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.09}>
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
                    Not Sure Which Treatment<br />You Need?
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Book a free consultation at any of our 15+ branches. Our specialists will examine your teeth, discuss your concerns, and recommend the right treatment plan — no commitment required.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {['Free Assessment', 'Expert Guidance', 'Transparent Costs', 'No Obligation'].map((item) => (
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

      {/* ── LOCATIONS STRIP ── */}
      <section className="py-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0" />
                <span className="text-white font-bold text-sm">All treatments available at our branches:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                {['Anantapur', 'Vanasthalipuram, Hyderabad', 'Kondapur, Hyderabad', 'Whitefield, Bengaluru', 'Sarjapur, Bengaluru'].map((loc) => (
                  <Link
                    key={loc}
                    href="/branches"
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:border-yellow-400/30 hover:text-yellow-400 transition-colors"
                  >
                    {loc}
                  </Link>
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