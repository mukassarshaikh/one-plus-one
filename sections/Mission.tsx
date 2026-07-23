"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Users } from "lucide-react";

export default function Mission() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="mission" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-violet/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Tagline / Subtitle */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Our Philosophical Anchor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              Practical intelligence. Built for real utility.
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full mt-2" />
          </div>

          {/* The Core Mission Paragraph - Large Font */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 font-normal leading-relaxed tracking-normal font-sans"
            >
              At <strong className="text-white font-semibold">OnePlus One</strong>, we build AI products that simplify everyday life. We believe software should solve meaningful, real-world struggles rather than riding wave after wave of industry hype.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 leading-relaxed"
            >
              We bypass the buzzwords. Our engineers design intelligent systems that provide real, measurable value for families, individuals, and growing businesses. By prioritizing user privacy, elegant software interactions, and durable security, we create products that users can trust for generations.
            </motion.p>

            {/* Quick Pillars */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5"
            >
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Privacy First</h4>
                <p className="text-xs text-slate-400">Zero-knowledge local and cloud architectures.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-violet">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Genuine Utility</h4>
                <p className="text-xs text-slate-400">Features designed for daily administrative tasks.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue-glow">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Family Safe</h4>
                <p className="text-xs text-slate-400">Multi-generational collaboration and secure share vaults.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
