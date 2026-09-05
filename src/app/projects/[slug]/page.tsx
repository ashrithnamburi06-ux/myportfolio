import type { Metadata } from "next";
import { GenericProjectCaseStudyClient, GenericProjectData } from "@/components/GenericProjectCaseStudyClient";

const projectDataMap: Record<string, GenericProjectData> = {
  dealrix: {
    id: "dealrix",
    title: "Dealrix",
    subtitle: "Real-World Deals & Discounts Web Application",
    category: "Full-Stack Web App",
    description: "Real-time deal aggregation and discount discovery web platform enabling users to browse, filter, and track regional shopping offers.",
    highlights: ["Real-time Aggregation", "RESTful API", "User Bookmarks", "SQL Database"],
    technologies: ["Node.js", "Express.js", "React", "SQL", "Supabase"],
    overview: "Dealrix aggregates live shopping deals and regional discounts from multiple online retailers into one unified dashboard. Built by Ashrith Namburi with a scalable Node.js/Express backend and a modern React frontend.",
    demoUrl: "https://www.dealrix.in/",
    githubUrl: "https://github.com/ashritkrishna"
  },
  "ai-showcase": {
    id: "ai-showcase",
    title: "Google Gen AI Showcase",
    subtitle: "Intelligent Generative AI Web Application",
    category: "AI & Machine Learning",
    description: "Web application developed during the Google Generative AI Virtual Internship, integrating LLM APIs and prompt engineering pipelines.",
    highlights: ["Generative Models", "Prompt Pipelines", "Google Cloud", "Fast Execution"],
    technologies: ["Python", "AWS", "Node.js", "Express.js"],
    overview: "Showcases hands-on implementations of Generative AI APIs, intelligent text/code synthesis workflows, and cloud-based AI deployments by Ashrith Namburi.",
    demoUrl: "https://github.com/ashritkrishna",
    githubUrl: "https://github.com/ashritkrishna"
  },
  "developer-portfolio": {
    id: "developer-portfolio",
    title: "Personal Developer Portfolio",
    subtitle: "High-Performance Portfolio & Case Studies",
    category: "Web Engineering",
    description: "Custom personal developer portfolio engineered with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.",
    highlights: ["App Router", "TypeScript", "Tailwind CSS", "100% Responsive"],
    technologies: ["Next.js", "React", "Python", "SQL"],
    overview: "Designed and developed from scratch by Ashrith Namburi to showcase full-stack projects, interactive case studies, technical skills, and achievements.",
    demoUrl: "https://myportfolio-eight-ecru-21.vercel.app/",
    githubUrl: "https://github.com/ashritkrishna"
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proj = projectDataMap[slug] || projectDataMap["dealrix"];

  return {
    title: `${proj.title} | Ashrith Namburi`,
    description: `${proj.description} - Case study developed by Ashrith Namburi.`,
    alternates: {
      canonical: `https://myportfolio-eight-ecru-21.vercel.app/projects/${slug}`
    },
    openGraph: {
      title: `${proj.title} | Ashrith Namburi`,
      description: proj.description,
      url: `https://myportfolio-eight-ecru-21.vercel.app/projects/${slug}`
    }
  };
}

export function generateStaticParams() {
  return [
    { slug: "dealrix" },
    { slug: "ai-showcase" },
    { slug: "developer-portfolio" }
  ];
}

export default async function GenericProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const proj = projectDataMap[slug] || projectDataMap["dealrix"];
  return <GenericProjectCaseStudyClient proj={proj} />;
}
