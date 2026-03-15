"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-foreground text-balance">
              Building in the shadows.
              <br />
              <span className="text-muted-foreground">Shipping in the light.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-4"
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Independent developer crafting digital experiences with precision and purpose. 
              Focused on interfaces that feel inevitable.
            </p>
            
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for projects
              </span>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 lg:mt-32"
        >
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
            <span>Scroll</span>
            <span className="w-12 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
