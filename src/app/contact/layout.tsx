import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Connect",
  description: "Get in touch with Ashrith Namburi, Full Stack Developer. Open for software engineering roles, full-stack freelance projects, and technical collaborations.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/contact"
  },
  openGraph: {
    title: "Contact & Connect | Ashrith Namburi",
    description: "Get in touch with Ashrith Namburi, Full Stack Developer. Open for software engineering roles, full-stack freelance projects, and technical collaborations.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/contact",
    siteName: "Ashrith Krishna Namburi"
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
