"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" number="05" title="Case Studies" subtitle="Selected Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
          >
            {/* Hover Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0" />

            <div className="p-8 relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 border border-slate-700 text-slate-400 rounded-sm">
                       {tag}
                     </span>
                   ))}
                </div>
                <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs font-mono text-cyan-500/70 mb-4">
                 {project.date}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                {project.description}
              </p>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse-slow"></span>
                 <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                    Status: Completed
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
