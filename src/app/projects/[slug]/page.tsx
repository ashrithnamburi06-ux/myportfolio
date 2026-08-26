"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import {
  ExternalLink,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

const projectDataMap: Record<
  string,
  {
    title: string;
    subtitle: string;
    category: string;
    description: string;
    highlights: string[];
    technologies: string[];
    overview: string;
    demoUrl: string;
    githubUrl: string;
  }
> = {
  dealrix: {
    title: "Dealrix",
    subtitle: "Real-World Deals & Discounts Web Application",
    category: "Full-Stack Web App",
    description: "Real-time deal aggregation and discount discovery web platform enabling users to browse, filter, and track regional shopping offers.",
    highlights: ["Real-time Aggregation", "RESTful API", "User Bookmarks", "SQL Database"],
    technologies: ["Node.js", "Express.js", "React", "SQL", "Supabase"],
    overview: "Dealrix aggregates live shopping deals and regional discounts from multiple online retailers into one unified dashboard. Built with a scalable Node.js/Express backend and a modern React frontend.",
    demoUrl: "https://github.com/ashritkrishna",
    githubUrl: "https://github.com/ashritkrishna"
  },
  "ai-showcase": {
    title: "Google Gen AI Showcase",
    subtitle: "Intelligent Generative AI Web Application",
    category: "AI & Machine Learning",
    description: "Web application developed during the Google Generative AI Virtual Internship, integrating LLM APIs and prompt engineering pipelines.",
    highlights: ["Generative Models", "Prompt Pipelines", "Google Cloud", "Fast Execution"],
    technologies: ["Python", "AWS", "Node.js", "Express.js"],
    overview: "Showcases hands-on implementations of Generative AI APIs, intelligent text/code synthesis workflows, and cloud-based AI deployments.",
    demoUrl: "https://github.com/ashritkrishna",
    githubUrl: "https://github.com/ashritkrishna"
  },
  "developer-portfolio": {
    title: "Personal Developer Portfolio",
    subtitle: "High-Performance Portfolio & Case Studies",
    category: "Web Engineering",
    description: "Custom personal developer portfolio engineered with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.",
    highlights: ["App Router", "TypeScript", "Tailwind CSS", "100% Responsive"],
    technologies: ["Next.js", "React", "Python", "SQL"],
    overview: "Designed and developed from scratch to showcase full-stack projects, interactive case studies, technical skills, and achievements.",
    demoUrl: "https://github.com/ashritkrishna",
    githubUrl: "https://github.com/ashritkrishna"
  }
};

export default function GenericProjectCaseStudyPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "dealrix";
  const proj = projectDataMap[slug] || projectDataMap["dealrix"];

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* BREADCRUMB & BACK BUTTON */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span>/</span>
            <span className="text-slate-600 dark:text-gray-300">{proj.title}</span>
            <span>/</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Case Study</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-white hover:border-emerald-400/40 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* HERO */}
        <div className="mb-10 border-b border-slate-200 dark:border-emerald-900/40 pb-8">
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            {proj.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            {proj.title}
          </h1>
          <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-lg mb-4">
            {proj.subtitle}
          </p>

          <p className="text-slate-700 dark:text-gray-300 text-base max-w-3xl leading-relaxed mb-6">
            {proj.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={proj.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
            >
              <span>View Code</span>
              <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </a>
          </div>
        </div>

        {/* OVERVIEW & TECH STACK GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-8 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h3>
            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {proj.overview}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3">Key Highlights</h4>
            <div className="grid grid-cols-2 gap-2.5">
              {proj.highlights.map((hl, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
            <div className="space-y-2.5">
              {proj.technologies.map((t, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
                  <TechIcon name={t} className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-900 dark:text-white font-semibold text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
