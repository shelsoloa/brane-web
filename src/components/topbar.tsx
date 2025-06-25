import Link from "next/link";
import Image from "next/image";

export function Topbar() {
  return (
    <div className="flex items-center justify-between bg-secondary p-8">
      <Link
        href="#hero"
        className="hover:opacity-75 transition-all duration-300"
      >
        <Image
          src="/images/branebridge-logo-green.svg"
          alt="BraneBridge logo"
          width={200}
          height={200}
        />
      </Link>

      <div className="flex items-center w-1/2 justify-between text-primary-foreground">
        <Link href="#services" className="hover:text-primary">
          SERVICES
        </Link>
        <Link href="#agency-about" className="hover:text-primary">
          ABOUT
        </Link>
        <Link href="#contact" className="hover:text-primary">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
