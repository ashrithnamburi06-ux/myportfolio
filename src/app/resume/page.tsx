import type { Metadata } from "next";
import { ResumePageClient } from "@/components/ResumePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Krishna Namburi | Resume"
  },
  description: "Official resume of Ashrith Krishna Namburi, Full Stack Developer. View online or download Ashrith-Namburi-Resume.pdf.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/resume"
  },
  openGraph: {
    title: "Ashrith Krishna Namburi | Resume",
    description: "Official resume of Ashrith Krishna Namburi, Full Stack Developer. View online or download Ashrith-Namburi-Resume.pdf.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/resume"
  }
};

export default function ResumePage() {
  return <ResumePageClient />;
}
