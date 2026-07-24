"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShieldCheck, Key, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Columns - Col 5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Contact OnePlus One
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have an architectural question? Need a specialized deployment schema? Get in touch with our engineering, security, or support departments.
            </p>

            {/* Channels block */}
            <div className="flex flex-col gap-4 border-t border-white/5 pt-6 mt-4">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-brand-blue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Security Vulnerability Disclosures</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    To report security findings, email us directly at <span className="text-white">security@oneplusone.ai</span>. You can sign disclosures using our public PGP keys.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-brand-violet">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">PGP Fingerprint</h4>
                  <p className="text-xs font-mono text-slate-400 mt-1 select-all">
                    8FA3 92B4 1A9C DC01 8E34 A71E 9923 FD81
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns (Form Card) - Col 7 */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl glass-card border border-white/10 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/35 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <h3 className="text-lg font-bold text-white font-sans">
                      Submit Message
                    </h3>

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="David Miller"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    {/* Department Selector */}
                    <div className="flex flex-col gap-2">
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Target Department
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { label: "General Support", val: "general" },
                          { label: "Security & PGP", val: "security" },
                          { label: "Press / Media", val: "press" },
                        ].map((dept) => (
                          <button
                            key={dept.val}
                            type="button"
                            onClick={() => setSubject(dept.val)}
                            className={`py-2.5 px-1 text-[11px] font-semibold rounded-lg border text-center transition-all ${
                              subject === dept.val
                                ? "bg-brand-blue/15 border-brand-blue text-brand-blue"
                                : "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {dept.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-message" className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Detailed Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can our technical team assist you?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-blue/50 transition-all placeholder:text-slate-600 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-lg bg-white hover:bg-slate-200 text-brand-navy-deep font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
                        Message Dispatched!
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                        Thank you for contacting OnePlus One. Your transmission was encrypted and logged. A staff member from our <span className="text-white font-semibold">{subject}</span> department will contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
