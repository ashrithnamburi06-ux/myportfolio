"use client";

import React, { useState } from "react";
import { Calendar, Building2, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { ExperienceItem } from "@/config/portfolio";

interface ExperienceCardProps {
  exp: ExperienceItem;
  isLast?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* VERTICAL CONNECTOR & EMERALD DOT */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold z-10 shadow-[0_0_15px_rgba(0,200,83,0.3)]">
          <Building2 className="w-5 h-5" />
        </div>
        {!isLast && (
          <div className="w-[2px] flex-grow bg-slate-200 dark:bg-emerald-900/40 my-2 group-hover:bg-emerald-500/50 transition-colors" />
        )}
      </div>

      {/* CARD CONTAINER */}
      <div className="flex-1 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 shadow-md hover:border-emerald-400/50 transition-all duration-300 mb-8">
        {/* CARD TOP HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                {exp.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                • {exp.organization}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {exp.role}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 text-xs font-mono text-slate-700 dark:text-emerald-300 self-start sm:self-auto">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* TECH CHIPS */}
        <div className="flex flex-wrap items-center gap-2 my-4">
          {exp.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-[#051A0F] border border-emerald-200 dark:border-emerald-900/40 text-slate-800 dark:text-emerald-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* TOGGLE EXPAND BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline pt-1 focus:outline-none"
        >
          <span>{expanded ? "Close Details" : "View Experience"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* EXPANDABLE RESPONSIBILITIES AREA */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-emerald-900/30 space-y-2.5 animate-fade-in">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Responsibilities &amp; Key Focus:
            </h4>
            {exp.responsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {resp}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
