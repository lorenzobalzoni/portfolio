"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Nebula",
    year: "2026",
    role: "Design & Development",
    tech: ["Next.js", "TypeScript", "Postgres"],
    description: "Real-time collaboration platform",
  },
  {
    name: "Axiom",
    year: "2025",
    role: "Full Stack Development",
    tech: ["React", "Node.js", "Redis"],
    description: "Developer productivity toolkit",
  },
  {
    name: "Prism",
    year: "2025",
    role: "Design & Development",
    tech: ["Svelte", "Go", "SQLite"],
    description: "Data visualization engine",
  },
  {
    name: "Echo",
    year: "2024",
    role: "Frontend Development",
    tech: ["Vue", "Python", "GraphQL"],
    description: "Audio processing interface",
  },
];

function ProjectRow({ 
  project, 
  index, 
  hoveredIndex, 
  setHoveredIndex 
}: { 
  project: typeof projects[0]; 
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <a
        href="#"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="group block py-8 border-b border-border transition-all duration-300"
      >
        <div 
          className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-opacity duration-300 ${
            isDimmed ? 'opacity-30' : 'opacity-100'
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                {project.name}
              </h3>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </motion.span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground/60">
              {project.description}
            </p>
          </div>
          
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
              <span className="min-w-[160px]">{project.role}</span>
              <span className="font-mono">{project.year}</span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section className="py-32 px-6" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
            Selected Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            Recent Projects
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <ProjectRow 
              key={project.name} 
              project={project} 
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
