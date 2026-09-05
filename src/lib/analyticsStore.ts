import fs from "fs";
import path from "path";

export interface VisitorInfo {
  firstSeen: string;
  lastSeen: string;
  visitCount: number;
}

export interface SessionInfo {
  visitorId: string;
  startTime: string;
  lastActivity: string;
  durationSeconds: number;
  pagesViewed: number;
  deviceType: "Desktop" | "Mobile" | "Tablet";
  browser: string;
  os: string;
  referrer: string;
  entryPage: string;
  exitPage: string;
}

export interface AnalyticsData {
  summary: {
    totalVisitors: number;
    uniqueVisitorsCount: number;
    totalSessions: number;
    totalPageViews: number;
    avgSessionDurationSeconds: number;
  };
  visitors: Record<string, VisitorInfo>;
  sessions: Record<string, SessionInfo>;
  pages: Record<string, { views: number; uniqueVisitors: string[] }>;
  projects: Record<string, { views: number; exploreClicks: number; liveDemoClicks: number; githubClicks: number }>;
  resume: { views: number; pdfDownloads: number };
  contact: { pageViews: number; formSubmissions: number; emailClicks: number; ctaClicks: number };
  social: { github: number; linkedin: number; instagram: number };
  exitIntent: { shown: number; dismissed: number; contactClicked: number };
  timeSeries: Record<string, { visitors: number; pageViews: number; sessions: number }>;
  deviceBreakdown: { desktop: number; mobile: number; tablet: number };
  browserBreakdown: Record<string, number>;
  osBreakdown: Record<string, number>;
  referrerBreakdown: Record<string, number>;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "analytics.json");

let memoryStore: AnalyticsData = createEmptyAnalyticsData();

function createEmptyAnalyticsData(): AnalyticsData {
  return {
    summary: {
      totalVisitors: 0,
      uniqueVisitorsCount: 0,
      totalSessions: 0,
      totalPageViews: 0,
      avgSessionDurationSeconds: 0
    },
    visitors: {},
    sessions: {},
    pages: {},
    projects: {
      "kl-cse-capstone-management": { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 },
      "gr-styles": { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 },
      "dealrix": { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 },
      "developer-portfolio": { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 },
      "ai-showcase": { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 }
    },
    resume: { views: 0, pdfDownloads: 0 },
    contact: { pageViews: 0, formSubmissions: 0, emailClicks: 0, ctaClicks: 0 },
    social: { github: 0, linkedin: 0, instagram: 0 },
    exitIntent: { shown: 0, dismissed: 0, contactClicked: 0 },
    timeSeries: {},
    deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
    browserBreakdown: {},
    osBreakdown: {},
    referrerBreakdown: {}
  };
}

function loadData(): AnalyticsData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return { ...createEmptyAnalyticsData(), ...parsed };
    }
  } catch {
    // Fall back to memory store if filesystem is unavailable
  }
  return memoryStore;
}

function saveData(data: AnalyticsData): void {
  memoryStore = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // Fail silently in read-only environments
  }
}

function parseUserAgent(ua: string): { device: "Desktop" | "Mobile" | "Tablet"; browser: string; os: string } {
  let device: "Desktop" | "Mobile" | "Tablet" = "Desktop";
  if (/mobile/i.test(ua)) device = "Mobile";
  else if (/ipad|tablet/i.test(ua)) device = "Tablet";

  let browser = "Other";
  if (/chrome|crios/i.test(ua) && !/edg/i.test(ua)) browser = "Chrome";
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = "Safari";
  else if (/firefox|fxios/i.test(ua)) browser = "Firefox";
  else if (/edg/i.test(ua)) browser = "Edge";

  let os = "Other";
  if (/windows/i.test(ua)) os = "Windows";
  else if (/macintosh|mac os/i.test(ua)) os = "macOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/linux/i.test(ua)) os = "Linux";

  return { device, browser, os };
}

function parseReferrer(referrer: string): string {
  if (!referrer || referrer === "direct") return "Direct";
  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();
    if (host.includes("google")) return "Google";
    if (host.includes("github")) return "GitHub";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("instagram")) return "Instagram";
    if (host.includes("twitter") || host.includes("x.com")) return "Twitter/X";
    return host;
  } catch {
    return "Other";
  }
}

export function recordAnalyticsEvent(
  event: string,
  payload: Record<string, any>,
  headers: { userAgent?: string } = {}
): void {
  const data = loadData();
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];
  const timestamp = now.toISOString();

  const visitorId = (payload.visitorId as string) || "v_anon";
  const sessionId = (payload.sessionId as string) || "s_anon";
  const path = (payload.path as string) || "/";
  const rawReferrer = (payload.referrer as string) || "direct";
  const referrerCategory = parseReferrer(rawReferrer);

  const { device, browser, os } = parseUserAgent(headers.userAgent || "");

  // Update Visitor info
  if (!data.visitors[visitorId]) {
    data.visitors[visitorId] = {
      firstSeen: timestamp,
      lastSeen: timestamp,
      visitCount: 1
    };
    data.summary.uniqueVisitorsCount = Object.keys(data.visitors).length;
  } else {
    data.visitors[visitorId].lastSeen = timestamp;
    data.visitors[visitorId].visitCount += 1;
  }

  // Update Session info
  if (!data.sessions[sessionId]) {
    data.sessions[sessionId] = {
      visitorId,
      startTime: timestamp,
      lastActivity: timestamp,
      durationSeconds: 0,
      pagesViewed: 0,
      deviceType: device,
      browser,
      os,
      referrer: referrerCategory,
      entryPage: path,
      exitPage: path
    };
    data.summary.totalSessions = Object.keys(data.sessions).length;
    data.summary.totalVisitors += 1;

    // Breakdown updates for new session
    data.deviceBreakdown[device.toLowerCase() as "desktop" | "mobile" | "tablet"] =
      (data.deviceBreakdown[device.toLowerCase() as "desktop" | "mobile" | "tablet"] || 0) + 1;
    data.browserBreakdown[browser] = (data.browserBreakdown[browser] || 0) + 1;
    data.osBreakdown[os] = (data.osBreakdown[os] || 0) + 1;
    data.referrerBreakdown[referrerCategory] = (data.referrerBreakdown[referrerCategory] || 0) + 1;
  } else {
    const sess = data.sessions[sessionId];
    sess.lastActivity = timestamp;
    sess.exitPage = path;
    const startMs = new Date(sess.startTime).getTime();
    sess.durationSeconds = Math.max(0, Math.round((now.getTime() - startMs) / 1000));
  }

  // TimeSeries init
  if (!data.timeSeries[dateStr]) {
    data.timeSeries[dateStr] = { visitors: 0, pageViews: 0, sessions: 0 };
  }

  // Handle Event Types
  switch (event) {
    case "page_view": {
      data.summary.totalPageViews += 1;
      data.timeSeries[dateStr].pageViews += 1;
      data.sessions[sessionId].pagesViewed += 1;

      if (!data.pages[path]) {
        data.pages[path] = { views: 0, uniqueVisitors: [] };
      }
      data.pages[path].views += 1;
      if (!data.pages[path].uniqueVisitors.includes(visitorId)) {
        data.pages[path].uniqueVisitors.push(visitorId);
      }

      if (path === "/contact") {
        data.contact.pageViews += 1;
      } else if (path === "/resume") {
        data.resume.views += 1;
      }
      break;
    }

    case "project_view":
    case "project_explore":
    case "live_demo_click":
    case "github_click": {
      const pId = (payload.projectId as string) || "general";
      if (!data.projects[pId]) {
        data.projects[pId] = { views: 0, exploreClicks: 0, liveDemoClicks: 0, githubClicks: 0 };
      }
      if (event === "project_view") data.projects[pId].views += 1;
      if (event === "project_explore") data.projects[pId].exploreClicks += 1;
      if (event === "live_demo_click") data.projects[pId].liveDemoClicks += 1;
      if (event === "github_click") {
        data.projects[pId].githubClicks += 1;
        data.social.github += 1;
      }
      break;
    }

    case "resume_view":
      data.resume.views += 1;
      break;

    case "resume_download":
      data.resume.pdfDownloads += 1;
      break;

    case "contact_click":
      data.contact.ctaClicks += 1;
      break;

    case "email_click":
      data.contact.emailClicks += 1;
      break;

    case "contact_form_submit":
      data.contact.formSubmissions += 1;
      break;

    case "linkedin_click":
      data.social.linkedin += 1;
      break;

    case "instagram_click":
      data.social.instagram += 1;
      break;

    case "exit_intent_shown":
      data.exitIntent.shown += 1;
      break;

    case "exit_intent_dismissed":
      data.exitIntent.dismissed += 1;
      break;

    case "exit_intent_contact_clicked":
      data.exitIntent.contactClicked += 1;
      data.contact.ctaClicks += 1;
      break;
  }

  // Calculate average session duration
  const sessionList = Object.values(data.sessions);
  if (sessionList.length > 0) {
    const totalDuration = sessionList.reduce((acc, s) => acc + (s.durationSeconds || 0), 0);
    data.summary.avgSessionDurationSeconds = Math.round(totalDuration / sessionList.length);
  }

  saveData(data);
}

export function getAnalyticsSummary(days: number = 30): AnalyticsData {
  const data = loadData();
  if (!days || days <= 0) return data;

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split("T")[0];

  // Filter timeSeries
  const filteredTimeSeries: Record<string, { visitors: number; pageViews: number; sessions: number }> = {};
  Object.keys(data.timeSeries).forEach((dateKey) => {
    if (dateKey >= cutoffStr) {
      filteredTimeSeries[dateKey] = data.timeSeries[dateKey];
    }
  });

  return {
    ...data,
    timeSeries: filteredTimeSeries
  };
}
