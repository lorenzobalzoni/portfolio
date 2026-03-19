"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { MouseEvent } from "react";

const focusTags = [
  "SwiftUI",
  "MapKit",
  "SceneKit",
  "Metal",
  "Vision",
  "Tailwind",
  "Node",
  "Python",
];

// --- NEW: Reusable Spotlight Wrapper ---
function SpotlightCard({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      className="group relative block rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden transition-colors hover:border-neutral-700/50"
    >
      {/* Dynamic Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 85, 0, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </Link>
  );
}

export function HomeSections() {
  return (
    <>
      {/* EXPLORE SECTION */}
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
              Selected work, experiments, and writing — organized across the
              site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard href="/work">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src="/images/projects/mineralogy-1.png"
                    alt="Selected work preview"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={false}
                  />
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                </div>

                <div className="relative p-6 z-20 bg-neutral-950">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase transition-colors group-hover:text-neutral-400">
                        Work
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-neutral-100">
                        Projects & case studies
                      </p>
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                        iOS, AR, privacy tooling, and educational builds.
                      </p>
                    </div>
                    {/* Animated Arrow */}
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-sm text-orange-500 font-medium transition-transform duration-300 ">
                      View
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard href="/thoughts">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src="/images/abstract-swirl.jpg"
                    alt="Thoughts preview"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                </div>
                <div className="relative p-6 z-20 bg-neutral-950">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase transition-colors group-hover:text-neutral-400">
                        Thoughts
                      </p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-neutral-100">
                        Ideas & lessons learned
                      </p>
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                        Notes on building, design decisions, and learning in
                        public.
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-sm text-orange-500 font-medium transition-transform duration-300 ">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCUS SECTION */}
      <section className="py-24 px-6 border-t border-neutral-800/50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
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
                I’m focused on Apple platforms and web technologies, with an
                emphasis on performance, privacy, and polish.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {focusTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  className="px-3.5 py-1.5 bg-neutral-900/80 text-neutral-300 text-sm font-medium rounded-lg border border-neutral-800 cursor-default backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // Upgraded CTA Card styling
            className="relative rounded-2xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 overflow-hidden shadow-2xl"
          >
            {/* Decorative corner light */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
                  Let’s build something
                </h2>
                <p className="mt-4 text-neutral-400 max-w-xl leading-relaxed">
                  Reach out if you want to collaborate, sponsor a project, or
                  talk about an idea.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/lorenzobalzoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5500] text-white text-sm font-medium rounded-xl transition-colors hover:bg-[#FF7733] shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)]"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href="mailto:hello@lorenzobalzoni.com"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 bg-transparent text-neutral-200 text-sm font-medium rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors" />
                  Email
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
