"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" number="03" title="Professional Experience" subtitle="Career Trajectory">
      <div className="relative space-y-12">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-slate-800 md:left-[50%] md:-ml-px" />

        {resumeData.experience.map((exp, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}>
            
            {/* Timeline Dot */}
            <div className="absolute left-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 md:left-1/2 md:-ml-2 mt-1.5" />

            {/* Content Spacer for Alternating Layout */}
            <div className="flex-1 md:w-1/2"></div>
            
            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
               <div className={`p-6 md:p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors relative group
                   ${index % 2 === 0 ? "md:text-left md:mr-8" : "md:text-right md:ml-8"}
               `}>
                  {/* Decor corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-700 group-hover:border-cyan-500 transition-colors" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-700 group-hover:border-cyan-500 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-700 group-hover:border-cyan-500 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-700 group-hover:border-cyan-500 transition-colors" />

                  <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded-full">
                    {exp.date}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-display">
                    {exp.company}
                  </h3>
                  
                  <h4 className="text-lg text-slate-400 mb-4 font-mono">
                    {exp.role} <span className="text-slate-600">|</span> {exp.location}
                  </h4>
                  
                  <ul className={`space-y-2 text-slate-400 text-sm leading-relaxed ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
