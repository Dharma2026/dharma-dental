'use client';

import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Star, 
  Building, 
  Search,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  path: string;
  specialty: string;
}

const BRANCHES_DATA: Branch[] = [
  {
    id: "anantapur",
    name: "Dharma Dental Care – Anantapur",
    tagline: "Calm & Professional Setting",
    address: "Anantapur Road, J.R.S Colony, Rayadurgam, Andhra Pradesh 515301",
    phone: "+91 902 555 2259",
    email: "anantapur@dharmadentalcare.com",
    path: "/branches/anantapur",
    specialty: "Root Canal Restorative & Preventive Care"
  },
  {
    id: "vanasthalipuram",
    name: "Dharma Dental Care – Vanasthalipuram",
    tagline: "Convenient Family Dentistry",
    address: "NGO's Colony, Main Road, Vanasthalipuram, Hyderabad, Telangana 500070",
    phone: "+91 902 555 2260",
    email: "vanasthalipuram@dharmadentalcare.com",
    path: "/branches/vanasthalipuram",
    specialty: "Family Dental Care & Preventive Hygiene"
  },
  {
    id: "kondapur",
    name: "Dharma Dental Care – Kondapur",
    tagline: "Modern Aesthetic Smile Correction",
    address: "Botanical Garden Road, Near Hitec City, Kondapur, Hyderabad, Telangana 500084",
    phone: "+91 902 555 2261",
    email: "kondapur@dharmadentalcare.com",
    path: "/branches/kondapur",
    specialty: "Aesthetic Braces, Aligners & Dental Implants"
  },
  {
    id: "whitefield",
    name: "Dharma Dental Care – Whitefield",
    tagline: "Premium Corporate Multi-Specialty",
    address: "ITPL Main Road, Whitefield (Whestfield Hub), Bengaluru, Karnataka 560066",
    phone: "+91 902 555 2262",
    email: "whitefield@dharmadentalcare.com",
    path: "/branches/whitefield",
    specialty: "Dental Implant Surgery & Full Smile Correction"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBranches = useMemo(() => {
    return BRANCHES_DATA.filter(b => 
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#080d1a] font-sans text-slate-200 antialiased py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#f2bf30] selection:text-slate-950">
      
      {/* Container holding simple structured view to complement clean system of image_66e65d.jpg */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {}
        {/* HERO SECTION WITH EXACT SPECIFIED CONTENT */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#121a2e] to-[#0a0f1d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#f2bf30]/20 shadow-2xl text-left">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#f2bf30_1px,transparent_1px)] bg-size-[20px_20px]"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#f2bf30]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2bf30]/10 border border-[#f2bf30]/20 text-[#f2bf30] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> clinical footprint
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Our <span className="text-[#f2bf30]">Branches</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-350 font-light leading-relaxed">
              Dharma Dental Care brings trusted dental care closer to you with well-connected clinic locations designed for convenience, comfort, and continuity of care. Whether you are visiting for a routine check-up, a root canal, implants, or smile correction, you can expect the same patient-first experience at every branch.dharmadentalcare+1
            </p>
          </div>
        </section>

        {}
        {/* INTRO SECTION WITH EXACT SPECIFIED CONTENT */}
        <section className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-left">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f2bf30]/10 text-[#d4a318] text-xs font-bold uppercase tracking-wide">
              <Building className="w-4 h-4" /> local access overview
            </div>
            
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
              We know that easy access matters when choosing a dental clinic, especially for families and working professionals. That is why our branches are located in accessible neighborhoods, with structured appointments, supportive staff, and modern treatment planning under one brand experience.dharmadentalcare
            </p>
          </div>
        </section>

        {}
        {/* SIMPLE CLINICAL DIRECTORY */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f2bf30]/15 pb-6">
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide">Active Clinical Links</h2>
              <p className="text-xs text-slate-400 mt-1">Select an active hub page to view timings and coordinates.</p>
            </div>
            
            {/* Minimal search panel */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search by area or service..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#050810] border border-slate-800 focus:border-[#f2bf30] rounded-xl text-xs text-slate-200 focus:outline-none transition-all"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredBranches.map((branch) => (
              <a 
                href={branch.path} 
                key={branch.id}
                className="group relative bg-[#0c1220] hover:bg-[#121a2d] border border-slate-800 hover:border-[#f2bf30]/40 rounded-2xl p-6 transition-all duration-300 shadow-md text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="bg-slate-900 group-hover:bg-[#f2bf30]/10 text-slate-400 group-hover:text-[#f2bf30] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-800 group-hover:border-[#f2bf30]/20 transition-all">
                      {branch.id} hub
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#f2bf30] transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-[#f2bf30] transition-colors">{branch.name}</h3>
                    <p className="text-slate-400 text-xs mt-1 font-light italic">{branch.tagline}</p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{branch.address}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-[#f2bf30]">{branch.specialty}</span>
                  <span className="font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[10px]">
                    Go to Page <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}

            {filteredBranches.length === 0 && (
              <div className="col-span-full py-12 text-center bg-[#050810] border border-slate-800 rounded-2xl">
                <p className="text-slate-500 text-sm">No branch matched "{searchQuery}"</p>
              </div>
            )}
          </div>
        </section>

        {}
        {/* BRANCH HIGHLIGHTS SECTION WITH EXACT SPECIFIED CONTENT */}
        <section className="bg-linear-to-b from-[#0c1220] to-[#050810] rounded-3xl p-8 sm:p-12 border border-slate-800 text-left space-y-10">
          <div>
            <span className="text-xs font-bold text-[#f2bf30] uppercase tracking-wider">quality metrics</span>
            <h2 className="text-3xl font-black text-white mt-1 uppercase">Clinic Highlights</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Highlight 1 */}
            <div className="p-5 bg-[#050810]/60 rounded-xl border border-slate-850 hover:border-[#f2bf30]/25 transition-all flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#f2bf30]/10 text-[#f2bf30] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">A</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Easy-to-reach clinic locations for regular and specialized dental visits.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="p-5 bg-[#050810]/60 rounded-xl border border-slate-850 hover:border-[#f2bf30]/25 transition-all flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#f2bf30]/10 text-[#f2bf30] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">B</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Consistent care standards, hygiene protocols, and patient guidance across branches.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="p-5 bg-[#050810]/60 rounded-xl border border-slate-850 hover:border-[#f2bf30]/25 transition-all flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#f2bf30]/10 text-[#f2bf30] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">C</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Support for preventive, restorative, cosmetic, and family dentistry needs.
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="p-5 bg-[#050810]/60 rounded-xl border border-slate-850 hover:border-[#f2bf30]/25 transition-all flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#f2bf30]/10 text-[#f2bf30] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">D</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Convenient appointment timings from Monday to Saturday.dharmadentalcare+1
              </p>
            </div>
          </div>
        </section>

        {}
        {/* CTA SECTION WITH EXACT SPECIFIED CONTENT */}
        <section className="bg-linear-to-tr from-[#16223f] to-[#0c1220] rounded-3xl p-8 sm:p-12 border border-[#f2bf30]/30 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2bf30]/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-xs font-bold text-[#f2bf30] uppercase tracking-wider block">Unified Brand Care</span>
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Choose the branch that is most convenient for you and book your visit with confidence. At Dharma Dental Care, quality treatment and a caring experience go hand in hand across every location.dharmadentalcare
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/branches/anantapur" 
                className="px-6 py-2.5 bg-[#f2bf30] hover:bg-[#d4a318] text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                Visit Anantapur Branch
              </a>
              <a 
                href="/branches/vanasthalipuram" 
                className="px-6 py-2.5 bg-transparent hover:bg-white/5 border border-slate-700 text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                Visit Vanasthalipuram Hub
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}