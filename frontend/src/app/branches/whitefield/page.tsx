"use client"
import React from 'react';
import {
  MapPin,
  Smile,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Heart,
  Check,
  Activity,
  ExternalLink,
  PhoneCall,
  Zap,
  Shield,
  ArrowRight,
  CalendarCheck,
  Layers,
  Target,
} from 'lucide-react';

export default function App() {

  const services = [
    { icon: <Shield size={20} />, label: "Preventive", desc: "General and family dentistry for patients of all ages." },
    { icon: <Activity size={20} />, label: "Restorative", desc: "Root canal and restorative treatment for damaged or infected teeth." },
    { icon: <Layers size={20} />, label: "Implants", desc: "Implant-based tooth replacement solutions for lasting results." },
    { icon: <Smile size={20} />, label: "Orthodontics", desc: "Orthodontics, braces, and clear aligners for straighter smiles." },
    { icon: <Zap size={20} />, label: "Cosmetic", desc: "Cosmetic dentistry and smile enhancement care tailored to you." },
  ];

  return (
    <div className="min-h-screen bg-[#070b19] text-white font-sans antialiased selection:bg-[#f2bf38] selection:text-slate-900 overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <header className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-36 bg-gradient-to-b from-[#070b19] to-[#0e1428] border-b border-slate-900">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-b from-[#f2bf38]/5 to-transparent rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <nav className="mb-16 lg:mb-24 flex items-center gap-2.5 text-xs text-slate-400 font-semibold tracking-wider uppercase">
            <a href="/" className="hover:text-[#f2bf38] transition-colors">Home</a>
            <ChevronRight size={12} className="text-slate-600 stroke-[3]" />
            <a href="/branches" className="hover:text-[#f2bf38] transition-colors">Branches</a>
            <ChevronRight size={12} className="text-slate-600 stroke-[3]" />
            <span className="text-[#f2bf38]">Whitefield</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Hero Copy */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="inline-flex items-center gap-2.5 bg-[#f2bf38]/10 border border-[#f2bf38]/20 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#f2bf38] animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#f2bf38] uppercase">Branch 4: Whitefield</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Dharma Dental Care <br />
                  <span className="text-[#f2bf38]">Whitefield</span>
                </h1>
                <div className="w-20 h-1.5 bg-[#f2bf38] rounded-full"></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal border-l-2 border-[#f2bf38]/40 pl-5 py-2">
                Our Whitefield branch serves patients looking for advanced dental care in a modern and welcoming environment. Whether your concern is functional, preventive, or cosmetic, we are here to guide you with clarity and care.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a href="/contact" className="bg-[#f2bf38] hover:bg-amber-500 text-slate-950 font-black py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-[#f2bf38]/20 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                  Schedule Consultation <ChevronRight size={15} className="stroke-[3]" />
                </a>
                <a href="#services-section" className="border-2 border-slate-800 hover:border-[#f2bf38]/65 hover:text-white text-slate-300 font-bold py-4 px-8 rounded-full transition-all duration-300 text-xs uppercase tracking-widest flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
                  Explore Treatments
                </a>
              </div>
            </div>

            {/* Right: Location Card */}
            <div className="lg:col-span-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dharma+Dental+Care+Whitefield+Hyderabad"
                target="_blank" rel="noopener noreferrer"
                className="block relative group rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f24] p-1 shadow-2xl transition-all duration-300 hover:border-[#f2bf38]/60 cursor-pointer"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 border border-slate-800 px-3 py-1 rounded-md bg-[#050711] flex items-center gap-1.5">
                      CLINICAL COORDINATES <ExternalLink size={10} className="text-slate-500 group-hover:text-[#f2bf38] transition-colors" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#f2bf38] tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f2bf38] animate-ping"></span>
                      GPS ACTIVE
                    </span>
                  </div>
                  <div className="relative h-56 bg-[#050711] rounded-xl border border-slate-800/60 flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute w-44 h-44 rounded-full border border-slate-800/40 animate-pulse"></div>
                    <div className="absolute w-32 h-32 rounded-full border border-dashed border-slate-800/60"></div>
                    <div className="absolute w-16 h-16 rounded-full border border-slate-800"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[#f2bf38]/10 border border-[#f2bf38]/30 flex items-center justify-center text-[#f2bf38] animate-bounce">
                        <MapPin size={22} />
                      </div>
                      <div className="bg-[#f2bf38] text-slate-950 font-extrabold text-[11px] tracking-wide uppercase px-4 py-2 rounded shadow-lg">
                        Whitefield, Hyderabad
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-1">
                        Whitefield, Hyderabad <ExternalLink size={10} />
                      </span>
                    </div>
                    <div className="absolute bottom-2 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] bg-[#f2bf38] text-slate-950 px-2.5 py-1 rounded font-bold uppercase tracking-widest shadow-md">
                        Open in Google Maps
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#050711] p-3 rounded-lg border border-slate-800/60 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white text-[11px]">Whitefield Branch Clinic</p>
                      <span className="text-[9px] text-slate-400">Dharma Dental Care, Whitefield, Hyderabad</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[#f2bf38]">INDEX-04</span>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          INTRO SECTION
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#0a0f1e] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f2bf38]">
                <span className="w-5 h-px bg-[#f2bf38]"></span> Our Approach
              </span>
              <blockquote className="text-2xl sm:text-3xl font-black text-white leading-snug">
                "Professional, approachable, and always patient-first."
              </blockquote>
              <p className="text-slate-400 text-base leading-relaxed">
                We know many patients want a clinic that feels both professional and approachable. At Whitefield, our focus is on careful diagnosis, personalized treatment planning, and helping patients move forward with confidence rather than confusion.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#f2bf38] hover:gap-3 transition-all">
                Book a Consultation <ArrowRight size={14} className="stroke-[3]" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {[
                { icon: <Target size={20} />, title: "Careful Diagnosis", desc: "Thorough evaluations before any treatment recommendation." },
                { icon: <CalendarCheck size={20} />, title: "Personalized Plans", desc: "Treatment designed around your specific needs and timeline." },
                { icon: <Heart size={20} />, title: "Patient Confidence", desc: "Move forward with clarity — never confusion or pressure." },
              ].map((p) => (
                <div key={p.title} className="bg-[#0d1526] border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f2bf38]/10 border border-[#f2bf38]/20 flex items-center justify-center text-[#f2bf38]">
                    {p.icon}
                  </div>
                  <p className="font-black text-white text-sm">{p.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION SECTION
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#070b19] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Left: Info */}
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f2bf38]">
                  <span className="w-5 h-px bg-[#f2bf38]"></span> How to Find Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Located in<br/>
                  <span className="text-[#f2bf38]">Whitefield, Hyderabad</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our Whitefield clinic is conveniently situated for professionals and families across the area, offering easy access in the neighbourhood.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dharma+Dental+Care+Whitefield+Hyderabad"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-[#0d1526] hover:bg-[#111c35] border border-slate-800 hover:border-[#f2bf38]/30 rounded-2xl p-4 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f2bf38]/10 flex items-center justify-center shrink-0 text-[#f2bf38]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Clinic Address</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Whitefield, Hyderabad — exact address on confirmation</p>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-black text-[#f2bf38]/60 uppercase tracking-widest group-hover:text-[#f2bf38] transition-colors">Open Maps <ExternalLink size={9} /></span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a href="tel:+919030062369" className="flex items-center gap-3 bg-[#0d1526] hover:bg-[#111c35] border border-slate-800 hover:border-[#f2bf38]/30 rounded-2xl p-4 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#f2bf38]/10 flex items-center justify-center shrink-0 text-[#f2bf38]"><Phone size={15} /></div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                      <p className="text-white text-xs font-black mt-0.5">+91 903 006 2369</p>
                    </div>
                  </a>
                  <a href="mailto:info@dharmadentalcare.com" className="flex items-center gap-3 bg-[#0d1526] hover:bg-[#111c35] border border-slate-800 hover:border-[#f2bf38]/30 rounded-2xl p-4 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#f2bf38]/10 flex items-center justify-center shrink-0 text-[#f2bf38]"><Mail size={15} /></div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Email</p>
                      <p className="text-white text-xs font-black mt-0.5 break-all">info@dharmadentalcare.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 bg-[#0d1526] border border-slate-800 rounded-2xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-[#f2bf38]/10 flex items-center justify-center shrink-0 text-[#f2bf38]"><Clock size={15} /></div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Hours</p>
                      <p className="text-white text-xs font-black mt-0.5">Mon–Sat 9–8 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clickable Map Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dharma+Dental+Care+Whitefield+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl overflow-hidden border border-slate-800 hover:border-[#f2bf38]/40 shadow-2xl min-h-[340px] relative flex flex-col transition-all duration-300"
            >
              <div className="flex-1 relative bg-[#0d1829] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="gridA" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f2bf38" strokeWidth="0.5"/>
                    </pattern>
                    <pattern id="gridB" width="120" height="120" patternUnits="userSpaceOnUse">
                      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#f2bf38" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridA)" />
                  <rect width="100%" height="100%" fill="url(#gridB)" />
                  <rect x="0" y="45%" width="100%" height="10" fill="#1a2744" rx="2"/>
                  <rect x="40%" y="0" width="12" height="100%" fill="#1a2744" rx="2"/>
                  <rect x="0" y="25%" width="100%" height="5" fill="#141f38" rx="1"/>
                  <rect x="0" y="70%" width="100%" height="5" fill="#141f38" rx="1"/>
                  <rect x="20%" y="0" width="6" height="100%" fill="#141f38" rx="1"/>
                  <rect x="65%" y="0" width="6" height="100%" fill="#141f38" rx="1"/>
                  <rect x="5%" y="30%" width="14%" height="13%" fill="#0f1a2e" rx="3"/>
                  <rect x="22%" y="30%" width="16%" height="13%" fill="#0f1a2e" rx="3"/>
                  <rect x="44%" y="30%" width="19%" height="13%" fill="#0f1a2e" rx="3"/>
                  <rect x="66%" y="30%" width="28%" height="13%" fill="#0f1a2e" rx="3"/>
                  <rect x="5%" y="50%" width="33%" height="17%" fill="#0f1a2e" rx="3"/>
                  <rect x="44%" y="50%" width="22%" height="17%" fill="#0f1a2e" rx="3"/>
                  <rect x="70%" y="50%" width="24%" height="17%" fill="#0f1a2e" rx="3"/>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <span className="absolute w-20 h-20 rounded-full bg-[#f2bf38]/10 animate-ping"></span>
                    <span className="absolute w-12 h-12 rounded-full bg-[#f2bf38]/15"></span>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#f2bf38] flex items-center justify-center shadow-xl shadow-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={22} className="text-slate-950" strokeWidth={2.5} />
                    </div>
                    <div className="mt-3 bg-[#0d1526]/95 border border-slate-700 rounded-xl px-4 py-2 text-center shadow-lg">
                      <p className="text-white text-xs font-bold">Dharma Dental Care</p>
                      <p className="text-slate-400 text-[10px] mt-0.5">Whitefield, Hyderabad</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#f2bf38] text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg group-hover:bg-amber-400 transition-colors">
                  Open in Maps <ExternalLink size={10} />
                </div>
              </div>

              <div className="bg-[#070b19] border-t border-slate-800 px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-bold">Whitefield Branch</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">Dharma Dental Care, Hyderabad</p>
                </div>
                <span className="text-[#f2bf38] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Tap to open <ChevronRight size={10} />
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════ */}
      <section id="services-section" className="py-24 sm:py-32 bg-[#070b19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-3 max-w-2xl mx-auto">
            <div className="inline-block bg-[#f2bf38]/10 border border-[#f2bf38]/20 px-3 py-1 rounded-full">
              <span className="text-[10px] font-bold tracking-widest text-[#f2bf38] uppercase">Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              At Whitefield, we support patients with:
            </h2>
            <div className="w-16 h-1 bg-[#f2bf38] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((svc) => (
              <div key={svc.label} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-[#f2bf38] transition-colors">
                    {svc.icon}
                  </div>
                  <p className="text-sm sm:text-base font-bold leading-relaxed text-slate-900">{svc.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  <span>{svc.label}</span>
                  <span className="text-[#f2bf38]">dharmadentalcare</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE / WHY THIS BRANCH SECTION
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#0a0f1e] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#f2bf38]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* Gold left panel */}
              <div className="lg:col-span-4 bg-[#f2bf38] p-8 sm:p-10 flex flex-col justify-center gap-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900/50">Why This Branch</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                  Modern.<br/>Caring.<br/>Human.
                </h2>
                <p className="text-slate-900/70 text-sm leading-relaxed">
                  Built on the Dharma Dental Care philosophy — combining modern treatment with a human touch that patients feel at every visit.
                </p>
              </div>

              {/* Dark right panel */}
              <div className="lg:col-span-8 bg-[#070b19] p-8 sm:p-10 flex flex-col justify-center gap-6">
                <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                  This branch reflects the Dharma Dental Care philosophy of combining modern treatment with a human touch. We want every patient to feel listened to, respected, and supported at every stage of care.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Listened to — from first consultation to final visit",
                    "Modern equipment in a welcoming environment",
                    "Respected with transparent treatment planning",
                    "Supported at every stage of your care journey",
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-3 text-sm text-slate-400">
                      <Check size={15} className="shrink-0 mt-0.5 text-[#f2bf38] stroke-[3]" />
                      {pt}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section id="cta-section" className="relative py-20 px-6 bg-[#1E293B] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-slate-800 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FAD02C]/10 rounded-full filter blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
            Dharma Dental Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Comfort Meets Expert Care
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            For patients in Whitefield, our branch offers complete dental care with an emphasis on comfort, clarity, and quality treatment outcomes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-extrabold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
              <a href="/contact">Enquire Now</a>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="tel:+919030062369" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300">
              <PhoneCall className="w-5 h-5 text-[#FBBF24]" />
              Call Customer Care
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}