"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    { name: "Technical Engineering", items: resumeData.skills.technical },
    { name: "Computational & Software", items: resumeData.skills.software },
    { name: "Professional", items: resumeData.skills.other },
  ];

  return (
    <Section id="skills" number="04" title="Technical Arsenal" subtitle="Skills & Competencies" className="bg-slate-950/50">
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  {cat.name}
                </h3>
             </div>
             
             <div className="flex flex-wrap gap-2">
               {cat.items.map((skill, sIdx) => (
                 <motion.span 
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: sIdx * 0.05 + idx * 0.1 }}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-700/50 text-slate-300 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all cursor-default"
                 >
                   {skill}
                 </motion.span>
               ))}
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
