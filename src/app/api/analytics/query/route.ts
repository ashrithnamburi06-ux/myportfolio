import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/analyticsStore";

const AUTH_COOKIE_NAME = "admin_session";
const AUTH_TOKEN_VALUE = "token_ashrith_admin_verified_2026";

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const isAuthenticated = cookieHeader.includes(`${AUTH_COOKIE_NAME}=${AUTH_TOKEN_VALUE}`);

    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized access. Private admin authorization required." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const daysParam = searchParams.get("days");
    const days = daysParam ? parseInt(daysParam, 10) : 30;

    const data = getAnalyticsSummary(days);
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: "Failed to fetch analytics metrics" }, { status: 500 });
  }
}
