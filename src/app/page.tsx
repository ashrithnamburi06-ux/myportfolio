"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black overflow-x-hidden transition-colors duration-300">
      {/* TOP NAVIGATION */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <div className="relative flex-grow flex flex-col justify-between w-full py-4 lg:py-6">
        {/* LEFT VERTICAL NAVIGATION RAIL */}
        <SideNavigation />

        {/* HERO SECTION */}
        <Hero />

        {/* BOTTOM STATISTICS BAR */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <StatsBar />
        </div>
      </div>

      <Footer />
    </main>
  );
}
