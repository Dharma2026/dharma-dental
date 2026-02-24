'use client';

// components/contact/AboutClient.tsx
import AboutHero from '@/components/about/AboutHero';
import Aboutsection from '@/components/about/AboutSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import Testimonials from '@/components/about/Testimonials';

export default function ContactClient() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. Hero banner with headline and quick-contact pills */}
      <AboutHero />
      <Aboutsection/>
      <WhatWeDoSection/>
      <WhyChooseUsSection/>
      <Testimonials/>
    </main>
  );
}