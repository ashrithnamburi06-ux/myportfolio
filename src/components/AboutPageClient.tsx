"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { portfolioConfig } from "@/config/portfolio";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const AboutPageClient: React.FC = () => {
  const journeySteps = [
    {
      year: "2023",
      title: "Started B.Tech Journey",
      desc: "Began Computer Science Engineering at KL University, strengthening programming fundamentals."
    },
    {
      year: "2024",
      title: "Built Academic Projects",
      desc: "Strengthened Data Structures & Algorithms, Web Development, and relational databases."
    },
    {
      year: "2025",
      title: "Google Gen AI Internship",
      desc: "Completed Google Generative AI Virtual Internship and worked on full-stack freelance applications."
    },
    {
      year: "Now",
      title: "Building Impactful Solutions",
      desc: "Continuing to solve real-world problems and level up full-stack engineering skills."
    }
  ];

  const devApproach = [
    { num: "01", title: "Understand", desc: "Analyze requirements and break down complex problems." },
    { num: "02", title: "Design", desc: "Design application architecture and choose scalable technologies." },
    { num: "03", title: "Build", desc: "Write clean, modular, efficient code following best practices." },
    { num: "04", title: "Test", desc: "Test thoroughly to ensure reliability, security, and performance." },
    { num: "05", title: "Deploy", desc: "Deploy and monitor applications for optimal user experience." }
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HERO SECTION OF ABOUT */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            About Me
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            I build digital solutions that create{" "}
            <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
              real impact.
            </span>
          </h1>
          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-3">
            I&apos;m Ashrith Krishna Namburi, a Full Stack Developer and Computer Science Engineering student at KL University passionate about building modern, scalable and user-focused web applications.
          </p>
          <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            I enjoy solving real-world problems and writing clean, efficient code that makes a genuine difference.
          </p>
        </div>

        {/* MY JOURNEY SO FAR */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            My Journey So Far
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#03120A]/80 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-5 hover:border-emerald-400/50 transition-all duration-300 shadow-md group"
              >
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-extrabold text-lg block mb-2 group-hover:scale-105 transition-transform">
                  {step.year}
                </span>
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEVELOPMENT APPROACH & EDUCATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* DEVELOPMENT APPROACH (8 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#03120A]/80 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              My Development Approach
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {devApproach.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-[#051A0F]/90 border border-slate-200 dark:border-emerald-900/30 rounded-xl p-3.5 flex flex-col justify-between hover:border-emerald-400/40 transition-colors"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold mb-2">
                    {item.num}
                  </span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-600 dark:text-gray-400 text-[11px] leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION & STATS (4 cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-[#03120A]/80 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Education
                </h2>
                <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold">
                  ID: 2300033155
                </span>
              </div>

              <div className="mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 block">
                  Full Name
                </span>
                <span className="text-base font-black text-slate-900 dark:text-white tracking-tight">
                  {portfolioConfig.fullName}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {portfolioConfig.education.institution}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-2">
                {portfolioConfig.education.degree}
              </p>
              <p className="text-slate-600 dark:text-gray-400 text-xs mb-2">
                {portfolioConfig.education.timeline} • CGPA:{" "}
                <span className="text-slate-900 dark:text-white font-bold font-mono">
                  {portfolioConfig.education.cgpa}
                </span>
              </p>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
                Student ID: <strong className="text-slate-800 dark:text-emerald-300">2300033155</strong>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-emerald-900/40">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
                What Drives Me
              </h4>
              <p className="text-slate-700 dark:text-gray-300 text-xs italic leading-relaxed">
                &ldquo;Solving challenging problems, writing clean code, and learning new technologies keep me excited every single day.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES PREVIEW & CTA */}
        <div className="bg-white dark:bg-[#03120A]/80 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mb-14">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Want to see my full technical skill breakdown?
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm">
              Explore my technical proficiencies, frameworks, databases, and DevOps tools.
            </p>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>View Technical Skills</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};
