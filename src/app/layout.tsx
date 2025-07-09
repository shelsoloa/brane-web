import type { Metadata } from "next";
import "@/styles/globals.css";
import { Topbar } from "@/components/topbar";
import { anka_coder } from "@/styles/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "BraneBridge Systems",
  description: "Scale your logistics business with BraneBridge Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anka_coder.className}>
      <body>
        <Topbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
