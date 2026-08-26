"use client";

import React, { useState } from "react";
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react";
import { CertificationItem } from "@/config/portfolio";

interface CertificationCardProps {
  cert: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-5 sm:p-6 hover:border-emerald-400/50 transition-all duration-300 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 shadow-sm">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
              {cert.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
              {cert.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400">
              Issuing Organization: <strong className="text-slate-800 dark:text-emerald-300">{cert.issuer}</strong>
              {cert.period && <span> • {cert.period}</span>}
            </p>
          </div>
        </div>

        {/* CREDENTIAL DETAILS / VIEW CREDENTIAL BUTTON */}
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm active:scale-95 self-start sm:self-auto"
          >
            <span>View Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#051A0F] dark:hover:bg-[#082918] text-slate-800 dark:text-emerald-300 font-medium text-xs rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95 self-start sm:self-auto"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Credential details</span>
          </button>
        )}
      </div>

      {/* CREDENTIAL DETAILS MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-800/40 rounded-2xl p-6 shadow-2xl space-y-4 text-center">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white bg-slate-100 dark:bg-emerald-950/60 rounded-full border border-slate-200 dark:border-emerald-800/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.title}</h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">{cert.issuer}</p>

            <div className="p-3 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/30 text-xs text-slate-700 dark:text-gray-300 space-y-1 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500">Category:</span>
                <span className="font-bold">{cert.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Issued Year:</span>
                <span className="font-bold">{cert.period || "2024"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">✓ Verified Record</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="px-5 py-2 bg-emerald-600 text-white font-semibold text-xs rounded-xl"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </>
  );
};
