"use client";

import React from "react";
import { ExternalLink, FileText, Eye } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const ResumePreview: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">RESUME PREVIEW</h2>
          </div>
          <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
            Interactive document preview. Click &quot;View Full Resume&quot; to open the document in full resolution.
          </p>
        </div>

        <a
          href={portfolioConfig.resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95 self-start sm:self-auto"
        >
          <span>View Full Resume</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* EMBEDDED PDF VIEWER FRAME */}
      <div className="w-full h-[540px] sm:h-[640px] rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-900/50 bg-slate-100 dark:bg-[#051A0F] shadow-inner relative">
        <object
          data={portfolioConfig.resumePdfUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
            <FileText className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
            <p className="text-slate-700 dark:text-gray-300 text-sm">
              Your browser doesn&apos;t support inline PDF previews. You can view or download the full resume directly.
            </p>
            <a
              href={portfolioConfig.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-emerald-600 text-white font-semibold text-sm rounded-xl shadow-md"
            >
              Open PDF Document
            </a>
          </div>
        </object>
      </div>
    </section>
  );
};
