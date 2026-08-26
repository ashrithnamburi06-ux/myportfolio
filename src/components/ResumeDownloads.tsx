"use client";

import React from "react";
import { Download, FileCheck, ShieldCheck } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const ResumeDownloads: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <Download className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">DOWNLOAD RESUME</h2>
      </div>
      <p className="text-xs text-slate-600 dark:text-gray-400 mb-6">
        Verified official resume download. Free of watermark, optimized for ATS and recruiter software.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* PDF CARD */}
        <div className="p-6 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-xs font-mono">
                PDF
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">PDF Format</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400">Best for printing, viewing, and ATS sharing</p>
              </div>
            </div>
            <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>

          <a
            href={portfolioConfig.resumePdfUrl}
            download="Ashrit-Krishna-Resume.pdf"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF ↓</span>
          </a>
        </div>

        {/* SECURITY & ACCURACY NOTE */}
        <div className="p-6 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>Recruiter Guarantee</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
            All qualifications, education records (KL University B.Tech CSE CGPA 9.16), Google Gen AI internship credentials, and project highlights in this resume match the live portfolio data.
          </p>
        </div>
      </div>
    </section>
  );
};
