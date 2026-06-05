"use client"
import React from 'react';
import { Home, ChevronRight, Camera, Star } from 'lucide-react';

/**
 * GalleryPage - A responsive gallery page for Dharma Dental.
 * Includes breadcrumbs, a high-padding hero section, and a responsive grid.
 */
export default function App() {
  const galleryItems = [
    { id: 1, title: 'Dental Implants', src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Teeth Whitening', src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Orthodontics', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Cosmetic Dentistry', src: 'https://plus.unsplash.com/premium_photo-1682097288491-7e926a30cd0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section with extra top padding */}
      <section className="pt-30 lg:pt-50 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-6 font-medium">
            <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
              <Home size={16} className="mr-1" /> Home
            </a>
            <ChevronRight size={16} />
            <span className="text-blue-600">Gallery</span>
          </nav>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Our Smile Gallery
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Explore our recent success stories and see the transformative results of our dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Star className="text-blue-500 fill-blue-500" size={18} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}