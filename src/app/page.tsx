import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Namburi | Full Stack Developer"
  },
  description: "Official portfolio of Ashrith Namburi, a Full Stack Developer building modern, scalable and user-focused web applications.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/"
  },
  openGraph: {
    title: "Ashrith Namburi | Full Stack Developer",
    description: "Official portfolio of Ashrith Namburi, a Full Stack Developer building modern, scalable and user-focused web applications.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
