import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Ashrith Namburi",
    "jobTitle": "Full Stack Developer",
    "url": "https://myportfolio-eight-ecru-21.vercel.app/",
    "sameAs": [
      "https://github.com/ashritkrishna",
      "https://linkedin.com/in/ashritkrishna",
      "https://www.instagram.com/__ashrith_namburi_06/"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KL University"
    }
  }
};

export const metadata: Metadata = {
  title: {
    absolute: "About Ashrith Namburi | Full Stack Developer"
  },
  description: "Learn about Ashrith Namburi, a Full Stack Developer and Computer Science Engineering student at KL University.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/about"
  },
  openGraph: {
    title: "About Ashrith Namburi | Full Stack Developer",
    description: "Learn about Ashrith Namburi, a Full Stack Developer and Computer Science Engineering student at KL University.",
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
