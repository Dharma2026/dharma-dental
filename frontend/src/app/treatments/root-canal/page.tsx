'use client';

// app/treatments/root-canal-treatment/page.tsx
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
  AlertCircle,
  Microscope,
  Activity,
  Sparkles,
  ThumbsUp,
  Timer,
  Stethoscope,
  Baby,
  Heart,
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

const SYMPTOMS = [
  { icon: Zap,          label: 'Severe Toothache',         desc: 'Persistent or throbbing pain, especially when biting or chewing.' },
  { icon: Activity,     label: 'Prolonged Sensitivity',    desc: 'Lingering pain to hot or cold that stays long after the stimulus is removed.' },
  { icon: AlertCircle,  label: 'Swollen Gums',             desc: 'Tender, swollen, or darkened gum tissue near a tooth.' },
  { icon: Sparkles,     label: 'Tooth Discolouration',     desc: 'A tooth turning grey or dark, signalling nerve damage inside.' },
  { icon: Timer,        label: 'Prolonged Decay',          desc: 'Deep cavity that has reached the inner pulp of the tooth.' },
  { icon: AlertCircle,  label: 'Cracked or Chipped Tooth', desc: 'A fracture that exposes the pulp to bacteria and infection.' },
];

const PROCEDURE_STEPS = [
  {
    step: '01',
    title: 'Diagnosis & X-Ray',
    desc: 'Digital X-rays and a clinical exam confirm whether root canal treatment is needed. We assess the extent of infection and the shape of the root canals.',
    duration: '20 min',
  },
  {
    step: '02',
    title: 'Local Anaesthesia',
    desc: 'A comfortable injection numbs the area completely. Most patients report feeling no more discomfort than a routine filling.',
    duration: '5 min',
  },
  {
    step: '03',
    title: 'Access & Pulp Removal',
    desc: 'A small opening is made in the crown of the tooth to access and remove the infected pulp tissue, bacteria, and debris.',
    duration: '15 min',
  },
  {
    step: '04',
    title: 'Canal Shaping & Cleaning',
    desc: 'Rotary nickel-titanium instruments and antimicrobial irrigants clean and shape the canals to their full working length.',
    duration: '30–45 min',
  },
  {
    step: '05',
    title: 'Canal Filling (Obturation)',
    desc: 'The cleaned canals are sealed with gutta-percha and a biocompatible sealer, permanently closing off the space where bacteria lived.',
    duration: '20 min',
  },
  {
    step: '06',
    title: 'Crown Placement',
    desc: 'A dental crown is placed over the treated tooth to restore its full strength, appearance, and function for decades to come.',
    duration: '1–2 visits',
  },
];

const BENEFITS = [
  { icon: ShieldCheck, title: 'Saves Your Natural Tooth',   desc: 'Nothing functions as well as your own tooth. RCT preserves it rather than extracting.' },
  { icon: ThumbsUp,    title: 'Immediate Pain Relief',      desc: 'Removing the infected pulp eliminates the source of pain — often within 24 hours.' },
  { icon: Smile,       title: 'Restores Normal Function',   desc: 'After a crown, the tooth is fully restored for biting, chewing, and speaking.' },
  { icon: Timer,       title: 'Long-Lasting Results',       desc: 'A well-performed root canal with a crown can last a lifetime with good oral hygiene.' },
  { icon: Sparkles,    title: 'Prevents Spread of Infection', desc: 'Eliminates bacteria that would otherwise spread to surrounding teeth and jaw bone.' },
  { icon: Activity,    title: 'Cost-Effective Long Term',   desc: 'Saving a tooth is almost always more affordable than extraction followed by an implant.' },
];

const MYTHS = [
  {
    myth: 'Root canals are extremely painful.',
    truth: 'Modern root canal treatment is performed under local anaesthesia and is no more uncomfortable than having a filling placed. The pain you feel before treatment — from the infection — is far worse than the procedure itself.',
  },
  {
    myth: 'It is better to just extract the tooth.',
    truth: 'Keeping your natural tooth is almost always the better option. Extraction leads to bone loss, shifting teeth, and requires a costly implant or bridge to restore function.',
  },
  {
    myth: 'Root canals cause illness.',
    truth: 'This myth dates to flawed research from the 1920s. Decades of scientific evidence confirm that root canal treatment is safe and effective. Leaving an infected tooth untreated is the actual health risk.',
  },
  {
    myth: 'If the tooth does not hurt, it does not need treatment.',
    truth: 'A dead or dying nerve may stop sending pain signals even while infection spreads. Regular X-rays can detect problems invisible to the naked eye and to the patient.',
  },
  {
    myth: 'A root canal-treated tooth will need to be removed anyway.',
    truth: 'With proper restoration (typically a crown) and good oral hygiene, a root canal-treated tooth can last a lifetime — just like any other tooth.',
  },
];

const FAQS = [
  {
    q: 'How many appointments does root canal treatment take?',
    a: 'Most root canal treatments are completed in one or two appointments. Simple single-canal teeth (incisors, canines) are often done in a single visit. Multi-rooted molars or severely infected teeth may require two visits with a medicated dressing placed between sessions.',
  },
  {
    q: 'Will I feel pain during the procedure?',
    a: 'No. We administer local anaesthesia before beginning, ensuring the area is completely numb. You may feel pressure or vibration but should not feel pain. If you do, tell us immediately and we will apply more anaesthesia.',
  },
  {
    q: 'How long does recovery take?',
    a: 'Most patients return to normal activities the same day or the next day. Mild soreness around the treated area for 2–3 days is normal and managed with over-the-counter pain relief. Avoid chewing hard foods on the treated tooth until your crown is placed.',
  },
  {
    q: 'Is a crown always necessary after a root canal?',
    a: 'For back teeth (premolars and molars) that bear heavy chewing forces, a crown is almost always recommended to prevent the treated tooth from cracking. For front teeth, a crown may not always be required, but we will discuss the best option for your specific case.',
  },
  {
    q: 'What happens if I delay root canal treatment?',
    a: 'Without treatment, the infection spreads — into the surrounding bone (dental abscess), potentially into adjacent teeth, and in severe cases into the jaw, neck, or bloodstream. Delayed treatment can mean tooth loss and more complex, expensive care.',
  },
  {
    q: 'How successful is root canal treatment?',
    a: 'Clinical studies show root canal treatment has a success rate of over 95%. Treated teeth that are properly restored and maintained with good oral hygiene routinely last a lifetime.',
  },
];

const STATS = [
  { value: '95%+', label: 'Success Rate' },
  { value: '22+',  label: 'Years Experience' },
  { value: '2L+',  label: 'Patients Treated' },
  { value: '4.9★', label: 'Patient Rating' },
];

const AFTERCARE = [
  'Avoid eating until the numbness has fully worn off to prevent accidentally biting your cheek or tongue.',
  'Take any prescribed antibiotics for the full course even if symptoms improve — stopping early risks re-infection.',
  'Over-the-counter ibuprofen or paracetamol manages any post-treatment soreness effectively.',
  'Avoid chewing hard or sticky foods on the treated tooth until your permanent crown is fitted.',
  'Maintain regular brushing and flossing. Treated teeth can still develop new decay if oral hygiene is neglected.',
  'Attend your crown appointment promptly — a temporary filling is not a long-term solution and can crack.',
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

// ─── Myth vs Truth Item ───────────────────────────────────────────────────────

function MythItem({ myth, truth, index }: { myth: string; truth: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.08}>
      <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-rose-400/30 bg-rose-400/5' : 'border-white/8 bg-white/3'}`}>
        <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left">
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-0.5 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/20">
              Myth
            </span>
            <span className="text-white font-semibold text-sm leading-snug">{myth}</span>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 mt-1">
            <ChevronDown size={18} className={open ? 'text-yellow-400' : 'text-slate-500'} />
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 flex items-start gap-3">
            <span className="shrink-0 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 mt-0.5">
              Truth
            </span>
            <p className="text-slate-400 text-sm leading-relaxed">{truth}</p>
          </div>
        </motion.div>
      </div>
    </FadeUp>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RootCanalTreatmentPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-400/7 rounded-full blur-[130px]" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
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
              <span className="text-yellow-400">Root Canal Treatment</span>
            </nav>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <FadeUp delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
                  <Activity size={12} className="text-yellow-400" />
                  <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Root Canal Treatment</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] mb-6">
                  Save Your Tooth.<br />
                  <span className="text-yellow-400">End the Pain.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Modern root canal treatment at Dharma Dental is comfortable, precise, and highly effective. We eliminate infection, relieve pain, and save your natural tooth — often in a single visit.
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
                    <Phone size={15} /> Emergency Line
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-8">
                  {['Pain-Free Procedure', 'Single-Visit Possible', '95%+ Success Rate', 'Rotary Endodontics'].map((badge) => (
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-rose-500/8" />
                <Image
                  src="/treatments/rootcanal/root-canal-hero.webp"
                  alt="Root Canal Treatment at Dharma Dental"
                  fill
                  className="object-cover opacity-80"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Activity size={180} className="text-yellow-400" />
                </div>
                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Over 95% Success Rate</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-xs ml-1">4.9 / 5 — Patient Reviews</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30 shrink-0">
                      <Activity size={22} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — success rate */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-2xl px-4 py-2.5 shadow-xl shadow-yellow-400/30 text-center">
                <p className="font-black text-lg leading-none">95%+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider leading-none mt-0.5">Success</p>
              </div>

              {/* Floating pain-free badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden lg:block">
                <p className="text-yellow-400 font-black text-xl leading-none">💉</p>
                <p className="text-white font-bold text-xs mt-1">Pain-Free</p>
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

      {/* ── WHAT IS RCT ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">What Is Root Canal Treatment?</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Saving Teeth Since<br />
                  <span className="text-yellow-400">Before It Was Cool.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Root canal treatment (also called endodontic therapy) removes infected or inflamed tissue from inside the tooth — the pulp — that contains nerves and blood vessels. Once this tissue is removed, cleaned, and sealed, the tooth is restored with a crown and can function normally for the rest of your life.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  At Dharma Dental, we use rotary nickel-titanium instruments, digital apex locators, and antimicrobial irrigants to ensure a thorough, precise clean of every canal. The result is a predictable, comfortable procedure with an excellent long-term prognosis.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Rotary NiTi Instruments',
                    'Digital Apex Locator',
                    'Antimicrobial Irrigation',
                    'Rubber Dam Isolation',
                    'Digital X-Ray Guidance',
                    'Single-Visit Available',
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
              {/* Tooth anatomy visual card */}
              <div className="bg-slate-900/60 border border-white/8 rounded-3xl p-8">
                <p className="text-white font-black text-sm mb-6 uppercase tracking-widest text-center">
                  Inside a Tooth — What We Treat
                </p>
                <div className="space-y-3">
                  {[
                    { layer: 'Enamel', desc: 'Hardest outer layer — unaffected by RCT', color: 'bg-yellow-400/20 border-yellow-400/30', text: 'text-yellow-400' },
                    { layer: 'Dentine', desc: 'Calcified tissue beneath enamel', color: 'bg-blue-400/15 border-blue-400/25', text: 'text-blue-400' },
                    { layer: 'Pulp Chamber', desc: 'Contains nerves & blood vessels — removed during RCT', color: 'bg-rose-400/20 border-rose-400/30', text: 'text-rose-400' },
                    { layer: 'Root Canals', desc: 'Narrow passages cleaned and sealed during RCT', color: 'bg-rose-400/15 border-rose-400/25', text: 'text-rose-400' },
                    { layer: 'Periodontal Ligament', desc: 'Connects root to jawbone — preserved with RCT', color: 'bg-green-400/15 border-green-400/25', text: 'text-green-400' },
                    { layer: 'Alveolar Bone', desc: 'Jaw bone — protected by saving the tooth', color: 'bg-purple-400/15 border-purple-400/25', text: 'text-purple-400' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.layer}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${item.color}`}
                    >
                      <span className={`text-[10px] font-black uppercase tracking-wider shrink-0 ${item.text} w-28`}>{item.layer}</span>
                      <span className="text-slate-400 text-xs leading-snug">{item.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SYMPTOMS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
              <AlertCircle size={11} className="text-rose-400" />
              <span className="text-rose-400 text-[11px] font-black uppercase tracking-widest">Warning Signs</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Signs You May Need<br />
              <span className="text-yellow-400">Root Canal Treatment.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              Don't wait until the pain becomes unbearable. Early treatment is simpler, faster, and more comfortable. If you recognise any of the signs below, call us today.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYMPTOMS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="group bg-slate-900/60 border border-white/8 rounded-2xl p-6 hover:border-rose-400/30 hover:bg-rose-400/5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-2xl bg-rose-400/15 flex items-center justify-center mb-4 group-hover:bg-rose-400/25 transition-colors">
                    <s.icon size={20} className="text-rose-400" />
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{s.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
              <AlertCircle size={18} className="text-rose-400 shrink-0" />
              <p className="text-rose-300 text-sm font-semibold">
                Experiencing any of these symptoms? Don&apos;t delay.{' '}
                <a href="tel:+919169269369" className="text-yellow-400 hover:underline font-black">
                  Call us now for same-day emergency care.
                </a>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STEP-BY-STEP PROCEDURE ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Step by Step</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Exactly What Happens<br />
              <span className="text-yellow-400">During Your Procedure.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
              We believe informed patients are comfortable patients. Here is a transparent, step-by-step guide to what we do and why.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCEDURE_STEPS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.08}>
                <div className="group relative bg-slate-900/60 border border-white/8 rounded-3xl p-6 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20">
                      <span className="text-black font-black text-base">{step.step}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                      ≈ {step.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{step.desc}</p>
                  {/* Connector dot */}
                  {i < PROCEDURE_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-400/20 border border-yellow-400/30 z-10" />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Total time note */}
          <FadeUp delay={0.3} className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-yellow-400/8 border border-yellow-400/20 rounded-2xl">
              <Timer size={18} className="text-yellow-400 shrink-0" />
              <p className="text-slate-300 text-sm">
                Total procedure time: approximately{' '}
                <span className="text-yellow-400 font-black">60–90 minutes</span>
                {' '}for most teeth. Many patients drive themselves home the same day.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
              <span className="text-yellow-400 text-[11px] font-black uppercase tracking-widest">Why Root Canal Treatment</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Six Reasons to Say<br />
              <span className="text-yellow-400">Yes to Root Canal.</span>
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

      {/* ── RCT vs EXTRACTION COMPARISON ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Root Canal vs Extraction —<br />
              <span className="text-yellow-400">The Honest Comparison.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-white/8">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white/5 border-b border-white/8">
                <div className="p-4 text-slate-500 text-xs font-black uppercase tracking-widest">Factor</div>
                <div className="p-4 border-l border-white/8 text-center">
                  <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Root Canal</span>
                </div>
                <div className="p-4 border-l border-white/8 text-center">
                  <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Extraction</span>
                </div>
              </div>
              {/* Rows */}
              {[
                { factor: 'Natural tooth preserved', rct: '✓ Yes', ext: '✗ No' },
                { factor: 'Jaw bone preservation',   rct: '✓ Yes', ext: '✗ Bone loss occurs' },
                { factor: 'Adjacent teeth affected', rct: '✓ None', ext: '⚠ Teeth shift over time' },
                { factor: 'Procedure visits',        rct: '1–2 visits', ext: '1 visit + replacement planning' },
                { factor: 'Long-term cost',          rct: 'Lower (no replacement needed)', ext: 'Higher (implant or bridge)' },
                { factor: 'Chewing function',        rct: '✓ Fully restored with crown', ext: '⚠ Compromised until replaced' },
                { factor: 'Success rate',            rct: '95%+', ext: 'N/A' },
              ].map((row, i) => (
                <div
                  key={row.factor}
                  className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}
                >
                  <div className="p-4 text-slate-400 text-xs font-medium">{row.factor}</div>
                  <div className="p-4 border-l border-white/8 text-center text-xs text-green-400 font-semibold">{row.rct}</div>
                  <div className="p-4 border-l border-white/8 text-center text-xs text-slate-500 font-semibold">{row.ext}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MYTH BUSTING ── */}
      <section className="py-20 lg:py-28 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
              <span className="text-rose-400 text-[11px] font-black uppercase tracking-widest">Myth vs Truth</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              5 Root Canal Myths<br />
              <span className="text-yellow-400">Debunked by Our Experts.</span>
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Fear and misinformation keep many patients from getting treatment they need. Let&apos;s set the record straight.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {MYTHS.map((item, i) => (
              <MythItem key={item.myth} myth={item.myth} truth={item.truth} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── AFTERCARE ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                  <Heart size={17} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">After Your Root Canal</p>
                  <p className="text-slate-500 text-xs">Follow these steps for the smoothest recovery</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {AFTERCARE.map((tip, i) => (
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
                  <p className="text-black/60 text-sm font-bold uppercase tracking-widest mb-2">Don&apos;t Wait</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                    In Pain Right Now?<br />We Can Help Today.
                  </h2>
                  <p className="text-black/70 mt-3 max-w-md leading-relaxed">
                    Dental infections don&apos;t heal on their own — they worsen. Book an emergency appointment at your nearest Dharma Dental branch and get relief fast.
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
                    <Phone size={15} /> Emergency Line
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
              Your Questions About<br />
              <span className="text-yellow-400">Root Canal, Answered.</span>
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Still have concerns?{' '}
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
              <p className="text-slate-500 text-sm mt-1">Complete dental care under one roof.</p>
            </div>
            <Link href="/treatments" className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold hover:gap-3 transition-all shrink-0">
              View All <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'General Dentistry',    sub: 'Preventive',   href: '/treatments/general-dentistry',    icon: Stethoscope },
              { name: 'Dental Implants',      sub: 'Restorative',  href: '/treatments/dental-implants',      icon: ShieldCheck },
              { name: 'Paediatric Dentistry', sub: 'Children',     href: '/treatments/pediatric-dentistry',  icon: Baby },
              { name: 'Cosmetic Veneers',     sub: 'Cosmetic',     href: '/treatments/cosmetic-veneers',     icon: Sparkles },
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