"use client"
import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  Phone, 
  Clock, 
  MapPin, 
  MessageSquare,
  Bookmark,
  CheckCircle,
  X,
  FileText,
  Activity,
  Heart
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 1,
    category: "General",
    question: "How often should I visit the dentist?",
    answer: "Most people benefit from a dental check-up every six months, although some may need more frequent visits depending on their oral health needs."
  },
  {
    id: 2,
    category: "Treatments",
    question: "Is root canal treatment painful?",
    answer: "Modern root canal treatment is usually much more comfortable than people expect. The purpose of the procedure is actually to remove infection and relieve pain."
  },
  {
    id: 3,
    category: "Treatments",
    question: "Are dental implants a permanent solution?",
    answer: "Dental implants are designed as a long-term tooth replacement option and can last for many years when cared for properly."
  },
  {
    id: 4,
    category: "Treatments",
    question: "What is the difference between braces and clear aligners?",
    answer: "Braces use fixed attachments to move teeth, while clear aligners are removable and more discreet. The best choice depends on your dental condition and treatment goals."
  },
  {
    id: 5,
    category: "Kids Care",
    question: "Do you treat children at Dharma Dental Care?",
    answer: "Yes, we offer child-friendly dental care and focus on making children feel comfortable during their visits."
  },
  {
    id: 6,
    category: "Appointments",
    question: "Can I visit any branch for treatment?",
    answer: "Yes, patients can choose the most convenient branch based on location and appointment availability."
  },
  {
    id: 7,
    category: "Appointments",
    question: "Do I need an appointment before visiting?",
    answer: "Appointments are recommended because they help reduce waiting time and allow the team to prepare better for your consultation."
  },
  {
    id: 8,
    category: "Treatments",
    question: "What treatments do you offer?",
    answer: "We provide general dentistry, pediatric dentistry, root canals, implants, orthodontics, clear aligners, cosmetic dentistry, and other routine and advanced dental services.dharmadentalcare"
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', time: 'Morning (9 AM - 1 PM)' });

  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: number | null) => {
    setOpenId(openId === id ? null : id);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const closeModal = () => {
    setIsBookingOpen(false);
    setBookingSubmitted(false);
    setFormData({ name: '', phone: '', time: 'Morning (9 AM - 1 PM)' });
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-white font-sans antialiased selection:bg-[#f2bf38] selection:text-slate-900 overflow-x-hidden">
      
      {}
      <header className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-36 bg-linear-to-b from-[#070b19] to-[#0e1428] border-b border-slate-900">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-200 h-200 bg-linear-to-b from-[#f2bf38]/5 to-transparent rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="mb-16 lg:mb-24 flex items-center gap-2.5 text-xs text-slate-400 font-semibold tracking-wider uppercase">
            <span className="hover:text-[#f2bf38] cursor-pointer transition-colors">Home</span>
            <ChevronRight size={12} className="text-slate-600 stroke-3" />
            <span className="hover:text-[#f2bf38] cursor-pointer transition-colors">Resources</span>
            <ChevronRight size={12} className="text-slate-600 stroke-3" />
            <span className="text-[#f2bf38]">FAQs</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="inline-flex items-center gap-2.5 bg-[#f2bf38]/10 border border-[#f2bf38]/20 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#f2bf38] animate-pulse"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#f2bf38] uppercase">Dharma Dental Care Support</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase">
                  Frequently <br />
                  <span className="text-[#f2bf38]">Asked Questions</span>
                </h1>
                
                <div className="w-20 h-1.5 bg-[#f2bf38] rounded-full"></div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal border-l-2 border-[#f2bf38]/40 pl-5 py-2">
                We know patients often have questions before booking a dental visit, especially when treatment sounds unfamiliar or urgent. Our FAQ section is designed to answer common concerns in a simple and reassuring way.dharmadentalcare
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#f2bf38] hover:bg-amber-500 text-slate-950 font-black py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-[#f2bf38]/20 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Schedule Consultation <ChevronRight size={15} className="stroke-3" />
                </button>
                <a 
                  href="#faq-accordion-section"
                  className="border-2 border-slate-800 hover:border-[#f2bf38]/65 hover:text-white text-slate-300 font-bold py-4 px-8 rounded-full transition-all duration-300 text-xs uppercase tracking-widest flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
                >
                  Explore FAQ List
                </a>
              </div>

            </div>

            <div className="lg:col-span-5">
              
              <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f24] p-2 shadow-2xl transition-all duration-300 hover:border-[#f2bf38]/60 hover:shadow-amber-500/10">
                
                <div className="relative h-72 w-full rounded-xl bg-[#030611] border border-slate-900 overflow-hidden flex flex-col justify-between p-4 group-hover:border-slate-800 transition-colors">
                  
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-950/20 via-sky-900/10 to-transparent pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono tracking-widest text-[#f2bf38] font-bold uppercase bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#f2bf38] rounded-full animate-pulse"></span>
                      DDC CLINICAL CASE STUDIES
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase">CASE REF: image_73a11d.jpg</span>
                  </div>

                  <div className="absolute inset-x-8 top-16 bottom-16 opacity-30 flex items-center justify-around pointer-events-none">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className="h-full w-8 bg-linear-to-b from-sky-400/40 to-transparent rounded-t-md border-x border-t border-sky-300/30 flex flex-col justify-end p-0.5">
                        <div className="h-1/2 w-full bg-slate-900/80 rounded border-t border-dashed border-sky-400/30"></div>
                      </div>
                    ))}
                    <div className="absolute h-3/4 w-1 border-l border-dashed border-[#f2bf38] opacity-50"></div>
                  </div>

                  <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-start gap-1">
                    <div className="bg-[#f2bf38]/10 text-[#f2bf38] text-[9px] font-mono font-bold border border-[#f2bf38]/20 px-2 py-0.5 rounded flex items-center gap-1">
                      <Activity size={10} className="animate-pulse" /> OPTIMAL STRUCTURAL PLAN
                    </div>
                    <span className="w-16 h-px bg-dashed border-t border-slate-700"></span>
                  </div>

                  <div className="z-10 flex items-end justify-between border-t border-slate-900/80 pt-3 mt-auto">
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-black uppercase text-slate-300">Dental Restorations Index</p>
                      <p className="text-[9px] font-mono text-slate-500">Root-Level Diagnostic Accuracy • Verified Info</p>
                    </div>
                    <div className="bg-slate-950/80 px-2.5 py-1.5 rounded border border-slate-800 text-[10px] font-mono text-[#f2bf38] font-bold">
                      DDC-REF-01
                    </div>
                  </div>

                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#f2bf38] shrink-0">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Transparent Pre-Appointment Resources</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                        Our specialized material helps address dental anxiety, providing you with full clinical clarity before step-one diagnostic consultations.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-[#050711] p-2.5 rounded-xl border border-slate-900">
                    <div className="p-2 border border-slate-800/40 rounded-lg text-center bg-slate-950/40">
                      <p className="text-[13px] font-black text-[#f2bf38]">100%</p>
                      <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider">Clinical Honesty</span>
                    </div>
                    <div className="p-2 border border-slate-800/40 rounded-lg text-center bg-slate-950/40">
                      <p className="text-[13px] font-black text-white">No-Wait</p>
                      <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider">Fast Check-In</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#050711] px-4 py-2.5 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
                  <span>Layout Standards:</span>
                  <span className="font-mono text-[#f2bf38] group-hover:underline">image_73a11d.jpg Reference</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </header>

      <section className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 -mt-10 sm:-mt-16 text-slate-900 relative overflow-hidden transition-all duration-300 hover:shadow-amber-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2bf38]/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
              
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-inner">
                <Bookmark className="text-[#f2bf38]" size={28} strokeWidth={2.5} />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#f2bf38] font-black">Information Portal</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Patient Comfort</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                  Transparent Answers for Peaceful Visits
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium italic border-l-4 border-[#f2bf38] pl-4 py-1">
                  We believe that informed patients make the most relaxed decisions. Browse through our categorized index below to address your core clinical questions or search for custom topics.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="faq-accordion-section" className="py-24 sm:py-32 bg-[#070b19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3 max-w-2xl mx-auto">
            <div className="inline-block bg-[#f2bf38]/10 border border-[#f2bf38]/20 px-3 py-1 rounded-full">
              <span className="text-[10px] font-bold tracking-widest text-[#f2bf38] uppercase">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
              Browse Common Patient Concerns
            </h2>
            <div className="w-16 h-1 bg-[#f2bf38] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-[#0e1428] rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search questions (e.g. pain, root canal, kids...)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#070b19] border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f2bf38] focus:ring-1 focus:ring-[#f2bf38] transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {["All", "General", "Treatments", "Appointments", "Kids Care"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                      selectedCategory === category 
                        ? "bg-[#f2bf38] border-[#f2bf38] text-slate-950 shadow-md shadow-[#f2bf38]/10" 
                        : "bg-[#070b19] border-slate-800 text-slate-400 hover:text-white hover:border-[#f2bf38]/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

            </div>

            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, index) => {
                  const isOpen = openId === item.id;
                  return (
                    <div 
                      key={item.id}
                      className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-amber-500/5 group"
                    >
                      <button 
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-amber-50 text-[#f2bf38] flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-amber-100 transition-colors">
                            {index + 1}
                          </span>
                          <span className="text-slate-900 text-sm sm:text-base font-extrabold leading-relaxed">
                            {item.question}
                          </span>
                        </div>
                        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#f2bf38] bg-slate-50 border-[#f2bf38]/35" : ""}`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>

                      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"}`}>
                        <div className="p-6 bg-[#fafbfc] text-slate-750 text-sm sm:text-base font-medium leading-relaxed text-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                          <p className="flex-1">
                            {item.answer}
                          </p>
                          <div className="flex items-center gap-1.5 shrink-0 bg-white border border-slate-100 px-3 py-1.5 rounded-md text-[10px] font-black uppercase text-slate-400 tracking-wider">
                            <span>{item.category}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f2bf38]"></span>
                            <span>dharmadentalcare</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-[#0e1428] rounded-2xl p-12 text-center border border-slate-800 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mx-auto">
                    <HelpCircle size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase">No Questions Found</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    We couldn&apos;t find any questions matching your query &ldquo;{searchQuery}&rdquo;. Try typing in general search tags or reset categories.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 bg-[#0e1428] border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#070b19] rounded-3xl border border-slate-800 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2bf38]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              <div className="md:col-span-4 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0e1428] flex items-center justify-center text-[#f2bf38] border border-slate-800">
                  <MessageSquare size={24} className="stroke-2" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-[#f2bf38] tracking-widest block">Closing Section</span>
                  <h4 className="text-2xl font-black text-white mt-1 leading-tight uppercase">Ready to Assist</h4>
                </div>
              </div>

              <div className="md:col-span-8 space-y-6 md:border-l md:border-slate-800/80 md:pl-10">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  This FAQ section helps reduce hesitation and gives patients the confidence to take the next step toward treatment. It also works well as a trust-building element on service and contact pages.dharmadentalcare
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-bold text-[#f2bf38] pt-2">
                  <span className="flex items-center gap-2">
                    <CheckCircle size={15} className="stroke-3 text-emerald-400" /> Build Trust
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle size={15} className="stroke-3 text-emerald-400" /> Clear Explanations
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle size={15} className="stroke-3 text-emerald-400" /> Confident Choices
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-24 bg-[#070b19]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#f2bf38]/10 border border-[#f2bf38]/20 px-4 py-1.5 rounded-full">
              <Phone className="text-[#f2bf38]" size={14} />
              <span className="text-[11px] font-bold tracking-widest text-[#f2bf38] uppercase">Clinical Hotlines</span>
            </div>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto leading-tight uppercase">
            Still Have Questions? Connect With Us
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto font-normal border-y border-slate-900 py-8">
            If your question is not listed here, or you would like to discuss clinical details with a specialist, contact our coordinating desk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left max-w-4xl mx-auto pt-4">
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Dharma+Dental+Care+Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e1428] p-6 rounded-2xl border border-slate-800 hover:border-[#f2bf38]/40 transition-all group block"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[#f2bf38] text-[10px] uppercase font-extrabold tracking-wider block">Find a Branch</span>
                <ChevronRight size={12} className="text-slate-500 group-hover:text-[#f2bf38] transition-colors" />
              </div>
              <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                Rayadurgam | Vanasthalipuram | Kondapur | Whitefield Locations
              </p>
            </a>

            <div className="bg-[#0e1428] p-6 rounded-2xl border border-slate-800">
              <span className="text-[#f2bf38] text-[10px] uppercase font-extrabold tracking-wider block mb-2">Support Helpline</span>
              <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                Phone: +91 903 555 2359 <br />
                Email: support@dharmadentalcare.com
              </p>
            </div>

            <div className="bg-[#0e1428] p-6 rounded-2xl border border-slate-800 sm:col-span-2 md:col-span-1">
              <span className="text-[#f2bf38] text-[10px] uppercase font-extrabold tracking-wider block mb-2">Operation Hours</span>
              <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                Monday - Saturday <br />
                9:00 AM to 8:00 PM (IST)
              </p>
            </div>

          </div>

        </div>
      </section>

      {isBookingOpen && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0e1428] rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-800 transition-all transform scale-100">
            
            <div className="bg-[#070b19] p-6 relative border-b border-slate-900">
              <h3 className="text-lg font-black uppercase text-white">Schedule Consultation</h3>
              <p className="text-[#f2bf38] text-[10px] font-bold mt-1 uppercase tracking-wider">Fast-Track Consultation Registry</p>
              <button 
                onClick={closeModal} 
                className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {!bookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Anand Kumar" 
                      className="w-full bg-[#070b19] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#f2bf38] focus:ring-1 focus:ring-[#f2bf38]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. +91 98765 43210" 
                      className="w-full bg-[#070b19] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#f2bf38] focus:ring-1 focus:ring-[#f2bf38]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Preferred Time Slot</label>
                    <div className="relative">
                      <select 
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full bg-[#070b19] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f2bf38] focus:ring-1 focus:ring-[#f2bf38] appearance-none cursor-pointer"
                      >
                        <option>Morning (9 AM - 1 PM)</option>
                        <option>Afternoon (1 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#f2bf38] hover:bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-full transition-all duration-300 mt-2 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#f2bf38]/15"
                  >
                    Confirm Consultation Slot <ChevronRight size={15} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-[#f2bf38] mb-2">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-lg font-black text-white uppercase">Consultation Slot Requested</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our clinical coordinate office will connect with you at <strong className="text-white">{formData.phone}</strong> shortly to align your appointment request.
                  </p>
                  <button 
                    onClick={closeModal} 
                    className="mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}