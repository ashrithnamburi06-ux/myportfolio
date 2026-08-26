"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Code,
  Trophy,
  Folder,
  Mail
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Home,
  User,
  Briefcase,
  Code,
  Trophy,
  Folder,
  Mail
};

export const SideNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col items-center justify-center fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="py-6 px-3 bg-white/90 dark:bg-[#03120A]/80 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-emerald-900/40 shadow-lg dark:shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-colors duration-300">
        <div className="relative flex flex-col items-center gap-5">
          {portfolioConfig.navItems.map((item, index) => {
            const Icon = iconMap[item.iconName] || Home;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const isLast = index === portfolioConfig.navItems.length - 1;

            return (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  className="group relative flex items-center justify-center"
                  title={item.label}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-[0_0_12px_rgba(0,200,83,0.4)] scale-105"
                        : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-950/40"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* TOOLTIP ON HOVER */}
                  <span className="absolute left-14 px-2.5 py-1 bg-slate-900 dark:bg-emerald-950 text-white dark:text-emerald-200 text-xs font-medium rounded-md border border-slate-700 dark:border-emerald-800/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-50">
                    {item.label}
                  </span>
                </Link>

                {/* CONNECTING VERTICAL LINE WITH GREEN DOT */}
                {!isLast && (
                  <div className="flex flex-col items-center my-0.5">
                    <div className="w-[1.5px] h-2.5 bg-slate-200 dark:bg-emerald-900/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 my-0.5" />
                    <div className="w-[1.5px] h-2.5 bg-slate-200 dark:bg-emerald-900/40" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
