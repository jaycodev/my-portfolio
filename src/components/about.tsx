import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import type { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
              Desarrollador <span className="whitespace-nowrap">Front-end</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Me llamo <strong>Jason Vila</strong> y actualmente estudio{" "}
              <strong>Computación e Informática</strong> en{" "}
              <a
                href="https://www.cibertec.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                CIBERTEC
              </a>
              . Me apasiona la <strong>programación</strong> y la creación de
              aplicaciones bien estructuradas, enfocándome en proyectos{" "}
              <strong>escalables</strong> con tecnologías modernas y manteniendo
              un <strong>código limpio</strong> y buenas prácticas.
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Me motiva seguir aprendiendo,{" "}
              <strong>compartir conocimientos</strong> y construir soluciones
              que realmente funcionen en el mundo real, dejando un impacto
              positivo tanto en los proyectos como en la comunidad de
              desarrolladores.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="https://github.com/jaycodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full">
                  <GithubLogo />
                  Ver Github
                </Button>
              </a>
              <Button variant="outline" className="rounded-full">
                <Download />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <img
        src="/placeholder.svg"
        alt=""
        className="object-cover w-full h-full"
      />
    </div>
  </div>
);
export default About;
