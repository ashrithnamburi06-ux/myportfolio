import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Admin Analytics Dashboard | Ashrith Namburi",
  description: "Private visitor telemetry and performance metrics dashboard for portfolio admin.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function AdminAnalyticsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      {children}
    </div>
  );
}
