"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "INTRO" },
  { href: "/work", label: "WORK" },
  { href: "/thoughts", label: "THOUGHTS" },
]

export function Navigation() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  // Smart hide/show based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > 150 && latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      // Handles both initial load and scroll-hide states
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-neutral-800/40"
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        
        {/* Interactive Logo Mark */}
        <Link href="/" className="group flex items-center gap-2 text-neutral-100 outline-none">
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 bg-[#FF5500] rounded-[1px]" 
              whileHover={{ scale: 1.2, backgroundColor: "#FF7733" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.div 
              className="w-2 h-2 bg-[#FF5500]/60 rounded-[1px]" 
              whileHover={{ scale: 1.2, backgroundColor: "#FF7733" }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.05 }}
            />
          </div>
        </Link>

        {/* Sliding Pill Navigation */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-xs font-medium tracking-wide outline-none"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-neutral-50"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* The magic sliding pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-neutral-800/60 border border-neutral-700/50 rounded-full"
                      transition={{ 
                        type: "spring", 
                        bounce: 0.2, 
                        duration: 0.6 
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Terminal Button with Hover Ring */}
          <div className="w-[1px] h-4 bg-neutral-800 mx-2" /> {/* Subtle divider */}
          
          <motion.button 
            className="relative p-2 text-neutral-400 hover:text-neutral-100 transition-colors rounded-full group outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal className="w-4 h-4 relative z-10" />
            <div className="absolute inset-0 bg-neutral-800/0 group-hover:bg-neutral-800/50 rounded-full transition-colors duration-300" />
          </motion.button>
        </div>
        
      </nav>
    </motion.header>
  )
}