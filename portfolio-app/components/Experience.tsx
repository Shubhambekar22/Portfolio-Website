"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="experience" number="03" title="Professional Experience" subtitle="Career Trajectory">
      <div ref={containerRef} className="relative space-y-12 mb-12">
        {/* Timeline Line (Static) */}
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-slate-800 md:left-[50%] md:-ml-px" />
        
        {/* Timeline Line (Animated) */}
        <motion.div 
           style={{ height: lineHeight }}
           className="absolute top-0 left-[7px] w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] md:left-[50%] md:-ml-px z-0"
        />

        {resumeData.experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-16 w-full max-w-4xl mx-auto">
           <div className="flex justify-center md:justify-end">
            <a 
                href="/Shubham_Ambekar_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-slate-700 bg-slate-950/50 text-white font-bold uppercase tracking-wider hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
            </a>
          </div>
          
           <div className="flex justify-center md:justify-start">
            <a 
                href="/Shubham_Ambekar_Resume.pdf" 
                download="Shubham_Ambekar_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
            </a>
           </div>
      </div>
    </Section>
  );
}



function ExperienceCard({ exp, index }: { exp: typeof resumeData.experience[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row gap-8 ${
      isLeft ? "md:flex-row-reverse" : ""
    }`}>
      
      {/* Timeline Dot */}
      <motion.div 
         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.5 }}
         className="absolute left-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 md:left-1/2 md:-ml-2 mt-1.5"
      >
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, boxShadow: "0 0 15px rgba(6,182,212,0.8)" }}
            viewport={{ margin: "0px 0px -40% 0px" }}
            transition={{ duration: 0.2 }}
            className="w-full h-full rounded-full bg-cyan-500"
         />
      </motion.div>

      {/* Content Spacer for Alternating Layout */}
      <div className="flex-1 md:w-1/2"></div>
      
      {/* Content Card */}
      <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
         <div className={`p-6 md:p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors relative group
             ${isLeft ? "md:text-left md:mr-8" : "md:text-right md:ml-8"}
         `}>
            {/* Decor corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-700 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-700 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-700 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-700 group-hover:border-cyan-500 transition-colors" />

            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono bg-cyan-950/30 px-3 py-1 border border-cyan-500/20 rounded-md w-fit whitespace-nowrap mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
               {exp.date}
             </span>
            
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-display">
              {exp.company}
            </h3>
            
            <h4 className="text-lg text-slate-400 mb-4 font-mono">
              {exp.role} <span className="text-slate-600">|</span> {exp.location}
            </h4>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`space-y-2 text-slate-400 text-sm leading-relaxed overflow-hidden ${
                            isLeft ? "md:text-left" : "md:text-right"
                        }`}
                    >
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute top-6 md:top-8 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 hover:bg-slate-700 hover:border-cyan-500 transition-all z-20 
                    ${isLeft ? "right-6 md:right-8" : "right-6 md:right-auto md:left-8"}
                `}
                aria-label={isOpen ? "Collapse details" : "Expand details"}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

         </div>
      </div>
    </div>
  );
}
