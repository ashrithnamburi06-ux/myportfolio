import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";
import { portfolioConfig } from "@/config/portfolio";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Ashrith Krishna Namburi",
    "jobTitle": "Full Stack Developer",
    "url": "https://myportfolio-eight-ecru-21.vercel.app/",
    "sameAs": [
      portfolioConfig.socialLinks.linkedin,
      portfolioConfig.socialLinks.github,
      portfolioConfig.socialLinks.instagram
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KL University"
    }
  }
};

export const metadata: Metadata = {
  title: {
    absolute: "About Ashrith Krishna Namburi | Full Stack Developer"
  },
  description: "Learn about Ashrith Krishna Namburi, a Full Stack Developer and Computer Science Engineering student at KL University, with experience building modern web applications.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/about"
  },
  openGraph: {
    title: "About Ashrith Krishna Namburi | Full Stack Developer",
    description: "Learn about Ashrith Krishna Namburi, a Full Stack Developer and Computer Science Engineering student at KL University, with experience building modern web applications.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
