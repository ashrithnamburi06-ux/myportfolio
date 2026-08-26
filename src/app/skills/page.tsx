"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import { Code2, Server, Database } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      desc: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "React", level: "Advanced", desc: "Hooks, Context, Component Architecture" },
        { name: "Next.js", level: "Advanced", desc: "App Router, SSR, Server Components" },
        { name: "TypeScript", level: "Proficient", desc: "Strong Typing, Interfaces, Generics" },
        { name: "JavaScript", level: "Advanced", desc: "ES6+, Async/Await, DOM Logic" },
        { name: "HTML5", level: "Advanced", desc: "Semantic HTML, Accessibility" },
        { name: "CSS3", level: "Advanced", desc: "Flexbox, Grid, Custom Animations" }
      ]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      desc: "Designing scalable APIs, server architecture, and business logic.",
      skills: [
        { name: "Node.js", level: "Proficient", desc: "Event loop, REST APIs, Microservices" },
        { name: "Express.js", level: "Proficient", desc: "Middleware, Routing, Error Handling" },
        { name: "Python", level: "Advanced", desc: "Backend Development, Data Processing" },
        { name: "Django", level: "Proficient", desc: "ORMs, Authentication, Admin Workflows" },
        { name: "AWS", level: "Intermediate", desc: "Cloud Hosting, Storage, Deployment" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      desc: "Data persistence, query optimization, version control & DevOps.",
      skills: [
        { name: "SQL", level: "Advanced", desc: "Relational Queries, Schema Design" },
        { name: "MySQL", level: "Proficient", desc: "Indexes, Foreign Keys, Transactions" },
        { name: "PostgreSQL", level: "Proficient", desc: "Complex Joins, Performance Tuning" },
        { name: "Git", level: "Advanced", desc: "Branching, Pull Requests, Versioning" }
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Technical Stack
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Skills &amp;{" "}
            <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
              Proficiencies.
            </span>
          </h1>
          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            A comprehensive breakdown of technologies, frameworks, programming languages, and databases I leverage to build production-grade web applications.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="space-y-10 mb-14">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h2>
                    <p className="text-slate-600 dark:text-gray-400 text-xs">{cat.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 hover:border-emerald-400/50 rounded-xl transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <TechIcon name={skill.name} className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                          <span className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</span>
                        </div>
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/90 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
