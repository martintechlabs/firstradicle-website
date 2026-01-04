import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { Layout } from "@/components/Layout";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Radicle - Scalable Apps for No-Code Refugees",
  description:
    "We turn struggling no-code projects into scalable, production-ready apps in 6 weeks. Guaranteed.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${outfit.variable}`}>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Layout>{children}</Layout>
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
