import type { Metadata } from "next";
import { SkillsPageClient } from "@/components/SkillsPageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Krishna Namburi | Skills & Technologies"
  },
  description: "Technical skills, programming languages, web frameworks, and engineering proficiencies of Ashrith Krishna Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/skills"
  },
  openGraph: {
    title: "Ashrith Krishna Namburi | Skills & Technologies",
    description: "Technical skills, programming languages, web frameworks, and engineering proficiencies of Ashrith Krishna Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/skills"
  }
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
