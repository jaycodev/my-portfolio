'use client'

import { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => {
  const activeId = useActiveSection(['home', 'projects', 'about', 'contact'])

  return (
    <NavigationMenu className={cn('data-[orientation=vertical]:items-start', className)} {...props}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#home"
              data-active={activeId === 'home' ? 'true' : undefined}
              aria-current={activeId === 'home' ? 'true' : undefined}
            >
              Inicio
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#projects"
              data-active={activeId === 'projects' ? 'true' : undefined}
              aria-current={activeId === 'projects' ? 'true' : undefined}
            >
              Proyectos
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <Link
              href="#about"
              data-active={activeId === 'about' ? 'true' : undefined}
              aria-current={activeId === 'about' ? 'true' : undefined}
            >
              Sobre mí
            </Link>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkPrimitive asChild>
            <a href="mailto:jason.vilac@gmail.com" target="_blank" rel="noopener noreferrer">
              Contacto
            </a>
          </NavigationMenuLinkPrimitive>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
