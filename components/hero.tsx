"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
  // Added the : Variants type to fix the TypeScript errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Added the : Variants type here too
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Subtle ambient background glow to match the "light/shadows" theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-100/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-foreground text-balance">
              <motion.div variants={textVariants}>
                Building in the shadows.
              </motion.div>
              <motion.div variants={textVariants} className="text-muted-foreground mt-2">
                Shipping in the <span className="text-foreground transition-colors duration-700 hover:text-orange-500 cursor-default">light.</span>
              </motion.div>
            </h1>
          </div>
          
          <motion.div
            variants={textVariants}
            className="lg:col-span-4 flex flex-col items-start lg:pb-2"
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Independent developer crafting digital experiences with precision and purpose. 
              Focused on interfaces that feel inevitable.
            </p>
            
            <div className="mt-8 flex items-center">
              {/* Upgraded Glassmorphism Status Badge */}
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 transition-colors cursor-default backdrop-blur-sm"
              >
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                  Available for new projects
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Upgraded Scroll Indicator with Kinetic Scanning Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-32 lg:mt-40"
        >
          <div className="flex items-center gap-6 text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em]">
            <span>Scroll</span>
            <div className="relative w-16 h-[1px] bg-border overflow-hidden">
              <motion.div 
                className="absolute inset-0 w-full h-full bg-foreground/40"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}