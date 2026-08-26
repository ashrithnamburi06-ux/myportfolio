"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#020805] border-t border-slate-200 dark:border-emerald-900/40 text-slate-700 dark:text-gray-300 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200 dark:border-emerald-900/30">
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                AK
              </div>
              <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                ASHRIT KRISHNA
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Full Stack Developer specializing in React, Next.js, Node.js, Python, and scalable modern web architecture.
            </p>

            <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
              <a href={portfolioConfig.socialLinks.email} className="hover:underline">
                ashrithnamburi06@gmail.com
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                About Me
              </Link>
              <Link href="/projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Projects &amp; Case Study
              </Link>
              <Link href="/skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Technical Skills
              </Link>
              <Link href="/experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Work Experience
              </Link>
              <Link href="/achievements" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Achievements &amp; HOD Letter
              </Link>
              <Link href="/resume" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Resume &amp; PDF Download
              </Link>
              <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Contact &amp; Connect
              </Link>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Connect Online
            </h4>
            <div className="flex items-center gap-2.5">
              {/* LINKEDIN */}
              <a
                href={portfolioConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* GITHUB */}
              <a
                href={portfolioConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href={portfolioConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* EMAIL */}
              <a
                href={portfolioConfig.socialLinks.email}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
            >
              <span>Send a message</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-400 gap-2">
          <span>© {new Date().getFullYear()} Ashrit Krishna. All rights reserved.</span>
          <span className="font-mono text-[11px]">Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
