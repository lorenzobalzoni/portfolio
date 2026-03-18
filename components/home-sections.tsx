"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Mail } from "lucide-react"

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

export function HomeSections() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
              Explore
            </h2>
            <p className="text-neutral-400 mt-3 max-w-xl">
              Selected work, experiments, and writing — organized across the site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                href="/work"
                className="block rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/projects/mineralogy-1.png"
                    alt="Selected work preview"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                        Work
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-neutral-100">
                        Projects & case studies
                      </p>
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                        iOS, AR, privacy tooling, and educational builds.
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-sm text-orange-500 font-medium">
                      View
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                href="/thoughts"
                className="block rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/abstract-swirl.jpg"
                    alt="Thoughts preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                        Thoughts
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-neutral-100">
                        Ideas & lessons learned
                      </p>
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                        Notes on building, design decisions, and learning in public.
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-sm text-orange-500 font-medium">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            <div>
              <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                Focus
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
                What I build with
              </h2>
              <p className="mt-4 text-neutral-400 max-w-xl leading-relaxed">
                I’m focused on Apple platforms and web technologies, with an emphasis on
                performance, privacy, and polish.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {focusTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="px-3 py-1.5 bg-neutral-900/80 text-neutral-300 text-xs font-medium rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
                  Let’s build something
                </h2>
                <p className="mt-4 text-neutral-400 max-w-xl leading-relaxed">
                  Reach out if you want to collaborate, sponsor a project, or talk about an idea.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/lorenzobalzoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href="mailto:hello@lorenzobalzoni.com"
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 bg-transparent text-neutral-300 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-100"
                >
                  <Mail className="w-4 h-4" />
                  Email
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

