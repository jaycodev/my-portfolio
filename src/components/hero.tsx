import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Mail, Zap } from "lucide-react";
import { LinkedinLogo } from "./icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden"
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Badge className="rounded-full border-none">
            <Zap className="fill-current" />
            Desarrollador Front-end
          </Badge>
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          Hey, soy Jason
        </motion.h1>

        <motion.p
          className="mt-6 text-[17px] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
        >
          Estudiante de <strong>Computación e Informática</strong>, apasionado
          por la creación de <strong>aplicaciones web únicas</strong> con diseño
          intuitivo y <strong>código limpio</strong>.
        </motion.p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
          >
            <div className="rounded-full bg-background">
              <motion.a
                href="mailto:jasonvilac@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full text-base">
                  <Mail className="size-4 mr-1" /> Contáctame
                </Button>
              </motion.a>
            </div>

            <div className="rounded-full bg-background">
              <motion.a
                href="https://www.linkedin.com/in/jason-vila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full text-base">
                  <LinkedinLogo className="size-4 mr-1" /> LinkedIn
                </Button>
              </motion.a>
            </div>
          </motion.div>

          <a href="#projects" aria-label="Ir a proyectos">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
            >
              <Button className="rounded-full text-base">
                Descubre mi trabajo <CircleArrowDown className="size-5 ml-1" />
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
