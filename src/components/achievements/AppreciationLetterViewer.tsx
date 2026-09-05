"use client";

import React, { useState } from "react";
import { X, ZoomIn, ZoomOut, FileCheck, Award } from "lucide-react";

interface AppreciationLetterViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppreciationLetterViewer: React.FC<AppreciationLetterViewerProps> = ({
  isOpen,
  onClose
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 dark:bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] flex flex-col justify-between">
        {/* TOP CONTROL BAR */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-emerald-900/40 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Formal HOD Appreciation Letter
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                KL University Department Website Development
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#051A0F] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-emerald-900/40"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-gray-300 w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(Math.min(1.6, zoomLevel + 0.2))}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#051A0F] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-emerald-900/40"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 dark:bg-emerald-950/60 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white border border-slate-200 dark:border-emerald-800/30 ml-2"
              aria-label="Close document viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DOCUMENT CANVAS / PLACEHOLDER ARCHITECTURE */}
        <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-[#020805] rounded-xl border border-slate-200 dark:border-emerald-900/40 flex items-center justify-center">
          <div
            className="w-full max-w-xl bg-white text-slate-900 p-8 sm:p-10 rounded-lg shadow-xl border border-slate-200 transition-transform duration-200 space-y-6 font-serif"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }}
          >
            {/* DOCUMENT HEADER */}
            <div className="border-b-2 border-emerald-600 pb-4 text-center space-y-1">
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-emerald-700 block">
                DEPARTMENT OF COMPUTER SCIENCE ENGINEERING
              </span>
              <h2 className="text-xl font-bold font-sans text-slate-900">KL UNIVERSITY</h2>
              <span className="text-xs font-sans text-slate-500 block">Official Academic Appreciation Letter</span>
            </div>

            {/* DOCUMENT BODY */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-800 font-sans">
              <div className="flex justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                <span>Ref: KLU/CSE/APPR/2024</span>
                <span>Date: Academic Year 2024</span>
              </div>

              <p className="font-bold text-slate-900">TO WHOM IT MAY CONCERN</p>

              <p>
                This is to formally recognize and appreciate <strong>Ashrith Namburi (Namburi Ashrith Krishna)</strong> for his outstanding initiative and technical contribution in engineering and deploying the official website for the college department.
              </p>

              <p>
                Ashrith independently managed the entire development process — demonstrating strong full-stack software capabilities, clean design standards, and dedicated commitment to delivering a functional digital platform for department faculty and students.
              </p>

              <p className="pt-2 italic text-slate-700">
                &ldquo;We congratulate Ashrith Namburi on this achievement and wish him continued success in his full-stack engineering career.&rdquo;
              </p>
            </div>

            {/* DOCUMENT SIGNATURE AREA */}
            <div className="pt-8 border-t border-slate-200 flex justify-between items-end font-sans">
              <div className="text-[11px] text-slate-500">
                <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded font-mono font-bold border border-emerald-200">
                  ✓ Verified HOD Appreciation Document
                </span>
              </div>
              <div className="text-right">
                <div className="font-bold text-xs text-slate-900">Head of Department (HOD)</div>
                <div className="text-[11px] text-slate-600">Department of Computer Science</div>
                <div className="text-[11px] text-slate-500">KL University</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-400 pt-3 border-t border-slate-200 dark:border-emerald-900/40 gap-2">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
            <FileCheck className="w-4 h-4" />
            <span>Document Architecture Ready (Supports PDF/Image viewer)</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
