import type { Metadata } from "next";
import { ExperiencePageClient } from "@/components/ExperiencePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Krishna Namburi | Experience"
  },
  description: "Professional work experience, freelancing contracts, and virtual internships of Ashrith Krishna Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  },
  openGraph: {
    title: "Ashrith Krishna Namburi | Experience",
    description: "Professional work experience, freelancing contracts, and virtual internships of Ashrith Krishna Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  }
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
