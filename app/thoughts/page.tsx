import { Navigation } from "@/components/navigation"
import { ThoughtsSection } from "@/components/thoughts-section"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thoughts | Alex Chen",
  description: "Ideas, observations, and lessons learned along the way.",
}

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navigation />
      <main className="pt-16">
        <ThoughtsSection />
      </main>
      <FooterSection />
    </div>
  )
}