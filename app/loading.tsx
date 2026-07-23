"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy-deep flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      {/* Centered Animated Brand Symbol */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-brand-blue"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: [0, 1, 1], rotate: [-90, 270, 630] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner Plus Symbol */}
          <motion.path
            d="M50 35V65M35 50H65"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
        <span className="absolute inset-0 bg-brand-blue/20 blur-lg rounded-full -z-10 animate-ping"></span>
      </div>

      {/* Loading copy text */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          Zero-Knowledge Session
        </span>
        <p className="text-sm font-semibold text-slate-300 animate-pulse">
          Decrypting secure workspace layers...
        </p>
      </div>
    </div>
  );
}
