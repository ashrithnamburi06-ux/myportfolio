import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Download",
  description: "View and download the official resume of Ashrith Namburi, Full Stack Developer. ATS-optimized software engineering resume.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/resume"
  },
  openGraph: {
    title: "Resume & Download | Ashrith Namburi",
    description: "View and download the official resume of Ashrith Namburi, Full Stack Developer. ATS-optimized software engineering resume.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/resume",
    siteName: "Ashrith Namburi Portfolio"
  }
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
