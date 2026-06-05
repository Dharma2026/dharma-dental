"use client"
import React from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Palette, 
  Smile, 
  Stethoscope, 
  CheckCircle2,
  Brush,
  Zap,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

const CosmeticDentistryPage = () => {
  const services = [
    { title: "Teeth whitening", icon: <Sparkles className="w-6 h-6 text-[#8B6E1C]" /> },
    { title: "Smile design planning", icon: <Palette className="w-6 h-6 text-[#8B6E1C]" /> },
    { title: "Tooth reshaping and contouring", icon: <Zap className="w-6 h-6 text-[#8B6E1C]" /> },
    { title: "Aesthetic restorations", icon: <Brush className="w-6 h-6 text-[#8B6E1C]" /> },
    { title: "Smile enhancement consultations", icon: <Stethoscope className="w-6 h-6 text-[#8B6E1C]" /> },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-700 antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO SECTION */}
      {/* Fix: bg-gradient-to-b → bg-linear-to-b (Tailwind v4 canonical) */}
      <section className="relative pt-30 pb-20 md:pt-50 md:pb-28 bg-linear-to-b from-[#2D343F] to-[#1E293B] text-white overflow-hidden">
        {/* Brand golden glow effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FAD02C] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FEEB9E] rounded-full opacity-5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumbs cleanly placed above the grid */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-12 border-b border-white/5 pb-4">
            <a href="#home" className="hover:text-[#FBBF24] transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <a href="#treatments" className="hover:text-[#FBBF24] transition-colors">Treatments</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-[#FBBF24]">Cosmetic Dentistry</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEEB9E]/10 text-[#FBBF24] rounded-full text-xs font-bold tracking-widest uppercase border border-[#FAD02C]/20">
                <span className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></span>
                Aesthetic Dentistry
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Cosmetic <span className="text-[#FBBF24]">Dentistry</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-[#FBBF24] pl-6">
              Cosmetic dentistry helps improve the look of your smile while keeping it healthy and natural. At Dharma Dental Care, we offer aesthetic treatments that are designed to enhance confidence without making your smile look artificial.              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="group flex items-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-bold py-4 px-8 rounded-full shadow-lg shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
                  Book Appointment
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                {/* <a href="#benefits-section" className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300">
                  Explore Benefits
                </a> */}
              </div>
            </div>
            {/* Right Hero Visuals */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* Fix: max-w-[420px] → max-w-105 (Tailwind v4 canonical) */}
              <div className="relative mx-auto max-w-105 lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl border border-dashed border-white/10 p-4"></div>
                
                {/* Fix: aspect-[4/5] → aspect-4/5 | TypeScript fix: cast e.target to HTMLImageElement */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-4/5 bg-slate-800 border-4 border-slate-700">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1674575134708-d7991d4078b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Dental Implant Consult" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://plus.unsplash.com/premium_photo-1674575134708-d7991d4078b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FEEB9E] rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-[#8B6E1C]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">Elegant & Confident Smiles</p>
                        <p className="text-xs text-slate-400">Personalized Cosmetic Enhancements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* SECTION 2: INTRO SECTION */}
      <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-20 h-20 bg-[#FEEB9E]/50 rounded-full flex items-center justify-center border border-[#FAD02C]/30 shadow-inner">
                <Smile className="w-9 h-9 text-[#8B6E1C] animate-pulse" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1E293B]">Smile Makeovers Designed Around You</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              A brighter, more balanced smile can make a real difference in how you feel day to day. Whether you want to correct discoloration, reshape teeth, or improve overall harmony, we create treatment plans based on your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] mb-12 text-center">Our Cosmetic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FEEB9E] rounded-xl flex items-center justify-center flex-shrink-0">{s.icon}</div>
                <p className="font-bold text-[#1E293B]">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLE SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold text-[#1E293B]">Results That Feel Like You</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We aim for results that suit your face, teeth, and natural expression. Good cosmetic dentistry should improve your smile in a way that still feels like you.
          </p>
        </div>
      </section>

      {/* SECTION 5: CTA SECTION */}
      <section id="cta-section" className="relative py-20 px-6 bg-[#1E293B] text-white overflow-hidden text-center">
        {/* Fix: bg-gradient-to-r → bg-linear-to-r | w-[600px] → w-150 | h-[600px] → h-150 (Tailwind v4 canonical) */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-slate-800 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FAD02C]/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
            Dharma Dental Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Ready for a Smile Upgrade?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            If you are looking for a durable tooth replacement option, dental implants may be the right choice. Book a consultation at Dharma Dental Care to explore your options.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CTA Main Button */}
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-extrabold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
            <a href="/contact">
              Enquire Now
              </a>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            {/* Contact Call Support */}
            <a href="tel:+1234567890" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300">
              <PhoneCall className="w-5 h-5 text-[#FBBF24]" />
              Call Customer Care
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmeticDentistryPage;