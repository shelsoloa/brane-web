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
    <nav className="sticky top-0 z-30 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ul className="flex items-center gap-6 sm:gap-8 overflow-x-auto py-3.5 text-sm font-medium text-muted-foreground">
          {sections.map((s) => (
            <li key={s.href} className="whitespace-nowrap">
              <a href={s.href} className="hover:text-primary transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
