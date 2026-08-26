"use client";

import React from "react";
import { FileText, CheckCircle2, Download, ExternalLink } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const ResumeHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 border-b border-slate-200 dark:border-emerald-900/40 pb-12">
      {/* LEFT CONTENT (7 cols) */}
      <div className="lg:col-span-7 space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <FileText className="w-3.5 h-3.5" />
          RESUME &amp; DOWNLOAD CENTER
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Everything You Need,{" "}
          <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
            In One Place.
          </span>
        </h1>

        <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
          Explore my resume, skills summary, and key highlights. Perfect for recruiters, collaborators, and opportunities.
        </p>

        {/* THREE COMPACT HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">Up-to-date Info</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">Verified Credentials</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">Easy Downloads</span>
          </div>
        </div>

        {/* HERO BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href={portfolioConfig.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>View Full Resume</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={portfolioConfig.resumePdfUrl}
            download="Ashrit-Krishna-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
          >
            <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* RIGHT DOCUMENT PREVIEW MOCKUP (5 cols) */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="w-full max-w-[380px] bg-white dark:bg-[#03120A] border-2 border-slate-200 dark:border-emerald-800/40 rounded-2xl p-6 shadow-2xl space-y-4 relative overflow-hidden group">
          {/* TOP GREEN DECORATIVE STRIP */}
          <div className="h-2 w-full bg-emerald-500 rounded-full mb-2" />

          <div className="border-b border-slate-200 dark:border-emerald-900/40 pb-3">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {portfolioConfig.name}
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">
              {portfolioConfig.title}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-gray-400 font-mono mt-0.5">
              ashrithnamburi06@gmail.com • Vijayawada, India
            </p>
          </div>

          <div className="space-y-2 text-[11px]">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block uppercase text-[10px] tracking-wider text-emerald-600 dark:text-emerald-400">
                Education
              </span>
              <p className="text-slate-700 dark:text-gray-300 font-medium">B.Tech CSE — KL University (CGPA 9.16)</p>
            </div>

            <div>
              <span className="font-bold text-slate-900 dark:text-white block uppercase text-[10px] tracking-wider text-emerald-600 dark:text-emerald-400">
                Core Stack
              </span>
              <p className="text-slate-700 dark:text-gray-300 font-medium">React, Next.js, TypeScript, Node.js, Python, Django, SQL</p>
            </div>

            <div>
              <span className="font-bold text-slate-900 dark:text-white block uppercase text-[10px] tracking-wider text-emerald-600 dark:text-emerald-400">
                Featured Work
              </span>
              <p className="text-slate-700 dark:text-gray-300 font-medium">GR STYLES E-Commerce, Dealrix, Google Gen AI Internship</p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-400 border-t border-slate-200 dark:border-emerald-900/30">
            <span>Verified Document</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">PDF Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
