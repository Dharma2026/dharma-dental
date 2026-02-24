'use client';

// components/contact/AboutClient.tsx
import TeamHero from '@/components/team/TeamHero';
import TeamSection from '@/components/team/TeamSection';

export default function ContactClient() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. Hero banner with headline and quick-contact pills */}
      <TeamHero/>
     <TeamSection/>
    </main>
  );
}