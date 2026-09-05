import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";

  const projectMeta: Record<string, { title: string; desc: string }> = {
    dealrix: {
      title: "Dealrix Project Case Study",
      desc: "Real-time deal aggregation and discount discovery platform built by Ashrith Namburi using Node.js, Express, React, and SQL."
    },
    "ai-showcase": {
      title: "Google Gen AI Showcase Project",
      desc: "Generative AI application developed by Ashrith Namburi during the Google Generative AI Virtual Internship."
    },
    "developer-portfolio": {
      title: "Personal Developer Portfolio Case Study",
      desc: "High-performance developer portfolio built by Ashrith Namburi using Next.js App Router, TypeScript, and Tailwind CSS."
    }
  };

  const current = projectMeta[slug] || {
    title: "Project Case Study",
    desc: "Detailed project case study by Ashrith Namburi, Full Stack Developer."
  };

  return {
    title: current.title,
    description: current.desc,
    alternates: {
      canonical: `https://myportfolio-eight-ecru-21.vercel.app/projects/${slug}`
    },
    openGraph: {
      title: `${current.title} | Ashrith Namburi`,
      description: current.desc,
      url: `https://myportfolio-eight-ecru-21.vercel.app/projects/${slug}`,
      siteName: "Ashrith Namburi Portfolio"
    }
  };
}

export default function ProjectSlugLayout({ children }: Props) {
  return <>{children}</>;
}
