import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GR STYLES E-Commerce Case Study",
  description: "Detailed case study of GR STYLES, a full-stack fashion e-commerce platform built with Django, MySQL, and responsive UI by Ashrith Namburi.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles"
  },
  openGraph: {
    title: "GR STYLES E-Commerce Case Study | Ashrith Namburi",
    description: "Detailed case study of GR STYLES, a full-stack fashion e-commerce platform built with Django, MySQL, and responsive UI by Ashrith Namburi.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/projects/gr-styles",
    siteName: "Ashrith Namburi Portfolio"
  }
};

export default function GRStylesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
