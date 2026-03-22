"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LightPillButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
}

/**
 * BRAND PILL BUTTON (Light Background Version)
 * Optimized for White/Light sections with added depth.
 *
 * Usage:
 *   // As a link (recommended for navigation):
 *   <LightPillButton text="Book Your Exam" href="/booking" />
 *
 *   // As a button (for actions):
 *   <LightPillButton text="Book Your Exam" onClick={() => handleBooking()} />
 */
const LightPillButton = ({ text = "Book Your Exam", href, onClick }: LightPillButtonProps) => {
  const inner = (
    <>
      {/* Button Text */}
      <span className="relative z-10 text-black font-bold text-lg transition-colors duration-300 group-hover:text-black tracking-wider">
        {text}
      </span>

      {/* Animated Icon */}
      <motion.div
        variants={{ hover: { x: 5 } }}
        className="relative z-10 text-[#FDC700] group-hover:text-black transition-colors duration-300"
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>

      {/* Background Fill Animation */}
      <motion.div
        variants={{ hover: { x: 0 } }}
        initial={{ x: "-100%" }}
        transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
        className="absolute inset-0 bg-[#FDC700]"
      />

      {/* Subtle Ambient Glow on Hover */}
      <motion.div
        variants={{ hover: { opacity: 0.25, scale: 1.1 } }}
        initial={{ opacity: 0, scale: 1 }}
        className="absolute inset-0 bg-[#FDC700] blur-xl -z-10"
      />
    </>
  );

  const sharedClassName =
    "group relative px-10 py-4 rounded-full border-2 border-[#FDC700]  bg-[#fff085] overflow-hidden flex items-center gap-3 shadow-[0_4px_14px_0_rgba(253,199,0,0.2)] hover:shadow-[0_6px_20px_rgba(253,199,0,0.3)] transition-shadow duration-300";

  if (href) {
    return (
      <motion.div whileHover="hover" whileTap={{ scale: 0.96 }} className="inline-flex">
        <Link href={href} className={sharedClassName}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className={sharedClassName}
    >
      {inner}
    </motion.button>
  );
};

export default LightPillButton;