"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DocsPage {
  title: string;
  href: string;
}

export function DocsSidebar({ pages }: { pages: DocsPage[] }) {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh self-start border-r border-sidebar-border md:flex"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((page) => (
                <SidebarMenuItem key={page.href}>
                  <SidebarMenuButton asChild isActive={pathname === page.href}>
                    <Link href={page.href}>{page.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
