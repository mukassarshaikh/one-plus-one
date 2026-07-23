"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is my family data secure? Who holds the decryption keys?",
      answer: "FamilyOS is engineered on a zero-knowledge security framework. All decryption keys are generated client-side from your primary account password. Neither OnePlus One engineers nor cloud infrastructure hosts have access to these keys. Your documents are completely unreadable to anyone but your family.",
    },
    {
      question: "How does the AI Assistant analyze files if they are encrypted?",
      answer: "When you interact with the AI assistant, decryption occurs entirely in memory within your secure local environment. For heavier queries, temporary encrypted payloads are processed inside isolated, high-security computation enclaves (TEE) that immediately wipe all context and text fragments upon request resolution.",
    },
    {
      question: "What happens in an emergency if the primary account holder is incapacitated?",
      answer: "You can configure one or more 'Emergency Delegates' in your Vault Settings. If access is requested, FamilyOS initiates a mandatory multi-day verification countdown and alerts you via phone call, SMS, and email. If the request is not explicitly denied by you before the timer expires, the encrypted keys are safely shared with your delegate.",
    },
    {
      question: "Can I share specific files with external contacts, like my accountant?",
      answer: "Yes. You can generate encrypted shared links for single documents or sub-folders. These links use unique, transient decryption parameters. You can set optional password protections, download restrictions, and self-destruct timers (e.g., link expires in 2 hours or after 1 view).",
    },
    {
      question: "How much does FamilyOS cost?",
      answer: "FamilyOS is currently in waitlist mode for our flagship release. When public access opens, we will offer a free Tier with limited secure storage (up to 500 MB) and a premium 'Family Legacy' subscription at $12/month which includes 20 GB zero-knowledge storage, multi-user delegation, and advanced OCR analysis.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 px-6 bg-brand-navy-deep border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet-glow">
            Support Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans max-w-xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            Everything you need to know about the architecture, security, and setup.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white/5 border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${isOpen ? "text-brand-blue" : "text-slate-500"}`} />
                    <span className="text-sm font-semibold text-white group-hover:text-brand-blue-glow transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-white" : ""}`} />
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Have an architectural or enterprise security question?{" "}
          <a href="/contact" className="text-white hover:underline">
            Contact our engineering team
          </a>
          .
        </div>

      </div>
    </section>
  );
}
