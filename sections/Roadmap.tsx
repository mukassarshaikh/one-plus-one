"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ChevronRight, CircleDot, Clock, ShieldAlert } from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1: Foundation",
      status: "released",
      title: "Core Document Vault & OCR",
      date: "Q1-Q2 2026",
      desc: "Client-side encrypted folder vaults, automatic high-fidelity document OCR, and custom AI chat querying.",
      items: ["Secure Document Vault", "Local Key Management", "Semantic Document Querying", "Zero-Knowledge Cloud Sync"],
    },
    {
      phase: "Phase 2: Automation",
      status: "active",
      title: "Smart Alerts & Multi-Device Sync",
      date: "Q3-Q4 2026",
      desc: "Passive date detection engine, automated SMS and email alerts, emergency shared accounts, and custom folder sharing.",
      items: ["Passport & License Tracking", "SMS/Email Notification Bridge", "Emergency Delegate Protocol", "Shared Link Vaults"],
    },
    {
      phase: "Phase 3: Integration",
      status: "upcoming",
      title: "Family Finance & Estate Coordination",
      date: "Q1-Q2 2027",
      desc: "Integrations with banking APIs for insurance deductible auditing, automated tax summary categorization, and trust plan updates.",
      items: ["Insurance Deductible Auditor", "Tax Document Reconciler", "Estate Plan Sync", "Subscription Ledger Audit"],
    },
    {
      phase: "Phase 4: Sovereign Identity",
      status: "upcoming",
      title: "Health & Education Records Vault",
      date: "H2 2027",
      desc: "Decentralized storage of immunization cards, medical charts, educational transcripts, and encrypted sovereign government IDs.",
      items: ["Health Record Syncing", "Degree & Transcript Vault", "Zero-Knowledge ID Verifications", "Offline Recovery Protocol"],
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-violet/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet-glow">
            Company Path
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            A deliberate roadmap to family digital safety.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            We are playing the long game, carefully constructing security layers for your family&apos;s administrative records.
          </p>
        </div>

        {/* Roadmap Items List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-16 flex flex-col gap-16">
          
          {roadmapItems.map((item, idx) => {
            const isReleased = item.status === "released";
            const isActive = item.status === "active";
            
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Connector Dot */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1 flex items-center justify-center">
                  {isReleased ? (
                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center text-brand-blue bg-brand-navy-deep">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  ) : isActive ? (
                    <div className="w-6 h-6 rounded-full bg-brand-violet/20 border border-brand-violet flex items-center justify-center text-brand-violet bg-brand-navy-deep animate-pulse">
                      <CircleDot className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 bg-brand-navy-deep">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Left Date Label (Desktop only) */}
                <div className="hidden md:block absolute -left-48 w-36 text-right font-mono text-xs font-semibold text-slate-500 top-1.5 uppercase">
                  {item.date}
                </div>

                {/* Card content */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.07] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column Description */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {item.phase}
                      </span>
                      <span className="text-[10px] font-mono text-brand-blue-glow uppercase tracking-wider md:hidden">
                        {item.date}
                      </span>
                      {isActive && (
                        <span className="text-[9px] font-semibold text-brand-violet-glow uppercase animate-pulse">
                          Active Phase
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white font-sans tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Column Features Checklist */}
                  <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {item.items.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${isReleased ? "text-brand-blue" : "text-slate-600"}`} />
                          <span className={isReleased ? "line-through text-slate-500" : ""}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
