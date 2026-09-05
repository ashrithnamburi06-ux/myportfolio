import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { PageViewTracker } from "@/components/PageViewTracker";
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
  metadataBase: new URL("https://myportfolio-eight-ecru-21.vercel.app"),
  title: {
    default: "Ashrith Namburi | Full Stack Developer",
    template: "%s | Ashrith Namburi"
  },
  description: "Official portfolio of Ashrith Namburi, a Full Stack Developer building modern, scalable and user-focused web applications.",
  keywords: [
    "Ashrith Namburi",
    "Ashrith Namburi Portfolio",
    "Ashrith Namburi Developer",
    "Ashrith Namburi Software Developer",
    "Ashrith Namburi Full Stack Developer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "SQL",
    "Python",
    "TypeScript",
    "Web Development"
  ],
  authors: [{ name: "Ashrith Namburi", url: "https://myportfolio-eight-ecru-21.vercel.app" }],
  creator: "Ashrith Namburi",
  publisher: "Ashrith Namburi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app"
  },
  openGraph: {
    title: "Ashrith Namburi | Full Stack Developer",
    description: "Official portfolio of Ashrith Namburi, a Full Stack Developer building modern, scalable and user-focused web applications.",
    url: "https://myportfolio-eight-ecru-21.vercel.app",
    siteName: "Ashrith Namburi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashrith Namburi Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashrith Namburi | Full Stack Developer",
    description: "Official portfolio of Ashrith Namburi, a Full Stack Developer building modern, scalable and user-focused web applications.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png"
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ashrith Namburi",
  "jobTitle": "Full Stack Developer",
  "url": "https://myportfolio-eight-ecru-21.vercel.app/",
  "sameAs": [
    "https://github.com/ashritkrishna",
    "https://linkedin.com/in/ashritkrishna",
    "https://www.instagram.com/__ashrith_namburi_06/"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "SQL",
    "Python",
    "TypeScript",
    "Full Stack Web Development"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "KL University"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ashrith Namburi",
  "url": "https://myportfolio-eight-ecru-21.vercel.app/",
  "publisher": {
    "@type": "Person",
    "name": "Ashrith Namburi",
    "url": "https://myportfolio-eight-ecru-21.vercel.app/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${caveat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#020805] text-slate-900 dark:text-white antialiased selection:bg-emerald-500 selection:text-black min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <ExitIntentModal />
          <PageViewTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

