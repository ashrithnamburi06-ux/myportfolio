"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { TechIcon } from "./TechIcon";

export const TechStackCard: React.FC = () => {
  return (
    <div className="w-full sm:w-[280px] md:w-[310px] bg-white/95 dark:bg-[#03120A]/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-emerald-900/40 shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-emerald-500/50 transition-all duration-300">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">&lt;/&gt;</span>
        <h4 className="text-slate-900 dark:text-white text-sm font-semibold tracking-wide">
          Tech I Work With
        </h4>
      </div>

      {/* CHIPS GRID */}
      <div className="grid grid-cols-2 gap-2.5">
        {portfolioConfig.technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 hover:bg-emerald-50 dark:bg-[#051A0F]/80 dark:hover:bg-[#082918] rounded-xl border border-slate-200/80 dark:border-emerald-900/30 hover:border-emerald-400/50 transition-all duration-200 group cursor-default"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-5 h-5">
              <TechIcon name={tech.name} className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900 dark:text-gray-200 dark:group-hover:text-white truncate">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
