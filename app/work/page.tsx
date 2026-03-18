import { Navigation } from "@/components/navigation";
import { ProjectSection } from "@/components/project-section";
import { FooterSection } from "@/components/footer-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Lorenzo Balzoni",
  description: "Selected projects and case studies from my design career.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navigation />
      <main className="pt-16">
        <ProjectSection />
      </main>
      <FooterSection />
    </div>
  );
}
