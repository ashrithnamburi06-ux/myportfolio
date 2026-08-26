"use client";

import React from "react";
import { Trophy, CheckCircle2, Flag } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const AchievementTimeline: React.FC = () => {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-6">
        <Flag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          KEY ACHIEVEMENTS &amp; HACKATHONS
        </h2>
      </div>

      <div className="space-y-4">
        {portfolioConfig.achievementsList.map((ach) => (
          <div
            key={ach.id}
            className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 shadow-sm">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                    {ach.status}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">• {ach.organization}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{ach.title}</h3>
                <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 text-xs font-mono font-bold text-slate-700 dark:text-emerald-300 self-start md:self-auto">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Year {ach.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
