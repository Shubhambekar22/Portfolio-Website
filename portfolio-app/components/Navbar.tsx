"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Eye, Download } from "lucide-react";
import { sendGAEvent } from "@/lib/gtag";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (label: string) => {
    sendGAEvent({ event: "nav_click", value: label });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex items-center gap-2"
          onClick={() => handleNavClick("Home Logo")}
        >
           <div className="relative flex items-center justify-center w-10 h-10 border border-cyan-500/30 bg-cyan-950/20 rounded md:rounded-none group-hover:border-cyan-400/60 transition-colors">
              <span className="font-display font-bold text-xl text-cyan-400">SA</span>
              <div className="absolute -inset-0.5 bg-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
           </div>
           <span className="hidden md:block font-display font-semibold tracking-wider text-lg text-slate-200 group-hover:text-white transition-colors">
             SHUBHAM AMBEKAR
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest group"
              onClick={() => handleNavClick(link.name)}
            >
              <span className="flex items-center gap-1">
                <span className="text-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {">"}
                </span>
                {link.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-slate-200 border border-slate-700 hover:border-cyan-500 hover:text-white transition-colors uppercase tracking-wider rounded flex items-center gap-2"
              onClick={() => sendGAEvent({ event: "resume_view", value: "navbar" })}
            >
              <Eye size={14} />
              <span>View Resume</span>
            </a>
            <a
              href="/resume.pdf"
              download="Shubham_Ambekar_Resume.pdf"
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors uppercase tracking-wider rounded flex items-center gap-2"
              onClick={() => sendGAEvent({ event: "resume_download", value: "navbar" })}
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/10 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-display tracking-widest text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    handleNavClick(link.name);
                  }}
                >
                  {link.name}
                </Link>
              ))}
               <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-bold text-slate-200 border border-slate-700 hover:border-cyan-500 hover:text-white transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsOpen(false);
                    sendGAEvent({ event: "resume_view", value: "navbar_mobile" });
                  }}
                >
                  <Eye size={16} />
                   View Resume
                </a>
                 <a
                  href="/resume.pdf"
                  download="Shubham_Ambekar_Resume.pdf"
                  className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                  onClick={() => {
                    setIsOpen(false);
                    sendGAEvent({ event: "resume_download", value: "navbar_mobile" });
                  }}
                >
                  <Download size={16} />
                   Download Resume
                </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
