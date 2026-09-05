import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KL CSE Capstone Management Portal",
  description: "Detailed case study of the role-based Capstone Project Management & Evaluation Portal built for KL University CSE Department by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management"
  },
  openGraph: {
    title: "KL CSE Capstone Management Portal | Ashrith Namburi",
    description: "Detailed case study of the role-based Capstone Project Management & Evaluation Portal built for KL University CSE Department by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/kl-cse-capstone-management",
    siteName: "Ashrith Namburi Portfolio"
  }
};

export default function CapstoneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
