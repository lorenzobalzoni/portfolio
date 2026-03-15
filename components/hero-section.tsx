"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Github, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

const focusTags = [
  "SwiftUI",
  "MapKit",
  "SceneKit",
  "Metal",
  "Vision",
  "Tailwind",
  "Node",
  "Python",
]

// Animated grid background
function AnimatedGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(194, 65, 12, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -left-20 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(194, 65, 12, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="intro" className="relative pt-32 pb-24 px-6 min-h-[90vh] flex items-center">
      <AnimatedGrid />
      
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/80 border border-neutral-800 rounded-lg text-xs text-neutral-400 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-100 leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Lorenzo
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                Balzoni
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-neutral-400 max-w-md leading-relaxed"
            >
              Building the future of digital experiences. 14yo developer focused on Apple platforms and web technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                href="https://github.com/lorenzobalzoni"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                href="mailto:hello@lorenzobalzoni.com"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-transparent text-neutral-300 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-100"
              >
                Email
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:pt-12"
          >
            {/* Currently */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                Currently
              </p>
              <div
                className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-orange-500 transition-colors text-sm"
              >
                Student & Independent Developer
              </div>
            </motion.div>

            {/* Focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-3">
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                    className="px-3 py-1.5 bg-neutral-900/80 text-neutral-300 text-xs font-medium rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-800/50"
            >
              <div>
                <p className="text-2xl font-semibold text-neutral-100">3+</p>
                <p className="text-xs text-neutral-500 mt-1">Years Coding</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-neutral-100">12+</p>
                <p className="text-xs text-neutral-500 mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-neutral-100">5+</p>
                <p className="text-xs text-neutral-500 mt-1">Tech Stacks</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
