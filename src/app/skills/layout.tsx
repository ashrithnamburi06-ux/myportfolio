import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills & Stack",
  description: "Explore the full-stack developer skills of Ashrith Namburi, including Java, Spring Boot, React, Next.js, Node.js, Python, SQL, and modern web engineering tools.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/skills"
  },
  openGraph: {
    title: "Technical Skills & Stack | Ashrith Namburi",
    description: "Explore the full-stack developer skills of Ashrith Namburi, including Java, Spring Boot, React, Next.js, Node.js, Python, SQL, and modern web engineering tools.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/skills",
    siteName: "Ashrith Krishna Namburi"
  }
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
