import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Certifications",
  description: "View honors, academic achievements, Smart India Hackathon qualification, and cloud/AI certifications earned by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/achievements"
  },
  openGraph: {
    title: "Achievements & Certifications | Ashrith Namburi",
    description: "View honors, academic achievements, Smart India Hackathon qualification, and cloud/AI certifications earned by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/achievements",
    siteName: "Ashrith Krishna Namburi"
  }
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
