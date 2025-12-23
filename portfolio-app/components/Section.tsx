"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; 

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  number?: string;
}

export default function Section({ id, className, children, title, subtitle, number }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
      <div className="container px-6 mx-auto relative z-10">
        {(title || number) && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-end gap-4 mb-16 md:mb-24 border-b border-slate-800 pb-4"
          >
            {number && (
              <span className="font-mono text-cyan-500/50 text-3xl md:text-5xl font-light">
                {number}
              </span>
            )}
            <div className="flex flex-col">
              {title && (
                 <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 uppercase tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <span className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-widest mt-1">
                  {subtitle}
                </span>
              )}
            </div>
          </motion.div>
        )}
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
