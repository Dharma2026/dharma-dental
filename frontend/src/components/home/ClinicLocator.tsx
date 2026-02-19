'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Navigation, 
  Search, 
  ChevronDown,
  Info,
  Loader2
} from 'lucide-react';

/**
 * Interactive Clinic Locator Component
 * Features: Branch selection, embedded Google Maps, direct navigation links
 */

type BranchKey = 'sarjapur' | 'vanasthalipuram' | 'kondapur' | 'whitefield';

interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  directLink: string;
}

type ClinicDataType = Record<BranchKey, ClinicInfo>;

const CLINIC_DATA: ClinicDataType = {
  sarjapur: {
    name: "Dharma Dental - Sarjapur",
    address: "3rd Floor, Gurumurthy Reddy Complex, 5,, Sarjapur - Marathahalli Road, Janantha Colony, Doddakannelli,, Bengaluru, Karnataka 560035",
    phone: "+91 923 695 2369",
    email: "hydndc@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15559.336795255318!2d77.77862131151214!3d12.853983219269713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72e11fe62b7f%3A0x90fb58b42c41430f!2sSarjapura%2C%20Bengaluru%2C%20Karnataka%20562125!5e0!3m2!1sen!2sin!4v1771443264108!5m2!1sen!2sin",
    directLink: "https://maps.app.goo.gl/HxLK9TaTaGxDuorz9"
  },
  vanasthalipuram: {
    name: "Dharma Dental - Vanasthalipuram",
    address: "2nd Floor, SANDEEP VIHAR, Sy No. 60, Above United Telugu Kitchen, Vanasthalipuram, Hyderabad, Telangana 500070",
    phone: "+91 903 005 2369",
    email: "hydndc@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30448.160177594233!2d78.34900150204741!3d17.45875576134091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ddb58d1b49%3A0xcfcead772f6ce1c9!2sGoogle%20Hyderabad!5e0!3m2!1sen!2sin!4v1771287765992!5m2!1sen!2sin",
    directLink: "https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7"
  },
  kondapur: {
    name: "Dharma Dental - Kondapur",
    address: "Block 1, DivyaSree Omega Survey No 13, Kothaguda, Telangana 500084",
    phone: "+91 903 006 2369",
    email: "kondapurndc@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30448.160177594233!2d78.34900150204741!3d17.45875576134091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ddb58d1b49%3A0xcfcead772f6ce1c9!2sGoogle%20Hyderabad!5e0!3m2!1sen!2sin!4v1771287765992!5m2!1sen!2sin",
    directLink: "https://maps.app.goo.gl/B7Hp29dSk2G9iMMD7"
  },
  whitefield: {
    name: "Dharma Dental - Whitefield",
    address: "ITPL Main Rd, near Hope Farm Circle, Whitefield, Bengaluru, Karnataka 560066",
    phone: "+91 923 888 2369",
    email: "whitefieldndc@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888!2d77.75!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i2k!4m5!3s0x3bae11!2sWhitefield!5e0!3m2!1sen!2sin!4v1707810000000!5m2!1sen!2sin",
    directLink: "https://maps.app.goo.gl/YV9W67w3Fm2S8C7v7"
  }
};

export default function ClinicLocator() {
  const [selectedBranch, setSelectedBranch] = useState<BranchKey>('sarjapur');
  const [isMapLoading, setIsMapLoading] = useState(true);
  const branch = CLINIC_DATA[selectedBranch];

  // Reset loading state when branch changes
  useEffect(() => {
    setIsMapLoading(true);
  }, [selectedBranch]);

  const handleGetDirections = () => {
    window.open(branch.directLink, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = `tel:${branch.phone}`;
  };

  return (
    <section className="bg-white py-20 px-6 font-sans overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-yellow-500">
              <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                <Search size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
                Find a Clinic <span className="text-yellow-500">Near You</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-md">
              Select your preferred branch to see location details and get navigation.
            </p>
          </div>

          {/* SELECTOR BOX */}
          <div className="relative group w-full md:w-80">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value as BranchKey)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 px-6 py-4 rounded-2xl focus:outline-none focus:border-yellow-500 transition-all cursor-pointer font-bold tracking-wide shadow-sm"
            >
              <option value="sarjapur">Sarjapur Clinic</option>
              <option value="vanasthalipuram">Vanasthalipuram Clinic</option>
              <option value="kondapur">Kondapur Clinic</option>
              <option value="whitefield">Whitefield Clinic</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-yellow-500 transition-colors">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT: DETAILS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <motion.h3 
                  layoutId="clinicName"
                  className="text-4xl font-black text-slate-900 mb-6 leading-tight"
                >
                  {branch.name}
                </motion.h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 mt-1 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <a 
                      href={`tel:${branch.phone}`} 
                      className="text-slate-700 text-xl font-bold hover:text-yellow-500 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <a 
                      href={`mailto:${branch.email}`} 
                      className="text-slate-600 text-lg hover:text-yellow-500 transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetDirections}
                  className="bg-yellow-500 text-black cursor-pointer px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 transition-colors"
                >
                  <Navigation size={20} fill="currentColor" />
                  GET DIRECTIONS
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCall}
                  className="bg-slate-900 cursor-pointer text-white px-8 py-4 rounded-full font-black flex items-center gap-3 border border-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Phone size={20} />
                  CALL NOW
                </motion.button>
              </div>

              {/* OPERATING HOURS */}
              <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Info size={20} className="text-yellow-500" />
                  <h4 className="text-slate-900 font-bold">Operating Hours</h4>
                </div>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-bold text-slate-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold text-yellow-500">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT: MAP VISUAL */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50 aspect-square lg:aspect-video xl:aspect-square">
            
            {/* Map Indicator */}
            <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Interactive Map</span>
            </div>

            {/* Loading Spinner */}
            {isMapLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                <Loader2 className="animate-spin mb-2" size={32} />
                <span className="text-xs font-bold uppercase tracking-tighter">Loading Maps...</span>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <iframe
                  title={`${branch.name} Location`}
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  onLoad={() => setIsMapLoading(false)}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-opacity duration-1000"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Subtle Overlay Shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.06)]" />
          </div>

        </div>
      </div>
    </section>
  );
}