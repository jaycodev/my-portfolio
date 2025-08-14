import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
