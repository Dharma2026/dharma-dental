// app/page.tsx
import Link from 'next/link';
import Hero from '@/components/home/Hero';

import HeroSection from '@/components/home/HeroSection';
import SliderServices from '@/components/home/SliderServices';
import DentalAboutSection from '@/components/home/DentalAboutSection';
import Testimonials from '@/components/home/Testimonials';
import ClinicLocator from '@/components/home/ClinicLocator';
import Appointmentbar from '@/components/home/Appointmentbar';
import Beforeaftergallery from '@/components/home/Beforeaftergallery';
import Faqsection from '@/components/home/Faqsection';
import Blogsection  from '@/components/home/Blogsection';

export default function HomePage() {
  return (
    <>
    <Hero/>
    <Appointmentbar/>
     {/* Services Slider Section - NEW */}
 <SliderServices/>
 
 <DentalAboutSection />
 <Beforeaftergallery/>
 <Testimonials/>
 <ClinicLocator/>
 <Faqsection />
 <Blogsection/>
</>
  );
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}