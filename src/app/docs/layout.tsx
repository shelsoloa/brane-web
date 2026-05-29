import { DocsSidebar } from "@/components/docs-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b border-border px-6">
          <span className="text-sm font-medium text-muted-foreground">
            Documentation
          </span>
        </header>
        <main className="px-6 py-12 sm:px-12">
          <div className="mx-auto max-w-3xl prose prose-neutral">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
