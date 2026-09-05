import type { Metadata } from "next";
import { CapstoneCaseStudyClient } from "@/components/CapstoneCaseStudyClient";

export const metadata: Metadata = {
  title: {
    absolute: "KL CSE Capstone Management Portal | Ashrith Namburi"
  },
  description: "Engineering case study of the role-based Capstone Management Portal designed and built by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management"
  },
  openGraph: {
    title: "KL CSE Capstone Management Portal | Ashrith Namburi",
    description: "Engineering case study of the role-based Capstone Management Portal designed and built by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management"
  }
};

export default function CapstoneCaseStudyPage() {
  return <CapstoneCaseStudyClient />;
}
