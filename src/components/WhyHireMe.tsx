"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export const WhyHireMe: React.FC = () => {
  const points = [
    {
      title: "Strong Problem-Solving & Analytical Skills",
      desc: "Proven track record with 5-Star HackerRank Problem Solving rating and CGPA 9.16 in B.Tech CSE."
    },
    {
      title: "Full-Stack Development Experience",
      desc: "Proficient in React, Next.js, Node.js, Express, Python, Django, SQL, and REST API architecture."
    },
    {
      title: "Real-World Project Delivery",
      desc: "Architected complete platforms like GR STYLES (Fashion E-Commerce) and Dealrix (Deals Aggregator)."
    },
    {
      title: "Quick Learner & Technology Adaptable",
      desc: "Completed Google Generative AI Virtual Internship, mastering cloud AI tools and prompt engineering."
    },
    {
      title: "Focus on Clean, Reliable Solutions",
      desc: "Committed to clean code principles, modular components, responsive UI, and 40% performance optimization."
    }
  ];

  return (
    <section className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">WHY HIRE ME?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((pt, idx) => (
          <div
            key={idx}
            className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl flex items-start gap-3 hover:border-emerald-400/40 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{pt.title}</h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-0.5 leading-relaxed">{pt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
