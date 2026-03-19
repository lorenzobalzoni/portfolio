"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
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

// --- Animation Variants for Orchestration ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// --- Upgraded Ambient Background ---
function AmbientBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Space Gradient Orbs */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255, 85, 0, 0.15) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Infinity Grid with Radial Mask */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      >
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="premium-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>

      {/* Floating Data Nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/40 rounded-full blur-[1px]"
          style={{
            left: `${15 + (i * 15) % 80}%`,
            top: `${20 + (i * 23) % 70}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="intro" className="relative pt-32 pb-24 px-6 min-h-[90vh] flex items-center bg-[#050505] overflow-hidden">
      <AmbientBackground />
      
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Orchestrated Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-medium text-green-400 backdrop-blur-sm cursor-default transition-colors hover:bg-green-500/15">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-100 leading-[1.05]">
              <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                Lorenzo
              </motion.span>
              <motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                Balzoni
              </motion.span>
            </h1>
            
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-neutral-400 max-w-md leading-relaxed"
            >
              Building the future of digital experiences. 14yo developer focused on Apple platforms and web technologies.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/lorenzobalzoni"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#FF5500] text-white text-sm font-medium rounded-xl transition-all duration-300 hover:bg-[#FF7733] shadow-[0_0_15px_rgba(255,85,0,0.2)] hover:shadow-[0_0_25px_rgba(255,85,0,0.4)]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                href="mailto:hello@lorenzobalzoni.com"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 bg-transparent text-neutral-300 text-sm font-medium rounded-xl transition-all duration-300 hover:text-neutral-100 hover:border-neutral-500"
              >
                Email
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-100 transition-colors group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Secondary Data */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-10 lg:pt-12"
          >
            {/* Currently */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-2">
                Currently
              </p>
              <div className="inline-flex items-center text-neutral-200 text-sm font-medium">
                Student & Independent Developer
              </div>
            </motion.div>

            {/* Focus */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase mb-3">
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="px-3.5 py-1.5 bg-neutral-900/80 text-neutral-300 text-xs font-medium rounded-lg border border-neutral-800 cursor-default backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800/50"
            >
              {[
                { label: "Years Coding", value: "3+" },
                { label: "Projects Built", value: "12+" },
                { label: "Tech Stacks", value: "5+" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group cursor-default"
                >
                  <p className="text-2xl font-semibold text-neutral-100 transition-colors group-hover:text-[#FF5500]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 transition-colors group-hover:text-neutral-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}