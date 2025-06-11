import Link from "next/link";

export function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="border-2 font-bold px-4 py-1 border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          BraneBridge
        </Link>
        <Link href="/" className="underline">
          Services
        </Link>
        <Link href="/" className="underline">
          Cases
        </Link>
        <Link href="/" className="underline">
          About
        </Link>
        <Link href="/" className="underline">
          Contact
        </Link>
      </div>
    </div>
  );
}
