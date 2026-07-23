"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Sparkles, FolderSync, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: "Zero-Knowledge Encryption",
      familyOS: true,
      googleDrive: false,
      whatsapp: false,
      note: "Only you own the keys.",
    },
    {
      feature: "Intelligent OCR Parsing",
      familyOS: true,
      googleDrive: false,
      whatsapp: false,
      note: "Reads files on upload.",
    },
    {
      feature: "Automatic Expiry Tracking",
      familyOS: true,
      googleDrive: false,
      whatsapp: false,
      note: "Passive warnings & notifications.",
    },
    {
      feature: "Semantic Assistant Querying",
      familyOS: true,
      googleDrive: false,
      whatsapp: false,
      note: "Context-aware document search.",
    },
    {
      feature: "Emergency Read Access",
      familyOS: true,
      googleDrive: false,
      whatsapp: false,
      note: "Custom delegation keys.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Strategic Comparison
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            A vault built for families, not just storage.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Compare FamilyOS against standard cloud directories and chat archives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[640px] p-1.5 rounded-2xl bg-white/5 border border-white/5 shadow-2xl">
            <table className="w-full border-collapse text-left text-xs font-medium text-slate-300">
              <thead>
                <tr className="border-b border-white/5 text-slate-500 font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6 text-slate-400">Capabilities</th>
                  <th className="py-4 px-6 text-white text-sm font-bold bg-brand-blue/15 border-x border-brand-blue/20">
                    FamilyOS
                  </th>
                  <th className="py-4 px-6">Traditional Cloud</th>
                  <th className="py-4 px-6">Chat Archives</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4.5 px-6 font-semibold text-white">
                      <div className="flex flex-col gap-0.5">
                        <span>{row.feature}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{row.note}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 bg-brand-blue/5 border-x border-brand-blue/10">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue mx-auto">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-center">
                      {row.googleDrive ? (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400 mx-auto">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 text-red-500/50 mx-auto">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </td>
                    <td className="py-4.5 px-6 text-center">
                      {row.whatsapp ? (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400 mx-auto">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 text-red-500/50 mx-auto">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/5">
          <div className="flex gap-4">
            <div className="p-3 h-fit rounded-xl bg-white/5 border border-white/10 text-brand-blue">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm font-semibold text-white">Sovereign Data Control</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No telemetry tracking, no document resale, and zero exposure to large public cloud models.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 h-fit rounded-xl bg-white/5 border border-white/10 text-brand-violet">
              <FolderSync className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm font-semibold text-white">Passive Organization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Files are cataloged, analyzed, and tagged on ingestion. No manual folder layouts or sorting needed.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 h-fit rounded-xl bg-white/5 border border-white/10 text-brand-blue-glow">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm font-semibold text-white">Expiration Warning Matrix</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stay ahead of critical dates (passports, driver licenses, property tax, contracts) automatically.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
