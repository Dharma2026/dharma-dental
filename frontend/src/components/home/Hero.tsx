'use client';
import { motion } from "framer-motion";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Star,
  ShieldCheck,
  Users,
  Building2,
  Clock
} from 'lucide-react';

interface StatBoxProps {
  number: string;
  label: string;
  icon: React.ReactElement;
}

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    "Advanced Digital Treatments",
    "Personalized Patient Care",
    "Commitment to Maximum Comfort"
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-hidden flex flex-col pb-20 pt-38">
      
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />


      {/* --- Main Content Grid --- */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-8 pb-12 lg:pt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT COLUMN: Content */}
        <div className={`flex flex-col space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          
            {/* Badge */}
            <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center self-start gap-2 px-5 py-2.5 border border-slate-900/10 rounded-full mb-8 bg-[#ffe586]"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    New In Bengaluru
                  </span>
                </motion.div>

          {/* Headlines */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-4">
              Growing to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad01] to-[#f5e502]">
                Serve You Better.
              </span>
            </h1>
            <p className="text-lg font-medium text-slate-800 mb-2">
              10 Clinics in Hyderabad, 5 New Clinics in Bangalore
            </p>
            <p className="text-slate-500 leading-relaxed max-w-md">
              Expert care and pain-free smiles are now always within reach from the best dental clinic chain in the region.
            </p>
          </div>

          {/* Feature List (Vertical for clarity) */}
          <div className="space-y-3">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-[#ffeba5] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-[#9e7e09]" />
                </div>
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/book-appointment">
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer md:w-auto mr-2 group flex items-center justify-center gap-3 bg-[#fdc700] text-slate-900 px-8 py-5 rounded-xl font-bold text-sm shadow-xl hover:shadow-[#FAE01A]/20 transition-all"
              >
                ENQUIRE NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          {/* Stats Divider Line */}
          <div className="w-full h-px bg-[#f7de83] my-4" />

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <StatBox number="15+" label="Branches" icon={<Building2 size={16} />} />
            <StatBox number="22+" label="Years Exp" icon={<Clock size={16} />} />
            <StatBox number="25k+" label="Implants" icon={<ShieldCheck size={16} />} />
            <StatBox number="2L" label="Patients" icon={<Users size={16} />} />
          </div>

        </div>

        {/* RIGHT COLUMN: Visuals */}
        <div className={`relative h-full min-h-[500px]  lg:block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          {/* Main Image with unique shape */}
          <div className="absolute top-0 right-0 w-[90%] h-[85%] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 z-10">
            <Image 
              src="/home/hero/Dh1.webp" 
              alt="Modern Dental Equipment"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Overlay Gradient for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>

          {/* Secondary Overlapping Image (Creates depth) */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[30px] overflow-hidden shadow-xl border-4 border-white z-20">
            <Image 
              src="/home/hero/Dh2.webp" 
              alt="Happy Patient"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>

          {/* Floating 'Trusted' Badge */}
          <div className="absolute top-12 left-0 z-30 animate-float">
            <div className="bg-white/95 backdrop-blur-sm p-4 pr-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <Star className="fill-yellow-600" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Trusted By</p>
                <p className="text-sm font-bold text-slate-800">International Dental</p>
              </div>
            </div>
          </div>

          {/* Decorative Dot Grid */}
          <div className="absolute top-[-20px] right-[-20px] z-0">
            <div className="grid grid-cols-6 gap-2 opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
              ))}
            </div>
          </div>

        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Sub-component for stats to keep main code clean
const StatBox: React.FC<StatBoxProps> = ({ number, label, icon }) => (
  <div className="flex flex-col items-start group cursor-default">
    <div className="text-slate-400 mb-1 group-hover:text-[#fdc700] transition-colors">
      {icon}
    </div>
    <div className="text-2xl font-bold text-slate-900 leading-none mb-1">{number}</div>
    <div className="text-xs font-medium text-slate-500">{label}</div>
  </div>
);

export default HeroSection;