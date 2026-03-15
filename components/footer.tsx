"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="py-24 px-6 border-t border-border" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div>
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight max-w-lg text-balance">
              {"Let's build something extraordinary together."}
            </h2>
          </div>
          
          <nav className="flex items-center gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1], 
                  delay: 0.2 + index * 0.1 
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/40"
        >
          <span className="font-mono">2026</span>
          <span>Designed & built with precision</span>
        </motion.div>
      </div>
    </footer>
  );
}
