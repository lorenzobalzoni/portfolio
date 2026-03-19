"use client";

import { motion, useMotionValue, useSpring, useInView, Variants } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Updated with your actual portfolio data
const projects = [
  {
    name: "Mineralogy",
    year: "2026",
    role: "Design & Dev",
    tech: ["SwiftUI", "CoreML", "Vision", "Metal"],
    description: "AI-powered tool for mineral identification.",
    // Replace with your actual image paths
    image: "/images/projects/mineralogy-1.png", 
  },
  {
    name: "Entropy Dash",
    year: "2025",
    role: "Full Stack",
    tech: ["React", "Next.js", "Tailwind"],
    description: "Privacy-focused analytics dashboard.",
    image: "/images/projects/entropy-1.png",
  },
  {
    name: "Swift Manual",
    year: "2024",
    role: "Technical Writing",
    tech: ["Markdown", "MDX", "Vercel"],
    description: "Comprehensive guide to Swift development.",
    image: "/images/projects/swift-1.png",
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // --- Mouse Tracking for Floating Image ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs so the image "drags" beautifully behind the cursor
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smx = useSpring(mouseX, springConfig);
  const smy = useSpring(mouseY, springConfig);

  function handleMouseMove(e: MouseEvent) {
    // Offset the image so it centers on the cursor
    mouseX.set(e.clientX - 150); 
    mouseY.set(e.clientY - 100);
  }

  return (
    <section 
      className="py-32 px-6 relative" 
      id="work" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
            Selected Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
            Projects & Case Studies
          </h2>
        </motion.div>

        {/* Orchestrated List Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="border-t border-border relative"
        >
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div variants={rowVariants} key={project.name}>
                <a
                  href={`/work/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group block py-10 border-b border-border transition-all duration-500 relative"
                >
                  <div 
                    className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-500 ${
                      isDimmed ? 'opacity-30 blur-[2px]' : 'opacity-100 blur-0'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                          {project.name}
                        </h3>
                        {/* Kinetic Arrow: Snaps diagonally on hover */}
                        <ArrowUpRight className="w-6 h-6 text-orange-500 opacity-0 -translate-x-4 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground/80 max-w-md">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 border border-border rounded-md transition-colors group-hover:border-orange-500/30 group-hover:text-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
                        <span className="min-w-[140px] transition-colors group-hover:text-neutral-300">{project.role}</span>
                        <span className="font-mono transition-colors group-hover:text-orange-500">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Image Reveal Element */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-[300px] h-[200px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          x: smx,
          y: smy,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3, ease: "easeOut" } }}
      >
        {hoveredIndex !== null && (
          <div className="relative w-full h-full bg-neutral-900">
            {/* You'll need to ensure the image paths in the array are valid */}
            <Image 
              src={projects[hoveredIndex].image} 
              alt={projects[hoveredIndex].name}
              fill
              className="object-cover"
              sizes="300px"
              priority={true}
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}
      </motion.div>
    </section>
  );
}