import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Ashrit Krishna | Full Stack Developer",
    template: "%s | Ashrit Krishna"
  },
  description: "Ashrit Krishna is a Full Stack Developer focused on building scalable, reliable and user-focused web applications.",
  keywords: ["Ashrit Krishna", "Full Stack Developer", "Portfolio", "React", "Next.js", "Node.js", "Python", "KL University"],
  authors: [{ name: "Ashrit Krishna" }],
  openGraph: {
    title: "Ashrit Krishna | Full Stack Developer",
    description: "Personal developer portfolio of Ashrit Krishna — Full Stack Developer specializing in scalable, reliable, and user-focused web applications.",
    url: "https://ashritkrishna.dev",
    siteName: "Ashrit Krishna Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashrit Krishna Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${caveat.variable} scroll-smooth`}>
      <body className="bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white antialiased selection:bg-emerald-500 selection:text-black min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
