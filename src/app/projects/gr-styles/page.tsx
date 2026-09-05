import type { Metadata } from "next";
import { GRStylesCaseStudyClient } from "@/components/GRStylesCaseStudyClient";

export const metadata: Metadata = {
  title: {
    absolute: "GR STYLES | E-Commerce Platform | Ashrith Krishna Namburi"
  },
  description: "Engineering case study of GR STYLES, a modern fashion e-commerce platform developed by Ashrith Krishna Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles"
  },
  openGraph: {
    title: "GR STYLES | E-Commerce Platform | Ashrith Krishna Namburi",
    description: "Engineering case study of GR STYLES, a modern fashion e-commerce platform developed by Ashrith Krishna Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles"
  }
};

export default function GRStylesCaseStudyPage() {
  return <GRStylesCaseStudyClient />;
}
