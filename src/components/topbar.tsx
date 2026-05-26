import Link from "next/link";
import { BraneBridgeLogo } from "./logo";
import { Button } from "./ui/button";

export function Topbar() {
  return (
    <div className="bg-background border-b border-border p-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between sm:flex-row flex-col gap-4">
        <Link href="/" className="hover:opacity-75 transition-all duration-300">
          <BraneBridgeLogo width={180} height={45} />
        </Link>

        <div className="flex items-center gap-8 text-foreground">
          <Link
            href="/portfolio"
            className="text-base font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Button asChild>
            <a href="/cost-report">Get your report</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
