"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SideNavigation } from "@/components/SideNavigation";
import { Footer } from "@/components/Footer";
import { TechIcon } from "@/components/TechIcon";
import { portfolioConfig } from "@/config/portfolio";
import {
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  Layers,
  Users,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Cpu,
  Database,
  Lock,
  Sparkles,
  GitBranch,
  FileSpreadsheet,
  BarChart3,
  Activity,
  UserCheck,
  Award,
  ExternalLink
} from "lucide-react";
import { trackLiveDemoClick, trackGitHubClick } from "@/lib/analytics";

export const CapstoneCaseStudyClient: React.FC = () => {
  const [activeArchLayer, setActiveArchLayer] = useState<string | null>("resolver");

  const capstoneProject = portfolioConfig.projects.find((p) => p.id === "kl-cse-capstone-management");
  const liveDemoUrl = capstoneProject?.liveDemoUrl || "https://capstone-psi-topaz.vercel.app/login";

  const roleDefinitions = [
    {
      role: "Administrator",
      icon: ShieldCheck,
      color: "border-purple-500/40 text-purple-400 bg-purple-950/30",
      description: "Controls master data, CSV/XLSX bulk imports, user role assignments, rubric builder, review cycle activation, and global evaluation status tracking across all teams."
    },
    {
      role: "Student",
      icon: GraduationCap,
      color: "border-blue-500/40 text-blue-400 bg-blue-950/30",
      description: "Views assigned team members, project details, guide contact, review cycle timeline, attendance history, submitted rubric feedback, and final marks."
    },
    {
      role: "Guide (Faculty)",
      icon: UserCheck,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/30",
      description: "Supervises assigned capstone teams, tracks project milestones, marks per-student attendance, conducts criterion-level rubric evaluations, and records review feedback."
    },
    {
      role: "Classroom Faculty",
      icon: Award,
      color: "border-amber-500/40 text-amber-400 bg-amber-950/30",
      description: "Monitors classroom section progress, evaluates section presentations against active rubrics, manages attendance, and records independent assessment scores."
    },
    {
      role: "Reviewer",
      icon: Activity,
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-950/30",
      description: "Conducts external academic review evaluations for assigned candidate teams, inputs objective rubric scores, and provides structured recommendations."
    }
  ];

  const firestoreCollections = [
    { name: "students", desc: "Student records, roll numbers, registered team IDs, and academic metadata." },
    { name: "teams", desc: "Team structures, leader IDs, assigned project IDs, and evaluator mappings." },
    { name: "projects", desc: "Project titles, domains, descriptions, tech tags, and allocation statuses." },
    { name: "guides", desc: "Faculty guide profiles, employee IDs, department emails, and assigned team IDs." },
    { name: "classroomFaculty", desc: "Classroom section faculty records and section team assignments." },
    { name: "reviewers", desc: "Academic reviewer profiles, panel IDs, and review team allocations." },
    { name: "rubrics", desc: "Review cycle evaluation rubrics, max marks, and weightage rules." },
    { name: "rubricCriteria", desc: "Individual criterion descriptors, max scores, and order indexes." },
    { name: "reviewCycles", desc: "Academic evaluation phases (e.g. Review 1, Review 2, Final Defense)." },
    { name: "evaluations", desc: "Isolated evaluator score documents scoped by role, teamId, and reviewCycleId." },
    { name: "notifications", desc: "Targeted user and role notifications for assessment alerts." },
    { name: "userRoles", desc: "Firebase Auth UID mapping to available multi-role permission arrays." }
  ];

  const challengesSolutions = [
    {
      challenge: "Inconsistent Evaluator Identifiers Across Academic Spreadsheets",
      detail: "Incoming CSV data contained mixed ID formats like 'G001', 'G01', 'G1', employee numeric IDs, and emails.",
      solution: "Engineered deterministic relationship resolution logic (utils/relationshipResolver.js) that normalizes IDs, resolves aliases, and maps to single unified evaluator identities."
    },
    {
      challenge: "Cross-Evaluator Mark Overwrite & Data Collision Risks",
      detail: "Guides, classroom faculty, and reviewers evaluating the same team could overwrite shared mark fields.",
      solution: "Structured Firestore documents with strict role scoping (evaluations/eval-{role}-{teamId}), keeping evaluation records fully isolated per evaluator role."
    },
    {
      challenge: "Unsubmitted Evaluations Appearing as Zero Marks",
      detail: "Default numeric fields in aggregation pipelines misclassified pending evaluations as failing 0 scores.",
      solution: "Implemented an explicit evaluation status state machine ('Pending', 'Draft', 'Submitted', 'Locked') to guarantee unsubmitted reviews remain clearly flagged as Pending."
    },
    {
      challenge: "Large Academic Dataset Lookup Latency",
      detail: "Resolving relationships across hundreds of students, teams, and evaluators caused repeated Firestore lookups.",
      solution: "Implemented client-side indexed lookup maps and memoized derived data structures, enabling instantaneous relational queries."
    },
    {
      challenge: "Orphan Rubric Criteria & Fragmented Weightage",
      detail: "Deleting or updating parent rubrics risked leaving disconnected criteria in the database.",
      solution: "Enforced parent rubric validation and batch atomic writes when creating or updating rubric criteria structures."
    },
    {
      challenge: "First-Login Credential Security & Password Enforcement",
      detail: "Provisioned academic accounts required secure initial password change enforcement.",
      solution: "Enforced a strict first-login redirect pipeline checking requiresPasswordChange flags, routing users to /first-login-password-change before granting portal access."
    }
  ];

  const verifiedTestAuditResults = [
    { label: "Total User Dataset Rows Audited", value: "127 Rows", sub: "Verified Source Dataset" },
    { label: "Unique Employee Identities Provisioned", value: "126 Accounts", sub: "Firebase Auth + Firestore" },
    { label: "Unified Multi-Role Resolution", value: "3-in-1 Role Scope", sub: "Guide + Faculty + Reviewer" },
    { label: "Pre-Commit E2E Test Audit Categories", value: "31 Categories", sub: "Zero White-Screen Crashes" },
    { label: "Production Build Execution Time", value: "3.55 Seconds", sub: "Zero Build Errors" },
    { label: "Git Code Cleanliness & Whitespace Check", value: "0 Whitespace Errors", sub: "git diff --check Passed" }
  ];

  const archDetails: Record<string, { title: string; desc: string }> = {
    frontend: {
      title: "React 19 + Vite Frontend Layer",
      desc: "Fast responsive single-page application built with React 19, Tailwind CSS 3.4, and Lucide React icons, powered by Vite 8 HMR."
    },
    context: {
      title: "DataContext & Global Application State",
      desc: "Centralized React Context state engine managing active user sessions, active role toggles, notifications, and cached collection records."
    },
    resolver: {
      title: "Deterministic Relationship Resolution Engine",
      desc: "Custom transformation utility (relationshipResolver.js) that normalizes raw IDs (G001/G01/G1, T001, roll numbers) into unified relational objects."
    },
    auth: {
      title: "Firebase Authentication Layer",
      desc: "Handles secure email/password auth, token persistence, first-login password enforcement, and role-based route guard authorization."
    },
    firestore: {
      title: "Cloud Firestore Database Layer",
      desc: "Multi-collection NoSQL database housing student master data, team structures, rubric criteria, and role-isolated evaluation documents."
    }
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
            <span className="text-slate-600 dark:text-gray-300">KL CSE Capstone Portal</span>
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

        {/* HERO CONTAINER */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-3xl p-6 sm:p-10 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              FEATURED CASE STUDY
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              KL CSE Capstone Management &amp; Evaluation Portal
            </h1>

            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-base sm:text-xl leading-snug">
              Role-Based Capstone Project Management, Assignment, Evaluation &amp; Academic Review Platform
            </p>

            <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Designed and engineered a production-ready academic capstone management platform for the KL University CSE department by Ashrith Namburi. Centralizes student/team assignments, multi-role evaluator workflows, rubric-driven assessments, per-student attendance, review cycle tracking, and administrative evaluation aggregation.
            </p>

            {/* VERIFIED TECH CHIPS */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["React 19", "Vite 8", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "PapaParse", "jsPDF", "React Router 7"].map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-[#082918] border border-emerald-200 dark:border-emerald-900/50 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300"
                >
                  <TechIcon name={t.split(" ")[0]} className="w-3.5 h-3.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS (LIVE DEMO & GITHUB) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open KL CSE Capstone live demo"
                onClick={() => trackLiveDemoClick("kl-cse-capstone-management")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

              <a
                href={capstoneProject?.githubUrl || "https://github.com/reviewportalklu-cse2/capstone"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View KL CSE Capstone repository on GitHub"
                onClick={() => trackGitHubClick("kl-cse-capstone-management")}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-200 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Repository on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* PROBLEM & SOLUTION SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-[#03120A]/90 border border-red-200 dark:border-red-900/30 rounded-2xl p-6 shadow-md space-y-3">
            <h3 className="text-lg font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              The Academic Evaluation Problem
            </h3>
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              Managing senior capstone projects across hundreds of engineering students traditionally relies on fragmented Excel spreadsheets, manual email assignments, and offline paper evaluation sheets.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">❌ Manual team-to-evaluator assignment matching risks errors</li>
              <li className="flex items-center gap-2">❌ Overwriting risk between Guide, Faculty, and Reviewer marks</li>
              <li className="flex items-center gap-2">❌ Lack of real-time administrative visibility into review completion</li>
              <li className="flex items-center gap-2">❌ Inconsistent employee ID formatting in master CSV records</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#03120A]/90 border border-emerald-300 dark:border-emerald-800/40 rounded-2xl p-6 shadow-md space-y-3">
            <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              The Centralized Solution
            </h3>
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              Engineered a unified, web-based Capstone ERP platform powered by Cloud Firestore and deterministic relationship resolution algorithms.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">✓ Role-scoped isolated Firestore evaluation documents</li>
              <li className="flex items-center gap-2">✓ Unified 3-in-1 evaluator login for Guide, Faculty, and Reviewer roles</li>
              <li className="flex items-center gap-2">✓ Real-time Admin Evaluation Control Center with draft/pending tracking</li>
              <li className="flex items-center gap-2">✓ Automated Bulk CSV/XLSX sync with header &amp; ID normalization</li>
            </ul>
          </div>
        </div>

        {/* ROLE-BASED SYSTEM SECTION */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Role-Based Multi-Portal System
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
            Supports 5 distinct operational role portals with unified evaluator identity resolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roleDefinitions.map((rd, idx) => {
              const IconComp = rd.icon;
              return (
                <div key={idx} className={`p-4 rounded-xl border ${rd.color} space-y-2 flex flex-col justify-between`}>
                  <div>
                    <IconComp className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{rd.role}</h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {rd.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE ARCHITECTURE PANEL */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            System &amp; Data Flow Architecture
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
            Click on any architectural block to inspect its technical implementation details.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* ARCHITECTURE FLOW DIAGRAM */}
            <div className="lg:col-span-7 flex flex-col gap-3 text-center">
              <button
                onClick={() => setActiveArchLayer("frontend")}
                className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                  activeArchLayer === "frontend"
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                    : "bg-emerald-50 dark:bg-[#051A0F] text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40"
                }`}
              >
                💻 React 19 Single Page App Layer (Vite 8 + Tailwind CSS)
              </button>
              <div className="text-emerald-600 dark:text-emerald-500 font-bold text-xs">↓</div>

              <button
                onClick={() => setActiveArchLayer("context")}
                className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                  activeArchLayer === "context"
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                    : "bg-emerald-50 dark:bg-[#051A0F] text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40"
                }`}
              >
                🔄 Application DataContext &amp; Global State Engine
              </button>
              <div className="text-emerald-600 dark:text-emerald-500 font-bold text-xs">↓</div>

              <button
                onClick={() => setActiveArchLayer("resolver")}
                className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                  activeArchLayer === "resolver"
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                    : "bg-emerald-50 dark:bg-[#051A0F] text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40"
                }`}
              >
                ⚡ Deterministic Relationship Resolver (utils/relationshipResolver.js)
              </button>

              <div className="flex justify-around text-emerald-600 dark:text-emerald-500 font-bold text-xs">
                <span>↙</span>
                <span>↘</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <button
                  onClick={() => setActiveArchLayer("auth")}
                  className={`p-3 rounded-xl border transition-all ${
                    activeArchLayer === "auth"
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                      : "bg-emerald-100 dark:bg-[#082918] text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800/40"
                  }`}
                >
                  🔐 Firebase Auth Service
                </button>
                <button
                  onClick={() => setActiveArchLayer("firestore")}
                  className={`p-3 rounded-xl border transition-all ${
                    activeArchLayer === "firestore"
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-md"
                      : "bg-emerald-100 dark:bg-[#082918] text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800/40"
                  }`}
                >
                  🔥 Cloud Firestore Store
                </button>
              </div>
            </div>

            {/* ARCHITECTURE LAYER DESCRIPTION CARD */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-sm min-h-[220px] flex flex-col justify-center">
              {activeArchLayer && archDetails[activeArchLayer] && (
                <div className="space-y-3 animate-fade-in">
                  <div className="inline-block px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold">
                    LAYER DETAILS
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {archDetails[activeArchLayer].title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {archDetails[activeArchLayer].desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DETERMINISTIC RELATIONSHIP RESOLUTION & DATA MODEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* DETERMINISTIC RELATIONSHIP RESOLUTION */}
          <div className="lg:col-span-6 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Deterministic Relationship Resolution
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
              Raw dataset imports contain varying identifier formats across spreadsheets. The transformation engine (<code>utils/relationshipResolver.js</code>) executes deterministic string normalization and multi-key matching without fallback errors:
            </p>

            <div className="p-3 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-700 dark:text-emerald-300">
                <span>Normalized Guide IDs:</span>
                <span className="font-bold">G001 = G01 = G1</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-emerald-300">
                <span>Normalized Faculty IDs:</span>
                <span className="font-bold">F001 = F01 = F1</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-emerald-300">
                <span>Normalized Reviewer IDs:</span>
                <span className="font-bold">R001 = R01 = R1</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-emerald-300">
                <span>Team Identifiers:</span>
                <span className="font-bold">T001 → Team T001</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 dark:bg-[#082918] rounded-xl text-xs text-emerald-800 dark:text-emerald-300 font-medium leading-relaxed">
              💡 <strong>Deterministic Engineering:</strong> Matching checks exact Employee ID, Email, Role ID, and Team ID aliases to guarantee zero cross-user identity leakage.
            </div>
          </div>

          {/* FIRESTORE COLLECTIONS DATA MODEL */}
          <div className="lg:col-span-6 bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Verified Cloud Firestore Data Model
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
              12 primary Firestore collections maintain relational integrity across student assignments, rubrics, and isolated evaluator feedback:
            </p>

            <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
              {firestoreCollections.map((col, idx) => (
                <div key={idx} className="p-2 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-lg text-xs">
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block">{col.name}</span>
                  <span className="text-[11px] text-slate-500 dark:text-gray-400 leading-tight block">{col.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BULK DATA SYNCHRONIZATION & SECURITY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* BULK DATA SYNC CENTER */}
          <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Bulk Data Sync Center (CSV &amp; XLSX)
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
              Administrators can bulk sync academic records using PapaParse and SheetJS parser pipelines.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">✓ Automatic CSV / XLSX header alias normalization</li>
              <li className="flex items-center gap-2">✓ Row-level duplicate email &amp; ID detection</li>
              <li className="flex items-center gap-2">✓ Batch atomic Firestore writes with error logs</li>
              <li className="flex items-center gap-2">✓ Exportable evaluation reports via jsPDF AutoTable</li>
            </ul>
          </div>

          {/* SECURITY & AUTHORIZATION */}
          <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 shadow-md space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Security &amp; Role-Based Authorization
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
              Implemented strict session authorization controls to protect academic evaluation integrity.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <li className="flex items-center gap-2">✓ First-login mandatory password change enforcement</li>
              <li className="flex items-center gap-2">✓ Role-scoped React Router route guards</li>
              <li className="flex items-center gap-2">✓ Multi-role evaluator account session management</li>
              <li className="flex items-center gap-2">✓ Zero plaintext passwords saved in database or code</li>
            </ul>
          </div>
        </div>

        {/* CHALLENGES & SOLUTIONS SECTION */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            ⚖️ Verified Engineering Challenges &amp; Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challengesSolutions.map((cs, idx) => (
              <div key={idx} className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/30 rounded-xl space-y-2 text-xs">
                <div className="flex items-start gap-2 text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">{cs.challenge}</strong>
                    <span className="text-[11px] text-slate-600 dark:text-gray-400">{cs.detail}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-400 pt-2 border-t border-slate-200 dark:border-emerald-900/40">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Solution:</strong> {cs.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFIED E2E TESTING AUDIT METRICS */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Pre-Commit E2E Audit Results (Phase XXV Verified)
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
            Empirical runtime statistics from execution of pre-commit audit scripts (<code>verify_phase_xxv_e2e.js</code>).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {verifiedTestAuditResults.map((m, idx) => (
              <div key={idx} className="p-4 bg-slate-50 dark:bg-[#051A0F] border border-slate-200 dark:border-emerald-900/40 rounded-xl text-center">
                <span className="text-xs text-slate-500 dark:text-gray-400 font-semibold block mb-1">{m.label}</span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono block">{m.value}</span>
                <span className="text-[10px] text-slate-400 dark:text-gray-500 block mt-1">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECRUITER-FRIENDLY RESUME BULLETS */}
        <div className="bg-white dark:bg-[#03120A]/90 border border-slate-200 dark:border-emerald-900/40 rounded-2xl p-6 sm:p-8 mb-10 shadow-md space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Recruiter Resume Highlights
          </h3>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-medium">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              <span>Built a production-grade role-based capstone management platform using React 19, Vite 8, Firebase Authentication, and Cloud Firestore.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              <span>Engineered deterministic relationship resolution algorithms across students, teams, projects, and multi-role evaluator assignments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              <span>Implemented rubric-driven evaluation workflows with per-student attendance persistence, save draft/submit lifecycle, and cross-evaluator mark isolation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              <span>Developed a centralized Administrative Evaluation Control Center and CSV/XLSX bulk data synchronization engine using PapaParse and SheetJS.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              <span>Validated system reliability across 31 E2E testing categories using headless browser automation scripts before git integration.</span>
            </li>
          </ul>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="bg-emerald-50 dark:bg-[#051F10] border border-emerald-300 dark:border-emerald-600/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              KL CSE Capstone Management &amp; Evaluation Portal
            </h4>
            <p className="text-xs text-slate-700 dark:text-gray-300">
              Verified full-stack academic project management platform built by Ashrith Namburi.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-300 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Back to Projects</span>
            </Link>

            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open KL CSE Capstone live demo"
              onClick={() => trackLiveDemoClick("kl-cse-capstone-management")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Explore Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={capstoneProject?.githubUrl || "https://github.com/reviewportalklu-cse2/capstone"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View KL CSE Capstone repository on GitHub"
              onClick={() => trackGitHubClick("kl-cse-capstone-management")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-[#03120A] dark:hover:bg-emerald-950/40 text-slate-800 dark:text-gray-200 font-medium text-sm rounded-xl border border-slate-300 dark:border-emerald-900/50 transition-all active:scale-95 shadow-sm"
            >
              <span>Explore GitHub Code</span>
              <GitBranch className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
