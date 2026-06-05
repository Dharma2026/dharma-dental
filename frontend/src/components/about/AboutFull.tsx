import React from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  ChevronRight, 
  Activity, 
  MessageCircle, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

const AboutUsPage = () => {
  const trustPoints = [
    {
      text: "Clear communication and transparent treatment planning.",
      icon: <MessageCircle className="w-5 h-5 text-[#8B6E1C]" />
    },
    {
      text: "Modern dental techniques focused on comfort and precision.",
      icon: <Sparkles className="w-5 h-5 text-[#8B6E1C]" />
    },
    {
      text: "A complete range of treatments under one roof.",
      icon: <Activity className="w-5 h-5 text-[#8B6E1C]" />
    },
    {
      text: "Care for children, adults, and seniors in a friendly environment.",
      icon: <Users className="w-5 h-5 text-[#8B6E1C]" />
    },
    {
      text: "A team that values ethical, long-lasting dental solutions.",
      icon: <ShieldCheck className="w-5 h-5 text-[#8B6E1C]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-700 antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO SECTION */}
      {/* FIX: bg-gradient-to-b → bg-linear-to-b */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-linear-to-b from-[#2D343F] to-[#1E293B] text-white overflow-hidden">
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FAD02C] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FEEB9E] rounded-full opacity-5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEEB9E]/10 text-[#FBBF24] rounded-full text-xs font-bold tracking-widest uppercase border border-[#FAD02C]/20">
                <span className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></span>
                About Us
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About <span className="text-[#FBBF24]">Dharma Dental</span> Care
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-[#FBBF24] pl-6">
                At Dharma Dental Care, we believe good dentistry is not just about treating teeth — it is about helping people feel comfortable, confident, and cared for at every visit. Our clinic brings together experience, modern technology, and a genuinely patient-first approach to deliver dental care you can trust.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="group flex items-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-bold py-4 px-8 rounded-full shadow-lg shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
                  Enquire Now
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                {/* <a href="#our-story" className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300">
                  Our Story & Approach
                </a> */}
              </div>
            </div>

            {/* Right Hero Visuals */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* FIX: max-w-[420px] → max-w-105 */}
              <div className="relative mx-auto max-w-105 lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl border border-dashed border-white/10 p-4"></div>
                
                {/* FIX: aspect-[4/5] → aspect-4/5 */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-4/5 bg-slate-800 border-4 border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                    alt="Dharma Dental Care" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // FIX: cast EventTarget to HTMLImageElement so .src is valid
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FEEB9E] rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-[#8B6E1C]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">Patient-First Dentistry</p>
                        <p className="text-xs text-slate-400">Exceptional, trusted care</p>
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
                <Heart className="w-9 h-9 text-[#8B6E1C] animate-pulse" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1E293B]">We Focus on Making Every Appointment Calm, Clear & Reassuring</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                We understand that visiting a dentist can feel stressful for some people, which is why we focus on making every appointment calm, clear, and reassuring. From the first consultation to the final follow-up, our team takes time to explain every step in simple language so you always know what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR STORY & APPROACH */}
      <section id="our-story" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Box: Our Story */}
            {/* FIX: rounded-[2rem] → rounded-4xl */}
            <div className="bg-white p-8 md:p-12 rounded-4xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#FEEB9E] rounded-xl flex items-center justify-center border border-[#FAD02C]">
                  <BookOpen className="w-6 h-6 text-[#8B6E1C]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1E293B]">Our Story</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Dharma Dental Care was built with one simple vision: to create a dental clinic where advanced treatment and compassionate care go hand in hand. Over time, we have grown into a trusted family dental clinic serving patients who want quality treatment, honest guidance, and long-term oral health support.
                </p>
              </div>
            </div>

            {/* Right Box: Our Approach */}
            {/* FIX: rounded-[2rem] → rounded-4xl */}
            <div className="bg-white p-8 md:p-12 rounded-4xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#FEEB9E] rounded-xl flex items-center justify-center border border-[#FAD02C]">
                  <Sparkles className="w-6 h-6 text-[#8B6E1C]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1E293B]">Our Approach</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Every smile is different, so we do not believe in one-size-fits-all dentistry. Instead, we customize each treatment plan based on your needs, your comfort, and your goals — whether that means restoring a tooth, improving alignment, or enhancing your smile.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: WHY PATIENTS TRUST US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#8B6E1C] bg-[#FEEB9E] px-4 py-1.5 rounded-full uppercase">Why Choose Dharma Dental</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
              Why Patients Trust Us
            </h2>
            <div className="w-16 h-1 bg-[#FBBF24] rounded-full mx-auto"></div>
          </div>

          {/* FIX: rounded-[2rem] → rounded-4xl */}
          <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-4xl border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="shrink-0 w-8 h-8 bg-[#FEEB9E] rounded-full flex items-center justify-center border border-[#FBBF24] mt-1 transition-transform group-hover:scale-105">
                    <CheckCircle2 className="w-5 h-5 text-[#8B6E1C]" />
                  </div>
                  <span className="text-lg font-semibold text-[#1E293B] pt-1 leading-snug">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CLOSING CTA */}
      <section id="cta-section" className="relative py-20 px-6 bg-[#1E293B] text-white overflow-hidden text-center">
        {/* FIX: bg-gradient-to-r → bg-linear-to-r */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-slate-800 opacity-60"></div>
        {/* FIX: w-[600px] → w-150, h-[600px] → h-150 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FAD02C]/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
            Dharma Dental Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Guidance with Care & Confidence
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you need a simple consultation or a complete smile transformation, Dharma Dental Care is here to guide you with care and confidence. Book your visit and experience dentistry that feels thoughtful, modern, and personal.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-extrabold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
            <a href="/contact" className=" items-center justify-center gap-3">
              Enquire Now
              </a>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
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

export default AboutUsPage;

export const App = () => {
  return (
    <div className="min-h-screen">
      <nav className="h-20 bg-[#2D343F] flex items-center justify-between px-6 md:px-12 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#2D343F] font-black text-xs">DDC</span>
          </div>
          <div className="text-white font-black tracking-tight text-lg">
            DHARMA <span className="text-[#FBBF24]">DENTAL</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-300">
          <span className="hover:text-white cursor-pointer">HOME</span>
          <span className="text-[#FBBF24] cursor-pointer font-bold border-b-2 border-[#FBBF24] pb-1">ABOUT US</span>
          <span className="hover:text-white cursor-pointer">TREATMENTS</span>
          <span className="hover:text-white cursor-pointer">GALLERY</span>
        </div>
      </nav>

      <AboutUsPage />

      <footer className="bg-[#2D343F] text-slate-400 py-12 px-6 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-bold text-white text-lg">Dharma Dental Care</p>
          <p className="text-sm">Providing advanced technology, hygiene, and expert care.</p>
          <div className="text-xs text-slate-500 pt-4 border-t border-slate-800/60">
            &copy; {new Date().getFullYear()} Dharma Dental Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};