"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I want to say thank you to my doctor Steve! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus. Thank you for helping me overcome my fear of the dentist! Vivamus sagittis massa vitae bibendum rhoncus. Duis cursus.",
    author: "Robert Lee",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    text: "The best dental experience I've ever had. The team is incredibly professional and the results are life-changing. I highly recommend their services to anyone looking for quality care.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    text: "Exceptional service from start to finish. They explained every procedure clearly and made sure I was comfortable throughout. My smile has never looked better!",
    author: "Michael Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="flex items-center justify-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-widest">
            <span className="text-lg">+</span> TESTIMONIAL
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3a5a]">
            What our <span className="text-[#1a3a5a]">Client Say</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We are committed to sustainability, eco-friendly initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image with Rating Card */}
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-0">
              <img 
                src="/Home/testimonial/testimonials-img.jpg" 
                alt="Patient treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Rating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-4 md:left-8 z-20 bg-[#2b89b8] text-white p-8 rounded-[25px] shadow-2xl max-w-[280px]"
            >
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold leading-none">4.7/5</span>
                <span className="text-xs opacity-80 leading-tight pb-1">
                  This rate is given by user after visiting our location
                </span>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-white/40"} />
                  ))}
                </div>
                <span className="text-xs font-semibold tracking-wide uppercase">
                  For Excellence Services
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Slider Content */}
          <div className="relative lg:pl-12">
            <div className="mb-8">
              <Quote className="w-16 h-16 text-blue-100 rotate-180" />
            </div>

            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-50"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#1a3a5a]">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;