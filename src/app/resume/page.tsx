import type { Metadata } from "next";
import { ResumePageClient } from "@/components/ResumePageClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "Official resume of Ashrith Namburi, Full Stack Developer. Preview software engineering credentials or download Ashrith-Namburi-Resume.pdf.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/resume"
  },
  openGraph: {
    title: "Resume | Ashrith Namburi",
    description: "Official resume and technical qualifications of Ashrith Namburi, Full Stack Developer.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/resume"
  }
};

export default function ResumePage() {
  return <ResumePageClient />;
}
