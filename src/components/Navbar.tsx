"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#020805]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-emerald-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl font-black tracking-tighter text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">
            AN
          </span>
          <span className="text-lg font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-100 transition-colors hidden sm:inline-block">
            {portfolioConfig.name}
          </span>
        </Link>

        {/* DESKTOP NAVIGATION ITEMS */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {portfolioConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                    : "text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-500 dark:bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(0,200,83,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE: THEME TOGGLE & RESUME BUTTON */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <a
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-[0_0_15px_rgba(0,200,83,0.25)] transition-all duration-200 border border-emerald-400/40 active:scale-95"
          >
            <Download className="w-4 h-4 text-emerald-100" />
            <span>Resume</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/40 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#03120A] border-b border-slate-200 dark:border-emerald-900/40 px-4 pt-2 pb-6 space-y-2">
          {portfolioConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-semibold border-l-4 border-emerald-500"
                    : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-emerald-950/30 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
