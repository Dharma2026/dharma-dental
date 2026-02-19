"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, SmilePlus } from 'lucide-react';

/**
 * Reusable Button Wrapper
 * Handles whether to render a standard link or a regular button.
 * Note: In a real Next.js environment, you can replace <a> with <Link> from 'next/link'.
 */

const ToothIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2C8.5 2 6.5 3.5 6 6.5c-.5 3 0 4.5 0 4.5-.5 3.5-3.5 4-3.5 7.5 0 2 1 3.5 3.5 3.5 1.5 0 2.5-1 3.5-2.5.5-1 1.5-1 2.5-1s2 0 2.5 1c1 1.5 2 2.5 3.5 2.5 2.5 0 3.5-1.5 3.5-3.5 0-3.5-3-4-3.5-7.5 0 0 .5-1.5 0-4.5C17.5 3.5 15.5 2 12 2z" />
    <path d="M12 2v6" />
    <path d="M10 13a2 2 0 0 0 4 0" />
  </svg>
);
const ButtonWrapper = ({ 
  href, 
  onClick, 
  children, 
  className 
}) => {
  if (href) {
    return (
      <a href={href} className={className} style={{ textDecoration: 'none' }}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// 1. SHIMMER BUTTON
export const ShimmerButton = ({ 
  label, 
  href, 
  onClick, 
  icon: Icon = ToothIcon, 
  className = "" 
}) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
    <ButtonWrapper
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg group flex items-center gap-2 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label} <Icon size={18} />
      </span>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
      />
    </ButtonWrapper>
  </motion.div>
);

// 2. ARROW SLIDE BUTTON
export const ArrowButton = ({ 
  label, 
  href, 
  onClick, 
  className = "" 
}) => (
  <motion.div whileHover="hover" className="inline-block">
    <ButtonWrapper
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 
      transition-colors duration-300  text-gray-900 font-bold rounded-full shadow-lg overflow-hidden ${className}`}
    >
      <span>{label}</span>
      <motion.div variants={{ hover: { x: 5, scale: 1.2 } }}>
        <ArrowRight size={20} />
      </motion.div>
    </ButtonWrapper>
  </motion.div>
);

// 3. GLOW PULSE BUTTON
export const GlowButton = ({ 
  label, 
  href, 
  onClick, 
  icon: Icon = Phone, 
  className = "" 
}) => (
  <motion.div
    animate={{ 
      boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 20px rgba(59, 130, 246, 0.5)", "0px 0px 0px rgba(59, 130, 246, 0)"] 
    }}
    transition={{ repeat: Infinity, duration: 2 }}
    whileHover={{ scale: 1.05 }}
    className="inline-block"
  >
    <ButtonWrapper
      href={href}
      onClick={onClick}
      className={`px-8 py-4 bg-white border-2 border-blue-500 text-blue-600 font-bold rounded-xl flex items-center gap-2 ${className}`}
    >
      <Icon size={18} /> {label}
    </ButtonWrapper>
  </motion.div>
);

// --- DEMO PAGE ---
const AnimatedButtonsDemo = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center gap-12 font-sans">
      <h2 className="text-3xl font-bold text-gray-800">Reusable Button Library</h2>
      
      <div className="flex flex-wrap justify-center gap-8 items-center">
        <ShimmerButton 
          label="Go to Appointment Page" 
          href="/appointments" 
        />
        
        <ArrowButton 
          label="Console Log Demo" 
          onClick={() => console.log("Button clicked!")} 
        />
        
        <GlowButton 
          label="Contact Us" 
          href="/contact" 
        />
      </div>

      <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-sm max-w-2xl w-full">
        <h3 className="font-bold mb-4 text-gray-700">Usage Examples:</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-1 font-mono">// To navigate to a page:</p>
            <code className="block bg-gray-100 p-2 rounded text-xs">
              {`<ShimmerButton label="Book Now" href="/booking" />`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButtonsDemo;