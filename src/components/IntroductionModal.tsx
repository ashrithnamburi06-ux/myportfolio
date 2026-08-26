"use client";

import React, { useState } from "react";
import { X, PlayCircle, Volume2, VolumeX, Pause } from "lucide-react";

interface IntroductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroductionModal: React.FC<IntroductionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const toggleAudio = () => {
    // User-controlled audio playback architecture (no autoplay)
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-5">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            setIsPlayingAudio(false);
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white bg-slate-100 dark:bg-emerald-950/60 rounded-full border border-slate-200 dark:border-emerald-800/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ICON & TITLE */}
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md">
          <PlayCircle className="w-8 h-8" />
        </div>

        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">Introduction Video &amp; Voice</h3>
          <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm mt-1">
            Coming soon.
          </p>
        </div>

        <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          I am preparing a brief personal walkthrough video showcasing my software engineering projects, development philosophy, and full-stack background.
        </p>

        {/* USER-CONTROLLED VOICE WELCOME ARCHITECTURE */}
        <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Optional Voice Overview</span>
              <span className="text-[11px] text-slate-500 dark:text-gray-400">User-triggered audio welcome (No Autoplay)</span>
            </div>
          </div>

          <button
            onClick={toggleAudio}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
          >
            {isPlayingAudio ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Voice</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span>▶ Play Introduction</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setIsPlayingAudio(false);
              onClose();
            }}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
