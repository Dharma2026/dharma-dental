'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Plus } from 'lucide-react';
import Image from 'next/image';

type SocialType = 'facebook' | 'twitter' | 'instagram' | 'linkedin';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: SocialType[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Johan Joe',
    role: 'Lead Dentist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500',
    socials: ['facebook', 'twitter', 'instagram'],
  },
  {
    id: 2,
    name: 'Dr. Mike Johnson',
    role: 'Senior Dentist',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    socials: ['facebook', 'twitter', 'instagram'],
  },
  {
    id: 3,
    name: 'Dr. Alison Benson',
    role: 'Orthodontist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71f153912d?auto=format&fit=crop&q=80&w=400&h=500',
    socials: ['facebook', 'twitter', 'instagram'],
  },
  {
    id: 4,
    name: 'Dr. Christopher Case',
    role: 'Periodontist',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500',
    socials: ['facebook', 'twitter', 'instagram'],
  },
];

function SocialIcon({ type }: { type: SocialType }) {
  const iconProps = { size: 18, className: 'text-white' };
  switch (type) {
    case 'facebook':
      return <Facebook {...iconProps} />;
    case 'twitter':
      return <Twitter {...iconProps} />;
    case 'instagram':
      return <Instagram {...iconProps} />;
    default:
      return <Linkedin {...iconProps} />;
  }
}

function TeamCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      {/* Image Container */}
      <div
        className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#E8F1F8] mb-6 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />

        {/* Overlay with Social Icons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10"
            >
              {member.socials.map((social, idx) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-10 h-10 rounded-full bg-[#0e0e0e] backdrop-blur-md flex items-center justify-center hover:bg-[#fdc700] transition-colors border border-white/30"
                >
                  <SocialIcon type={social} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Section */}
      <div className="text-center space-y-1">
        <h3 className="text-xl font-bold text-[#1E293B]">{member.name}</h3>
        <p className="text-[#64748B] font-medium tracking-wide">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-[#F0F7FF] py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-7xl mx-auto relative">

        {/* Decorative Background Icons */}
        <div className="absolute top-0 left-0 text-blue-200/50 -translate-x-12 -translate-y-8 animate-pulse">
          <Plus size={48} strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 right-0 text-blue-200/50 translate-x-8 translate-y-8 animate-bounce delay-700">
          <Plus size={32} strokeWidth={1} />
        </div>
        <div className="absolute top-1/4 right-0 text-blue-300/30 animate-pulse hidden md:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" />
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-[#2563EB] text-sm font-bold tracking-[0.2em] uppercase">
              + Our Team
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0F172A]"
          >
            Our Friendly <span className="text-[#2563EB]">Dentists</span> Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We are committed to sustainability, eco-friendly initiatives, and providing
            the best dental care experience for our patients.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}