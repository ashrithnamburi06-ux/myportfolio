"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { AchievementsHero } from "@/components/achievements/AchievementsHero";
import { AchievementTimeline } from "@/components/achievements/AchievementTimeline";
import { CertificationsSection } from "@/components/achievements/CertificationsSection";
import { FeaturedRecognition } from "@/components/achievements/FeaturedRecognition";
import { AchievementSummary } from "@/components/achievements/AchievementSummary";
import { Footer } from "@/components/Footer";

export const AchievementsPageClient: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HERO */}
        <AchievementsHero />

        {/* FEATURED HOD RECOGNITION */}
        <FeaturedRecognition />

        {/* HACKATHONS & KEY ACHIEVEMENTS */}
        <AchievementTimeline />

        {/* VERIFIED CERTIFICATIONS */}
        <CertificationsSection />

        {/* MILESTONES SUMMARY */}
        <AchievementSummary />
      </div>

      <Footer />
    </main>
  );
};
