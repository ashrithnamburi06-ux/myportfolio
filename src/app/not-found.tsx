"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Folder, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col items-center justify-center text-center">
        <SideNavigation />

        <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shadow-lg">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-6xl sm:text-8xl font-black font-mono text-emerald-600 dark:text-emerald-400 tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(0,200,83,0.3)]">
          404
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2 mb-3">
          Looks like this page went off the grid.
        </h1>

        <p className="text-slate-600 dark:text-gray-400 text-base max-w-md mx-auto leading-relaxed mb-8">
          &ldquo;The page you&apos;re looking for doesn&apos;t exist or may have moved.&rdquo;
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back Home</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-semibold text-sm rounded-xl border border-slate-300 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
          >
            <Folder className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
