"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Stars, Users } from "lucide-react";
import InteractiveMockup from "@/components/InteractiveMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center grid-bg">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-violet/10 blur-[110px] rounded-full -z-10 animate-pulse-slow" />
      
      {/* Subtle Grid / Line Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030712_80%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12 z-10">
        
        {/* Flagship Product Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
        >
          <Stars className="w-3.5 h-3.5 text-brand-violet-glow animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
            Introducing FamilyOS — Flagship AI Vault
          </span>
          <ChevronRightIcon />
        </motion.div>

        {/* Large Typography Headline */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-sans"
          >
            Your Family&apos;s AI <br className="hidden md:block" />
            <span className="text-shimmer">Operating System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            FamilyOS creates a secure, zero-knowledge digital workspace powered by AI. Seamlessly organize, understand, and track all your family&apos;s critical documents in one place.
          </motion.p>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="https://family-os-one-plus-one.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-brand-navy-deep font-semibold text-sm hover:bg-slate-200 transition-all shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_40px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
          >
            Explore FamilyOS
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-semibold text-sm text-white text-center"
          >
            Join Waitlist
          </Link>
        </motion.div>

        {/* Security & Proof Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-2 text-xs text-slate-500 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>AES-256 Encryption</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-violet" />
            <span>Zero-Knowledge Security</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Stars className="w-4 h-4 text-brand-blue-glow" />
            <span>Intelligent OCR Parsing</span>
          </div>
        </motion.div>

        {/* Interactive Dashboard Mockup Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="w-full mt-8"
          id="familyos"
        >
          <div className="relative p-1 rounded-2xl bg-white/5 border border-white/5 shadow-2xl">
            {/* Top Light Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-2xl" />
            <InteractiveMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
