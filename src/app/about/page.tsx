import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ashrith Namburi, a Full Stack Developer and Computer Science Engineering student at KL University specializing in React, Next.js, Java, and modern web application development.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/about"
  },
  openGraph: {
    title: "About | Ashrith Namburi",
    description: "Learn about Ashrith Namburi, a Full Stack Developer and Computer Science Engineering student at KL University.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/about"
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
