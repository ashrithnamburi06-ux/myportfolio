"use client";

import React from "react";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

export const PortraitSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] mx-auto flex flex-col items-center justify-end min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] xl:min-h-[680px]">
      {/* ATMOSPHERIC BACKGROUND: GREEN RADIAL GLOW, CIRCLE OUTLINE & DOT MATRIX */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Soft radial green ambient light */}
        <div className="w-[420px] sm:w-[520px] lg:w-[600px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-full bg-emerald-400/25 dark:bg-emerald-500/20 blur-3xl" />
        
        {/* Thin green circular outline stroke */}
        <div className="absolute w-[380px] sm:w-[480px] lg:w-[540px] h-[380px] sm:h-[480px] lg:h-[540px] rounded-full border border-emerald-400/40 dark:border-emerald-500/30 shadow-[0_0_40px_rgba(0,200,83,0.2)] -translate-y-4" />
        
        {/* Technical dot matrix overlay */}
        <div 
          className="absolute w-[440px] sm:w-[540px] lg:w-[600px] h-[440px] sm:h-[540px] lg:h-[600px] rounded-full opacity-20 dark:opacity-25 -translate-y-4"
          style={{
            backgroundImage: "radial-gradient(#00C853 1.2px, transparent 1.2px)",
            backgroundSize: "18px 18px"
          }}
        />
      </div>

      {/* HANDWRITTEN ANNOTATION (TOP RIGHT OF PORTRAIT) */}
      <div className="absolute top-0 right-2 sm:right-4 lg:right-2 z-20 hidden sm:flex flex-col items-start pointer-events-none select-none">
        <span className="font-handwriting text-emerald-600 dark:text-emerald-400 text-2xl sm:text-3xl font-bold leading-tight rotate-[-4deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {portfolioConfig.annotation.line1}
          <br />
          {portfolioConfig.annotation.line2}
        </span>
        {/* Curved arrow pointing down-left toward portrait */}
        <svg className="w-14 h-12 text-emerald-500 dark:text-emerald-400 mt-1 ml-4 -rotate-12" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 38 4 C 20 6, 8 18, 12 32" />
          <path d="M 6 24 L 12 32 L 20 28" />
        </svg>
      </div>

      {/* CLEAN REMBG PORTRAIT (ORIGINAL PHOTO SUBJECT, ZERO RECTANGULAR BOX) */}
      <div className="relative z-10 w-[360px] sm:w-[480px] lg:w-[560px] xl:w-[620px] h-[460px] sm:h-[560px] lg:h-[640px] xl:h-[680px] flex items-end justify-center">
        <div 
          className="relative w-full h-full flex items-end justify-center"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 82%, transparent 99%)",
            maskImage: "linear-gradient(to bottom, #000 82%, transparent 99%)",
          }}
        >
          <Image
            src="/images/ashrit-portrait-clean.png"
            alt="Ashrit Krishna - Full Stack Developer"
            width={1024}
            height={1024}
            priority
            quality={100}
            className="object-contain object-bottom w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

