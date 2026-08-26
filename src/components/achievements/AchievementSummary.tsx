"use client";

import React from "react";
import { CheckCircle2, Award, Trophy, Star } from "lucide-react";

export const AchievementSummary: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-14 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          MILESTONES SUMMARY
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HACKATHONS */}
        <div className="p-5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <Trophy className="w-4 h-4" />
            <span>ACHIEVEMENTS</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Smart India Hackathon</h4>
          <p className="text-xs text-slate-600 dark:text-gray-400">Internal Round Qualified (2024)</p>
        </div>

        {/* CERTIFICATIONS */}
        <div className="p-5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cloud, AI &amp; React</h4>
          <p className="text-xs text-slate-600 dark:text-gray-400">Oracle AI, Google Gen AI, React (IBM), HackerRank 5-Star</p>
        </div>

        {/* RECOGNITION */}
        <div className="p-5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>RECOGNITION</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Department Website</h4>
          <p className="text-xs text-slate-600 dark:text-gray-400">Formal HOD Written Appreciation Letter</p>
        </div>
      </div>
    </section>
  );
};
