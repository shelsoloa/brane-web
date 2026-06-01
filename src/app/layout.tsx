import type { Metadata } from "next";
import "@/styles/globals.css";
import "highlight.js/styles/github.css";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { Inter, Oxanium } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd, organizationSchema } from "@/components/json-ld";
import { cn } from "@/lib/utils";

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

const TITLE = "BraneBridge | GCP Cost Optimization & Cloud Engineering";
const DESCRIPTION =
  "Cut your GCP bill 15% in 7 days or pay $0. BraneBridge is a Toronto-based cloud team providing GCP cost optimization and engineering for companies spending $20k+/mo on Google Cloud Platform.";

export const metadata: Metadata = {
  metadataBase: new URL("https://branebridge.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://branebridge.com",
    siteName: "BraneBridge",
    locale: "en_CA",
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
    <html
      lang="en"
      className={cn(oxanium.className, "font-sans", oxanium.variable)}
    >
      <body>
        <JsonLd data={organizationSchema} />
        <div className="h-1 bg-primary" aria-hidden="true" />
        <Topbar />
        {children}
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-3P08VK8D34" />
    </html>
  );
}
