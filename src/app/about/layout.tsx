import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ashrith Namburi",
  description: "Learn about Ashrith Namburi, a Full Stack Developer passionate about building modern, scalable and user-focused web applications.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/about"
  },
  openGraph: {
    title: "About Ashrith Namburi | Full Stack Developer",
    description: "Learn about Ashrith Namburi, a Full Stack Developer passionate about building modern, scalable and user-focused web applications.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/about",
    siteName: "Ashrith Namburi Portfolio"
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
