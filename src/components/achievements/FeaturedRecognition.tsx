"use client";

import React, { useState } from "react";
import { Award, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { AppreciationLetterViewer } from "./AppreciationLetterViewer";

export const FeaturedRecognition: React.FC = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const rec = portfolioConfig.featuredRecognition;

  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          {rec.title}
        </h2>
      </div>

      {/* PROMINENT FEATURED CARD */}
      <div className="bg-gradient-to-br from-white via-emerald-50/40 to-white dark:from-[#03120A] dark:via-[#04190E] dark:to-[#020805] border-2 border-emerald-400/60 dark:border-emerald-500/50 rounded-2xl p-6 sm:p-8 shadow-xl dark:shadow-[0_0_30px_rgba(0,200,83,0.15)] mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* LEFT RECOGNITION CONTENT (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                ⭐ Special Appreciation
              </span>
              <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                {rec.issuer} • Year {rec.period}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {rec.mainTitle}
            </h3>

            <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-base">
              &ldquo;{rec.description}&rdquo;
            </p>

            {/* BUTTON TO VIEW APPRECIATION LETTER */}
            <div className="pt-2">
              <button
                onClick={() => setViewerOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 group"
              >
                <FileText className="w-4 h-4" />
                <span>View Appreciation Letter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT LETTER PREVIEW CARD (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              onClick={() => setViewerOpen(true)}
              className="w-full max-w-[280px] bg-white dark:bg-[#051A0F] border border-emerald-300 dark:border-emerald-700/50 rounded-xl p-4 shadow-md cursor-pointer hover:border-emerald-500 transition-all group relative overflow-hidden"
            >
              <div className="text-center space-y-2 py-3">
                <FileText className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  HOD Appreciation Letter
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">
                  Click to open interactive document viewer
                </p>
                <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-200 dark:border-emerald-800/40">
                  Verified PDF / Image Viewer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECOGNITION STORY: WHAT THIS REPRESENTS */}
      <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">WHAT THIS REPRESENTS</h3>
        <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {rec.story}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30 flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Proactive Initiative</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30 flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Real Department Impact</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30 flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Delivered Usable Website</span>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30 flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Formal Written Recognition</span>
          </div>
        </div>
      </div>

      {/* DOCUMENT VIEWER MODAL */}
      <AppreciationLetterViewer
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </section>
  );
};
