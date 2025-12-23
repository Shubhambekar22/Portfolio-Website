"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <Section id="education" number="02" title="Academic Background" subtitle="Education & Qualifications">
      <div className="grid gap-8">
        {resumeData.education.map((edu, index) => (
           <div key={index} className="relative z-10 p-1 border border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm group hover:border-cyan-500/40 transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
                
                <div className="relative p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {edu.school}
                            </h3>
                        </div>
                         <p className="text-lg text-slate-300 font-light">
                            {edu.degree}
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-1">
                        <span className="text-cyan-400 font-mono text-sm bg-cyan-950/30 px-3 py-1 border border-cyan-500/20 rounded-full w-fit">
                            {edu.date}
                        </span>
                        <span className="text-slate-500 text-xs font-mono uppercase tracking-wider mt-1">
                            {edu.location}
                        </span>
                    </div>
                </div>
           </div>
        ))}
      </div>
    </Section>
  );
}
