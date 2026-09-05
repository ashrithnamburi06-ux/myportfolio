"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowRight, MessageSquareCode } from "lucide-react";
import {
  trackExitIntentShown,
  trackExitIntentDismissed,
  trackExitIntentContactClicked
} from "@/lib/analytics";

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    trackExitIntentDismissed();
  }, []);

  const handleContactClick = useCallback(() => {
    setIsOpen(false);
    trackExitIntentContactClicked();
    router.push("/contact");
  }, [router]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if exit intent was already shown in this session
    const alreadyShown = sessionStorage.getItem("exit_intent_shown");
    if (alreadyShown) return;

    // Desktop pointer fine check
    const isDesktop = window.innerWidth >= 768 && window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !sessionStorage.getItem("exit_intent_shown")) {
        sessionStorage.setItem("exit_intent_shown", "true");
        setIsOpen(true);
        trackExitIntentShown();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-[#03140b] border border-slate-200 dark:border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800/40 rounded-full mb-4">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>WAIT — BEFORE YOU GO</span>
        </div>

        {/* Title */}
        <h3
          id="exit-intent-title"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
        >
          Planning to build a website?
        </h3>

        {/* Supporting Copy */}
        <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          I&apos;d love to hear about your idea. Whether it&apos;s a personal website, business website, portfolio, or custom web application, let&apos;s talk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleContactClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-200 active:scale-95 group"
          >
            <span>Let&apos;s Discuss Your Website</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleDismiss}
            className="px-5 py-3 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-emerald-950/30 hover:bg-slate-200 dark:hover:bg-emerald-900/40 rounded-xl transition-colors text-center"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};
