import type { Metadata } from "next";
import "@/styles/globals.css";
import { Topbar } from "@/components/topbar";
import { anka_coder } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "BraneBridge Systems",
  description: "Scale with BraneBridge Systems",
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
      </body>
    </html>
  );
}
