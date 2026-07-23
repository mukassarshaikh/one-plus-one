"use client";

import { motion } from "framer-motion";
import {
  FolderLock,
  Sparkles,
  ScanEye,
  Search,
  Hourglass,
  BellRing,
  Users,
  KeyRound,
  Share2,
  BrainCircuit,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Secure Document Vault",
      description: "Store your family's critical records in a zero-knowledge virtual vault protected by local private keys.",
      icon: FolderLock,
      tag: "Security",
    },
    {
      title: "AI Document Understanding",
      description: "Ask natural language questions about deductibles, executors, policy dates, and asset schedules.",
      icon: BrainCircuit,
      tag: "AI intelligence",
    },
    {
      title: "High-Fidelity OCR Scanning",
      description: "Automatically read structured text from scanned PDFs, photos, and handwritten estate notes.",
      icon: ScanEye,
      tag: "OCR Engine",
    },
    {
      title: "Intelligent Semantic Search",
      description: "Search documents not just by filename, but by actual concepts, text paragraphs, and metadata.",
      icon: Search,
      tag: "Core Search",
    },
    {
      title: "Expiry & Deadline Tracking",
      description: "Identify expiration dates in passports, leases, and policies, automatically tracking upcoming deadlines.",
      icon: Hourglass,
      tag: "Automation",
    },
    {
      title: "Smart Alerts & Notifications",
      description: "Get subtle notifications via SMS, email, or Slack integrations when documents are close to expiring.",
      icon: BellRing,
      tag: "Alerts",
    },
    {
      title: "Family Collaboration",
      description: "Assign folders, set custom edit permissions, and grant reading keys to specific family members.",
      icon: Users,
      tag: "Co-owner",
    },
    {
      title: "Emergency Document Access",
      description: "Establish designated emergency contacts who can request vault access after strict verification procedures.",
      icon: KeyRound,
      tag: "Safety Net",
    },
    {
      title: "Secure Encrypted Sharing",
      description: "Share single files or folders with bank officers, doctors, or lawyers via self-destructing links.",
      icon: Share2,
      tag: "Vault Share",
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet-glow">
            Vault Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-2xl leading-tight">
            Handcrafted tools for comprehensive document control.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Every feature is engineered to put security first, providing intelligent assistance without sacrificing user ownership.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-brand-blue transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-semibold font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white font-sans mb-2 tracking-tight">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
