"use client";

import { motion } from "framer-motion";
import { Star, ShieldAlert } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "FamilyOS completely resolved our family document sprawl. What used to be scattered across WhatsApp attachments and Google Drive links is now cataloged, searchable, and secure. Checking insurance dates takes seconds.",
      author: "Sarah Corner",
      role: "Organizer & Mother of two",
      avatar: "SC",
      stars: 5,
    },
    {
      quote: "As a security engineer, I was extremely skeptical of uploading health records and estate deeds online. The zero-knowledge architecture OnePlus One designed is the only reason I approved this workspace for my family.",
      author: "Marcus Vance",
      role: "Principal SecOps Engineer",
      avatar: "MV",
      stars: 5,
    },
    {
      quote: "I recommend FamilyOS to every estate planning client I represent. The emergency delegate protocol is the cleanest, most secure implementation of digital asset delegation I have evaluated in my career.",
      author: "Evelyn Sterling, JD",
      role: "Partner, Sterling Estate Law",
      avatar: "ES",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-blue/5 blur-[100px] rounded-full -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            User Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            Trusted by families who prioritize security.
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Read stories from individuals, co-owners, and advisors using FamilyOS to protect their family legacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-brand-blue-glow">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/35 text-brand-blue text-xs font-bold flex items-center justify-center">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badging Sub-block */}
        <div className="mt-16 p-4 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-semibold text-white">4.9 / 5</span> Average User Rating
          </div>
          <span className="hidden sm:block text-slate-700">|</span>
          <div>
            Over <span className="font-semibold text-white">12,000+</span> files cataloged securely with zero leak reports
          </div>
        </div>

      </div>
    </section>
  );
}
