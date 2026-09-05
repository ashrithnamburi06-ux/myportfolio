"use client";

// Reusable analytics helper library for privacy-conscious portfolio telemetry

function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "";
  try {
    let vid = localStorage.getItem("portfolio_vid");
    if (!vid) {
      vid = "v_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      localStorage.setItem("portfolio_vid", vid);
    }
    return vid;
  } catch {
    return "v_anon";
  }
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("portfolio_sid");
    const lastActive = sessionStorage.getItem("portfolio_last_active");
    const now = Date.now();

    // 30 minute session expiry check
    if (sid && lastActive && now - parseInt(lastActive, 10) > 30 * 60 * 1000) {
      sid = null;
    }

    if (!sid) {
      sid = "s_" + Math.random().toString(36).substring(2, 11) + "_" + now.toString(36);
      sessionStorage.setItem("portfolio_sid", sid);
    }

    sessionStorage.setItem("portfolio_last_active", now.toString());
    return sid;
  } catch {
    return "s_anon";
  }
}

export function sendAnalyticsEvent(eventName: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  try {
    const visitorId = getOrCreateVisitorId();
    const sessionId = getOrCreateSessionId();

    const data = JSON.stringify({
      event: eventName,
      visitorId,
      sessionId,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      referrer: document.referrer || "direct",
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      ...payload
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: "application/json" });
      navigator.sendBeacon("/api/analytics/track", blob);
    } else {
      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
        keepalive: true
      }).catch(() => {
        // Fail silently
      });
    }
  } catch {
    // Fail silently to safeguard user experience
  }
}

export function trackPageView(path?: string, title?: string): void {
  sendAnalyticsEvent("page_view", {
    path: path || (typeof window !== "undefined" ? window.location.pathname : "/"),
    title: title || (typeof document !== "undefined" ? document.title : "")
  });
}

export function trackProjectView(projectId: string): void {
  sendAnalyticsEvent("project_view", { projectId });
}

export function trackProjectExplore(projectId: string): void {
  sendAnalyticsEvent("project_explore", { projectId });
}

export function trackLiveDemoClick(projectId: string): void {
  sendAnalyticsEvent("live_demo_click", { projectId });
}

export function trackGitHubClick(projectId: string): void {
  sendAnalyticsEvent("github_click", { projectId });
}

export function trackResumeView(): void {
  sendAnalyticsEvent("resume_view");
}

export function trackResumeDownload(): void {
  sendAnalyticsEvent("resume_download");
}

export function trackContactClick(): void {
  sendAnalyticsEvent("contact_click");
}

export function trackEmailClick(): void {
  sendAnalyticsEvent("email_click");
}

export function trackInstagramClick(): void {
  sendAnalyticsEvent("instagram_click");
}

export function trackLinkedInClick(): void {
  sendAnalyticsEvent("linkedin_click");
}

export function trackExitIntentShown(): void {
  sendAnalyticsEvent("exit_intent_shown");
}

export function trackExitIntentDismissed(): void {
  sendAnalyticsEvent("exit_intent_dismissed");
}

export function trackExitIntentContactClicked(): void {
  sendAnalyticsEvent("exit_intent_contact_clicked");
}
