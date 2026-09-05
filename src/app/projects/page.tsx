import type { Metadata } from "next";
import { ProjectsListingClient } from "@/components/ProjectsListingClient";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Featured full-stack web applications, freelancing projects, and engineering case studies developed by Ashrith Namburi using React, Next.js, Python, and SQL.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects"
  },
  openGraph: {
    title: "Projects & Case Studies | Ashrith Namburi",
    description: "Featured full-stack web applications and engineering case studies developed by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects"
  }
};

export default function ProjectsPage() {
  return <ProjectsListingClient />;
}
