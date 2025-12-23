"use client";

import Section from "./Section";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <Section id="about" number="01" title="About Me" subtitle="Engineering Philosophy">
      <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed font-light text-lg md:text-xl">
        <p>
          I am a graduate student in <strong className="text-white font-medium">Aerospace and Mechanical Engineering</strong> at USC, with a primary focus on <strong className="text-white font-medium">Mechanical Design and Advanced Manufacturing</strong>.
        </p>
        <p>
          I specialize in transforming complex concepts into robust mechanical systems. By bridging computational design with practical implementation, I deliver engineering solutions that are both analytically rigorous and mechanically sound.
        </p>
        <p>
          Currently, I am developing high-performance composites and next-generation mechanical systems, constantly pushing the limits of engineering possibility.
        </p>
        

      </div>
    </Section>
  );
}
