"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { ResumeHero } from "@/components/ResumeHero";
import { ResumePreview } from "@/components/ResumePreview";
import { ResumeDownloads } from "@/components/ResumeDownloads";
import { RecruiterQuickView } from "@/components/RecruiterQuickView";
import { WhyHireMe } from "@/components/WhyHireMe";
import { StatsBar } from "@/components/StatsBar";
import { Footer } from "@/components/Footer";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HERO SECTION */}
        <ResumeHero />

        {/* RECRUITER QUICK VIEW */}
        <RecruiterQuickView />

        {/* RESUME PREVIEW */}
        <ResumePreview />

        {/* DOWNLOAD RESUME SECTION */}
        <ResumeDownloads />

        {/* WHY HIRE ME */}
        <WhyHireMe />

        {/* PORTFOLIO STATS */}
        <div className="mb-14">
          <StatsBar />
        </div>
      </div>

      <Footer />
    </main>
  );
}
