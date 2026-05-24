import Link from "next/link";
import { BraneBridgeLogo } from "./logo";
import { Button } from "./ui/button";

export function Topbar() {
  return (
    <div className="bg-background border-b border-border p-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between sm:flex-row flex-col gap-4">
        <Link
          href="/"
          className="hover:opacity-75 transition-all duration-300"
        >
          <BraneBridgeLogo width={160} height={40} />
        </Link>

        <div className="flex items-center gap-8 text-foreground">
          <a
            href="/#process"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How it works
          </a>
          <a
            href="/#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="/#cases"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Case studies
          </a>
          <Link
            href="/portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Button asChild size="sm">
            <a href="/#cta">Get your report</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
