'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Stethoscope, 
  Phone, 
  Calendar,
  MapPin,
  ArrowRight,
  Clock,
  Instagram,
  Facebook
} from 'lucide-react';

/**
 * Premium Dental Header Component
 * Features:
 * - Integrated Top Bar for contact & hours
 * - Multi-level Dropdowns (Treatments & Branches)
 * - Glassmorphic scroll effect
 * - Mobile-optimized navigation drawer
 * - Consistent branding with Dharma Dental theme
 */

const TREATMENTS = [
  { name: "General Dentistry", href: "/services/general-dentistry" },
  { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { name: "Root Canal Treatment", href: "/services/root-canal" },
  { name: "Dental Implants", href: "/services/dental-implants" },
  { name: "Orthodontics & Braces", href: "/services/orthodontics" },
  { name: "Clear Aligners", href: "/services/clear-aligners" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" }
];

const BRANCHES = [
  { name: "Sarjapur Road", href: "/contact?branch=sarjapur" },
  { name: "Vanasthalipuram", href: "/contact?branch=vanasthalipuram" },
  { name: "Kukatpally", href: "/contact?branch=kukatpally" },
  { name: "Banjara Hills", href: "/contact?branch=banjara-hills" }
];

interface NavItemProps {
  label: string;
  href?: string;
  children?: React.ReactNode;
}

const NavItem = ({ label, href = "#", children }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children ? (
        <button 
          className="flex items-center gap-1 text-white hover:text-yellow-400 font-semibold text-[13px] uppercase tracking-wider transition-colors py-6"
        >
          {label}
          <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <Link 
          href={href}
          className="flex items-center gap-1 text-white hover:text-yellow-400 font-semibold text-[13px] uppercase tracking-wider transition-colors py-6"
        >
          {label}
        </Link>
      )}

      {children && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 transition-all duration-500">
        
        {/* TOP BAR - Attached and Sticky */}
        <div className={`bg-slate-950 border-b border-white/5 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[14px] text-white font-semibold uppercase ">
                <Clock size={16} className="text-yellow-400" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[14px] text-white font-semibold  border-l border-slate-800 pl-6">
                <MapPin size={16} className="text-yellow-400" />
                <span>Multi-Location Clinics</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <div className="h-4 w-px bg-slate-800 mx-2" />
              <a 
                href="mailto:hydndc@gmail.com" 
                className="text-[14px] text-white font-semibold hover:text-yellow-400 transition-colors  "
              >
                dharma@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div 
          className={`transition-all duration-500 ${
            isScrolled 
              ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-900 py-3' 
              : 'bg-slate-950/80 backdrop-blur-md py-4 md:py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer shrink-0">
              <div className="w-9 h-9 xl:w-10 xl:h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:rotate-12 transition-transform">
                <Stethoscope size={20} className="text-black xl:hidden" />
                <Stethoscope size={24} className="text-black hidden xl:block" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg xl:text-xl font-black tracking-tighter text-white block leading-none">Dharma Dental</span>
                <span className="text-[7px] xl:text-[8px] uppercase tracking-[0.3em] text-yellow-500 font-bold">Excellence in Care</span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              <NavItem label="Home" href="/" />
              
              <NavItem label="About Us">
                <Link href="/about" className="p-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group">
                  Who We Are <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
                <Link href="/team" className="p-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group">
                  Our Doctors <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </NavItem>
              
              <NavItem label="Treatments">
                {TREATMENTS.map(item => (
                  <Link key={item.name} href={item.href} className="p-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group">
                    {item.name} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </NavItem>

              <NavItem label="Gallery" href="/gallery" />
              
              <NavItem label="Branches">
                {BRANCHES.map(item => (
                  <Link key={item.name} href={item.href} className="p-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-yellow-500" />
                      {item.name}
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </NavItem>

              <NavItem label="Blog" href="/blog" />
              
              <NavItem label="Contact" href="/contact" />
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 xl:gap-4">
              
              
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-black cursor-pointer px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-black text-[12px] xl:text-[13px] uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-yellow-400/10 hover:bg-white transition-colors whitespace-nowrap"
                >
                  <Calendar size={16} /> <span className="hidden md:inline">Book Appointment</span>
                </motion.button>
              </Link>

              {/* MOBILE MENU TOGGLE */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-950 z-[201] p-8 flex flex-col border-l border-slate-900 shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-white font-black text-xl tracking-tighter">Navigation</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-6">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-black text-white hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>

                <div className="space-y-4">
                  <p className="text-[13px] uppercase tracking-[0.3em] text-slate-600 font-bold">About</p>
                  <Link 
                    href="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-slate-400 hover:text-white"
                  >
                    Who We Are
                  </Link>
                  <Link 
                    href="/team" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-slate-400 hover:text-white"
                  >
                    Our Doctors
                  </Link>
                </div>

                <div className="space-y-4">
                  <p className="text-[13px] uppercase tracking-[0.3em] text-slate-600 font-bold">Treatments</p>
                  {TREATMENTS.slice(0, 4).map(t => (
                    <Link 
                      key={t.name} 
                      href={t.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-bold text-slate-400 hover:text-white"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[13px] uppercase tracking-[0.3em] text-slate-600 font-bold">Branches</p>
                  {BRANCHES.map(b => (
                    <Link 
                      key={b.name} 
                      href={b.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base font-bold text-slate-400 hover:text-white flex items-center gap-2"
                    >
                      <MapPin size={16} className="text-yellow-500" />
                      {b.name}
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/gallery" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-black text-white hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </Link>

                <Link 
                  href="/blog" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-black text-white hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-black text-white hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-8 border-t border-slate-900 mt-auto">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="cursor-pointer w-full bg-yellow-400 text-black py-4 rounded-2xl font-black uppercase tracking-widest text-sm mb-4 hover:bg-white transition-colors">
                    Book Now
                  </button>
                </Link>
                <div className="flex justify-center gap-6 text-slate-500">
                  <a href="tel:+919236952369" className="hover:text-yellow-400 transition-colors">
                    <Phone size={20} />
                  </a>
                  <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                    <MapPin size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}