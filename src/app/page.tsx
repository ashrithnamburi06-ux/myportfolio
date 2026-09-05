import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Ashrith Namburi | Full Stack Developer",
  description: "Official portfolio of Ashrith Namburi, a Full Stack Developer specializing in Java, Spring Boot, React, SQL and modern web development.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/"
  },
  openGraph: {
    title: "Ashrith Namburi | Full Stack Developer",
    description: "Official portfolio of Ashrith Namburi, a Full Stack Developer specializing in Java, Spring Boot, React, SQL and modern web development.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
