"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export const ExperienceHero: React.FC = () => {
  return (
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
        <Briefcase className="w-3.5 h-3.5" />
        EXPERIENCE
      </div>
      <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
        Building. Learning.{" "}
        <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
          Delivering.
        </span>
      </h1>
      <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
        A timeline of the experiences, projects, and opportunities that have shaped my development journey.
      </p>
    </div>
  );
};
