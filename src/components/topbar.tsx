import Link from "next/link";
import { BraneBridgeLogo } from "./logo";
import { Button } from "./ui/button";

export function Topbar() {
  return (
    <div className="bg-black p-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="#hero"
          className="hover:opacity-75 transition-all duration-300"
        >
          <BraneBridgeLogo />
        </Link>

        <div className="flex items-center w-1/2 justify-between text-primary-foreground">
          <Link href="#services" className="hover:text-primary">
            SERVICES
          </Link>
          <Link href="#team" className="hover:text-primary">
            ABOUT US
          </Link>
          <Button asChild>
            <Link href="#contact">GET QUOTE</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
