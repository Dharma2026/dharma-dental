import React from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  Activity, 
  PhoneCall,
  CheckCircle2,
  Award
} from 'lucide-react';

const OurDoctorsPage = () => {
  const doctors = [
    {
      name: "Dharma Prasad",
      specialty: "Chief Dentist & Oral Implantologist",
      bio: "Dr. Dharma Prasad is committed to delivering gentle, effective dental care with attention to detail and patient comfort. With experience in oral implantology and restorative dentistry, the doctor focuses on creating treatment plans that are simple to understand and tailored to each patient's needs.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Ananya Rao",
      specialty: "Pediatric & Conservative Dentist",
      bio: "Dr. Ananya Rao is committed to delivering gentle, effective dental care with attention to detail and patient comfort. With experience in pediatric dentistry and preventative care, the doctor focuses on creating treatment plans that are simple to understand and tailored to each patient's needs.",
      image: "https://plus.unsplash.com/premium_photo-1661777828441-986ac014eb74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Our Doctors
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Meet <span className="text-[#FBBF24]">Our Doctors</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-[#FBBF24] pl-6">
                Our doctors combine clinical skill with a calm, patient-centered approach to help every individual feel at ease. At Dharma Dental Care, your treatment is planned by professionals who focus on accuracy, comfort, and long-term results.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="group flex items-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-bold py-4 px-8 rounded-full shadow-lg shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
                  Book Appointment
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                {/* <a href="#doctors-list" className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300">
                  View Doctor Profiles
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
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                    alt="Dental Experts Dharma Dental Care" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      // FIX: cast EventTarget → HTMLImageElement (line 81)
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FEEB9E] rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-[#8B6E1C]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">Certified Professionals</p>
                        <p className="text-xs text-slate-400">Committed to Clinical Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TEAM INTRO */}
      <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-20 h-20 bg-[#FEEB9E]/50 rounded-full flex items-center justify-center border border-[#FAD02C]/30 shadow-inner">
                <Users className="w-9 h-9 text-[#8B6E1C] animate-pulse" />
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1E293B]">Behind Every Healthy Smile</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Behind every healthy smile is a team that listens carefully, diagnoses thoughtfully, and treats with precision. Our doctors work closely together to ensure you receive the right treatment at the right time, without unnecessary procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DOCTOR PROFILE TEMPLATE SECTION */}
      <section id="doctors-list" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#8B6E1C] bg-[#FEEB9E] px-4 py-1.5 rounded-full uppercase">Our Specialists</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
              Meet Our Dental Team
            </h2>
            <div className="w-16 h-1 bg-[#FBBF24] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {doctors.map((doc, idx) => (
              // FIX: rounded-[2rem] → rounded-4xl
              <div key={idx} className="bg-white rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 p-8 flex flex-col md:flex-row gap-8 items-center group">
                
                {/* Doctor Avatar */}
                <div className="shrink-0 w-44 h-44 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 relative">
                  <img 
                    src={doc.image} 
                    alt={`Dr. ${doc.name}`} 
                    // FIX: grayscale-[20%] → grayscale-20
                    className="object-cover w-full h-full grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      // FIX: cast EventTarget → HTMLImageElement (line 146)
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Doctor+Profile';
                    }}
                  />
                </div>

                {/* Profile Details */}
                <div className="space-y-4 flex-1 text-center md:text-left">
                  <div>
                    <span className="text-sm font-bold text-[#8B6E1C] bg-[#FEEB9E] px-3 py-1 rounded-full uppercase tracking-wider">
                      {doc.specialty}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1E293B] mt-2">Dr. {doc.name}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {doc.bio}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: VALUES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          
          {/* FIX: bg-gradient-to-br → bg-linear-to-br */}
          <div className="bg-linear-to-br from-[#2D343F] to-[#1E293B] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAD02C] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start space-y-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                <div className="w-16 h-16 bg-[#FEEB9E]/10 border border-[#FAD02C]/20 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-9 h-9 text-[#FBBF24]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#FBBF24]">Our Clinical Values</h3>
              </div>
              
              <div className="md:col-span-8 space-y-6">
                <p className="text-xl text-slate-200 leading-relaxed font-light">
                  Our team believes in doing what is best for the patient, not what is easiest. That means honest opinions, clear treatment options, and care that supports both immediate relief and long-term oral health.
                </p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-slate-300 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FAD02C]" />
                    <span>Honest Opinions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FAD02C]" />
                    <span>Clear Options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FAD02C]" />
                    <span>Long-Term Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CTA SECTION */}
      <section id="cta-section" className="relative py-20 px-6 bg-[#1E293B] text-white overflow-hidden text-center">
        {/* FIX: bg-gradient-to-r → bg-linear-to-r */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 to-slate-800 opacity-60"></div>
        {/* FIX: w-[600px] → w-150, h-[600px] → h-150 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FAD02C]/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
            Visit Dharma Dental Care
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Meet the People Who Make Your Smile Journey Easier
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            If you are looking for a dental team that combines experience with a warm, approachable style, our doctors are here to help. Visit Dharma Dental Care and meet the people who make your smile journey easier.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FEEB9E] hover:bg-[#FAD02C] text-[#1E293B] font-extrabold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#FBBF24]">
            <a href="/contact">
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

export default OurDoctorsPage;

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
          <span className="hover:text-white cursor-pointer">ABOUT US</span>
          <span className="text-[#FBBF24] cursor-pointer font-bold border-b-2 border-[#FBBF24] pb-1">OUR DOCTORS</span>
          <span className="hover:text-white cursor-pointer">TREATMENTS</span>
        </div>
      </nav>

      <OurDoctorsPage />

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