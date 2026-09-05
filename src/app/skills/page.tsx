import type { Metadata } from "next";
import { SkillsPageClient } from "@/components/SkillsPageClient";

export const metadata: Metadata = {
  title: "Technical Skills",
  description: "Comprehensive breakdown of technical skills, programming languages, web frameworks, databases, and engineering proficiencies of Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/skills"
  },
  openGraph: {
    title: "Technical Skills | Ashrith Namburi",
    description: "Technical skills, programming languages, web frameworks, and databases of Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/skills"
  }
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
