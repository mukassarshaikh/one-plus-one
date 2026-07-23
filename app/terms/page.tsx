import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, ShieldAlert } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Agreement of Terms",
      content: "By creating an account with OnePlus One or utilizing our flagship platform FamilyOS, you agree to comply with and be bound by these Terms of Service. If you are entering this agreement on behalf of a family group, co-ownership trust, or business, you represent that you have legal authority to bind that entity.",
    },
    {
      title: "2. Zero-Knowledge Key Responsibility",
      content: "You acknowledge that OnePlus One utilizes zero-knowledge client-side encryption. We do not store, copy, or maintain backup logs of your master password, security keys, or decryption seeds. You hold complete, non-delegable responsibility for writing down, securing, and backing up your keys. OnePlus One is not liable for data loss arising from forgotten credentials.",
    },
    {
      title: "3. Service Availability & Limits",
      content: "We provide cloud sync services on an 'as-is' and 'as-available' basis. While we design our storage nodes with high redundancy, we do not guarantee uninterrupted server uptime or complete immunity to external data center failures. Storage quotas are set based on your account level; exceeding storage quotas may restrict write operations to your vault.",
    },
    {
      title: "4. Subscription & Billing",
      content: "Waitlist memberships and early cohort accesses are subject to separate billing schedules. Standard subscription models automatically renew monthly or annually unless canceled inside your billing preferences dashboard. Storage downgrades may result in locking document editing capabilities until storage is reduced or subscription limits are increased.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/5 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-violet-glow flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-brand-violet" />
            Legal Service Guidelines
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-sans">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last Updated: July 23, 2026. Please review our responsibility limits.
          </p>
        </div>

        {/* Advisory Warning */}
        <div className="p-6 rounded-2xl bg-brand-violet/5 border border-brand-violet/20 flex gap-4 items-start mb-12">
          <ShieldAlert className="w-5 h-5 text-brand-violet flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-white">Critical Key Custody Alert</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Because FamilyOS is private and zero-knowledge, there is no &ldquo;Forgot Password&rdquo; mechanism that can retrieve your files. You are the sole custodian of your decryption keys. Make sure to export your recovery key file to a physical printout.
            </p>
          </div>
        </div>

        {/* Content list */}
        <div className="flex flex-col gap-10 text-slate-300 text-sm leading-relaxed">
          {sections.map((sec) => (
            <div key={sec.title} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-white font-sans">{sec.title}</h2>
              <p className="text-slate-400">{sec.content}</p>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
