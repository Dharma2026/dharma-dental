'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Star, 
  Play, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Video, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

/**
 * Premium Testimonials Component
 * Features a functional slider for both Text and Video reviews.
 * Optimized for single-slide mobile viewing.
 */

interface TextReview {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

interface VideoReview {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  videoUrl?: string;
}

const TEXT_REVIEWS: TextReview[] = [
  {
    id: 1,
    name: "Gayathri",
    location: "Hyderabad",
    rating: 5,
    text: "I had a very pleasant experience at Dharma Dental (KPHB). I went for a general checkup. They are highly trained and very professional staff and doctors. The way they speak, the way they dressed is very professional. I felt safe and comfortable. I would rate it as the cleanest and best maintained dental hospital in Hyderabad.",
    image: "/home/reviews/reviews.webp"
  },
  {
    id: 2,
    name: "Sandeep Kumar",
    location: "Bengaluru",
    rating: 4.9,
    text: "Excellent treatment for root canal. The doctors explained the procedure clearly and it was virtually painless. The clinic environment is very calming and high-tech. Highly recommended for anyone looking for quality dental care.",
    image: "/home/reviews/reviews.webp"
  }
];

const VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 1,
    title: "Root Canal Treatment & Crown",
    thumbnail: "/home/reviews/reviews.webp",
    duration: "2:15"
  },
  {
    id: 2,
    title: "Patient Review | Happy Smile",
    thumbnail: "/home/reviews/reviews.webp",
    duration: "1:45"
  },
  {
    id: 3,
    title: "Patient Testimonial | Dharma Dental",
    thumbnail: "/home/reviews/reviews.webp",
    duration: "3:10"
  },
  {
    id: 4,
    title: "Invisible Braces Success",
    thumbnail: "/home/reviews/reviews.webp",
    duration: "2:50"
  },
  {
    id: 5,
    title: "Full Mouth Rehab Journey",
    thumbnail: "/home/reviews/reviews.webp",
    duration: "4:20"
  }
];

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ size?: number }>;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon: Icon, children }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
      active ? "text-black" : "text-slate-400 hover:text-white"
    }`}
  >
    <Icon size={16} />
    {children}
    {active && (
      <motion.div
        layoutId="tab-bg"
        className="absolute inset-0 bg-yellow-400 rounded-full -z-10"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </button>
);

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<'text' | 'video'>('text');
  const [textIndex, setTextIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Text Slider Logic
  const nextText = () => setTextIndex((prev) => (prev + 1) % TEXT_REVIEWS.length);
  const prevText = () => setTextIndex((prev) => (prev - 1 + TEXT_REVIEWS.length) % TEXT_REVIEWS.length);

  // Video Slider Logic
  const nextVideo = () => {
    setVideoIndex((prev) => {
      const max = isMobile ? VIDEO_REVIEWS.length - 1 : VIDEO_REVIEWS.length - 3;
      return prev >= max ? 0 : prev + 1;
    });
  };

  const prevVideo = () => {
    setVideoIndex((prev) => {
      const max = isMobile ? VIDEO_REVIEWS.length - 1 : VIDEO_REVIEWS.length - 3;
      return prev <= 0 ? Math.max(0, max) : prev - 1;
    });
  };

  return (
    <section className="bg-slate-950 py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER & TABS */}
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            Patient <span className="text-yellow-400">Testimonials</span>
          </h2>
          
          <div className="inline-flex items-center bg-slate-900/50 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
            <TabButton 
              active={activeTab === 'text'} 
              onClick={() => setActiveTab('text')}
              icon={MessageSquare}
            >
              Text Reviews
            </TabButton>
            <TabButton 
              active={activeTab === 'video'} 
              onClick={() => setActiveTab('video')}
              icon={Video}
            >
              Video Reviews
            </TabButton>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="min-h-[500px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'text' ? (
              <motion.div
                key="text-tab"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Left: Featured Image/Rating */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-[3rem] overflow-hidden border-8 border-slate-900 shadow-2xl">
                    <motion.div
                      key={textIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative w-full h-[450px]"
                    >
                      <Image 
                        src={TEXT_REVIEWS[textIndex].image} 
                        alt={TEXT_REVIEWS[textIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Rating Badge */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-[2rem] shadow-2xl flex flex-col items-center border border-slate-100 z-20"
                  >
                    <span className="text-4xl font-black text-slate-900">{TEXT_REVIEWS[textIndex].rating}/5</span>
                    <div className="flex gap-1 text-yellow-500 my-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Excellence Services</span>
                  </motion.div>
                </div>

                {/* Right: Testimonial Text */}
                <div className="lg:col-span-7 space-y-8 lg:pl-10">
                  <div className="text-yellow-400/20">
                    <Quote size={80} fill="currentColor" />
                  </div>
                  
                  <motion.p 
                    key={textIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-slate-300 text-xl leading-relaxed italic font-serif"
                  >
                    &ldquo;{TEXT_REVIEWS[textIndex].text}&rdquo;
                  </motion.p>

                  <div className="flex items-center justify-between border-t border-slate-900 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl uppercase">
                        {TEXT_REVIEWS[textIndex].name[0]}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{TEXT_REVIEWS[textIndex].name}</h4>
                        <p className="text-slate-500 text-sm uppercase tracking-widest">{TEXT_REVIEWS[textIndex].location}</p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      <button 
                        onClick={prevText} 
                        className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
                        aria-label="Previous review"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={nextText} 
                        className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
                        aria-label="Next review"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video-tab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Video Track Container */}
                <div className="overflow-hidden py-4">
                  <motion.div 
                    animate={{ x: `-${videoIndex * (isMobile ? 100 : 33.33)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex"
                  >
                    {VIDEO_REVIEWS.map((video) => (
                      <div 
                        key={video.id} 
                        className="w-full md:w-1/3 flex-shrink-0 px-4 group"
                      >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 mb-6 shadow-2xl bg-slate-900">
                          <Image 
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/30 cursor-pointer"
                              aria-label={`Play ${video.title}`}
                            >
                              <Play size={24} fill="currentColor" />
                            </motion.button>
                          </div>

                          <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex justify-between items-start pr-2">
                          <h4 className="text-white font-bold group-hover:text-yellow-400 transition-colors">{video.title}</h4>
                          <ArrowUpRight size={18} className="text-slate-600 group-hover:text-yellow-400 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Control Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8 border-t border-slate-900 pt-8">
                  {/* Progress Line */}
                  <div className="flex-1 w-full max-w-xs bg-slate-900 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-yellow-400"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: `${((videoIndex + 1) / VIDEO_REVIEWS.length) * 100}%` 
                      }}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={prevVideo} 
                      className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all active:scale-95"
                      aria-label="Previous videos"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextVideo} 
                      className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all active:scale-95"
                      aria-label="Next videos"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}