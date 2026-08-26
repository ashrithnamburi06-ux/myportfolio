"use client";

import React from "react";
import { CheckCircle2, Layers } from "lucide-react";

export const ExperienceSummary: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-14 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          WHAT I&apos;VE BUILT SO FAR
        </h3>
      </div>
      <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
        Through freelance web development and structured virtual internships, I have gained end-to-end practical experience across the software development lifecycle — from initial requirement analysis and RESTful API architecture to responsive frontend implementation, database optimization, and cloud deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack Architecture</span>
        </div>
        <div className="p-3.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold text-slate-900 dark:text-white">Generative AI Integration</span>
        </div>
        <div className="p-3.5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold text-slate-900 dark:text-white">Real-World Deployment</span>
        </div>
      </div>
    </div>
  );
};
