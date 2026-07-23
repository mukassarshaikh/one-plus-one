"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, ScanEye, Lock, MessageSquareCode, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Secure Ingestion",
      shortDesc: "Upload documents easily via app drag-and-drop, email forwards, or WhatsApp integrations.",
      icon: UploadCloud,
      color: "text-brand-blue",
      visual: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-bg opacity-10" />
          <UploadCloud className="w-16 h-16 text-brand-blue animate-bounce-slow mb-4" />
          <p className="text-xs font-mono text-slate-400">Drag & drop files here</p>
          <div className="mt-4 flex gap-2">
            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-300">Will_2025.pdf</span>
            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-300">Passport_Sarah.jpg</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Zero-Knowledge OCR",
      shortDesc: "Our client-side and secure cloud pipelines analyze text structures, tags, and expiry dates without storing raw data.",
      icon: ScanEye,
      color: "text-brand-violet",
      visual: (
        <div className="w-full h-full flex flex-col justify-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="border border-white/10 rounded p-3 bg-brand-navy-deep/60 relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-violet animate-scan pointer-events-none" />
            <p className="text-[10px] font-mono text-slate-400 mb-1">Passport_Sarah.jpg</p>
            <p className="text-[11px] text-white font-medium">NAME: SARAH CORNER</p>
            <p className="text-[11px] text-white font-medium">PASSPORT NO: A-99238122</p>
            <p className="text-[11px] text-orange-400 font-medium">EXPIRATION DATE: OCT 12, 2028</p>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-brand-violet-glow font-semibold">
            <ScanEye className="w-3.5 h-3.5" />
            <span>AI identified: 1 Expiration Alert Created</span>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "AES-256 Vault Encryption",
      shortDesc: "Documents are double-sealed using client-managed private keys. OnePlus One servers never see your documents.",
      icon: Lock,
      color: "text-brand-blue-glow",
      visual: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-brand-blue/15 border border-brand-blue/35 flex items-center justify-center text-brand-blue mb-4">
            <Lock className="w-5 h-5" />
          </div>
          <div className="font-mono text-[9px] text-slate-500 max-w-xs text-center break-all select-none">
            U2FsdGVkX19sZjh3OWU4ZmxrYXM5OGFzZGZrbGpycWUzNDg5MDgyM2ZzZGE=
          </div>
          <span className="text-[10px] font-semibold text-green-400 mt-3">Double-Sealed Client Encryption</span>
        </div>
      ),
    },
    {
      num: "04",
      title: "Intelligent Assistant",
      shortDesc: "Ask complex natural language questions. Track expiry events and receive automated reminders via secure channels.",
      icon: MessageSquareCode,
      color: "text-brand-violet-glow",
      visual: (
        <div className="w-full h-full flex flex-col justify-end p-6 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="self-end px-3 py-1.5 rounded-lg bg-brand-blue text-white text-[11px]">
              When does Sarah&apos;s passport expire?
            </div>
            <div className="self-start px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-[11px]">
              Sarah&apos;s passport expires on Oct 12, 2028. I have added a notification to your calendar.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Architecture Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            From ingestion to insight, zero exposure.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Here is the process that ensures your family documents are readable only by you and accessible instantly.
          </p>
        </div>

        {/* Step Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Steps List - Col 5 */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                    isActive
                      ? "bg-white/5 border-white/15 shadow-md"
                      : "bg-transparent border-transparent hover:bg-white/5"
                  }`}
                >
                  <div className={`mt-1 font-mono text-xs font-bold ${step.color}`}>
                    {step.num}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Visual Sandbox - Col 7 */}
          <div className="lg:col-span-7 h-[360px] flex items-center justify-center p-2 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
            <div className="w-full h-full relative overflow-hidden bg-brand-navy-deep rounded-xl p-6">
              {/* Dynamic light stream effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {steps[activeStep].visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
