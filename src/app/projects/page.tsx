"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import {
  ExternalLink,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ProjectsListingPage() {
  const projects = [
    {
      id: "kl-cse-capstone-management",
      title: "KL CSE Capstone Management & Evaluation Portal",
      subtitle: "Role-Based Capstone Project Management, Assignment, Evaluation & Academic Review Platform",
      category: "Featured Academic ERP & Evaluation Platform",
      description: "Designed and engineered a role-based capstone management platform that centralizes student/team assignments, evaluator workflows, rubric-driven assessments, attendance, review cycles, and administrative evaluation tracking.",
      highlights: ["Role-Based Access (5 Roles)", "Deterministic Identity Resolution", "Rubric-Driven Assessments", "Cross-Evaluator Mark Isolation", "Bulk CSV/XLSX Sync"],
      technologies: ["React", "Vite", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "PapaParse", "jsPDF"],
      featured: true,
      detailUrl: "/projects/kl-cse-capstone-management",
      githubUrl: "https://github.com/reviewportalklu-cse2/capstone"
    },
    {
      id: "gr-styles",
      title: "GR STYLES",
      subtitle: "Modern Fashion E-Commerce Web Platform",
      category: "Featured Full-Stack Web Platform",
      description: "A full-stack, responsive and feature-rich online shopping platform built with Python, Django, MySQL, and modern web UI technologies.",
      highlights: ["100% Responsive", "Secure Auth", "Fast Load Time", "Scalable Architecture"],
      technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "MySQL", "Bootstrap"],
      featured: true,
      image: "/images/gr-styles-mockup.png",
      detailUrl: "/projects/gr-styles",
      demoUrl: "https://github.com/ashritkrishna",
      githubUrl: "https://github.com/ashritkrishna"
    },
    {
      id: "dealrix",
      title: "Dealrix",
      subtitle: "Real-World Deals & Discounts Web Application",
      category: "Full-Stack Web App",
      description: "Real-time deal aggregation and discount discovery web platform enabling users to browse, filter, and track regional shopping offers.",
      highlights: ["Real-time Aggregation", "RESTful API", "User Bookmarks", "SQL Database"],
      technologies: ["Node.js", "Express.js", "React", "SQL", "Supabase"],
      featured: false,
      detailUrl: "/projects/dealrix",
      demoUrl: "https://github.com/ashritkrishna",
      githubUrl: "https://github.com/ashritkrishna"
    },
    {
      id: "ai-showcase",
      title: "Google Gen AI Showcase",
      subtitle: "Intelligent Generative AI Web Application",
      category: "AI & Machine Learning",
      description: "Web application developed during the Google Generative AI Virtual Internship, integrating LLM APIs and prompt engineering pipelines.",
      highlights: ["Generative Models", "Prompt Pipelines", "Google Cloud", "Fast Execution"],
      technologies: ["Python", "AWS", "Node.js", "Express.js"],
      featured: false,
      detailUrl: "/projects/ai-showcase",
      demoUrl: "https://github.com/ashritkrishna",
      githubUrl: "https://github.com/ashritkrishna"
    },
    {
      id: "developer-portfolio",
      title: "Personal Developer Portfolio",
      subtitle: "High-Performance Portfolio & Case Studies",
      category: "Web Engineering",
      description: "Custom personal developer portfolio engineered with Next.js 14+ App Router, TypeScript, Tailwind CSS, and Framer Motion.",
      highlights: ["App Router", "TypeScript", "Tailwind CSS", "100% Responsive"],
      technologies: ["Next.js", "React", "Python", "SQL"],
      featured: false,
      detailUrl: "/projects/developer-portfolio",
      demoUrl: "https://github.com/ashritkrishna",
      githubUrl: "https://github.com/ashritkrishna"
    }
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* PAGE HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Projects
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Featured Works &amp;{" "}
            <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
              Digital Solutions.
            </span>
          </h1>
          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            A showcase of my full-stack web applications, real-world platforms, and technical case studies. Click <strong>Explore Project</strong> on any project to view its detailed architectural case study.
          </p>
        </div>

        {/* PROJECTS LISTING GRID */}
        <div className="space-y-8 mb-14">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`bg-white dark:bg-[#03120A]/90 border rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-md ${
                proj.featured
                  ? "border-emerald-300 dark:border-emerald-500/50 shadow-xl bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-[#03120A] dark:via-[#04190E] dark:to-[#020805]"
                  : "border-slate-200 dark:border-emerald-900/40 hover:border-emerald-400/40"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* LEFT CONTENT AREA */}
                <div className={`${proj.featured && proj.image ? "lg:col-span-7" : "lg:col-span-12"} space-y-4`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    {proj.featured && (
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                        ⭐ Featured Project
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {proj.title}
                  </h2>
                  <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                    {proj.subtitle}
                  </p>

                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                    {proj.description}
                  </p>

                  {/* HIGHLIGHT BADGES */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {proj.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-gray-300 text-xs font-medium"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  {/* TECH CHIPS */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {proj.technologies.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-[#082918] border border-emerald-200 dark:border-emerald-900/50 text-xs font-mono text-emerald-800 dark:text-emerald-300"
                      >
                        <TechIcon name={t} className="w-3.5 h-3.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* ACTION BUTTONS INCLUDING EXPLORE PROJECT */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-emerald-900/40">
                    {/* PRIMARY EXPLORE PROJECT BUTTON */}
                    <Link
                      href={proj.detailUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95 group"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* LIVE DEMO */}
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-[#051A0F] dark:hover:bg-[#082918] text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </a>

                    {/* GITHUB */}
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-[#051A0F] dark:hover:bg-[#082918] text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* RIGHT MOCKUP PREVIEW */}
                {proj.featured && proj.image && (
                  <div className="lg:col-span-5 flex justify-center">
                    <Link href={proj.detailUrl} className="group block relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-emerald-800/40 shadow-xl hover:border-emerald-400/60 transition-all duration-300">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        width={600}
                        height={380}
                        className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#020805] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-emerald-600 text-white font-semibold text-xs rounded-lg shadow-md flex items-center gap-1.5">
                        <span>View Detailed Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
