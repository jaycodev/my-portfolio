"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useActiveSection } from "@/hooks/use-active-section";
import Link from "next/link";

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => {
  const activeId = useActiveSection(["home", "projects", "about", "contact"]);

  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#home"
              data-active={activeId === "home" ? "true" : undefined}
              aria-current={activeId === "home" ? "true" : undefined}
            >
              Inicio
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#projects"
              data-active={activeId === "projects" ? "true" : undefined}
              aria-current={activeId === "projects" ? "true" : undefined}
            >
              Proyectos
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#about"
              data-active={activeId === "about" ? "true" : undefined}
              aria-current={activeId === "about" ? "true" : undefined}
            >
              Sobre mí
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#contact"
              data-active={activeId === "contact" ? "true" : undefined}
              aria-current={activeId === "contact" ? "true" : undefined}
            >
              Contacto
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
