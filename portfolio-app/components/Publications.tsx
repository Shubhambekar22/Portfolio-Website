"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <Section id="publications" number="06" title="Publications" subtitle="Research & Papers">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {resumeData.publications.map((pub, index) => (
          <PublicationCard key={index} pub={pub} index={index} />
        ))}
      </div>
    </Section>
  );
}

function PublicationCard({ pub, index }: { pub: typeof resumeData.publications[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
         <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-display group-hover:text-cyan-400 transition-colors">
            {pub.title}
         </h3>
         <span className="text-cyan-500 font-mono text-sm whitespace-nowrap bg-cyan-950/30 px-3 py-1 border border-cyan-500/20 rounded-md">
            {pub.date}
         </span>
      </div>

      <div className="text-slate-400 font-medium mb-4">
        {pub.journal}
      </div>

      {pub.doi && (
        <a 
          href={`https://doi.org/${pub.doi.replace("DOI: ", "")}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 font-mono hover:text-cyan-300 transition-colors"
        >
          <span>DOI: {pub.doi}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}
