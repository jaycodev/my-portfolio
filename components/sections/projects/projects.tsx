"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  GithubLogo,
  ReactLogo,
  TypeScriptLogo,
  ViteLogo,
  ShadcnLogo,
  TailwindLogo,
  TanstackLogo,
  SpringBootLogo,
  ThymeleafLogo,
  BootstrapLogo,
  MySQLLogo,
  DotNetCoreLogo,
  SQLServerLogo,
  CloudinaryLogo,
  AngularLogo,
  JavaLogo,
  CSharpLogo,
} from "@/components/icons";
import { motion } from "framer-motion";
import Image from "next/image";

interface Technology {
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border transition-all hover:border-primary/30">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map(({ label, icon: Icon }) => (
            <Badge
              key={label}
              variant="outline"
              className="rounded-full flex items-center gap-1"
            >
              {Icon && <Icon className="size-4" />}
              {label}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="size-4" />
                Código
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BookStudio",
      description:
        "Plataforma web para la gestión y préstamo de libros en bibliotecas, con panel administrativo.",
      image: "/images/projects/bookstudio.webp",
      technologies: [
        { label: "TypeScript", icon: TypeScriptLogo },
        { label: "React", icon: ReactLogo },
        { label: "Vite", icon: ViteLogo },
        { label: "Shadcn UI", icon: ShadcnLogo },
        { label: "Tailwind CSS", icon: TailwindLogo },
        { label: "Tanstack Router", icon: TanstackLogo },
      ],
      liveUrl: "https://bookstudio-dev.vercel.app",
      githubUrl: "https://github.com/jaycodev/bookstudio",
    },
    {
      title: "MediDesk",
      description:
        "Aplicación web para la gestión de citas médicas, con programación en calendario.",
      image: "/images/projects/medidesk.webp",
      technologies: [
        { label: "C#", icon: CSharpLogo },
        { label: ".NET Core", icon: DotNetCoreLogo },
        { label: "SQL Server", icon: SQLServerLogo },
        { label: "Bootstrap", icon: BootstrapLogo },
        { label: "Cloudinary", icon: CloudinaryLogo },
      ],
      githubUrl: "https://github.com/jaycodev/medidesk",
    },
    {
      title: "CodeLoop",
      description:
        "Plataforma online para cursos dirigida a estudiantes, que permite la administración de contenidos.",
      image: "/images/projects/codeloop.webp",
      technologies: [
        { label: "TypeScript", icon: TypeScriptLogo },
        { label: "Angular", icon: AngularLogo },
        { label: "Java", icon: JavaLogo },
        { label: "Spring Boot", icon: SpringBootLogo },
        { label: "Tailwind CSS", icon: TailwindLogo },
        { label: "MySQL", icon: MySQLLogo },
      ],
      githubUrl: "https://github.com/jaycodev/codeloop",
    },
    {
      title: "Mobilnet",
      description:
        "Aplicación web para el registro RUC10 en redes GPON, que incorpora visualización de datos mediante gráficos.",
      image: "/images/projects/mobilnet.webp",
      technologies: [
        { label: "Java", icon: JavaLogo },
        { label: "Spring Boot", icon: SpringBootLogo },
        { label: "Thymeleaf", icon: ThymeleafLogo },
        { label: "Bootstrap", icon: BootstrapLogo },
        { label: "MySQL", icon: MySQLLogo },
      ],
      liveUrl: "https://mobilnet.onrender.com",
      githubUrl: "https://github.com/jaycodev/mobilnet",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-25 px-6"
    >
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Proyectos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Mis trabajos
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Mostrando algunos de mis mejores proyectos y logros técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
