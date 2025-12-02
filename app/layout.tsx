import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Aria Chen — Frontend Developer",
  description:
    "Portfolio for Aria Chen, a frontend developer with 3 years of experience crafting interfaces with React and Angular.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico"
    }
  ],
  openGraph: {
    title: "Aria Chen — Frontend Developer",
    description:
      "Frontend developer specializing in React and Angular, blending adaptable design with scalable engineering.",
    url: "https://agentic-a42a9f71.vercel.app",
    siteName: "Aria Chen — Frontend Developer",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria Chen — Frontend Developer",
    description:
      "Crafting cohesive web experiences with React and Angular for fast-moving teams.",
    creator: "@aria_codes"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-slate-950 text-slate-100 antialiased"
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
