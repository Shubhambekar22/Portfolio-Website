"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";
import { Mail, Linkedin, Github, Phone, MapPin, Share2, Contact as ContactIcon } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Contact() {
  return (
    <Section id="contact" number="07" title="Establish Comms" subtitle="Contact Protocol" backgroundImage="/radar-dish.jpg" imageClassName="object-contain object-bottom opacity-70">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Information Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-8">
              <ContactIcon className="text-cyan-500" size={24} />
              <h3 className="text-xl font-bold text-white">Send Transmission</h3>
            </div>
            
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href={`tel:${resumeData.personalInfo.phone}`}
                className="bg-slate-800/50 border border-transparent rounded-lg p-4 flex items-center gap-4 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                onClick={() => sendGAEvent({ event: "contact_click", value: "phone" })}
              >
                <div className="bg-slate-950 p-2 rounded-full text-cyan-500 border border-slate-700/50 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-mono text-sm sm:text-base">{resumeData.personalInfo.phone}</span>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${resumeData.personalInfo.email}`}
                className="bg-slate-800/50 border border-transparent rounded-lg p-4 flex items-center gap-4 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                onClick={() => sendGAEvent({ event: "contact_click", value: "email" })}
              >
                <div className="bg-slate-950 p-2 rounded-full text-cyan-500 border border-slate-700/50 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-mono text-sm sm:text-base break-all">{resumeData.personalInfo.email}</span>
              </a>

              {/* Location */}
              <div className="bg-slate-800/50 border border-transparent rounded-lg p-4 flex items-center gap-4 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-default">
                <div className="bg-slate-950 p-2 rounded-full text-cyan-500 border border-slate-700/50 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-mono text-sm sm:text-base">{resumeData.personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Connect With Me Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Share2 className="text-cyan-500" size={24} />
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
            </div>
            
            <div className="space-y-4">
              {/* LinkedIn */}
              <a 
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 border border-transparent rounded-lg p-4 flex items-center gap-4 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                onClick={() => sendGAEvent({ event: "contact_click", value: "linkedin" })}
              >
                <div className="bg-slate-950 p-2 rounded-full text-cyan-500 border border-slate-700/50 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Linkedin size={20} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 border border-transparent rounded-lg p-4 flex items-center gap-4 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                onClick={() => sendGAEvent({ event: "contact_click", value: "github" })}
              >
                <div className="bg-slate-950 p-2 rounded-full text-cyan-500 border border-slate-700/50 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Github size={20} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
