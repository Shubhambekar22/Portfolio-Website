"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { ArrowUpRight, Github, ExternalLink, Play, X, FileText } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleProjectClick = (projectTitle: string, type: string) => {
    sendGAEvent({ event: "project_click", value: `${projectTitle} - ${type}` });
  };

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

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-center gap-3">
                  {/* @ts-ignore */}
                  {project.video ? (
                    <button 
                      onClick={() => {
                        setActiveVideo(project.video);
                        handleProjectClick(project.title, "video_demo");
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                    >
                      <Play size={16} className="fill-current" />
                      View Demo
                    </button>
                  ) : project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                      onClick={() => handleProjectClick(project.title, "demo_link")}
                    >
                      <Play size={16} className="fill-current" />
                      View Demo
                    </a>
                  )}
                  {/* @ts-ignore */}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-950/50 text-white text-sm font-bold uppercase tracking-wider hover:bg-slate-900 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
                      onClick={() => handleProjectClick(project.title, "github_repo")}
                    >
                      <Github size={16} />
                      Github
                    </a>
                  )}

                  {/* @ts-ignore */}
                  {project.reportUrl && (
                    <a 
                      href={project.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                      onClick={() => handleProjectClick(project.title, "report_pdf")}
                    >
                      <FileText size={16} className="fill-current" />
                      View Report
                    </a>
                  )}
                  {/* @ts-ignore */}
                  {project.driveUrl && (
                    <a 
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-950/50 text-white text-sm font-bold uppercase tracking-wider hover:bg-slate-900 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
                      onClick={() => handleProjectClick(project.title, "google_drive")}
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-4 h-4 fill-current" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"/>
                      </svg>
                      Drive
                    </a>
                  )}
                  {!project.demoUrl && !project.repoUrl && !project.video && !project.reportUrl && !project.driveUrl && (
                    <a 
                      href={project.link} 
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                      onClick={() => handleProjectClick(project.title, "generic_link")}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="relative pt-[56.25%]">
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
