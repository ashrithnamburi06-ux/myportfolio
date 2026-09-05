import type { Metadata } from "next";
import { AchievementsPageClient } from "@/components/AchievementsPageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Namburi | Achievements & Certifications"
  },
  description: "Official achievements, verified certifications, SIH hackathon milestones, and appreciation letters earned by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/achievements"
  },
  openGraph: {
    title: "Ashrith Namburi | Achievements & Certifications",
    description: "Official achievements, verified certifications, SIH hackathon milestones, and appreciation letters earned by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/achievements"
  }
};

export default function AchievementsPage() {
  return <AchievementsPageClient />;
}
