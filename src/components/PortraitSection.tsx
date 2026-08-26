"use client";

import React from "react";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export const PortraitSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] lg:max-w-[600px] mx-auto flex flex-col items-center justify-end min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
      {/* ATMOSPHERIC BACKGROUND: GREEN RADIAL GLOW & CIRCLE OUTLINE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft radial green ambient light */}
        <div className="w-[360px] sm:w-[460px] lg:w-[520px] h-[360px] sm:h-[460px] lg:h-[520px] rounded-full bg-emerald-400/20 dark:bg-emerald-500/15 blur-3xl" />
        
        {/* Thin green circular outline stroke */}
        <div className="absolute w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[420px] lg:h-[460px] rounded-full border border-emerald-400/35 dark:border-emerald-500/25 shadow-[0_0_35px_rgba(0,200,83,0.15)] -translate-y-6" />
        
        {/* Technical dot matrix overlay */}
        <div 
          className="absolute w-[380px] sm:w-[480px] lg:w-[500px] h-[380px] sm:h-[480px] lg:h-[500px] rounded-full opacity-15 dark:opacity-20 -translate-y-6"
          style={{
            backgroundImage: "radial-gradient(#00C853 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}
        />
      </div>

      {/* HANDWRITTEN ANNOTATION (TOP RIGHT OF PORTRAIT) */}
      <div className="absolute top-2 right-0 sm:right-2 lg:-right-2 z-20 hidden sm:flex flex-col items-start pointer-events-none select-none">
        <span className="font-handwriting text-emerald-700 dark:text-emerald-400 text-xl sm:text-2xl font-semibold leading-tight rotate-[-4deg] drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {portfolioConfig.annotation.line1}
          <br />
          {portfolioConfig.annotation.line2}
        </span>
        {/* Curved arrow pointing down-left toward portrait */}
        <svg className="w-12 h-10 text-emerald-600 dark:text-emerald-400 mt-1 ml-2 -rotate-12" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 38 4 C 20 6, 8 18, 12 32" />
          <path d="M 6 24 L 12 32 L 20 28" />
        </svg>
      </div>

      {/* TRANSPARENT PORTRAIT IMAGE (Clean cutout, no dark rectangle box) */}
      <div className="relative z-10 w-[320px] sm:w-[420px] lg:w-[460px] xl:w-[480px] h-[440px] sm:h-[540px] lg:h-[580px] flex items-end justify-center">
        <Image
          src="/images/ashrit-portrait-clean.png"
          alt="Ashrit Krishna - Full Stack Developer"
          width={500}
          height={620}
          priority
          className="object-contain object-bottom w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)] scale-105"
        />
      </div>
    </div>
  );
};
