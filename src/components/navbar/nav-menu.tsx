import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useActiveSection } from "@/hooks/useActiveSection";

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
            <a
              href="#home"
              data-active={activeId === "home" ? "true" : undefined}
              aria-current={activeId === "home" ? "true" : undefined}
            >
              Inicio
            </a>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <a
              href="#projects"
              data-active={activeId === "projects" ? "true" : undefined}
              aria-current={activeId === "projects" ? "true" : undefined}
            >
              Proyectos
            </a>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <a
              href="#about"
              data-active={activeId === "about" ? "true" : undefined}
              aria-current={activeId === "about" ? "true" : undefined}
            >
              Sobre mí
            </a>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <a
              href="#contact"
              data-active={activeId === "contact" ? "true" : undefined}
              aria-current={activeId === "contact" ? "true" : undefined}
            >
              Contacto
            </a>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
