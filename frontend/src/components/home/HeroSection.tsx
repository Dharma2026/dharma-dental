'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Calendar, ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen bg-linear-to-br from-primary-50 via-white to-accent-light overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft"
            >
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-sm font-medium text-secondary">Trusted by 25k+ Happy Patients</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight"
            >
              NDC is Growing to{' '}
              <span className="text-primary relative">
                Serve you Better
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10"
                    stroke="#FFD700"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-gray-600 max-w-xl"
            >
              Your Trusted Care Partner With Top Class Dentists and Modern Technology.
              Experience world-class dental care with our team of experienced professionals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" icon={<Calendar />}>
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" icon={<ArrowRight />}>
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">22+</h3>
                <p className="text-sm text-gray-600">Expert Doctors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">25k+</h3>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for dental clinic image */}
              <div className="w-full h-full bg-linear-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                    <span className="text-6xl">🦷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Modern Dental Care</h3>
                  <p className="text-gray-600 mt-2">Replace with actual clinic image</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">98% Patient</p>
                    <p className="font-bold text-secondary">Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-gray-600">Safe & Hygienic</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Circle */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-4 border-primary-200 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
