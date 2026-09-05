import { NextResponse } from "next/server";
import { recordAnalyticsEvent } from "@/lib/analyticsStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userAgent = request.headers.get("user-agent") || "";
    
    if (body && typeof body === "object" && body.event) {
      recordAnalyticsEvent(body.event, body, { userAgent });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    // Fail silently to prevent telemetry errors from breaking the application
    return NextResponse.json({ success: false, error: "Tracking failed silently" }, { status: 200 });
  }
}
