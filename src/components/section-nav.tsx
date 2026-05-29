import Link from "next/link";

const sections = [
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case studies", href: "#cases" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function SectionNav() {
  return (
    <nav className="sticky top-0 z-30 bg-background border-b border-border px-6">
      <div className="max-w-5xl mx-auto ">
        <ul className="flex items-center gap-6 sm:gap-8 overflow-x-auto py-3.5 text-sm font-medium text-muted-foreground">
          {sections.map((s) => (
            <li key={s.href} className="whitespace-nowrap">
              <Link
                href={s.href}
                className="hover:text-primary transition-colors"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
