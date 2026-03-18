"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"

const articles = [
  {
    id: 1,
    title: "The Architect Who Never Was, Part One",
    description:
      "How an engineering path shaped the way I design — and why it changed what I consider possible to build.",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "/images/abstract-swirl.jpg",
  },
  {
    id: 2,
    title: "Designing for Scale Without Losing Soul",
    description:
      "Balancing system consistency with moments of delight in enterprise products.",
    date: "February 22, 2026",
    readTime: "6 min read",
    image: "/images/abstract-swirl.jpg",
  },
]

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
              Latest Thoughts
            </h2>
            <motion.a
              href="/thoughts"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-700 bg-transparent text-sm text-neutral-400 rounded-lg transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-100"
            >
              All Thoughts
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
          <p className="text-neutral-400 mb-12">
            Ideas, observations, and lessons learned along the way.
          </p>

          {/* Articles List */}
          <div className="space-y-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 0.995 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-6 -m-6 rounded-2xl hover:bg-neutral-900/30 transition-colors"
                >
                  {/* Article Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 mb-3 group-hover:text-orange-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {article.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <motion.a
                      href="/thoughts"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-400 transition-colors font-medium w-fit"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Article Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[280px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
