'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Clock, ArrowRight } from "lucide-react";

// --- CONFIGURATION DATA ---
const DATA = {
  phone: "+91 987654 3210",
  phoneLabel: "Emergency Line",
  hours: "09:00 - 21:00 Daily",
  hoursLabel: "Opening Hours",
  cta: "Book an Appointment",
  ctaLink: "/contact"
};

export default function GlassAppointmentSection() {
  return (
    <div className="relative w-full bg-slate-900 py-24 flex justify-center overflow-hidden font-sans">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-5xl mx-4"
      >
        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl ring-1 ring-white/5">
          
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto flex-1">
            {/* Phone Item */}
            <a 
              href={`tel:${DATA.phone}`}
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors flex-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-blue-200/70 font-medium uppercase tracking-wider mb-1">
                  {DATA.phoneLabel}
                </span>
                <span className="text-white text-lg font-semibold tracking-wide">
                  {DATA.phone}
                </span>
              </div>
            </a>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-px bg-white/10 my-4 mx-2" />

            {/* Hours Item */}
            <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default flex-1">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-lg text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <Clock size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-emerald-200/70 font-medium uppercase tracking-wider mb-1">
                  {DATA.hoursLabel}
                </span>
                <span className="text-white text-lg font-semibold tracking-wide">
                  {DATA.hours}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto cursor-pointer mr-2 group uppercase flex items-center justify-center gap-3 bg-[#fdc700] text-slate-900 px-8 py-5 rounded-xl font-bold text-sm shadow-xl hover:shadow-[#FAE01A]/20 transition-all"
            >
              {DATA.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}