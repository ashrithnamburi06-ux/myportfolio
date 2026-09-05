import type { Metadata } from "next";
import { AchievementsPageClient } from "@/components/AchievementsPageClient";

export const metadata: Metadata = {
  title: "Achievements & Recognition",
  description: "Official achievements, verified Oracle & Google AI certifications, Smart India Hackathon milestones, and academic appreciation earned by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/achievements"
  },
  openGraph: {
    title: "Achievements & Recognition | Ashrith Namburi",
    description: "Official achievements, verified certifications, and academic appreciation earned by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/achievements"
  }
};

export default function AchievementsPage() {
  return <AchievementsPageClient />;
}
