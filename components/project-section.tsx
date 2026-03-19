"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    status: "Featured Project",
    title: "Mineralogy",
    description:
      "An AI-powered app for mineral identification. Uses CoreML and Vision for instant identification, with SceneKit and ARKit for 3D exploration and real-time visualization of crystal structures.",
    image: "/images/projects/mineralogy-1.png",
    role: "Lead Developer",
    company: {
      name: "Personal Project",
      description:
        'Closing the gap between flat textbook diagrams and interactive real-world learning.',
    },
    industry: ["AI/ML", "AR", "SwiftUI"],
    period: "2024 — Present",
  },
  {
    id: 2,
    status: "Privacy Tool",
    title: "Entropy Dash",
    description:
      "A privacy-focused browser automation tool that generates random web traffic noise to confuse trackers and protect user identity using Puppeteer and Node.js.",
    image: "/images/projects/entropy-dash.png", // Using a placeholder path for now
    role: "Full Stack Developer",
    company: {
      name: "Privacy Tools",
      description:
        'A collection of utilities designed to enhance digital privacy and anonymity.',
    },
    industry: ["Node.js", "Puppeteer", "Privacy"],
    period: "2023",
  },
  {
    id: 3,
    status: "Educational",
    title: "Swift Manual",
    description:
      "A comprehensive educational resource covering the fundamentals of Swift development, concurrency, and SwiftUI patterns for developers of all levels.",
    image: "/images/projects/swift-manual.png", // Using a placeholder path for now
    role: "Author & Developer",
    company: {
      name: "Educational Resource",
      description:
        'Curated knowledge and implementation patterns for the Apple development ecosystem.',
    },
    industry: ["Swift", "SwiftUI", "Education"],
    period: "2023 — 2024",
  },
]

export function ProjectSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100 mb-4">
            Selected Work
          </h1>
          <p className="text-neutral-400 max-w-xl">
            A collection of projects that showcase my approach to product design and system thinking.
          </p>
        </motion.div>

        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Project Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-orange-600 rounded-sm" />
              <span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                {project.status}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-4">
              {project.title}
            </h2>
            <p className="text-neutral-400 max-w-xl leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 0.995 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={project.image}
                  alt={`${project.title} Dashboard`}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 pt-10 border-t border-neutral-800/50">
              {/* Role */}
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                  Role
                </p>
                <p className="text-sm text-neutral-200">{project.role}</p>
              </div>

              {/* Company */}
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                  Company
                </p>
                <div className="space-y-1">
                  <p className="text-sm text-neutral-200">
                    {project.company.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {project.company.description}
                  </p>
                </div>
              </div>

              {/* Industry */}
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                  Industry
                </p>
                <p className="text-sm text-neutral-400">
                  {project.industry.join(" / ")}
                </p>
              </div>

              {/* Period */}
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                  Period
                </p>
                <p className="text-sm text-neutral-200">{project.period}</p>
              </div>
            </div>

            {/* View Case Study Button */}
            <div className="mt-8 mb-20">
              <motion.a
                href="/work"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-transparent text-neutral-300 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-100"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
