import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. The Zero-Knowledge Core",
      content: "All documents processed by FamilyOS and other OnePlus One applications are encrypted client-side using keys derived directly from your master password. We do not store, transit, or have computational pathways to access your master keys. If you lose your master credentials and recovery codes, we cannot restore access to your vault.",
    },
    {
      title: "2. Metadata & Search Indexing",
      content: "All text indexes (OCR results) and document tags are processed in temporary browser memory or secure, isolated TEE enclaves. At no point is document text written to persistent unencrypted server logs. Analytics are purely structural (e.g., number of documents uploaded, storage space metrics) and stripped of all personal identifying indicators.",
    },
    {
      title: "3. Emergency Delegate Protocol",
      content: "When you establish emergency delegates, you write client-encrypted recovery shares. These shares remain dormant on our storage clusters. They are decrypted by delegates only when the emergency authorization countdown completes without account holder cancellation. We never inspect or arbitrate the validity of delegate claims; our systems process them purely algorithmically.",
    },
    {
      title: "4. Third-Party Integrations",
      content: "FamilyOS integrates with email forwarding and WhatsApp APIs to capture uploaded documents. Standard data policies of those third-party providers apply to your documents *before* they reach our ingestion pipeline. Once ingestion completes, the files are encrypted immediately, and the original unencrypted capture buffer is safely purged.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/5 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            Sovereign Trust Agreement
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-sans">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Last Updated: July 23, 2026. This policy outlines our zero-exposure architecture.
          </p>
        </div>

        {/* Declaration Box */}
        <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex gap-4 items-start mb-12">
          <Lock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-white">Our Privacy Philosophy</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We design our databases so that even if a full server breach occurs, your documents remain encrypted and mathematically unreadable. We believe user privacy is an architectural requirement, not a legal compliance checkbox.
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
