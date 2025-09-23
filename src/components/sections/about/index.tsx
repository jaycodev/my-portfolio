'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Image from 'next/image'
import type { HTMLAttributes } from 'react'

import { GithubLogo } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-10 w-48 h-48 md:w-64 md:h-64', className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image
        src="/images/placeholder.svg"
        alt="Foto de perfil de Jason Vila"
        className="object-cover"
        fill
      />
    </div>
  </div>
)

export function About() {
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="text-foreground">{children}</span>
  )

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative py-25 px-6"
    >
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-12">
          <ProfileImage className="hidden md:block" />

          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              Sobre mí
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Desarrollador <span className="whitespace-nowrap">Full Stack</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Me llamo <Highlight>Jason Vila</Highlight> y actualmente estudio{' '}
              <Highlight>Computación e Informática</Highlight> en{' '}
              <a
                href="https://www.cibertec.edu.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-foreground"
              >
                CIBERTEC
              </a>
              . Me apasiona la <Highlight>programación</Highlight> y la creación de aplicaciones
              bien estructuradas, enfocándome en proyectos <Highlight>escalables</Highlight> con
              tecnologías modernas y manteniendo un <Highlight>código limpio</Highlight> y buenas
              prácticas.
            </p>

            <p className="text-muted-foreground mb-6 text-justify">
              Me motiva seguir <Highlight>aprendiendo</Highlight>,{' '}
              <Highlight>compartir conocimientos</Highlight> y construir
              <Highlight> soluciones reales</Highlight> que dejen un impacto positivo en los
              proyectos y en la <Highlight>comunidad de desarrolladores</Highlight>.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <a href="https://github.com/jaycodev" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">
                  <GithubLogo />
                  Ver Github
                </Button>
              </a>
              <a href="/cv/cv-jason-vila.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">
                  <FileText />
                  Ver CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
