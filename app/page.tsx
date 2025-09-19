import { About, Hero, Projects } from '@/components/sections'

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <Projects />
      <About />
    </div>
  )
}
