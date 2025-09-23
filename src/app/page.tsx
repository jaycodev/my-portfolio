import { About, Hero, Projects } from '@/components/sections'

export default function Home() {
  return (
    <main className="space-y-10 sm:space-y-16">
      <Hero />
      <Projects />
      <About />
    </main>
  )
}
