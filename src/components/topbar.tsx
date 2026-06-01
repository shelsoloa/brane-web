import Link from "next/link";
import { BraneBridgeLogo } from "./logo";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Docs", href: "/docs" },
];

export function Topbar() {
  return (
    <div className="bg-background border-b border-border p-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between sm:flex-row flex-col gap-4">
        <Link href="/" className="hover:opacity-75 transition-all duration-300">
          <BraneBridgeLogo width={180} height={45} />
        </Link>

        <NavigationMenu className="text-scheme-primary-fg">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1">
                  {resources.map((resource) => (
                    <li key={resource.href}>
                      <NavigationMenuLink asChild>
                        <Link href={resource.href}>{resource.label}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#">Clients</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button asChild>
                <Link href="/cost-report">Get your Report</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
