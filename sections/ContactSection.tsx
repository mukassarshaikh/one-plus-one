"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail, Send, CheckCircle2, User, HelpCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("family");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      // Simulate random waitlist number between 3000 and 4000
      setWaitlistNumber(Math.floor(Math.random() * 1000) + 3420);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      {/* Decorative Radial Backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-violet/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Block Column - Col 5 */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Secure Enrollment
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            Secure your spot in the FamilyOS ecosystem.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We release invitations to our zero-knowledge document vaults in controlled cohorts to ensure high support standards and server durability. Enroll below to join our early queue.
          </p>

          <div className="flex flex-col gap-3.5 pt-6 border-t border-white/5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Double-authenticated enrollment</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-violet" />
              <span>Cohort 4 invitations shipping Q4 2026</span>
            </div>
          </div>
        </div>

        {/* Interactive Form Card - Col 7 */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-2xl glass-card border border-white/10 relative overflow-hidden">
            {/* Shimmer light line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-lg font-bold text-white font-sans">
                    Request Early Access
                  </h3>

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-name" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Corner"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-email" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Role Selector */}
                  <div className="flex flex-col gap-2">
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Primary Use Case
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "My Family", val: "family" },
                        { label: "Just Me (Individual)", val: "solo" },
                        { label: "Advisor / Lawyer", val: "advisor" },
                        { label: "My Business", val: "business" },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setRole(item.val)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                            role === item.val
                              ? "bg-brand-blue/15 border-brand-blue text-brand-blue"
                              : "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-note" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Message / Special Request (Optional)
                    </label>
                    <textarea
                      id="form-note"
                      rows={3}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Let us know if you have specific security requirements or legal delegate needs."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-lg bg-white hover:bg-slate-200 text-brand-navy-deep font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
                  >
                    Submit Waitlist Request
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-10 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white font-sans">
                      Request Confirmed, {name.split(" ")[0]}!
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                      We have logged your zero-knowledge enrollment request. An email contains your entry tokens and cohort release schedule has been dispatched to <span className="text-white font-semibold">{email}</span>.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1 items-center w-full max-w-xs mt-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Your Waitlist Position</span>
                    <span className="text-3xl font-bold text-white font-mono tracking-tight">#{waitlistNumber}</span>
                    <span className="text-[10px] text-brand-blue-glow font-medium mt-1">Cohort 4 Priority Invite List</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
