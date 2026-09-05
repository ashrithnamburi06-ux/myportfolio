import type { Metadata } from "next";
import { CapstoneCaseStudyClient } from "@/components/CapstoneCaseStudyClient";

export const metadata: Metadata = {
  title: "KL CSE Capstone Management Portal Case Study",
  description: "Comprehensive engineering case study of the KL CSE Capstone Management & Evaluation Portal designed and built by Ashrith Namburi using React 19, Firebase Auth, and Cloud Firestore.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management"
  },
  openGraph: {
    title: "KL CSE Capstone Management Portal Case Study | Ashrith Namburi",
    description: "Comprehensive engineering case study of the KL CSE Capstone Management & Evaluation Portal built by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management"
  }
};

export default function CapstoneCaseStudyPage() {
  return <CapstoneCaseStudyClient />;
}
