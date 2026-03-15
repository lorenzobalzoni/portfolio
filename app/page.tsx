import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navigation />
      <main>
        <HeroSection />
      </main>
      <FooterSection />
    </div>
  )
}
