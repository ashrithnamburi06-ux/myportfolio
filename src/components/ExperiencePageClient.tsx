"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ExperienceSummary } from "@/components/experience/ExperienceSummary";
import { Footer } from "@/components/Footer";

export const ExperiencePageClient: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HERO */}
        <ExperienceHero />

        {/* INTERACTIVE TIMELINE */}
        <ExperienceTimeline />

        {/* EXPERIENCE SUMMARY */}
        <ExperienceSummary />
      </div>

      <Footer />
    </main>
  );
};
