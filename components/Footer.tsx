"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Navbar";
import { ArrowRight, Github, Twitter, Linkedin, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const productLinks = [
    { name: "FamilyOS Vault", href: "https://family-os-one-plus-one.vercel.app/login" },
    { name: "AI Document Understanding", href: "#features" },
    { name: "Intelligent Search", href: "#features" },
    { name: "Roadmap & Future", href: "#roadmap" },
  ];

  const companyLinks = [
    { name: "Our Mission", href: "#mission" },
    { name: "Technology Stack", href: "#technology" },
    { name: "Why OnePlus One", href: "#why-choose-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security Architecture", href: "#technology" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-brand-navy-deep py-16 px-6 overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-violet/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building AI products that simplify everyday life. We design practical, zero-knowledge workspace tools focused on family safety, document integrity, and intelligent organization.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get release updates, security reports, and waitlist invites.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-3.5 pr-10 py-2.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/20 transition-all duration-200 placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1 top-1 bottom-1 px-3 flex items-center justify-center rounded bg-white hover:bg-slate-200 text-brand-navy-deep transition-all duration-150"
              >
                {subscribed ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} OnePlus One, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
