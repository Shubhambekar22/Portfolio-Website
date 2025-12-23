"use client";

import { motion } from "framer-motion";
import { FileText, Briefcase, GraduationCap, School, Mail, ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-10 flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center">
        
        {/* Profile Image Placeholder */}
        <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-36 h-36 rounded-full border-4 border-slate-800/80 bg-slate-900 mb-6 relative overflow-hidden shadow-2xl shadow-cyan-900/20 group"
        >
             <Image 
                src="/profile.jpg" 
                alt={resumeData.personalInfo.name} 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
             />
        </motion.div>

        {/* Name & Title */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center space-y-3 mb-6"
        >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                {resumeData.personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light flex flex-wrap justify-center items-center gap-2 md:gap-3">
                {resumeData.personalInfo.title}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                {resumeData.personalInfo.tagline}
            </p>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 relative flex-shrink-0 bg-white/90 rounded-lg overflow-hidden p-1">
                    <Image src="/usc-logo.png" alt="USC Logo" fill className="object-contain" />
                </div>
                <div>
                   <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Masters</div>
                   <div className="text-white font-bold text-base">Mechanical Engineering</div>
                </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 relative flex-shrink-0 bg-white/90 rounded-lg overflow-hidden p-1">
                     <Image src="/sppu-logo.png" alt="SPPU Logo" fill className="object-contain" />
                </div>
                 <div>
                   <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Bachelors</div>
                   <div className="text-white font-bold text-base">Mechanical Engineering</div>
                </div>
            </div>
        </motion.div>

        {/* Skills Pills */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8 max-w-3xl"
        >
            {['CFD', 'FEA', 'SolidWorks', 'ANSYS', 'Fluid Mechanics', 'DFMA', 'MATLAB', 'JavaScript', 'Python', 'C++'].map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-slate-700/50 bg-slate-900/50 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all cursor-default">
                    {skill}
                </span>
            ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-4"
        >
             <Link 
                href="/resume.pdf" 
                target="_blank"
                className="px-7 py-3.5 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2 group min-w-[150px] justify-center text-base"
             >
                <FileText size={18} />
                <span>View Resume</span>
             </Link>

             <Link 
                href="#projects" 
                className="px-7 py-3.5 bg-slate-900 border border-slate-700 text-white font-bold rounded-lg hover:border-cyan-500/50 hover:bg-slate-800 transition-colors flex items-center gap-2 min-w-[150px] justify-center text-base"
             >
                <span>View My Work</span>
             </Link>

             <Link 
                href="#contact" 
                className="px-7 py-3.5 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-white hover:text-white transition-colors flex items-center gap-2 min-w-[150px] justify-center text-base"
             >
                <span>Get In Touch</span>
             </Link>
        </motion.div>

      </div>
    </section>
  );
}
