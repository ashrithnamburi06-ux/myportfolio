import type { Metadata } from "next";
import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Ashrith Krishna Namburi | Full Stack Developer"
  },
  description: "Ashrith Krishna Namburi, Full Stack Developer and Computer Science Engineering student at KL University, building modern full-stack web applications and digital products.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/"
  },
  openGraph: {
    title: "Ashrith Krishna Namburi | Full Stack Developer",
    description: "Ashrith Krishna Namburi, Full Stack Developer and Computer Science Engineering student at KL University, building modern full-stack web applications and digital products.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/",
    siteName: "Ashrith Krishna Namburi"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
