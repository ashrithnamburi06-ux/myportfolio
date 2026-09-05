import type { Metadata } from "next";
import { GRStylesCaseStudyClient } from "@/components/GRStylesCaseStudyClient";

export const metadata: Metadata = {
  title: "GR STYLES Case Study",
  description: "Engineering case study of GR STYLES, a modern fashion e-commerce platform developed by Ashrith Namburi using Python, Django, MySQL, and modern web UI technologies.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles"
  },
  openGraph: {
    title: "GR STYLES Case Study | Ashrith Namburi",
    description: "Engineering case study of GR STYLES, a modern fashion e-commerce platform developed by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles"
  }
};

export default function GRStylesCaseStudyPage() {
  return <GRStylesCaseStudyClient />;
}
