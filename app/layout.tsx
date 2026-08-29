import type { Metadata } from "next";
import { Inter, Noto_Sans_Myanmar } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Navbar } from "@/components/layout/Navbar";
import { LocaleProvider } from "@/components/locale/LocaleProvider";
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-sans-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LANN",
  description: "A bilingual career-discovery and learning platform for Myanmar tech learners.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansMyanmar.variable} h-full`}
    >
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "var(--font-sans), var(--font-myanmar)" }}
      >
        {/* strategy="beforeInteractive" hoists this into <head> regardless of placement. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <LocaleProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pb-16 md:pb-0">{children}</main>
              <Footer />
              <MobileNav items={[{ href: "/", label: "Home" }]} />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
