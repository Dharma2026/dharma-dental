'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Award,
  ShieldCheck 
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    "Innovative Solutions for Straight Teeth",
    "Comprehensive Clinic Services",
    "Detailed Dental Assessments"
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#fdfcec] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT COLUMN: Images & Badges --- */}
        <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} transition-all duration-1000 ease-out`}>
          
          {/* Background Decor: Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full z-0" />
          
          {/* Background Decor: Dots Pattern */}
          <div className="absolute -right-12 top-12 grid grid-cols-4 gap-2 opacity-30 z-0">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative z-10 rounded-tl-4xl rounded-br-4xl overflow-hidden border-[8px] border-white shadow-2xl shadow-slate-200 aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <Image 
              src="/p3.webp" 
              alt="Expert Dentist at Dharma Dental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating Badge 1: Red "Since" Seal (Top Right) */}
          <div className="absolute -top-4 -right-4 lg:right-8 z-20 animate-spin-slow">
            <div className="relative w-24 h-24 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg text-white">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full p-2 animate-spin-slow">
                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                  <textPath href="#curve" startOffset="0%">
                     • Genuine Care • Est. 2002
                  </textPath>
                </text>
              </svg>
              <Award size={28} />
            </div>
          </div>

          {/* Floating Badge 2: Blue "22 Years" Card (Bottom Left) */}
          <div className="absolute bottom-10 -left-6 lg:-left-12 z-20">
            <div className="bg-[#fdc700] text-black p-6 rounded-tr-[30px] rounded-bl-[30px] shadow-xl shadow-blue-900/20 flex items-center gap-4 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none">22+</p>
                <p className="text-sm font-medium text-black uppercase tracking-wide mt-1">Years of<br/>Experience</p>
              </div>
            </div>
          </div>
        </div>


        {/* --- RIGHT COLUMN: Content --- */}
        <div className={`flex flex-col space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-300 ease-out`}>
          
          {/* Header Section */}
          <div>
             {/* Badge */}
             <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-900/10 rounded-full mb-8 bg-[#ffe586]"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    About Us
                  </span>
                </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
              Looking for a Dentist to <br/>
              give you a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad01] to-[#f5e502]">Special Smile?</span>
            </h2>
          </div>

          <p className="text-slate-500 leading-relaxed text-lg">
            Our clinic was created to make your smile beautiful, healthy, and white. We offer a wide range of dental treatments and restoration services, with a focus on patient comfort and satisfaction.
          </p>

          {/* Inner Feature Box */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-slate-100 relative overflow-hidden group hover:bg-white hover:shadow-lg transition-all duration-300">
            {/* Left line decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#fdc700] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

            {/* Feature Image */}
            <div className="relative w-full sm:w-1/3 h-32 rounded-xl overflow-hidden shrink-0">
              <Image 
                src="/p3.webp" 
                alt="Dental Treatment at Dharma Dental"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>

            {/* Feature Text */}
            <div className="flex-1 space-y-3">
              <h3 className="font-bold text-slate-800 text-lg">The Right Choice For Quality Dental Service</h3>
              <ul className="space-y-2">
                {features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-[#fdc700] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            
            {/* CTA Button */}
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group cursor-pointer relative w-full px-8 py-4 bg-linear-to-r from-[#fdc700] to-[#f8c920] text-black rounded-full font-bold shadow-lg shadow-blue-500/25 overflow-hidden transition-all hover:shadow-blue-500/40 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  CONTACT WITH US <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#f8c920] to-[#fdc700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            {/* Trustpilot Widget */}
            <div className="flex items-center gap-3 border-l-2 border-slate-100 pl-6">
              <Star className="text-[#fdc700] fill-[#fdc700]" size={28} />
              <div>
                <div className="flex gap-0.5 text-[#fdc700] text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                </div>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  Trustpilot Rated <span className="text-slate-400 font-normal">4.9/5</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;