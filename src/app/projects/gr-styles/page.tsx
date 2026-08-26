"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  Zap,
  Layers,
  ShoppingCart,
  UserCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  TrendingUp,
  Users,
  Lock,
  Star,
  X,
  Maximize2
} from "lucide-react";

export default function GRStylesCaseStudyPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeArchLayer, setActiveArchLayer] = useState<string | null>("backend");

  const grStylesTech = [
    { name: "Python", desc: "Backend logic" },
    { name: "Django", desc: "Web framework" },
    { name: "HTML5", desc: "Frontend structure" },
    { name: "CSS3", desc: "Styling & Layout" },
    { name: "JavaScript", desc: "Interactivity" },
    { name: "MySQL", desc: "Database" },
    { name: "Bootstrap", desc: "Responsive UI" }
  ];

  const timelineSteps = [
    {
      title: "Planning & Design",
      desc: "Requirements gathering and UI/UX architecture design."
    },
    {
      title: "Backend Development",
      desc: "Django models, RESTful APIs, and business logic implementation."
    },
    {
      title: "Frontend Integration",
      desc: "Responsive UI design with modern CSS & JavaScript interactivity."
    },
    {
      title: "Testing & Deployment",
      desc: "Comprehensive bug fixing, security auditing, and live hosting."
    }
  ];

  const challengesSolutions = [
    {
      challenge: "Handling secure user authentication and payment integration.",
      solution: "Used Django's built-in auth system and integrated trusted payment gateways."
    },
    {
      challenge: "Ensuring seamless mobile responsiveness across diverse devices.",
      solution: "Built with Bootstrap 5 and customized responsive CSS flexbox/grid."
    }
  ];

  const screenshots = [
    { title: "Storefront Home", caption: "Hero banner and trending fashion product categories", src: "/images/gr-styles-mockup.png" },
    { title: "Product Catalog", caption: "Real-time filtering by size, color, and price", src: "/images/gr-styles-mockup.png" },
    { title: "Cart & Checkout", caption: "Secure shopping cart and order summary", src: "/images/gr-styles-mockup.png" }
  ];

  const archDetails: Record<string, { title: string; desc: string }> = {
    users: { title: "Users / Customers Layer", desc: "Responsive web browser interface built with Bootstrap 5 and custom JavaScript for intuitive shopping." },
    backend: { title: "Django Backend Layer", desc: "Python Django web framework handling URL routing, ORM models, session security, and payment business logic." },
    database: { title: "MySQL Database Layer", desc: "Relational database persisting product inventory, user credentials, orders, and payment audit logs." },
    frontend: { title: "Static Frontend Layer", desc: "Optimized HTML5, CSS3, and JavaScript assets served efficiently with client-side validation." }
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-black transition-colors duration-300">
      <Navbar />

      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <SideNavigation />

        {/* BREADCRUMB & BACK BUTTON */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span>/</span>
            <span className="text-slate-600 dark:text-gray-300">GR STYLES</span>
            <span>/</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Case Study</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-white hover:border-emerald-400/40 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* HERO CASE STUDY CONTAINER (TITLE + LAPTOP DISPLAY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 border-b border-slate-200 dark:border-emerald-900/40 pb-10">
          {/* LEFT: TITLE & SUMMARY */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  GR STYLES
                </h1>
                <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                  Modern Fashion E-Commerce Web Platform
                </p>
              </div>
            </div>

            <p className="text-slate-700 dark:text-gray-300 text-base leading-relaxed">
              A full-stack, responsive and feature-rich online shopping platform built with Python, Django, and modern web technologies.
            </p>

            {/* HIGHLIGHT PILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
                <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">100% Responsive</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">Secure Auth</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">Fast Load Time</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white dark:bg-[#03120A] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-xs shadow-sm">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">Scalable Arch</span>
              </div>
            </div>

            {/* TOP CTAS */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="https://github.com/ashritkrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/ashritkrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT: LAPTOP DISPLAY */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[480px] bg-[#0A1910] rounded-2xl border-4 border-gray-800 p-2 shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#03120A] rounded-t-xl mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-mono text-emerald-400 ml-2">https://grstyles.app</span>
              </div>
              <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                <Image
                  src="/images/gr-styles-mockup.png"
                  alt="GR STYLES Mockup Screen"
                  width={500}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* THREE PANELS: OVERVIEW + INTERACTIVE ARCHITECTURE + TECH STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* PROJECT OVERVIEW */}
          <div className="lg:col-span-5 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Project Overview
              </h3>
              <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                GR STYLES is an e-commerce web application that provides a seamless online shopping experience with product browsing, secure payments, order tracking, and a modern, responsive UI.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-emerald-900/30">
              {["Python", "Django", "HTML5", "CSS3", "JavaScript", "MySQL"].map((chip, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-[#051A0F] border border-emerald-200 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-mono text-xs">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* INTERACTIVE ARCHITECTURE */}
          <div className="lg:col-span-3 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Architecture
              </h3>

              <div className="flex flex-col gap-2 text-center">
                <button
                  onClick={() => setActiveArchLayer("users")}
                  className={`p-2 rounded-lg text-xs font-semibold transition-all border ${
                    activeArchLayer === "users"
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                      : "bg-emerald-50 dark:bg-[#051A0F] text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40"
                  }`}
                >
                  👤 Users / Customers
                </button>
                <div className="text-emerald-600 dark:text-emerald-500 font-bold text-xs">↓</div>
                <button
                  onClick={() => setActiveArchLayer("backend")}
                  className={`p-2 rounded-lg text-xs font-semibold transition-all border ${
                    activeArchLayer === "backend"
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                      : "bg-emerald-50 dark:bg-[#051A0F] text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40"
                  }`}
                >
                  ⚙️ Django Backend
                </button>
                <div className="flex justify-around text-emerald-600 dark:text-emerald-500 font-bold text-xs">
                  <span>↙</span>
                  <span>↘</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveArchLayer("database")}
                    className={`p-1.5 rounded-lg border transition-all ${
                      activeArchLayer === "database"
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                        : "bg-emerald-100 dark:bg-[#082918] text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800/40"
                    }`}
                  >
                    MySQL DB
                  </button>
                  <button
                    onClick={() => setActiveArchLayer("frontend")}
                    className={`p-1.5 rounded-lg border transition-all ${
                      activeArchLayer === "frontend"
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                        : "bg-emerald-100 dark:bg-[#082918] text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800/40"
                    }`}
                  >
                    Static UI
                  </button>
                </div>
              </div>
            </div>

            {/* LAYER DESCRIPTION CARD */}
            {activeArchLayer && archDetails[activeArchLayer] && (
              <div className="mt-3 p-2.5 bg-slate-50 dark:bg-[#051A0F] rounded-xl border border-slate-200 dark:border-emerald-900/40 text-[11px] space-y-1 animate-fade-in">
                <strong className="text-slate-900 dark:text-white block font-sans">
                  {archDetails[activeArchLayer].title}
                </strong>
                <p className="text-slate-600 dark:text-gray-300 font-sans leading-tight">
                  {archDetails[activeArchLayer].desc}
                </p>
              </div>
            )}
          </div>

          {/* TECH STACK LIST */}
          <div className="lg:col-span-4 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">&lt;/&gt;</span>
              Tech Stack
            </h3>
            <div className="space-y-2">
              {grStylesTech.map((tech, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TechIcon name={tech.name} className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">{tech.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KEY FEATURES PANEL */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 mb-10 shadow-md">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
              <ShoppingCart className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Product Catalog</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">Browse &amp; filter products seamlessly</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
              <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">User Authentication</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">Secure login &amp; registration</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
              <CreditCard className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Payment Integration</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">Safe &amp; reliable transactions</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
              <Truck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Order Tracking</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">Real-time order status updates</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl">
              <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Responsive Design</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">Works on mobile &amp; desktop</p>
            </div>
          </div>
        </div>

        {/* SCREENSHOTS WITH LIGHTBOX + TIMELINE + CHALLENGES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* SCREENSHOTS */}
          <div className="lg:col-span-5 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                📷 Project Screenshots
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {activeTab + 1} / {screenshots.length}
              </span>
            </div>

            <div
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-emerald-800/40 mb-3 aspect-[16/10] cursor-pointer group"
            >
              <Image
                src={screenshots[activeTab].src}
                alt="GR STYLES Screenshots Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-semibold text-xs">
                <Maximize2 className="w-4 h-4" />
                <span>Click to Expand Screenshot</span>
              </div>
            </div>

            <div className="flex gap-2">
              {screenshots.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-colors ${
                    activeTab === idx
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 dark:bg-[#051A0F] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 italic">
              {screenshots[activeTab].caption}
            </p>
          </div>

          {/* TIMELINE */}
          <div className="lg:col-span-3 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Timeline
            </h3>
            <div className="space-y-3">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 text-[10px] font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{step.title}</h5>
                    <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CHALLENGES & SOLUTIONS */}
          <div className="lg:col-span-4 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              ⚖️ Challenges &amp; Solutions
            </h3>
            <div className="space-y-3">
              {challengesSolutions.map((cs, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl text-xs space-y-1.5">
                  <div className="flex items-start gap-2 text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{cs.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-400 pt-1 border-t border-slate-200 dark:border-emerald-900/40">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{cs.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS & IMPACT PANEL */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 mb-10 shadow-md">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Results / Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-center">
              <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-mono block">40% Faster</span>
              <span className="text-xs text-slate-500 dark:text-gray-400">Page Load Time</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-center">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-mono block">1K+</span>
              <span className="text-xs text-slate-500 dark:text-gray-400">Active Users Target</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-center">
              <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <span className="text-2xl font-black text-slate-900 dark:text-white font-mono block">100%</span>
              <span className="text-xs text-slate-500 dark:text-gray-400">Secure Transactions</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-center">
              <Star className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <span className="text-2xl font-black text-slate-900 dark:text-white block">Excellent</span>
              <span className="text-xs text-slate-500 dark:text-gray-400">User Experience</span>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION & QUOTE BAR */}
        <div className="bg-emerald-50 dark:bg-[#051F10] border border-emerald-300 dark:border-emerald-600/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <p className="text-slate-800 dark:text-gray-200 text-sm sm:text-base italic font-medium">
            &ldquo;Built with passion. Designed for a better shopping experience.&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ashritkrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Explore Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/ashritkrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-300 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
            >
              <span>View Source Code</span>
              <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </a>
          </div>
        </div>
      </div>

      {/* SCREENSHOT LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#03120A] border border-emerald-800/40 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-white border-b border-emerald-900/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950">
                  {activeTab + 1} / {screenshots.length}
                </span>
                <span className="text-sm font-bold">{screenshots[activeTab].title}</span>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full bg-emerald-950 text-gray-300 hover:text-white border border-emerald-800/40"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-emerald-900/40">
              <Image
                src={screenshots[activeTab].src}
                alt="Full Resolution Screenshot"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 pt-2">
              <p className="italic">{screenshots[activeTab].caption}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab((activeTab - 1 + screenshots.length) % screenshots.length)}
                  className="px-3 py-1 rounded bg-emerald-950 border border-emerald-800/40 hover:text-white"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveTab((activeTab + 1) % screenshots.length)}
                  className="px-3 py-1 rounded bg-emerald-950 border border-emerald-800/40 hover:text-white"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
