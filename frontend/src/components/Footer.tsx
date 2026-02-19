'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  Lock,
  ChevronDown,
  Stethoscope,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

type BranchInfo = { address: string; phone: string; email: string; };
type BranchData = { [key: string]: BranchInfo; };

const BRANCH_DATA: BranchData = {
  "Sarjapur Road": {
    address: "3rd Floor, Gurumurthy Reddy Complex, 5, Sarjapur - Marathahalli Road, Doddakannelli, Bengaluru 560035",
    phone: "+91 923 695 2369",
    email: "hydndc@gmail.com"
  },
  "Vanasthalipuram": {
    address: "National Dental Care, 3rd Floor, Above D Mart, Vanasthalipuram, Hyderabad 500070",
    phone: "+91 903 005 2369",
    email: "hydndc@gmail.com"
  },
  "Kondapur": {
    address: "Block 1, DivyaSree Omega, Survey No 13, Kothaguda, Kondapur, Hyderabad 500084",
    phone: "+91 903 006 2369",
    email: "kondapurndc@gmail.com"
  },
  "Whitefield": {
    address: "ITPL Main Rd, near Hope Farm Circle, Whitefield, Bengaluru 560066",
    phone: "+91 923 888 2369",
    email: "whitefieldndc@gmail.com"
  },
};

interface SocialIconProps {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <motion.a
    href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-500/50 transition-colors shadow-lg"
  >
    <Icon size={18} />
  </motion.a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isDropdown?: boolean;
}

const FooterLink = ({ href, children, isDropdown = false }: FooterLinkProps) => (
  <li className="py-1">
    <Link
      href={href}
      className={`text-slate-400 hover:text-yellow-400 transition-colors text-sm flex items-center group py-2 ${isDropdown ? 'pl-4 border-l border-slate-800 ml-1' : ''}`}
    >
      {!isDropdown && (
        <motion.span className="mr-2 h-px w-0 bg-yellow-500 transition-all group-hover:w-3" />
      )}
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [selectedBranch, setSelectedBranch] = useState("Sarjapur Road");
  const [email, setEmail] = useState('');
  const [subState, setSubState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setSubState('success');
      setEmail('');
    } catch (err) {
      setSubState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      // Reset back to idle after 4 seconds
      setTimeout(() => setSubState('idle'), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 pt-16 md:pt-24 pb-8 px-6 border-t border-slate-900 font-sans selection:bg-yellow-500/30">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/10">
                <Stethoscope size={28} className="text-black" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-white block leading-none">Dharma Dental</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-bold">Excellence in Care</span>
              </div>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-md italic font-serif">
              Transforming smiles with world-class dental technology and personalized care across multiple branches.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon Icon={Facebook} href="https://facebook.com" label="Facebook" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" label="Instagram" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
              <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube" />
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {subState === 'success' ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-6 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 size={26} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-black text-lg">You&apos;re subscribed!</p>
                      <p className="text-slate-400 text-sm mt-1">
                        Check your inbox for a welcome email from Dharma Dental.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form state ── */
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h3 className="text-xl font-bold text-white mb-1">Stay in the Know</h3>
                    <p className="text-slate-400 mb-6 text-sm">
                      Get dental tips, exclusive offers and clinic updates.
                    </p>

                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={subState === 'loading'}
                        className="flex-1 bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-slate-200 placeholder-slate-600 disabled:opacity-50"
                      />
                      <motion.button
                        type="submit"
                        disabled={subState === 'loading'}
                        whileHover={{ scale: subState === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: subState === 'loading' ? 1 : 0.98 }}
                        className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/10 hover:bg-yellow-300 transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {subState === 'loading' ? (
                          <><Loader2 size={16} className="animate-spin" /> Sending…</>
                        ) : (
                          <>Subscribe <ArrowRight size={16} /></>
                        )}
                      </motion.button>
                    </form>

                    {/* Error message */}
                    {subState === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-xs text-rose-400 font-medium"
                      >
                        {errorMsg}
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 py-16">

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] border-b border-slate-900 pb-4">Navigation</h4>
            <ul className="space-y-1">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team" isDropdown>Our Doctors</FooterLink>
              <FooterLink href="/gallery">Smile Gallery</FooterLink>
              <FooterLink href="/testimonials">Patient Reviews</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] border-b border-slate-900 pb-4">Treatments</h4>
            <ul className="space-y-1">
              <FooterLink href="/services/general-dentistry" isDropdown>General Dentistry</FooterLink>
              <FooterLink href="/services/pediatric-dentistry" isDropdown>Pediatric Dentistry</FooterLink>
              <FooterLink href="/services/root-canal" isDropdown>Root Canal Treatment</FooterLink>
              <FooterLink href="/services/dental-implants" isDropdown>Dental Implants</FooterLink>
              <FooterLink href="/services/orthodontics" isDropdown>Orthodontics & Braces</FooterLink>
              <FooterLink href="/services/clear-aligners" isDropdown>Clear Aligners</FooterLink>
              <FooterLink href="/services/cosmetic-dentistry" isDropdown>Cosmetic Dentistry</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] border-b border-slate-900 pb-4">Our Branches</h4>
            <ul className="space-y-1">
              {Object.keys(BRANCH_DATA).map(branch => (
                <FooterLink key={branch} href="/contact" isDropdown>{branch}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Interactive Contact */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] border-b border-slate-900 pb-4">Contact Details</h4>

            <div className="space-y-6 bg-slate-900/20 p-5 rounded-2xl border border-slate-900 md:bg-transparent md:p-0 md:border-none">
              <div className="relative group">
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-3 appearance-none cursor-pointer focus:border-yellow-500 transition-colors outline-none"
                >
                  {Object.keys(BRANCH_DATA).map(branch => (
                    <option key={branch} value={branch} className="bg-slate-950">{branch}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-hover:text-yellow-400 transition-colors" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBranch}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
                      <MapPin size={18} className="text-yellow-500" />
                    </div>
                    <span>{BRANCH_DATA[selectedBranch].address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
                      <Phone size={18} className="text-yellow-500" />
                    </div>
                    <a href={`tel:${BRANCH_DATA[selectedBranch].phone}`} className="font-bold text-white text-base hover:text-yellow-400 transition-colors">
                      {BRANCH_DATA[selectedBranch].phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
                      <Mail size={18} className="text-yellow-500" />
                    </div>
                    <a href={`mailto:${BRANCH_DATA[selectedBranch].email}`} className="hover:text-yellow-400 transition-colors">
                      {BRANCH_DATA[selectedBranch].email}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              <Link href="/contact">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-yellow-400 text-xs cursor-pointer font-bold uppercase tracking-widest flex items-center gap-2 group pt-2"
                >
                  Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-slate-500 text-[11px] md:text-xs tracking-tight order-2 md:order-1">
            © {currentYear} Dharma Dental. Excellence in Dentistry.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 order-1 md:order-2">
            <Link href="/privacy" className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500 hover:text-white transition-colors tracking-widest">
              <Shield size={12} /> Privacy Policy
            </Link>
            <Link href="/terms" className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500 hover:text-white transition-colors tracking-widest">
              <Lock size={12} /> Terms of Use
            </Link>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/5 border border-yellow-400/10 text-yellow-400 text-[10px] font-bold uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Patient Support Active
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}