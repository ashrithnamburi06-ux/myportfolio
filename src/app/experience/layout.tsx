import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience & Internships",
  description: "Review Ashrith Namburi's professional engineering experience, freelance full-stack projects, and Google Generative AI Virtual Internship work.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/experience"
  },
  openGraph: {
    title: "Work Experience & Internships | Ashrith Namburi",
    description: "Review Ashrith Namburi's professional engineering experience, freelance full-stack projects, and Google Generative AI Virtual Internship work.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/experience",
    siteName: "Ashrith Krishna Namburi"
  }
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
