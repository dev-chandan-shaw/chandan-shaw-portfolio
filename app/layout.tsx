import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Chandan Shaw — Freelance developer for apps, web and backend",
    template: "%s — Chandan Shaw",
  },
  description:
    "Freelance developer for mobile apps, web apps and backends. React Native, Next.js and Angular, Spring Boot + PostgreSQL. Remote worldwide.",
  metadataBase: new URL("https://chandan-shaw-portfolio.vercel.app"),
  openGraph: {
    title: "Chandan Shaw — Apps, web and backend",
    description:
      "Mobile apps, web apps and APIs that ship. FarmFresh ordering, appointment scheduling, dashboards. Remote worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${code.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
