'use client';

// components/contact/sections/ContactClinics.tsx
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Navigation, ArrowRight } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CLINICS = [
  {
    city: 'Hyderabad',
    branch: 'Kondapur',
    address: 'Block 1, DivyaSree Omega, Survey No 13, Kothaguda, Telangana 500084',
    phone: '+91 903 006 2369',
    email: 'kondapurndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/B7Hp29dSk2G9iMMD7',
    hours: 'Mon–Sat: 9AM – 8PM',
    gradient: 'from-yellow-400/20 via-yellow-300/10 to-transparent',
    dot: 'bg-yellow-400',
  },
  {
    city: 'Hyderabad',
    branch: 'Vanasthalipuram',
    address: '2nd Floor, SANDEEP VIHAR, Sy No. 60, Vanasthalipuram, Hyderabad 500070',
    phone: '+91 903 005 2369',
    email: 'hydndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
    gradient: 'from-blue-400/15 via-blue-300/8 to-transparent',
    dot: 'bg-blue-400',
  },
  {
    city: 'Bengaluru',
    branch: 'Sarjapur',
    address: '3rd Floor, Gurumurthy Reddy Complex, Sarjapur–Marathahalli Rd, Bengaluru 560035',
    phone: '+91 923 695 2369',
    email: 'hydndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
    gradient: 'from-emerald-400/15 via-emerald-300/8 to-transparent',
    dot: 'bg-emerald-400',
  },
  {
    city: 'Bengaluru',
    branch: 'Whitefield',
    address: 'ITPL Main Rd, near Hope Farm Circle, Whitefield, Bengaluru 560066',
    phone: '+91 923 888 2369',
    email: 'whitefieldndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
    gradient: 'from-violet-400/15 via-violet-300/8 to-transparent',
    dot: 'bg-violet-400',
  },
];

function ClinicCard({ clinic, index }: { clinic: (typeof CLINICS)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/70 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      {/* Animated gradient blob on hover */}
      <motion.div
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${clinic.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      {/* Top animated gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden rounded-t-[2rem]">
        <motion.div
          className={`h-full w-full bg-gradient-to-r ${clinic.gradient.replace('from-', 'from-').replace('/20', '').replace('/15', '').replace('/8', '')} opacity-0 group-hover:opacity-100`}
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${clinic.gradient.replace('/20', '').replace('/15', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>

      <div className="relative z-10 p-7">
        {/* City badge with pulsing dot */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`w-2 h-2 rounded-full ${clinic.dot} animate-pulse`} />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
            {clinic.city}
          </span>
        </div>

        <h3 className="text-xl font-black text-slate-900 tracking-tight mb-5 group-hover:text-slate-950 transition-colors">
          {clinic.branch}
        </h3>

        <div className="space-y-3.5 text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-yellow-100 transition-colors">
              <MapPin size={13} className="text-yellow-600" />
            </div>
            <span className="leading-relaxed pt-1">{clinic.address}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
              <Phone size={13} className="text-yellow-600" />
            </div>
            <a
              href={`tel:${clinic.phone}`}
              className="font-bold text-slate-800 hover:text-yellow-600 transition-colors"
            >
              {clinic.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
              <Mail size={13} className="text-yellow-600" />
            </div>
            <a
              href={`mailto:${clinic.email}`}
              className="text-slate-700 hover:text-yellow-600 transition-colors truncate"
            >
              {clinic.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
              <Clock size={13} className="text-yellow-600" />
            </div>
            <span className="text-slate-700">
              {clinic.hours}&nbsp;·&nbsp;
              <span className="text-red-500 font-semibold">Sun: Closed</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

        {/* Get Directions */}
        <a
          href={clinic.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-yellow-600 transition-colors group/link"
        >
          <Navigation size={13} />
          Get Directions
          <ArrowRight
            size={12}
            className="ml-auto translate-x-0 group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* Bottom shimmer line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function ContactClinics() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">

      {/* Animated background gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-400/6 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '36px 36px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-yellow-600 font-black uppercase tracking-[0.3em] text-[10px]">
                <MapPin size={13} /> Our Locations
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                Find a Clinic{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400 italic">
                  Near You
                </span>
              </h2>
              <p className="text-slate-600 text-base max-w-md leading-relaxed">
                Four premium locations across Hyderabad and Bengaluru — always close to you.
              </p>
            </div>

            <Link
              href="/locations"
              className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors self-start md:self-auto"
            >
              View All Locations
              <span className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm">
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {CLINICS.map((clinic, index) => (
              <ClinicCard key={clinic.branch} clinic={clinic} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}