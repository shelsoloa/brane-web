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
        <h1 className="underline">home</h1>
      </div>
    </div>
  );
}
