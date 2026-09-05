import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Explore web development projects, academic ERP systems, and full-stack software applications built by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects"
  },
  openGraph: {
    title: "Projects & Case Studies | Ashrith Namburi",
    description: "Explore web development projects, academic ERP systems, and full-stack software applications built by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects",
    siteName: "Ashrith Namburi Portfolio"
  }
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
