"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300"
        >
          jd.
        </Link>
        
        <Link
          href="#contact"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}
