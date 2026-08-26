"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { PortraitSection } from "./PortraitSection";
import { SocialLinks } from "./SocialLinks";
import { IntroductionModal } from "./IntroductionModal";

export const Hero: React.FC = () => {
  const [introModalOpen, setIntroModalOpen] = useState(false);

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden animate-fade-in">
      {/* 50% LEFT / 50% RIGHT BALANCED GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center flex-grow">
        {/* LEFT COLUMN: HERO TEXT & CONTENT */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5 sm:space-y-6 z-20">
          
          {/* INTRO BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A]/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-white text-xs sm:text-sm font-medium shadow-sm dark:shadow-[0_0_15px_rgba(0,200,83,0.1)] hover:border-emerald-400/60 transition-all duration-300">
            <span>{portfolioConfig.badgeText}</span>
          </div>

          {/* MAIN NAME */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
            {portfolioConfig.firstName}{" "}
            <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(0,200,83,0.4)]">
              {portfolioConfig.lastName}
            </span>
          </h1>

          {/* PROFESSIONAL TITLE WITH TYPING CARET */}
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.25em] text-slate-600 dark:text-gray-300 uppercase">
              {portfolioConfig.title}
            </h2>
            <span className="inline-block w-[3px] h-5 sm:h-6 bg-emerald-600 dark:bg-emerald-400 animate-pulse ml-0.5" />
          </div>

          {/* SMALL GREEN DIVIDER */}
          <div className="w-14 h-[2.5px] bg-emerald-500 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(0,200,83,0.8)]" />

          {/* INTRODUCTION TEXT */}
          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            {portfolioConfig.introduction.part1}
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              {portfolioConfig.introduction.emphasis}
            </span>
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* PRIMARY CTA */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base rounded-xl shadow-md dark:shadow-[0_0_20px_rgba(0,200,83,0.35)] transition-all duration-200 group active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* SECONDARY CTA */}
            <button
              onClick={() => setIntroModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-slate-100 dark:bg-[#03120A]/80 dark:hover:bg-[#051F10] text-slate-800 dark:text-gray-200 font-medium text-sm sm:text-base rounded-xl border border-slate-300 dark:border-emerald-900/50 hover:border-emerald-400/50 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Watch Introduction</span>
              <div className="w-6 h-6 rounded-full border border-emerald-500/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <SocialLinks />
        </div>

        {/* RIGHT COLUMN: PORTRAIT & TECH STACK CARD */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 w-full mt-4 lg:mt-0">
          <PortraitSection />
        </div>
      </div>

      {/* INTRODUCTION MODAL */}
      <IntroductionModal
        isOpen={introModalOpen}
        onClose={() => setIntroModalOpen(false)}
      />
    </section>
  );
};
