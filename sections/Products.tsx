"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, Sparkles, FolderLock, Users, LayoutDashboard, Database } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      badge: "Flagship Release",
      title: "FamilyOS",
      description:
        "The complete AI operating system for families. Securely catalog estate deeds, passwords, health parameters, birth certificates, and passport details. Automatically alerts you when expiries approach.",
      icon: FolderLock,
      status: "Available Now",
      cta: "Explore Dashboard",
      href: "https://family-os-one-plus-one.vercel.app/login",
      color: "from-brand-blue/20 to-brand-violet/20 border-brand-blue/30",
      features: ["Secure Document Vault", "AI Assistant Querying", "OCR Expiration Tracker"],
    },
    {
      badge: "In Development",
      title: "SoloOS",
      description:
        "A hyper-focused, single-license personal workspace. Connect tax records, subscriptions, travel plans, and bank metrics. Outsource scheduling and paperwork administration to a local, secure LLM agent.",
      icon: Database,
      status: "Beta Q4 2026",
      cta: "Request Beta Invite",
      href: "#contact",
      color: "from-white/5 to-white/5 border-white/10",
      features: ["Personal Finance Syncer", "AI Subscription Audit", "Automated Travel Logger"],
    },
    {
      badge: "On the Horizon",
      title: "BusinessOS",
      description:
        "Zero-knowledge operational hub for small businesses and independent contractors. Digitally reconcile invoices, contractor agreements, and localized data stores safely without hosting costs.",
      icon: LayoutDashboard,
      status: "Planned 2027",
      cta: "View Roadmap",
      href: "#roadmap",
      color: "from-white/5 to-white/5 border-white/10",
      features: ["Invoice Reconciliation", "Local Contract Analyzer", "Encrypted Team Workspaces"],
    },
  ];

  return (
    <section id="products" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet-glow">
            Product Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            Practical workspaces, built for your life.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            We are designing a suite of clean, secure administrative environments tailored for families, individuals, and organizations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b border ${product.color} hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all group`}
              >
                <div>
                  {/* Badge & Status */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-slate-300">
                      {product.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">
                      {product.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-brand-blue transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-sans">{product.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[80px]">
                    {product.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="flex flex-col gap-2.5 border-t border-white/5 pt-5 mb-8">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-brand-violet-glow" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full py-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-brand-navy-deep group-hover:border-white transition-all text-xs font-semibold text-white flex items-center justify-center gap-1.5"
                >
                  {product.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
