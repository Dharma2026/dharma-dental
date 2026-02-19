'use client';

// components/contact/ContactClient.tsx
import ContactHero from '@/components/contact/Contacthero';
import ContactForm from '@/components/contact/Contactform';
import ContactClinics from '@/components/contact/Contactclinics';
import ContactCTA from '@/components/contact/Contactcta';

export default function ContactClient() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. Hero banner with headline and quick-contact pills */}
      <ContactHero />

      {/* 2. Appointment form + contact info sidebar */}
      
          <ContactForm />
      
      <ContactCTA />
      {/* 3. All clinic location cards */}
      <ContactClinics />

      {/* 4. Emergency CTA strip */}
   
    </main>
  );
}