"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Stars } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy-deep flex flex-col items-center justify-center px-6 relative overflow-hidden grid-bg">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-violet/10 blur-[130px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-blue/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-md w-full text-center flex flex-col items-center gap-8 z-10">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-violet relative"
        >
          <ShieldAlert className="w-8 h-8" />
          <span className="absolute inset-0 bg-brand-violet/20 blur-md rounded-2xl -z-10"></span>
        </motion.div>

        {/* Text Headers */}
        <div className="flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase"
          >
            Error Code: 404_PAGE_NOT_FOUND
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white font-sans tracking-tight"
          >
            Requested Resource Encrypted or Lost
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-slate-400 leading-relaxed mt-2"
          >
            The route or file path you attempted to access is either non-existent, has been purged, or belongs to a different zero-knowledge vault directory.
          </motion.p>
        </div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full"
        >
          <Link
            href="/"
            className="w-full py-3.5 rounded-lg bg-white hover:bg-slate-200 text-brand-navy-deep font-semibold text-sm transition-all flex items-center justify-center gap-2 group shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Return to Safe Zone
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
