import type { Metadata } from "next";
import { ProjectsListingClient } from "@/components/ProjectsListingClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Namburi | Projects"
  },
  description: "Featured full-stack web applications, freelancing projects, and engineering case studies by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects"
  },
  openGraph: {
    title: "Ashrith Namburi | Projects",
    description: "Featured full-stack web applications, freelancing projects, and engineering case studies by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects"
  }
};

export default function ProjectsPage() {
  return <ProjectsListingClient />;
}
