"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 group">
      {/* OnePlus One Animated Logo */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-brand-blue"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Ring representing unity/family */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 270 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Inner vertical bar (1) */}
          <motion.line
            x1="38"
            y1="35"
            x2="38"
            y2="65"
            stroke="url(#violet-grad)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          {/* Central Plus (+) */}
          <motion.path
            d="M50 42V58M42 50H58"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          />
          {/* Right vertical bar (1) */}
          <motion.line
            x1="62"
            y1="35"
            x2="62"
            y2="65"
            stroke="url(#violet-grad)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <defs>
            <linearGradient id="violet-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 bg-brand-blue/20 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </div>
      <span className="text-lg font-bold tracking-tight text-white font-sans">
        OnePlus One
      </span>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "FamilyOS", href: "#familyos" },
    { name: "Mission", href: "#mission" },
    { name: "Technology", href: "#technology" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-navy-deep/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="https://family-os-one-plus-one.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              Explore FamilyOS
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-xs font-semibold tracking-wide text-brand-navy bg-white rounded-full hover:bg-slate-200 transition-all duration-200 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.3)]"
            >
              Join Waitlist
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-navy bg-white rounded-full hover:bg-slate-200 transition-all duration-200 flex items-center gap-1"
            >
              Join Waitlist
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-lg border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="https://family-os-one-plus-one.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Explore FamilyOS
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-semibold text-brand-navy bg-white rounded-full hover:bg-slate-200 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
