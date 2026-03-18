"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PixelatedText } from "./pixelated-text"

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/lorenzobalzoni" },
  { label: "EMAIL", href: "mailto:hello@lorenzobalzoni.com" },
]

export function FooterSection() {
  return (
    <footer className="pt-24 pb-8 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top row with copyright and social links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-16 border-b border-neutral-800/50">
            <p className="text-sm text-neutral-500">
              © 2023 — 2026 Lorenzo Balzoni
            </p>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors tracking-wide"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Giant pixelated footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative mt-20 mb-8"
        >
          <div className="flex justify-center">
            <PixelatedText text="FOOTER" pixelSize={10} gap={2} />
          </div>
          {/* Gradient overlay to fade bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </footer>
  )
}
