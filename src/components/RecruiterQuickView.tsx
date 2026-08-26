"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserCheck, Folder, Code, Briefcase, Trophy, ArrowRight, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const RecruiterQuickView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const recruiterLinks = [
    { label: "Summary & Highlights", href: "/about", icon: UserCheck, desc: "B.Tech CSE student at KL University" },
    { label: "Skills Snapshot", href: "/skills", icon: Code, desc: "React, Next.js, Node.js, Python, SQL" },
    { label: "Projects Overview", href: "/projects", icon: Folder, desc: "GR STYLES E-Commerce, Dealrix" },
    { label: "Experience Timeline", href: "/experience", icon: Briefcase, desc: "Google Gen AI Intern, Freelance" },
    { label: "Achievements", href: "/achievements", icon: Trophy, desc: "Infosys Springboard, HackerRank 5-Star" }
  ];

  return (
    <section className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
            FOR RECRUITERS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Quick Navigation &amp; One-Page Summary
          </h2>
        </div>

        {/* RECRUITER VIEW CARD ACTION */}
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95 self-start md:self-auto"
        >
          <span>View Recruiter Summary</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* QUICK ACCESS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {recruiterLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 hover:border-emerald-400/50 rounded-xl transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.label}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5 leading-tight">
                  {item.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* RECRUITER SUMMARY MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white bg-slate-100 dark:bg-emerald-950/60 rounded-full border border-slate-200 dark:border-emerald-800/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 dark:border-emerald-900/40 pb-3">
              <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase">
                ONE-PAGE RECRUITER SUMMARY
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {portfolioConfig.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Full Stack Developer | KL University B.Tech CSE (CGPA 9.16)
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
              <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30">
                <strong className="text-slate-900 dark:text-white block mb-1">Key Strengths:</strong>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Full-stack Web Engineering (React, Next.js, Node.js, Python, Django, SQL)</li>
                  <li>Generative AI endpoints &amp; cloud deployment (Google Gen AI Virtual Internship)</li>
                  <li>Clean code architecture, modular design, and 40% performance optimization</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30">
                <strong className="text-slate-900 dark:text-white block mb-1">Availability &amp; Contact:</strong>
                <p>Primary Email: <strong>ashrithnamburi06@gmail.com</strong></p>
                <p>Location: <strong>Vijayawada, India</strong></p>
                <p>Open to: Full-time software engineering roles &amp; freelance development</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
