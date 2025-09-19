import { CodeXml } from 'lucide-react'
import Link from 'next/link'

import { GithubLogo, LinkedinLogo } from '@/components/icons'
import { Separator } from '@/components/ui/separator'

const footerLinks = [
  {
    title: 'Inicio',
    href: '#home',
  },
  {
    title: 'Proyectos',
    href: '#projects',
  },
  {
    title: 'Sobre mí',
    href: '#about',
  },
]

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
            <CodeXml className="size-6" />
            jaycodev
          </div>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:jason.vilac@gmail.com"
                className="text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">Jason Vila - {new Date().getFullYear()}</span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/jaycodev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 ease-in-out hover:text-foreground"
            >
              <GithubLogo className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jason-vila"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 ease-in-out hover:text-foreground"
            >
              <LinkedinLogo className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
