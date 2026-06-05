"use client"
import React from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Activity, 
  PhoneCall,
  CheckCircle2,
  Smile,
  Stethoscope,
  Eye,
  RefreshCw
} from 'lucide-react';

const ClearAlignersPage = () => {
  const whyChoose = [
    {
      text: "Mild to moderate alignment concerns.",
      icon: <Activity className="w-6 h-6 text-[#8B6E1C]" />
    },
    {
      text: "Patients who prefer a more aesthetic option.",
      icon: <Eye className="w-6 h-6 text-[#8B6E1C]" />
    },
    {
      text: "Those who want easier brushing and flossing.",
      icon: <Smile className="w-6 h-6 text-[#8B6E1C]" />
    },
    {
      text: "Adults and professionals looking for discreet treatment.",
      icon: <ShieldCheck className="w-6 h-6 text-[#8B6E1C]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-700 antialiased overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-30 pb-20 md:pt-50 md:pb-28 bg-gradient-to-b from-[#2D343F] to-[#1E293B] text-white overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FAD02C] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FEEB9E] rounded-full opacity-5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-12 border-b border-white/5 pb-4">
            <a href="#home" className="hover:text-[#FBBF24] transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <a href="#treatments" className="hover:text-[#FBBF24] transition-colors">Treatments</a>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-[#FBBF24]">Clear Aligners</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEEB9E]/10 text-[#FBBF24] rounded-full text-xs font-bold tracking-widest uppercase border border-[#FAD02C]/20">
                <span className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></span>
                Discreet Alignment
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Clear <span className="text-[#FBBF24]">Aligners</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-[#FBBF24] pl-6">
                Clear aligners offer a modern way to straighten teeth with a more discreet and comfortable look. At Dharma Dental Care, we provide aligner treatment for patients who want effective alignment with less visible hardware.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="group flex items-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-bold py-4 px-8 rounded-full shadow-lg shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
                  Book Consultation
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
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
                    src="https://plus.unsplash.com/premium_photo-1744085660498-884a75c35303?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Dental Implant Consult" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://plus.unsplash.com/premium_photo-1744085660498-884a75c35303?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FEEB9E] rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-[#8B6E1C]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">Seamless & Clear Alignment</p>
                        <p className="text-xs text-slate-400">Comfortable Teeth Straightening</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-20 h-20 bg-[#FEEB9E]/50 rounded-full flex items-center justify-center border border-[#FAD02C]/30 shadow-inner">
                <RefreshCw className="w-9 h-9 text-[#8B6E1C]" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1E293B]">Alignment That Fits Your Life</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Many patients prefer clear aligners because they fit naturally into everyday life. They are removable, easy to maintain, and often a great option for people who want a subtle orthodontic solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">Why Choose Aligners</h2>
            <div className="w-16 h-1 bg-[#FBBF24] rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="w-12 h-12 mb-6 bg-[#FEEB9E] rounded-xl flex items-center justify-center">{item.icon}</div>
                <p className="font-bold text-[#1E293B]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACH */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#2D343F] to-[#1E293B] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl">
          <h3 className="text-2xl font-extrabold text-[#FBBF24] mb-6">Treatment Approach</h3>
          <p className="text-lg text-slate-200 leading-relaxed">
            We assess your teeth carefully before recommending aligner treatment, because every case is different. Our focus is on predictable planning, regular tracking, and results that look natural and feel comfortable.
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
          Begin Your Alignment Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          If you want straighter teeth without the look of traditional braces, clear aligners may be the right fit. Visit Dharma Dental Care for a personalized smile alignment consultation.
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

export default ClearAlignersPage;