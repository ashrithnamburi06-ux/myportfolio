"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { ContactForm } from "@/components/ContactForm";
import { ContactCards } from "@/components/ContactCards";
import { Footer } from "@/components/Footer";
import { ArrowDown } from "lucide-react";

export const ContactPageClient: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#03120A] border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">
              Great Together.
            </span>
          </h1>
          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to connect with Ashrith Namburi? Reach out using the form below or through direct email.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* CONTACT INFO CARDS (5 cols) */}
          <div className="lg:col-span-5">
            <ContactCards />
          </div>

          {/* MESSAGE FORM (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* CLOSING CONTACT CTA */}
        <div className="bg-[#051F10] dark:bg-[#051F10] border border-emerald-600/40 rounded-2xl p-8 text-center space-y-4 mb-14 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            &ldquo;Let&apos;s build something impactful together.&rdquo;
          </h2>
          <p className="text-emerald-300 text-sm max-w-lg mx-auto">
            I&apos;m open to opportunities, collaborations, and interesting projects.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
};
