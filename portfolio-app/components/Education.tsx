"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="education" number="02" title="Academic Background" subtitle="Education & Qualifications">
      <div ref={containerRef} className="relative space-y-12 max-w-4xl mx-auto">
         {/* Vertical Timeline Track (Static) */}
         <div className="absolute top-0 bottom-0 left-[27px] w-px bg-cyan-900/30 md:left-[30px]" />
         
         {/* Vertical Timeline Line (Animated) */}
         <motion.div 
            style={{ height: lineHeight }}
            className="absolute top-0 left-[27px] w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] md:left-[30px] z-0"
         />

        {resumeData.education.map((edu, index) => (
           <div key={index} className="relative pl-20 md:pl-24 group">
                {/* Timeline Dot (Animated) */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-[20px] top-6 w-[15px] h-[15px] rounded-full bg-slate-900 border-2 border-cyan-500 z-10 md:left-[23px]"
                >
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, boxShadow: "0 0 15px rgba(6,182,212,0.8)" }}
                        viewport={{ margin: "0px 0px -40% 0px" }} // Activates slightly before center to feel "instant"
                        transition={{ duration: 0.2 }}
                        className="w-full h-full rounded-full bg-cyan-500"
                    />
                </motion.div>

                {/* Content Card */}
                <div className="relative p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-slate-900/60 group-hover:shadow-lg group-hover:shadow-cyan-900/10">
                     
                     <div className="flex flex-col md:flex-row gap-6 mb-6">
                        {/* Logo Box */}
                        <div className="shrink-0">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center border border-slate-700 overflow-hidden p-2">
                                <Image 
                                    src={edu.logo || "/usc-logo.png"} 
                                    alt={`${edu.school} logo`} 
                                    width={80} 
                                    height={80} 
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Header Details */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {edu.degree}
                                </h3>
                                
                                <span className="flex items-center gap-2 text-cyan-400 text-sm font-mono bg-cyan-950/30 px-3 py-1 border border-cyan-500/20 rounded-md w-fit whitespace-nowrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {edu.date}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-blue-400 mb-2">
                                {edu.school}
                            </h4>
                            
                             <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 font-mono">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {edu.location}
                            </div>
                            
                            <div className="w-full h-px bg-slate-800/80 mb-4" />

                            <div className="space-y-3">
                                <div className="text-sm font-mono font-semibold text-slate-300">
                                    GPA: <span className="text-white">{edu.gpa}</span>
                                </div>
                                
                                <div className="text-sm text-slate-400 leading-relaxed">
                                    <span className="font-semibold text-slate-300">Coursework: </span>
                                    {edu.coursework.join(", ")}
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
           </div>
        ))}
      </div>
    </Section>
  );
}
