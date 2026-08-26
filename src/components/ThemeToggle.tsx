"use client";

import React, { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-800/40" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
        className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-[#03120A] dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-emerald-900/50 text-slate-700 dark:text-emerald-400 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-emerald-400 animate-fade-in" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 animate-fade-in" />
        )}
      </button>

      {/* QUICK SYSTEM DROPDOWN MENU */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-800/40 shadow-lg py-1 z-50 animate-fade-in text-xs font-medium">
          <button
            onClick={() => {
              setTheme("light");
              setMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-emerald-950/50 ${
              theme === "light" ? "text-emerald-600 font-bold" : "text-slate-700 dark:text-gray-300"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>
          <button
            onClick={() => {
              setTheme("dark");
              setMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-emerald-950/50 ${
              theme === "dark" ? "text-emerald-400 font-bold" : "text-slate-700 dark:text-gray-300"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>
          <button
            onClick={() => {
              setTheme("system");
              setMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-emerald-950/50 ${
              theme === "system" ? "text-emerald-500 font-bold" : "text-slate-700 dark:text-gray-300"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};
