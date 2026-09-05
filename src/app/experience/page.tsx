import type { Metadata } from "next";
import { ExperiencePageClient } from "@/components/ExperiencePageClient";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Work experience, freelancing contracts, and virtual internships of Ashrith Namburi, Full Stack Developer.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  },
  openGraph: {
    title: "Work Experience | Ashrith Namburi",
    description: "Work experience, freelancing contracts, and virtual internships of Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  }
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
