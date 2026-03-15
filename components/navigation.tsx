"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "INTRO" },
  { href: "/work", label: "WORK" },
  { href: "/thoughts", label: "THOUGHTS" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-neutral-800/50"
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-neutral-100">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-600 rounded-sm" />
            <div className="w-2 h-2 bg-orange-600/60 rounded-sm" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-colors tracking-wide ${
                pathname === link.href
                  ? "text-neutral-100"
                  : "text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors">
            <Terminal className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
