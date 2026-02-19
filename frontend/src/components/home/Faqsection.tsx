'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Plus, 
  Minus, 
  PhoneCall, 
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';

/**
 * Premium Dental FAQ Section - Elevated Card Style (Next.js)
 * Features:
 * - Off-white background with pure white active cards
 * - Deep Blue "Premium Support Hub" with glassmorphism
 * - Numbered FAQ items for better visual hierarchy
 * - Interactive hover and focus states
 */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What are the best ways to improve my smile?",
    answer: "If your teeth are healthy but look stained or discoloured, teeth whitening is a great option. For gaps, crowding, or misalignment, clear aligners can gradually straighten your smile. If teeth are chipped, uneven, or worn down, veneers, laminates, or composite bonding can reshape them."
  },
  {
    question: "How can I get a smile makeover and be sure I will love the results?",
    answer: "We use Digital Smile Design technology to show you a preview of your results before treatment begins. Our doctors work closely with you to understand your aesthetic goals, ensuring the final result looks natural and beautiful."
  },
  {
    question: "What is orthodontic treatment and why is it important?",
    answer: "Orthodontic treatment involves correcting misaligned teeth and jaws. It's important not just for a beautiful smile, but also for better oral health, as straight teeth are easier to clean and prevent uneven wear on tooth surfaces."
  },
  {
    question: "What is the role of a dental clinic in treating bad breath and bleeding gums?",
    answer: "Bleeding gums are often a sign of gingivitis or gum disease. Our professional cleanings and specialized gum treatments remove tartar and bacteria that brushing alone can't reach, addressing the root cause."
  },
  {
    question: "How do I choose the best dental clinic for my oral care needs?",
    answer: "Look for clinics with experienced specialists across all dental fields, modern technology (like 3D imaging), strict hygiene protocols, and positive patient reviews."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, index, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? "#ffffff" : "transparent",
        boxShadow: isOpen ? "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" : "none",
        scale: isOpen ? 1.02 : 1
      }}
      className={`rounded-[2rem] border transition-all duration-300 ${isOpen ? 'border-yellow-100' : 'border-transparent'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-6 flex items-start gap-6 text-left group"
      >
        <span className={`text-2xl font-black tracking-tighter transition-colors ${isOpen ? 'text-yellow-500' : 'text-slate-200'}`}>
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div className="flex-1">
          <span className={`text-lg font-bold block transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
            {question}
          </span>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-slate-500 leading-relaxed text-sm md:text-base">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`shrink-0 p-2 rounded-xl transition-all ${isOpen ? 'bg-yellow-400 text-black' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
    </motion.div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#fdfcec] py-24 px-6 font-sans overflow-hidden min-h-[80%]">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP INTRO (Mobile Centered) */}
        <div className="lg:hidden text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
            <HelpCircle size={14} /> Knowledge Hub
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
            Dental <span className="text-yellow-500">Concierge</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Sidebar Support Hub */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            <div className="hidden lg:block space-y-6">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Expert answers for <br />
                <span className="text-[#f0b100] underline decoration-yellow-400 underline-offset-8">your smile.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                Get clarity on the treatments and care plans that best suit your personal goals.
              </p>
            </div>

            {/* DARK BLUE EMERGENCY CARD */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-[3rem] bg-[#0c162d] text-white shadow-2xl shadow-blue-900/20 overflow-hidden group border border-blue-500/10"
            >
              {/* Subtle mesh background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-10 -mt-10" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-lg shadow-yellow-400/20">
                    <PhoneCall size={26} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-400">
                    Priority Care
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-yellow-400 font-black text-2xl tracking-tighter uppercase leading-none">24/7 Emergency</h4>
                  <p className="text-slate-400 text-sm font-medium">We always take care of your smile</p>
                </div>

                <div className="space-y-1 pt-2">
                  <a 
                    href="tel:+919876543210" 
                    className="text-3xl font-black tracking-tight text-white hover:text-yellow-400 transition-colors block"
                  >
                    +91 987654 3210
                  </a>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                    <Zap size={10} className="text-yellow-500" fill="currentColor" />
                    Instant Consultation
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full cursor-pointer py-4 bg-[#fdc700] text-black hover:bg-[#f8e089] rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
                    Contact Support <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={140} />
              </div>
            </motion.div>

            {/* DOCTOR AVATARS */}
            
          </div>

          {/* RIGHT COLUMN: Elevated Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white/40 p-2 rounded-[2.5rem] border border-white">
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>      
          </div>
        </div>
      </div>
    </section>
  );
}