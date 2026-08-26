"use client";

import React from "react";
import { Code, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Briefcase,
  GraduationCap,
  Trophy
};

export const StatsBar: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 lg:mt-12 bg-white/95 dark:bg-[#03120A]/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-slate-200/90 dark:border-emerald-900/40 shadow-md dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-emerald-900/30">
        {portfolioConfig.stats.map((stat, idx) => {
          const Icon = iconMap[stat.icon] || Code;
          return (
            <div
              key={idx}
              className={`flex items-center gap-4 ${
                idx !== 0 ? "pt-4 md:pt-0 md:pl-6" : ""
              }`}
            >
              {/* ICON CONTAINER */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>

              {/* NUMBER & TEXT */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300 leading-tight">
                  {stat.label}
                  {stat.sublabel && (
                    <>
                      <br />
                      <span className="text-slate-500 dark:text-gray-400 font-normal">{stat.sublabel}</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
