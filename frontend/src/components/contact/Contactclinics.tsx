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
  },
  {
    city: 'Hyderabad',
    branch: 'Vanasthalipuram',
    address: '2nd Floor, SANDEEP VIHAR, Sy No. 60, Vanasthalipuram, Hyderabad 500070',
    phone: '+91 903 005 2369',
    email: 'hydndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
  },
  {
    city: 'Bengaluru',
    branch: 'Sarjapur',
    address: '3rd Floor, Gurumurthy Reddy Complex, Sarjapur–Marathahalli Rd, Bengaluru 560035',
    phone: '+91 923 695 2369',
    email: 'hydndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
  },
  {
    city: 'Bengaluru',
    branch: 'Whitefield',
    address: 'ITPL Main Rd, near Hope Farm Circle, Whitefield, Bengaluru 560066',
    phone: '+91 923 888 2369',
    email: 'whitefieldndc@gmail.com',
    mapLink: 'https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7',
    hours: 'Mon–Sat: 9AM – 8PM',
  },
];

function ClinicCard({ clinic }: { clinic: (typeof CLINICS)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group p-7 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-500"
    >
      <span className="inline-block mb-4 text-[9px] font-black uppercase tracking-[0.25em] bg-yellow-400/15 text-yellow-600 px-3 py-1 rounded-full border border-yellow-400/20">
        {clinic.city}
      </span>

      <h3 className="text-xl font-black text-slate-900 tracking-tight mb-4">
        {clinic.branch}
      </h3>

      <div className="space-y-3 text-sm text-slate-500">
        <div className="flex items-start gap-3">
          <MapPin size={15} className="text-yellow-500 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{clinic.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={15} className="text-yellow-500 shrink-0" />
          <a
            href={`tel:${clinic.phone}`}
            className="hover:text-slate-900 transition-colors font-semibold"
          >
            {clinic.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={15} className="text-yellow-500 shrink-0" />
          <a
            href={`mailto:${clinic.email}`}
            className="hover:text-slate-900 transition-colors"
          >
            {clinic.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={15} className="text-yellow-500 shrink-0" />
          <span>
            {clinic.hours}&nbsp;·&nbsp;
            <span className="text-red-400 font-semibold">Sun: Closed</span>
          </span>
        </div>
      </div>

      <a
        href={clinic.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-yellow-500 transition-colors group/link"
      >
        <Navigation size={13} />
        Get Directions
        <ArrowRight
          size={12}
          className="translate-x-0 group-hover/link:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  );
}

export default function ContactClinics() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px]">
                <MapPin size={13} /> Our Locations
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                Find a Clinic{' '}
                <span className="text-yellow-500 italic">Near You</span>
              </h2>
            </div>
            <Link
              href="/locations"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              View All Locations
              <span className="w-8 h-8 rounded-full bg-white group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm">
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CLINICS.map((clinic) => (
              <ClinicCard key={clinic.branch} clinic={clinic} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}