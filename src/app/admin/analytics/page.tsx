"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Lock,
  Eye,
  Users,
  Clock,
  MousePointerClick,
  TrendingUp,
  FileText,
  Mail,
  Share2,
  Monitor,
  Smartphone,
  Tablet,
  LogOut,
  RefreshCw,
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { AnalyticsData } from "@/lib/analyticsStore";

export default function AdminAnalyticsPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [loadingAuth, setLoadingAuth] = useState(false);

  const [dateFilter, setDateFilter] = useState<number>(30);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState("");

  // Check auth status on mount
  useEffect(() => {
    fetch("/api/admin/auth")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch(() => setAuthenticated(false));
  }, []);

  const fetchAnalytics = useCallback((days: number) => {
    setLoadingData(true);
    setDataError("");
    fetch(`/api/analytics/query?days=${days}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load analytics");
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          setAnalyticsData(json.data);
        } else {
          setDataError(json.error || "Could not retrieve analytics data");
        }
      })
      .catch((err) => setDataError(err.message))
      .finally(() => setLoadingData(false));
  }, []);

  // Fetch metrics when authenticated or dateFilter changes
  useEffect(() => {
    if (authenticated) {
      fetchAnalytics(dateFilter);
    }
  }, [authenticated, dateFilter, fetchAnalytics]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordInput) return;

    setLoadingAuth(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password: passwordInput })
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setAuthenticated(true);
        setPasswordInput("");
      } else {
        setAuthError(json.error || "Authentication failed");
      }
    } catch {
      setAuthError("Network error during authentication");
    } finally {
      setLoadingAuth(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" })
    });
    setAuthenticated(false);
    setAnalyticsData(null);
  };

  // ---------------------------------------------------------
  // LOGIN SCREEN
  // ---------------------------------------------------------
  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
        <div className="flex items-center gap-3 text-emerald-400 font-medium">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Verifying authentication...</span>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#020805]">
        <div className="w-full max-w-md bg-[#05140b] border border-emerald-900/50 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto mb-5">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-bold text-center text-white tracking-tight mb-2">
            Private Admin Analytics
          </h1>
          <p className="text-xs text-center text-emerald-400/80 mb-6 font-mono">
            Ashrith Namburi Portfolio Telemetry
          </p>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#020805] border border-emerald-900/60 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                autoFocus
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loadingAuth}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition-all text-sm flex items-center justify-center gap-2"
            >
              {loadingAuth ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Access Dashboard</span>
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-center text-gray-500 mt-6 font-mono">
            Protected direct access only. Non-indexed route.
          </p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // DASHBOARD SCREEN
  // ---------------------------------------------------------
  const summary = analyticsData?.summary;
  const timeSeriesEntries = Object.entries(analyticsData?.timeSeries || {}).sort((a, b) => a[0].localeCompare(b[0]));
  const pageEntries = Object.entries(analyticsData?.pages || {}).sort((a, b) => b[1].views - a[1].views);
  const projectEntries = Object.entries(analyticsData?.projects || {});
  const exitIntent = analyticsData?.exitIntent;
  const contact = analyticsData?.contact;
  const resume = analyticsData?.resume;
  const social = analyticsData?.social;

  const totalExitShown = exitIntent?.shown || 0;
  const exitContactClicked = exitIntent?.contactClicked || 0;
  const exitConversion = totalExitShown > 0 ? ((exitContactClicked / totalExitShown) * 100).toFixed(1) : "0.0";

  const formatDuration = (seconds: number) => {
    if (!seconds) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="min-h-screen bg-[#020805] text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER BAR */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-900/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase bg-emerald-950 border border-emerald-800 text-emerald-400">
                Private Admin Dashboard
              </span>
              <span className="text-xs text-gray-400 font-mono">Ashrith Namburi Portfolio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Visitor &amp; Interaction Telemetry
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* DATE RANGE SELECTOR */}
            <div className="flex items-center bg-[#05140b] border border-emerald-900/60 rounded-xl p-1 text-xs">
              {[7, 30, 90, 0].map((days) => (
                <button
                  key={days}
                  onClick={() => setDateFilter(days)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    dateFilter === days
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-emerald-950/40"
                  }`}
                >
                  {days === 0 ? "All Time" : `${days}D`}
                </button>
              ))}
            </div>

            <button
              onClick={() => fetchAnalytics(dateFilter)}
              className="p-2 bg-[#05140b] hover:bg-emerald-950/60 border border-emerald-900/60 rounded-xl text-gray-300 hover:text-white transition-colors"
              title="Refresh telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 bg-red-950/40 hover:bg-red-900/50 border border-red-800/40 text-red-300 rounded-xl text-xs font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {loadingData && !analyticsData && (
          <div className="py-20 text-center text-emerald-400 font-mono flex items-center justify-center gap-3">
            <RefreshCw className="w-6 h-6 animate-spin" />
            <span>Loading visitor analytics data...</span>
          </div>
        )}

        {dataError && (
          <div className="p-4 bg-red-950/40 border border-red-800/50 rounded-2xl text-red-200 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{dataError}</span>
          </div>
        )}

        {analyticsData && (
          <>
            {/* SUMMARY CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* CARD 1: VISITORS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider">Visitors</span>
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  {summary?.totalVisitors || 0}
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  {summary?.uniqueVisitorsCount || 0} unique visitors
                </div>
              </div>

              {/* CARD 2: SESSIONS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider">Sessions</span>
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  {summary?.totalSessions || 0}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  Avg duration: {formatDuration(summary?.avgSessionDurationSeconds || 0)}
                </div>
              </div>

              {/* CARD 3: PAGE VIEWS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Page Views</span>
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  {summary?.totalPageViews || 0}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {summary?.totalSessions
                    ? ((summary.totalPageViews / summary.totalSessions) || 0).toFixed(1)
                    : "0"}{" "}
                  views / session
                </div>
              </div>

              {/* CARD 4: EXIT INTENT CONVERSION */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between text-gray-400 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider">Exit CTA Clicks</span>
                  <MousePointerClick className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">
                  {exitContactClicked}
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  {exitConversion}% exit conversion rate
                </div>
              </div>
            </div>

            {/* REAL DATA EMPTY STATE NOTICE */}
            {summary?.totalVisitors === 0 && (
              <div className="p-6 bg-emerald-950/30 border border-emerald-800/40 rounded-2xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">No analytics data recorded yet</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Real visitor telemetry will populate automatically as visitors browse your portfolio, explore projects, and interact with your resume or contact links.
                </p>
              </div>
            )}

            {/* VISITOR TREND CHART */}
            <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Visitors &amp; Traffic Over Time</span>
                  </h3>
                  <p className="text-xs text-gray-400">Daily visitor telemetry activity</p>
                </div>
              </div>

              {timeSeriesEntries.length === 0 ? (
                <div className="h-40 flex items-center justify-center text-xs text-gray-500 font-mono">
                  No time series telemetry recorded for selected window.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-end gap-2 h-48 pt-6 pb-2 px-2 overflow-x-auto">
                    {timeSeriesEntries.map(([date, item]) => {
                      const maxViews = Math.max(...timeSeriesEntries.map(([, i]) => i.pageViews), 1);
                      const heightPercent = Math.max(10, Math.round((item.pageViews / maxViews) * 100));
                      return (
                        <div key={date} className="flex-1 min-w-[36px] flex flex-col items-center gap-2 group">
                          <div className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.pageViews}
                          </div>
                          <div
                            className="w-full bg-emerald-600/80 group-hover:bg-emerald-400 rounded-t transition-all"
                            style={{ height: `${heightPercent}%` }}
                          />
                          <div className="text-[9px] font-mono text-gray-500 truncate w-full text-center">
                            {date.slice(5)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* TWO COLUMN GRID: PAGE PERFORMANCE & PROJECT INTERACTIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PAGE PERFORMANCE TABLE */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Most Visited Pages</span>
                </h3>

                {pageEntries.length === 0 ? (
                  <div className="py-8 text-center text-xs text-gray-500 font-mono">
                    No page views logged yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-emerald-900/40 text-gray-400 font-mono">
                          <th className="pb-2">Page Path</th>
                          <th className="pb-2 text-right">Views</th>
                          <th className="pb-2 text-right">Unique</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-950">
                        {pageEntries.map(([path, data]) => (
                          <tr key={path} className="hover:bg-emerald-950/20">
                            <td className="py-2.5 font-mono text-emerald-300 font-medium">{path}</td>
                            <td className="py-2.5 text-right text-white font-bold">{data.views}</td>
                            <td className="py-2.5 text-right text-gray-400 font-mono">
                              {data.uniqueVisitors.length}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* PROJECT INTERACTIONS TABLE */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-6 shadow-lg">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                  <span>Project Interaction Metrics</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-emerald-900/40 text-gray-400 font-mono">
                        <th className="pb-2">Project ID</th>
                        <th className="pb-2 text-right">Views</th>
                        <th className="pb-2 text-right">Explore</th>
                        <th className="pb-2 text-right">Demo</th>
                        <th className="pb-2 text-right">GitHub</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-950">
                      {projectEntries.map(([id, p]) => (
                        <tr key={id} className="hover:bg-emerald-950/20">
                          <td className="py-2.5 font-mono text-white font-medium capitalize">
                            {id.replace(/-/g, " ")}
                          </td>
                          <td className="py-2.5 text-right text-emerald-400 font-bold">{p.views}</td>
                          <td className="py-2.5 text-right text-gray-300">{p.exploreClicks}</td>
                          <td className="py-2.5 text-right text-gray-300">{p.liveDemoClicks}</td>
                          <td className="py-2.5 text-right text-gray-300">{p.githubClicks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* THREE COLUMN GRID: RESUME & CONTACT & SOCIAL */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* RESUME METRICS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Resume Actions</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#020805] p-3 rounded-xl border border-emerald-900/30">
                    <span className="block text-[11px] text-gray-400">Page Views</span>
                    <span className="text-xl font-bold text-white">{resume?.views || 0}</span>
                  </div>
                  <div className="bg-[#020805] p-3 rounded-xl border border-emerald-900/30">
                    <span className="block text-[11px] text-gray-400">PDF Downloads</span>
                    <span className="text-xl font-bold text-emerald-400">{resume?.pdfDownloads || 0}</span>
                  </div>
                </div>
              </div>

              {/* CONTACT METRICS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Contact Actions</span>
                </h4>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">Views</span>
                    <span className="text-lg font-bold text-white">{contact?.pageViews || 0}</span>
                  </div>
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">Email Clicks</span>
                    <span className="text-lg font-bold text-white">{contact?.emailClicks || 0}</span>
                  </div>
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">Submissions</span>
                    <span className="text-lg font-bold text-emerald-400">{contact?.formSubmissions || 0}</span>
                  </div>
                </div>
              </div>

              {/* SOCIAL METRICS */}
              <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  <span>Social Clicks</span>
                </h4>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">GitHub</span>
                    <span className="text-lg font-bold text-white">{social?.github || 0}</span>
                  </div>
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">LinkedIn</span>
                    <span className="text-lg font-bold text-white">{social?.linkedin || 0}</span>
                  </div>
                  <div className="bg-[#020805] p-2.5 rounded-xl border border-emerald-900/30">
                    <span className="block text-[10px] text-gray-400">Instagram</span>
                    <span className="text-lg font-bold text-white">{social?.instagram || 0}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DEVICE & TRAFFIC BREAKDOWN */}
            <div className="bg-[#05140b] border border-emerald-900/40 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Monitor className="w-4 h-4 text-emerald-400" />
                <span>Device Category &amp; Traffic Referrers</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-[#020805] p-4 rounded-xl border border-emerald-900/30">
                  <Monitor className="w-6 h-6 text-emerald-400" />
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">Desktop</span>
                    <span className="text-xl font-bold text-white">
                      {analyticsData?.deviceBreakdown?.desktop || 0}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#020805] p-4 rounded-xl border border-emerald-900/30">
                  <Smartphone className="w-6 h-6 text-emerald-400" />
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">Mobile</span>
                    <span className="text-xl font-bold text-white">
                      {analyticsData?.deviceBreakdown?.mobile || 0}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#020805] p-4 rounded-xl border border-emerald-900/30">
                  <Tablet className="w-6 h-6 text-emerald-400" />
                  <div>
                    <span className="block text-xs text-gray-400 font-medium">Tablet</span>
                    <span className="text-xl font-bold text-white">
                      {analyticsData?.deviceBreakdown?.tablet || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
