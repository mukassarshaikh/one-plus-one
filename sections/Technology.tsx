"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Server, Cpu, Key } from "lucide-react";

export default function Technology() {
  const specs = [
    {
      title: "Zero-Knowledge Encryption",
      desc: "All decryption keys are generated and saved strictly inside your local browser or device storage. OnePlus One engineers have zero pathways to view, decrypt, or sell your documents.",
      icon: Key,
    },
    {
      title: "AES-256 & TLS 1.3 Standards",
      desc: "When syncing across family devices, files are chunked, salted, and encrypted utilizing industry-standard AES-256 before entering the transit pipeline secured by TLS 1.3.",
      icon: ShieldAlert,
    },
    {
      title: "Secure Local Processing",
      desc: "Where supported, OCR indexing and document metadata extraction run inside local sandboxes using specialized on-device models, avoiding remote server trips entirely.",
      icon: Cpu,
    },
    {
      title: "Distributed Data Stores",
      desc: "Encrypted shards are saved redundantly across isolated cloud clusters, assuring immediate document access even during major infrastructure outages or node failures.",
      icon: Server,
    },
  ];

  return (
    <section id="technology" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5 overflow-hidden">
      {/* Decorative Matrix / Technology Background Glow */}
      <div className="absolute inset-0 bg-grid-bg opacity-[0.02]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 blur-[140px] rounded-full -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block - Col 5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Engineered for Sovereignty
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-[1.15]">
              Security is not an add-on. It is our core protocol.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We designed OnePlus One around the concept of absolute user ownership. We utilize zero-knowledge architectures so you can automate administrative tasks without sharing personal documents with any company or unauthorized AI model.
            </p>
            <div className="flex gap-4 items-center pt-4 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white font-mono">0</p>
                <p className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Unencrypted files saved</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white font-mono">256-bit</p>
                <p className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Client-side keys</p>
              </div>
            </div>
          </div>

          {/* Cards Grid - Col 7 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specs.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold text-white font-sans">{spec.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{spec.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
