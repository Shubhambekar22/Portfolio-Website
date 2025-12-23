"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Establish Comms" subtitle="Contact Protocol">
      <div className="max-w-2xl mx-auto text-center">
         <p className="text-xl md:text-2xl text-slate-300 font-light mb-12">
           I am currently available for new opportunities and collaborations in aerospace engineering and computational design. 
         </p>

         <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${resumeData.personalInfo.email}`} 
              className="group relative px-8 py-4 bg-cyan-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-cyan-500 transition-colors w-full md:w-auto"
            >
               <span className="flex items-center justify-center gap-2">
                 <Mail size={18} />
                 Send Transmission
               </span>
            </a>
            
            <div className="flex gap-4">
                <a 
                  href={resumeData.personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                 <a 
                  href={resumeData.personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
                   aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
            </div>
         </div>

         <div className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-slate-500">
               <div className="flex flex-col items-center md:items-end gap-1">
                  <span className="text-cyan-500/50 uppercase text-[10px] tracking-widest">Base of Operations</span>
                  <span>{resumeData.personalInfo.location}</span>
               </div>
               <div className="flex flex-col items-center md:items-start gap-1">
                  <span className="text-cyan-500/50 uppercase text-[10px] tracking-widest">Direct Line</span>
                  <span>{resumeData.personalInfo.phone}</span>
               </div>
            </div>
         </div>
      </div>
    </Section>
  );
}
