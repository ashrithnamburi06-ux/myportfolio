import type { Metadata } from "next";
import { ExperiencePageClient } from "@/components/ExperiencePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Namburi | Experience"
  },
  description: "Professional work experience, freelancing contracts, and virtual internships of Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  },
  openGraph: {
    title: "Ashrith Namburi | Experience",
    description: "Professional work experience, freelancing contracts, and virtual internships of Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  }
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
