import type { Metadata } from "next";
import "@/styles/globals.css";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "BraneBridge | GCP Cost Optimization & Cloud Engineering";
const DESCRIPTION =
  "Cut your GCP bill 15% in 7 days or pay $0. BraneBridge provides cloud cost optimization and engineering for teams spending $20k+/mo on Google Cloud Platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://branebridge.com",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="h-1 bg-primary" aria-hidden="true" />
        <Topbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
