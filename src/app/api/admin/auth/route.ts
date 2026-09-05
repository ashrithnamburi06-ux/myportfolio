import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Ashrit@Analytics2026";
const AUTH_COOKIE_NAME = "admin_session";
const AUTH_TOKEN_VALUE = "token_ashrith_admin_verified_2026";

export async function POST(request: Request) {
  try {
    const { action, password } = await request.json();

    if (action === "login") {
      if (password === ADMIN_PASSWORD) {
        const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
        response.cookies.set({
          name: AUTH_COOKIE_NAME,
          value: AUTH_TOKEN_VALUE,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24 * 7 // 7 days
        });
        return response;
      } else {
        return NextResponse.json({ success: false, error: "Invalid admin password" }, { status: 401 });
      }
    }

    if (action === "logout") {
      const response = NextResponse.json({ success: true, message: "Logged out" });
      response.cookies.set({
        name: AUTH_COOKIE_NAME,
        value: "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 0
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Authentication request failed" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const isAuthenticated = cookieHeader.includes(`${AUTH_COOKIE_NAME}=${AUTH_TOKEN_VALUE}`);

  if (isAuthenticated) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
