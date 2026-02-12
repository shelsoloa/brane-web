import type { Metadata } from "next";
import "@/styles/globals.css";
import { Topbar } from "@/components/topbar";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BraneBridge | Back-Office Automation for Freight Forwarders",
  description:
    "BraneBridge builds automation for freight forwarding operations in Canada. Document processing, system integration, and workflow automation for mid-sized freight forwarders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Topbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
